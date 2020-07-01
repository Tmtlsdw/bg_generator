let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let random = document.querySelector("#random");

function currentValues() {
    let c1 = color1.value;
    let c2 = color2.value;

    return [c1, c2];
}

function setGradient() {
    let colors = currentValues();
    body.style.background =
        "linear-gradient(to right, "
        + colors[0]
        + ", "
        + colors[1]
        + ")";

    css.textContent = body.style.background + ";";
}

function setGradientToBase() {
    color1.value = "#f54842";
    color2.value = "#f5f242";
}

function rand() {
    return Math.floor(Math.random() * Math.floor(256));
}

function getRandomGradient() {
    let randHex = []
    for (let i = 0; i < 2; i++) {
        let firstTwoDigits = rand();
        let secondTwoDigits = rand();
        let thirdTwoDigits = rand();

        randHex[i] = firstTwoDigits.toString(16) + secondTwoDigits.toString(16) + thirdTwoDigits.toString(16);
    }

    color1.value = "#" + randHex[0];
    color2.value = "#" + randHex[1];

    setGradient()

}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
random.addEventListener("click", getRandomGradient);

setGradientToBase();
window.onload = setGradient;