"use strict";
//* Generics in Typescript allow you to create reusable components or function that can work with multiple data types.
// const logAndReturn = (value: number | string): number | string |boolean => {
//     return value
// }
// const numberResult = logAndReturn(35)
// const stringResult = logAndReturn("Hello")
// const booleanResult = logAndReturn(true)
// console.log(numberResult)
// console.log(stringResult)
// generics function to log and return an input value
const logAndReturn = (value) => {
    return value;
};
// using the generic function with different types
const numberResult = logAndReturn(35);
const stringResult = logAndReturn("Hello");
const booleanResult = logAndReturn(true);
console.log(numberResult);
console.log(stringResult);
console.log(booleanResult);
