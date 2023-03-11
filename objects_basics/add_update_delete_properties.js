
let obj2 = {
    firstName: "Akshay",
    lastName: "Kumar",
    age: 8,
    class: 1
}

//add property
obj2.middleName = "Satish" //we can also use the bracket notation obj2["middleName"] = "Satish"

//update property
obj2.firstName = "Ganesh"

//delete property
delete obj2.class
console.log(obj2)