let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
let speed = 1000
strip.setBrightness(20)
strip.showRainbow(1, 360)
basic.forever(function () {
    strip.rotate(1)
    basic.pause(1000)
    strip.show()
})
