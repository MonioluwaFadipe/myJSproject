//"break" automatically stops the loop once a given condition has been met.
//"continue" discards the current and jumps to the next iteration of the loop without breaking it.
let a = 10

while(a < 100){
    console.log(a)
    a+=10
    if(a == 50){
        break;
    }
}