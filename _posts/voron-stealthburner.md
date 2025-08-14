---
title: Voron StealthBurner
heading: Assembling the Voron StealthBurner Toolhead
date: 2024-05-16T13:21:45.217Z
lastmod: 2024-06-05T16:33:58.369Z
author: Mike Thomas
description: Assembling the toolhead for the Voron 2.4.
preview: /assets/blog/voron-stealthburner/stealthburner-hero.jpg
slug: /projects/voron-stealthburner
related:
  - https://www.vorondesign.com/voron_stealthburner
  - /projects/voron-afterburner
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

> Image © 2023 [Voron Design](https://www.vorondesign.com/)

# Table of contents

# Sourcing Parts

## Fasteners

| Item                                   | Quantity | Received | Notes                                  |
| -------------------------------------- | -------- | -------- | -------------------------------------- |
| Mounting screws for hotend (M2.5 / M3) | 2-4      |          | Not required for V6 Toolhead           |
| M3x8 SHCS                              | 2        | 2        | In LDO Voron V2.4 Premium Hardware Kit |
| M3x6 FHCS                              | 3        | 51       |                                        |
| M3x6 BHCS                              | 1        | 1        | In LDO Voron V2.4 Premium Hardware Kit |
| M3x50 SHCS                             | 2        | 50       |                                        |
| M3x30 SHCS                             | 1        | 1        | In LDO Voron V2.4 Premium Hardware Kit |
| M3x25 SHCS                             | 6        | 30       |                                        |
| M3x20 SHCS                             | 1        | 1        | In LDO Voron V2.4 Premium Hardware Kit |
| M3x16 SHCS                             | 2        | 2        | In LDO Voron V2.4 Premium Hardware Kit |
| M3x12 SHCS                             | 2        | 2        | In LDO Voron V2.4 Premium Hardware Kit |
| M3x10 SHCS                             | 2        | 2        |                                        |
| M3 Washer                              | 1        | 1        | In LDO Voron V2.4 Premium Hardware Kit |
| M3 Threaded Insert                     | 19       | 19       | In LDO Voron V2.4 Premium Hardware Kit |
| M3 Hexnut                              | 2        | 2        | In LDO Voron V2.4 Premium Hardware Kit |
| Bondtech BMG Extruder Kit              | 1        | 1        |                                        |

## Misc

| Misc                               | Quantity | Received | Notes                                             |
| ---------------------------------- | -------- | -------- | ------------------------------------------------- |
| PTFE Tube 50mm (Trim to length)    | 1        | 1        |                                                   |
| 6x3mm Magnet (Hall Effect Endstop) | 1        |          | Not required as I will be using physical switches |

## Electronics

| Item                                         | Quantity | Received | Notes                                                                                                                                 |
| -------------------------------------------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| NeoPixel RGBW Mini Button PCB                | 3        | 3        | [Linneo Rainbow Barf LED Harness](https://www.onetwo3d.co.uk/product/linneo-stealthburner-rainbow-barf-2x-rgbw-led-harness-internal/) |
| NEMA14 36mm pancake Motor with 10 tooth gear | 1        | 1        | LDO-36STH20-1004AHG                                                                                                                   |
| 50x50x15 Centrifugal Fan                     | 1        | 1        | GDSTime Fan                                                                                                                           |
| 40x40x10 Axial Fan                           | 1        | 1        | GDSTime Fan                                                                                                                           |

## Cables

| Item                                      | Quantity | Received | Notes                                                                                                                                           |
| ----------------------------------------- | -------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| MicroFit3 Male Pin                        | 3        |          | Not required as I will be using [LDO Toolhead PCB](https://docs.ldomotors.com/en/voron/toolhead_harness#the-toolhead-pcb-stealthburner-version) |
| MicroFit3 Female Pin                      | 3        |          | Not required as I will be using [LDO Toolhead PCB](https://docs.ldomotors.com/en/voron/toolhead_harness#the-toolhead-pcb-stealthburner-version) |
| MicroFit3 Connector Receptacle 3 Position | 1        |          | Not required as I will be using [LDO Toolhead PCB](https://docs.ldomotors.com/en/voron/toolhead_harness#the-toolhead-pcb-stealthburner-version) |
| MicroFit3 Connector Plug 3 Position       | 1        |          | Not required as I will be using [LDO Toolhead PCB](https://docs.ldomotors.com/en/voron/toolhead_harness#the-toolhead-pcb-stealthburner-version) |
| 30AWG PTFE Cable (3ft total)              | 1        |          | Not required as I will be using [LDO Toolhead Cable](https://docs.ldomotors.com/en/voron/toolhead_harness#the-toolhead-cable)                   |
| 24AWG PTFE Cable (30ft total)             | 1        |          | Not required as I will be using [LDO Toolhead Cable](https://docs.ldomotors.com/en/voron/toolhead_harness#the-toolhead-cable)                   |

## ADXL345 Sensor

| Item                     | Quantity | Received | Notes                                                              |
| ------------------------ | -------- | -------- | ------------------------------------------------------------------ |
| M3x12 SHCS               | 2        | 2        | in [LDO Input Shaper Kit](https://docs.ldomotors.com/en/adxl_tool) |
| M3 Threaded Insert       | 2        | 2        | in [LDO Input Shaper Kit](https://docs.ldomotors.com/en/adxl_tool) |
| M2x10 Self-Tapping Screw | 2        | 2        | in [LDO Input Shaper Kit](https://docs.ldomotors.com/en/adxl_tool) |
| Harness for ADXL Sensor  | 1        | 1        | in [LDO Input Shaper Kit](https://docs.ldomotors.com/en/adxl_tool) |
| ADXL345 Sensor Module    | 1        | 1        | in [LDO Input Shaper Kit](https://docs.ldomotors.com/en/adxl_tool) |

# Printing Parts

![3D render of the Voron StealthBurner Assembled](/assets/blog/voron-stealthburner/voron-design/stealthburner-assembled.jpg)

> Image © 2023 [Voron Design](https://www.vorondesign.com/)

All printed parts will be printed in eSun ABS+. The Voron team recommends an infill type of 40% of either Grid, Gyroid, Honeycomb, Triangle or Cubic. A layer height of 0.2mm and extrusion width of 0.4mm, with a wall count of 4 and top/bottom layers of 5.

## Tools

| Item                                                                                                                                                    | Quantity | Material | Printed | Notes                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------- | :-----: | ---------------------------- |
| [LED-PCB_Drill_Template](https://github.com/VoronDesign/Voron-Hardware/blob/master/Stealthburner_Toolhead_PCB/STLs/SB-LED-PCB_Drill_Template_v0.02.stl) | 1        |          |   :x:   | This is a mod by `hartk1213` |
| [SB_5015_Cutting_Tool_A](https://github.com/VoronDesign/Voron-Stealthburner/blob/main/STLs/Tools/SB_5015_Cutting_Tool_A.stl)                            | 1        |          |   :x:   |                              |
| [SB_5015_Cutting_Tool_B](https://github.com/VoronDesign/Voron-Stealthburner/blob/main/STLs/Tools/SB_5015_Cutting_Tool_B.stl)                            | 1        |          |   :x:   |                              |

## ClockWork 2

![3D render of the Voron ClockWork 2](/assets/blog/voron-stealthburner/voron-design/clockwork-2.jpg)

> Image © 2023 [Voron Design](https://www.vorondesign.com/)

### :negative_squared_cross_mark: Guidler Arm

| Item                                                                                                                                 | Quantity | Material                                               | Size | Weight | Cost | Printed | Notes |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------- | ------------------------------------------------------ | ---- | ------ | ---- | :-----: | ----- |
| [guidler_a](https://github.com/VoronDesign/Voron-Stealthburner/blob/main/STLs/Clockwork2/Direct_Drive/%5Ba%5D_guidler_a.stl)         | 1        | [eSun ABS+ (Purple)](printer-filament#esun-abs-purple) |      |        |      |   :x:   |       |
| [guidler_b](https://github.com/VoronDesign/Voron-Stealthburner/blob/main/STLs/Clockwork2/Direct_Drive/%5Ba%5D_guidler_b.stl)         | 1        | [eSun ABS+ (Purple)](printer-filament#esun-abs-purple) |      |        |      |   :x:   |       |
| [latch_shuttle](https://github.com/VoronDesign/Voron-Stealthburner/blob/main/STLs/Clockwork2/Direct_Drive/%5Ba%5D_latch_shuttle.stl) | 1        | [eSun ABS+ (Purple)](printer-filament#esun-abs-purple) |      |        |      |   :x:   |       |

### :negative_squared_cross_mark: Motor Plate

| Item                                                                                                                     | Quantity | Material                                             | Size | Weight | Cost | Printed | Notes |
| ------------------------------------------------------------------------------------------------------------------------ | -------- | ---------------------------------------------------- | ---- | ------ | ---- | :-----: | ----- |
| [motor_plate](https://github.com/VoronDesign/Voron-Stealthburner/blob/main/STLs/Clockwork2/Direct_Drive/motor_plate.stl) | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |      |        |      |   :x:   |       |

### :negative_squared_cross_mark: Main Body

| Item                                                                                                                 | Quantity | Material                                             | Size | Weight | Cost | Printed | Notes |
| -------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------- | ---- | ------ | ---- | :-----: | ----- |
| [main_body](https://github.com/VoronDesign/Voron-Stealthburner/blob/main/STLs/Clockwork2/Direct_Drive/main_body.stl) | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |      |        |      |   :x:   |       |

### :negative_squared_cross_mark: Latch

| Item                                                                                                                 | Quantity | Material                                               | Size | Weight | Cost | Printed | Notes |
| -------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------ | ---- | ------ | ---- | :-----: | ----- |
| [latch](https://github.com/VoronDesign/Voron-Stealthburner/blob/main/STLs/Clockwork2/Direct_Drive/%5Ba%5D_latch.stl) | 1        | [eSun ABS+ (Purple)](printer-filament#esun-abs-purple) |      |        |      |   :x:   |       |

### :negative_squared_cross_mark: Chain Anchor

| Item                                                                                                                | Quantity | Material                                             | Size | Weight | Cost | Printed | Notes         |
| ------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------- | ---- | ------ | ---- | :-----: | ------------- |
| [chain_anchor](https://github.com/VoronDesign/Voron-Stealthburner/blob/main/STLs/Clockwork2/chain_anchor_3hole.stl) | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |      |        |      |   :x:   | 3Hole Version |

### :negative_squared_cross_mark: Cable Cover

| Item                                                                                                              | Quantity | Material                                               | Size | Weight | Cost | Printed | Notes   |
| ----------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------ | ---- | ------ | ---- | :-----: | ------- |
| [pcb_spacer](https://github.com/VoronDesign/Voron-Stealthburner/blob/main/STLs/Clockwork2/%5Ba%5D_pcb_spacer.stl) | 1        | [eSun ABS+ (Purple)](printer-filament#esun-abs-purple) |      |        |      |   :x:   |         |
| [cable_door](https://github.com/VoronDesign/Voron-Stealthburner/blob/main/STLs/Clockwork2/cable_door_for_pcb.stl) | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)   |      |        |      |   :x:   | For PCB |

## Tool Cartridge

![3D render of the Voron StealthBurner Tool Cartridge](/assets/blog/voron-stealthburner/voron-design/tool-cartridge.jpg)

> Image © 2023 [Voron Design](https://www.vorondesign.com/)

### :negative_squared_cross_mark: V6 Toolhead

| Item                                                                                                                                                                                        | Quantity | Material                                             | Printed | Notes               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------- | :-----: | ------------------- |
| [printhead_v6_r6_front](https://github.com/VoronDesign/Voron-Stealthburner/blob/main/STLs/Stealthburner/Printheads/revo_six_and_v6/stealthburner_printhead_v6_r6_front.stl)                 | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |   :x:   |                     |
| [printhead_v6_r6_rear_cw1](https://github.com/VoronDesign/Voron-Stealthburner/blob/cw1_compatible/STLs/Stealthburner/Printheads/revo_six_and_v6/stealthburner_printhead_v6_r6_rear_cw1.stl) | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |   :x:   | Clockwork 1 version |
| [printhead_v6_r6_rear_cw2](https://github.com/VoronDesign/Voron-Stealthburner/blob/main/STLs/Stealthburner/Printheads/revo_six_and_v6/stealthburner_printhead_v6_r6_rear_cw2.stl)           | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |   :x:   | Clockwork 2 version |

## StealthBurner

![3D render of the Voron StealthBurner](/assets/blog/voron-stealthburner/voron-design/stealthburner.jpg)

> Image © 2023 [Voron Design](https://www.vorondesign.com/)

### :negative_squared_cross_mark: StealthBurner

| Item                                                                                                                             | Quantity | Material                                               | Printed | Notes |
| -------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------ | :-----: | ----- |
| [main_body](https://github.com/VoronDesign/Voron-Stealthburner/blob/main/STLs/Stealthburner/%5Ba%5D_stealthburner_main_body.stl) | 1        | [eSun ABS+ (Purple)](printer-filament#esun-abs-purple) |   :x:   |       |

### :negative_squared_cross_mark: LEDs

| Item                                                                                                                                                                     | Quantity | Material                                                      | Printed | Notes                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ------------------------------------------------------------- | :-----: | --------------------------------------------------------------------- |
| [stealthburner_LED_diffuser-beta3](https://github.com/tanaes/whopping_Voron_mods/blob/main/LEDs/Rainbow_Barf_Logo_LED/STLs/%5Bc%5D_stealthburner_LED_diffuser-beta3.stl) | 1        | [BasicFil PETG (Clear)](printer-filament#basicfil-petg-clear) |   :x:   | Rainbow Barf LED Version, Not required as I have a Resin Printed one. |
| [led_carrier_rev2](https://github.com/tanaes/whopping_Voron_mods/blob/main/LEDs/Rainbow_Barf_Logo_LED/STLs/led_carrier_rev2.stl)                                         | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)          |   :x:   | Rainbow Barf LED Version                                              |

## ADXL345 Mount

![3D render of the Voron StealthBurner ADXL345 Mount](/assets/blog/voron-stealthburner/voron-design/axdl345-mount.jpg)

> Image © 2023 [Voron Design](https://www.vorondesign.com/)

### :negative_squared_cross_mark: ADXL345 Mount

| Item                                                                                                                                        | Quantity | Material                                             | Printed | Notes                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------- | :-----: | ------------------------------------------------------------------------------------ |
| [adxl_mount](https://github.com/VoronDesign/Voron-Stealthburner/blob/main/STLs/Stealthburner/ADXL345_Mounts/sb_adxl_mount_ldo_15mm_c_c.stl) | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |   :x:   | For [LDO Input Shaper Kit](https://www.onetwo3d.co.uk/product/ldo-input-shaper-kit/) |
| [adxl_washer](https://github.com/VoronDesign/Voron-Stealthburner/blob/main/STLs/Stealthburner/ADXL345_Mounts/sb_adxl_washer_x2.stl)         | 2        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |   :x:   |                                                                                      |

## X Carriage

![3D render of the Voron StealthBurner X Carriage](/assets/blog/voron-stealthburner/voron-design/x-carriage.jpg)

> Image © 2023 [Voron Design](https://www.vorondesign.com/)

The parts required to [mount the StealthBurner on Voron 2.4 can be found here](printer-voron-2.4#ab-belts).
