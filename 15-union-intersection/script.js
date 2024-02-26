"use strict";
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
const userInput = (value) => {
    return typeof value === "number" ? value * 2 : value.toUpperCase();
};
console.log(userInput(7));
console.log(userInput("hi"));
// we want to create a function that formats the value passed to it in specific way based on its type
// if the input is a number,it should add a doller sign and format it with two decimal places.
//  if the input is boolean,it should return "yes" for true and "No" for false.
// if the input is a string,it should capitalized the first letter.
const input = (value) => {
    if (typeof value === "number") {
        return `$${value.toFixed(2)}`;
    }
    else if (typeof value === "boolean") {
        return value === true ? "yes" : false;
    }
    else if (typeof value === "string") {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
    else {
        throw new Error("inavild input data");
    }
};
console.log(input(88));
console.log(input(true));
console.log(input("hello"));
const empolyee = {
    name: "Raza",
    age: 24,
    emp_id: 123,
    department: "IT"
};
const myPersomalInfo = {
    name: "Raza",
    age: 24
};
const user = {
    name: "Raza",
    email: "raza@gmail.com",
};
const mylocation = {
    city: "Gojra",
    country: "pakistan",
};
const createUserProfile = (user, location) => {
    return Object.assign(Object.assign({}, user), location);
};
const myCompleteInfo = createUserProfile(user, mylocation);
console.log(myCompleteInfo);
const usera = {
    id: 1,
    name: "Hasnain",
    email: "hasnain@gmail.com"
};
const account = {
    acc_id: 1739,
    type: "Current",
    balance: 500
};
const combinedUseAndrAccount = (user, account) => {
    return Object.assign(Object.assign({}, user), account);
};
const userAccounInfo = combinedUseAndrAccount(usera, account);
console.log(userAccounInfo);
