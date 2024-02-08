// Type inference in typescript refers to the ability of typescript compiler to automatically determine and assign types of variables, expression and function return values based on their usage and context in the code.


// example

// let myName = "hasnain"
// myName = 7

// this error show Type 'number' is not assignable to type 'string'


let message = "Hello, TypeScript!"    // the compiler infer the type string for the variable message


const calculateArea = (length: number, width: number) => {
    return length * width
}
// calculateArea function infer the type of number return
console.log(calculateArea(12.5, 8.5))