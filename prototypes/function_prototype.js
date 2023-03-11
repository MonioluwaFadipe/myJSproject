/*AT the point of creating a function, an empty object is
automaticallu created alongside it. This empty object is known as 
the prototype object of the function. By default, the empty object
also has a default prototype which is the Null prototype that points to NULL*/

function abc(){

}

console.log(abc.__proto__) //prototype object of the function
console.log(abc.__proto__.__proto__) //prototype object of the prototype object of the function.
console.log(abc.__proto__.__proto__.__proto__) //Points to NULL.