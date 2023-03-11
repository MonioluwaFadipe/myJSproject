
let str1 = "Sunday_Monday_Tuesday"

console.log(str1.split('_'))

/*The split method treats its first argument 
as the separator for the string. So anywhere
it encounters that character in the string, it 
extracts all preceeding characters and puts them in an array.
The separator for this string being used here is "_"*/
//We can also use RegEx
let str2 = "Monday$Tuesday$Wednesday"

console.log(str2.split(/[^A-Za-z0-9]/))