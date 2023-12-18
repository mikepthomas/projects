---
title: Creating a solar powered weather station
date: 2023-06-27
lastmod: 2023-08-25
author: Mike Thomas
description: I won an auction on ebay and there were 3 Wifi Weather Station PCBs and some other components in the lot, let's order the rest of the parts and assemble them.
preview: /assets/blog/solar-wifi-weather-station/solar-wifi-weather-station-hero.jpg
slug: /projects/solar-wifi-weather-station
draft: false
tags:
  - ESPHome
categories:
  - Electronics
  - Software
keywords:
  - Weather Station
---

# Table of contents

# Intro

I won an auction titled "`Box of bits inc Arduinos, Pi's, Odroid, various sensors etc`" on ebay there were 3 Wifi Weather Station PCBs and a few other required components included in the lot, let's order the rest of the parts and assemble them.

# What is this?

This is a PCB to create a [Weather Station powered by an 18650 battery](https://www.instructables.com/Solar-Powered-WiFi-Weather-Station-V20), the project has had a few updates at the time of writing, the project is up to V4.0, however most of the parts required were included in the original listing so why not try assemble them and see how it goes.

# Printed Circuit Board

The PCB was designed by [Open Green Energy](https://www.instructables.com/member/opengreenenergy) and was designed around the [Wemos D1 Mini Pro](https://www.wemos.cc/en/latest/d1/d1_mini_pro.html) micro controller, and it includes a connector to attach a solar panel, a TP4056 to charge an 18650 Lithium battery, and a BMP280 Temperature, Humidity and Barometric Pressure sensor. It also has a few extra headers for attaching additional sensors such as a DS18B20 Temperature sensor or adding an I2C display.

# Parts Required

Quantities are for 1 PCB.

| Item                              | Quantity | Received | Notes |
| --------------------------------- | -------- | -------- | ----- |
| Wemos D1 Mini Pro                 | 1        | 3        |       |
| TP4056 Charging Board             | 1        | 5        |       |
| BMP280 Sensor                     | 1        | 3        |       |
| DS18B20 Sensor                    | 1        | 3        |       |
| Capacitive Soil Moisture Sensor   | 1        | 3        |       |
| Raindrops Detection Sensor Module | 1        | 3        |       |
| Switch                            | 1        | 19       |       |
| Screw Terminals                   | 1        | 15       |       |
| Brass PCB standoffs               | 4        | 10       |       |
| 18650 Battery                     | 1        | 6        |       |
| 18650 Battery Holder              | 1        | 3        |       |
| Solar Panel                       | 1        | 3        |       |
| Straight Headers Pin              | 46 pins  | 400 pins |       |
| 22 AWG wire                       | ~500mm   | 2m       |       |
| Weather Station V2.0 PCB          | 1        | 3        |       |
| Super Glue                        | 1        | 1        |       |

# Printing Parts

| Item                                                                                                 | Quantity | Material                                                       | Printed | Notes                                                      |
| ---------------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------- | :-----: | ---------------------------------------------------------- |
| [Stevenson_Screen_Screen_Top_Cover_for_Solar_Panel](https://www.thingiverse.com/thing:3615016/files) | 1        | [eSun ABS+ (Cold White)](printer-filament#esun-abs-cold-white) |   :x:   | May need to be modified to fit different sized solar panel |
| [Stevenson_Screen_Bottom_Mount](https://www.thingiverse.com/thing:3615016/files)                     | 1        | [eSun ABS+ (Cold White)](printer-filament#esun-abs-cold-white) |   :x:   |                                                            |
| [Stevenson_Screen_PCB_Mount_Frame](https://www.thingiverse.com/thing:3615016/files)                  | 1        | [eSun ABS+ (Cold White)](printer-filament#esun-abs-cold-white) |   :x:   |                                                            |
| [Stevenson_Screen_Middle_Rings_x_9](https://www.thingiverse.com/thing:3615016/files)                 | 9        | [eSun ABS+ (Cold White)](printer-filament#esun-abs-cold-white) |   :x:   |                                                            |
| [Stevenson_Screen_Bottom_Plate](https://www.thingiverse.com/thing:3615016/files)                     | 1        | [eSun ABS+ (Cold White)](printer-filament#esun-abs-cold-white) |   :x:   |                                                            |
| [Stevenson_Screen_Top_Cover](https://www.thingiverse.com/thing:3615016/files)                        | 1        | [eSun ABS+ (Cold White)](printer-filament#esun-abs-cold-white) |   :x:   |                                                            |
| [M6_PLA_Rod_for_Weather_Station](https://www.thingiverse.com/thing:3615016/files)                    | 4        | [eSun ABS+ (Cold White)](printer-filament#esun-abs-cold-white) |   :x:   |                                                            |
