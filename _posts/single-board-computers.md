---
title: Single Board Computers
heading: Single Board Computers and Microcontrollers
date: 2023-06-26
lastmod: 2024-01-27T22:05:27.968Z
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
  - Computers
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

| Item                                                                                                                                                                                                      | Case                                                                                      | Storage               | Flashed with                                                         | Notes                                                                    |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | --------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [BigTreeTech MMB CAN V1.0](https://biqu.equipment/products/bigtreetech-mmb)                                                                                                                               | [Enraged Rabbit Cotton Tail](enraged-rabbit-carrot-feeder-2.0#enraged-rabbit-cotton-tail) |                       | [Klipper Firmware](https://www.klipper3d.org)                        | With 4 [EZ2209](https://bttwiki.com/EZ2209.html)s                        |
| [BigTreeTech Pi V1.2](https://biqu.equipment/products/bigtreetech-btt-pi-v1-2)                                                                                                                            |                                                                                           |                       | [CB1](https://github.com/bigtreetech/CB1)                            | With [U2C v1.0 CAN Adapter Module](https://docs.meteyou.wtf/btt-pi-u2c/) |
| [BigTreeTech SKR V1.4](https://biqu.equipment/collections/control-board/products/bigtreetech-skr-v1-4-skr-v1-4-turbo-control-board-tmc2209-tmc2208-eeprom-v1-0-exp-mot-v1-0-3d-printer-parts-for-ender-3) | [Anet A8](printer)                                                                        | 8GB MicroSD (Sandisk) | [Marlin Firmware](https://marlinfw.org/)                             | 3D printer Mainboard based on LPC1768                                    |
| [BigTreeTech SKR V1.4 Turbo](https://biqu.equipment/collections/control-board/products/bigtreetech-skr-v1-4-skr-v1-4-turbo-control-board)                                                                 |                                                                                           |                       | [Klipper Firmware](https://www.klipper3d.org)                        | 3D printer Mainboard based on LPC1769                                    |
| [BigTreeTech SKR Pico](https://biqu.equipment/collections/control-board/products/btt-skr-pico-v1-0)                                                                                                       | [Voron 0.2](printer-voron-0.2)                                                            |                       | [Klipper Firmware](https://www.klipper3d.org)                        | 3D printer Mainboard based on RP2040                                     |
| [BigTreeTech SKR Pico](https://biqu.equipment/collections/control-board/products/btt-skr-pico-v1-0)                                                                                                       |                                                                                           |                       | [Klipper Firmware](https://www.klipper3d.org)                        | 3D printer Mainboard based on RP2040                                     |
| [BigTreeTech U2C V2.1](https://docs.meteyou.wtf/btt-u2c-v2.x/)                                                                                                                                            |                                                                                           |                       | [CandleLight Firmware](https://github.com/candle-usb/candleLight_fw) | CANBUS adapter to communicate with CAN Enabled 3D printer boards         |

# Custom

| Item                                                             | Case                           | Flashed with                                  | Notes                                      |
| ---------------------------------------------------------------- | ------------------------------ | --------------------------------------------- | ------------------------------------------ |
| [ERCF Easy BRD](https://github.com/Tircown/ERCF-easy-brd)        | [AM8](printer-am8)             | [Klipper Firmware](https://www.klipper3d.org) | by [Tircown](https://github.com/Tircown)   |
| [Klipper Expander](https://github.com/timmit99/Klipper-Expander) | [Voron 1.8](printer-voron-1.8) | [Klipper Firmware](https://www.klipper3d.org) | by [timmit99](https://github.com/timmit99) |

# Espressif

| Item                                                                                                                       | Case                                                                                                        | Flashed with                                                                                                       | Hostname          | Notes                                 |
| -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ----------------- | ------------------------------------- |
| [Ai-Thinker ESP-01](https://docs.ai-thinker.com/en/esp8266/spec/esp_01)                                                    | [Wifi Arduino 85](https://github.com/armtronix/Wifi-Arduino-85)                                             | [Wifi Arduino 85 ESPHome](https://github.com/mikepthomas/Wifi-Arduino-85/blob/master/ESPHome/wifi-arduino-85.yaml) | armtronix-relay-1 | Original Ai-Thinker AT Firmware 0.9.5 |
| [Ai-Thinker ESP-01](https://docs.ai-thinker.com/en/esp8266/spec/esp_01)                                                    | [Wifi Arduino 85](https://github.com/armtronix/Wifi-Arduino-85)                                             | [Wifi Arduino 85 ESPHome](https://github.com/mikepthomas/Wifi-Arduino-85/blob/master/ESPHome/wifi-arduino-85.yaml) | armtronix-relay-2 | Original Ai-Thinker AT Firmware 0.9.5 |
| [Ai-Thinker ESP-01](https://docs.ai-thinker.com/en/esp8266/spec/esp_01)                                                    | [Wifi Arduino 85](https://github.com/armtronix/Wifi-Arduino-85)                                             | [Wifi Arduino 85 ESPHome](https://github.com/mikepthomas/Wifi-Arduino-85/blob/master/ESPHome/wifi-arduino-85.yaml) | armtronix-relay-3 | Original Ai-Thinker AT Firmware 0.9.5 |
| [Ai-Thinker ESP-01](https://docs.ai-thinker.com/en/esp8266/spec/esp_01)                                                    | [Wifi Arduino 85](https://github.com/armtronix/Wifi-Arduino-85)                                             | [Wifi Arduino 85 ESPHome](https://github.com/mikepthomas/Wifi-Arduino-85/blob/master/ESPHome/wifi-arduino-85.yaml) | armtronix-relay-4 | Original Ai-Thinker AT Firmware 0.9.5 |
| [BigTreeTech ESP-01s](https://biqu.equipment/collections/expansion-board/products/esp-01s-wifi-module-esp8266-for-skr-pro) | BigTreeTech SKR V1.4                                                                                        | [ESPHome](https://esphome.io/)                                                                                     | anet-a8           |                                       |
| [BigTreeTech ESP-01s](https://biqu.equipment/collections/expansion-board/products/esp-01s-wifi-module-esp8266-for-skr-pro) | BigTreeTech SKR V1.4 Turbo                                                                                  | [ESP3D](https://github.com/luc-github/ESP3D)                                                                       |                   |                                       |
| [Cytron ESP-01s](https://www.cytron.io/p-esp-01-wifi-serial-transceiver-module-esp8266)                                    | [Maker Pi Pico](https://www.cytron.io/p-maker-pi-pico-simplifying-raspberry-pi-pico-for-beginners-and-kits) | [Cytron ESP-01S AT Firmware](https://github.com/CytronTechnologies/esp-at-binaries)                                |                   |                                       |
| Generic ESP-01s                                                                                                            | ESP-01 Adapter                                                                                              | [ESPHome](https://esphome.io/)                                                                                     |                   |                                       |
| Generic ESP-01s                                                                                                            | DHT22 Module                                                                                                | [ESPHome](https://esphome.io/)                                                                                     | dht22             |                                       |
| Generic ESP-01s                                                                                                            | DS18B20 Module                                                                                              | [ESPHome](https://esphome.io/)                                                                                     | ds18b20           |                                       |
| Generic ESP-01s                                                                                                            | Relay Module                                                                                                | [ESPHome](https://esphome.io/)                                                                                     | relay             |                                       |
| Generic ESP-01s                                                                                                            | RGB LED Module                                                                                              | [WLED](https://install.wled.me/)                                                                                   |                   |                                       |
| Generic ESP-32 Cam                                                                                                         | ESP32 CAM MB                                                                                                | [ESPHome](https://esphome.io/)                                                                                     | camera            |                                       |
| Generic ESP-32 Dev Kit C V4                                                                                                | ESP32 Expansion Board                                                                                       |                                                                                                                    |                   |                                       |

# Fysetc

| Item                                          | Case                           | Flashed with                                  | Notes                                                                   |
| --------------------------------------------- | ------------------------------ | --------------------------------------------- | ----------------------------------------------------------------------- |
| [PITB](https://github.com/FYSETC/FYSETC-PITB) | [Voron 1.8](printer-voron-1.8) | [Klipper Firmware](https://www.klipper3d.org) | 3D printer Expansion board based on RP2040 with 2 large TMC5160 Drivers |

# Hardkernel

![NAS based on an Odroid XU4](/assets/blog/single-board-computers/odroid-cloudshell2.jpg)

I purchased the Odroid XU4 and CloudShell enclosure to use as a Network Attached Storage (NAS) server to replace an old outdated and failing 1TB Western Digital MyBook World edition NAS.

| Item                                                        | Case                                                                                            | Storage               | OS                                                            | Hostname   | Notes                                                                                                                                                                |
| ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | --------------------- | ------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Odroid C2](https://wiki.odroid.com/odroid-c2/odroid-c2)    |                                                                                                 |                       |                                                               |            | With [Odroid UPS3](https://wiki.odroid.com/accessory/power_supply_battery/odroid-ups3) + [Odroid USB Wifi adapter](https://www.hardkernel.com/shop/wifi-module-5bk/) |
| [Odroid Go](https://wiki.odroid.com/odroid_go/odroid_go)    | [Odroid Go QWERTY](https://wiki.odroid.com/odroid_go/qwerty)                                    | 4GB MicroSD (Sandisk) | [Go-Play](https://wiki.odroid.com/odroid_go/emulator/go_play) |            | Boxed                                                                                                                                                                |
| [Odroid XU4](https://wiki.odroid.com/odroid-xu4/odroid-xu4) | [CloudShell 2](https://wiki.odroid.com/accessory/add-on_boards/xu4_cloudshell2/xu4_cloudshell2) | 32GB eMMC             | Ubuntu 22.04                                                  | cloudshell | With 2 x 3TB Hard Drives in RAID 1                                                                                                                                   |

# Mellow

Mellow make mainboards to control 3D printers.

| Item                                                       | Case                           | Storage                | Flashed with                                    | Notes                                      |
| ---------------------------------------------------------- | ------------------------------ | ---------------------- | ----------------------------------------------- | ------------------------------------------ |
| [Fly RRF E3](https://github.com/Mellow-3D/FLY-RRF-E3)      | [Rook 2020](printer-rook)      | 8GB MicroSD (Generic)  | [RepRapFirmware](https://teamgloomy.github.io/) | With 4 Mellow Fly TMC2225 stepper drivers  |
| [Fly Super 8](https://mellow-3d.github.io/fly_super8.html) | [Voron 1.8](printer-voron-1.8) | 8GB MicroSD (Kingston) | [Klipper Firmware](https://www.klipper3d.org)   | With 12 Mellow Fly TMC2130 stepper drivers |

# Next Thing Co

![$9 Bag of Chip](/assets/blog/single-board-computers/chip.jpg)

Dubbed as "The World's First Nine Dollar Computer" I purchased a CHIP in about November 2016 as a toy to play about with however I hardly used it and eventually the company Next Thing Co. entered insolvency it quickly became unsupported.

However mine still works albeit on a very old operating system version.

| Item                                               | Case          | Flashed with                                              | Notes                |
| -------------------------------------------------- | ------------- | --------------------------------------------------------- | -------------------- |
| [CHIP](https://docs.getchip.cc/chip#chip-hardware) | C.H.I.P. Case | [The CHIP Operating System](https://docs.getchip.cc/chip) | With Composite Cable |

# Raspberry Pi Zero

![8086 Cluster Hat with 4 Raspberry Pi Zeros](/assets/blog/single-board-computers/raspberry-pi-zero-cluster.jpg)

My Raspberry Pi Zero cluster was assembled using a 8086 Cluster Hat that is quite cool due to it using USB gadget mode of the Raspberry Pi Zero to boot up the Raspberry Pis over USB therefore they do not require their own MicroSD cards and can share the storage of the controller Pi.

| Item                       | Revision | SoC     | RAM   | Case                                                                                                                                | Storage                     | OS                                                                                                 | hostname | Notes                                          |
| -------------------------- | -------- | ------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | -------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------- |
| Raspberry Pi Zero V1.2     | 900092   | BCM2835 | 512MB | [8086.net ZeroMicroDongle](https://8086.net/products#80860008)                                                                      |                             |                                                                                                    |          |                                                |
| Raspberry Pi Zero V1.3     | 900093   | BCM2835 | 512MB | [8086.net ZeroDongle](https://8086.net/products#80860007)                                                                           |                             |                                                                                                    |          |                                                |
| Raspberry Pi Zero W V1.1   | 9000c1   | BCM2835 | 512MB | Official Raspberry Pi Zero Case (Camera Lid)                                                                                        | 8GB MicroSD (Sandisk Ultra) | Raspberry Pi OS Lite (Legacy, 32-bit) - Bullseye                                                   | camera1  | With Generic Raspberry Pi Camera Rev 1.3       |
| Raspberry Pi Zero W V1.1   | 9000c1   | BCM2835 | 512MB | Official Raspberry Pi Zero Case (Camera Lid)                                                                                        | 8GB MicroSD (Sandisk Ultra) | Raspberry Pi OS Lite (Legacy, 32-bit) - Bullseye                                                   | camera2  | With Generic Raspberry Pi Camera Rev 1.3       |
| Raspberry Pi Zero 2 W V1.0 | 902120   | BCM2837 | 512MB | [LDO Raspberry Pi Zero USB Expander PCB](https://docs.ldomotors.com/en/voron/voron01/wiring_guide_rev_e#preparing-the-raspberry-pi) | 32GB MicroSD (Integral)     | [MainsailOS](https://docs-os.mainsail.xyz)                                                         | voron0   |                                                |
| Raspberry Pi Zero 2 W V1.0 | 902120   | BCM2837 | 512MB | [Cluster HAT Case v3.0](https://thepihut.com/products/cluster-hat-case)                                                             |                             | [Raspberry Pi OS Lite (64-bit) - Bookworm ClusterCTRL](https://github.com/burtyb/clusterhat-image) | p1       | No Storage as it boots via USBBoot from `cnat` |
| Raspberry Pi Zero 2 W V1.0 | 902120   | BCM2837 | 512MB | [Cluster HAT Case v3.0](https://thepihut.com/products/cluster-hat-case)                                                             |                             | [Raspberry Pi OS Lite (64-bit) - Bookworm ClusterCTRL](https://github.com/burtyb/clusterhat-image) | p2       | No Storage as it boots via USBBoot from `cnat` |
| Raspberry Pi Zero 2 W V1.0 | 902120   | BCM2837 | 512MB | [Cluster HAT Case v3.0](https://thepihut.com/products/cluster-hat-case)                                                             |                             | [Raspberry Pi OS Lite (64-bit) - Bookworm ClusterCTRL](https://github.com/burtyb/clusterhat-image) | p3       | No Storage as it boots via USBBoot from `cnat` |
| Raspberry Pi Zero 2 W V1.0 | 902120   | BCM2837 | 512MB | [Cluster HAT Case v3.0](https://thepihut.com/products/cluster-hat-case)                                                             |                             | [Raspberry Pi OS Lite (64-bit) - Bookworm ClusterCTRL](https://github.com/burtyb/clusterhat-image) | p4       | No Storage as it boots via USBBoot from `cnat` |

# Raspberry Pi 1

![OCR Education Kit for Raspberry Pi](/assets/blog/single-board-computers/raspberry-pi-1.jpg)

| Item                       | Revision | SoC     | RAM   | Case                               | Storage               | OS                                             | Hostname | Notes                                                                        |
| -------------------------- | -------- | ------- | ----- | ---------------------------------- | --------------------- | ---------------------------------------------- | -------- | ---------------------------------------------------------------------------- |
| Raspberry Pi Model A Rev 2 | 0008     | BCM2835 | 256MB |                                    |                       |                                                |          | With [Adafruit Prototyping Pi Plate](https://www.adafruit.com/product/801)   |
| Raspberry Pi Model B Rev 1 | 0002     | BCM2835 | 256MB | Adafruit Acrylic Case              | 8GB SD Card (TDK)     | Raspberry Pi OS Lite (Legacy, 32-bit) - Buster | original | With [Adafruit RGB Negative 16x2 LCD](https://www.adafruit.com/product/1110) |
| Raspberry Pi Model B Rev 1 | 0002     | BCM2835 | 256MB | Piface Digital Acrylic Case        |                       |                                                |          | With [PiFace Digital](http://www.piface.org.uk/products/piface_digital/)     |
| Raspberry Pi Model B Rev 1 | 0002     | BCM2835 | 256MB | Official Raspberry Pi Case (White) | Shared with `node1`   |                                                |          | With [Pimoroni PiGlow](https://shop.pimoroni.com/products/piglow)            |
| Raspberry Pi Model B Rev 2 | 000e     | BCM2835 | 512MB | Official Raspberry Pi Case (Clear) | Shared with `node2`   |                                                |          | With [Pimoroni PiGlow](https://shop.pimoroni.com/products/piglow)            |
| Raspberry Pi Model B Rev 2 | 000e     | BCM2835 | 512MB | Official Raspberry Pi Case (Clear) | Shared with `node3`   |                                                |          | With [Pimoroni PiGlow](https://shop.pimoroni.com/products/piglow)            |
| Raspberry Pi Model B Rev 2 | 000f     | BCM2835 | 512MB | Official Raspberry Pi Case (Clear) | Shared with `node4`   |                                                |          | With [Pimoroni PiGlow](https://shop.pimoroni.com/products/piglow)            |
| Raspberry Pi Model B Rev 2 | 000f     | BCM2835 | 512MB | Official Raspberry Pi Case (Clear) | Shared with `node5`   |                                                |          | With [Pimoroni PiGlow](https://shop.pimoroni.com/products/piglow)            |
| Raspberry Pi Model B Rev 2 | 000f     | BCM2835 | 512MB |                                    |                       |                                                |          | Broken SD Slot                                                               |
| Raspberry Pi Model A+ V1.1 | 0015     | BCM2835 | 256MB | ModMyPi VESA-Pi+ Model A+ Case     | 8GB MicroSD (Generic) |                                                |          | With [Pimoroni PiGlow](https://shop.pimoroni.com/products/piglow)            |
| Raspberry Pi Model B+ V1.2 | 0010     | BCM2835 | 512MB | CanaKit Raspberry Pi Case (Clear)  | Shared with `camera1` |                                                |          | With [Pimoroni PiGlow](https://shop.pimoroni.com/products/piglow)            |
| Raspberry Pi Model B+ V1.2 | 0013     | BCM2835 | 512MB | CanaKit Raspberry Pi Case (Clear)  | Shared with `camera2` |                                                |          | With [Pimoroni PiGlow](https://shop.pimoroni.com/products/piglow)            |

![My Original Raspberry Pi 1](/assets/blog/single-board-computers/original-raspberry-pi-1.jpg)

This is my original Raspberry Pi in an Adafruit acrylic case. I soldered the LCD display myself!

# Raspberry Pi 2

![My original Raspberry Pi cluster](/assets/blog/single-board-computers/raspberry-pi-2-cluster.jpg)

This was my original Raspberry Pi cluster, It was originally 4 layers however I managed to find a case that fit perfectly to add an additional layer. If you look hard enough, you will see that the fan of the bottom layer is in a slightly different place and the standoffs are slightly shorter.

The cluster was set up to learn [Ansible](https://www.ansible.com) as the Raspberry Pi 2s were a little too slow to run Docker or Kubernetes.

| Item                        | Revision | SoC     | RAM | Case                 | Storage                      | OS                                               | Hostname | Notes                                                                                                          |
| --------------------------- | -------- | ------- | --- | -------------------- | ---------------------------- | ------------------------------------------------ | -------- | -------------------------------------------------------------------------------------------------------------- |
| Raspberry Pi 2 Model B V1.1 | a01041   | BCM2836 | 1GB | Cluster Case         | 16GB MicroSD (Sandisk Ultra) | Raspberry Pi OS Lite (Legacy, 32-bit) - Buster   | node1    |                                                                                                                |
| Raspberry Pi 2 Model B V1.1 | a01041   | BCM2836 | 1GB | Cluster Case         | 16GB MicroSD (Sandisk Ultra) | Raspberry Pi OS Lite (Legacy, 32-bit) - Buster   | node2    |                                                                                                                |
| Raspberry Pi 2 Model B V1.1 | a01041   | BCM2836 | 1GB | Cluster Case         | 16GB MicroSD (Sandisk Ultra) | Raspberry Pi OS Lite (Legacy, 32-bit) - Buster   | node3    |                                                                                                                |
| Raspberry Pi 2 Model B V1.1 | a01041   | BCM2836 | 1GB | Cluster Case         | 16GB MicroSD (Sandisk Ultra) | Raspberry Pi OS Lite (Legacy, 32-bit) - Buster   | node4    |                                                                                                                |
| Raspberry Pi 2 Model B V1.1 | a01041   | BCM2836 | 1GB | Cluster Case         | 16GB MicroSD (Sandisk Ultra) | Raspberry Pi OS Lite (Legacy, 32-bit) - Buster   | node5    |                                                                                                                |
| Raspberry Pi 2 Model B V1.2 | a02042   | BCM2837 | 1GB | Flirc Aluminium Case | 16GB MicroSD (Sandisk Ultra) | Raspberry Pi OS Lite (Legacy, 32-bit) - Bullseye | piaware  | Boxed With FlightAware Pro Stick Plus, ADS-B installed via [Docker](https://sdr-enthusiasts.gitbook.io/ads-b/) |

![FlightAware setup for tracking aircraft](/assets/blog/single-board-computers/flight-tracker.jpg)

As I live fairly close to Cardiff International Airport and notice many aircraft flying over my house I have set up a flight tracker find out some more information about the planes and contribute the flight tracking information to [FlightAware](https://flightaware.com/adsb/stats/user/mikepthomas) for others to benefit from the information too.

# Raspberry Pi 3

![Updated Raspberry Pi cluster for Docker Swarm](/assets/blog/single-board-computers/raspberry-pi-3-cluster.jpg)

I got this case from eBay, it was not in the best shape, very dusty and scratched, it cost me £68.55 but it did contain 3 Raspberry Pi 3s (including one with broken Wifi and Bluetooth) and a few Micro USB Chargers Ethernet cables. The case also came with a switch that fits at the bottom perfectly.

I cleaned it up with some isopropyl alcohol and re-assembled it with some new screws as some of them were quite rusted.

I assembled this cluster to learn all about Containerization using [Docker Swarm mode](https://docs.docker.com/engine/swarm) and eventually, Kubernetes using [MicroK8s](https://microk8s.io/), however the Raspberry Pi 3s are a little too slow to fully run a K8s cluster with more than a handful of containers.

| Item                         | Revision | SoC     | RAM   | Case                              | Storage                      | OS                                                       | Hostname   | Notes                                                               |
| ---------------------------- | -------- | ------- | ----- | --------------------------------- | ---------------------------- | -------------------------------------------------------- | ---------- | ------------------------------------------------------------------- |
| Raspberry Pi 3 Model A+ V1.0 | 9020e0   | BCM2837 | 512MB | [AM8 Switchwire](printer-am8)     | 32GB MicroSD (Integral)      | Raspberry Pi OS Lite (Legacy, 32-bit) - Bullseye         | am8        | Boxed. Klipper installed via [Kiauh](https://github.com/dw-0/kiauh) |
| Raspberry Pi 3 Model B V1.2  | a02082   | BCM2837 | 1GB   | CanaKit Raspberry Pi Case (Black) | 32GB MicroSD (Sandisk Ultra) | Raspberry Pi OS with desktop (Legacy, 32-bit) - Bullseye | white      | Broken Wifi and Bluetooth with camera                               |
| Raspberry Pi 3 Model B V1.2  | a02082   | BCM2837 | 1GB   | Cluster Case                      | 32GB MicroSD (Sandisk Ultra) | Raspberry Pi OS Lite (Legacy, 32-bit) - Bullseye         | red        | With [Pimoroni Blinkt](https://shop.pimoroni.com/products/blinkt)   |
| Raspberry Pi 3 Model B V1.2  | a02082   | BCM2837 | 1GB   | Cluster Case                      | 32GB MicroSD (Sandisk Ultra) | Raspberry Pi OS Lite (Legacy, 32-bit) - Bullseye         | green      | With [Pimoroni Blinkt](https://shop.pimoroni.com/products/blinkt)   |
| Raspberry Pi 3 Model B V1.2  | a02082   | BCM2837 | 1GB   | Cluster Case                      | 32GB MicroSD (Sandisk Ultra) | Raspberry Pi OS Lite (Legacy, 32-bit) - Bullseye         | blue       | With [Pimoroni Blinkt](https://shop.pimoroni.com/products/blinkt)   |
| Raspberry Pi 3 Model B V1.2  | a22082   | BCM2837 | 1GB   | Cluster Case                      | 32GB MicroSD (Sandisk Ultra) | Raspberry Pi OS Lite (Legacy, 32-bit) - Bullseye         | black      | With [Pimoroni Blinkt](https://shop.pimoroni.com/products/blinkt)   |
| Raspberry Pi 3 Model B+ V1.3 | a020d3   | BCM2837 | 1GB   | Waveshare Touch Screen Case       | 64GB MicroSD (Sandisk Ultra) | Raspberry Pi OS with desktop (Legacy, 32-bit) - Bullseye | controller |                                                                     |
| Raspberry Pi 3 Model B+ V1.3 | a020d3   | BCM2837 | 1GB   | [Voron 1.8](printer-voron-1.8)    | 64GB MicroSD (Integral)      | [MainsailOS](https://docs-os.mainsail.xyz)               | voron1     |                                                                     |
| Raspberry Pi 3 Model B+ V1.3 | a020d3   | BCM2837 | 1GB   | Retroflag MegaPi Case             | 16GB MicroSD (Integral)      | [RetroPie](https://retropie.org.uk)                      | megapi     |                                                                     |
| Raspberry Pi 3 Model B+ V1.3 | a020d3   | BCM2837 | 1GB   | Retroflag NESPi Case+             | 16GB MicroSD (Integral)      | [RetroPie](https://retropie.org.uk)                      | nespi      |                                                                     |
| Raspberry Pi 3 Model B+ V1.3 | a020d3   | BCM2837 | 1GB   | Retroflag SuperPi Case            | 16GB MicroSD (Integral)      | [RetroPie](https://retropie.org.uk)                      | superpi    |                                                                     |

# Raspberry Pi 4

![My Raspberry Pi 400 setup on my desk](/assets/blog/single-board-computers/pi400.jpg)

| Item                        | Revision | SoC     | RAM | Case                                                                        | Storage                      | OS                                                                                                 | Hostname | Notes                                                                                                              |
| --------------------------- | -------- | ------- | --- | --------------------------------------------------------------------------- | ---------------------------- | -------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------ |
| Raspberry Pi 4 Model B      |          | BCM2711 | 4GB | Official Raspberry Pi 4 Case (Black)                                        | 16GB MicroSD (Sandisk Edge)  | Raspberry Pi OS Full (Legacy, 32-bit) - Bullseye                                                   |          | Boxed Desktop Kit (Unopened) with official Case Fan                                                                |
| Raspberry Pi 4 Model B      |          | BCM2711 | 4GB | Official Raspberry Pi 4 Case (Red)                                          | 16GB MicroSD (Sandisk Edge)  | Raspberry Pi OS Full (Legacy, 32-bit) - Bullseye                                                   |          | Boxed Desktop Kit (Unopened) with official Case Fan                                                                |
| Raspberry Pi 4 Model B V1.4 | c03114   | BCM2711 | 4GB | [pi-top [4] DIY Edition](https://www.pi-top.com/blog/meetpi-top4diyedition) | 64GB MicroSD (Sandisk Ultra) | [pi-topOS - Bullseye](https://www.pi-top.com/resources/download-os)                                | pi-top   | Boxed                                                                                                              |
| Raspberry Pi 4 Model B V1.5 | c03115   | BCM2711 | 4GB | [Cluster HAT Case v3.0](https://thepihut.com/products/cluster-hat-case)     | 128GB MicroSD (Integral)     | [Raspberry Pi OS Lite (64-bit) - Bookworm ClusterCTRL](https://github.com/burtyb/clusterhat-image) | cnat     | Boxed with [Cluster Hat v2.5](https://thepihut.com/products/cluster-hat-v2-0)                                      |
| Raspberry Pi 400 V1.0       | c03130   | BCM2711 | 4GB |                                                                             | 128GB MicroSD (Integral)     | Raspberry Pi OS Lite (64-bit) - Bookworm                                                           | nexus    | Boxed with [DACBerry 400 S](https://www.osaelectronics.com/learn/tutorials/dacberry-400-series-quick-start-guide/) |

# Raspberry Pi 5

![The latest addition to my Raspberry Pi collection](/assets/blog/single-board-computers/raspberry-pi-5.jpg)

| Item                        | Revision | SoC     | RAM | Case                               | Storage                  | OS                                                           | Hostname    | Notes                             |
| --------------------------- | -------- | ------- | --- | ---------------------------------- | ------------------------ | ------------------------------------------------------------ | ----------- | --------------------------------- |
| Raspberry Pi 5 Model B V1.0 | c04170   | BCM2712 | 4GB | Official Raspberry Pi 5 Case (Red) | 256GB MicroSD (Integral) | Raspberry Pi OS Lite (64-bit), Manually Installed KDE Plasma | raspberrypi | Boxed with official Active Cooler |

# Raspberry Pi Pico

![Board designed for tinkering using a Pi Pico](/assets/blog/single-board-computers/maker-pi-pico.jpg)

| Item                                | Case                                                                                                        | Flashed with                                                                 | Notes                           |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------- |
| Datanoise Pico ADK                  | Eurorack Module                                                                                             | [PicoADK Firmware](https://github.com/DatanoiseTV/PicoADK-Firmware-Template) | In original packaging           |
| Raspberry Pi Pico                   | [Macro Pi](https://www.thingiverse.com/thing:5817044)                                                       | [PiPicoMacroKeys](https://github.com/novaspirit/PiPicoMacroKeys)             | In original packaging           |
| Raspberry Pi Pico H                 | [Maker Pi Pico](https://www.cytron.io/p-maker-pi-pico-simplifying-raspberry-pi-pico-for-beginners-and-kits) | [MicroPython](https://micropython.org)                                       |                                 |
| Raspberry Pi Pico W                 | [Nevermore StealthMax](nevermore-filter#nevermore-stealthmax)                                               | [Nevermore Controller](https://github.com/SanaaHamel/nevermore-controller)   | In original packaging           |
| Raspberry Pi Pico WH                |                                                                                                             | [ESPHome](https://esphome.io/)                                               | Boxed                           |
| Raspberry Pi RP2040 Microcontroller |                                                                                                             |                                                                              | Bare Chip in original packaging |

# STMicroelectronics

| Item          | Case | Flashed with | Hostname | Notes |
| ------------- | ---- | ------------ | -------- | ----- |
| STM32F103C8T6 |      |              |          |       |

# Teensy

![Retro telephone used as a guestbook at my wedding](/assets/blog/single-board-computers/teensy-audio-guestbook.jpg)

| Item       | Case            | Flashed with                                                            | Notes                         |
| ---------- | --------------- | ----------------------------------------------------------------------- | ----------------------------- |
| Teensy 4.0 | Retro Telephone | [Audio Guestbook](https://github.com/playfultechnology/audio-guestbook) | With Audio Board for Teensy 4 |

# Wemos

| Item              | Case                                                     | Flashed with                   | Hostname          | Notes                                                               |
| ----------------- | -------------------------------------------------------- | ------------------------------ | ----------------- | ------------------------------------------------------------------- |
| Wemos D1 Mini Pro | [Solar Wifi Weather Station](solar-wifi-weather-station) | [ESPHome](https://esphome.io/) | weather-station-1 | [Assembled, currently testing](solar-wifi-weather-station#assembly) |
| Wemos D1 Mini Pro | [Solar Wifi Weather Station](solar-wifi-weather-station) | [ESPHome](https://esphome.io/) | weather-station-2 |                                                                     |
| Wemos D1 Mini Pro | [Solar Wifi Weather Station](solar-wifi-weather-station) | [ESPHome](https://esphome.io/) | weather-station-3 |                                                                     |
