"use strict";
// Inheritance in TS
// Inheritance allows a class to reuse the functionality of an existing class without rewriting it.
// Inheritance is a mechanism in which one class acquires the property of another class.For example, a child inherits the traits of his/her parents.
class Person {
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduce() {
        return ` Hi, I'm ${this.name} I'm ${this.age} year old. I love ${this.hobbies.join(",")}.`;
    }
}
class Student extends Person {
    constructor(name, age, hobbies, grade) {
        super(name, age, hobbies);
        this.grade = grade;
    }
    introduce() {
        return `${super.introduce()} I'm in grade ${this.grade}.`;
    }
}
const person1 = new Person("Raza", 15, ["reading", "playing"]);
const person2 = new Person("Ali", 13, ["painting", "playing"]);
const student1 = new Student("Ali", 13, ["painting", "playing"], 10);
console.log(person1);
// console.log(person2.introduce())
console.log(student1.introduce());
