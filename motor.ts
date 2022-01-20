/**
* motor functions by Stemrobo co. ltd.
*/

// initial values of outputABuffer and outputBBuffer
let outputABuffer = 0;
let outputBBuffer = 0;

// custom enum for lightSensor function
enum Ldr {
    Left = 0,
    Right = 1
}

// select th IRSensor on the left or right
enum IRSensor {
    //% block="left"
    Left,
    //% block="right"
    Right
}

// select the ping unit
enum PingUnit {
    //% block="μs"
    MicroSeconds,
    //% block="cm"
    Centimeters,
    //% block="inches"
    Inches
}

// custom enum for setPinMode function
enum Mode {
    Input = 0,
    Output = 1,
}

// select the pin on Sv5 or Sv6
enum Pin {
    //% block=Sv5
    Sv5 = 0,
    //% block=Sv6
    Sv6 = 1,
}

// address for MCP23017 (configurable by tying pins 15,16,17 on the mcp23017 high or low)
enum Address {
    //% block=0x20
    A20 = 0x20,
}

// address for MCP23017
let myMCP23017Address = Address.A20

// enum for SetPort
enum SetPort {
    //% block=PORT_A
    A = 0,
    //% block=PORT_B
    B = 256
}

// custom enum for writeNumberToPort function
enum REG_PIO {
    //% block=PORT_A
    A = 4608,
    //% block=PORT_B
    B = 4864
}

// custom enum for moveIt function
enum MOVE {
    //% block="FORWARD"
    Forward = 0,
    //% block="BACKWARD"
    Backward = 1,
    //% block="LEFT"
    Left = 2,
    //% block="RIGHT"
    Right = 3,
    //% block="STOP"
    Stop = 4,
}

/**
* Custom blocks
*/
//% weight=100 color=blue icon="\uf1b9"
namespace stemrobo {

    export function setPortAsOutput(port: SetPort) {
        pins.i2cWriteNumber(myMCP23017Address, port + 0x00, NumberFormat.UInt16BE)
    }
    export function setupSimplePulsingOnAddress(address: Address) {
        myMCP23017Address = address
        setPortAsOutput(SetPort.A)
        // setPortAsOutput(SetPort.B)
    }

    export function setOutputA(bit: number) {
        outputABuffer = outputABuffer | (1 << bit)
    }

    export function clearOutputA(bit: number) {
        let tempMask = 1 << bit
        tempMask = tempMask ^ 0B11111111
        outputABuffer = outputABuffer & tempMask
    }

    export function writeNumberToPort(port: REG_PIO, value: number) {
        pins.i2cWriteNumber(myMCP23017Address, port + value, NumberFormat.UInt16BE)
    }

    export function updateOutputA() {
        writeNumberToPort(4608, outputABuffer)
    }

    //% block="start motor"
    export function setup(): void {
        setupSimplePulsingOnAddress(Address.A20);
        //setPortAsOutput(SetPort.A);
    }
    //% block="Set pinMode $Mode"
    export function setPinMode(mode: Mode): void {
        if (mode == 1) {
            setupSimplePulsingOnAddress(Address.A20);
            //setPortAsOutput(SetPort.A);
        }
    }

    //% block="%sensor|line sensor"
    export function readLine(sensor: IRSensor): number {
        if (sensor == IRSensor.Left)
            return pins.digitalReadPin(DigitalPin.P14);
        else
            return pins.digitalReadPin(DigitalPin.P13);
    }

    //% block="Read sonar in unit %unit"
    export function ping(unit: PingUnit, maxCmDistance = 500): number {
        let trigger = DigitalPin.P1;
        let pecho = DigitalPin.P2;
        pins.setPull(trigger, PinPullMode.PullNone);
        pins.digitalWritePin(trigger, 0);
        control.waitMicros(2);
        pins.digitalWritePin(trigger, 1);
        control.waitMicros(10);
        pins.digitalWritePin(trigger, 0);

        // read pulse
        const d = pins.pulseIn(pecho, PulseValue.High, maxCmDistance * 58);

        switch (unit) {
            case PingUnit.Centimeters: return Math.idiv(d, 58);
            case PingUnit.Inches: return Math.idiv(d, 148);
            default: return d;
        }
    }

    //% block="move $dir"
    export function moveIt(dir: MOVE): void {
        if (dir == 0) {
            setOutputA(4)
            setOutputA(5)
            setOutputA(0)
            clearOutputA(1)
            clearOutputA(2)
            setOutputA(3)
            updateOutputA()
        }
        else if (dir == 1) {
            setOutputA(4)
            setOutputA(5)
            setOutputA(1)
            clearOutputA(0)
            clearOutputA(3)
            setOutputA(2)
            updateOutputA()
        }
        else if (dir == 2) {
            setOutputA(4)
            setOutputA(5)
            setOutputA(0)
            clearOutputA(1)
            clearOutputA(3)
            setOutputA(2)
            updateOutputA()
        }
        else if (dir == 3) {
            setOutputA(4)
            setOutputA(5)
            setOutputA(1)
            clearOutputA(0)
            clearOutputA(2)
            setOutputA(3)
            updateOutputA()
        }
        else {
            clearOutputA(0)
            clearOutputA(1)
            clearOutputA(2)
            clearOutputA(3)
            clearOutputA(4)
            clearOutputA(5)
            updateOutputA()
        }
    }

    //% block="digital read $pin"
    export function digitalRead(pin: Pin): number {
        pins.i2cWriteNumber(32, 18, NumberFormat.Int8BE)
        let read_pin = pins.i2cReadNumber(32, NumberFormat.Int8LE);
        if (pin == 0) {
            if (read_pin >= 10 || read_pin == -64) {
                return 1;
            }
            else {
                return 0;
            }
        }
        else if (pin == 1) {
            if (read_pin < -1 || read_pin == -64) {
                return 1;
            }
            else {
                return 0;
            }
        }
        else {
            return 0;
        }
    }
    //% block="light sensor $Ldr"
    export function lightSensor(ldr: Ldr): number {
        pins.i2cWriteNumber(32, 19, NumberFormat.Int8BE)
        let ldrRead = pins.i2cReadNumber(32, NumberFormat.Int8LE);
        if (ldr == 0) {
            if ((ldrRead == 4 || ldrRead == 42) || (ldrRead == -124)) {
                return 1;
            }
            else if (ldrRead == 12) {
                return 1;
            }
            else {
                return 0;
            }
        }
        else if (ldr == 1) {
            if ((ldrRead == 8 || ldrRead == 82) || (ldrRead == -128)) {
                return 1;
            }
            else if (ldrRead == 12) {
                return 1;
            }
            else {
                return 0;
            }

        }
        else {
            return 0;
        }

        //return pins.i2cReadNumber(32, NumberFormat.Int8LE);
    }

    //% block="digital write $pin $onOff"
    //% onOff.min=0 onOff.max=1
    export function digitalWrite(pin: Pin, onOff: number): void {

        if (pin == 0) {
            if (onOff == 1) {
                setOutputA(6)
                updateOutputA()
            }
            else {
                clearOutputA(6)
                updateOutputA()
            }
        }
        else {
            if (onOff == 1) {
                setOutputA(7)
                updateOutputA()
            }
            else {
                clearOutputA(7)
                updateOutputA()

            }
        }
    }
}
