let strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB_RGB)
let stopper = strip.range(0, 1) // LED 1
let waiter = strip.range(1, 1)  // LED 2
let goer = strip.range(2, 1)    // LED 3

basic.forever(function () {
    let x = input.acceleration(Dimension.X)
    let y = input.acceleration(Dimension.Y)
    let z = input.acceleration(Dimension.Z)

    let absX = Math.abs(x)
    let absY = Math.abs(y)
    let absZ = Math.abs(z)

    if (absX > absY && absX > absZ && absX > 150) {
        let brightX = Math.map(absX, 150, 1024, 0, 255)
        stopper.showColor(neopixel.rgb(brightX, 0, brightX))
        waiter.showColor(neopixel.colors(NeoPixelColors.Black))
        goer.showColor(neopixel.colors(NeoPixelColors.Black))

    } else if (absY > absX && absY > absZ && absY > 150) {
        let brightY = Math.map(absY, 150, 1024, 0, 255)
        stopper.showColor(neopixel.colors(NeoPixelColors.Black))
        waiter.showColor(neopixel.rgb(0, brightY, brightY))
        goer.showColor(neopixel.colors(NeoPixelColors.Black))

    } else if (absZ > absX && absZ > absY && absZ > 150) {
        let brightZ = Math.map(absZ, 150, 1024, 0, 255)
        stopper.showColor(neopixel.colors(NeoPixelColors.Black))
        waiter.showColor(neopixel.colors(NeoPixelColors.Black))
        goer.showColor(neopixel.rgb(brightZ, 0, brightZ / 2))

    } else {
        stopper.showColor(neopixel.colors(NeoPixelColors.Black))
        waiter.showColor(neopixel.colors(NeoPixelColors.Black))
        goer.showColor(neopixel.colors(NeoPixelColors.Black))
    }

    basic.pause(10)
})