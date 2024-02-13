"use strict";
// lets add one function inside object.it's more like creating a method in objects
// call signature are typically used inside object type notations to describe the shape of function within object types 
const student1 = {
    name: "Ali",
    age: 20,
    greet: ((country) => `My name is ${student1.name}, I am ${student1.age}years old and I am from ${country}`)
};
const student2 = {
    name: "Ahmad",
    age: 23,
    greet: ((country) => `My name is ${student2.name}, I am ${student2.age}years old and I am from ${country}`)
};
// const introduction = (student1: Student) => {
//     const { name, age } = student1
//     return `My name is ${name}, I am ${age}years old`
// }
// console.log(introduction(student1))
console.log(student1.greet("pakistan"));
console.log(student2.greet("pakistan"));
