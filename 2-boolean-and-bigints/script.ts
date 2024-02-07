// Assignment
// Boolean Type
const isDivisibleBy4and8 = (a: number): Boolean => {
    return a % 4 === 0 && a % 8 === 0
};


console.log(isDivisibleBy4and8(32));

// Bigint Type

let bigNumber: bigint = 9007199254740992n;

let anOtherBigNumber = BigInt("90071992547409925")

let sum: bigint = bigNumber + anOtherBigNumber;
console.log("sum", sum)
let difference: bigint = bigNumber - anOtherBigNumber;
console.log("difference", difference)
let product: bigint = bigNumber * anOtherBigNumber;
console.log("product", product)
let division: bigint = bigNumber / anOtherBigNumber;
console.log("division", division)
