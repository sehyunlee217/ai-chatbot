let socket = io();

const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
const synth = window.speechSynthesis;

// From the Web Speech API documentation https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API

recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

const pulse = document.getElementById("pulse");
const content = document.getElementById("return-text");

document.querySelector("button").addEventListener("click", () => {
    recognition.start();
    console.log("ready to receive speech data");
    pulse.classList.add('pulse-active');
});

recognition.onresult = (e) => {
    const text = e.results[0][0].transcript;
    const confidence = e.results[0][0].confidence;
    socket.emit('msg', text);
};

// list of voices for return

socket.on("res", (arg) => {
    const utterThis = new SpeechSynthesisUtterance();
    utterThis.text = arg;
    voices = synth.getVoices();
    // Google US - Voice Option
    utterThis.voice = voices[144];

    synth.speak(utterThis);
    content.innerHTML = utterThis.text;
    pulse.classList.remove('pulse-active');
});