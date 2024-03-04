"use strict";
//  Getter & Setter
// In Typescript classess, you can use getter and setter methods to control the access and modification of class properties. Getter methods alow you to retrieve the value of a property, while setter methods allow you to set the value of a property with additional logic or validation.
// the get method doesn't take any parameters, and the set method takes only one parameter.
class Person {
    constructor(name, hobbies) {
        this.name = name;
        this.hobbies = hobbies;
        // if (this.age > 100 || this.age < 0) {
        //     throw new Error("Age is not valid.")  // this is not valid method for condition
        // }
    }
    // setter method
    set age(age) {
        if (age > 100 || age < 0) {
            throw new Error("Age is not valid.");
        }
        this._age = age;
    }
    // getter method
    get age() {
        if (this._age === undefined) {
            throw new Error("Age is not define.");
        }
        return this._age;
    }
    introduce() {
        return ` Hi, I'm ${this.name} I'm ${this._age} year old. I love ${this.hobbies.join(",")}.`;
    }
}
const person1 = new Person("Raza", ["reading", "playing"]);
person1.age = 12;
console.log(person1.introduce());
console.log(person1.age);
// Question :BankAccount Balance
// Create a TypeScript class BankAccount with a private property balance initialized to 8.
// Implement a getter method balance that returns the current balance.
// Implement a setter method balance that updates the balance if the new value is non- negative. Otherwise, log an error message.
// Instantiate an object of the BankAccount class.
// Use the setter to set the balance to 1000 and use the getter to display the updated balance.
// Try setting a negative balance using the setter. What output do you expect?
class BankAccount {
    constructor() {
        this._balance = 0;
    }
    // current balance get
    get balance() {
        return this._balance;
    }
    // updated  set balance
    set balance(newBalance) {
        if (this.balance + newBalance < 0) {
            throw new Error("cannot set negative balance");
        }
        this._balance = newBalance;
    }
}
const accountBalance = new BankAccount();
accountBalance.balance = 1000;
console.log(accountBalance.balance);
// accountBalance.balance = -100
// console.log(accountBalance.balance)  //error cannot set negative balance
// Question 2: Temperature converter
// Define a TypeScript class Temperature with a private property _celsius set to 0.
// Implement a getter method celsius that returns the temperature in Celsius.
// Implement a setter method celsius that sets the temperature in Celsius.
// Implement a getter method fahrenheit that converts Celsius to Fahrenheit using the formula (C * 9/5) + 32.
// Implement a setter method fahrenheit that converts Fahrenheit to Celsius using the formula (F-32) 5/9.
// Create an instance of the Temperature class.
// Use the setter to set the temperature in Celsius to 25 and then use the getter for Fahrenheit. What Fahrenheit value do you expect?
// Use the setter to set the temperature in Fahrenheit to 90.6 and then use the getter for Celsius, what Celsius value do you expect?
class Temperature {
    constructor() {
        this._celsius = 0;
    }
    // getter method
    get celsius() {
        return this._celsius;
    }
    // setter method
    set celsius(value) {
        this._celsius = value;
    }
    // getter method fahrenheit
    get fahrenheit() {
        return (this._celsius * 9 / 5) + 32;
    }
    // setter method fahrenheit
    set fahrenheit(value) {
        this._celsius = (value - 32) * 5 / 9;
    }
}
const checkTemperature = new Temperature();
checkTemperature.celsius = 25;
console.log(checkTemperature.fahrenheit);
checkTemperature.fahrenheit = 90.6;
console.log(checkTemperature.celsius);
