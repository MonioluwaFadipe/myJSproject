
const a = {}

function b(){

}

//lets add a property on the null prototype object
a.__proto__.Prop1 = "Test Prop1"

/*The property "Prop1" can be accessed directly by all functions 
and objects present in the Global scope. We do not always need to 
through .__proto__.
This is possible because whenever we try to access a property or a method
in a function or object, JS will first look for it in the scope of the 
function/object. If it doesn't find it there, it goes ahead to search for 
it in the prototype of that function/object. If it doesn't find it there, it
goes ahead to search for it in the prototype of the prototype.
So JS will always search for properties and methods in the hierachical scope.
*/

console.log(a.__proto__)
console.log(b.__proto__.__proto__)

if (a.__proto__ === b.__proto__.__proto__){
    console.log("Same")
}else{
    console.log("Not same")
}