# Stemrobo-motor Extension for Microsoft PXT

This library provides a Microsoft PXT package for Blink, see https://rahulrawat17.github.io/rahul-final2/.

## Start the Motor/ Drive the robot

The simplest way to drive the robot is by using the "start motor" blocks. With each of these blocks you specify "move FORWARD" or "move BACKWARD".
```blocks
stemrobo.setup()
basic.forever(function () {
    stemrobo.moveIt(MOVE.Forward)
    basic.pause(100)
    stemrobo.moveIt(MOVE.Backward)
    basic.pause(100)
})
```

You can also spin/rotate the robot with the move LEFT(..) or move RIGHT(..) blocks.
```blocks
stemrobo.setup()
basic.forever(function () {
    stemrobo.moveIt(MOVE.Left)
    basic.pause(100)
    stemrobo.moveIt(MOVE.Right)
    basic.pause(100)
})
```

## Read sonar value

You have mounted the sonar sensor for the Bot you can also use the read sonar in unit µs (..) function to read the distance to obstacles.
```blocks
stemrobo.setup()
basic.forever(function () {
    basic.showString("" + (stemrobo.ping(PingUnit.MicroSeconds)))
})
```

## Read light sensor

Light sensors can be read using light sensor left(..) and light sensor right(..) function.
```blocks
stemrobo.setup()
basic.forever(function () {
    basic.showString("" + (stemrobo.lightSensor(Ldr.Left)))
    basic.pause(100)
    basic.showString("" + (stemrobo.lightSensor(Ldr.Right)))
    basic.pause(100)
})
```

## Read line sensor

The Bot has two line-sensors: left and right. To read the value of the sensors, use left line sensor (..)and right line sensor (..) function.
```blocks
stemrobo.setup()
basic.forever(function () {
    basic.showString("" + (stemrobo.readLine(IRSensor.Left)))
    basic.showString("" + (stemrobo.readLine(IRSensor.Left)))
})

```

## Digital Read Block

Use bots digital read block for read digital signal from pin no Sv5 and Sv6.
> Select PinMode as Input for reading the digital sensor.
```blocks
stemrobo.setup()
basic.forever(function () {
    basic.showString("" + (stemrobo.digitalRead(Pin.Sv5)))
    basic.showString("" + (stemrobo.digitalRead(Pin.Sv6)))
})
```

## Digital Write Block

Use bots digital write block for on/off any output module from pin no Sv5 and Sv6.
> Select PinMode as Output for writing the output digital signal.
```blocks
stemrobo.setup()
basic.forever(function () {
    stemrobo.digitalWrite(Pin.Sv5, 1)
    stemrobo.digitalWrite(Pin.Sv6, 0)
})
```

## Supported targets

* for PXT/microbit

## License
MIT
