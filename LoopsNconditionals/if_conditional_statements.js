//Just the same concepts as other programming languages. Only difference is syntax

let a = 100
let b = 500
let c = 500

//if/else statement
if (a >= 50) {
    console.log("a is greater than 50")
} else {
    console.log("a is not greater than 50")
}

//Nested if; dealing with multiple conditions
if ((a > b) && (b > c)) {
    console.log("a is the greater of 3 integers")
} else if (b > c) {
    console.log("b is the greatest of 3 integers")
}   else {
    console.log("c is the greatest of 3 integers")
}