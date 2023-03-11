//objects hold data and methods that can perform actions on such data.
//Unlike other OOP languages, Objects in JS are not bound by classes. The objects are freeform

let obj = {}

//We can assign data after declaring the object

obj.prop1 = "Mayor"
obj.prop2 = "Of London"

console.log("Object is:", obj)

let obj2 = {
    firstName: "Akshay",
    lastName: "Kumar",
    age: 8,
    class: 1
}

obj2.height = 3.2

console.log("Object is:", obj2)

//we can either use the dot notation or square brackets to fetch value of objects.
console.log("Name of the student is: ", obj2["firstName"] + " " + obj2.lastName)

