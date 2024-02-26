// Union types allow to specify that a variable can holde values of multiple types. you use the | (pipe) symbol to define a union type.

//In TypeScript, when using a union type, it is essential to ensure that at least one of the types in the union includes all the required properties. Failure to do so will result in a type error during compilation.

//**********************************************************************************//

//  for example input value

// let inputValue = (value: string | number | boolean) => { }

// inputValue("hi")
// inputValue(true)
// inputValue(67)

//**********************************************************************************//

// practical example , we'll create a function that can accept different types of arguments and perform different actions based on the type of input. Suppose we want to create a function that doubles the value if the input is a number, or converts the input to uppercase if it's a string.To achieve this, we can use a union type to allow the function to accept both numbers and strings.

const userInput = (value: string | number): string | number => {
    return typeof value === "number" ? value * 2 : value.toUpperCase()
}


console.log(userInput(7))
console.log(userInput("hi"))



// we want to create a function that formats the value passed to it in specific way based on its type
// if the input is a number,it should add a doller sign and format it with two decimal places.
//  if the input is boolean,it should return "yes" for true and "No" for false.
// if the input is a string,it should capitalized the first letter.


const input = (value: string | number | boolean) => {

    if (typeof value === "number") {
        return `$${value.toFixed(2)}`
    } else if (typeof value === "boolean") {
        return value === true ? "yes" : false
    } else if (typeof value === "string") {
        return value.charAt(0).toUpperCase() + value.slice(1)
    } else {
        throw new Error("inavild input data")
    }
}


console.log(input(88))
console.log(input(true))
console.log(input("hello"))


// Intersection types allow you to combine multiple types into a single type.you use the &(ampersand) symbol to define an intersection type.

type Person = {
    name: string,
    age: number
}
type Employee = {
    emp_id: number,
    department: string
}

type EmployeeDetails = Person & Employee

const empolyee: EmployeeDetails = {
    name: "Raza",
    age: 24,
    emp_id: 123,
    department: "IT"
}

const myPersomalInfo: Person = {
    name: "Raza",
    age: 24
}


// practice:create user profile
// you are given two Typescript types: User and MyLocation. The User type represents basic user information,while the myLocation type contains details about the user's location.create a function called createUserProfile that takes a user object and a MyLocation onject as argument and prints the user's name and the city they are from.


type User = {
    name: string;
    email: string;
}

type MyLocation = {
    city: string;
    country: string
}


const user: User = {
    name: "Raza",
    email: "raza@gmail.com",
}
const mylocation: MyLocation = {
    city: "Gojra",
    country: "pakistan",
}


const createUserProfile = (user: User, location: MyLocation) => {
    return { ...user, ...location }
}


const myCompleteInfo: User & MyLocation = createUserProfile(user, mylocation)

console.log(myCompleteInfo)



//Question:combine User and Account Data

// User: represents basic information with the following properties
// ? id(number):the user unique identity
// ? name(string)
// ? email(string)

// Account: contains details the user's account with the following properties.
// account id:(number)
// account type:(string):(e.g "savings", "current")
// account balance:(number) 


//* your task is to create a function called combinedUseAndrAccount that takes a user object and an account object as arguments and returns a new object represents the combined information of the user and thir account.

// Ensure that the resulting object contains all the properties from both User and Account types.

type UserA = {
    id: number;
    name: string;
    email: string
}

type Account = {
    acc_id: number;
    type: string;
    balance: number
}

const usera: UserA = {
    id: 1,
    name: "Hasnain",
    email: "hasnain@gmail.com"
}
const account: Account = {
    acc_id: 1739,
    type: "Current",
    balance: 500
}

const combinedUseAndrAccount = (user: UserA, account: Account) => {
    return { ...user, ...account }
}

const userAccounInfo: UserA & Account = combinedUseAndrAccount(usera, account)

console.log(userAccounInfo)
