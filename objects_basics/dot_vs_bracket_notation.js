

let obj2 = {
    firstName: "Akshay",
    lastName: "Kumar",
    age: 8,
    class: 1,
    24: "Hours"
}

/*The dot notation has a limitation. For example,
it will not be able to fetch the value of 24 in the object,
but using square brackets will do the work just fine. */
console.log(obj2[24])

/*When a property name is being passed at runtime,
we can only make use of the square bracket notation.*/
let abc = "age";
console.log(obj2[abc])