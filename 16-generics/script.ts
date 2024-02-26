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

const logAndReturn = <T>(value: T): T => {
    return value
}

// using the generic function with different types

const numberResult = logAndReturn<number>(35)
const stringResult = logAndReturn<string>("Hello")
const booleanResult = logAndReturn<boolean>(true)

console.log(numberResult)
console.log(stringResult)
console.log(booleanResult)


// Here is the function overloading Example

// function add(a: number, b: number): number
// function add(a: string, b: string): string
// function add(a: any, b: any): any {
//     return a + b
// }

// const result1: any = add(5, 10)
// const result2: any = add("Hello", "world")


// Here is the function overloading Example with generics

// function add<T>(a: T, b: T): T {
//     return a + b
// }

// const result1: number = add(5, 10)
// const result2: string = add("Hello", "world") 