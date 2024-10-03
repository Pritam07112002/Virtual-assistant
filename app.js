let btn = document.querySelector("#send");
var text;

const SpeakRobot = (message) => {
    let speak_test = new SpeechSynthesisUtterance(message);
    speak_test.rate = 1.0;
    speak_test.pitch = 1.0;
    speak_test.volume = 1.0;
    speak_test.lang = "en-US";
    window.speechSynthesis.speak(speak_test);
}
window.addEventListener("keypress", (event) => {
    if (event.key == "Enter")
    {
        event.preventDefault();
        speak();
    }
})

function speak() {
    text = document.querySelector(".text-area").value;
    // console.log(text);
    //SpeakRobot(text);
    command(text);
}

const Wishme = () => {
    let day = new Date();
    let hours = day.getHours();
    if (hours >= 0 && hours < 12) {
        SpeakRobot("Good Morning. I am Mr. Robo at Your Service");
    }
    else if (hours > 12 && hours < 16) {
        SpeakRobot("Good Afternoon. I am Mr. Robo at Your Service");
    }
    else if (hours >= 16 && hours < 22) {
        SpeakRobot("Good Evening. I am Mr. Robo at Your Service");
    }
    else {
        SpeakRobot("Good Night. I am Mr. Robo at Your Service");
    }
}


const command = (message) => {
    let msg = message.toLowerCase();
    //console.log(message)
    if (msg.includes("hello") || msg.includes("hey") || msg.includes("hi")) {
        SpeakRobot("hi sir, I am Mr. Robo , an intelligent virtual robot ");
    }
    else if (msg.includes("who are you") || msg.includes("tell me about you") || msg.includes("yourself")) {
        SpeakRobot("I am Mr. Robo, A Virtual Speaking robot build by Mr. Pritam Kundu");
    }
    else if (msg.includes("good morning") || msg.includes("good evening") || msg.includes("good night") || msg.includes("good afternoon")) {
        Wishme();
    }
    else if (msg.includes("open youtube")) {
        SpeakRobot("Ok Master, opening youtube");
        window.open("https://www.youtube.com");
    }
    else {
        SpeakRobot("Master,this is what I found regarding " + msg + ",on internet");
        window.open(`https://www.google.com/search?q=${msg}`);
    }
}


// window.onload = () => {
//     Wishme();
// }

// speech recognition part does not supporting....(34- 49)

// let speechIdentifier = window.speechRecognition || window.webkitSpeechRecognition;
// let recognize = new speechIdentifier();
// console.log(recognize);

// btn.addEventListener("click", () => {
//     recognize.start();
// })

// recognize.onresult=(event) => {
//     let transcript = event.results[0][0].transcript;
//     console.log(transcript)
//     para.innerHTML = transcript;
//     command(transcript);
// }
