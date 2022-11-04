let strip = neopixel.create(DigitalPin.P1, 1, NeoPixelMode.RGB)
basic.forever(function () {
    if (20 >= smarthome.ReadLightIntensity(AnalogPin.P2)) {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
