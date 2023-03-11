//Check if a substring is present in a main string

let str1 = "It always seems impossible until it's done"

let str2 = "always"
let str3 = "Always"

console.log(str1.includes(str2))
console.log(str1.includes(str3)) //the method is case sensitive.

/*Just like indexOf method, this one also has a 
second argument that we can use to decide where
it should start searching from. Its default value
is also 0 */