// In Typescript, tuples are data structure that allows you to store a fixed size collection of elements of different types.They are similar to arrays,but with  a key difference: the types of elements in a tuple are fixed and declared at the time of creation, where arrays can hold elements of the same type, and their size can vary.

// Real life example of using tuples in typescript:

// let's consider a scenario where you want to represent a person's basic information,including their name ,age and whether they have a driver's licience.Using a tuple can be an appropriate choice because these three elements have a specific order and type.


// define a tuple type for persons information
type PersonInfo = readonly [string, number, boolean]


// function to display person information
const displayPersonInfo = (person: PersonInfo) => {

    const [name, age, isLicience] = person
    return `Name: ${name}, Age: ${age},drivingLicience: ${isLicience ? "Yes" : "No"}`
}


// example usage
const person1: PersonInfo = ["Raza", 24, false]
// const person2: PersonInfo = [26, true, "Ali"]  // order matter in tuples
const person2: PersonInfo = ["Ali", 26, true]

console.log(displayPersonInfo(person1))
console.log(displayPersonInfo(person2))



//Question 1:

// you are building a simple e-commerce application and need to store product information. Define a tuple type call ProductInfo to represent each product, containing  the following elements.

// name, price quantity 
// display the information of product by using this tuple type

type ProductInfo = readonly [string, number, number]

const product1: ProductInfo = ["Laptop", 5000, 3]
const product2: ProductInfo = ["Watch", 1400, 8]

const displyProductInfo = (product: ProductInfo) => {
    const [name, price, quantity] = product
    return `Name: ${name} , Price: ${price}, Quantity:${quantity} `
}

console.log(displyProductInfo(product1))
console.log(displyProductInfo(product2))

//Question 2:
//you are creating a student management system and want to keep track of student grades for different subjects.Define a tuple type called subjectGrade to represent a subject and its corresponding grade, containing the following elements.

//Subject name(string)
//Subject grade(number)
//create an array of subjectgrade tuples to store the grades for student in three different  subjects:Math,Englishand science. calculate and display the average grade for the student.

type SubjectGrade = readonly [string, number]

let studentGrade: SubjectGrade[] = [
    ["Math", 90],
    ["English", 85],
    ["Science", 80],
]

const calculateGradeAverage = (grades: SubjectGrade[]) => {

    let totalGrade = grades.reduce((total, grade) => total + grade[1], 0)
    let averageGrade = totalGrade / grades.length
    return averageGrade
}

console.log(calculateGradeAverage(studentGrade))

//Question 3:
// you are working on weather application , and you need to store weather data for different cities. Define a tuple type called weatherData to represent weather information, containg the follwing element.

//city name(string)
//Temperature in celcius(number)
// weater condition(string)
//create a function called displayWeather that takes an array of weather Data and display the weather information for each city in a user friendly format.


type WeatherData = readonly [string, number, string]

let weatherInfo: WeatherData[] = [
    ["Faisalabad", 18, "Sunny"],
    ["Gojra", 23, "Clear"],
    ["Lahore", 12, "Rainy"]
]

const displayWeather = (data: WeatherData[]) => {
    return data.map((info) => {
        const [city, temperature, condition] = info
        return `City: ${city}, Temperature: ${temperature}°C, Condition: ${condition}`;
    }).join("\n")

}


console.log(displayWeather(weatherInfo))
