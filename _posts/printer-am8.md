---
title: AM8 Switchwire
heading: Upgrading the Anet A8 to an AM8 Switchwire
date: 2022-05-28
lastmod: 2025-07-04T15:47:04.144Z
author: Mike Thomas
description: The AM8 is a drop in replacement for the frame on the Anet A8. However I will be upgrading to a metal frame with CoreXZ kinematics using the AM8 Switchwire Mod.
preview: /assets/blog/printer-am8/printer-am8-hero.jpg
slug: /projects/printer-am8
related:
  - /projects/printer-hypercube
  - /projects/enraged-rabbit-carrot-feeder-1.1
  - /projects/voron-afterburner
draft: false
tags:
  - Anet A8
  - CoreXZ
categories:
  - 3D Printer
keywords:
  - AM8
---

# Table of contents

# Intro

The [AM8](https://www.thingiverse.com/thing:2263216) is a drop in replacement for the frame on the Anet A8.
I am currently planning to upgrade the flimsy acrylic to a sturdy metal frame with the aim to eventually upgrade to CoreXZ kinematics using the [AM8 Switchwire Mod](https://github.com/maximilian-foerg/AM8-Switchwire-Mod).

# Sourcing Parts

## Fasteners

| Item               | Quantity | Received | Notes                                                                                    |
| ------------------ | -------- | -------- | ---------------------------------------------------------------------------------------- |
| M2 nuts            | 6        | 50       |                                                                                          |
| M2x10 SHCS         | 4        | 100      |                                                                                          |
| M2x14 SHCS         | 2        | 50       |                                                                                          |
| M3x12 SHCS         | 2        | 2        |                                                                                          |
| M3x16 SHCS         | 1        | 1        |                                                                                          |
| M3x25 BHCS         | 4        | 25       |                                                                                          |
| M3x30 BHCS         | 23       | 25       |                                                                                          |
| M3 0.5mm Spacer    | 18       | 40       | The AM8 BOM mentions 8 are needed for the original build                                 |
| M3 nuts            | 3        | 3        |                                                                                          |
| M3 Threaded Insert | 15       | 28       |                                                                                          |
| M5x10 BHCS         | 31       | 90       | The AM8 BOM mentions 93 are needed for the original build                                |
| M5x10 SHCS         | 8        |          | The AM8 BOM mentions they are needed for the Z-axis motor mounts, will replace with BHCS |
| M5x16 SHCS         | 6        |          | Not Required. The AM8 BOM mentions they are needed for the rubber feet connections       |
| M5x30 BHCS         | 6        | 7        |                                                                                          |
| M5 T-Nut           | 25       | 47       | The AM8 BOM mentions 110 are needed for the original build                               |

## Motion

| Item                              | Quantity | Received | Notes |
| --------------------------------- | -------- | -------- | ----- |
| F623-RS Bearing                   | 18       | 20       |       |
| GT2 16T Pulley (5mm ID 6mm W)     | 3        | 3        |       |
| GT2 Open Belt LL-2GT-6 (6mm wide) | 5m       | 5m       |       |
| LM8LUU Linear Bearing             | 2        | 2        |       |

## Electronics

I have an extra SKR Pico that I received when I purchased a Formbot [Voron 0.2](printer-voron-0.2) kit.

It will be flashed with [Klipper Firmware](https://www.klipper3d.org/) as the Pico does not support Marlin.
The SKR Pico has 4 integrated stepper motors which will be enough to run the Switchwire Mod's the 2 XZ stepper motors, the Y Stepper and the Extruder.

| Item                                 | Quantity | Received | Notes                                                                         |
| ------------------------------------ | -------- | -------- | ----------------------------------------------------------------------------- |
| 40x40x20 Centrifugal Fan (12V)       | 1        | 1        | Only required when upgrading to the Afterburner                               |
| 40x40x10 Axial Fan (12V)             | 1        | 1        | Only required when upgrading to the Afterburner                               |
| E3D V6 Bowden Hotend Kit (12V)       | 1        |          | Will use the Anet A8 Extruder to start                                        |
| Mini 12864 Display                   | 1        | 1        | Will not work with the SKR Pico                                               |
| NEMA17 Motor 17HS15-1504S1           | 3        | 3        |                                                                               |
| NEMA17 Motor 17HS08-1004S            | 1        | 1        |                                                                               |
| Omron TL-Q5MC2 - NPN Inductive Probe | 1        | 1        | Only required when upgrading to the Afterburner                               |
| SKR Pico                             | 1        | 1        |                                                                               |
| SKR 1.4                              | 1        | 1        | From the Anet A8 after [upgrading the electronics](printer-hardware-upgrades) |
| Raspberry Pi 3                       | 1        | 1        |                                                                               |

## Frame

Since upgrading to PrusaSlicer, I have pushed my printing speeds to the limit of what stock Anet A8 acrylic frame can cope with.

I have [stiffened the frame as much as I can with 3D printed upgrades](printer-printed-upgrades#frame-bracing) however, the frame really could do with a metal frame to print faster.

I had originally intended to migrate from the Anet A8's acrylic frame to a CoreXY [Hypercube](printer-hypercube) style printer but instead decided to build a complete Voron 1.8. As [The Canuck Creator](https://www.youtube.com/channel/UCmV40QWkVeRs_nAvEOE_P-g) says 2 printers are 1 and 1 printer is none, therefore I would like to keep at least one working printer before heavilly modifing a working one.

During my research for the [Hypercube](printer-hypercube), I ruled out the AM8 due to the cost of the frame, however the frame I settled on was an [ALTRAX frame that I have imported from Poland](https://hobby-store.pl/en/frame-kits-for-3d-printers/altrax-anet-am8-3d-printer-frame.html) for £30.55 plus postage which I thought was resonable.

After purchasing the frame, I found a [project on Reddit](https://www.reddit.com/r/AnetA8/comments/rvt3zt) to convert the Anet A8 to a CoreXZ style printer similar to the [Voron Switchwire](https://vorondesign.com/voron_switchwire).

| Item                 | Quantity | Received | Notes                                                   |
| -------------------- | -------- | -------- | ------------------------------------------------------- |
| Misumi HFS5-2040-340 | 2        | 2        | Side extrusions for the Y axis                          |
| Misumi HFS5-2040-313 | 3        | 3        | Front, back, and cross member at the top of the Z axis. |
| Misumi HFS5-2040-440 | 2        | 2        | Vertical Z extrusions                                   |

## Buildplate

I have purchased a one piece Aluminium support plate to replace the stock Anet A8 steel 3 piece design, mainly for aesthetics.

The plate I have purchased was from AliExpress and the hole spacing in the center of the plate is designed to mount on a linear rail and therefore has a spacing of 20mm x 20mm for MGN-12H or 20mm x 15mm for MGN-12C.

I have therefore needed to design a belt clamp to affix the belt to the bed as the hole spacing is different to the stock design.
You can download the clamp from my [3D Printing GitHub repository](https://github.com/mikepthomas/3dprinting/tree/main/Designs/Aluminium%20Bed%20Support%20Plate%20Belt%20Clamp).

When trying to fit the support plate the original frame, I found out that the bearing holders actually sit about 2mm further apart than the stock 3 piece plate. Therefore it did not fit the acrylic frame and will need to upgrade to the aluminium frame before fitting it.

| Item                        | Quantity | Received | Notes |
| --------------------------- | -------- | -------- | ----- |
| Aluminium Bed Support Plate | 1        | 1        |       |

# Printing Parts

## Original AM8 Parts

The AM8 thingyverse page provides [a nice build guide with the order of assembly](https://cdn.thingiverse.com/assets/18/96/c9/fc/38/Build_Guide.pdf).

These parts are to convert to more standard Anet A8 kinematics and are mainly remixes for the original AM8. I will start by printing these parts to quicky upgrade from the acrylic frame and then will eventually upgrade the X and Z axis with the Switchwire mod.

### Bottom Frame

| Item                                                                   | Quantity | Material                                                                | Printed | Notes                                                                                              |
| ---------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------- | :-----: | -------------------------------------------------------------------------------------------------- |
| [Bottom_Corner_Plate](https://www.thingiverse.com/thing:2263216/files) | 4        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | Not Required as replaced with [metal versions](https://www.aliexpress.com/item/4000293781229.html) |
| [Bottom_Tee_Plate](https://www.thingiverse.com/thing:2263216/files)    | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | Not Required as replaced with [metal versions](https://www.aliexpress.com/item/4000293781229.html) |
| [Z_Corner_Bracket](https://www.thingiverse.com/thing:2577774/files)    | 2        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [mariob92](https://www.thingiverse.com/mariob92)                                |

### X Axis

| Item                                                          | Quantity | Material                                                                | Printed | Notes                                                                          |
| ------------------------------------------------------------- | -------- | ----------------------------------------------------------------------- | :-----: | ------------------------------------------------------------------------------ |
| [xchain_a](https://www.printables.com/model/165993/files)     | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [StarGate01](https://www.printables.com/@StarGate01_244735) |
| [xchain_b](https://www.printables.com/model/165993/files)     | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [StarGate01](https://www.printables.com/@StarGate01_244735) |
| [xchain_clamp](https://www.printables.com/model/165993/files) | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [StarGate01](https://www.printables.com/@StarGate01_244735) |

### Y Axis

| Item                                                                    | Quantity | Material                                                                | Printed | Notes                                                                           |
| ----------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------- | :-----: | ------------------------------------------------------------------------------- |
| [Y_Belt_Block](https://www.thingiverse.com/thing:2342054/files)         | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [Blocki_Austria](https://www.thingiverse.com/Blocki_Austria) |
| [Y_Belt_Tensioner](https://www.thingiverse.com/thing:2342054/files)     | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [Blocki_Austria](https://www.thingiverse.com/Blocki_Austria) |
| [Y_Motor_Mount](https://www.thingiverse.com/thing:2657605/files)        | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [GrkMangas](https://www.thingiverse.com/GrkMangas)           |
| [Z_Shaft_Clamp_EDH_V2](https://www.thingiverse.com/thing:1812784/files) | 4        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a Hypercube part by [3DHEIJ](https://www.thingiverse.com/3dheij)        |
| [ychain_a](https://www.printables.com/model/165993/files)               | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [StarGate01](https://www.printables.com/@StarGate01_244735)  |
| [ychain_b](https://www.printables.com/model/165993/files)               | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [StarGate01](https://www.printables.com/@StarGate01_244735)  |

### Z Axis

| Item                                                                               | Quantity | Material                                                                | Printed | Notes                                                                   |
| ---------------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------- | :-----: | ----------------------------------------------------------------------- |
| [Z_Motor_Mount_Left](https://www.thingiverse.com/thing:2984668/files)              | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [xXChrissXx](https://www.thingiverse.com/xXChrissXx) |
| [Z_Motor_Mount_Right](https://www.thingiverse.com/thing:2984668/files)             | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [xXChrissXx](https://www.thingiverse.com/xXChrissXx) |
| [Z_Rod_Holder_with_Bearing_Left](https://www.thingiverse.com/thing:2657605/files)  | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [GrkMangas](https://www.thingiverse.com/GrkMangas)   |
| [Z_Rod_Holder_with_Bearing_Right](https://www.thingiverse.com/thing:2657605/files) | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [GrkMangas](https://www.thingiverse.com/GrkMangas)   |

### Electronics Housing

These are for the original Anet A8 Mainboard.

| Item                                                                   | Quantity | Material                                                                | Printed | Notes                                                                         |
| ---------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------- | :-----: | ----------------------------------------------------------------------------- |
| [Main_Board](https://www.thingiverse.com/thing:2406117/files)          | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [zadthebad](https://www.thingiverse.com/zadthebad)         |
| [Main_Board_Cover](https://www.thingiverse.com/thing:2861394/files)    | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [AngelKing86](https://www.thingiverse.com/AngelKing86)     |
| [Main_Board_FanGrill](https://www.thingiverse.com/thing:2861394/files) | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [AngelKing86](https://www.thingiverse.com/AngelKing86)     |
| [Dual_Mosfet_Holder](https://www.thingiverse.com/thing:4635678/files)  | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [CAVE_news](https://www.thingiverse.com/CAVE_news)         |
| [Mosfet_Board_cover](https://www.thingiverse.com/thing:2406117/files)  | 2        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [zadthebad](https://www.thingiverse.com/zadthebad)         |
| [Raspberry_Pi_Holder](https://www.thingiverse.com/thing:2901269/files) | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [nowkillkennys](https://www.thingiverse.com/nowkillkennys) |

These are for upgraded PSU and SKR 1.4 Mainboard

| Item                                                                                     | Quantity | Material                                                                | Printed | Notes                                                                      |
| ---------------------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------- | :-----: | -------------------------------------------------------------------------- |
| [PSU_Mount](https://www.thingiverse.com/thing:2430529/files)                             | 2        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [dziliak](https://www.thingiverse.com/dziliak)          |
| [skr_1.4_mount](https://www.printables.com/model/349157-skr-14-turbo-2020-bracket/files) | 2        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [adp97](https://www.printables.com/social/52844-adp97n) |

### LCD Mount

These are for the original screen from an Anet A8.

| Item                                                               | Quantity | Material                                                                | Printed | Notes |
| ------------------------------------------------------------------ | -------- | ----------------------------------------------------------------------- | :-----: | ----- |
| [LCD_Base_Left](https://www.thingiverse.com/thing:2263216/files)   | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   |       |
| [LCD_Base_Right](https://www.thingiverse.com/thing:2263216/files)  | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   |       |
| [LCD_Case_Top_V2](https://www.thingiverse.com/thing:2263216/files) | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   |       |

These are for the upgraded screen from an Anet A6.

| Item                                                               | Quantity | Material                                                                | Printed | Notes                                                                                         |
| ------------------------------------------------------------------ | -------- | ----------------------------------------------------------------------- | :-----: | --------------------------------------------------------------------------------------------- |
| [LCD_Base_Left](https://www.thingiverse.com/thing:3116968/files)   | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [bcreigh](https://www.thingiverse.com/bcreigh)                             |
| [LCD_Base_Right](https://www.thingiverse.com/thing:3116968/files)  | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [bcreigh](https://www.thingiverse.com/bcreigh)                             |
| [LCD_Cover_Back](https://www.thingiverse.com/thing:4943812/files)  | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [eat_sleep_make_repeat](https://www.thingiverse.com/eat_sleep_make_repeat) |
| [LCD_Cover_Front](https://www.thingiverse.com/thing:4943812/files) | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [eat_sleep_make_repeat](https://www.thingiverse.com/eat_sleep_make_repeat) |
| [LCD_Cover_SD](https://www.thingiverse.com/thing:4943812/files)    | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [eat_sleep_make_repeat](https://www.thingiverse.com/eat_sleep_make_repeat) |
| [LCD_Cover_USB](https://www.thingiverse.com/thing:4943812/files)   | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [eat_sleep_make_repeat](https://www.thingiverse.com/eat_sleep_make_repeat) |

These are for a 12864 Full Graphic Smart Display.

| Item                                                                        | Quantity | Material                                                                | Printed | Notes                                                               |
| --------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------- | :-----: | ------------------------------------------------------------------- |
| [Side_Mount_Back_Plate_V6](https://www.thingiverse.com/thing:4230727/files) | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [Jsschlat](https://www.thingiverse.com/Jsschlat) |
| [Side_Mount_Body_V6](https://www.thingiverse.com/thing:4230727/files)       | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [Jsschlat](https://www.thingiverse.com/Jsschlat) |
| [Side_Mount_Button_V5](https://www.thingiverse.com/thing:4230727/files)     | 1        | [PrimaValue ABS (Red)](printer-filament#primavalue-abs-red)             |   :x:   | This is a remix by [Jsschlat](https://www.thingiverse.com/Jsschlat) |

### Extras

| Item                                                                            | Quantity | Material                                                                | Printed | Notes                                                                         |
| ------------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------- | :-----: | ----------------------------------------------------------------------------- |
| [end_cover](https://www.printables.com/model/437714/files)                      | 2        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [Tiago Jesus](https://www.printables.com/@trajesus)        |
| [front_right_corner_with_logo](https://www.thingiverse.com/thing:2449095/files) | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [jaseatwey](https://www.thingiverse.com/jaseatwey)         |
| [LED_Strip_Clip](https://www.thingiverse.com/thing:2797157/files)               | 2        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [AUREL_14](https://www.thingiverse.com/AUREL_14)           |
| [LED_Strip_Holder](https://www.thingiverse.com/thing:2797157/files)             | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [AUREL_14](https://www.thingiverse.com/AUREL_14)           |
| [Power_Supply_Cover](https://www.thingiverse.com/thing:2744900/files)           | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [thorinair](https://www.thingiverse.com/thorinair)         |
| [t_slot_cover](https://www.thingiverse.com/thing:2449095/files)                 | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [jaseatwey](https://www.thingiverse.com/jaseatwey)         |
| [TL_Smoother_mount](https://www.thingiverse.com/thing:3194074/files)            | 5        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [Doublehelix88](https://www.thingiverse.com/Doublehelix88) |
| [Tool_Caddy](https://www.thingiverse.com/thing:2441957/files)                   | 2        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [kayOs](https://www.thingiverse.com/kayOs)                 |
| [Tool_Holder](https://www.thingiverse.com/thing:2764362/files)                  | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [zimonkaizoku](https://www.thingiverse.com/zimonkaizoku)   |

## AM8 Switchwire

I have chosen Blue as the accent colour to match the printed parts that I inherited when I purchased an already built [Enraged Rabbit Carrot Feeder](/projects/enraged-rabbit-carrot-feeder-1.1) which will be rebuilt into a 6 channel so that it will fit on the top of this printer.

### Accessories

I will probably skip printing the TPU feet and use [right angle M6 threaded hole brackets](https://www.aliexpress.com/item/1005001608610023.html) to mount some rubber compressor feet that are used on the original Switchwire.

| Item                                                                                                                                                                | Quantity | Material                                             | Printed | Notes                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------- | :-----: | ------------------------------------------------------ |
| [2020 Cable Clip](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/Accessories/2020%20Cable%20Clip.stl)                                        | ?        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |   :x:   |                                                        |
| [Foot Left](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/Accessories/Foot%20Left%202x.stl)                                                 | 2        | [Ziro TPU (Black)](printer-filament#ziro-tpu-black)  |   :x:   | Not Required if using Switchwire compressor feet       |
| [Foot Right](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/Accessories/Foot%20Right%202x.stl)                                               | 2        | [Ziro TPU (Black)](printer-filament#ziro-tpu-black)  |   :x:   | Not Required if using Switchwire compressor feet       |
| [Lightweight LM8UU Bearing Block](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/Accessories/Lightweight%20LM8UU%20Bearing%20Block%207x.stl) | 7        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |   :x:   | Not Required when using stock aluminium bearing blocks |
| [Printhead Cable Duct](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/Accessories/Printhead%20Cable%20Duct.stl)                              | 1        | [eSun ABS+ (Blue)](printer-filament#esun-abs-blue)   |   :x:   |                                                        |
| [LCD Controller Mount](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/Accessories/%5BA%5D%20LCD%20Controller%20Mount.stl)                    | 1        | [eSun ABS+ (Blue)](printer-filament#esun-abs-blue)   |   :x:   |                                                        |

### Electronics

| Item                                                                                                                                                  | Quantity | Material                                             | Printed | Notes                                                                                                        |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------- | :-----: | ------------------------------------------------------------------------------------------------------------ |
| [MeanWell LRS-350-24 Mount](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/Electronics/MeanWell%20LRS-350-24%20Mount%202x.stl) | 2        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |   :x:   | Version for Meanwell LRS-320-24, will probably use [stock AM8 version](printer-am8#electronics-housing)      |
| [skr_pico_mount_v2](https://www.printables.com/model/244991-ender-3-skr-pico-mount-for-voron-switchwire-conver/files)                                 | 2        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |   :x:   | This is a remix by [thomasfjen](https://www.printables.com/social/222021-thomasfjen), 1 for Pico & 1 for RPi |

### XZ Axis

| Item                                                                                                                                                                           | Quantity | Material                                             | Printed | Notes |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ---------------------------------------------------- | :-----: | ----- |
| [XZ Idler Pulley Mount Left A](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/XZ%20Axis/XZ%20Idler%20Pulley%20Mount%20Left%20A.stl)                     | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |   :x:   |       |
| [XZ Idler Pulley Mount Right A](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/XZ%20Axis/XZ%20Idler%20Pulley%20Mount%20Right%20A.stl)                   | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |   :x:   |       |
| [XZ Joint Left A](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/XZ%20Axis/XZ%20Joint%20Left%20A.stl)                                                   | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |   :x:   |       |
| [XZ Joint Left B with Z Endstop Screw](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/XZ%20Axis/XZ%20Joint%20Left%20B%20with%20Z%20Endstop%20Screw.stl) | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |   :x:   |       |
| [XZ Joint Right A](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/XZ%20Axis/XZ%20Joint%20Right%20A.stl)                                                 | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |   :x:   |       |
| [XZ Joint Right B](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/XZ%20Axis/XZ%20Joint%20Right%20B.stl)                                                 | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |   :x:   |       |
| [XZ Motor Mount](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/XZ%20Axis/X_Z%20Motor%20Mount%202x.stl)                                                 | 2        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |   :x:   |       |
| [Z Rod Mount](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/XZ%20Axis/Z%20Rod%20Mount%204x.stl)                                                        | 4        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |   :x:   |       |
| [XZ Idler Pulley Mount Left B](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/XZ%20Axis/%5BA%5D%20XZ%20Idler%20Pulley%20Mount%20Left%20B.stl)           | 1        | [eSun ABS+ (Blue)](printer-filament#esun-abs-blue)   |   :x:   |       |
| [XZ Idler Pulley Mount Right B](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/XZ%20Axis/%5BA%5D%20XZ%20Idler%20Pulley%20Mount%20Right%20B.stl)         | 1        | [eSun ABS+ (Blue)](printer-filament#esun-abs-blue)   |   :x:   |       |
| [Z Endstop Mount](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/XZ%20Axis/%5BA%5D%20Z%20Endstop%20Mount.stl)                                           | 1        | [eSun ABS+ (Blue)](printer-filament#esun-abs-blue)   |   :x:   |       |

#### Printhead

##### Anet A8

| Item                                                                                                                                                              | Quantity | Material                                             | Printed | Notes        |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------- | :-----: | ------------ |
| [Belt Clamp Body](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/XZ%20Axis/Printheads/Anet%20A8/Belt%20Clamp%20Body.stl)                   | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |   :x:   |              |
| [Belt Clamp Lid](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/XZ%20Axis/Printheads/Anet%20A8/Belt%20Clamp%20Lid%202x.stl)                | 2        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |   :x:   |              |
| [X Rod Mount](<https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/XZ%20Axis/Printheads/Anet%20A8/%5BA%5D%20X%20Rod%20Mount%20(45mm)%202x.stl>) | 2        | [eSun ABS+ (Blue)](printer-filament#esun-abs-blue)   |   :x:   | 45mm version |

##### Voron Afterburner

| Item                                                                                                                                                                                        | Quantity | Material                                             | Printed | Notes        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------- | :-----: | ------------ |
| [Belt Clamp Body](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/XZ%20Axis/Printheads/VORON%20Afterburner/Belt%20Clamp%20Body.stl)                                   | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |   :x:   |              |
| [Belt Clamp Lid](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/XZ%20Axis/Printheads/VORON%20Afterburner/Belt%20Clamp%20Lid%202x.stl)                                | 2        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |   :x:   |              |
| [PL-08N Probe Bracket](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/XZ%20Axis/Printheads/VORON%20Afterburner/PL-08N%20Probe%20Bracket%201x.stl)                    | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |   :x:   |              |
| [VORON Afterburner Adapter Left](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/XZ%20Axis/Printheads/VORON%20Afterburner/VORON%20Afterburner%20Adapter%20Left.stl)   | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |   :x:   |              |
| [VORON Afterburner Adapter Right](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/XZ%20Axis/Printheads/VORON%20Afterburner/VORON%20Afterburner%20Adapter%20Right.stl) | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |   :x:   |              |
| [X Rod Mount](<https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/XZ%20Axis/Printheads/VORON%20Afterburner/%5BA%5D%20X%20Rod%20Mount%20(40mm)%202x.stl>)                 | 2        | [eSun ABS+ (Blue)](printer-filament#esun-abs-blue)   |   :x:   | 40mm version |

### Y Axis

| Item                                                                                                                                            | Quantity | Material                                             | Printed | Notes |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------- | :-----: | ----- |
| [Belt Clamp](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/Y%20Axis/Belt%20Clamp.stl)                                   | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |   :x:   |       |
| [Y Idler Pulley Mount A](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/Y%20Axis/Y%20Idler%20Pulley%20Mount%20A.stl)     | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |   :x:   |       |
| [Y Idler Pulley Mount B](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/Y%20Axis/Y%20Idler%20Pulley%20Mount%20B.stl)     | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |   :x:   |       |
| [Y Motor Mount](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/Y%20Axis/Y%20Motor%20Mount.stl)                           | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |   :x:   |       |
| [Y Rod Mount](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/Y%20Axis/Y%20Rod%20Mount%203x.stl)                          | 3        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |   :x:   |       |
| [Y Rod Mount with Endstop](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/Y%20Axis/Y%20Rod%20Mount%20with%20Endstop.stl) | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |   :x:   |       |
