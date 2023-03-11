//array: collection of similar data type

let a = [10,20,30,40,50]

let b = ["Sun", "Mon", "Tue", "Wed"]

a[0] = 100
b[1] = "Sat"
a[6] = 21 //we can add an element at any index.
console.log(a)
console.log(b)

console.log(a.length)
/*The length method returns the highest index + 1.
That's why the above code will return 7*/