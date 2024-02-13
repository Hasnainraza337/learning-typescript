
// Type Aliases using for reuse type
type Product = {
    name: string;
    price: number;    // reuse type
    quantity: number

}

const product1: Product = {
    name: "Laptop",
    price: 10000,
    quantity: 4
}
// const product2: Product = {
//     name: "Mobile",
//     price: 15000,
//     quantity: 5
// }
// const product3: Product = {
//     name: "Watch",
//     price: 4000,
//     quantity: 7
// }


const calculateTotalPrice = (product1: Product) => {
    const { name, price, quantity } = product1
    return `${name} total cost ${price * quantity}`
}

console.log(calculateTotalPrice(product1))