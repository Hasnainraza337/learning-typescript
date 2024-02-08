//? optional and default parameters

//* typeScript allows you to optional and default parameters in functiuons.
//*  optional parameters are denoted by appending a ? symbol after teh parametes name
//*  and default  are specified by provideing a default value in the parameter declaration.

//  when function define or declarition in parantesis  define parameters
// for example

// const greet = (name: string, id: number): string => {   //   name and id called parameters
//     return `welcom ${name} your id is ${id}`
// }

// greet("hasnai", 5)  // hasnain and 5 called arguments

// Default Parameters 

const greet = (name: string, id: number = 1): string => {   //   name and id called parameters id is default parameter
    return `welcom ${name} your id is ${id}`
}

greet("hasnai")  // hasnain and 5 called arguments

// optional parameters
const greet1 = (name: string, id?: number): string => {   //   name and id called parameters id is  optional ?symbol denote the optional parameter
    if (id) {
        return `welcom ${name} your id is ${id}`  // then apply condition according function parameters
    } else {
        return `welcom ${name}`
    }
}

greet1("hasnai")  // hasnain and 5 called arguments