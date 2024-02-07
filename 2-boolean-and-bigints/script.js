"use strict";
// Assignment
// Boolean Type
const isDivisibleBy4and8 = (a) => {
    return a % 4 === 0 && a % 8 === 0;
};
console.log(isDivisibleBy4and8(32));
// Bigint Type
let bigNumber = 9007199254740992n;
let anOtherBigNumber = BigInt("90071992547409925");
let sum = bigNumber + anOtherBigNumber;
console.log("sum", sum);
let difference = bigNumber - anOtherBigNumber;
console.log("difference", difference);
let product = bigNumber * anOtherBigNumber;
console.log("product", product);
let division = bigNumber / anOtherBigNumber;
console.log("division", division);
