

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

// .filter
const goodGrades = students.filter(student => student.grade >= 75);
console.log(goodGrades);

// .reduce
const bestStudent = students.reduce((top, mark) => mark.grade > top.grade ? mark : top);
console.log(bestStudent);

// forEach
students.forEach(student => console.log(student.grade - 5));

