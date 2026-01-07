

let fruits = ["mango", "banana", "orange", "apple", "pear"];

fruits.forEach(capitalize);
fruits.forEach(displayFruits);

function capitalize(element, index, array) {
    array[index] = element.slice(0, 1).toUpperCase() + element.slice(1);
}

function displayFruits(fruit) {
    console.log(fruit)
}


