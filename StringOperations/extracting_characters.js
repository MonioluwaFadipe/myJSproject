
let str = 'PERSERVERANCE'

//console.log(str.charAt(0))

/*The charAt method will provide the
characters at the index provided as its
argument.*/

//console.log(str[0])

/*A string can be treated as an array.
So we can also perform operations that can be
performed on arrays on it. */

/*
for(let i = 0; i <= str.length-1; i++){
    console.log(str[i])
}
*/

//Reversing a string
let temp = ""
for(i=0; i <= str.length-1; i++){
    temp = str[i] + temp //NOTE: The "+" sign is not commutative. ECNAREVRESREP
}

console.log(temp)

