
function Student(name, age, country, company){ //Start the name of the constructor function with uppercase.
    this["name"] = name
    this["age"] = age
    this["country"] = country
    this["company"] = company
    this["address"] = "221 High St"
}

const s1 = new Student("Mayur Deshmukh", 24, "USA", "Apple")
const s2 = new Student("Shryvaya Deshmukh", 10, "India", "Dezlearn")

console.log(s1)
console.log(s2)