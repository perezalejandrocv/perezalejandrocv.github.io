function systemTransition(destination) {

    const system = document.querySelector(".system");
    const line = document.getElementById("line");

    if (system) {
        system.style.opacity = "0";
    }

    line.style.animation = "none";
    line.style.opacity = "0";

    // Primer pulso
    setTimeout(() => {
        line.style.opacity = "1";
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

    // Cambio de pantalla
    setTimeout(() => {
        window.location.href = destination;
    }, 1050);

}