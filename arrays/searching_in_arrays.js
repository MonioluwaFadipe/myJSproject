
const planets = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Venus",
    "Neptune",
];

console.log(planets.includes("Earth")) //The includes method is case sensitive.

console.log(planets.indexOf("Venus")) //returns -1 if item is not present, and is also case-sensitive.

console.log(planets.lastIndexOf("Venus")) //Starts searching from the end of the array.