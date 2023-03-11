
let str1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

console.log(str1.slice(3, 6))

console.log(str1.slice(-4))

console.log(str1.slice(-4, -1))


/*The .slice method takes to arguments
The first argument is the starting index
If its the only argument given, the method
will cut the entire string from that starting
index to the end. The second argument tells
the method where to stop the slicing.
NOTE: The end index is not included in the result.
We can also use negative indexing - counting from
the end.
"Z" in the string above has a negative index of "-1".
All the rules for the slice method also apply for negative indexing.*/