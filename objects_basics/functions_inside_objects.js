
let obj2 = {
    firstName: "Akshay",
    lastName: "Kumar",
    age: 8,
    class: 1,
    displayDetails: function details(){
        console.log(`${obj2.firstName} ${obj2.lastName} is ${obj2.age} years old and he is in ${obj2.class} grade`)
    },
    details2(){
        console.log(`${obj2.firstName} ${obj2.lastName} is ${obj2.age} years old and he is in ${obj2.class} grade`)
    }
}
/*As it can be seen above, we do not necessarily have to 
give the function a name. */

obj2.displayDetails()
obj2.details2()