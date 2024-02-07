//  any mean that any type using for example

let myName: any = "Hasnain"
myName = true
myName = 15

// this is using in  daynamic data for example form data geting use name age phone etc


// unknown
//? the unknown type is a safer alternative  to any because it still enforces type checking and tyupe safety.


let num: unknown = 7

num = "raza"
num = true

if (typeof num === "number") {
    console.log(num + 9)
} else if (typeof num === "boolean") {
    console.log(num)
}


// this show that future any type use