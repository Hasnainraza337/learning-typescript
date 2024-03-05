// difference type & interface
// 1.
//use custom types when you need union, intersection, or mapped types. 
//use interfaces when defining objects shapes or classes that  adhere to a contract. 

//2.
// Custom types can use union and intersections for more complex type compositions.
// Interface can extend other interfaces to inherit their members.


// same Interface name treated as one

// Type

type Student = {
    name: string;
    age: number
}

type Studentaddr = {
    city: string;
    country: string
}


type Data = Student & Studentaddr  //  | pipe operator as union and & use as intersection


const studentInfo: Data = {
    name: "Raza",
    age: 23,
    city: "gojra",
    country: "pakistan"

}



// Interface

interface Student1 {
    name: string;
    age: number
}

interface Student1 {
    city: string;
    country: string
}

// same Interface name treated as one

interface Data1 extends Student1 { }  //  in interface we can extend not use equal


const studentInfo1: Data1 = {
    name: "Raza",
    age: 23,
    city: "gojra",
    country: "pakistan"

}


// Interface in class

interface Student2 {
    name: string;
    age: number
}

interface Studentaddrs {
    city: string;
    country: string
}

// same Interface name treated as one

interface Data2 extends Student2, Studentaddrs { }  //  in interface we can extend not use equal

// if we want access interface in class we use implements

class StudentInfo2 implements Data2 {
    constructor(public name: string, public age: number, public city: string, public country: string) { }

}


const info: StudentInfo2 = new StudentInfo2("Raza", 23, "gojra", "pakistan")
