//Searching for a specific value in string 

let str1 = "Find the position of @ special character in this string"

//Using indexOf
console.log(str1.indexOf('@'))
console.log(str1.search('@'))

/*The difference between both methods is that RegEx 
expressions are not allowed when using indexOf method*/

console.log(str1.search(/[^A-Za-z0-9 ]/))

/*Another difference is that we can provide a starting
point when using the indexOf method. The same isnt applicable
with the search method*/