
const fruitsElement = document.getElementById("fruits");
const vegesElement = document.getElementById("vegetables");
const drinksElement = document.getElementById("drinks");

// firstChild using getElementByID
const fruitsFirstChild = fruitsElement.firstElementChild;
fruitsFirstChild.style.backgroundColor = "yellow";

const vegesFirstChild = vegesElement.firstElementChild;
vegesFirstChild.style.backgroundColor= "pink";

const drinksFirstChild = drinksElement.firstElementChild;
drinksFirstChild.style.backgroundColor= "blue";


// lastChild using querySelectorAll
const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "black";
    lastChild.style.color = "white";
})


// nextSibling using getElementById
const fruit = document.getElementById("mango");
const nextSibling = fruit.nextElementSibling;
nextSibling.style.backgroundColor = "green";

// previousSibling using getElementById
const vegetable = document.getElementById("onions");
const previousSibling = vegetable.previousElementSibling;
previousSibling.style.backgroundColor = "red";


// parentElemnt using getElementById
const element = document.getElementById("apple");
const parent = element.parentElement;
parent.style.border = "10px dotted black";


// childrenElements using getElementById
const drinks = document.getElementById("drinks");
const drinksChildren = drinks.children;
Array.from(drinksChildren).forEach(drink => {
    drink.style.border = "5px dotted violet";
})

