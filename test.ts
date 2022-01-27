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

  // Read the distance to obstacles
  basic.showString("" + (stembot.ping(SBPingUnit.MicroSeconds)))

  // Detect the light by reading light sensor
  basic.showString("" + (stembot.lightSensor(SBLdr.Left)))
  basic.pause(100)
  basic.showString("" + (stembot.lightSensor(SBLdr.Right)))
  basic.pause(100)

  // Detect the object by reading line sensor
  basic.showString("" + (stembot.readLine(SBIRSensor.Left)))
  basic.showString("" + (stembot.readLine(SBIRSensor.Left)))

  // Digital read on selected pin
  basic.showString("" + (stembot.digitalRead(SBPin.Sv5)))
  basic.showString("" + (stembot.digitalRead(SBPin.Sv6)))

  // Digital write on selected pin
  stembot.digitalWrite(SBPin.Sv5, true)
  stembot.digitalWrite(SBPin.Sv6, false)
}
