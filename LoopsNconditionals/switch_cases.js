//Also similar to switch cases in other Programming languages
let op = "Addition"

let num1 = 200
let num2 = 50

switch (op) {  //"op" is the key of the switch statement
    case "Addition":
        console.log("Addition is: ", (num1 + num2))
        break

    case "Subtraction":
        console.log("Subtraction is: ", (num1 - num2))
        break

    case "Multioplication":
        console.log("Multiplication is: ", (num1 * num2))
        break

    case "Division": 
        console.log("Division is: ", (num1 / num2))
        break

    default:
        console.log('Invalid operation')
}