
function Phone(make){
    this.make = make
}

let iPhone = new Phone("Apple")
let nexus = new Phone("Google")

if (Phone.prototype === iPhone.__proto__){
    console.log("Same")
}else{
    console.log("Not same")
}

/*When we create a constructor, it gets its 
very own prototype object which is different from
that of the function. And it can be accessed by using
the ".prototype" property of the constructor.
This prototype will serve as the prototype object for 
all objects that will be created through the constructor.
*/
