
const animal = {
    name: "Animal",
    Jump: function(){
        console.log(`${this.name} jumps`)
    },
    play: function(){
        console.log(`${this.name} plays`)
    }
}

const dog = {
    name:"Jax",
    __proto__: animal
}

const cat = {
    name: "Bella",
    __proto__: animal
}

dog.Jump()
cat.play()

/*It is possible to point the default prototype towards 
another object that isn't the Null protoype.
We can just do this by assigning the __proto__ property
to whatever object we want it to point to.
By doing this, the object inherits all the methods and 
properties of the prototype object.
*/