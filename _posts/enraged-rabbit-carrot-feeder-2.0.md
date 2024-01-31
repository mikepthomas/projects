---
title: Enraged Rabbit Carrot Feeder 2.0
heading: Building a 8 channel Enraged Rabbit Carrot Feeder V2.0
date: 2023-12-25T18:54:23.605Z
lastmod: 2024-01-31T22:04:29.786Z
author: Mike Thomas
description: Building an Enraged Rabbit Carrot Feeder to print using multiple colours of filament on the Voron.
preview: /assets/blog/enraged-rabbit-carrot-feeder-2.0/enraged-rabbit-carrot-feeder-2.0-hero.jpg
slug: /projects/enraged-rabbit-carrot-feeder-2.0
related:
  - /projects/enraged-rabbit-carrot-feeder-1.1
draft: false
tags:
  - Multi Material
  - Voron
categories:
  - 3D Printing
keywords:
  - Enraged Rabbit Carrot Feeder
---

# Table of contents

# Intro

Building a the second version of the [Enraged Rabbit Carrot Feeder](https://github.com/Enraged-Rabbit-Community/ERCF_v2) to print using multiple colours of filament on the Voron.

# Enraged Rabbit Carrot Feeder

For V2.0 the recommended firmware is [Happy Hare](https://github.com/moggieuk/Happy-Hare/blob/main/doc/ercf_v2.md) and there is also a fork of KlipperScreen, [KlipperScreen Happy Hare Edition](https://github.com/moggieuk/KlipperScreen-Happy-Hare-Edition).

## Sourcing Parts

### Electronics

| Item                                 | Quantity | Received | Notes             |
| ------------------------------------ | -------- | -------- | ----------------- |
| BigTreeTech MMB CAN V1.0             | 1        | 1        |                   |
| NEMA14 Motor 14HS11-1004S            | 1        | 1        | LDO-35STH28-1004A |
| NEMA17 Motor 17HS08-1004S            | 1        | 1        | LDO-42STH20-1004A |
| Savox SH-0255MG servo                | 1        | 1        |                   |
| TMC2209 Stepper drivers              | 2        | 4        |                   |
| Binky Encoder                        | 1        | 1        |                   |
| Omron D2F-5L or D2F-01L Micro Switch | 1        | 1        |                   |
| WS2812 LED Strip for ERCF LED Apron  | 8        | 8        | Optional          |

### Hardware

| Item                      | Quantity | Received | Notes                  |
| ------------------------- | -------- | -------- | ---------------------- |
| 9 sets of bondtechs gears | 9        | 9        |                        |
| 2020 T-Slot extrusion     | 1        | 1        | 239mm for 8 channel    |
| 8mm smooth rods           | 2        | 2        | 237mm for 8 channel    |
| D-cut 5mm shaft           | 1        | 1        | 256mm for 8 channel    |
| Drylin RJ4JP-01-08        | 2        | 2        |                        |
| V623ZZ or 623ZZ bearing   | 1        | 1        | I already have MR623ZZ |
| MR85ZZ bearings           | 6        | 6        |                        |

### Fasteners

| Item                   | Quantity | Received | Notes |
| ---------------------- | -------- | -------- | ----- |
| M2x8 Self-Tapping      | 3        | 51       |       |
| M2x10 SHCS             | 5        | 2        |       |
| M3 threaded inserts    | 29       | 32       |       |
| M3x3 set screws        | 8        | 51       |       |
| M3x6 SHCS              | 1        |          |       |
| M3x8 BHCS              | 5        | 5        |       |
| M3x8 FHCS              | 4        |          |       |
| M3x8 SHCS              | 34       | 22       |       |
| M3x12 SHCS             | 6        | 3        |       |
| M3x16 SHCS             | 10       | 13       |       |
| M3x20 SHCS             | 8        | 7        |       |
| M3x25 SHCS             | 1        |          |       |
| M3x40 SHCS             | 2        | 2        |       |
| M3 T-Spring nuts       | 17       |          |       |
| M3 DIN125 Steel Washer | 2        | 13       |       |
| M5x30 BHCS             | 2        | 2        |       |
| M5x16 BHCS             | 1        | 1        |       |
| M5 nylock nuts         | 3        | 6        |       |

### Motion

| Item                                 | Quantity | Received | Notes               |
| ------------------------------------ | -------- | -------- | ------------------- |
| GT2 20T Pulley 6 mm, 5mm bore        | 3        | 3        |                     |
| GT2 20T Toothed Idler 6 mm, 5mm bore | 1        | 1        |                     |
| GT2 belt 6mm (open)                  | 1        | 1        | 524mm for 8 channel |
| GT2 188m Belt loop 6mm               | 1        | 1        |                     |

### Misc

| Item                                             | Quantity | Received | Notes               |
| ------------------------------------------------ | -------- | -------- | ------------------- |
| 2.7mm zip ties                                   | 10       |          |                     |
| 3mm x 2mm Round Neodymium Magnets                | 2        | 50       |                     |
| 6x15mm compression spring with 1mm wire diameter | 1        | 2        |                     |
| 6mm x 3mm Round Neodymium Magnets                | 16       | 23       |                     |
| 7X7 Drag chain                                   | 1        | 1        | 264mm for 8 channel |
| Bowden Clip                                      | 10       | 10       | Red                 |
| Bowden Fitting                                   | 10       | 10       |                     |

### Toolhead Sensor

| Item                                 | Quantity | Received | Notes |
| ------------------------------------ | -------- | -------- | ----- |
| AH3364Q-P-B Hall Effect sensor (SIP) | 1        | 2        |       |
| M3 DIN125 Steel Washer               | 1        | 2        |       |
| 6mm x 3mm Round Neodymium Magnets    | 1        | 2        |       |
| M3x8 SHCS                            | 1        | 2        |       |
| M3x12 SHCS                           | 1        | 2        |       |
| JST XH 3 pins male connector         | 1        | 2        |       |

## Printing Parts

### Apron LEDs

| Item                                                                                                                          | Quantity | Material                                                      | Printed | Notes    |
| ----------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------- | :-----: | -------- |
| [Cover_Body](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Apron_Leds/Cover_Body_xN.stl)               | 8        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)          |   :x:   | Optional |
| [Holder_Strip_Leds](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Apron_Leds/Holder_Strip_Leds_xN.stl) | 8        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)          |   :x:   | Optional |
| [Cover_Lens](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Apron_Leds/%5Bc%5D_Cover_Lens_xN.stl)       | 8        | [BasicFil PETG (Clear)](printer-filament#basicfil-petg-clear) |   :x:   | Optional |

### Filament Blocks

| Item                                                                                                                                       | Quantity | Material                                                                 | Printed | Notes |
| ------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ------------------------------------------------------------------------ | :-----: | ----- |
| [Base](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Filament_Blocks/Base_xN.stl)                                   | 8        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)                     |   :x:   |       |
| [End Bypass](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Filament_Blocks/End_Bypass.stl)                          | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)                     |   :x:   |       |
| [Filament Path](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Filament_Blocks/Filament_Path_xN.stl)                 | 8        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)                     |   :x:   |       |
| [Base_Trap_M3](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Filament_Blocks/%5Ba%5D_Base_Trap_M3_xN.stl)           | 8        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) |   :x:   |       |
| [Base_Trap_V-Shape](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Filament_Blocks/%5Ba%5D_Base_Trap_V-Shape_xN.stl) | 8        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) |   :x:   |       |
| [End_Bypass_Foot](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Filament_Blocks/%5Ba%5D_End_Bypass_Foot.stl)        | 1        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) |   :x:   |       |
| [Latch](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Filament_Blocks/%5Ba%5D_Latch_xN.stl)                         | 8        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) |   :x:   |       |
| [Tophat](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Filament_Blocks/%5Ba%5D_Tophat_xN.stl)                       | 8        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) |   :x:   |       |

