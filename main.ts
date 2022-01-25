stemrobo.setup()
basic.forever(function () {
    basic.showString("" + (stemrobo.lightSensor(Ldr.Left)))
})
