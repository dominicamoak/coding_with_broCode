

const students = [
    {name: "Chris", age: 23, isStudent: true, grade: 79},
    {name: "Prince", age: 19, isStudent: true, grade: 75},
    {name: "Evans", age: 25, isStudent: false, grade: 92},
    {name: "Patrick", age: 21, isStudent: true, grade: 84},
    {name: "Elvis", age: 18, isStudent: true, grade: 67}
]

// .map
const studentNames = students.map(student => student.name)
console.log(studentNames);

const studentGrades = students.map(student => student.grade);
console.log(studentGrades);


// .filter
const goodGrades = students.filter(student => student.grade >= 75);
console.log(goodGrades);

const studentStatus = students.filter(student => student.isStudent !== true);
console.log(studentStatus);


// .reduce
const bestStudent = students.reduce((top, mark) => mark.grade > top.grade ? mark : top);
console.log(bestStudent);

const badStudent = students.reduce((low, mark) => mark.grade < low.grade ? mark : low);
console.log(badStudent);


// forEach
students.forEach(student => console.log(student.grade - 5));

