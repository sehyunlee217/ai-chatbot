const express = require('express');
const app = express();
const PORT = process.env.PORT || 3500;
const path = require('path');

app.use('/', express.static(path.join(__dirname, "/views")));
app.use('/', express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "views", "index.html"));
});

app.listen(PORT, () => { console.log(`Server runnning on PORT ${ PORT }`); });

