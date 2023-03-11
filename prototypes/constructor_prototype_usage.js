
function Phone(make){
    this.make = make
}

Phone.prototype.getMake = function(){
    return this.make
}

Phone.prototype.switchOn = function(){
    console.log("Device switched On")
}

let iPhone = new Phone("Apple")
let nexus = new Phone("Google")

console.log(iPhone)

//The methods are still available to the objects
console.log(iPhone.getMake())
nexus.switchOn()

/*Using prototypes, we can make all the properties 
and methods of a constructor available to all of its 
objects without making it visible to them. Its more or 
less like Encapsulation
*/