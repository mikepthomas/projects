---
title: Voron Hardware
heading: Custom PCBs for Voron Printers
date: 2026-07-03T16:52:58.045Z
lastmod: 2026-08-01T12:03:22.582Z
author: Mike Thomas
description: Sourcing parts and assembling custom PCBs for Voron Printers.
preview: /assets/blog/voron-hardware/voron-hardware-hero.jpg
slug: /projects/voron-hardware
related:
  - /projects/printer-klipper-fan-hat
  - /projects/printer-klipper-firmware
  - /projects/single-board-computers
external:
  - https://github.com/VoronDesign/Voron-Hardware
  - https://github.com/Tircown/ERCF-easy-brd
draft: false
tags:
  - Voron
categories:
  - 3D Printer
keywords:
  - Printer
---

# Table of contents

# Afterburner Toolhead PCB (rev3.2)

![Bare Afterburner Toolhead PCB (rev3.2) PCB](/assets/blog/voron-hardware/afterburner-toolhead-pcb-rev-3.2.jpg)

## Sourcing Parts

I purchased the PCB only, I sourced the rest of the parts for the kit myself.

Kit contains the `Quantity` needed for building 1 unit.

### PCB

| Item                                | Quantity | Received | Notes |
| ----------------------------------- | -------: | -------: | ----- |
| [Afterburner Toolhead PCB] (rev3.2) |        1 |        6 |

### Connectors

| Item                                                | Quantity | Received | Notes              |
| --------------------------------------------------- | -------: | -------: | ------------------ |
| 2 Pin JST-XH Header                                 |        4 |       20 | HEF, PCF, TH0, XES |
| 3 Pin JST-XH Header                                 |        1 |       20 | ABL                |
| 4 Pin JST-XH Header                                 |        1 |       20 | E-STEP             |
| MicroFit3 Dual Row Connector (14 pin)               |        1 |       10 |
| MicroFit3 Dual Row Right Angle Receptacle (14 pin)  |        1 |       10 | MCU                |
| MicroFit3 Single Row Connector (2 pin)              |        1 |       10 |
| MicroFit3 Single Row Right Angle Receptacle (2 pin) |        1 |       10 | HE0                |

### Diodes

| Item                   | Quantity | Received | Notes |
| ---------------------- | -------: | -------: | ----- |
| Schottky Diode (BAT85) |        1 |        7 |

### SMD Components

| Item                 | Quantity | Received | Notes |
| -------------------- | -------: | -------: | ----- |
| 0805 LED             |        1 |          | D1    |
| 0805 Resistor (1.5K) |        1 |          | R1    |
| 0805 Thermistor      |        1 |          | CT    |

# Afterburner Toolhead PCB (ERCF)

![Bare Afterburner Toolhead PCB (ERCF) PCB](/assets/blog/voron-hardware/afterburner-toolhead-pcb-ercf.jpg)

## Sourcing Parts

I purchased the PCB only, I sourced the rest of the parts for the kit myself.

Kit contains the `Quantity` needed for building 1 unit.

### PCB

| Item                              | Quantity | Received | Notes |
| --------------------------------- | -------: | -------: | ----- |
| [Afterburner Toolhead PCB] (ERCF) |        1 |        5 |

### Connectors

| Item                                                | Quantity | Received | Notes              |
| --------------------------------------------------- | -------: | -------: | ------------------ |
| 2 Pin JST-XH Header                                 |        4 |       20 | HEF, PCF, TH0, XES |
| 3 Pin JST-XH Header                                 |        2 |       20 | ABL, FS            |
| 4 Pin JST-XH Header                                 |        1 |       20 | E-STEP             |
| MicroFit3 Dual Row Connector (2 pin)                |        1 |       10 |
| MicroFit3 Dual Row Right Angle Receptacle (2 pin)   |        1 |       10 |
| MicroFit3 Dual Row Connector (14 pin)               |        1 |       10 |
| MicroFit3 Dual Row Right Angle Receptacle (14 pin)  |        1 |       10 | MCU                |
| MicroFit3 Single Row Connector (2 pin)              |        1 |       10 |
| MicroFit3 Single Row Right Angle Receptacle (2 pin) |        1 |       10 | HE0                |

