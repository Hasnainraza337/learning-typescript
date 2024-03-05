// A typeof guard in Typescript lets you narrow down the type of a variable based on its runtime  value.In Typescript, type narrowing allows you to write type-safety code by ensuring you only operate on the correct type under certain circumstances. This is particularly useful with union types and generic types.


const favHobbies = (hobby: string | string[]) => {

    // return hobby.map(() => { })
    //Property 'map' does not exist on type 'string | string[] '. Property 'map' does not exist on type 'string'.

    if (typeof hobby === "object" && Array.isArray(hobby)) {
        return hobby.map((hobby: string): string => hobby)
    } else {
        return hobby
    }

}


console.log(favHobbies("coding"))
console.log(favHobbies(["coding", "palying", "movies"]))