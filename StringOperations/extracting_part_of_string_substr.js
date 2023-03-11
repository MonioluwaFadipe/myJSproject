//substr & substring -> both methods are now depracated
//has two arguments. Beginning index of the extraction to the end.


let str1 = 'Your order number: DEZ-12345-099'

let str2 = "order number: "

console.log(str1.substr(str1.indexOf(str2)+str2.length))

console.log(str1.substring(0, 3)) //0 - 2