### Diodes

| Item                   | Quantity | Received | Notes |
| ---------------------- | -------: | -------: | ----- |
| Schottky Diode (BAT85) |        1 |        7 |

### SMD Components

| Item                 | Quantity | Received | Notes |
| -------------------- | -------: | -------: | ----- |
| 0805 LED             |        1 |          | D1    |
| 0805 Resistor (1.5K) |        1 |          | R1    |
| 0805 Thermistor      |        1 |          | CT    |

## Printing Parts

| Item                                                                                                                                                                          | Quantity | Material                      | Time |  Size | Weight |  Cost |      Printed       | Notes                                                                            |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------: | ----------------------------- | ---: | ----: | -----: | ----: | :----------------: | -------------------------------------------------------------------------------- |
| [pcb_spacer](https://github.com/VoronDesign/Voron-Hardware/blob/master/Afterburner_Toolhead_PCB/STLs/Clockwork/pcb_spacer.stl)                                                |        1 | [eSun ABS+ (Fire Engine Red)] |  06m | 0.15m |  0.39g | £0.01 | :heavy_check_mark: | Afterburner Toolhead PCB Part                                                    |
| [pcb_cover](https://github.com/wile-e1/VoronUsers/blob/sb_cw1_pcb_cover/printer_mods/wile-e1/Stealthburner_CW1_PCB_Cover/sb_cw1_pcb_cover-r1.stl)                             |        1 | [eSun ABS+ (Fire Engine Red)] |      |       |        |       |        :x:         | This a User mod for the ERCF Toolhead PCB by wile-e1 that fits the StealthBurner |
| [pcb_cover_clip-on_mount](https://github.com/wile-e1/VoronUsers/blob/sb_cw1_pcb_cover/printer_mods/wile-e1/Stealthburner_CW1_PCB_Cover/sb_cw1_pcb_cover_clip-on_mount-r1.stl) |        1 | [eSun ABS+ (Fire Engine Red)] |      |       |        |       |        :x:         | This a User mod for the ERCF Toolhead PCB by wile-e1 that fits the StealthBurner |

## Assembly

#### Parts Needed

| Item                              | Quantity |
| --------------------------------- | -------: |
| [Afterburner Toolhead PCB] (ERCF) |        1 |
| M3x8 SHCS                         |        2 |
| M3 Nylon Washer                   |        2 |

# Carabiner

![Bare Carabiner PCB](/assets/blog/voron-hardware/carabiner.jpg)

## Sourcing Parts

### PCB

| Item                   | Quantity | Received | Notes |
| ---------------------- | -------: | -------: | ----- |
| [Carabiner] β0.2.3 PCB |        1 |       11 |

### Connectors

| Item                                               | Quantity | Received | Notes                   |
| -------------------------------------------------- | -------: | -------: | ----------------------- |
| 2 Pin JST-XH Header                                |        4 |       20 | HEF1, PCF1, PCF2, ThHE1 |
| 4 Pin JST-XH Header                                |        2 |       20 | Probe1, Stepper1        |
| MicroFit3 Single Row Connector (2 pin)             |        1 |          |
| MicroFit3 Single Row Receptacle (2 pin)            |        1 |          | HotendMF1               |
| MicroFit3 Dual Row Connector (16 pin)              |        1 |          |
| MicroFit3 Dual Row Right Angle Receptacle (16 pin) |        1 |          |

### Diodes

| Item                   | Quantity | Received | Notes |
| ---------------------- | -------: | -------: | ----- |
| Schottky Diode (BAT85) |        1 |        7 |

# ERCF Easy BRD

![Bare ERCF Easy BRD PCB](/assets/blog/voron-hardware/ercf-easy-brd.jpg)

## Sourcing Parts

I purchased the PCB only, I sourced the rest of the parts for the kit myself.

Kit contains the `Quantity` needed for building 1 unit.

### PCB

| Item                     | Quantity | Received | Notes                                                                                                           |
| ------------------------ | -------: | -------: | --------------------------------------------------------------------------------------------------------------- |
| [ERCF Easy BRD] v1.1 PCB |        1 |       10 | This board will be used for the [6 channel Enraged Rabbit Carrot Feeder V1.1](enraged-rabbit-carrot-feeder-1.1) |

### Capacitors

| Item                           | Quantity | Received | Notes  |
| ------------------------------ | -------: | -------: | ------ |
| Ceramic Capacitor (0.1uF)      |        1 |        5 | C2     |
| Ceramic Capacitor (0.33uF)     |        1 |        5 | C1     |
| Electrolytic Capacitor (100uF) |        2 |       10 | C3, C4 |

### Connectors

| Item                             | Quantity | Received | Notes          |
| -------------------------------- | -------: | -------: | -------------- |
| 3 Pin JST-XH Header              |        4 |       20 | J1, J2, J3, J4 |
| 4 Pin JST-XH Header              |        2 |       20 | J6, J7         |
| 7-pin female header              |        2 |       10 | U1             |
| 8-pin female header              |        4 |       18 | U3, U4         |
| 2-pin female header              |        2 |       20 | U3, U4         |
| 5-pin male connector             |        1 |          | J6             |
| Jumper Cap 2.54mm                |        2 |          | J6             |
| KF301 Screw Terminal (5mm pitch) |        1 |       12 | J5             |

### Integrated Circuits

| Item                   | Quantity | Received | Notes |
| ---------------------- | -------: | -------: | ----- |
| 5V Regulator (L7805CV) |        1 |       10 | U2    |
| TO-220 Heatsink        |        1 |       10 | U2    |

### Misc

| Item                         | Quantity | Received | Notes  |
| ---------------------------- | -------: | -------: | ------ |
| Seeeduino XIAO               |        1 |        2 | U1     |
| TMC2209 Stepper Motor Driver |        2 |          | U3, U4 |

### Resistors

| Item                      | Quantity | Received | Notes          |
| ------------------------- | -------: | -------: | -------------- |
| Metal Film resistor (10K) |        4 |        8 | R1, R2, R3, R4 |

## Printing Parts

| Item                                                                                                                                          | Quantity | Material            |  Time |  Size | Weight |  Cost |      Printed       | Notes |
| --------------------------------------------------------------------------------------------------------------------------------------------- | -------: | ------------------- | ----: | ----: | -----: | ----: | :----------------: | ----- |
| [ercf_easy_brd bracket bottom](https://github.com/Tircown/ERCF-easy-brd/blob/main/mods/Bottom%20bracket/ercf_easy_brd%20bracket%20bottom.stl) |        1 | [eSun ABS+ (Black)] | 1h14m | 3.37m |  8.60g | £0.14 | :heavy_check_mark: |

## Assembly

![Fully Assembled ERCF Easy BRD 1.1](/assets/blog/voron-hardware/ercf-easy-brd-assembled.jpg)

## Flashing

Get the most up to date info on the [official page](https://github.com/Tircown/ERCF-easy-brd).

### Klipper Firmware Configuration

#### USB

```sh
cd ~/klipper/
make clean
make menuconfig KCONFIG_CONFIG=config.easy_brd
```

Set the following configuration:

```
(Top)
                         Klipper Firmware Configuration
[ ] Enable extra low-level configuration options
    Micro-controller Architecture (SAMC21/SAMD21/SAMD51/SAME5x)  --->
    Processor model (SAMD21G18)  --->
    Bootloader offset (8KiB bootloader)  --->
    Clock Reference (Internal clock)  --->
    Communication interface (USB)  --->
[Space/Enter] Toggle/enter      [?] Help            [/] Search
[Q] Quit (prompts for save)     [ESC] Leave menu
```

Backup config, Build and Flash to the board:

```sh
cp config.easy_brd ../printer_data/config/Firmware/
make KCONFIG_CONFIG=config.easy_brd -j4
sudo apt install bossa-cli
sudo bossac -i -d -p /dev/ttyACM0 -e -w -v -R --offset=0x2000 out/klipper.bin
```

# Klipper Expander

![Timmit99's Klipper Expander PCB](/assets/blog/voron-hardware/klipper-expander.jpg 'Klipper Expander')

| Item               | Quantity | Received | Notes                                                                    |
| ------------------ | -------: | -------: | ------------------------------------------------------------------------ |
| [Klipper Expander] |        1 |        1 | This board is used to control fans on the [Voron 1.8](printer-voron-1.8) |

PCB to expand the ports that can be used for fans and neopixels. I already have RGB neopixel strips and will need an additional neopixel header as the Stealthburner LEDs I have purchased are incompatible with the strips as they are RGBW.

## Printing Parts

There are three different mounts, one vertical, one horizontal and one for DIN rail.

| Item                                                                                                                                                  | Quantity | Material            | Time |  Size | Weight |  Cost |      Printed       | Notes |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------: | ------------------- | ---: | ----: | -----: | ----: | :----------------: | ----- |
| [KlipperExpander_HorizontalMount](https://github.com/VoronDesign/Voron-Hardware/blob/master/Klipper_Expander/CAD/KlipperExpander_HorizontalMount.STL) |        1 | [eSun ABS+ (Black)] |  34m | 1.50m |  3.83g | £0.06 | :heavy_check_mark: |
| [KlipperExpander_RailMount](https://github.com/VoronDesign/Voron-Hardware/blob/master/Klipper_Expander/CAD/KlipperExpander_RailMount.stl)             |        1 |                     |      |       |        |       |        :x:         |
| [KlipperExpander_VerticalMount](https://github.com/VoronDesign/Voron-Hardware/blob/master/Klipper_Expander/CAD/KlipperExpander_VerticalMount.STL)     |        1 |                     |      |       |        |       |        :x:         |

I have printed the horizontal mount as I am planning on mounting the Klipper Expander on the bottom of the rear electronics compartment of the [Voron 1.8](printer-voron-1.8).

## Assembly

I purchased this already assembled.

### Parts Used

| Item                  | Quantity |
| --------------------- | -------: |
| M3 Hammer Head T-nuts |        2 |
| M3x8 SHCS             |        4 |

## Flashing

Get the most up to date info on the [official page](https://github.com/VoronDesign/Voron-Hardware/blob/master/Klipper_Expander/Documentation/Setup_and_Flashing_Guide.md).

### Klipper Firmware Configuration

#### USB

```sh
cd ~/klipper/
make clean
make menuconfig KCONFIG_CONFIG=config.klipper_expander
```

Set the following configuration:

```
(Top)
                         Klipper Firmware Configuration
[*] Enable extra low-level configuration options
    Micro-controller Architecture (STMicroelectronics STM32)  --->
    Processor model (STM32F042)  --->
    Bootloader offset (No bootloader)  --->
    Clock Reference (Internal clock)  --->
    Communication interface (USB (on PA9/PA10))  --->
    USB ids  --->
    Optional features (to reduce code size)  --->
[*] Optimize stepper code for 'step on both edges'
()  GPIO pins to set at micro-controller startup
[Space/Enter] Toggle/enter      [?] Help            [/] Search
[Q] Quit (prompts for save)     [ESC] Leave menu
```

As the firmware is too large to fit in the supplied flash, we also need to disable some features:

```
(Top) → Optional features (to reduce code size)
                         Klipper Firmware Configuration
[*] Support micro-controller based ADC (analog to digital)
[*] Support communicating with external chips via SPI bus
[*]     Support software based SPI "bit-banging"
[*] Support communicating with external chips via I2C bus
[*]     Support software based I2C "bit-banging"
[*] Support GPIO based button reading
[ ] Support Trinamic stepper motor driver UART communication
[*] Support 'neopixel' type LED control
[*] Support measuring fan tachometer GPIO pins
    *** LCD chips ***
[*] Support ST7920 LCD display
[*] Support HD44780 LCD display
    *** Accelerometer chips ***
[*] Support adxl accelerometers
[*] Support lis2dw and lis3dh 3-axis accelerometers
[*] Support MPU accelerometers
[*] Support ICM20948 accelerometer
    *** External ADC type chips ***
[*] Support thermocouple MAX sensors
[*] Support HX711 and HX717 ADC chips
[*] Support ADS 1220 ADC chip
    *** Other external sensor chips ***
[ ] Support ldc1612 eddy current sensor
[ ] Support angle sensors
[Space/Enter] Toggle/enter      [?] Help            [/] Search
[Q] Quit (prompts for save)     [ESC] Leave menu
```

Install the boot jumper and reset the board to put the board into DFU mode.

Backup config, Build and Flash to the board:

```sh
cp config.klipper_expander ../printer_data/config/Firmware/
make KCONFIG_CONFIG=config.klipper_expander -j4
make KCONFIG_CONFIG=config.klipper_expander flash FLASH_DEVICE=0483:df11
```

# Klipper Fan Hat

![Holding a Klipper Fan Hat PCB](/assets/blog/printer-klipper-fan-hat/klipper-fan-hat-in-hand.jpg)

## Sourcing Parts

The reference numbers in the notes field refer to the parts required marked on the silkscreen and [can be seen in the interactive BOM](https://klipper-fan-hat.mikethomas.info/).

### PCB

| Item                       | Quantity | Received | Notes |
| -------------------------- | -------: | -------: | ----- |
| ~[Klipper Fan Hat PCB v1]~ |      ~1~ |        5 |
| [Klipper Fan Hat PCB v2]   |        1 |       10 |

### Fasteners

| Item                | Quantity | Received | Notes                                              |
| ------------------- | -------: | -------: | -------------------------------------------------- |
| M2.5x6 BHCS         |        4 |       50 | To mount the hat to the Raspberry Pi               |
| M2.5x14 BHCS        |        4 |       10 | To mount the Fan                                   |
| M2.5 Nut            |        4 |       50 | To mount the Fan                                   |
| M2.5 Brass Standoff |        4 |       16 | To stop the fan inputs shorting on the HDMI Socket |

### Connectors

| Item                              | Quantity |           Received | Notes                           |
| --------------------------------- | -------: | -----------------: | ------------------------------- |
| 2 Pin JST-XH Header               |        5 |                 20 | FAN1-FAN5                       |
| 3 Pin JST-XH Header               |        1 |                 20 | J4                              |
| 4 Pin JST-XH Header               |        1 |                 20 | J3                              |
| 5 Pin JST-XH Header               |        1 |                 20 | J2                              |
| 40 Pin Raspberry Pi Header        |        1 |                  7 | J8                              |
| Dupont Pin Headers                |  41 Pins | 10 x 40 pin strips | J7, JP1-JP5, WP1, GPIO20-GPIO25 |
| Jumper Cap 2.54mm                 |        6 |                109 | JP1-JP5, WP1                    |
| KF301 Screw Terminal (5mm pitch)  |        1 |                 10 | J1                              |
| PCB Panel Mount Blade Fuse Holder |        1 |                 10 | F1                              |

### SMD Components

| Item                                    | Quantity | Received | Notes                  |
| --------------------------------------- | -------: | -------: | ---------------------- |
| 100nF Capacitor (1206 Package)          |        1 |       20 | C1                     |
| 100Ω Resistor (1206 Package)            |        5 |      123 | R7, R9, R11, R13, R15  |
| 1kΩ Resistor (1206 Package)             |        1 |      127 | R1                     |
| 3.9kΩ Resistor (1206 Package)           |        2 |      112 | R2-R3                  |
| 4.7kΩ Resistor (1206 Package)           |        7 |      103 | R4, R17-R22            |
| 10kΩ Resistor (1206 Package)            |        5 |      111 | R8, R10, R12, R14, R16 |
| LED Red (1206 Package)                  |        7 |      105 | D1-D7                  |
| IRLML6344-TRPBF Mosfet (SOT-23 Package) |        5 |      100 | Q1-Q5                  |

### Misc

| Item                       | Quantity | Received | Notes                                                                   |
| -------------------------- | -------: | -------: | ----------------------------------------------------------------------- |
| 2510 Axial Fan             |        1 |        2 |
| CAT24C32 EEPROM            |        1 |       15 | U1                                                                      |
| DIP-8 Socket               |        1 |       20 | Not required, but makes switching EEPROM modules out easier for testing |
| DS18B20 Temperature Sensor |        1 |       15 |

## Assembly

![An assembled Klipper Fan Hat](/assets/blog/printer-klipper-fan-hat/klipper-fan-hat-assembled.jpg)

# Microswitch Endstop

![Bare Microswitch Endstop PCB](/assets/blog/voron-hardware/microswitch-endstop.jpg)

## Sourcing Parts

### PCB

| Item                      | Quantity | Received | Notes |
| ------------------------- | -------: | -------: | ----- |
| [Microswitch Endstop] PCB |        1 |        4 |

### Connectors

| Item                            | Quantity | Received | Notes |
| ------------------------------- | -------: | -------: | ----- |
| 4 Pin JST-XH Right Angle Header |        1 |       20 | J1    |

### Misc

| Item                       | Quantity | Received | Notes |
| -------------------------- | -------: | -------: | ----- |
| Omron D2F-01L Micro Switch |        2 |       30 |

# Microswitch Z Endstop

![Bare Microswitch Z Endstop PCB](/assets/blog/voron-hardware/microswitch-z-endstop.jpg)

## Sourcing Parts

### PCB

| Item                        | Quantity | Received | Notes |
| --------------------------- | -------: | -------: | ----- |
| [Microswitch Z Endstop] PCB |        1 |        9 |

### Connectors

| Item                            | Quantity | Received | Notes |
| ------------------------------- | -------: | -------: | ----- |
| 2 Pin JST-XH Right Angle Header |        1 |       20 | HE1   |

### Misc

| Item                       | Quantity | Received | Notes |
| -------------------------- | -------: | -------: | ----- |
| Omron D2F-01L Micro Switch |        1 |       30 | SW1   |

# Nano Display

![Bare Nano Display PCB](/assets/blog/voron-hardware/nano-display.jpg)

## Sourcing Parts

### PCB

| Item               | Quantity | Received | Notes |
| ------------------ | -------: | -------: | ----- |
| [Nano Display] PCB |        1 |        5 |

### Connectors

| Item                  | Quantity | Received | Notes  |
| --------------------- | -------: | -------: | ------ |
| 10 Pin Display Header |        2 |        6 | J1, J2 |
| 15-pin female header  |        2 |          | P1, P2 |

### Misc

| Item         | Quantity | Received | Notes |
| ------------ | -------: | -------: | ----- |
| Arduino Nano |        1 |        1 |

## Printing Parts

| Item                                                                     | Quantity | Material                      | Time | Size | Weight | Cost | Printed | Notes |
| ------------------------------------------------------------------------ | -------: | ----------------------------- | ---: | ---: | -----: | ---: | :-----: | ----- |
| [Arduino DIN mount - Box](https://www.printables.com/model/319298/files) |        1 | [eSun ABS+ (Black)]           |      |      |        |      |   :x:   |
| [Arduino DIN mount - Lid](https://www.printables.com/model/319298/files) |        1 | [eSun ABS+ (Fire Engine Red)] |      |      |        |      |   :x:   |
| [rs25_psu_bracket_clip](https://www.printables.com/model/319298/files)   |        1 | [eSun ABS+ (Black)]           |      |      |        |      |   :x:   |

## Flashing

### Klipper Firmware Configuration

#### USB

```sh
cd ~/klipper/
make clean
make menuconfig KCONFIG_CONFIG=config.arduino_nano
```

Set the following configuration:

```
(Top)
                         Klipper Firmware Configuration
[ ] Enable extra low-level configuration options
    Micro-controller Architecture (Atmega AVR)  --->
    Processor model (atmega328p)  --->
    Optional features (to reduce code size)  --->
[Space/Enter] Toggle/enter      [?] Help            [/] Search
[Q] Quit (prompts for save)     [ESC] Leave menu
```

As the firmware is too large to fit in the supplied flash, we also need to disable some features:

```
(Top) → Optional features (to reduce code size)
                         Klipper Firmware Configuration
[*] Support micro-controller based ADC (analog to digital)
[*] Support communicating with external chips via SPI bus
[*]     Support software based SPI "bit-banging"
[ ] Support communicating with external chips via I2C bus
[ ] Support hardware PWM (pulse width modulation)
[*] Support GPIO based button reading
[ ] Support Trinamic stepper motor driver UART communication
[*] Support 'neopixel' type LED control
[ ] Support measuring fan tachometer GPIO pins
    *** LCD chips ***
[*] Support ST7920 LCD display
[*] Support HD44780 LCD display
    *** Accelerometer chips ***
[ ] Support adxl accelerometers
[ ] Support lis2dw and lis3dh 3-axis accelerometers
[ ] Support BMI160 accelerometer
    *** External ADC type chips ***
[ ] Support thermocouple MAX sensors
[ ] Support HX711 and HX717 ADC chips
[ ] Support ADS 131M02/M04 ADC chips
[ ] Support ADS 1220 ADC chip
    *** Other external sensor chips ***
[ ] Support angle sensors
    *** Other features ***
[ ] Support for homing/probing events using analog sensors
[Space/Enter] Toggle/enter      [?] Help            [/] Search
[Q] Quit (prompts for save)     [ESC] Leave menu
```

Backup config, Build and Flash to the board:

```sh
cp config.arduino_nano ../printer_data/config/Firmware/
make KCONFIG_CONFIG=config.arduino_nano -j4
make KCONFIG_CONFIG=config.arduino_nano flash FLASH_DEVICE=/dev/serial/by-id/usb-1a86_USB_Serial-if00-port0
```

# PT100 Stick

![Assembled LDO PT100 Stick](/assets/blog/voron-hardware/pt100-stick.jpg)

| Item              | Quantity | Received | Notes |
| ----------------- | -------: | -------: | ----- |
| [LDO PT100 Stick] |        1 |        4 |

[LDO PT100 Stick]: https://www.onetwo3d.co.uk/product/ldo-pt100-stick?wlr_ref=REF-ULH-QWV

## Assembly

I purchased this already assembled.

# SKR Mini E3 V1.2/2.0 Screen Adaptor

![Bare SKR Mini E3 V1.2/2.0 Screen Adaptor PCB](/assets/blog/voron-hardware/skr-mini-e3-v1.2-2.0-screen-adaptor.jpg)

## Sourcing Parts

### PCB

| Item                                      | Quantity | Received | Notes |
| ----------------------------------------- | -------: | -------: | ----- |
| [SKR Mini E3 V1.2/2.0 Screen Adaptor] PCB |        1 |        5 |

### Connectors

| Item                          | Quantity | Received | Notes  |
| ----------------------------- | -------: | -------: | ------ |
| 6-pin Dual Row female header  |        1 |        8 | J2     |
| 10-pin Dual Row female header |        1 |          | J1     |
| 10 Pin Display Header         |        2 |        6 | J3, J4 |

# V0 Umbilical

![Bare V0 Umbilical PCBs](/assets/blog/voron-hardware/v0-umbilical.jpeg)

## Sourcing Parts

### PCB

| Item                        | Quantity | Received | Notes |
| --------------------------- | -------: | -------: | ----- |
| [V0 Umbilical Frame] PCB    |        1 |        9 |
| [V0 Umbilical Toolhead] PCB |        1 |        8 |

### Frame PCB Connectors

| Item                                   | Quantity | Received | Notes         |
| -------------------------------------- | -------: | -------: | ------------- |
| 2 Pin JST-XH Header                    |        5 |       20 | J3, J4, J6-J8 |
| 3 Pin JST-XH Header                    |        2 |       20 | J9, J12       |
| 4 Pin JST-XH Header                    |        3 |       20 | J2, J10, J11  |
| KF301 Screw Terminal (5mm pitch)       |        1 |       10 | J5            |
| MicroFit3 Dual Row Connector (14 pin)  |        1 |       10 |
| MicroFit3 Dual Row Receptacle (14 pin) |        1 |       10 | J1            |

### Toolhead PCB Connectors

| Item                                               | Quantity | Received | Notes |
| -------------------------------------------------- | -------: | -------: | ----- |
| 2 Pin JST-XH Header                                |        6 |       20 | J3-J8 |
| 4 Pin JST-XH Header                                |        1 |       20 | J2    |
| MicroFit3 Dual Row Connector (14 pin)              |        1 |       10 |
| MicroFit3 Dual Row Right Angle Receptacle (14 pin) |        1 |       10 | J1    |

![Fully Assembled V0 Umbilical](/assets/blog/voron-hardware/v0-umbilical-assembled.jpg)

[Filament]: #
[eSun ABS+ (Black)]: printer-filament#esun-abs-black
[eSun ABS+ (Fire Engine Red)]: printer-filament#esun-abs-fire-engine-red
[Related Links]: #
[Afterburner Toolhead PCB]: https://github.com/VoronDesign/Voron-Hardware/tree/master/Afterburner_Toolhead_PCB
[Carabiner]: https://github.com/Annex-Engineering/Carabiner-Docs/tree/main/carabiner-classic
[ERCF Easy BRD]: https://github.com/Tircown/ERCF-easy-brd
[Klipper Expander]: https://github.com/VoronDesign/Voron-Hardware/tree/master/Klipper_Expander
[Klipper Fan Hat PCB v1]: https://github.com/mikepthomas/Klipper-Fan-Hat/tree/v1.0
[Klipper Fan Hat PCB v2]: https://github.com/mikepthomas/Klipper-Fan-Hat/tree/v2.0
[Microswitch Endstop]: https://github.com/VoronDesign/Voron-Hardware/tree/master/Microswitch_Endstop
[Microswitch Z Endstop]: https://github.com/VoronDesign/Voron-Hardware/tree/master/Microswitch_Z_Endstop
[Nano Display]: https://github.com/VoronDesign/Voron-Hardware/tree/master/Nano_Display
[SKR Mini E3 V1.2/2.0 Screen Adaptor]: https://github.com/VoronDesign/Voron-Hardware/tree/master/SKR-Mini_Screen_Adaptor/SRK%20Mini%20E3%20V1.2-2.0
[V0 Umbilical Frame]: https://github.com/VoronDesign/Voron-Hardware/tree/master/V0-Umbilical#frame-pcb
[V0 Umbilical Toolhead]: https://github.com/VoronDesign/Voron-Hardware/tree/master/V0-Umbilical#toolhead-pcb
