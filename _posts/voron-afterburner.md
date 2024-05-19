---
title: Voron AfterBurner
heading: Assembling the Voron AfterBurner Toolhead
date: 2022-03-07
lastmod: 2024-05-19T16:25:23.786Z
author: Mike Thomas
description: AfterBurner the toolhead for the Voron 1.8.
preview: /assets/blog/voron-afterburner/afterburner-hero.jpg
slug: /projects/voron-afterburner
related:
  - /projects/voron-m4
draft: false
tags:
  - Extruder
  - Voron
categories:
  - 3D Printer
keywords:
  - Printer
---

# Table of contents

# Sourcing Parts

## Fasteners

| Item               | Quantity | Received | Notes                                            |
| ------------------ | -------- | -------- | ------------------------------------------------ |
| M3x8 SHCS          | 6        | 6        | In [Voron V1.8 BOM](printer-voron-1.8#fasteners) |
| M3x12 SHCS         | 4        | 4        | In [Voron V1.8 BOM](printer-voron-1.8#fasteners) |
| M3x16 SHCS         | 4        | 4        | In [Voron V1.8 BOM](printer-voron-1.8#fasteners) |
| M3x20 SHCS         | 4        | 4        | In [Voron V1.8 BOM](printer-voron-1.8#fasteners) |
| M3x30 SHCS         | 6        | 6        | In [Voron V1.8 BOM](printer-voron-1.8#fasteners) |
| M3x40 SHCS         | 2        | 2        | In [Voron V1.8 BOM](printer-voron-1.8#fasteners) |
| M3 Threaded Insert | 12       | 12       | In [Voron V1.8 BOM](printer-voron-1.8#fasteners) |

## Motion

| Item                        | Quantity | Received | Notes                                         |
| --------------------------- | -------- | -------- | --------------------------------------------- |
| BMG Extruder Components Kit | 1        | 1        | In [Voron V1.8 BOM](printer-voron-1.8#motion) |

## Electronics

| Item                           | Quantity | Received | Notes                                                                 |
| ------------------------------ | -------- | -------- | --------------------------------------------------------------------- |
| 40x40x20 Centrifugal Fan (24V) | 1        | 1        | GDSTime Fan In [Voron V1.8 BOM](printer-voron-1.8#electronics)        |
| 40x40x10 Axial Fan (24V)       | 1        | 1        | GDSTime Fan In [Voron V1.8 BOM](printer-voron-1.8#electronics)        |
| E3D V6 Bowden Hotend Kit (24V) | 1        | 1        | In [Voron V1.8 BOM](printer-voron-1.8#electronics)                    |
| NEMA17 Motor 17HS08-1004S      | 1        | 1        | LDO 42STH20-1004AS In [Voron V1.8 BOM](printer-voron-1.8#electronics) |

## Misc

| Item                | Quantity | Received | Notes                                                            |
| ------------------- | -------- | -------- | ---------------------------------------------------------------- |
| 4mm Bowden Coupler  | 1        | 1        | For ERCF Clockwork 1 In [Voron V1.8 BOM](printer-voron-1.8#misc) |
| Bowden Tube         | 10mm     | 10mm     | Red In [Voron V1.8 BOM](printer-voron-1.8#misc)                  |
| Nylon Cable Ties 4" | 2        | 2        | In [Voron V1.8 BOM](printer-voron-1.8#wires)                     |

## ERCF Filament Sensor

| Item                                 | Quantity | Received | Notes                                        |
| ------------------------------------ | -------- | -------- | -------------------------------------------- |
| 24AWG PTFE Cable (Black)             | 150mm    | 150mm    | In [Voron V1.8 BOM](printer-voron-1.8#wires) |
| 24AWG PTFE Cable (Yellow)            | 150mm    | 150mm    | In [Voron V1.8 BOM](printer-voron-1.8#wires) |
| 24AWG PTFE Cable (Red)               | 150mm    | 150mm    | In [Voron V1.8 BOM](printer-voron-1.8#wires) |
| 6mm x 3mm Round Neodymium Magnets    | 1        | 1        | In Blurolls ERCF Toolhead Sensor Kit         |
| AH3364Q-P-B Hall Effect sensor (SIP) | 1        | 1        | In Blurolls ERCF Toolhead Sensor Kit         |
| JST XH Connector Plug 3 Position     | 1        | 1        | In Blurolls ERCF Toolhead Sensor Kit         |
| M3x8 SHCS                            | 2        | 2        | In Blurolls ERCF Toolhead Sensor Kit         |
| M3 DIN125 Steel Washer               | 1        | 1        | In Blurolls ERCF Toolhead Sensor Kit         |

## Toolhead PCB

| Item                           | Quantity | Received | Notes |
| ------------------------------ | -------- | -------- | ----- |
| ERCF Afterburner Tool-Head PCB | 1        | 1        |       |
| M3x8 SHCS                      | 2        | 2        |       |
| M3 Nylon Washer                | 2        | 2        |       |

## Dual Bowden

| Item          | Quantity | Received | Notes        |
| ------------- | -------- | -------- | ------------ |
| Bowden Clip   | 2        | 2        |              |
| Bowden Collet | 2        | 2        | ECAS Version |

# Printing Parts

![3D render of the Voron AfterBurner Assembled](/assets/blog/voron-afterburner/voron-design/afterburner-assembled.jpg)

> Image © 2021 [Voron Design](https://www.vorondesign.com/)

All printed parts will be printed in eSun ABS+. The Voron team recommends an infill type of 40% of either Grid, Gyroid, Honeycomb, Triangle or Cubic. A layer height of 0.2mm and extrusion width of 0.4mm, with a wall count of 4 and top/bottom layers of 5.

## Tool Cartridge

### :white_check_mark: V6 Printhead

| Item                                                                                                                                        | Quantity | Material                                             |      Printed       | Notes |
| ------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------- | :----------------: | ----- |
| [printhead_front_e3dv6](https://github.com/VoronDesign/Voron-Afterburner/blob/afterburner/STLs/Printheads/E3D_V6/printhead_front_e3dv6.stl) | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) | :heavy_check_mark: |       |
| [printhead_rear_e3dv6](https://github.com/VoronDesign/Voron-Afterburner/blob/afterburner/STLs/Printheads/E3D_V6/printhead_rear_e3dv6.stl)   | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) | :heavy_check_mark: |       |

#### Assembly

##### Parts Needed

| Item                           | Quantity |
| ------------------------------ | -------- |
| Bowden Tube                    | 10mm     |
| E3D V6 Bowden Hotend Kit (24V) | 1        |
| M3x12 SHCS                     | 2        |
| M3x16 SHCS                     | 2        |
| M3x40 SHCS                     | 2        |
| M3 Threaded Insert             | 4        |
| Nylon Cable Ties 4"            | 2        |

## Clockwork

![ERCF Clockwork Extruder with Toolhead PCB](/assets/blog/voron-afterburner/clockwork-assembled.jpg)

### :white_check_mark: Motor Plate

| Item                                                                                                                                                | Quantity | Material                                             |      Printed       | Notes |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------- | :----------------: | ----- |
| [extruder_motor_plate_for_pcb](https://github.com/VoronDesign/Voron-Afterburner/blob/afterburner/STLs/Direct_Feed/extruder_motor_plate_for_pcb.stl) | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) | :heavy_check_mark: |       |

#### Assembly

##### Parts Needed

| Item                        | Quantity |
| --------------------------- | -------- |
| BMG Extruder Components Kit | 1        |
| LDO 42STH20-1004AS Motor    | 1        |
| M3x8 SHCS                   | 5        |
| M3 Threaded Insert          | 4        |

### :white_check_mark: Main Body

| Item                                                                                                                                                | Quantity | Material                                                                 |      Printed       | Notes                                          |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------ | :----------------: | ---------------------------------------------- |
| [extruder_body](https://github.com/VoronDesign/Voron-Afterburner/blob/afterburner/STLs/Direct_Feed/extruder_body.stl)                               | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)                     |        :x:         | Not Required as I am printing the ERCF Version |
| [ERCF_Sensor_Cable_Cover](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Filament_Sensor/Stls/AB/%5Ba%5D_AB_ERCF_Sensor_Cable_Cover.stl) | 1        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) | :heavy_check_mark: | ERCF Filament Sensor Part                      |
| [ERCF_Sensor_Extruder_Body](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Filament_Sensor/Stls/AB/AB_ERCF_Sensor_Extruder_Body.stl)     | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)                     | :heavy_check_mark: | ERCF Filament Sensor Part                      |

#### Assembly

##### Parts Needed

| Item                                 | Quantity |
| ------------------------------------ | -------- |
| 24AWG PTFE Cable (Black)             | 150mm    |
| 24AWG PTFE Cable (Yellow)            | 150mm    |
| 24AWG PTFE Cable (Red)               | 150mm    |
| 6mm x 3mm Round Neodymium Magnets    | 1        |
| AH3364Q-P-B Hall Effect sensor (SIP) | 1        |
| JST XH Connector Plug 3 Position     | 1        |
| M3x8 SHCS                            | 2        |
| M3x30 SHCS                           | 2        |
| M3 DIN125 Steel Washer               | 1        |

### :white_check_mark: Guidler & Latch

| Item                                                                                                                                    | Quantity | Material                                                                 |      Printed       | Notes                                          |
| --------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------ | :----------------: | ---------------------------------------------- |
| [ERCF_Sensor_Latch](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Filament_Sensor/Stls/AB/%5Ba%5D_AB_ERCF_Sensor_Latch.stl) | 1        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) | :heavy_check_mark: | ERCF Filament Sensor Part                      |
| [latch](https://github.com/VoronDesign/Voron-Afterburner/blob/afterburner/STLs/Direct_Feed/%5Ba%5D_latch.stl)                           | 1        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) |        :x:         | Not Required as I am printing the ERCF Version |
| [guidler](https://github.com/VoronDesign/Voron-Afterburner/blob/afterburner/STLs/Direct_Feed/%5Ba%5D_guidler.stl)                       | 1        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) | :heavy_check_mark: |                                                |
| [latch_shuttle](https://github.com/VoronDesign/Voron-Afterburner/blob/afterburner/STLs/Direct_Feed/%5Ba%5D_latch_shuttle.stl)           | 1        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) | :heavy_check_mark: |                                                |

#### Assembly

##### Parts Needed

| Item               | Quantity |
| ------------------ | -------- |
| M3x20 SHCS         | 1        |
| M3x30 SHCS         | 1        |
| M3 Threaded Insert | 1        |

### :white_check_mark: Cable Cover

| Item                                                                                                                                 | Quantity | Material                                                                 |      Printed       | Notes                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------- | ------------------------------------------------------------------------ | :----------------: | -------------------------------------------------------------------------------- |
| [connector_cover](https://github.com/VoronDesign/Voron-Afterburner/blob/afterburner/STLs/Direct_Feed/%5Ba%5D_connector_cover_18.stl) | 1        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) |        :x:         | Voron 1.8 Version, Not Required as I will be using the ERCF Toolhead PCB Version |
| [chain_anchor](https://github.com/VoronDesign/Voron-Afterburner/blob/afterburner/STLs/Direct_Feed/chain_anchor_3hole.stl)            | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)                     | :heavy_check_mark: | This is the Generic Cable Chain Version                                          |

#### Assembly

##### Parts Needed

| Item               | Quantity |
| ------------------ | -------- |
| M3x8 SHCS          | 1        |
| M3x20 SHCS         | 3        |
| M3x30 SHCS         | 1        |
| M3 Threaded Insert | 3        |

## Fan Assembly

| Item                                                                                                                            | Quantity | Material                                                                 |      Printed       | Notes |
| ------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------ | :----------------: | ----- |
| [blower_housing_front](https://github.com/VoronDesign/Voron-Afterburner/blob/afterburner/STLs/%5Ba%5D_blower_housing_front.stl) | 1        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) | :heavy_check_mark: |       |
| [blower_housing_rear](https://github.com/VoronDesign/Voron-Afterburner/blob/afterburner/STLs/blower_housing_rear.stl)           | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)                     | :heavy_check_mark: |       |
| [hotend_fan_mount](https://github.com/VoronDesign/Voron-Afterburner/blob/afterburner/STLs/hotend_fan_mount.stl)                 | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)                     | :heavy_check_mark: |       |

### :white_check_mark: Assembly

#### Parts Needed

| Item                           | Quantity |
| ------------------------------ | -------- |
| M3x12 SHCS                     | 2        |
| M3x16 SHCS                     | 2        |
| M3x30 SHCS                     | 2        |
| 40x40x20 Centrifugal Fan (24V) | 1        |
| 40x40x10 Axial Fan (24V)       | 1        |

## Toolhead PCB

| Item                                                                                                                                                                          | Quantity | Material                                                                 |      Printed       | Notes                                                                            |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------ | :----------------: | -------------------------------------------------------------------------------- |
| [pcb_spacer](https://github.com/VoronDesign/Voron-Hardware/blob/master/Afterburner_Toolhead_PCB/STLs/Clockwork/pcb_spacer.stl)                                                | 1        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) | :heavy_check_mark: | Afterburner Toolhead PCB Part                                                    |
| [pcb_cover](https://github.com/wile-e1/VoronUsers/blob/sb_cw1_pcb_cover/printer_mods/wile-e1/Stealthburner_CW1_PCB_Cover/sb_cw1_pcb_cover-r1.stl)                             | 1        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) |        :x:         | This a User Mod for the ERCF Toolhead PCB by wile-e1 that fits the StealthBurner |
| [pcb_cover_clip-on_mount](https://github.com/wile-e1/VoronUsers/blob/sb_cw1_pcb_cover/printer_mods/wile-e1/Stealthburner_CW1_PCB_Cover/sb_cw1_pcb_cover_clip-on_mount-r1.stl) | 1        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) |        :x:         | This a User Mod for the ERCF Toolhead PCB by wile-e1 that fits the StealthBurner |

### :white_check_mark: Assembly

![Clockwork 1 extruder installed](/assets/blog/voron-afterburner/clockwork-installed.jpg)

#### Parts Needed

| Item                           | Quantity |
| ------------------------------ | -------- |
| ERCF Afterburner Tool-Head PCB | 1        |
| M3x8 SHCS                      | 2        |
| M3 Nylon Washer                | 2        |

## Dual Bowden

| Item                                                                                                                         | Quantity | Material                                             | Printed | Notes |
| ---------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------- | :-----: | ----- |
| [bowden_dual_front_a](https://github.com/VoronDesign/Voron-Afterburner/blob/afterburner/STLs/Bowden/bowden_dual_front_a.stl) | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |   :x:   |       |
| [bowden_dual_front_b](https://github.com/VoronDesign/Voron-Afterburner/blob/afterburner/STLs/Bowden/bowden_dual_front_b.stl) | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |   :x:   |       |
| [bowden_rear](https://github.com/VoronDesign/Voron-Afterburner/blob/afterburner/STLs/Bowden/bowden_rear.stl)                 | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |   :x:   |       |

### :negative_squared_cross_mark: Assembly

#### Parts Needed

| Item          | Quantity |
| ------------- | -------- |
| Bowden Clip   | 2        |
| Bowden Collet | 2        |
