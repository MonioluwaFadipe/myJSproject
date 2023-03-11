
function AppleDevice(deviceName, deviceOS){
    if (!new.target){
        return `Get an ${deviceName} with ${deviceOS}`
    }
    this.deviceName = deviceName
    this.deviceOS = deviceOS
}

const device1 = AppleDevice("Iphone13", "IOS14")
const device2 = new AppleDevice("Iphone14", "IOS16")

console.log(device1)
console.log(device2)
/*If we call a constructor without the "new" keyword,
the function gets executed, but the object will not be created.

We can modify a constructor so that it performs a function when it
is called without without the "new" keyword and another function when
it is called with the "new" keyword.
*/