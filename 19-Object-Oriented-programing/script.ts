// How to create a class and also instance of class in TS

// A class in terms of OOP  is a blueprint for creating objects
// a class is like a blueprint for creating similar things.



// In Typescript, there is a convention to use PascalCase (also known as UpperCamelCase) for class names.This means that class name should start with a capital letter and each subsequent word in the class name should also begin with a capital letter.



class Person {
    name: string;
    age: number;
    hobbies: string[];

    constructor(name: string, age: number, hobbies: string[]) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
}


const person1: Person = new Person("Raza", 15, ["reading", "playing"])
const person2: Person = new Person("Ali", 13, ["painting", "playing"])


console.log(person1)
console.log(person2)