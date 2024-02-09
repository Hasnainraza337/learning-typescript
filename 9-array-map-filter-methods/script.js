"use strict";
// Map and filter methods in typescript
const numbers = [1, 2, 5, 8, 3, 9];
//! Map Method
// doubling each number
const doubleNumbers = numbers.map((val) => val * 2);
console.log("doubleNumber", doubleNumbers);
// converting numbers to string
const numberToString = numbers.map((val) => val.toString());
console.log("convertString", numberToString);
// uperCase  name of each element of array
const names = ["Ali", "Raza", "Amir"];
const upperCase = names.map((name) => name.toUpperCase());
console.log("uperCase", upperCase);
// square of each numbe of array
const square = numbers.map((num) => num ** 2);
console.log("square", square);
//! Filter methods
// even Number filter
const evenNumber = numbers.filter((even) => even % 2 === 0);
console.log("eveNumber", evenNumber);
// filter the number greater than 3
const grater3 = numbers.filter((val) => val > 3);
console.log("greater than 3", grater3);
// filter a string which length is greater 3
const lengthGreater3 = names.filter((name) => name.length > 3);
console.log("lengthGreater3", lengthGreater3);
// filter the name start with letter A
const letterA = names.filter((name) => name.startsWith("A"));
console.log("letterA", letterA);
