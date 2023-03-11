
const arr = [25, 50, 100, 200, 400, 800]

arr.forEach(function (item, index, array){
    console.log("Index: " + index + " Test " + item + " array: " + array)
})

/*The callback function in the forEach loop
has three arguments that are optional: item(elements of the array),
index(index of the elements), and the array (the entire thing) itself.*/