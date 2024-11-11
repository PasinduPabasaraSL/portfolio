particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 70,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.3,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 90,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "grab"
            },
            "onclick": {
                "enable": false,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 500,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 4600,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.5
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

const messages = [
    "Hi, I'm Pasindu Pabasara 👋",
    "I'm a Software Developer",
    "Code Ninja",
    "Fast Learner",
    "Tech Enthusiast",
];

let i = 0;
let charIndex = 0;
const dynamicTitle = document.getElementById("dynamic-title");

function typeMessage() {
    const currentMessage = messages[i];

    if (charIndex < currentMessage.length) {
        dynamicTitle.textContent += currentMessage.charAt(charIndex);
        charIndex++;
        setTimeout(typeMessage, 100);
    } else {
        setTimeout(deleteMessage, 1200);
    }
}

function deleteMessage() {
    const currentMessage = messages[i];

    if (charIndex > 0) {
        dynamicTitle.textContent = currentMessage.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteMessage, 50);
    } else {
        i = (i + 1) % messages.length;
        charIndex = 0;
        setTimeout(typeMessage, 300);
    }
}

typeMessage();

//my chatbot
document.addEventListener('DOMContentLoaded', function () {
    const chatBtn = document.getElementById('chat-btn');
    const chatModal = document.getElementById('chat-modal');
    const closeBtn = document.getElementById('close-btn');
    const sendBtn = document.getElementById('send-btn');
    const userInput = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');
    const clearBtn = document.getElementById('clear-btn');

    // Function to open the chat modal
    chatBtn.addEventListener('click', () => {
        chatModal.classList.remove('hidden');
    });

    // Function to close the chat modal
    closeBtn.addEventListener('click', () => {
        chatModal.classList.add('hidden');
    });

    // Initialize Web Speech API for Speech Recognition
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    // DOMContentLoaded event for initial greeting
    chatBox.innerHTML += `<div class="mb-2"><strong>Bot:</strong> Hi there! I'm Pasindu's personal assistant. You can ask me anything about Pasindu's personal details, education, skills, and more!</div>`;

    // Handle "Send" button click
    sendBtn.addEventListener('click', function () {
        const userInputValue = userInput.value.trim();
        if (userInputValue) {
            processUserInput(userInputValue);
        }
    });

    // Handle "Speech" button click
    document.getElementById('speech-btn').addEventListener('click', function () {
        recognition.start();
    });

    // Speech Recognition event handler
    recognition.onresult = function (event) {
        const userInputValue = event.results[0][0].transcript;
        userInput.value = userInputValue;
        processUserInput(userInputValue);
    };

    // Process user input and generate bot response
    function processUserInput(input) {
        chatBox.innerHTML += `<div class="mb-2 text-right"><strong>You:</strong> ${input}</div>`;
        const botResponse = getBotResponse(input);
        chatBox.innerHTML += `<div class="mb-2"><strong>Bot:</strong> ${botResponse}</div>`;
        userInput.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    // Function to return predefined responses based on user input
    function getBotResponse(input) {
        input = input.toLowerCase();

        function getTimeBasedGreeting() {
            const currentHour = new Date().getHours(); // Get current hour (0-23)

            if (currentHour >= 5 && currentHour < 12) {
                return "Good morning! How can I assist you today?";
            } else if (currentHour >= 12 && currentHour < 18) {
                return "Good afternoon! How can I assist you today?";
            } else {
                return "Good evening! How can I assist you today?";
            }
        }

        // Custom greeting based on time of day
        const greetings = ["hello", "hi", "hey"];
        for (let greet of greetings) {
            if (input.includes(greet)) {
                return getTimeBasedGreeting();
            }
        }

        // Farewell responses
        const farewells = ["bye", "goodbye"];
        for (let bye of farewells) {
            if (input.includes(bye)) {
                return "Goodbye! Have a great day.";
            }
        }

        // Additional responses based on keywords
        if (input.includes("name")) {
            return "My name is Pasindu Pabasara.";
        } else if (input.includes("education")) {
            return "I am a student at Moratuwa University studying ITM.";
        } else if (input.includes("skills")) {
            return "I am skilled in Java, web development, UI design, and more!";
        } else if (input.includes("portfolio")) {
            return 'You can view my portfolio at <a href="https://pasi-d.me/">pasi-d.me</a>.';
        } else if (input.includes("hobbies") || input.includes("interests")) {
            return "I enjoy coding, learning new technologies, and working on UI designs.";
        } else if (input.includes("how are you") || input.includes("how are u")) {
            return "I'm good, thank you! How about you?";
        } else if (input.includes("fine") || input.includes("good")) {
            return "Glad to hear that! Is there anything you'd like to talk about or ask?";
        }

        return "Sorry, I don't have information on that. Please ask something else!";
    }

    function processUserInput(input) {
        chatBox.innerHTML += `<div class="mb-2 text-right"><strong>You:</strong> ${input}</div>`;

        // Add typing indicator
        const typingIndicator = document.createElement('div');
        typingIndicator.classList.add('mb-2');
        typingIndicator.innerHTML = `<strong>Bot:</strong> 
            <span class="typing-indicator">
                <span class="typing-dot"></span>
                <span class="typing-dot"></span>
                <span class="typing-dot"></span>
            </span>`;
        chatBox.appendChild(typingIndicator);
        chatBox.scrollTop = chatBox.scrollHeight;

        // Simulate delay based on the length of input
        setTimeout(() => {
            typingIndicator.remove(); // Remove the typing indicator

            // Get the bot response and display it
            const botResponse = getBotResponse(input);
            chatBox.innerHTML += `<div class="mb-2"><strong>Bot:</strong> ${botResponse}</div>`;
            userInput.value = '';
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 1000); // Simulate delay (can be dynamic based on input length)
    }


    // Clear Chat Button Functionality
    clearBtn.addEventListener('click', () => {
        // Clear the chatbox content
        chatBox.innerHTML = '';

        // Optionally, clear any stored chat history in localStorage
        localStorage.removeItem('chatHistory');

        // Optionally, re-add an initial bot greeting message
        chatBox.innerHTML += `<div class="mb-2"><strong>Bot:</strong> Hi there! I'm Pasindu's personal assistant. You can ask me anything about Pasindu's personal details, education, skills, and more!</div>`;
    });

});