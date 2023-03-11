
let account = {
    name:"Ganesh",
    number:1234,
    amount:100,
    addAmt:function(amt){
        this.amount += amt
    }
}

let accountManager = {
    name:"Tom",
    managingAccountFor:account.name,
    addAmt:account.addAmt
}

accountManager.addAmt.call(account,500)

console.log(account)
console.log(accountManager)

/* 
The "call" keyword allows us to specify the object we want a
particular function to take its context from.
We can also provide arguments of the function to the "call"
method.
*/