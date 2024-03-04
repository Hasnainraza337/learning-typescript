// Static properties & Methods



// In typescript, static methods and properties belong to the class itself rather than to instance of the class.By making methods and properties static we can access them directly from the class without needing to create an instance of the class.This is useful for utility functions or properties that don't rely on instance-specific data.


// class Person {
//     constructor(public name: string) { }
// }

// const user: Person = new Person("Raza")

// Example:Math Operations Utility - creating a utility class to perfume various mathematical operations.

class MathOperations {
    public static PI: number = Math.PI

    public static add(a: number, b: number): number {
        return a + b
    }
    public static subtract(a: number, b: number): number {
        return a - b
    }
    public static multiply(a: number, b: number): number {
        return a * b
    }
    public static division(a: number, b: number): number {
        return a / b
    }
    public static modulus(a: number, b: number): number {
        return a % b
    }

}


console.log(MathOperations.PI)    // we can access without creating instance
console.log(MathOperations.add(5, 7))  // we can access without creating instance
console.log(MathOperations.subtract(12, 3))    // we can access without creating instance
console.log(MathOperations.multiply(12, 3))    // we can access without creating instance
console.log(MathOperations.division(12, 3))    // we can access without creating instance
console.log(MathOperations.modulus(12, 3))    // we can access without creating instance