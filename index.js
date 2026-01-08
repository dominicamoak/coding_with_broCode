

const person1 = {
    name: "Chris",
    age: 24,
    favFood: "Pasta",
    sayHello: function() {console.log("Hello Everyone!")},
    eat: function() {console.log(`${this.name} eats ${this.favFood}`)}
}

const person2 = {
    name: "Prince",
    age: 28,
    favFood: "Rice",
    sayHello: function() {console.log("Hello Everyone!")},
    eat: function() {console.log(`${this.name} eats ${this.favFood}`)}
}

person1.eat();
person2.eat();


