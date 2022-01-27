# Stemrobo-motor Extension for Microsoft PXT

This library provides a Microsoft PXT package for Blink, see https://rahulrawat17.github.io/rahul-final2/.

## Move/Drive the robot

The simplest way to drive the robot is by using the moveIt(...) blocks. With each of these blocks you can specify FORWARD or BACKWARD.
```blocks
stembot.setup()
basic.forever(function () {
    stemrobo.moveIt(SBMOVE.Forward)
    basic.pause(100)
    stemrobo.moveIt(SBMOVE.Backward)
    basic.pause(100)
})
```

You can also spin/rotate the robot with the moveIt(SBMOVE.Left) or moveIt(SBMOVE.Right) function.
```blocks
stemrobo.setup()
basic.forever(function () {
    stemrobo.moveIt(SBMOVE.Left)
    basic.pause(100)
    stemrobo.moveIt(SBMOVE.Right)
    basic.pause(100)
})
```

## Read sonar value

You have mounted the sonar sensor for the Bot, you can also use the ping(...) function to read the distance to obstacles.
```blocks
stemrobo.setup()
basic.forever(function () {
    basic.showString("" + (stemrobo.ping(SBPingUnit.MicroSeconds)))
})
```

## Read light sensor

Light sensors can be read using the lightSensor(...) function. With this block you can specify LEFT or RIGHT.
```blocks
stemrobo.setup()
basic.forever(function () {
    basic.showString("" + (stemrobo.lightSensor(SBLdr.Left)))
    basic.pause(100)
    basic.showString("" + (stemrobo.lightSensor(SBLdr.Right)))
    basic.pause(100)
})
```

## Read line sensor

The Bot has two line-sensors: left and right. To read the value of the sensors, use readLine(...). With this block you can specify LEFT or RIGHT.
```blocks
stemrobo.setup()
basic.forever(function () {
    basic.showString("" + (stemrobo.readLine(SBIRSensor.Left)))
    basic.showString("" + (stemrobo.readLine(SBIRSensor.Left)))
})

```

## Digital Read Block

Use bots digital read block for read digital signal from pin no Sv5 and Sv6.
> Select PinMode as Input for reading the digital sensor.
```blocks
stemrobo.setup()
basic.forever(function () {
    basic.showString("" + (stemrobo.digitalRead(SBPin.Sv5)))
    basic.showString("" + (stemrobo.digitalRead(SBPin.Sv6)))
})
```

## Digital Write Block

Use bots digital write block for on/off any output module from pin no Sv5 and Sv6.
> Select PinMode as Output for writing the output digital signal.
```blocks
stemrobo.setup()
basic.forever(function () {
    stemrobo.digitalWrite(SBPin.Sv5, 1)
    stemrobo.digitalWrite(SBPin.Sv6, 0)
})
```

## Supported targets

* for PXT/microbit

## License
MIT
