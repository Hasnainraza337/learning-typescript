// Inheritance in TS

// Inheritance allows a class to reuse the functionality of an existing class without rewriting it.
// Inheritance is a mechanism in which one class acquires the property of another class.For example, a child inherits the traits of his/her parents.



class Person {
    name: string;
    age: number;
    hobbies: string[];

    constructor(name: string, age: number, hobbies: string[]) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }


    introduce(): string {
        return ` Hi, I'm ${this.name} I'm ${this.age} year old. I love ${this.hobbies.join(",")}.`
    }
}

class Student extends Person {
    grade: number;

    constructor(name: string, age: number, hobbies: string[], grade: number) {
        super(name, age, hobbies)
        this.grade = grade
    }

    introduce(): string {
        return `${super.introduce()} I'm in grade ${this.grade}.`
    }
}


const person1: Person = new Person("Raza", 15, ["reading", "playing"])
const person2: Person = new Person("Ali", 13, ["painting", "playing"])
const student1: Student = new Student("Ali", 13, ["painting", "playing"], 10)


console.log(person1)
// console.log(person2.introduce())
console.log(student1.introduce())