// In Typescript,an interface is a powerful feature that allows you to define a contract fo an object's shape.It specifies the properties and their types thet an object must have to be considered of that particuler interface type.Interface are primarily used for type-checking during development and do not generate any javascript code at runtime.

interface Person {
    name: string;
    age: number
}

const person: Person = {
    name: "Raza",
    age: 23,
}


// cteate a product object
//? Define an interface or type representing a product with properties for name, price and quiantity.create a product object with the following data:

// Name:"Laptop"
// Price:1000
// Quantity:5


interface Product {
    name: string;
    price: number;
    quantity: number
}

const product1: Product = {
    name: "Laptop",
    price: 1000,
    quantity: 5
}
const product2: Product = {
    name: "Watch",
    price: 800,
    quantity: 10
}



//Calculate tital price
// given the product object from the previous question, write a function called calculateTotalPrice that calculates and return the total price(price * quantity) of the product.


const calculateTotalPrice = (product: Product): number => {
    const { price, quantity } = product
    return price * quantity
}

// call function
console.log("Laptop total price", calculateTotalPrice(product1))
console.log("Watch total price", calculateTotalPrice(product2))