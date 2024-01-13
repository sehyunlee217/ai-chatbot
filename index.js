require("dotenv").config();
const express = require('express');
const PORT = process.env.PORT || 443;
const app = express();
const server = require("http").createServer(app);
// trobleshooting for socket.io servers: https://socket.io/docs/v3/troubleshooting-connection-issues/
const io = require("socket.io")(server, {
    allowEIO3: true
});

const path = require('path');
// 
const OpenAI = require('openai');
const openai = new OpenAI(
    {
        apiKey: process.env.OPENAI_API_KEY
    }
);

// Routes

app.use('/', express.static(path.join(__dirname, "/views")));
app.use('/', express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "views", "index.html"));
});

io.on('connection', socket => {
    socket.on('msg', (text) => {

        console.log(text);

        // OPENAI response
        try {
            const completion = (async () => {
                const completion = await openai.chat.completions.create({
                    model: "gpt-4",
                    messages: [{
                        "role": "user",
                        "content": text
                    }]
                });
                console.log(completion.choices[0].message.content);
                const res = (completion.choices[0].message.content);
                socket.emit("res", res);
            })();
        } catch (err) {
            console.log(err);
        }
    });

    console.log("user connected!");
});

server.listen(PORT, () => { console.log(`Server runnning on PORT ${ PORT }`); })









