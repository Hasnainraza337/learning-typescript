//! objects in typeScripts 

// define type of object data in typescript
const person: {
    name: string;
    age: number;
    isMuslim: boolean;
    address: {
        city: string;
        country: string
    }
} = {
    name: "Raza",
    age: 24,
    isMuslim: true,
    address: {
        city: "Faisalabad",
        country: "Pakistan"
    }
}

console.log(person.address)

//   object of product
const product: {
    name: string;
    price: number;
    quantity: number
} = {
    name: "Laptop",
    price: 10000,
    quantity: 7
}




