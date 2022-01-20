## Stemrobo-motor Extension for Microsoft PXT

This library provides a Microsoft PXT package for Blink, see https://rahulrawat17.github.io/rahul-final2/.

### Start Motor 
To start the motor
```blocks
stemrobo.setup()
```

### Set the pin
description of function
```blocks
stemrobo.setPinMode(Mode.Input)
```

### IR Sensor
description of function
```blocks
stemrobo.readLine(IRSensor.Left)
```

### Read Sonar
description of function
```blocks
stemrobo.ping(PingUnit.MicroSeconds)
```

### Move the motor
description of function
```blocks
stemrobo.moveIt(MOVE.Forward)
```

### Digital Read
description of function
```blocks
stemrobo.digitalRead(Pin.Sv5)
```

### Light Sensor
description of function
```blocks
stemrobo.lightSensor()
```

### Digital Write
description of function
```blocks
stemrobo.digitalWrite(Pin.Sv5, 0)
```

## Supported targets

* for PXT/microbit

## License
MIT
