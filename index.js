
const imageContainer = document.getElementById("imageContainer");
const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");

const imagesURL = "/slider";
let imagesArray = [];
const imageIndex = 3;

let image = document.createElement("img");
image.src = `/slider/${imageIndex}.jpg`;

imageContainer.appendChild(image);




