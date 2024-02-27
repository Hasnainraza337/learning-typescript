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
// Here is the function overloading Example
// function add(a: number, b: number): number
// function add(a: string, b: string): string
// function add(a: any, b: any): any {
//     return a + b
// }
// const result1: any = add(5, 10)
// const result2: any = add("Hello", "world")
// when we use generic and non generic type together then while calling the function we need to defined the type in a manner but with non generic we don't.
// Here is the function overloading Example with generics
//multiple type variable
function add(a, b) {
    console.log(typeof a);
    console.log(typeof b);
}
// const result1 = add<number>(5, 10)
// const result1 = add<number>(5, "Hi")  // not work  for this we use multiple type
const result1 = add(5, "Hi");
const result2 = add("Hello", true);
