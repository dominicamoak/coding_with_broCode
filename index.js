
const playBox = document.getElementById("playBox");

const powerUp = 20;
let xAxis = 0;
let yAxis = 0;

document.addEventListener("keydown", event => {

    console.log(event.key);
    if (event.key.startsWith("Arrow")) {
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

