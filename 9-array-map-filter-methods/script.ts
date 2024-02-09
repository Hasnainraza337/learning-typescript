// Map and filter methods in typescript

const numbers: number[] = [1, 2, 5, 8, 3, 9]

//! Map Method

// doubling each number
const doubleNumbers: number[] = numbers.map((val: number) => val * 2)
console.log("doubleNumber", doubleNumbers)

// converting numbers to string

const numberToString: string[] = numbers.map((val: number) => val.toString())
console.log("convertString", numberToString)


// uperCase  name of each element of array
const names: string[] = ["Ali", "Raza", "Amir"]

const upperCase: string[] = names.map((name: string) => name.toUpperCase())
console.log("uperCase", upperCase)

// square of each numbe of array

const square: number[] = numbers.map((num) => num ** 2)
console.log("square", square)


//! Filter methods

// even Number filter
const evenNumber: number[] = numbers.filter((even: number) => even % 2 === 0)
console.log("eveNumber", evenNumber)


// filter the number greater than 3

const grater3: number[] = numbers.filter((val: number) => val > 3)
console.log("greater than 3", grater3)

// filter a string which length is greater 3

const lengthGreater3: string[] = names.filter((name: string) => name.length > 3)
console.log("lengthGreater3", lengthGreater3)

// filter the name start with letter A

const letterA: string[] = names.filter((name) => name.startsWith("A"))

console.log("letterA", letterA)