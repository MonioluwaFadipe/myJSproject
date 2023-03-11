
let str1 = "I Like Learning New Skills Like Node JS. LIKE it!"

let str2 = str1.replace("Like", "Love")

console.log(str2)

/*Replacing all occurence in a string using RegEx.
To do that, we just convert the word to be replaced
into RegEx by adding a forward slash "/" at the 
beginning and end of the word and a "g" at the end as well.
"g" meaans global and it signifies that all the matches should
be found and replaced.
We can also make it ignore case by adding "i". */

let str3 = str1.replace(/Like/gi, "Love")

console.log(str3)

//Removing special characters from a string.
let str4 = "#HGH%2376(*&4HGJ667"

let str5 = str4.replace(/\W/g,"")
console.log(str5)

/* use "d" to remove all digits */
