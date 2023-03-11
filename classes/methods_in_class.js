
class Car {
    constructor(make, model){
        this.make = make
        this.model = model
    }

    start(){
        console.log("Car starts")
    }

    stop(){
        console.log("Car stops")
    }
}

let car1 = new Car("Honda", "CRV")
car1.start()
car1.stop()