### Tag Plates

| Item                                                                                                                                          | Quantity | Material                                                                 | Printed | Notes |
| --------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------ | :-----: | ----- |
| [Tag_plates_Digit0](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Filament_Blocks/Tag_Plates/Tag_plates_Digit0_x2.stl) | 2        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)                     |   :x:   |       |
| [Tag_plates_Digit1](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Filament_Blocks/Tag_Plates/Tag_plates_Digit1_x2.stl) | 2        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)                     |   :x:   |       |
| [Tag_plates_Digit2](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Filament_Blocks/Tag_Plates/Tag_plates_Digit2_x2.stl) | 2        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)                     |   :x:   |       |
| [Tag_plates_Digit3](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Filament_Blocks/Tag_Plates/Tag_plates_Digit3_x2.stl) | 2        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)                     |   :x:   |       |
| [Tag_plates_Digit4](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Filament_Blocks/Tag_Plates/Tag_plates_Digit4_x2.stl) | 2        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)                     |   :x:   |       |
| [Tag_plates_Digit5](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Filament_Blocks/Tag_Plates/Tag_plates_Digit5_x2.stl) | 2        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)                     |   :x:   |       |
| [Tag_plates_Digit6](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Filament_Blocks/Tag_Plates/Tag_plates_Digit6_x2.stl) | 2        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)                     |   :x:   |       |
| [Tag_plates_Digit7](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Filament_Blocks/Tag_Plates/Tag_plates_Digit7_x2.stl) | 2        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)                     |   :x:   |       |
| [Tag_plates_0](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Filament_Blocks/Tag_Plates/%5Ba%5D_Tag_plates_0_x2.stl)   | 2        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) |   :x:   |       |
| [Tag_plates_1](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Filament_Blocks/Tag_Plates/%5Ba%5D_Tag_plates_1_x2.stl)   | 2        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) |   :x:   |       |
| [Tag_plates_2](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Filament_Blocks/Tag_Plates/%5Ba%5D_Tag_plates_2_x2.stl)   | 2        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) |   :x:   |       |
| [Tag_plates_3](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Filament_Blocks/Tag_Plates/%5Ba%5D_Tag_plates_3_x2.stl)   | 2        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) |   :x:   |       |
| [Tag_plates_4](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Filament_Blocks/Tag_Plates/%5Ba%5D_Tag_plates_4_x2.stl)   | 2        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) |   :x:   |       |
| [Tag_plates_5](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Filament_Blocks/Tag_Plates/%5Ba%5D_Tag_plates_5_x2.stl)   | 2        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) |   :x:   |       |
| [Tag_plates_6](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Filament_Blocks/Tag_Plates/%5Ba%5D_Tag_plates_6_x2.stl)   | 2        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) |   :x:   |       |
| [Tag_plates_7](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Filament_Blocks/Tag_Plates/%5Ba%5D_Tag_plates_7_x2.stl)   | 2        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) |   :x:   |       |

