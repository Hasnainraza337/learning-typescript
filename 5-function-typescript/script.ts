// check isPalindrom
// function declarion or define
const isPalindrom = (palin: string): Boolean => {
    let myPalin = palin.split(" ").join(" ")
    return myPalin === palin
}


// function invocation or call
console.log(isPalindrom("12321"))



// calculate Average
// function declarion or define
const calculateAverage = (values: number[]): number => {
    let averageValues = values.reduce((accumulate, current) => accumulate + current, 0)
    let calculateAverage = averageValues / values.length
    return calculateAverage
}


// function invocation or call
console.log(calculateAverage([5, 7, 4, 6, 9]))

//  max number in array
// function declarion or define
const maxNumber = (values: number[]): number => {
    let max = Math.max(...values)
    return max
}


// function invocation or call
console.log(maxNumber([5, 7, 4, 6, 9]))