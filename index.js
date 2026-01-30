
const myImg = document.getElementById("myImg");
const btn = document.getElementById("submitBtn");

btn.addEventListener("click", () => {
    if (myImg.style.visibility === "hidden") {
        myImg.style.visibility = "visible";
        btn.textContent = "Hide";
    } else {
        myImg.style.visibility = "hidden";
        btn.textContent = "Show";
    }
})

