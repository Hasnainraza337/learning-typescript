//! Array in Typescript

//  in Typescript,  we can create and initialize arrays using various approaches

// 1- using square brackets

const numbers: number[] = [1, 2, 3, 4, 5]

// 2- using Array constructor
const numbers1: number[] = new Array(1, 2, 3, 4, 5)

// 3- using array.of methods

const name1: string[] = Array.of("ALi", "Raza", "Muhammad")

console.log(name1[3])
console.log(name1.length)


const value: number[] = [1, 3, 4, 7, 9]    // this is array of number
const value1: string = "Hello world!"    // this is not array is string
const value2: { name: string; age: number } = { name: "raza", age: 24 }    // this is not array is object
const value3: boolean[] = [true, false, true]    // this is array boolean array
const value4: number = 23 // this is not array is number