### Gear Box

| Item                                                                                                                                     | Quantity | Material                                                                 | Printed | Notes          |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------ | :-----: | -------------- |
| [Gear_Box_Back](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Gear_Box/Gear_Box_Back.stl)                         | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)                     |   :x:   |                |
| [Gear_Box_Front](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Gear_Box/Gear_Box_Front.stl)                       | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)                     |   :x:   |                |
| [Motor_Arm](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Gear_Box/Motor_Arm_NEMA14.stl)                          | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)                     |   :x:   | Nema14 Version |
| [Bearing_Spacer](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Gear_Box/%5Ba%5D_Bearing_Spacer_x2.stl)            | 2        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) |   :x:   |                |
| [Gear_Box_Bottom_Panel](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Gear_Box/%5Ba%5D_Gear_Box_Bottom_Panel.stl) | 1        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) |   :x:   |                |
| [Gear_Box_Top_Panel](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Gear_Box/%5Ba%5D_Gear_Box_Top_Panel.stl)       | 1        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) |   :x:   |                |
| [Knob](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Gear_Box/%5Ba%5D_Knob.stl)                                   | 1        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) |   :x:   |                |
| [Logo_Plate](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Gear_Box/%5Ba%5D_Logo_Plate.stl)                       | 1        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) |   :x:   |                |
| [M4_80T_Wheel](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Gear_Box/%5Ba%5D_M4_80T_Wheel.stl)                   | 1        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) |   :x:   |                |
| [Side_Latch](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Gear_Box/%5Ba%5D_Side_Latch_x2.stl)                    | 2        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) |   :x:   |                |

### Linear Axis

