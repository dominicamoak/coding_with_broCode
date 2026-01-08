

class Person {
    constructor(name, job, role) {
        this.name = name;
        this.job = job;
        this.role = role;
    }

    workplace() {
        console.log(`${this.name} works at ${this.job}`);
    }

    jobRole() {
        console.log(`${this.name} is a ${this.role}`);
    }
}

const person1 = new Person("Chris", "Google", "Software Engineer");
const person2 = new Person("Prince", "Amazon", "Data Analyst");

person1.workplace();
person1.jobRole();

person2.workplace();
person2.jobRole();


