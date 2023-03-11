/*Instead of using the object name repeatedly, we
can make use of the "this" keyword instead */

let obj2 = {
    firstName: "Akshay",
    lastName: "Kumar",
    age: 8,
    class: 1,
    details2(){
        console.log(`${this.firstName} ${this.lastName} is ${this.age} years old and he is in ${this.class} grade`)
    }
}

//Significance of the "This" keyword
obj3 = obj2

obj3.details2()

/*If we assign the object to another variable obj3, 
obj3 will take on all the properties of obj2. If
we make use of the object name of obj2 to fetch the properties
like we've been doing in previous examples and obj2 gets deleted
after being assigned to obj3, trying to fetch obj3 will throw an error.
But if we use the "this" keyword instead of hardcoding the object name, 
the "this" will refer to any object where the function (which in this case
is obj3).
*/