| Item                                                                                                                                                          | Quantity | Material                                                                 | Printed | Notes |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------ | :-----: | ----- |
| [Linear_Axis_Idler_Block](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Linear_Axis/Linear_Axis_Idler_Block.stl)                       | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)                     |   :x:   |       |
| [Linear_Axis_Selector_Motor_Support](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Linear_Axis/Linear_Axis_Selector_Motor_Support.stl) | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)                     |   :x:   |       |
| [Drag_Chain_Anchor_Bottom](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Linear_Axis/%5Ba%5D_Drag_Chain_Anchor_Bottom.stl)             | 1        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) |   :x:   |       |
| [Motor_Lock](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Linear_Axis/%5Ba%5D_Motor_Lock.stl)                                         | 1        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) |   :x:   |       |

### Selector

| Item                                                                                                                                         | Quantity | Material                                                                 | Printed | Notes           |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------ | :-----: | --------------- |
| [Belt_Tensioner](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Selector/Belt_Tensioner.stl)                           | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)                     |   :x:   |                 |
| [Drag_Chain_Anchor](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Selector/Drag_Chain_Anchor.stl)                     | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)                     |   :x:   |                 |
| [Encoder_Left](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Selector/Encoder_Flat_Bearing_Option/Encoder_Left.stl)   | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)                     |   :x:   | MB623ZZ version |
| [Encoder_Right](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Selector/Encoder_Flat_Bearing_Option/Encoder_Right.stl) | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)                     |   :x:   | MB623ZZ version |
| [Selector_Door](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Selector/Selector_Door.stl)                             | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)                     |   :x:   |                 |
| [Selector_Spring_Cap](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Selector/Selector_Spring_Cap.stl)                 | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)                     |   :x:   |                 |
| [Servo_Mount](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Selector/Servo_Mount_Savox.stl)                           | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)                     |   :x:   | Savox version   |
| [Selector_Cart](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Selector/%5Ba%5D_Selector_Cart.stl)                     | 1        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) |   :x:   |                 |
| [Servo_Arm](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Selector/%5Ba%5D_Servo_Arm_Savox.stl)                       | 1        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) |   :x:   | Savox version   |
| [Encoder_Slotted_Wheel](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Selector/%5Bo%5D_Encoder_Slotted_Wheel.stl)     | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)                     |   :x:   |                 |

### Supports

| Item                                                                                                                                | Quantity | Material                                                                 | Printed | Notes       |
| ----------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------ | :-----: | ----------- |
| [Support_Feet](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Supports/V1_V2/%5Ba%5D_Support_Feet_4mm_x4.stl) | 4        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) |   :x:   | 4mm version |

### Tools

| Item                                                                                                                              | Quantity | Material                                             | Printed | Notes          |
| --------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------- | :-----: | -------------- |
| [80T_Cog_Guide](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Tools/80T_Cog_Guide.stl)                     | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |   :x:   |                |
| [Bearing_Install_Tool](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Tools/Bearing_Install_Tool.stl)       | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |   :x:   |                |
| [Calib_Test](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Tools/Calib_Test.stl)                           | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |   :x:   |                |
| [PTFE_Tool](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Tools/PTFE_Tool.stl)                             | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |   :x:   |                |
| [Pulley_Tool](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Tools/Pulley_Tool_NEMA14.stl)                  | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |   :x:   | Nema14 version |
| [Pulley_Tool](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Tools/Pulley_Tool_NEMA17.stl)                  | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |   :x:   | Nema17 version |
| [Slotted_Wheel_Push_Tool](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Stls/Tools/Slotted_Wheel_Push_Tool.stl) | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |   :x:   |                |

### Filament Sensor

![ERCF Clockwork Extruder with Toolhead PCB](/assets/blog/enraged-rabbit-carrot-feeder-2.0/clockwork-assembled.jpg)

