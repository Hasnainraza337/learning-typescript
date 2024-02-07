"use strict";
// substring
let longText = "My name hasnain raza from new lahore";
let shortText = longText.slice(0, 10);
console.log(shortText);
// comparsion string
let str1 = "My name ali raza from faisalabad";
let str2 = "My name zarnab safdar from kajla";
let areEqual = str1 === str2;
console.log(areEqual);
// string template
let product = "shirt";
let price = 120;
let stringTemplate = `the product ${product} is priced at ${price} dollers`;
console.log(stringTemplate);
