// assignment questions
// substring
let longText: string = "My name hasnain raza from new lahore";
let shortText: string = longText.slice(0, 10);
console.log(shortText);

// comparsion string
let str1: string = "My name ali raza from faisalabad";
let str2: string = "My name zarnab safdar from kajla";

let areEqual: Boolean = str1 === str2

console.log(areEqual)

// string template
let product: string = "shirt";
let price: number = 120;

let stringTemplate: any = `the product ${product} is priced at ${price} dollers`

console.log(stringTemplate)