I have printed the [Filament Sensor](https://github.com/EtteGit/EnragedRabbitProject/tree/main/Filament_Sensor) for the [Afterburner toolhead documented here](printer-voron-1.8#afterburner).

# Enraged Rabbit Cotton Tail

## Sourcing Parts

### Electronics

| Item                                 | Quantity | Received | Notes    |
| ------------------------------------ | -------- | -------- | -------- |
| Omron D2F-5L or D2F-01L Micro Switch | 8        | 8        |          |
| Neopixel                             | 8        |          | Optional |
| Wire for LEDs & micro switches       | 8        |          |          |

### Hardware

| Item          | Quantity | Received | Notes |
| ------------- | -------- | -------- | ----- |
| 608ZZ Bearing | 8        | 8        |       |

### Fasteners

| Item                | Quantity | Received | Notes |
| ------------------- | -------- | -------- | ----- |
| M2x8mm Self-Tapping | 16       | 51       |       |
| M3 threaded inserts | 11       | 32       |       |
| M3x3mm set screws   | 4        | 51       |       |
| M3x8 SHCS           | 37       | 16       |       |
| M3x16 SHCS          | 8        | 8        |       |
| M3x25mm SHCS        | 8        |          |       |
| M3 T-Spring nuts    | 8        |          |       |

### Misc

| Item                             | Quantity | Received | Notes |
| -------------------------------- | -------- | -------- | ----- |
| 2.7mm zip ties                   | 4        |          |       |
| 5.5 mm ball bearing              | 8        | 53       |       |
| Bowden Clip                      | 16       | 16       |       |
| Bowden Fitting                   | 16       | 16       |       |
| PTFE Tube (4mm OD 3mm ID) - 30cm | 400mm    | 6m       |       |

## Printing Parts

### Axle

| Item                                                                                                                                                       | Quantity | Material                                             | Printed | Notes            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------- | :-----: | ---------------- |
| [Axle_8_Double_Thread](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Recommended_Options/ERCT_Buffer/Stls/Axle/Axle_8_Double_Thread.stl) | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |   :x:   |                  |
| [Axle_Spacer](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Recommended_Options/ERCT_Buffer/Stls/Axle/Axle_Spacer_Standard_xN.stl)       | 8        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |   :x:   | Standard version |
| [Knut](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Recommended_Options/ERCT_Buffer/Stls/Axle/Knut_x2.stl)                              | 2        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |   :x:   |                  |

### Buffer Wheel

| Item                                                                                                                                                  | Quantity | Material                                             | Printed | Notes |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------- | :-----: | ----- |
| [Buffer Wheel](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Recommended_Options/ERCT_Buffer/Stls/Buffer_Wheel/Buffer_Wheel_xN.stl) | 8        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |   :x:   |       |

### Coupler Block

| Item                                                                                                                                                                     | Quantity | Material                                                                 | Printed | Notes |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ------------------------------------------------------------------------ | :-----: | ----- |
| [Coupler_Block_180](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Recommended_Options/ERCT_Buffer/Stls/Coupler_Block/%5Ba%5D_Coupler_Block_180_xN.stl) | 8        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) |   :x:   |       |
| [LED_Carrier](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Recommended_Options/ERCT_Buffer/Stls/Coupler_Block/%5Ba%5D_LED_Carrier_xN.stl)             | 8        | [BasicFil PETG (Clear)](printer-filament#basicfil-petg-clear)            |   :x:   |       |
| [Coupler_Block](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Recommended_Options/ERCT_Buffer/Stls/Coupler_Block/%5Bc%5D_Coupler_Block_xN.stl)         | 8        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) |   :x:   |       |

### Support Arm

| Item                                                                                                                                                                                  | Quantity | Material                                                                 | Printed | Notes |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------ | :-----: | ----- |
| [BTT_MMB_Box_Lid](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Recommended_Options/ERCT_Buffer/Stls/Support_Arm/%5Ba%5D_BTT_MMB_Box_Lid.stl)                       | 1        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) |   :x:   |       |
| [BTT_MMB_Support_Arm_Endcap](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Recommended_Options/ERCT_Buffer/Stls/Support_Arm/%5Ba%5D_BTT_MMB_Support_Arm_Endcap.stl) | 1        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) |   :x:   |       |
| [Support_Arm_Mount](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Recommended_Options/ERCT_Buffer/Stls/Support_Arm/%5Ba%5D_Support_Arm_Mount_xN.stl)                | 8        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) |   :x:   |       |
| [Support_Arm](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Recommended_Options/ERCT_Buffer/Stls/Support_Arm/%5Ba%5D_Support_Arm_xN.stl)                            | 8        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) |   :x:   |       |

### Tools

| Item                                                                                                                                                            | Quantity | Material                                             | Printed | Notes |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------- | :-----: | ----- |
| [LED_Soldering_Jig_24mm](https://github.com/Enraged-Rabbit-Community/ERCF_v2/blob/master/Recommended_Options/ERCT_Buffer/Stls/Tools/LED_Soldering_Jig_24mm.stl) | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |   :x:   |       |
