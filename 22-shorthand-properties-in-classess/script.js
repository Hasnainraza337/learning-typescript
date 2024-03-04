"use strict";
//                   | Parent class   | Child class | Outside class |
//            Public | Access         | Access      | Access        |
//         Protected | Access         | Access      | Denied        |
//           Private | Access         | Denied      | Denied        |
class Person {
    // public name: string;
    // protected age: number;                     // Person is parent class and Student is child class
    // private hobbies: string[];
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
        // this.name = name;
        // this.age = age;
        // this.hobbies = hobbies;
    }
    introduce() {
        return ` Hi, I'm ${this.name} I'm ${this.age} year old. I love ${this.hobbies.join(",")}.`;
    }
}
class Student extends Person {
    // grade: number;                   // Child class of Person
    constructor(name, age, hobbies, grade) {
        super(name, age, hobbies);
        this.grade = grade;
        // this.grade = grade
    }
    introduce() {
        return `${this.age}`;
        // ${this.hobbies}  error occure bcz hobbis is private
        //  Property 'hobbies' is private and only accessible within class 'Person not access in child class Student'.
    }
}
const person1 = new Person("Raza", 15, ["reading", "playing"]);
const student1 = new Student("Ali", 13, ["painting", "playing"], 10);
console.log(person1.name); // We access name in everywhere because this is public
// console.log(person1.age)  // We can't access age outside class only access in parent class and subclass because this is Protected
console.log(student1.introduce()); // We access age  in sub class not outside class because this is protected
