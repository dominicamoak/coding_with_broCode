

class Person {
    static employees = 0;

    constructor(name, age, job, role) {
        this.name = name;
        this.age = age;
        this.job = job;
        this.role = role;
        Person.employees++;
    }

    workplace() {
        console.log(`${this.name} is ${this.age} years old and works at ${this.job}`);
    }

    jobRole() {
        console.log(`${this.name} is a ${this.role}`);
    }

    set age(newAge) {
        if (typeof newAge === "string") {
            console.error("Age has to be a number")
        } else if (newAge >= 0) {
            this._age = newAge;
        } else {
            console.error("Age cannot be less than 0");
        }
    }

    get age() {
        return this._age;
    }
}

const person1 = new Person("Chris", 43, "Google", "Software Engineer");
const person2 = new Person("Prince", 35, "Amazon", "Data Analyst");

person1.workplace();
person1.jobRole();

person2.workplace();
person2.jobRole();

console.log(`Employees: ${Person.employees}`);
console.log(person1.age);


