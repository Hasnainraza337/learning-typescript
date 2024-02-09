//  array in typescript come with built-in mrthods that allow you to perfome common operations


let fruits: string[] = ["apple", "banna", "orange", "mango"]

// adding elementto an array using push

const newfruit = fruits.push("watermelon")   // after push method in array this show the total number of data in array

console.log(newfruit)

// remove element  to an array

let lastdata = fruits.pop()    //this show last remove data name
console.log(lastdata)


// iterating over elements
// by using various looping 

// using for loop

for (let i = 0; i < fruits.length; i++) {
    console.log("for loop", i) //show the fruit index 
    console.log("for loop", fruits[i]) //show the fruit name
}

// using for...of loop

for (const fruit of fruits) {
    console.log("for of loop", fruit) // value names
}

// using for Each loop

fruits.forEach(fruit => {
    console.log("forEach loop", fruit) // value names
});


