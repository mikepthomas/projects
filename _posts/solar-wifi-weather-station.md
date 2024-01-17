---
title: Creating a solar powered weather station
date: 2023-06-27
lastmod: 2023-12-19T19:50:48.115Z
author: Mike Thomas
description: I won an auction on ebay and there were 3 Wifi Weather Station PCBs and some other components in the lot, let's order the rest of the parts and assemble them.
preview: /assets/blog/solar-wifi-weather-station/solar-wifi-weather-station-hero.jpg
slug: /projects/solar-wifi-weather-station
draft: false
tags:
  - ESPHome
  - Printed Circuit Board
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

# Assembly

![A Fully assembled Solar Wifi Weather Station V2.0 PCB](/assets/blog/solar-wifi-weather-station/solar-wifi-weather-station-assembled.jpg)

# Software

To make the board work in ESPHome we need to select `d1_mini_pro` as the board type:

```yaml
esphome:
  name: weather-station
  friendly_name: Weather Station
  comment: Solar Powered WiFi Weather Station V2.0
  project:
    name: 'Open-Green-Energy.Solar-Wifi-Weather-Station'
    version: '2.0'

esp8266:
  board: d1_mini_pro
```

For the BME280 sensor we need to add:

```yaml
i2c:
  scl: D1
  sda: D2

sensor:
  - platform: bme280
    temperature:
      name: Temperature
      id: bme280_temperature
      oversampling: 16x
    pressure:
      name: Pressure
      id: bme280_pressure
    humidity:
      name: Relative Humidity
      id: bme280_humidity
    address: 0x76
    update_interval: 10s

  - platform: absolute_humidity
    name: Absolute Humidity
    temperature: bme280_temperature
    humidity: bme280_humidity

  - platform: template
    name: Equivalent sea level pressure
    lambda: |-
      const float STANDARD_ALTITUDE = 10.0; // in meters, see note
      return id(bme280_pressure).state / powf(1 - ((0.0065 * STANDARD_ALTITUDE) /
        (id(bme280_temperature).state + (0.0065 * STANDARD_ALTITUDE) + 273.15)), 5.257); // in hPa
    update_interval: 10s
    unit_of_measurement: 'hPa'

  - platform: template
    name: Dew Point
    lambda: |-
      return (243.5*(log(id(bme280_humidity).state/100)+((17.67*id(bme280_temperature).state)/
      (243.5+id(bme280_temperature).state)))/(17.67-log(id(bme280_humidity).state/100)-
      ((17.67*id(bme280_temperature).state)/(243.5+id(bme280_temperature).state))));
    update_interval: 10s
    unit_of_measurement: °C
    icon: 'mdi:thermometer-alert'
```

For a DS18B20 sensor we need to add:

```yaml
dallas:
  - pin: D7

sensor:
  - platform: dallas
    address: 0x593ce1045707bc28
    name: External Temperature
```

And to calculate the battery voltage:

```yaml
sensor:
  - platform: adc
    name: Battery Voltage
    id: battery_voltage
    device_class: voltage
    pin: A0
    filters:
      - multiply: 5.2

  - platform: template
    name: Battery Level
    device_class: battery
    unit_of_measurement: '%'
    lambda: !lambda |-
      if (id(battery_voltage).state <= 3) return 0;
      else return ((id(battery_voltage).state - 3) / 1.2 * 100.00);
    update_interval: 10s
```

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
