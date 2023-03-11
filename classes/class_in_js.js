
function Employee(name, id, email){
    this.name = name
    this.id = id
    this.email = email
}

class User {
    constructor(name, id){
        this.name = name
        this.id = id
    }
} 

let a = new Employee("Mayur", 12345, "mayur@dezlearn.com")
let b = new User("Satish", 5829)

console.log(a)
console.log(b)

//A class and a function constructor perform similar tasks.