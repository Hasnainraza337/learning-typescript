"use strict";
// In Typescript, tuples are data structure that allows you to store a fixed size collection of elements of different types.They are similar to arrays,but with  a key difference: the types of elements in a tuple are fixed and declared at the time of creation, where arrays can hold elements of the same type, and their size can vary.
// function to display person information
const displayPersonInfo = (person) => {
    const [name, age, isLicience] = person;
    return `Name: ${name}, Age: ${age},drivingLicience: ${isLicience ? "Yes" : "No"}`;
};
// example usage
const person1 = ["Raza", 24, false];
// const person2: PersonInfo = [26, true, "Ali"]  // order matter in tuples
const person2 = ["Ali", 26, true];
console.log(displayPersonInfo(person1));
console.log(displayPersonInfo(person2));
const product1 = ["Laptop", 5000, 3];
const product2 = ["Watch", 1400, 8];
const displyProductInfo = (product) => {
    const [name, price, quantity] = product;
    return `Name: ${name} , Price: ${price}, Quantity:${quantity} `;
};
console.log(displyProductInfo(product1));
console.log(displyProductInfo(product2));
let studentGrade = [
    ["Math", 90],
    ["English", 85],
    ["Science", 80],
];
const calculateGradeAverage = (grades) => {
    let totalGrade = grades.reduce((total, grade) => total + grade[1], 0);
    let averageGrade = totalGrade / grades.length;
    return averageGrade;
};
console.log(calculateGradeAverage(studentGrade));
