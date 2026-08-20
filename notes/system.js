const notificationSound = new Audio("bell-notification.mp3");
notificationSound.preload = "auto";

function systemTransition(destination) {

    const system = document.querySelector(".system");
    const line = document.getElementById("line");


    if (system) {
        system.style.opacity = "0";
    }


    line.style.animation = "none";

    line.style.opacity = "0";
    line.style.width = "70%";
    line.style.height = "3px";
    line.style.transform =
        "translate(-50%,-50%) scaleX(1)";


    // SONIDO
    setTimeout(() => {

        notificationSound.currentTime = 0;

        notificationSound.play().catch(() => {});

    }, 430);


    // LÍNEA
    setTimeout(() => {

        line.style.opacity = "1";
        line.style.width = "85%";
        line.style.height = "2px";

    }, 500);


    setTimeout(() => {

        line.style.opacity = "0";

    }, 590);


    // Segundo pulso
    setTimeout(() => {

        line.style.opacity = "1";

    }, 690);


    setTimeout(() => {

        line.style.opacity = "0";

    }, 780);


    // Cambio
    setTimeout(() => {

        window.location.href = destination;

    }, 1400);

}

function typeText(element, text, speed = 50, callback = null) {


if (!element) return;

element.innerHTML = "";

const cursor = document.createElement("span");

cursor.className = "terminal-cursor";

element.appendChild(cursor);

let index = 0;


function writeCharacter() {

    if (index < text.length) {

        const char = text[index];


        if (char === "\n") {

            element.insertBefore(
                document.createElement("br"),
                cursor
            );

        } else {

            element.insertBefore(
                document.createTextNode(char),
                cursor
            );

        }


        index++;

        setTimeout(writeCharacter, speed);

    } else {

        if (callback) {
            callback();
        }

    }

}


writeCharacter();


}

function flashSystemReady(element) {


if (!element) return;

element.classList.add("system-ready-flash");

setTimeout(() => {

    element.classList.remove("system-ready-flash");

}, 390);


}
