{
  // Move the motor forword/backward
  stemrobo.moveIt(MOVE.Forward)
  basic.pause(100)
  stemrobo.moveIt(MOVE.Backward)
  basic.pause(100)

  // Rotate the motor left/right
  stemrobo.moveIt(MOVE.Left)
  basic.pause(100)
  stemrobo.moveIt(MOVE.Right)
  basic.pause(100)

  // Read sonar value
  basic.showString("" + (stemrobo.ping(PingUnit.MicroSeconds)))

  // Read light sensor
  basic.showString("" + (stemrobo.lightSensor(Ldr.Left)))
  basic.pause(100)
  basic.showString("" + (stemrobo.lightSensor(Ldr.Right)))
  basic.pause(100)

  // Read line sensor
  basic.showString("" + (stemrobo.readLine(IRSensor.Left)))
  basic.showString("" + (stemrobo.readLine(IRSensor.Left)))

  // Digital read
  basic.showString("" + (stemrobo.digitalRead(Pin.Sv5)))
  basic.showString("" + (stemrobo.digitalRead(Pin.Sv6)))

  // Digital write
  stemrobo.digitalWrite(Pin.Sv5, 1)
  stemrobo.digitalWrite(Pin.Sv6, 0)

}
