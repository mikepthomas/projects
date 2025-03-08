---
title: Single Board Computers
heading: Single Board Computers and Microcontrollers
date: 2023-06-26
lastmod: 2025-03-08T13:37:28.167Z
author: Mike Thomas
description: This page lists all of the single board computers I own and is mainly for me to keep track of what I have and what I am currently using it for.
preview: /assets/blog/single-board-computers/single-board-computers-hero.jpg
slug: /projects/single-board-computers
related:
   - /projects/macro-pi
   - /projects/solar-wifi-weather-station
draft: false
tags:
   - Computers
   - Raspberry Pi
categories:
   - Electronics
keywords:
   - Arduino
   - Computers
   - Raspberry Pi
---

# Table of contents

# Intro

This page lists all of the single board computers I own and is mainly for me to keep track of what I have and what I am currently using it for.

# Arduino

![An Arduino Tracked Robot](/assets/blog/single-board-computers/arduino-robot.jpg)

| Item                                                                              | Case            | Flashed with                                                                                                                               | Notes                                                                                     |
| --------------------------------------------------------------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| [Arduino Duemilanove](https://docs.arduino.cc/retired/boards/arduino-duemilanove) | Tracked Robot   | Blink Sketch                                                                                                                               | With [Arduino XBee Shield](https://docs.arduino.cc/retired/shields/arduino-xbee-shield)   |
| Arduino Mega 2560 Clone                                                           |                 | [Klipper Firmware](https://www.klipper3d.org)                                                                                              | With [RAMPS 1.6](https://reprap.org/wiki/RAMPS_1.6) + DRV8825 x 5                         |
| Arduino Nano Clone                                                                |                 | Blink Sketch                                                                                                                               |                                                                                           |
| Arduino Uno Clone                                                                 | Breadboard Case | [ArduinoISP](https://docs.arduino.cc/built-in-examples/arduino-isp/ArduinoISP)                                                             |                                                                                           |
| Arduino Uno                                                                       | Clear Case      | Blink Sketch                                                                                                                               |                                                                                           |
| Arduino Uno R2                                                                    | Clear Case      | Blink Sketch                                                                                                                               |                                                                                           |
| [Arduino Uno R3](https://docs.arduino.cc/hardware/uno-rev3)                       | Robot Arm       | [Servo Test](https://github.com/keyestudio/KS0198X-4DOF-Robot-Mechanical-Arm-Kit-for-Arduino-DIY/tree/master/02.Test%20Code%20for%20Servo) | Boxed with [DFRobot I/O Expansion Shield V7.0](https://www.dfrobot.com/product-1009.html) |
| [Arduino Uno R3](https://docs.arduino.cc/hardware/uno-rev3)                       | Robot Arm       | [Servo Test](https://github.com/keyestudio/KS0198X-4DOF-Robot-Mechanical-Arm-Kit-for-Arduino-DIY/tree/master/02.Test%20Code%20for%20Servo) | Boxed with [DFRobot I/O Expansion Shield V7.0](https://www.dfrobot.com/product-1009.html) |

# BBC

![BBC micro:bit](/assets/blog/single-board-computers/bbc-micro-bit.jpg)

The micro:bit is an inexpensive board designed to teach children how to code.

| Item                                                    | Case                                                                                                                                         | Flashed with | Notes                                                                                                                                                          |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [BBC micro:bit V1](https://archive.microbit.org/guide/) | [Kitronic Inventor's Kit](https://kitronik.co.uk/collections/accessories-for-the-bbc-micro-bit/products/inventors-kit-for-the-bbc-micro-bit) |              | With [Digital Logic Pack](https://kitronik.co.uk/products/5653-digital-logic-pack-for-kitronik-inventors-kit-for-the-bbc-microbit?_pos=3&_sid=110ef4242&_ss=r) |

# BigTreeTech

![BigTreeTech Pi with Rubber Duck](/assets/blog/single-board-computers/bigtreetech-pi.jpg)

BigTreeTech make mainboards to control 3D printers. :duck:

| Item                                                                                                                                                                                                      | Case                                                                                      | Storage               | Flashed with                                                                                                    | Notes                                                                    |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | --------------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [BigTreeTech EBB36 CAN V1.0](https://bttwiki.com/EBB%2036%20CAN.html)                                                                                                                                     |                                                                                           |                       | [Klipper Firmware](https://www.klipper3d.org)                                                                   |                                                                          |
| [BigTreeTech EBB42 CAN V1.1](https://bttwiki.com/EBB%2042%20CAN.html)                                                                                                                                     | [Polyformer](printer-polyformer)                                                          |                       | [Alexware](<https://github.com/Reiten966/Polyformer/tree/main/Electronics/EBB42%20%2B%20Alexware%20(PF%20Kit)>) |                                                                          |
| [BigTreeTech EBB SB2240 CAN V1.1](https://bttwiki.com/EBB%202240%202209%20CAN.html)                                                                                                                       | [Voron 2.4](printer-voron-2.4)                                                            |                       | [Klipper Firmware](https://www.klipper3d.org)                                                                   |                                                                          |
| [BigTreeTech Knomi V1.0](https://bttwiki.com/KNOMI.html)                                                                                                                                                  | [Voron 2.4](printer-voron-2.4)                                                            |                       | [Knomi Firmware](https://github.com/bigtreetech/KNOMI/tree/master/KNOMI1/Firmware)                              |                                                                          |
| [BigTreeTech MMB CAN V1.0](https://bttwiki.com/MMB%20CAN%20V1.0.html)                                                                                                                                     | [Enraged Rabbit Cotton Tail](enraged-rabbit-carrot-feeder-2.0#enraged-rabbit-cotton-tail) |                       | [Klipper Firmware](https://www.klipper3d.org)                                                                   | With 4 [EZ2209](https://bttwiki.com/EZ2209.html)s                        |
| [BigTreeTech Pi V1.2](https://biqu.equipment/products/bigtreetech-btt-pi-v1-2)                                                                                                                            |                                                                                           |                       | [CB1](https://github.com/bigtreetech/CB1)                                                                       | With [U2C v1.0 CAN Adapter Module](https://docs.meteyou.wtf/btt-pi-u2c/) |
| [BigTreeTech SKR V1.4](https://biqu.equipment/collections/control-board/products/bigtreetech-skr-v1-4-skr-v1-4-turbo-control-board-tmc2209-tmc2208-eeprom-v1-0-exp-mot-v1-0-3d-printer-parts-for-ender-3) | [Anet A8](printer)                                                                        | 8GB MicroSD (Sandisk) | [Marlin Firmware](https://marlinfw.org/)                                                                        | 3D printer Mainboard based on LPC1768                                    |
| [BigTreeTech SKR V1.4 Turbo](https://biqu.equipment/collections/control-board/products/bigtreetech-skr-v1-4-skr-v1-4-turbo-control-board)                                                                 | [Voron 1.8](printer-voron-1.8)                                                            |                       | [Klipper Firmware](https://www.klipper3d.org)                                                                   | 3D printer Mainboard based on LPC1769                                    |
| [BigTreeTech SKR Mini E3 V2.0](https://biqu.equipment/products/bigtreetech-skr-mini-e3-v2-0-32-bit-control-board-integrated-tmc2209-uart-for-ender-4)                                                     |                                                                                           |                       | [Klipper Firmware](https://www.klipper3d.org)                                                                   |                                                                          |
| [BigTreeTech SKR Pico](https://bttwiki.com/SKR%20Pico.html)                                                                                                                                               | [Voron 0.2](printer-voron-0.2)                                                            |                       | [Klipper Firmware](https://www.klipper3d.org)                                                                   | 3D printer Mainboard based on RP2040                                     |
| [BigTreeTech SKR Pico](https://bttwiki.com/SKR%20Pico.html)                                                                                                                                               |                                                                                           |                       | [Klipper Firmware](https://www.klipper3d.org)                                                                   | 3D printer Mainboard based on RP2040                                     |
| [BigTreeTech U2C V1.1](https://docs.meteyou.wtf/btt-u2c-v1.x/)                                                                                                                                            |                                                                                           |                       | [CandleLight Firmware](https://github.com/candle-usb/candleLight_fw)                                            | CANBUS adapter to communicate with CAN Enabled 3D printer boards         |
| [BigTreeTech U2C V2.1](https://docs.meteyou.wtf/btt-u2c-v2.x/)                                                                                                                                            |                                                                                           |                       | [BTT CandleLight Firmware](https://github.com/bigtreetech/candleLight_fw/tree/stm32g0_support)                  | CANBUS adapter to communicate with CAN Enabled 3D printer boards         |

# Custom

![Board designed to add additional functionality to a Printer running Klipper firmware](/assets/blog/single-board-computers/klipper-expander.jpg)

| Item                                                             | Case                           | Flashed with                                  | Notes                                      |
| ---------------------------------------------------------------- | ------------------------------ | --------------------------------------------- | ------------------------------------------ |
| [ERCF Easy BRD](https://github.com/Tircown/ERCF-easy-brd)        | [AM8](printer-am8)             | [Klipper Firmware](https://www.klipper3d.org) | by [Tircown](https://github.com/Tircown)   |
| [Klipper Expander](https://github.com/timmit99/Klipper-Expander) | [Voron 1.8](printer-voron-1.8) | [Klipper Firmware](https://www.klipper3d.org) | by [timmit99](https://github.com/timmit99) |

# Espressif

![A Relay board with a ATtiny85 and an ESP-01](/assets/blog/single-board-computers/wifi-arduino-85.jpg)

| Item                                                                                                                       | Case                                                                                                        | Flashed with                                                                                                       | Hostname          | Notes                                                               |
| -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ----------------- | ------------------------------------------------------------------- |
| [Ai-Thinker ESP-01](https://docs.ai-thinker.com/en/esp8266/spec/esp_01)                                                    | [Wifi Arduino 85](https://github.com/armtronix/Wifi-Arduino-85)                                             | [Wifi Arduino 85 ESPHome](https://github.com/mikepthomas/Wifi-Arduino-85/blob/master/ESPHome/wifi-arduino-85.yaml) | armtronix-relay-1 | Original Ai-Thinker AT Firmware 0.9.5                               |
| [Ai-Thinker ESP-01](https://docs.ai-thinker.com/en/esp8266/spec/esp_01)                                                    | [Wifi Arduino 85](https://github.com/armtronix/Wifi-Arduino-85)                                             | [Wifi Arduino 85 ESPHome](https://github.com/mikepthomas/Wifi-Arduino-85/blob/master/ESPHome/wifi-arduino-85.yaml) | armtronix-relay-2 | Original Ai-Thinker AT Firmware 0.9.5                               |
| [Ai-Thinker ESP-01](https://docs.ai-thinker.com/en/esp8266/spec/esp_01)                                                    | [Wifi Arduino 85](https://github.com/armtronix/Wifi-Arduino-85)                                             | [Wifi Arduino 85 ESPHome](https://github.com/mikepthomas/Wifi-Arduino-85/blob/master/ESPHome/wifi-arduino-85.yaml) | armtronix-relay-3 | Original Ai-Thinker AT Firmware 0.9.5                               |
| [Ai-Thinker ESP-01](https://docs.ai-thinker.com/en/esp8266/spec/esp_01)                                                    | [Wifi Arduino 85](https://github.com/armtronix/Wifi-Arduino-85)                                             | [Wifi Arduino 85 ESPHome](https://github.com/mikepthomas/Wifi-Arduino-85/blob/master/ESPHome/wifi-arduino-85.yaml) | armtronix-relay-4 | Original Ai-Thinker AT Firmware 0.9.5                               |
| [BigTreeTech ESP-01s](https://biqu.equipment/collections/expansion-board/products/esp-01s-wifi-module-esp8266-for-skr-pro) | BigTreeTech SKR V1.4                                                                                        | [ESPHome](https://esphome.io/)                                                                                     | anet-a8           |                                                                     |
| [BigTreeTech ESP-01s](https://biqu.equipment/collections/expansion-board/products/esp-01s-wifi-module-esp8266-for-skr-pro) | BigTreeTech SKR V1.4 Turbo                                                                                  | [ESP3D](https://github.com/luc-github/ESP3D)                                                                       |                   |                                                                     |
| [Cytron ESP-01s](https://www.cytron.io/p-esp-01-wifi-serial-transceiver-module-esp8266)                                    | [Maker Pi Pico](https://www.cytron.io/p-maker-pi-pico-simplifying-raspberry-pi-pico-for-beginners-and-kits) | [Cytron ESP-01S AT Firmware](https://github.com/CytronTechnologies/esp-at-binaries)                                |                   |                                                                     |
| Generic ESP-01s                                                                                                            | ESP-01 Adapter                                                                                              | [ESPHome](https://esphome.io/)                                                                                     |                   |                                                                     |
| Generic ESP-01s                                                                                                            | DHT22 Module                                                                                                | [ESPHome](https://esphome.io/)                                                                                     | dht22             |                                                                     |
| Generic ESP-01s                                                                                                            | DS18B20 Module                                                                                              | [ESPHome](https://esphome.io/)                                                                                     | ds18b20           |                                                                     |
| Generic ESP-01s                                                                                                            | Relay Module                                                                                                | [ESPHome](https://esphome.io/)                                                                                     | relay             |                                                                     |
| Generic ESP-01s                                                                                                            | RGB LED Module                                                                                              | [WLED](https://install.wled.me/)                                                                                   |                   |                                                                     |
| Generic ESP-32 Cam                                                                                                         | ESP32 CAM MB                                                                                                | [ESPHome](https://esphome.io/)                                                                                     | camera            |                                                                     |
| Generic ESP-32 Dev Kit C V4                                                                                                | ESP32 Expansion Board                                                                                       |                                                                                                                    |                   |                                                                     |
| [M5StampS3](https://docs.m5stack.com/en/core/stamps3)                                                                      | [M5Stack Cardputer](https://docs.m5stack.com/en/core/Cardputer)                                             |                                                                                                                    |                   |                                                                     |
| [Wemos D1 Mini Pro](https://www.wemos.cc/en/latest/d1/d1_mini_pro.html)                                                    | [Solar Wifi Weather Station](solar-wifi-weather-station)                                                    | [ESPHome](https://esphome.io/)                                                                                     | weather-station-1 | [Assembled, currently testing](solar-wifi-weather-station#assembly) |
| [Wemos D1 Mini Pro](https://www.wemos.cc/en/latest/d1/d1_mini_pro.html)                                                    | [Solar Wifi Weather Station](solar-wifi-weather-station)                                                    | [ESPHome](https://esphome.io/)                                                                                     | weather-station-2 |                                                                     |
| [Wemos D1 Mini Pro](https://www.wemos.cc/en/latest/d1/d1_mini_pro.html)                                                    | [Solar Wifi Weather Station](solar-wifi-weather-station)                                                    | [ESPHome](https://esphome.io/)                                                                                     | weather-station-3 |                                                                     |

# Fysetc

![A small 3D Printer mainboard with some big stepper drivers ](/assets/blog/single-board-computers/party-in-the-back.jpg)

| Item                                          | Case                           | Flashed with                                  | Notes                                                                   |
| --------------------------------------------- | ------------------------------ | --------------------------------------------- | ----------------------------------------------------------------------- |
| [PITB](https://github.com/FYSETC/FYSETC-PITB) | [Voron 2.4](printer-voron-2.4) | [Klipper Firmware](https://www.klipper3d.org) | 3D printer Expansion board based on RP2040 with 2 large TMC5160 Drivers |

# Hardkernel

![NAS based on an Odroid XU4](/assets/blog/single-board-computers/odroid-cloudshell2.jpg)

I purchased the Odroid XU4 and CloudShell enclosure to use as a Network Attached Storage (NAS) server to replace an old outdated and failing 1TB Western Digital MyBook World edition NAS.

| Item                                                        | Case                                                                                            | Storage               | OS                                                            | Hostname   | Notes                                                                                                                                                                |
| ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | --------------------- | ------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Odroid C2](https://wiki.odroid.com/odroid-c2/odroid-c2)    |                                                                                                 |                       |                                                               |            | With [Odroid UPS3](https://wiki.odroid.com/accessory/power_supply_battery/odroid-ups3) + [Odroid USB Wifi adapter](https://www.hardkernel.com/shop/wifi-module-5bk/) |
| [Odroid Go](https://wiki.odroid.com/odroid_go/odroid_go)    | [Odroid Go QWERTY](https://wiki.odroid.com/odroid_go/qwerty)                                    | 4GB MicroSD (Sandisk) | [Go-Play](https://wiki.odroid.com/odroid_go/emulator/go_play) |            | Boxed                                                                                                                                                                |
| [Odroid XU4](https://wiki.odroid.com/odroid-xu4/odroid-xu4) | [CloudShell 2](https://wiki.odroid.com/accessory/add-on_boards/xu4_cloudshell2/xu4_cloudshell2) | 32GB eMMC             | Ubuntu 22.04                                                  | cloudshell | With 2 x 3TB Hard Drives in RAID 1                                                                                                                                   |

# LDO Motors

| Item                                                                   | Case                           | Flashed with                                  | Notes |
| ---------------------------------------------------------------------- | ------------------------------ | --------------------------------------------- | ----- |
| [Picobilical](https://docs.ldomotors.com/en/voron/voron01/Picobilical) | [Voron 0.2](printer-voron-0.2) | [Klipper Firmware](https://www.klipper3d.org) |       |

# Mellow

![3D Printer mainboards made by Mellow](/assets/blog/single-board-computers/mellow-boards.jpg)

Mellow make mainboards to control 3D printers.

| Item                                                       | Case                           | Storage               | Flashed with                                    | Notes                                      |
| ---------------------------------------------------------- | ------------------------------ | --------------------- | ----------------------------------------------- | ------------------------------------------ |
| [Fly RRF E3](https://github.com/Mellow-3D/FLY-RRF-E3)      | [Rook 2020](printer-rook)      | 8GB MicroSD (Generic) | [RepRapFirmware](https://teamgloomy.github.io/) | With 4 Mellow Fly TMC2225 stepper drivers  |
| [Fly Super 8](https://mellow-3d.github.io/fly_super8.html) | [Voron 2.4](printer-voron-2.4) | 8GB MicroSD (Generic) | [Klipper Firmware](https://www.klipper3d.org)   | With 12 Mellow Fly TMC2130 stepper drivers |

# Next Thing Co

![$9 Bag of Chip](/assets/blog/single-board-computers/chip.jpg)

Dubbed as "The World's First Nine Dollar Computer" I purchased a CHIP in about November 2016 as a toy to play about with however I hardly used it and eventually the company Next Thing Co. entered insolvency it quickly became unsupported.

However mine still works albeit on a very old operating system version.

| Item                                               | Case          | Flashed with                                              | Notes                |
| -------------------------------------------------- | ------------- | --------------------------------------------------------- | -------------------- |
| [CHIP](https://docs.getchip.cc/chip#chip-hardware) | C.H.I.P. Case | [The CHIP Operating System](https://docs.getchip.cc/chip) | With Composite Cable |

# Raspberry Pi Zero

![8086 Cluster Hat with 4 Raspberry Pi Zeros](/assets/blog/single-board-computers/raspberry-pi-zero-cluster.jpg)

My Raspberry Pi Zero cluster was assembled using a 8086 Cluster Hat that is quite cool due to it using USB gadget mode of the Raspberry Pi Zero to boot up the Raspberry Pis over USB therefore they do not require their own MicroSD cards and can share the storage of the controller Pi... However after some testing, adding their own SD cards speeds up disk reads and writes considerably under load.

## Raspberry Pi Zero rev 1.2

| Item                      | Revision | RAM   | Case | Storage | OS  | hostname | Notes |
| ------------------------- | -------- | ----- | ---- | ------- | --- | -------- | ----- |
| Raspberry Pi Zero rev 1.2 | 900092   | 512MB |      |         |     |          |       |

### Pinout

```
Description        : Raspberry Pi Zero rev 1.2
Revision           : 900092
SoC                : BCM2835
RAM                : 512MB
Storage            : MicroSD
USB ports          : 1 (of which 0 USB3)
Ethernet ports     : 0 (0Mbps max. speed)
Wi-fi              : False
Bluetooth          : False
Camera ports (CSI) : 0
Display ports (DSI): 0

,--oooooooooooooooooooo---.
|  1ooooooooooooooooooo J8|
---+ PiZero      RUN o1   |
 sd| V1.2 +---+   TV 1o   |
---+      |SoC|           |
| hdmi    +---+   usb pwr |
`-|  |------------| |-| |-'

J8:
   3V3  (1) (2)  5V
 GPIO2  (3) (4)  5V
 GPIO3  (5) (6)  GND
 GPIO4  (7) (8)  GPIO14
   GND  (9) (10) GPIO15
GPIO17 (11) (12) GPIO18
GPIO27 (13) (14) GND
GPIO22 (15) (16) GPIO23
   3V3 (17) (18) GPIO24
GPIO10 (19) (20) GND
 GPIO9 (21) (22) GPIO25
GPIO11 (23) (24) GPIO8
   GND (25) (26) GPIO7
 GPIO0 (27) (28) GPIO1
 GPIO5 (29) (30) GND
 GPIO6 (31) (32) GPIO12
GPIO13 (33) (34) GND
GPIO19 (35) (36) GPIO16
GPIO26 (37) (38) GPIO20
   GND (39) (40) GPIO21

RUN:
RUN (1)
GND (2)

TV:
COMPOSITE (1)
      GND (2)

For further information, please refer to https://pinout.xyz/
```

## Raspberry Pi Zero rev 1.3

| Item                      | Revision | RAM   | Case                                                           | Storage | OS  | hostname | Notes |
| ------------------------- | -------- | ----- | -------------------------------------------------------------- | ------- | --- | -------- | ----- |
| Raspberry Pi Zero rev 1.3 | 900093   | 512MB | [8086.net ZeroDongle](https://8086.net/products#80860007)      |         |     |          |       |
| Raspberry Pi Zero rev 1.3 | 900093   | 512MB | [8086.net ZeroMicroDongle](https://8086.net/products#80860008) |         |     |          |       |

### Pinout

```
Description        : Raspberry Pi Zero rev 1.3
Revision           : 900093
SoC                : BCM2835
RAM                : 512MB
Storage            : MicroSD
USB ports          : 1 (of which 0 USB3)
Ethernet ports     : 0 (0Mbps max. speed)
Wi-fi              : False
Bluetooth          : False
Camera ports (CSI) : 1
Display ports (DSI): 0

,--oooooooooooooooooooo---.
|  1ooooooooooooooooooo J8|
---+ PiZero      RUN o1   c|
 sd| V1.3 +---+   TV 1o   s|
---+      |SoC|           i|
| hdmi    +---+   usb pwr |
`-|  |------------| |-| |-'

J8:
   3V3  (1) (2)  5V
 GPIO2  (3) (4)  5V
 GPIO3  (5) (6)  GND
 GPIO4  (7) (8)  GPIO14
   GND  (9) (10) GPIO15
GPIO17 (11) (12) GPIO18
GPIO27 (13) (14) GND
GPIO22 (15) (16) GPIO23
   3V3 (17) (18) GPIO24
GPIO10 (19) (20) GND
 GPIO9 (21) (22) GPIO25
GPIO11 (23) (24) GPIO8
   GND (25) (26) GPIO7
 GPIO0 (27) (28) GPIO1
 GPIO5 (29) (30) GND
 GPIO6 (31) (32) GPIO12
GPIO13 (33) (34) GND
GPIO19 (35) (36) GPIO16
GPIO26 (37) (38) GPIO20
   GND (39) (40) GPIO21

RUN:
RUN (1)
GND (2)

TV:
COMPOSITE (1)
      GND (2)

For further information, please refer to https://pinout.xyz/
```

## Raspberry Pi Zero W rev 1.1

| Item                         | Revision | RAM   | Case                                                                                                                        | Storage                 | OS                                                                    | hostname | Notes                                                                                                           |
| ---------------------------- | -------- | ----- | --------------------------------------------------------------------------------------------------------------------------- | ----------------------- | --------------------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------- |
| Raspberry Pi Zero W rev 1.1  | 9000c1   | 512MB | Official Raspberry Pi Zero Case (Camera Lid)                                                                                |                         |                                                                       | camera1  | With Generic Raspberry Pi Camera Rev 1.3                                                                        |
| Raspberry Pi Zero W rev 1.1  | 9000c1   | 512MB | Official Raspberry Pi Zero Case (Camera Lid)                                                                                |                         |                                                                       | camera2  | With Generic Raspberry Pi Camera Rev 1.3                                                                        |
| Raspberry Pi Zero W rev 1.1  | 9000c1   | 512MB | Official Raspberry Pi Zero Case (Camera Lid)                                                                                |                         |                                                                       |          |                                                                                                                 |
| Raspberry Pi Zero W rev 1.1  | 9000c1   | 512MB | Official Raspberry Pi Zero Case (Camera Lid)                                                                                |                         |                                                                       |          |                                                                                                                 |
| Raspberry Pi Zero WH rev 1.1 | 9000c1   | 512MB | [Pi Zero Case for Waveshare 2.13" eInk Display](https://thepihut.com/products/pi-zero-case-for-waveshare-2-13-eink-display) |                         |                                                                       |          | With Waveshare 2.13" eInk Display                                                                               |
| Raspberry Pi Zero WH rev 1.1 | 9000c1   | 512MB | [PaPiRus Zero Case](https://uk.pi-supply.com/products/papirus-zero-case)                                                    | 16GB MicroSD (Kingston) | [Jayofelony Pwnagotchi](https://github.com/jayofelony/pwnagotchi)     | pete     | With [PaPiRus Zero eInk Screen pHAT](https://uk.pi-supply.com/products/papirus-zero-epaper-screen-phat-pi-zero) |
| Raspberry Pi Zero WH rev 1.1 | 9000c1   | 512MB | [TV HAT Case for Pi Zero (v2.0)](https://thepihut.com/products/tv-uhat-case-for-raspberry-pi-zero-zerow)                    |                         |                                                                       |          | With Raspberry Pi TV HAT                                                                                        |
| Raspberry Pi Zero WH rev 1.1 | 9000c1   | 512MB | [AZ-Touch Pi Zero](https://www.hwhardsoft.de/english/projects/az-touch-pi0/)                                                |                         | [Weather Station](https://github.com/HWHardsoft/AZ-Touch-Pi0-Weather) |          |                                                                                                                 |

### Pinout

```
Description        : Raspberry Pi Zero W rev 1.1
Revision           : 9000c1
SoC                : BCM2835
RAM                : 512MB
Storage            : MicroSD
USB ports          : 1 (of which 0 USB3)
Ethernet ports     : 0 (0Mbps max. speed)
Wi-fi              : True
Bluetooth          : True
Camera ports (CSI) : 1
Display ports (DSI): 0

,--oooooooooooooooooooo---.
|  1ooooooooooooooooooo J8|
---+ PiZero W    RUN o1   c|
 sd| V1.1 +---+   TV 1o   s|
---+      |SoC|           i|
| hdmi    +---+   usb pwr |
`-|  |------------| |-| |-'

J8:
   3V3  (1) (2)  5V
 GPIO2  (3) (4)  5V
 GPIO3  (5) (6)  GND
 GPIO4  (7) (8)  GPIO14
   GND  (9) (10) GPIO15
GPIO17 (11) (12) GPIO18
GPIO27 (13) (14) GND
GPIO22 (15) (16) GPIO23
   3V3 (17) (18) GPIO24
GPIO10 (19) (20) GND
 GPIO9 (21) (22) GPIO25
GPIO11 (23) (24) GPIO8
   GND (25) (26) GPIO7
 GPIO0 (27) (28) GPIO1
 GPIO5 (29) (30) GND
 GPIO6 (31) (32) GPIO12
GPIO13 (33) (34) GND
GPIO19 (35) (36) GPIO16
GPIO26 (37) (38) GPIO20
   GND (39) (40) GPIO21

RUN:
RUN (1)
GND (2)

TV:
COMPOSITE (1)
      GND (2)

For further information, please refer to https://pinout.xyz/
```

## Raspberry Pi Zero2W rev 1.0

| Item                         | Revision | RAM   | Case                                                                                                                                | Storage                  | OS                                                                                                 | hostname | Notes |
| ---------------------------- | -------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | -------------------------------------------------------------------------------------------------- | -------- | ----- |
| Raspberry Pi Zero2WH rev 1.0 | 902120   | 512MB | [LDO Raspberry Pi Zero USB Expander PCB](https://docs.ldomotors.com/en/voron/voron01/wiring_guide_rev_e#preparing-the-raspberry-pi) | 64GB MicroSD (Integral)  | [MainsailOS](https://docs-os.mainsail.xyz)                                                         | voron0   |       |
| Raspberry Pi Zero2W rev 1.0  | 902120   | 512MB | [Retroflag GPi CASE 2W](https://retroflag.com/gpi_case_2w.html)                                                                     | 32GB MicroSD (Mingsford) | [RetroPie](https://retropie.org.uk)                                                                | gpi      |       |
| Raspberry Pi Zero2W rev 1.0  | 902120   | 512MB |                                                                                                                                     |                          |                                                                                                    |          |       |
| Raspberry Pi Zero2W rev 1.0  | 902120   | 512MB | [Cluster HAT Case v3.0](https://thepihut.com/products/cluster-hat-case)                                                             | 32GB MicroSD (Integral)  | [Raspberry Pi OS Lite (64-bit) - Bookworm ClusterCTRL](https://github.com/burtyb/clusterhat-image) | p1       |       |
| Raspberry Pi Zero2W rev 1.0  | 902120   | 512MB | [Cluster HAT Case v3.0](https://thepihut.com/products/cluster-hat-case)                                                             | 32GB MicroSD (Integral)  | [Raspberry Pi OS Lite (64-bit) - Bookworm ClusterCTRL](https://github.com/burtyb/clusterhat-image) | p2       |       |
| Raspberry Pi Zero2W rev 1.0  | 902120   | 512MB | [Cluster HAT Case v3.0](https://thepihut.com/products/cluster-hat-case)                                                             | 32GB MicroSD (Integral)  | [Raspberry Pi OS Lite (64-bit) - Bookworm ClusterCTRL](https://github.com/burtyb/clusterhat-image) | p3       |       |
| Raspberry Pi Zero2W rev 1.0  | 902120   | 512MB | [Cluster HAT Case v3.0](https://thepihut.com/products/cluster-hat-case)                                                             | 32GB MicroSD (Integral)  | [Raspberry Pi OS Lite (64-bit) - Bookworm ClusterCTRL](https://github.com/burtyb/clusterhat-image) | p4       |       |

### Pinout

```
Description        : Raspberry Pi Zero2W rev 1.0
Revision           : 902120
SoC                : BCM2837
RAM                : 512MB
Storage            : MicroSD
USB ports          : 1 (of which 0 USB3)
Ethernet ports     : 0 (0Mbps max. speed)
Wi-fi              : True
Bluetooth          : True
Camera ports (CSI) : 1
Display ports (DSI): 0

,--oooooooooooooooooooo---.
|  1ooooooooooooooooooo J8|
---+     +---+  PiZero2W  c|
 sd|     |SoC|   Wi V1.0  s|
---+     +---+   Fi       i|
| hdmi            usb pwr |
`-|  |------------| |-| |-'


J8:
   3V3  (1) (2)  5V
 GPIO2  (3) (4)  5V
 GPIO3  (5) (6)  GND
 GPIO4  (7) (8)  GPIO14
   GND  (9) (10) GPIO15
GPIO17 (11) (12) GPIO18
GPIO27 (13) (14) GND
GPIO22 (15) (16) GPIO23
   3V3 (17) (18) GPIO24
GPIO10 (19) (20) GND
 GPIO9 (21) (22) GPIO25
GPIO11 (23) (24) GPIO8
   GND (25) (26) GPIO7
 GPIO0 (27) (28) GPIO1
 GPIO5 (29) (30) GND
 GPIO6 (31) (32) GPIO12
GPIO13 (33) (34) GND
GPIO19 (35) (36) GPIO16
GPIO26 (37) (38) GPIO20
   GND (39) (40) GPIO21

For further information, please refer to https://pinout.xyz/
```

# Raspberry Pi 1

![OCR Education Kit for Raspberry Pi](/assets/blog/single-board-computers/raspberry-pi-1.jpg)

## Raspberry Pi A rev 2.0

| Item                   | Revision | RAM   | Case | Storage | OS  | Hostname | Notes                                                                      |
| ---------------------- | -------- | ----- | ---- | ------- | --- | -------- | -------------------------------------------------------------------------- |
| Raspberry Pi A rev 2.0 | 0008     | 256MB |      |         |     |          | With [Adafruit Prototyping Pi Plate](https://www.adafruit.com/product/801) |

### Pinout

```
Description        : Raspberry Pi A rev 2.0
Revision           : 0008
SoC                : BCM2835
RAM                : 256MB
Storage            : SD
USB ports          : 1 (of which 0 USB3)
Ethernet ports     : 0 (0Mbps max. speed)
Wi-fi              : False
Bluetooth          : False
Camera ports (CSI) : 1
Display ports (DSI): 1

+------------------| |--| |------+
| ooooooooooooo P1 |C|o |A|      |
| 1oooooooooooo    +-+oo+-+      |
|    1ooo             oo         |
| P5 oooo       +---+ oo        +====
|   |D          |SoC| oo        | USB
|   |S Pi Model +---+ oo        +====
|   |I A  V2.0        oo P3      |
|   |0             P2 11         |
|                        C|      |
|            o           S|      |
=pwr      P6 1   |HDMI|  I|      |
+----------------|    |--0|------+

P1:
   3V3  (1) (2)  5V
 GPIO2  (3) (4)  5V
 GPIO3  (5) (6)  GND
 GPIO4  (7) (8)  GPIO14
   GND  (9) (10) GPIO15
GPIO17 (11) (12) GPIO18
GPIO27 (13) (14) GND
GPIO22 (15) (16) GPIO23
   3V3 (17) (18) GPIO24
GPIO10 (19) (20) GND
 GPIO9 (21) (22) GPIO25
GPIO11 (23) (24) GPIO8
   GND (25) (26) GPIO7

P2:
GPU JTAG (1)
GPU JTAG (2)
GPU JTAG (3)
GPU JTAG (4)
GPU JTAG (5)
GPU JTAG (6)
GPU JTAG (7)
GPU JTAG (8)

P3:
LAN JTAG (1)
LAN JTAG (2)
LAN JTAG (3)
LAN JTAG (4)
LAN JTAG (5)
LAN JTAG (6)
LAN JTAG (7)

P5:
    5V (1) (2) 3V3
GPIO28 (3) (4) GPIO29
GPIO30 (5) (6) GPIO31
   GND (7) (8) GND

P6:
RUN (1)
GND (2)

For further information, please refer to https://pinout.xyz/
```

## Raspberry Pi B rev 1.0

![My Original Raspberry Pi 1](/assets/blog/single-board-computers/original-raspberry-pi-1.jpg)

This is my original Raspberry Pi in an Adafruit acrylic case. I soldered the LCD display myself!

| Item                   | Revision | RAM   | Case                               | Storage             | OS                                             | Hostname | Notes                                                                        |
| ---------------------- | -------- | ----- | ---------------------------------- | ------------------- | ---------------------------------------------- | -------- | ---------------------------------------------------------------------------- |
| Raspberry Pi B rev 1.0 | 0002     | 256MB | Adafruit Acrylic Case              | 8GB SD Card (TDK)   | Raspberry Pi OS Lite (Legacy, 32-bit) - Buster | original | With [Adafruit RGB Negative 16x2 LCD](https://www.adafruit.com/product/1110) |
| Raspberry Pi B rev 1.0 | 0002     | 256MB | Piface Digital Acrylic Case        |                     |                                                |          | With [PiFace Digital](http://www.piface.org.uk/products/piface_digital/)     |
| Raspberry Pi B rev 1.0 | 0002     | 256MB | Official Raspberry Pi Case (White) | Shared with `node1` |                                                |          | With [Pimoroni PiGlow](https://shop.pimoroni.com/products/piglow)            |

### Pinout

```
Description        : Raspberry Pi B rev 1.0
Revision           : 0002
SoC                : BCM2835
RAM                : 256MB
Storage            : SD
USB ports          : 2 (of which 0 USB3)
Ethernet ports     : 1 (100Mbps max. speed)
Wi-fi              : False
Bluetooth          : False
Camera ports (CSI) : 1
Display ports (DSI): 1

+------------------| |--| |------+
| ooooooooooooo P1 |C|o |A|      |
| 1oooooooooooo    +-+oo+-+      |
|                     oo         |
|               +---+ oo        +====
|   |D          |SoC| oo        | USB
|   |S Pi Model +---+ oo        +====
|   |I B  V1.0        oo P3      |
|   |0             P2 11    +======
|                        C| |   Net
|                        S| +======
=pwr             |HDMI|  I|      |
+----------------|    |--0|------+

P1:
   3V3  (1) (2)  5V
 GPIO0  (3) (4)  5V
 GPIO1  (5) (6)  GND
 GPIO4  (7) (8)  GPIO14
   GND  (9) (10) GPIO15
GPIO17 (11) (12) GPIO18
GPIO21 (13) (14) GND
GPIO22 (15) (16) GPIO23
   3V3 (17) (18) GPIO24
GPIO10 (19) (20) GND
 GPIO9 (21) (22) GPIO25
GPIO11 (23) (24) GPIO8
   GND (25) (26) GPIO7

P2:
GPU JTAG (1)
GPU JTAG (2)
GPU JTAG (3)
GPU JTAG (4)
GPU JTAG (5)
GPU JTAG (6)
GPU JTAG (7)
GPU JTAG (8)

P3:
LAN JTAG (1)
LAN JTAG (2)
LAN JTAG (3)
LAN JTAG (4)
LAN JTAG (5)
LAN JTAG (6)
LAN JTAG (7)

For further information, please refer to https://pinout.xyz/
```

## Raspberry Pi B rev 2.0

| Item                   | Revision | RAM   | Case                               | Storage             | OS  | Hostname | Notes                                                             |
| ---------------------- | -------- | ----- | ---------------------------------- | ------------------- | --- | -------- | ----------------------------------------------------------------- |
| Raspberry Pi B rev 2.0 | 000e     | 512MB | Official Raspberry Pi Case (Clear) | Shared with `node2` |     |          | With [Pimoroni PiGlow](https://shop.pimoroni.com/products/piglow) |
| Raspberry Pi B rev 2.0 | 000e     | 512MB | Official Raspberry Pi Case (Clear) | Shared with `node3` |     |          | With [Pimoroni PiGlow](https://shop.pimoroni.com/products/piglow) |
| Raspberry Pi B rev 2.0 | 000f     | 512MB | Official Raspberry Pi Case (Clear) | Shared with `node4` |     |          | With [Pimoroni PiGlow](https://shop.pimoroni.com/products/piglow) |
| Raspberry Pi B rev 2.0 | 000f     | 512MB | Official Raspberry Pi Case (Clear) | Shared with `node5` |     |          | With [Pimoroni PiGlow](https://shop.pimoroni.com/products/piglow) |
| Raspberry Pi B rev 2.0 | 000f     | 512MB |                                    |                     |     |          | Broken SD Slot                                                    |

### Pinout

```
Description        : Raspberry Pi B rev 2.0
Revision           : 000e
SoC                : BCM2835
RAM                : 512MB
Storage            : SD
USB ports          : 2 (of which 0 USB3)
Ethernet ports     : 1 (100Mbps max. speed)
Wi-fi              : False
Bluetooth          : False
Camera ports (CSI) : 1
Display ports (DSI): 1

+------------------| |--| |------+
| ooooooooooooo P1 |C|o |A|      |
| 1oooooooooooo    +-+oo+-+      |
|    1ooo             oo         |
| P5 oooo       +---+ oo        +====
|   |D          |SoC| oo        | USB
|   |S Pi Model +---+ oo        +====
|   |I B  V2.0        oo P3      |
|   |0             P2 11    +======
|                        C| |   Net
|            o           S| +======
=pwr      P6 1   |HDMI|  I|      |
+----------------|    |--0|------+

P1:
   3V3  (1) (2)  5V
 GPIO2  (3) (4)  5V
 GPIO3  (5) (6)  GND
 GPIO4  (7) (8)  GPIO14
   GND  (9) (10) GPIO15
GPIO17 (11) (12) GPIO18
GPIO27 (13) (14) GND
GPIO22 (15) (16) GPIO23
   3V3 (17) (18) GPIO24
GPIO10 (19) (20) GND
 GPIO9 (21) (22) GPIO25
GPIO11 (23) (24) GPIO8
   GND (25) (26) GPIO7

P2:
GPU JTAG (1)
GPU JTAG (2)
GPU JTAG (3)
GPU JTAG (4)
GPU JTAG (5)
GPU JTAG (6)
GPU JTAG (7)
GPU JTAG (8)

P3:
LAN JTAG (1)
LAN JTAG (2)
LAN JTAG (3)
LAN JTAG (4)
LAN JTAG (5)
LAN JTAG (6)
LAN JTAG (7)

P5:
    5V (1) (2) 3V3
GPIO28 (3) (4) GPIO29
GPIO30 (5) (6) GPIO31
   GND (7) (8) GND

P6:
RUN (1)
GND (2)

For further information, please refer to https://pinout.xyz/
```

## Raspberry Pi A+ rev 1.1

| Item                    | Revision | RAM   | Case                           | Storage | OS  | Hostname | Notes                                                             |
| ----------------------- | -------- | ----- | ------------------------------ | ------- | --- | -------- | ----------------------------------------------------------------- |
| Raspberry Pi A+ rev 1.1 | 0015     | 256MB | ModMyPi VESA-Pi+ Model A+ Case |         |     |          | With [Pimoroni PiGlow](https://shop.pimoroni.com/products/piglow) |

### Pinout

```
Description        : Raspberry Pi A+ rev 1.1
Revision           : 0015
SoC                : BCM2835
RAM                : 256MB
Storage            : MicroSD
USB ports          : 1 (of which 0 USB3)
Ethernet ports     : 0 (0Mbps max. speed)
Wi-fi              : False
Bluetooth          : False
Camera ports (CSI) : 1
Display ports (DSI): 1

,--------------------------.
| oooooooooooooooooooo J8  |
| 1ooooooooooooooooooo     |
|                          |
|      Pi Model A+  V1.1   |
| |D      +---+         +====
| |S      |SoC|         | USB
| |I      +---+         +====
| |0               C|      |
|                  S|      |
|                  I| |A|  |
| pwr      |HDMI|  0| |u|  |
`-| |------|    |-----|x|--'

J8:
   3V3  (1) (2)  5V
 GPIO2  (3) (4)  5V
 GPIO3  (5) (6)  GND
 GPIO4  (7) (8)  GPIO14
   GND  (9) (10) GPIO15
GPIO17 (11) (12) GPIO18
GPIO27 (13) (14) GND
GPIO22 (15) (16) GPIO23
   3V3 (17) (18) GPIO24
GPIO10 (19) (20) GND
 GPIO9 (21) (22) GPIO25
GPIO11 (23) (24) GPIO8
   GND (25) (26) GPIO7
 GPIO0 (27) (28) GPIO1
 GPIO5 (29) (30) GND
 GPIO6 (31) (32) GPIO12
GPIO13 (33) (34) GND
GPIO19 (35) (36) GPIO16
GPIO26 (37) (38) GPIO20
   GND (39) (40) GPIO21

For further information, please refer to https://pinout.xyz/
```

## Raspberry Pi B+ rev 1.2

| Item                    | Revision | RAM   | Case                              | Storage                     | OS                                               | Hostname | Notes                                                             |
| ----------------------- | -------- | ----- | --------------------------------- | --------------------------- | ------------------------------------------------ | -------- | ----------------------------------------------------------------- |
| Raspberry Pi B+ rev 1.2 | 0010     | 512MB | CanaKit Raspberry Pi Case (Clear) | 8GB MicroSD (Sandisk Ultra) | Raspberry Pi OS Lite (Legacy, 32-bit) - Bullseye |          | With [Pimoroni PiGlow](https://shop.pimoroni.com/products/piglow) |
| Raspberry Pi B+ rev 1.2 | 0013     | 512MB | CanaKit Raspberry Pi Case (Clear) | 8GB MicroSD (Sandisk Ultra) | Raspberry Pi OS Lite (Legacy, 32-bit) - Bullseye |          | With [Pimoroni PiGlow](https://shop.pimoroni.com/products/piglow) |

### Pinout

```
Description        : Raspberry Pi B+ rev 1.2
Revision           : 0010
SoC                : BCM2835
RAM                : 512MB
Storage            : MicroSD
USB ports          : 4 (of which 0 USB3)
Ethernet ports     : 1 (100Mbps max. speed)
Wi-fi              : False
Bluetooth          : False
Camera ports (CSI) : 1
Display ports (DSI): 1

,--------------------------------.
| oooooooooooooooooooo J8     +====
| 1ooooooooooooooooooo        | USB
|                             +====
|      Pi Model B+  V1.2         |
| |D      +---+               +====
| |S      |SoC|               | USB
| |I      +---+               +====
| |0               C|            |
|                  S|       +======
|                  I| |A|   |   Net
| pwr      |HDMI|  0| |u|   +======
`-| |------|    |-----|x|--------'

J8:
   3V3  (1) (2)  5V
 GPIO2  (3) (4)  5V
 GPIO3  (5) (6)  GND
 GPIO4  (7) (8)  GPIO14
   GND  (9) (10) GPIO15
GPIO17 (11) (12) GPIO18
GPIO27 (13) (14) GND
GPIO22 (15) (16) GPIO23
   3V3 (17) (18) GPIO24
GPIO10 (19) (20) GND
 GPIO9 (21) (22) GPIO25
GPIO11 (23) (24) GPIO8
   GND (25) (26) GPIO7
 GPIO0 (27) (28) GPIO1
 GPIO5 (29) (30) GND
 GPIO6 (31) (32) GPIO12
GPIO13 (33) (34) GND
GPIO19 (35) (36) GPIO16
GPIO26 (37) (38) GPIO20
   GND (39) (40) GPIO21

For further information, please refer to https://pinout.xyz/
```

# Raspberry Pi 2

![My original Raspberry Pi cluster](/assets/blog/single-board-computers/raspberry-pi-2-cluster.jpg)

This was my original Raspberry Pi cluster, It was originally 4 layers however I managed to find a case that fit perfectly to add an additional layer. If you look hard enough, you will see that the fan of the bottom layer is in a slightly different place and the standoffs are slightly shorter.

The cluster was set up to learn [Ansible](https://www.ansible.com) as the Raspberry Pi 2s were a little too slow to run Docker or Kubernetes.

## Raspberry Pi 2B rev 1.1

| Item                    | Revision | RAM | Case         | Power Supply              | Storage                      | OS                                             | Hostname | Notes |
| ----------------------- | -------- | --- | ------------ | ------------------------- | ---------------------------- | ---------------------------------------------- | -------- | ----- |
| Raspberry Pi 2B rev 1.1 | a01041   | 1GB | Cluster Case | Anker PowerPort 6 (White) | 16GB MicroSD (Sandisk Ultra) | Raspberry Pi OS Lite (Legacy, 32-bit) - Buster | node1    |       |
| Raspberry Pi 2B rev 1.1 | a01041   | 1GB | Cluster Case | Anker PowerPort 6 (White) | 16GB MicroSD (Sandisk Ultra) | Raspberry Pi OS Lite (Legacy, 32-bit) - Buster | node2    |       |
| Raspberry Pi 2B rev 1.1 | a01041   | 1GB | Cluster Case | Anker PowerPort 6 (White) | 16GB MicroSD (Sandisk Ultra) | Raspberry Pi OS Lite (Legacy, 32-bit) - Buster | node3    |       |
| Raspberry Pi 2B rev 1.1 | a01041   | 1GB | Cluster Case | Anker PowerPort 6 (White) | 16GB MicroSD (Sandisk Ultra) | Raspberry Pi OS Lite (Legacy, 32-bit) - Buster | node4    |       |
| Raspberry Pi 2B rev 1.1 | a01041   | 1GB | Cluster Case | Anker PowerPort 6 (White) | 16GB MicroSD (Sandisk Ultra) | Raspberry Pi OS Lite (Legacy, 32-bit) - Buster | node5    |       |

### Pinout

```
Description        : Raspberry Pi 2B rev 1.1
Revision           : a01041
SoC                : BCM2836
RAM                : 1GB
Storage            : MicroSD
USB ports          : 4 (of which 0 USB3)
Ethernet ports     : 1 (100Mbps max. speed)
Wi-fi              : False
Bluetooth          : False
Camera ports (CSI) : 1
Display ports (DSI): 1

,--------------------------------.
| oooooooooooooooooooo J8     +====
| 1ooooooooooooooooooo        | USB
|                             +====
|      Pi Model 2B  V1.1         |
| |D      +---+               +====
| |S      |SoC|               | USB
| |I      +---+               +====
| |0               C|            |
|                  S|       +======
|                  I| |A|   |   Net
| pwr      |HDMI|  0| |u|   +======
`-| |------|    |-----|x|--------'

J8:
   3V3  (1) (2)  5V
 GPIO2  (3) (4)  5V
 GPIO3  (5) (6)  GND
 GPIO4  (7) (8)  GPIO14
   GND  (9) (10) GPIO15
GPIO17 (11) (12) GPIO18
GPIO27 (13) (14) GND
GPIO22 (15) (16) GPIO23
   3V3 (17) (18) GPIO24
GPIO10 (19) (20) GND
 GPIO9 (21) (22) GPIO25
GPIO11 (23) (24) GPIO8
   GND (25) (26) GPIO7
 GPIO0 (27) (28) GPIO1
 GPIO5 (29) (30) GND
 GPIO6 (31) (32) GPIO12
GPIO13 (33) (34) GND
GPIO19 (35) (36) GPIO16
GPIO26 (37) (38) GPIO20
   GND (39) (40) GPIO21

For further information, please refer to https://pinout.xyz/
```

## Raspberry Pi 2B rev 1.2

![FlightAware setup for tracking aircraft](/assets/blog/single-board-computers/flight-tracker.jpg)

As I live fairly close to Cardiff International Airport and notice many aircraft flying over my house I have set up a flight tracker find out some more information about the planes and contribute the flight tracking information to [FlightAware](https://flightaware.com/adsb/stats/user/mikepthomas) for others to benefit from the information too.

| Item                    | Revision | RAM | Case                 | Power Supply                   | Storage                      | OS                                               | Hostname | Notes                                                                                                          |
| ----------------------- | -------- | --- | -------------------- | ------------------------------ | ---------------------------- | ------------------------------------------------ | -------- | -------------------------------------------------------------------------------------------------------------- |
| Raspberry Pi 2B rev 1.2 | a02042   | 1GB | Flirc Aluminium Case | Clearain Micro USB with Switch | 16GB MicroSD (Sandisk Ultra) | Raspberry Pi OS Lite (Legacy, 32-bit) - Bullseye | piaware  | Boxed With FlightAware Pro Stick Plus, ADS-B installed via [Docker](https://sdr-enthusiasts.gitbook.io/ads-b/) |

### Pinout

```
Description        : Raspberry Pi 2B rev 1.2
Revision           : a02042
SoC                : BCM2837
RAM                : 1GB
Storage            : MicroSD
USB ports          : 4 (of which 0 USB3)
Ethernet ports     : 1 (100Mbps max. speed)
Wi-fi              : False
Bluetooth          : False
Camera ports (CSI) : 1
Display ports (DSI): 1

,--------------------------------.
| oooooooooooooooooooo J8     +====
| 1ooooooooooooooooooo        | USB
|                             +====
|      Pi Model 2B  V1.2         |
| |D      +---+               +====
| |S      |SoC|               | USB
| |I      +---+               +====
| |0               C|            |
|                  S|       +======
|                  I| |A|   |   Net
| pwr      |HDMI|  0| |u|   +======
`-| |------|    |-----|x|--------'

J8:
   3V3  (1) (2)  5V
 GPIO2  (3) (4)  5V
 GPIO3  (5) (6)  GND
 GPIO4  (7) (8)  GPIO14
   GND  (9) (10) GPIO15
GPIO17 (11) (12) GPIO18
GPIO27 (13) (14) GND
GPIO22 (15) (16) GPIO23
   3V3 (17) (18) GPIO24
GPIO10 (19) (20) GND
 GPIO9 (21) (22) GPIO25
GPIO11 (23) (24) GPIO8
   GND (25) (26) GPIO7
 GPIO0 (27) (28) GPIO1
 GPIO5 (29) (30) GND
 GPIO6 (31) (32) GPIO12
GPIO13 (33) (34) GND
GPIO19 (35) (36) GPIO16
GPIO26 (37) (38) GPIO20
   GND (39) (40) GPIO21

For further information, please refer to https://pinout.xyz/
```

# Raspberry Pi 3

![Updated Raspberry Pi cluster for Docker Swarm](/assets/blog/single-board-computers/raspberry-pi-3-cluster.jpg)

I got this case from eBay, it was not in the best shape, very dusty and scratched, it cost me £68.55 but it did contain 3 Raspberry Pi 3s (including one with broken Wifi and Bluetooth) and a few Micro USB Chargers Ethernet cables. The case also came with a switch that fits at the bottom perfectly.

I cleaned it up with some isopropyl alcohol and re-assembled it with some new screws as some of them were quite rusted.

I assembled this cluster to learn all about Containerization using [Docker Swarm mode](https://docs.docker.com/engine/swarm) and eventually, Kubernetes using [MicroK8s](https://microk8s.io/), however the Raspberry Pi 3s are a little too slow to fully run a K8s cluster with more than a handful of containers.

## Raspberry Pi 3A+ rev 1.0

| Item                     | Revision | RAM   | Case               | Power Supply | Storage                 | OS                                         | Hostname | Notes |
| ------------------------ | -------- | ----- | ------------------ | ------------ | ----------------------- | ------------------------------------------ | -------- | ----- |
| Raspberry Pi 3A+ rev 1.0 | 9020e0   | 512MB | [AM8](printer-am8) |              | 64GB MicroSD (Integral) | [MainsailOS](https://docs-os.mainsail.xyz) | am8      | Boxed |

### Pinout

```
Description        : Raspberry Pi 3A+ rev 1.0
Revision           : 9020e0
SoC                : BCM2837
RAM                : 512MB
Storage            : MicroSD
USB ports          : 1 (of which 0 USB3)
Ethernet ports     : 0 (0Mbps max. speed)
Wi-fi              : True
Bluetooth          : True
Camera ports (CSI) : 1
Display ports (DSI): 1

,--------------------------.
| oooooooooooooooooooo J8  |
| 1ooooooooooooooooooo  RUN|
|  Wi                    1o|
|  Fi  Pi Model 3A+ V1.0   |
| |D     ,---.          +====
| |S     |SoC|          | USB
| |I     `---'          +====
| |0               C|      |
|                  S|      |
|                  I| |A|  |
| pwr      |HDMI|  0| |u|  |
`-| |------|    |-----|x|--'

J8:
   3V3  (1) (2)  5V
 GPIO2  (3) (4)  5V
 GPIO3  (5) (6)  GND
 GPIO4  (7) (8)  GPIO14
   GND  (9) (10) GPIO15
GPIO17 (11) (12) GPIO18
GPIO27 (13) (14) GND
GPIO22 (15) (16) GPIO23
   3V3 (17) (18) GPIO24
GPIO10 (19) (20) GND
 GPIO9 (21) (22) GPIO25
GPIO11 (23) (24) GPIO8
   GND (25) (26) GPIO7
 GPIO0 (27) (28) GPIO1
 GPIO5 (29) (30) GND
 GPIO6 (31) (32) GPIO12
GPIO13 (33) (34) GND
GPIO19 (35) (36) GPIO16
GPIO26 (37) (38) GPIO20
   GND (39) (40) GPIO21

RUN:
POWER ENABLE (1)
         RUN (2)

For further information, please refer to https://pinout.xyz/
```

## Raspberry Pi 3B rev 1.2

| Item                    | Revision | RAM | Case                                                                              | Power Supply                               | Storage                      | OS                                                       | Hostname | Notes                                                                                     |
| ----------------------- | -------- | --- | --------------------------------------------------------------------------------- | ------------------------------------------ | ---------------------------- | -------------------------------------------------------- | -------- | ----------------------------------------------------------------------------------------- |
| Raspberry Pi 3B rev 1.2 | a02082   | 1GB | CanaKit Raspberry Pi Case (Black)                                                 | iTrunk Raspberry Pi 3 Model B Power Supply | 32GB MicroSD (Sandisk Ultra) | Raspberry Pi OS with desktop (Legacy, 32-bit) - Bullseye | white    | Broken Wifi and Bluetooth                                                                 |
| Raspberry Pi 3B rev 1.2 | a02082   | 1GB | Waveshare Touch Screen Case                                                       |                                            | 32GB MicroSD (Sandisk Ultra) |                                                          |          |                                                                                           |
| Raspberry Pi 3B rev 1.2 | a02082   | 1GB | Flirc Aluminium Case                                                              | Element 14 Universal Power Supply (White)  | 32GB MicroSD (Sandisk Ultra) |                                                          |          |                                                                                           |
| Raspberry Pi 3B rev 1.2 | a02082   | 1GB | Flirc Aluminium Case                                                              | Element 14 Universal Power Supply (White)  | 32GB MicroSD (Sandisk Ultra) |                                                          |          |                                                                                           |
| Raspberry Pi 3B rev 1.2 | a22082   | 1GB | [Sense HAT Case](https://thepihut.com/products/sense-hat-case-for-raspberry-pi-4) | Element 14 Universal Power Supply (Black)  | 32GB MicroSD (Sandisk Ultra) |                                                          |          | With [Sense Hat](https://www.raspberrypi.com/documentation/accessories/sense-hat.html) V1 |
| Raspberry Pi 3B rev 1.2 | a22082   | 1GB |                                                                                   |                                            |                              |                                                          |          | With [Cluster Hat v2.4](https://thepihut.com/products/cluster-hat-v2-0)                   |

### Pinout

```
Description        : Raspberry Pi 3B rev 1.2
Revision           : a02082
SoC                : BCM2837
RAM                : 1GB
Storage            : MicroSD
USB ports          : 4 (of which 0 USB3)
Ethernet ports     : 1 (100Mbps max. speed)
Wi-fi              : True
Bluetooth          : True
Camera ports (CSI) : 1
Display ports (DSI): 1

,--------------------------------.
| oooooooooooooooooooo J8     +====
| 1ooooooooooooooooooo        | USB
|                             +====
|      Pi Model 3B  V1.2         |
| |D      +---+               +====
| |S      |SoC|               | USB
| |I      +---+               +====
| |0               C|            |
|                  S|       +======
|                  I| |A|   |   Net
| pwr      |HDMI|  0| |u|   +======
`-| |------|    |-----|x|--------'

J8:
   3V3  (1) (2)  5V
 GPIO2  (3) (4)  5V
 GPIO3  (5) (6)  GND
 GPIO4  (7) (8)  GPIO14
   GND  (9) (10) GPIO15
GPIO17 (11) (12) GPIO18
GPIO27 (13) (14) GND
GPIO22 (15) (16) GPIO23
   3V3 (17) (18) GPIO24
GPIO10 (19) (20) GND
 GPIO9 (21) (22) GPIO25
GPIO11 (23) (24) GPIO8
   GND (25) (26) GPIO7
 GPIO0 (27) (28) GPIO1
 GPIO5 (29) (30) GND
 GPIO6 (31) (32) GPIO12
GPIO13 (33) (34) GND
GPIO19 (35) (36) GPIO16
GPIO26 (37) (38) GPIO20
   GND (39) (40) GPIO21

For further information, please refer to https://pinout.xyz/
```

## Raspberry Pi 3B+ rev 1.3

| Item                     | Revision | RAM | Case                                                                  | Power Supply                          | Storage                      | OS                                       | Hostname | Notes                                                                                  |
| ------------------------ | -------- | --- | --------------------------------------------------------------------- | ------------------------------------- | ---------------------------- | ---------------------------------------- | -------- | -------------------------------------------------------------------------------------- |
| Raspberry Pi 3B+ rev 1.3 | a020d3   | 1GB | Cluster Case                                                          | Anker PowerPort 5 (Black)             | 64GB MicroSD (Sandisk Ultra) | Raspberry Pi OS Lite (64-bit) - Bookworm | red      | With [Pimoroni Blinkt](https://shop.pimoroni.com/products/blinkt)                      |
| Raspberry Pi 3B+ rev 1.3 | a020d3   | 1GB | Cluster Case                                                          | Anker PowerPort 5 (Black)             | 64GB MicroSD (Sandisk Ultra) | Raspberry Pi OS Lite (64-bit) - Bookworm | green    | With [Pimoroni Blinkt](https://shop.pimoroni.com/products/blinkt)                      |
| Raspberry Pi 3B+ rev 1.3 | a020d3   | 1GB | Cluster Case                                                          | Anker PowerPort 5 (Black)             | 64GB MicroSD (Sandisk Ultra) | Raspberry Pi OS Lite (64-bit) - Bookworm | blue     | With [Pimoroni Blinkt](https://shop.pimoroni.com/products/blinkt)                      |
| Raspberry Pi 3B+ rev 1.3 | a020d3   | 1GB | Cluster Case                                                          | Anker PowerPort 5 (Black)             | 64GB MicroSD (Sandisk Ultra) | Raspberry Pi OS Lite (64-bit) - Bookworm | black    | With [Pimoroni Blinkt](https://shop.pimoroni.com/products/blinkt)                      |
| Raspberry Pi 3B+ rev 1.3 | a020d3   | 1GB | [Retroflag MegaPi Case M](https://retroflag.com/MEGAPi-CASE-M.html)   | Generic 5V 3A Micro USB AC/DC Adapter | 16GB MicroSD (Integral)      | [RetroPie](https://retropie.org.uk)      | megapi   | With [Classic USB Controller M](https://retroflag.com/Classic-USB-Controller-M.html)   |
| Raspberry Pi 3B+ rev 1.3 | a020d3   | 1GB | [Retroflag NESPi Case+](https://retroflag.com/nespi-case-plus.html)   | Generic 5V 3A Micro USB AC/DC Adapter | 16GB MicroSD (Integral)      | [RetroPie](https://retropie.org.uk)      | nespi    | With 2 Classic USB NES Controllers                                                     |
| Raspberry Pi 3B+ rev 1.3 | a020d3   | 1GB | [Retroflag SuperPi Case J](https://retroflag.com/SUPERPi-CASE-J.html) | Generic 5V 3A Micro USB AC/DC Adapter | 16GB MicroSD (Integral)      | [RetroPie](https://retropie.org.uk)      | superpi  | With 2 [Classic USB Controller J](https://retroflag.com/Classic-USB-Controller-J.html) |

### Pinout

```
Description        : Raspberry Pi 3B+ rev 1.3
Revision           : a020d3
SoC                : BCM2837
RAM                : 1GB
Storage            : MicroSD
USB ports          : 4 (of which 0 USB3)
Ethernet ports     : 1 (300Mbps max. speed)
Wi-fi              : True
Bluetooth          : True
Camera ports (CSI) : 1
Display ports (DSI): 1

,--------------------------------.
| oooooooooooooooooooo J8 PoE +====
| 1ooooooooooooooooooo   12   | USB
|  Wi                    oo   +====
|  Fi  Pi Model 3B+ V1.3         |
| |D     ,---.           1o   +====
| |S     |SoC|            RUN | USB
| |I     `---'                +====
| |0               C|            |
|                  S|       +======
|                  I| |A|   |   Net
| pwr      |HDMI|  0| |u|   +======
`-| |------|    |-----|x|--------'

J8:
   3V3  (1) (2)  5V
 GPIO2  (3) (4)  5V
 GPIO3  (5) (6)  GND
 GPIO4  (7) (8)  GPIO14
   GND  (9) (10) GPIO15
GPIO17 (11) (12) GPIO18
GPIO27 (13) (14) GND
GPIO22 (15) (16) GPIO23
   3V3 (17) (18) GPIO24
GPIO10 (19) (20) GND
 GPIO9 (21) (22) GPIO25
GPIO11 (23) (24) GPIO8
   GND (25) (26) GPIO7
 GPIO0 (27) (28) GPIO1
 GPIO5 (29) (30) GND
 GPIO6 (31) (32) GPIO12
GPIO13 (33) (34) GND
GPIO19 (35) (36) GPIO16
GPIO26 (37) (38) GPIO20
   GND (39) (40) GPIO21

RUN:
POWER ENABLE (1)
         RUN (2)

POE:
TR01 TAP (1) (2) TR00 TAP
TR03 TAP (3) (4) TR02 TAP

For further information, please refer to https://pinout.xyz/
```

# Raspberry Pi 4

![My Raspberry Pi 400 setup on my desk](/assets/blog/single-board-computers/pi400.jpg)

## Raspberry Pi 400 rev 1.0

| Item                     | Revision | RAM | Case | Power Supply                                 | Storage                     | OS                                               | Hostname | Notes                                                                                                                          |
| ------------------------ | -------- | --- | ---- | -------------------------------------------- | --------------------------- | ------------------------------------------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Raspberry Pi 400 rev 1.0 | c03130   | 4GB |      | Official Raspberry Pi 4 Power Supply (White) | 16GB MicroSD (Sandisk Edge) | Raspberry Pi OS Full (Legacy, 32-bit) - Bullseye | pi400    | Boxed Desktop Kit with [DACBerry 400 S](https://www.osaelectronics.com/learn/tutorials/dacberry-400-series-quick-start-guide/) |

### Pinout

```
Description        : Raspberry Pi 400 rev 1.0
Revision           : c03130
SoC                : BCM2711
RAM                : 4GB
Storage            : MicroSD
USB ports          : 3 (of which 2 USB3)
Ethernet ports     : 1 (1000Mbps max. speed)
Wi-fi              : True
Bluetooth          : True
Camera ports (CSI) : 0
Display ports (DSI): 0

    ,------+----+----+----+----+---+--+--+--+--------------------+---.
  ,'       |Net |USB |USB |USB |pwr|hd|hd|sd|oooooooooooooooooooo|    `.
 /     ==  |    | 2  | 3  | 3  |   |m1|m0|  |1ooooooooooooooooooo|      \
,------------------------------------------------------------------------.
|  ___ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ o o o____  |
| |Esc|F111|F212|F3  |F4  |F5  |F6  |F7  |F8  |F9  |F10o|NumL|PtSq|DlIn| |
|  ___ ___ ____ ____ ____ ____ ____ ___ ____ ____ ____ ___ ____ _______  |
| |¬  |!  |"   |£   |$   |%   |^   |& 7|*  8|(  9|)  *|_  |+   |BkSpc  | |
| |` ||1  |2   |3   |4   |5   |6   |7  |8   |9   |0   |-  |=   |<--    | |
|  _____ ___ ____ ____ ____ ____ ____ ___ ____ ____ ____ ____ __ ______  |
| |Tab  |Q  |W   |E   |R   |T   |Y   |U 4|I  5|O  6|P  -|{   |} |Enter | |
| |->|  |   |    |    |    |    |    |   |    |    |    |[   |] |<-'   | |
|  ______ ____ ____ ____ ____ ____ ____ ___ ____ ____ ____ ____ __     | |
| |Caps  |A   |S   |D   |F   |G   |H   |J 1|K  2|L  3|:  +|@   |~ |    | |
| |Lock  |    |    |    |    |    |    |   |    |    |;   |'   |# |    | |
|  _____ ___ ___ ____ ____ ____ ____ ____ ___ ____ ____ ____ __________  |
| |Shift||  |Z  |X   |C   |V   |B   |N   |M 0|<   |>  .|?  /|Shift     | |
| |^    |\  |   |    |    |    |    |    |   |,   |.   |/   |^         | |
|  ____ ___ ____ ____ _______________________ ____ ____      _____       |
| |Ctrl|Fn | ** |Alt |                       |Alt |Ctrl|____|^PgUp|____  |
| |    |   | {} |    |                       |    |    |<Hom|vPgDn|>End| |
`------------------------------------------------------------------------'
                                                 Raspberry Pi 400 Rev 1.0

J8:
   3V3  (1) (2)  5V
 GPIO2  (3) (4)  5V
 GPIO3  (5) (6)  GND
 GPIO4  (7) (8)  GPIO14
   GND  (9) (10) GPIO15
GPIO17 (11) (12) GPIO18
GPIO27 (13) (14) GND
GPIO22 (15) (16) GPIO23
   3V3 (17) (18) GPIO24
GPIO10 (19) (20) GND
 GPIO9 (21) (22) GPIO25
GPIO11 (23) (24) GPIO8
   GND (25) (26) GPIO7
 GPIO0 (27) (28) GPIO1
 GPIO5 (29) (30) GND
 GPIO6 (31) (32) GPIO12
GPIO13 (33) (34) GND
GPIO19 (35) (36) GPIO16
GPIO26 (37) (38) GPIO20
   GND (39) (40) GPIO21

For further information, please refer to https://pinout.xyz/
```

## Raspberry Pi 4B rev 1.1

| Item                    | Revision | RAM | Case                                                                   | Power Supply        | Storage                     | OS                                                                  | Hostname | Notes                                                                                         |
| ----------------------- | -------- | --- | ---------------------------------------------------------------------- | ------------------- | --------------------------- | ------------------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------- |
| Raspberry Pi 4B rev 1.1 | c03111   | 4GB | [pi-top [4]](https://knowledgebase.pi-top.com/knowledge/pi-top4-setup) | Pi-Top Power Supply | 16GB MicroSD (Sandisk Edge) | [pi-topOS - Bullseye](https://www.pi-top.com/resources/download-os) | pi-top   | Boxed with [Pi-Top Foundation Kit](https://knowledgebase.pi-top.com/knowledge/foundation-kit) |
| Raspberry Pi 4B rev 1.1 | c03111   | 4GB | [pi-top [4]](https://knowledgebase.pi-top.com/knowledge/pi-top4-setup) | Pi-Top Power Supply | 16GB MicroSD (Sandisk Edge) | [pi-topOS - Bullseye](https://www.pi-top.com/resources/download-os) | pi-top   | Boxed with [Pi-Top Foundation Kit](https://knowledgebase.pi-top.com/knowledge/foundation-kit) |

### Pinout

```
Description        : Raspberry Pi 4B rev 1.1
Revision           : c03111
SoC                : BCM2711
RAM                : 4GB
Storage            : MicroSD
USB ports          : 4 (of which 2 USB3)
Ethernet ports     : 1 (1000Mbps max. speed)
Wi-fi              : True
Bluetooth          : True
Camera ports (CSI) : 1
Display ports (DSI): 1

,--------------------------------.
| oooooooooooooooooooo J8   +======
| 1ooooooooooooooooooo  J14 |   Net
|  Wi                    12 +======
|  Fi  Pi Model 4B  V1.1 oo      |
| |D     ,---. +---+          +====
| |S     |SoC| |RAM|          |USB3
| |I     `---' +---+          +====
| |0                C|           |
| oo1 J2            S|        +====
|                   I| |A|    |USB2
| pwr   |hd|   |hd| 0| |u|    +====
`-| |---|m0|---|m1|----|x|-------'

J8:
   3V3  (1) (2)  5V
 GPIO2  (3) (4)  5V
 GPIO3  (5) (6)  GND
 GPIO4  (7) (8)  GPIO14
   GND  (9) (10) GPIO15
GPIO17 (11) (12) GPIO18
GPIO27 (13) (14) GND
GPIO22 (15) (16) GPIO23
   3V3 (17) (18) GPIO24
GPIO10 (19) (20) GND
 GPIO9 (21) (22) GPIO25
GPIO11 (23) (24) GPIO8
   GND (25) (26) GPIO7
 GPIO0 (27) (28) GPIO1
 GPIO5 (29) (30) GND
 GPIO6 (31) (32) GPIO12
GPIO13 (33) (34) GND
GPIO19 (35) (36) GPIO16
GPIO26 (37) (38) GPIO20
   GND (39) (40) GPIO21

J2:
GLOBAL ENABLE (1)
          GND (2)
          RUN (3)

J14:
TR01 TAP (1) (2) TR00 TAP
TR03 TAP (3) (4) TR02 TAP

For further information, please refer to https://pinout.xyz/
```

## Raspberry Pi 4B rev 1.2

| Item                    | Revision | RAM | Case                                                                               | Power Supply        | Storage                  | OS                                                                  | Hostname | Notes                                                                                                                                                                                                                                                                                      |
| ----------------------- | -------- | --- | ---------------------------------------------------------------------------------- | ------------------- | ------------------------ | ------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Raspberry Pi 4B rev 1.2 | c03112   | 4GB | [pi-top [4] DIY Edition](https://knowledgebase.pi-top.com/knowledge/diy-tech-spec) | Pi-Top Power Supply | 128GB MicroSD (Integral) | [pi-topOS - Bullseye](https://www.pi-top.com/resources/download-os) | pi-top   | Boxed with [Pi-Top Touch Display and Bluetooth Keyboard](https://shop.pi-top.com/products/touch-display-and-bluetooth-keyboard), [Pi-Top Expansion Plate](https://knowledgebase.pi-top.com/knowledge/expansion-plate) and [Pi-Top Robotics Kit](https://www.pi-top.com/start/robotics-kit) |

### Pinout

```
Description        : Raspberry Pi 4B rev 1.2
Revision           : c03112
SoC                : BCM2711
RAM                : 4GB
Storage            : MicroSD
USB ports          : 4 (of which 2 USB3)
Ethernet ports     : 1 (1000Mbps max. speed)
Wi-fi              : True
Bluetooth          : True
Camera ports (CSI) : 1
Display ports (DSI): 1

,--------------------------------.
| oooooooooooooooooooo J8   +======
| 1ooooooooooooooooooo  J14 |   Net
|  Wi                    12 +======
|  Fi  Pi Model 4B  V1.2 oo      |
| |D     ,---. +---+          +====
| |S     |SoC| |RAM|          |USB3
| |I     `---' +---+          +====
| |0                C|           |
| oo1 J2            S|        +====
|                   I| |A|    |USB2
| pwr   |hd|   |hd| 0| |u|    +====
`-| |---|m0|---|m1|----|x|-------'

J8:
   3V3  (1) (2)  5V
 GPIO2  (3) (4)  5V
 GPIO3  (5) (6)  GND
 GPIO4  (7) (8)  GPIO14
   GND  (9) (10) GPIO15
GPIO17 (11) (12) GPIO18
GPIO27 (13) (14) GND
GPIO22 (15) (16) GPIO23
   3V3 (17) (18) GPIO24
GPIO10 (19) (20) GND
 GPIO9 (21) (22) GPIO25
GPIO11 (23) (24) GPIO8
   GND (25) (26) GPIO7
 GPIO0 (27) (28) GPIO1
 GPIO5 (29) (30) GND
 GPIO6 (31) (32) GPIO12
GPIO13 (33) (34) GND
GPIO19 (35) (36) GPIO16
GPIO26 (37) (38) GPIO20
   GND (39) (40) GPIO21

J2:
GLOBAL ENABLE (1)
          GND (2)
          RUN (3)

J14:
TR01 TAP (1) (2) TR00 TAP
TR03 TAP (3) (4) TR02 TAP

For further information, please refer to https://pinout.xyz/
```

## Raspberry Pi 4B rev 1.4

| Item                    | Revision | RAM | Case                                                                    | Power Supply                                 | Storage                     | OS                                                                                                 | Hostname | Notes                                                                         |
| ----------------------- | -------- | --- | ----------------------------------------------------------------------- | -------------------------------------------- | --------------------------- | -------------------------------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------------- |
| Raspberry Pi 4B rev 1.4 | c03114   | 4GB | Official Raspberry Pi 4 Case (Red)                                      | Official Raspberry Pi 4 Power Supply (White) | 16GB MicroSD (Sandisk Edge) | Raspberry Pi OS Full (Legacy, 32-bit) - Bullseye                                                   |          | Boxed Desktop Kit with official Case Fan                                      |
| Raspberry Pi 4B rev 1.4 | c03114   | 4GB | Official Raspberry Pi 4 Case (Red)                                      | Official Raspberry Pi 4 Power Supply (White) | 16GB MicroSD (Sandisk Edge) | Raspberry Pi OS Full (Legacy, 32-bit) - Bullseye                                                   |          | Boxed Desktop Kit with official Case Fan                                      |
| Raspberry Pi 4B rev 1.4 | d03114   | 8GB | [Cluster HAT Case v3.0](https://thepihut.com/products/cluster-hat-case) | Official Raspberry Pi 4 Power Supply (White) | 128GB MicroSD (Integral)    | [Raspberry Pi OS Lite (64-bit) - Bookworm ClusterCTRL](https://github.com/burtyb/clusterhat-image) | cbridge  | Boxed with [Cluster Hat v2.5](https://thepihut.com/products/cluster-hat-v2-0) |

### Benchmarks

| Benchmark                                                    | Single-Core | Multi-Core |
| ------------------------------------------------------------ | ----------- | ---------- |
| [Geekbench 5](https://browser.geekbench.com/v5/cpu/22830454) | 268         | 729        |

### Pinout

```
Description        : Raspberry Pi 4B rev 1.4
Revision           : c03114
SoC                : BCM2711
RAM                : 4GB
Storage            : MicroSD
USB ports          : 4 (of which 2 USB3)
Ethernet ports     : 1 (1000Mbps max. speed)
Wi-fi              : True
Bluetooth          : True
Camera ports (CSI) : 1
Display ports (DSI): 1

,--------------------------------.
| oooooooooooooooooooo J8   +======
| 1ooooooooooooooooooo  J14 |   Net
|  Wi                    12 +======
|  Fi  Pi Model 4B  V1.4 oo      |
| |D     ,---. +---+          +====
| |S     |SoC| |RAM|          |USB3
| |I     `---' +---+          +====
| |0                C|           |
| oo1 J2            S|        +====
|                   I| |A|    |USB2
| pwr   |hd|   |hd| 0| |u|    +====
`-| |---|m0|---|m1|----|x|-------'

J8:
   3V3  (1) (2)  5V
 GPIO2  (3) (4)  5V
 GPIO3  (5) (6)  GND
 GPIO4  (7) (8)  GPIO14
   GND  (9) (10) GPIO15
GPIO17 (11) (12) GPIO18
GPIO27 (13) (14) GND
GPIO22 (15) (16) GPIO23
   3V3 (17) (18) GPIO24
GPIO10 (19) (20) GND
 GPIO9 (21) (22) GPIO25
GPIO11 (23) (24) GPIO8
   GND (25) (26) GPIO7
 GPIO0 (27) (28) GPIO1
 GPIO5 (29) (30) GND
 GPIO6 (31) (32) GPIO12
GPIO13 (33) (34) GND
GPIO19 (35) (36) GPIO16
GPIO26 (37) (38) GPIO20
   GND (39) (40) GPIO21

J2:
GLOBAL ENABLE (1)
          GND (2)
          RUN (3)

J14:
TR01 TAP (1) (2) TR00 TAP
TR03 TAP (3) (4) TR02 TAP

For further information, please refer to https://pinout.xyz/
```

## Raspberry Pi 4B rev 1.5

![A Raspberry Pi powered KVM Switch](/assets/blog/single-board-computers/pikvm.jpg)

I use a Raspberry Pi 4 under my desk as a KVM switch using [PiKVM](https://pikvm.org/) alongside an [Ezcoo EZ-SW41HA-KVMU3L](https://docs.pikvm.org/ezcoo/) to access 4 machines over my network.

| Item                    | Revision | RAM | Case                                                  | Power Supply                               | Storage                     | OS                                         | Hostname | Notes                                                                                                                                                            |
| ----------------------- | -------- | --- | ----------------------------------------------------- | ------------------------------------------ | --------------------------- | ------------------------------------------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Raspberry Pi 4B rev 1.5 | a03115   | 1GB | [Geekworm KVM-A3](https://wiki.geekworm.com/PiKVM-A3) | OKdo USB C Fixed Head Power Supply (Black) | 32GB MicroSD (Sandisk Edge) | [PiKVM v3](https://pikvm.org/download/)    | pikvm    |                                                                                                                                                                  |
| Raspberry Pi 4B rev 1.5 | b03115   | 2GB | [Voron 1.8](printer-voron-1.8)                        | Mean Well RS-25-5 PSU                      | 64GB MicroSD (Integral)     | [MainsailOS](https://docs-os.mainsail.xyz) | voron1   | With [Klipper Fan Hat](printer-klipper-fan-hat)                                                                                                                  |
| Raspberry Pi 4B rev 1.5 | c03115   | 4GB | [Voron 2.4](printer-voron-2.4)                        | Mean Well RS-25-5 PSU                      | 64GB MicroSD (Integral)     | [MainsailOS](https://docs-os.mainsail.xyz) | voron2   | With [Geekworm P165-B](https://wiki.geekworm.com/P165) Heatsink and [HighPi Pro 5V PWM Fan](https://thepihut.com/products/highpi-pro-5v-fan-software-controlled) |

### Pinout

```
Description        : Raspberry Pi 4B rev 1.5
Revision           : c03115
SoC                : BCM2711
RAM                : 4GB
Storage            : MicroSD
USB ports          : 4 (of which 2 USB3)
Ethernet ports     : 1 (1000Mbps max. speed)
Wi-fi              : True
Bluetooth          : True
Camera ports (CSI) : 1
Display ports (DSI): 1

,--------------------------------.
| oooooooooooooooooooo J8   +======
| 1ooooooooooooooooooo  J14 |   Net
|  Wi                    12 +======
|  Fi  Pi Model 4B  V1.5 oo      |
| |D     ,---. +---+          +====
| |S     |SoC| |RAM|          |USB3
| |I     `---' +---+          +====
| |0                C|           |
| oo1 J2            S|        +====
|                   I| |A|    |USB2
| pwr   |hd|   |hd| 0| |u|    +====
`-| |---|m0|---|m1|----|x|-------'

J8:
   3V3  (1) (2)  5V
 GPIO2  (3) (4)  5V
 GPIO3  (5) (6)  GND
 GPIO4  (7) (8)  GPIO14
   GND  (9) (10) GPIO15
GPIO17 (11) (12) GPIO18
GPIO27 (13) (14) GND
GPIO22 (15) (16) GPIO23
   3V3 (17) (18) GPIO24
GPIO10 (19) (20) GND
 GPIO9 (21) (22) GPIO25
GPIO11 (23) (24) GPIO8
   GND (25) (26) GPIO7
 GPIO0 (27) (28) GPIO1
 GPIO5 (29) (30) GND
 GPIO6 (31) (32) GPIO12
GPIO13 (33) (34) GND
GPIO19 (35) (36) GPIO16
GPIO26 (37) (38) GPIO20
   GND (39) (40) GPIO21

J2:
GLOBAL ENABLE (1)
          GND (2)
          RUN (3)

J14:
TR01 TAP (1) (2) TR00 TAP
TR03 TAP (3) (4) TR02 TAP

For further information, please refer to https://pinout.xyz/
```

## Raspberry Pi 4B (Unknown)

| Item            | Revision | RAM | Case                 | Power Supply | Storage | OS  | Hostname | Notes            |
| --------------- | -------- | --- | -------------------- | ------------ | ------- | --- | -------- | ---------------- |
| Raspberry Pi 4B | Unknown  | 4GB | Flirc Aluminium Case |              |         |     |          | Boxed (Unopened) |
| Raspberry Pi 4B | Unknown  | 4GB | Flirc Aluminium Case |              |         |     |          | Boxed (Unopened) |

# Raspberry Pi 5

![The latest addition to my Raspberry Pi collection](/assets/blog/single-board-computers/raspberry-pi-5.jpg)

## Raspberry Pi 5B rev 1.0

| Item                    | Revision | RAM | Case                                 | Power Supply                                 | Storage                  | OS                                                           | Hostname    | Notes                                                                                                            |
| ----------------------- | -------- | --- | ------------------------------------ | -------------------------------------------- | ------------------------ | ------------------------------------------------------------ | ----------- | ---------------------------------------------------------------------------------------------------------------- |
| Raspberry Pi 5B rev 1.0 | c04170   | 4GB | Official Raspberry Pi 5 Case (Red)   | Official Raspberry Pi 5 Power Supply (White) | 256GB MicroSD (Integral) |                                                              |             | Boxed (Unopened) with official [Active Cooler](https://www.raspberrypi.com/products/active-cooler/)              |
| Raspberry Pi 5B rev 1.0 | d04170   | 8GB | Official Raspberry Pi 5 Case (Black) | Official Raspberry Pi 5 Power Supply (Black) | 256GB MicroSD (Integral) | Raspberry Pi OS Lite (64-bit), Manually Installed KDE Plasma | raspberrypi | Boxed with official [Active Cooler](https://www.raspberrypi.com/products/active-cooler/), Black Keyboard & Mouse |

### Benchmarks

| Benchmark                                                    | Single-Core | Multi-Core |
| ------------------------------------------------------------ | ----------- | ---------- |
| [Geekbench 5](https://browser.geekbench.com/v5/cpu/22830433) | 629         | 1706       |

### Pinout

```
Description        : Raspberry Pi 5B rev 1.0
Revision           : c04170
SoC                : BCM2712
RAM                : 4GB
Storage            : MicroSD
USB ports          : 4 (of which 2 USB3)
Ethernet ports     : 1 (1000Mbps max. speed)
Wi-fi              : True
Bluetooth          : True
Camera ports (CSI) : 2
Display ports (DSI): 2

,--------------------------------.
| oooooooooooooooooooo J8   : +====
| 1ooooooooooooooooooo      : |USB2
|  Wi  Pi Model 5B  V1.0  fan +====
|  Fi     +---+      +---+       |
|         |RAM|      |RP1|    +====
||p       +---+      +---+    |USB3
||c      -------              +====
||i        SoC      |c|c J14     |
(        -------  J7|s|s 12 +======
|  J2 bat   uart   1|i|i oo |   Net
| pwr\..|hd|...|hd|o|1|0    +======
`-| |-1o|m0|---|m1|--------------'

J8:
   3V3  (1) (2)  5V
 GPIO2  (3) (4)  5V
 GPIO3  (5) (6)  GND
 GPIO4  (7) (8)  GPIO14
   GND  (9) (10) GPIO15
GPIO17 (11) (12) GPIO18
GPIO27 (13) (14) GND
GPIO22 (15) (16) GPIO23
   3V3 (17) (18) GPIO24
GPIO10 (19) (20) GND
 GPIO9 (21) (22) GPIO25
GPIO11 (23) (24) GPIO8
   GND (25) (26) GPIO7
 GPIO0 (27) (28) GPIO1
 GPIO5 (29) (30) GND
 GPIO6 (31) (32) GPIO12
GPIO13 (33) (34) GND
GPIO19 (35) (36) GPIO16
GPIO26 (37) (38) GPIO20
   GND (39) (40) GPIO21

J2:
RUN (1)
GND (2)

J7:
COMPOSITE (1)
      GND (2)

J14:
TR01 TAP (1) (2) TR00 TAP
TR03 TAP (3) (4) TR02 TAP

For further information, please refer to https://pinout.xyz/
```

# Raspberry Pi Compute Module

## Raspberry Pi CM rev 1.1

| Item                    | Revision | RAM   | Case                                                                                                                             | Power Supply | Storage  | OS                                             | Hostname | Notes                                                       |
| ----------------------- | -------- | ----- | -------------------------------------------------------------------------------------------------------------------------------- | ------------ | -------- | ---------------------------------------------- | -------- | ----------------------------------------------------------- |
| Raspberry Pi CM rev 1.1 | 0011     | 512MB | [Compute Module I/O Board V1.2](https://www.raspberrypi.com/documentation/computers/compute-module.html#compute-module-io-board) |              | 4GB eMMC | Raspberry Pi OS Lite (Legacy, 32-bit) - Buster |          | With CMIO-DISPLAY V1.1 Adapter and CMIO-CAMERA V1.1 Adapter |

### Pinout

```
Description        : Raspberry Pi CM rev 1.1
Revision           : 0011
SoC                : BCM2835
RAM                : 512MB
Storage            : eMMC
USB ports          : 1 (of which 0 USB3)
Ethernet ports     : 0 (0Mbps max. speed)
Wi-fi              : False
Bluetooth          : False
Camera ports (CSI) : 2
Display ports (DSI): 2

+---------------------------------------+
| O  Raspberry Pi CM                  O |
 )   Version 1.1     +---+             (
|                    |SoC|              |
 )                   +---+             (
| O   _                               O |
|||||| ||||||||||||||||||||||||||||||||||

SODIMM:
           GND   (1) (2)   EMMC DISABLE N
         GPIO0   (3) (4)   NC
         GPIO1   (5) (6)   NC
           GND   (7) (8)   NC
         GPIO2   (9) (10)  NC
         GPIO3  (11) (12)  NC
           GND  (13) (14)  NC
         GPIO4  (15) (16)  NC
         GPIO5  (17) (18)  NC
           GND  (19) (20)  NC
         GPIO6  (21) (22)  NC
         GPIO7  (23) (24)  NC
           GND  (25) (26)  GND
         GPIO8  (27) (28)  GPIO28
         GPIO9  (29) (30)  GPIO29
           GND  (31) (32)  GND
        GPIO10  (33) (34)  GPIO30
        GPIO11  (35) (36)  GPIO31
           GND  (37) (38)  GND
 GPIO0-27 VREF  (39) (40)  GPIO0-27 VREF
GPIO28-45 VREF  (41) (42)  GPIO28-45 VREF
           GND  (43) (44)  GND
        GPIO12  (45) (46)  GPIO32
        GPIO13  (47) (48)  GPIO33
           GND  (49) (50)  GND
        GPIO14  (51) (52)  GPIO34
        GPIO15  (53) (54)  GPIO35
           GND  (55) (56)  GND
        GPIO16  (57) (58)  GPIO36
        GPIO17  (59) (60)  GPIO37
           GND  (61) (62)  GND
        GPIO18  (63) (64)  GPIO38
        GPIO19  (65) (66)  GPIO39
           GND  (67) (68)  GND
        GPIO20  (69) (70)  GPIO40
        GPIO21  (71) (72)  GPIO41
           GND  (73) (74)  GND
        GPIO22  (75) (76)  GPIO42
        GPIO23  (77) (78)  GPIO43
           GND  (79) (80)  GND
        GPIO24  (81) (82)  GPIO44
        GPIO25  (83) (84)  GPIO45
           GND  (85) (86)  GND
        GPIO26  (87) (88)  GPIO46 1V8
        GPIO27  (89) (90)  GPIO47 1V8
           GND  (91) (92)  GND
      DSI0 DN1  (93) (94)  DSI1 DP0
      DSI0 DP1  (95) (96)  DSI1 DN0
           GND  (97) (98)  GND
      DSI0 DN0  (99) (100) DSI1 CP
      DSI0 DP0 (101) (102) DSI1 CN
           GND (103) (104) GND
       DSI0 CN (105) (106) DSI1 DP3
       DSI0 CP (107) (108) DSI1 DN3
           GND (109) (110) GND
     HDMI CK N (111) (112) DSI1 DP2
     HDMI CK P (113) (114) DSI1 DN2
           GND (115) (116) GND
     HDMI D0 N (117) (118) DSI1 DP1
     HDMI D0 P (119) (120) DSI1 DN1
           GND (121) (122) GND
     HDMI D1 N (123) (124) NC
     HDMI D1 P (125) (126) NC
           GND (127) (128) NC
     HDMI D2 N (129) (130) NC
     HDMI D2 P (131) (132) NC
           GND (133) (134) GND
      CAM1 DP3 (135) (136) CAM0 DP0
      CAM1 DN3 (137) (138) CAM0 DN0
           GND (139) (140) GND
      CAM1 DP2 (141) (142) CAM0 CP
      CAM1 DN2 (143) (144) CAM0 CN
           GND (145) (146) GND
       CAM1 CP (147) (148) CAM0 DP1
       CAM1 CN (149) (150) CAM0 DN1
           GND (151) (152) GND
      CAM1 DP1 (153) (154) NC
      CAM1 DN1 (155) (156) NC
           GND (157) (158) NC
      CAM1 DP0 (159) (160) NC
      CAM1 DN0 (161) (162) NC
           GND (163) (164) GND
        USB DP (165) (166) TVDAC
        USB DM (167) (168) USB OTGID
           GND (169) (170) GND
      HDMI CEC (171) (172) VC TRST N
      HDMI SDA (173) (174) VC TDI
      HDMI SCL (175) (176) VC TMS
           RUN (177) (178) VC TDO
      VDD CORE (179) (180) VC TCK
           GND (181) (182) GND
           1V8 (183) (184) 1V8
           1V8 (185) (186) 1V8
           GND (187) (188) GND
          VDAC (189) (190) VDAC
           3V3 (191) (192) 3V3
           3V3 (193) (194) 3V3
           GND (195) (196) GND
          VBAT (197) (198) VBAT
          VBAT (199) (200) VBAT

For further information, please refer to https://pinout.xyz/
```

## Raspberry Pi CM3 rev 1.0

| Item                     | Revision | RAM | Case | Power Supply | Storage  | OS                                             | Hostname | Notes |
| ------------------------ | -------- | --- | ---- | ------------ | -------- | ---------------------------------------------- | -------- | ----- |
| Raspberry Pi CM3 rev 1.0 | a020a0   | 1GB |      |              | 4GB eMMC | Raspberry Pi OS Lite (Legacy, 32-bit) - Buster |          |       |

### Pinout

```
Description        : Raspberry Pi CM3 rev 1.0
Revision           : a020a0
SoC                : BCM2837
RAM                : 1GB
Storage            : eMMC / off-board
USB ports          : 1 (of which 0 USB3)
Ethernet ports     : 0 (0Mbps max. speed)
Wi-fi              : False
Bluetooth          : False
Camera ports (CSI) : 2
Display ports (DSI): 2

+---------------------------------------+
| O  Raspberry Pi CM3                 O |
 )   Version 1.0     +---+             (
|                    |SoC|              |
 )                   +---+             (
| O   _                               O |
|||||| ||||||||||||||||||||||||||||||||||

SODIMM:
           GND   (1) (2)   EMMC DISABLE N
         GPIO0   (3) (4)   NC / SDX VREF
         GPIO1   (5) (6)   NC / SDX VREF
           GND   (7) (8)   GND
         GPIO2   (9) (10)  NC / SDX CLK
         GPIO3  (11) (12)  NC / SDX CMD
           GND  (13) (14)  GND
         GPIO4  (15) (16)  NC / SDX D0
         GPIO5  (17) (18)  NC / SDX D1
           GND  (19) (20)  GND
         GPIO6  (21) (22)  NC / SDX D2
         GPIO7  (23) (24)  NC / SDX D3
           GND  (25) (26)  GND
         GPIO8  (27) (28)  GPIO28
         GPIO9  (29) (30)  GPIO29
           GND  (31) (32)  GND
        GPIO10  (33) (34)  GPIO30
        GPIO11  (35) (36)  GPIO31
           GND  (37) (38)  GND
 GPIO0-27 VREF  (39) (40)  GPIO0-27 VREF
GPIO28-45 VREF  (41) (42)  GPIO28-45 VREF
           GND  (43) (44)  GND
        GPIO12  (45) (46)  GPIO32
        GPIO13  (47) (48)  GPIO33
           GND  (49) (50)  GND
        GPIO14  (51) (52)  GPIO34
        GPIO15  (53) (54)  GPIO35
           GND  (55) (56)  GND
        GPIO16  (57) (58)  GPIO36
        GPIO17  (59) (60)  GPIO37
           GND  (61) (62)  GND
        GPIO18  (63) (64)  GPIO38
        GPIO19  (65) (66)  GPIO39
           GND  (67) (68)  GND
        GPIO20  (69) (70)  GPIO40
        GPIO21  (71) (72)  GPIO41
           GND  (73) (74)  GND
        GPIO22  (75) (76)  GPIO42
        GPIO23  (77) (78)  GPIO43
           GND  (79) (80)  GND
        GPIO24  (81) (82)  GPIO44
        GPIO25  (83) (84)  GPIO45
           GND  (85) (86)  GND
        GPIO26  (87) (88)  HDMI HPD N 1V8
        GPIO27  (89) (90)  EMMC EN N 1V8
           GND  (91) (92)  GND
      DSI0 DN1  (93) (94)  DSI1 DP0
      DSI0 DP1  (95) (96)  DSI1 DN0
           GND  (97) (98)  GND
      DSI0 DN0  (99) (100) DSI1 CP
      DSI0 DP0 (101) (102) DSI1 CN
           GND (103) (104) GND
       DSI0 CN (105) (106) DSI1 DP3
       DSI0 CP (107) (108) DSI1 DN3
           GND (109) (110) GND
     HDMI CK N (111) (112) DSI1 DP2
     HDMI CK P (113) (114) DSI1 DN2
           GND (115) (116) GND
     HDMI D0 N (117) (118) DSI1 DP1
     HDMI D0 P (119) (120) DSI1 DN1
           GND (121) (122) GND
     HDMI D1 N (123) (124) NC
     HDMI D1 P (125) (126) NC
           GND (127) (128) NC
     HDMI D2 N (129) (130) NC
     HDMI D2 P (131) (132) NC
           GND (133) (134) GND
      CAM1 DP3 (135) (136) CAM0 DP0
      CAM1 DN3 (137) (138) CAM0 DN0
           GND (139) (140) GND
      CAM1 DP2 (141) (142) CAM0 CP
      CAM1 DN2 (143) (144) CAM0 CN
           GND (145) (146) GND
       CAM1 CP (147) (148) CAM0 DP1
       CAM1 CN (149) (150) CAM0 DN1
           GND (151) (152) GND
      CAM1 DP1 (153) (154) NC
      CAM1 DN1 (155) (156) NC
           GND (157) (158) NC
      CAM1 DP0 (159) (160) NC
      CAM1 DN0 (161) (162) NC
           GND (163) (164) GND
        USB DP (165) (166) TVDAC
        USB DM (167) (168) USB OTGID
           GND (169) (170) GND
      HDMI CEC (171) (172) VC TRST N
      HDMI SDA (173) (174) VC TDI
      HDMI SCL (175) (176) VC TMS
           RUN (177) (178) VC TDO
      VDD CORE (179) (180) VC TCK
           GND (181) (182) GND
           1V8 (183) (184) 1V8
           1V8 (185) (186) 1V8
           GND (187) (188) GND
          VDAC (189) (190) VDAC
           3V3 (191) (192) 3V3
           3V3 (193) (194) 3V3
           GND (195) (196) GND
          VBAT (197) (198) VBAT
          VBAT (199) (200) VBAT

For further information, please refer to https://pinout.xyz/
```

## Raspberry Pi CM3+ rev 1.0

| Item                      | Revision | RAM | Case                                                                                              | Power Supply | Storage   | OS                                  | Hostname | Notes                                                       |
| ------------------------- | -------- | --- | ------------------------------------------------------------------------------------------------- | ------------ | --------- | ----------------------------------- | -------- | ----------------------------------------------------------- |
| Raspberry Pi CM3+ rev 1.0 | a02100   | 1GB | [Compute Module I/O Board V3.0](https://www.raspberrypi.com/products/compute-module-io-board-v3/) |              | 32GB eMMC | Raspberry Pi OS (64-bit) - Bookworm |          | With CMIO-DISPLAY V1.1 Adapter and CMIO-CAMERA V1.1 Adapter |
| Raspberry Pi CM3+ rev 1.0 | a02100   | 1GB |                                                                                                   |              |           |                                     |          |                                                             |

### Pinout

```
Description        : Raspberry Pi CM3+ rev 1.0
Revision           : a02100
SoC                : BCM2837
RAM                : 1GB
Storage            : eMMC / off-board
USB ports          : 1 (of which 0 USB3)
Ethernet ports     : 0 (0Mbps max. speed)
Wi-fi              : False
Bluetooth          : False
Camera ports (CSI) : 2
Display ports (DSI): 2

+---------------------------------------+
| O  Raspberry Pi CM3+                O |
 )   Version 1.0      ,---.            (
|                     |SoC|             |
 )                    `---'            (
| O   _                               O |
|||||| ||||||||||||||||||||||||||||||||||

SODIMM:
           GND   (1) (2)   EMMC DISABLE N
         GPIO0   (3) (4)   NC / SDX VREF
         GPIO1   (5) (6)   NC / SDX VREF
           GND   (7) (8)   GND
         GPIO2   (9) (10)  NC / SDX CLK
         GPIO3  (11) (12)  NC / SDX CMD
           GND  (13) (14)  GND
         GPIO4  (15) (16)  NC / SDX D0
         GPIO5  (17) (18)  NC / SDX D1
           GND  (19) (20)  GND
         GPIO6  (21) (22)  NC / SDX D2
         GPIO7  (23) (24)  NC / SDX D3
           GND  (25) (26)  GND
         GPIO8  (27) (28)  GPIO28
         GPIO9  (29) (30)  GPIO29
           GND  (31) (32)  GND
        GPIO10  (33) (34)  GPIO30
        GPIO11  (35) (36)  GPIO31
           GND  (37) (38)  GND
 GPIO0-27 VREF  (39) (40)  GPIO0-27 VREF
GPIO28-45 VREF  (41) (42)  GPIO28-45 VREF
           GND  (43) (44)  GND
        GPIO12  (45) (46)  GPIO32
        GPIO13  (47) (48)  GPIO33
           GND  (49) (50)  GND
        GPIO14  (51) (52)  GPIO34
        GPIO15  (53) (54)  GPIO35
           GND  (55) (56)  GND
        GPIO16  (57) (58)  GPIO36
        GPIO17  (59) (60)  GPIO37
           GND  (61) (62)  GND
        GPIO18  (63) (64)  GPIO38
        GPIO19  (65) (66)  GPIO39
           GND  (67) (68)  GND
        GPIO20  (69) (70)  GPIO40
        GPIO21  (71) (72)  GPIO41
           GND  (73) (74)  GND
        GPIO22  (75) (76)  GPIO42
        GPIO23  (77) (78)  GPIO43
           GND  (79) (80)  GND
        GPIO24  (81) (82)  GPIO44
        GPIO25  (83) (84)  GPIO45
           GND  (85) (86)  GND
        GPIO26  (87) (88)  HDMI HPD N 1V8
        GPIO27  (89) (90)  EMMC EN N 1V8
           GND  (91) (92)  GND
      DSI0 DN1  (93) (94)  DSI1 DP0
      DSI0 DP1  (95) (96)  DSI1 DN0
           GND  (97) (98)  GND
      DSI0 DN0  (99) (100) DSI1 CP
      DSI0 DP0 (101) (102) DSI1 CN
           GND (103) (104) GND
       DSI0 CN (105) (106) DSI1 DP3
       DSI0 CP (107) (108) DSI1 DN3
           GND (109) (110) GND
     HDMI CK N (111) (112) DSI1 DP2
     HDMI CK P (113) (114) DSI1 DN2
           GND (115) (116) GND
     HDMI D0 N (117) (118) DSI1 DP1
     HDMI D0 P (119) (120) DSI1 DN1
           GND (121) (122) GND
     HDMI D1 N (123) (124) NC
     HDMI D1 P (125) (126) NC
           GND (127) (128) NC
     HDMI D2 N (129) (130) NC
     HDMI D2 P (131) (132) NC
           GND (133) (134) GND
      CAM1 DP3 (135) (136) CAM0 DP0
      CAM1 DN3 (137) (138) CAM0 DN0
           GND (139) (140) GND
      CAM1 DP2 (141) (142) CAM0 CP
      CAM1 DN2 (143) (144) CAM0 CN
           GND (145) (146) GND
       CAM1 CP (147) (148) CAM0 DP1
       CAM1 CN (149) (150) CAM0 DN1
           GND (151) (152) GND
      CAM1 DP1 (153) (154) NC
      CAM1 DN1 (155) (156) NC
           GND (157) (158) NC
      CAM1 DP0 (159) (160) NC
      CAM1 DN0 (161) (162) NC
           GND (163) (164) GND
        USB DP (165) (166) TVDAC
        USB DM (167) (168) USB OTGID
           GND (169) (170) GND
      HDMI CEC (171) (172) VC TRST N
      HDMI SDA (173) (174) VC TDI
      HDMI SCL (175) (176) VC TMS
           RUN (177) (178) VC TDO
      VDD CORE (179) (180) VC TCK
           GND (181) (182) GND
           1V8 (183) (184) 1V8
           1V8 (185) (186) 1V8
           GND (187) (188) GND
          VDAC (189) (190) VDAC
           3V3 (191) (192) 3V3
           3V3 (193) (194) 3V3
           GND (195) (196) GND
          VBAT (197) (198) VBAT
          VBAT (199) (200) VBAT

For further information, please refer to https://pinout.xyz/
```

## Raspberry Pi CM4 rev 1.0

| Item                     | Revision | RAM | Case                                                   | Power Supply | Storage   | OS                                  | Hostname | Notes                                                                                                                 |
| ------------------------ | -------- | --- | ------------------------------------------------------ | ------------ | --------- | ----------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------- |
| Raspberry Pi CM4 rev 1.0 | b03140   | 2GB | [BigTreeTech PI4B V1.0](https://bttwiki.com/PI4B.html) |              | 32GB eMMC | Raspberry Pi OS (64-bit) - Bookworm | pi4b     | With [52Pi Tall CM4 Heatsink](https://52pi.com/products/52pi-aluminum-alloy-cnc-heatsink-for-raspberry-pi-cm4-module) |

### Benchmarks

| Benchmark                                                    | Single-Core | Multi-Core |
| ------------------------------------------------------------ | ----------- | ---------- |
| [Geekbench 5](https://browser.geekbench.com/v5/cpu/22867024) | 233         | 665        |

### Pinout

```
Description        : Raspberry Pi CM4 rev 1.0
Revision           : b03140
SoC                : BCM2711
RAM                : 2GB
Storage            : eMMC / off-board
USB ports          : 2 (of which 0 USB3)
Ethernet ports     : 1 (1000Mbps max. speed)
Wi-fi              : True
Bluetooth          : True
Camera ports (CSI) : 2
Display ports (DSI): 2

,--csi1---dsi0---dsi1-----------,-------------.-----------.
|  ----   ----   ---- J2 ooooooo|             |oo1        |
c|    Pi CM4  Rev 1.0    1oooooo|        Wi   |J3         |
s|    IO Board                  |        Fi   |           |
i|          J6 2o               |         +--+|  |P|      |
| J8           1o               |  ,----. |eM||  }-{      |
| oooooooooooooooooooo          |  |SoC | |MC||  |C|      |
| 1ooooooooooooooooooo   J9     |  |    | +--+|  |I|      |
| ,---.                  12     |  `----'     |  |e|      |
|( =O |                  oo     |  +----+     |           |
| ) + |                         |  |RAM |     |           |
|( =O |                         `--+----+-----'           |
| `---'                                                   |
|   oo1 J1                                                |
|                                                         |
|                          |Net | |USB|     |uSD|      |p||
|    |HDMI|   |HDMI|       |    | | 2 | usb |   |      |w||
`----| 0  |---| 1  |-------|    |-|   |-| |------------|r|'

J8:
   3V3  (1) (2)  5V
 GPIO2  (3) (4)  5V
 GPIO3  (5) (6)  GND
 GPIO4  (7) (8)  GPIO14
   GND  (9) (10) GPIO15
GPIO17 (11) (12) GPIO18
GPIO27 (13) (14) GND
GPIO22 (15) (16) GPIO23
   3V3 (17) (18) GPIO24
GPIO10 (19) (20) GND
 GPIO9 (21) (22) GPIO25
GPIO11 (23) (24) GPIO8
   GND (25) (26) GPIO7
 GPIO0 (27) (28) GPIO1
 GPIO5 (29) (30) GND
 GPIO6 (31) (32) GPIO12
GPIO13 (33) (34) GND
GPIO19 (35) (36) GPIO16
GPIO26 (37) (38) GPIO20
   GND (39) (40) GPIO21

J1:
GLOBAL ENABLE (1)
          GND (2)
          RUN (3)

J2:
1-2 DISABLE eMMC BOOT  (1) (2)  1-2 DISABLE eMMC BOOT
3-4 WRITE-PROT EEPROM  (3) (4)  3-4 WRITE-PROT EEPROM
         AIN0 MXL7704  (5) (6)  AIN1 MXL7704
                  GND  (7) (8)  SYNC_IN
             SYNC OUT  (9) (10) GND
               TV OUT (11) (12) GND
           13-14 WAKE (13) (14) 13-14 WAKE

J3:
WL DISABLE (1)
       GND (2)
BT DISABLE (3)

J6:
1-2 CAM0+DISP0 (1) (2) 1-2 CAM0+DISP0
3-4 CAM0+DISP0 (3) (4) 3-4 CAM0+DISP0

J9:
TR01 TAP (1) (2) TR00 TAP
TR03 TAP (3) (4) TR02 TAP

For further information, please refer to https://pinout.xyz/
```

## Raspberry Pi CM4 rev 1.1

| Item                     | Revision | RAM | Case                                                                                 | Power Supply                                 | Storage                                                                                                       | OS                                  | Hostname | Notes                                                                                                                                                                                                                                                           |
| ------------------------ | -------- | --- | ------------------------------------------------------------------------------------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ----------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Raspberry Pi CM4 rev 1.1 | d03141   | 8GB | [Waveshare CM4 IO Board Case (A)](https://www.waveshare.com/cm4-io-board-case-a.htm) | Generic 12V 3A Power Supply with Barrel Jack | [Samsung 970 EVO Plus 250GB NVMe SSD](https://pipci.jeffgeerling.com/cards_m2/samsung-970-evo-plus-nvme.html) | Raspberry Pi OS (64-bit) - Bookworm | cm4      | With [Waveshare PCIe to M.2 (B)](https://www.waveshare.com/pcie-to-m.2-b.htm), [Waveshare CM4 Heatsink](https://www.waveshare.com/cm4-heatsink.htm) and [DACBerry 400 S](https://www.osaelectronics.com/learn/tutorials/dacberry-400-series-quick-start-guide/) |

### Benchmarks

| Benchmark                                                    | Single-Core | Multi-Core |
| ------------------------------------------------------------ | ----------- | ---------- |
| [Geekbench 5](https://browser.geekbench.com/v5/cpu/22880016) | 234         | 668        |

### Pinout

```
Description        : Raspberry Pi CM4 rev 1.1
Revision           : d03141
SoC                : BCM2711
RAM                : 8GB
Storage            : eMMC / off-board
USB ports          : 2 (of which 0 USB3)
Ethernet ports     : 1 (1000Mbps max. speed)
Wi-fi              : True
Bluetooth          : True
Camera ports (CSI) : 2
Display ports (DSI): 2

,--csi1---dsi0---dsi1-----------,-------------.-----------.
|  ----   ----   ---- J2 ooooooo|             |oo1        |
c|    Pi CM4  Rev 1.1    1oooooo|        Wi   |J3         |
s|    IO Board                  |        Fi   |           |
i|          J6 2o               |         +--+|  |P|      |
| J8           1o               |  ,----. |eM||  }-{      |
| oooooooooooooooooooo          |  |SoC | |MC||  |C|      |
| 1ooooooooooooooooooo   J9     |  |    | +--+|  |I|      |
| ,---.                  12     |  `----'     |  |e|      |
|( =O |                  oo     |  +----+     |           |
| ) + |                         |  |RAM |     |           |
|( =O |                         `--+----+-----'           |
| `---'                                                   |
|   oo1 J1                                                |
|                                                         |
|                          |Net | |USB|     |uSD|      |p||
|    |HDMI|   |HDMI|       |    | | 2 | usb |   |      |w||
`----| 0  |---| 1  |-------|    |-|   |-| |------------|r|'

J8:
   3V3  (1) (2)  5V
 GPIO2  (3) (4)  5V
 GPIO3  (5) (6)  GND
 GPIO4  (7) (8)  GPIO14
   GND  (9) (10) GPIO15
GPIO17 (11) (12) GPIO18
GPIO27 (13) (14) GND
GPIO22 (15) (16) GPIO23
   3V3 (17) (18) GPIO24
GPIO10 (19) (20) GND
 GPIO9 (21) (22) GPIO25
GPIO11 (23) (24) GPIO8
   GND (25) (26) GPIO7
 GPIO0 (27) (28) GPIO1
 GPIO5 (29) (30) GND
 GPIO6 (31) (32) GPIO12
GPIO13 (33) (34) GND
GPIO19 (35) (36) GPIO16
GPIO26 (37) (38) GPIO20
   GND (39) (40) GPIO21

J1:
GLOBAL ENABLE (1)
          GND (2)
          RUN (3)

J2:
1-2 DISABLE eMMC BOOT  (1) (2)  1-2 DISABLE eMMC BOOT
3-4 WRITE-PROT EEPROM  (3) (4)  3-4 WRITE-PROT EEPROM
         AIN0 MXL7704  (5) (6)  AIN1 MXL7704
                  GND  (7) (8)  SYNC_IN
             SYNC OUT  (9) (10) GND
               TV OUT (11) (12) GND
           13-14 WAKE (13) (14) 13-14 WAKE

J3:
WL DISABLE (1)
       GND (2)
BT DISABLE (3)

J6:
1-2 CAM0+DISP0 (1) (2) 1-2 CAM0+DISP0
3-4 CAM0+DISP0 (3) (4) 3-4 CAM0+DISP0

J9:
TR01 TAP (1) (2) TR00 TAP
TR03 TAP (3) (4) TR02 TAP

For further information, please refer to https://pinout.xyz/
```

# Raspberry Pi Pico

![Board designed for tinkering using a Pi Pico](/assets/blog/single-board-computers/maker-pi-pico.jpg)

| Item                                | Case                                                                                                        | Flashed with                                                                 | Notes                           |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------- |
| Datanoise Pico ADK                  | Eurorack Module                                                                                             | [PicoADK Firmware](https://github.com/DatanoiseTV/PicoADK-Firmware-Template) | In original packaging           |
| Raspberry Pi Pico                   | [Macro Pi](https://www.thingiverse.com/thing:5817044)                                                       | [PiPicoMacroKeys](https://github.com/novaspirit/PiPicoMacroKeys)             | In original packaging           |
| Raspberry Pi Pico                   |                                                                                                             |                                                                              | In original packaging           |
| Raspberry Pi Pico H                 | [Maker Pi Pico](https://www.cytron.io/p-maker-pi-pico-simplifying-raspberry-pi-pico-for-beginners-and-kits) | [MicroPython](https://micropython.org)                                       |                                 |
| Raspberry Pi Pico W                 | [Nevermore StealthMax](nevermore-filter#nevermore-stealthmax)                                               | [Nevermore Controller](https://github.com/SanaaHamel/nevermore-controller)   | In original packaging           |
| Raspberry Pi Pico WH                |                                                                                                             | [ESPHome](https://esphome.io/)                                               | Boxed                           |
| Raspberry Pi Pico 2                 |                                                                                                             |                                                                              | In original packaging           |
| Raspberry Pi Pico 2                 |                                                                                                             |                                                                              | In original packaging           |
| Raspberry Pi Pico 2W                |                                                                                                             |                                                                              | In original packaging           |
| Raspberry Pi RP2040 Microcontroller |                                                                                                             |                                                                              | Bare Chip in original packaging |

```
╭───────────────────────────────────────── Raspberry Pi Pico Pinout ─────────────────────────────────────────╮
│                                                 ┏━━━━━┓                                                    │
│                                            ┏━━━━┫     ┣━━━━┓                                               │
│ PWM0 A UART0 TX  I2C0 SDA SPI0 RX      GP0 ┃◎   ┗━━━━━┛   ◎┃ VBUS                                          │
│ PWM0 B UART0 RX  I2C0 SCL SPI0 CSn     GP1 ┃◎ ▩           ◎┃ VSYS                                          │
│                                     Ground ┃▣ └─GP25      ▣┃ Ground                                        │
│ PWM1 A UART0 CTS I2C1 SDA SPI0 SCK     GP2 ┃◎  ▒▒▒        ◎┃ 3v3 En                                        │
│ PWM1 B UART0 RTS I2C1 SCL SPI0 TX      GP3 ┃◎  ▒▒▒        ◎┃ 3v3 Out                                       │
│ PWM2 A UART1 TX  I2C0 SDA SPI0 RX      GP4 ┃◎             ◎┃ ADC VRef                                      │
│ PWM2 B UART1 RX  I2C0 SCL SPI0 CSn     GP5 ┃◎             ◎┃ GP28 / A2  SPI1 RX  I2C0 SDA UART0 TX  PWM6 A │
│                                     Ground ┃▣             ▣┃ ADC Ground                                    │
│ PWM3 A UART1 CTS I2C1 SDA SPI0 SCK     GP6 ┃◎   ▓▓▓▓▓▓▓   ◎┃ GP27 / A1  SPI1 TX  I2C1 SCL UART1 RTS PWM5 B │
│ PWM3 B UART1 RTS I2C1 SCL SPI0 TX      GP7 ┃◎   ▓▓▓▓▓▓▓   ◎┃ GP26 / A0  SPI1 SCK I2C1 SDA UART1 CTS PWM5 A │
│ PWM4 A UART1 TX  I2C0 SDA SPI1 RX      GP8 ┃◎   ▓▓▓▓▓▓▓   ◎┃ run                                           │
│ PWM4 B UART1 RX  I2C0 SCL SPI1 CSn     GP9 ┃◎   ▓▓▓▓▓▓▓   ◎┃ GP22       SPI0 SCK I2C1 SDA UART1 CTS PWM3 A │
│                                     Ground ┃▣             ▣┃ Ground                                        │
│ PWM5 A UART1 CTS I2C1 SDA SPI1 SCK    GP10 ┃◎             ◎┃ GP21       SPI0 CSn I2C0 SCL UART1 RX  PWM2 B │
│ PWM5 B UART1 RTS I2C1 SCL SPI1 TX     GP11 ┃◎             ◎┃ GP20       SPI0 RX  I2C0 SDA UART1 TX  PWM2 A │
│ PWM6 A UART0 TX  I2C0 SDA SPI1 RX     GP12 ┃◎             ◎┃ GP19       SPI0 TX  I2C1 SCL UART0 RTS PWM1 B │
│ PWM6 B UART0 RX  I2C0 SCL SPI1 CSn    GP13 ┃◎             ◎┃ GP18       SPI0 SCK I2C1 SDA UART0 CTS PWM1 A │
│                                     Ground ┃▣             ▣┃ Ground                                        │
│ PWM7 A UART0 CTS I2C1 SDA SPI1 SCK    GP14 ┃◎             ◎┃ GP17       SPI0 CSn I2C0 SCL UART0 RX  PWM0 B │
│ PWM7 B UART0 RTS I2C1 SCL SPI1 TX     GP15 ┃◎    ◎ ▣ ◎    ◎┃ GP16       SPI0 RX  I2C0 SDA UART0 TX  PWM0 A │
│                                            ┗━━━━━━━━━━━━━━━┛                                               │
│ @gadgetoid                                                                                                 │
│ https://pico.pinout.xyz                                                                                    │
╰────────────────────────────────────────────────────────────────────────────────────────────────────────────╯
```

# STMicroelectronics

| Item          | Case | Flashed with | Hostname | Notes                                                                                                                                                      |
| ------------- | ---- | ------------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| STM32F103C8T6 |      |              |          | [Received this as part of a bundle](https://www.amazon.co.uk/dp/B09KP9BF9Q) when purchasing an ST-Link to re-flash the bootloader of [Fly RRF E3](#mellow) |

# Teensy

![Retro telephone used as a guestbook at my wedding](/assets/blog/single-board-computers/teensy-audio-guestbook.jpg)

| Item       | Case            | Flashed with                                                            | Notes                         |
| ---------- | --------------- | ----------------------------------------------------------------------- | ----------------------------- |
| Teensy 4.0 | Retro Telephone | [Audio Guestbook](https://github.com/playfultechnology/audio-guestbook) | With Audio Board for Teensy 4 |
