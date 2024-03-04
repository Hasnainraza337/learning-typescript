"use strict";
//Abstract classes provide a way to define common properties and methods that multiple derived classes can share. This promotes code reuse and helps establish a common interface for related classes.
// abstract class cannot be instantiated
// abstract classes focus on class inheritance and sharing common functionality, whereas the useContext hook in React focuses on managing global state and allowing components to consume that state.
// abstract class PersObj{
//     name:string;
//     age:number
// }
//  class Person: PersObj={
//     name:"Raza",
//     age:25
// }
//  class Person1: PersObj={
//     name:"Raza",
//     age:25
// }
//  class Person2:PersObj={
//     name:"Raza",
//     age:25
// }
//Example: Shape Hierarchy
//? Suppose you're building a graphics application, and you want to create a hierarchy of different shapes. You can use an abstract base class Shape to define common properties and methods that all shapes share.
// circle, rectangle
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.color = color;
        this.radius = radius;
        this.clculateArea = () => {
            return Math.PI * this.radius * this.radius;
        };
        this.displayArea = () => {
            return console.log(`This is a ${this.color} circle with radius ${this.radius}.`);
        };
    }
}
const circle = new Circle("green", 7);
console.log("calculate area circle", circle.clculateArea());
circle.displayArea();
// Practice Time
//? You need to do the same for Square and Rectangle and if possible use getter and setter methods or static members
class Rectangle extends Shape {
    constructor(color, length, width) {
        super(color);
        this.color = color;
        this.length = length;
        this.width = width;
        this.clculateArea = () => {
            return this.length * this.width;
        };
        this.displayArea = () => {
            return console.log(`This is a ${this.color} reactangle with Area ${this.clculateArea()}.`);
        };
    }
}
class Square extends Shape {
    constructor(color, side) {
        super(color);
        this.color = color;
        this.side = side;
        this.clculateArea = () => {
            return this.side * this.side;
        };
        this.displayArea = () => {
            return console.log(`This is a ${this.color} square with area ${this.clculateArea()}.`);
        };
    }
}
const reactangle = new Rectangle("red", 7, 5);
console.log("calculate area reactangle", reactangle.clculateArea());
reactangle.displayArea();
const square = new Square("blue", 7);
console.log("calculate area square", square.clculateArea());
square.displayArea();
