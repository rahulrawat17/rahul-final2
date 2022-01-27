{
  // Move the motor forword/backward
    stembot.moveIt(SBMOVE.Forward)
  basic.pause(100)
    stembot.moveIt(SBMOVE.Backward)
  basic.pause(100)

  // Rotate the motor left/right
    stembot.moveIt(SBMOVE.Left)
  basic.pause(100)
    stembot.moveIt(SBMOVE.Right)
  basic.pause(100)

  // Read sonar value
  basic.showString("" + (stembot.ping(SBPingUnit.MicroSeconds)))

  // Read light sensor
  basic.showString("" + (stembot.lightSensor(SBLdr.Left)))
  basic.pause(100)
  basic.showString("" + (stembot.lightSensor(SBLdr.Right)))
  basic.pause(100)

  // Read line sensor
  basic.showString("" + (stembot.readLine(SBIRSensor.Left)))
  basic.showString("" + (stembot.readLine(SBIRSensor.Left)))

  // Digital read
  basic.showString("" + (stembot.digitalRead(SBPin.Sv5)))
  basic.showString("" + (stembot.digitalRead(SBPin.Sv6)))

  // Digital write
  stembot.digitalWrite(SBPin.Sv5, true)
  stembot.digitalWrite(SBPin.Sv6, false)
}
