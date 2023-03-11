//How to find the index of a character in a string

let str1 = "ABCDE"

console.log(str1.indexOf('C'))

//When the character being searched for is not present in the string, "indexOf" returns "-1" as its value

console.log(str1.indexOf('Z'))

//indexOf can also be used for strings of multiple words.

let str2 = "I like learning new skills"
console.log(str2.indexOf("skills")) //I think the method only checks for the index of the first letter

/*What if we have the same word appearing twice? 
The indexOf method, by default, will only check for
the index of the first occurence word that appears and it will 
neglect the reoccuring values.

If we aren't interested in the first occurence, but that of the last,
we make use of the "lastIndexOf" method instead. 
*/
let str3 = "I like learning new skills like Node JS"
console.log(str3.lastIndexOf("like"))

/*Say we want to find the index of an occurence
that isn't the first or last either, we can make 
use of the second argument of the indexOf method*/

let pos = str3.indexOf('like')

console.log(str3.indexOf('like', pos+1))

/*The second argument, "pos+1" tells the indexOf method to start
searching for the occurence of the word from the next 
index after "pos".
The default of the second argument is 0*/

