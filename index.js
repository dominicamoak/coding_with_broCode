
const playBox = document.getElementById("playBox");

const powerUp = 20;
let xAxis = 0;
let yAxis = 0;

document.addEventListener("keydown", event => {
    playBox.style.backgroundColor = "darkgoldenrod";
    playBox.textContent = "😒";
    playBox.style.boxShadow = "5px 5px 20px black";
});

document.addEventListener("keyup", event => {
    playBox.style.backgroundColor = "hsl(240, 58%, 55%)";
    playBox.textContent = "😊";
    playBox.style.boxShadow = "5px 5px 20px white";
});

document.addEventListener("keydown", event => {

    console.log(event.key);
    if (event.key.startsWith("Arrow")) {

        event.preventDefault();

        switch (event.key) {
            case "ArrowUp":
                yAxis -= powerUp;
                break;
            case "ArrowDown":
                yAxis += powerUp;
                break;
            case "ArrowLeft":
                xAxis -= powerUp;
                break;
            case "ArrowRight":
                xAxis += powerUp;
                break;
        }

        playBox.style.top = `${yAxis}px`;
        playBox.style.left = `${xAxis}px`;
    }
});

