const socket = io();

const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

// From the Web Speech API documentation https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API

recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

document.querySelector("button").addEventListener("click", () => {
    recognition.start();
    console.log("ready to receive speech data");
});

recognition.onresult = (e) => {
    const text = e.results[0][0].transcript;
    const confidence = e.results[0][0].confidence;

    socket.emit('msg', text);

    console.log(text);
};