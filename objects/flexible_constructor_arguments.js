
function AppleDevice(deviceName, deviceOS, display){
    this.deviceName = deviceName
    this.deviceOS = deviceOS
    this.display = display
    console.log(`${deviceName} with ${deviceOS}`)
}

const device1 = new AppleDevice()
device1.deviceName = "Iphone14"

console.log(device1)

/*Constructor arguments are also flexible. We
can call a constructor without needing to provide
all the necessary arguments.
*/