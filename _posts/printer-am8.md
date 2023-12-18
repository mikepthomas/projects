---
title: Upgrading the Anet A8 to an AM8 Switchwire
date: 2022-05-28
lastmod: 2023-11-12
author: Mike Thomas
description: The AM8 is a drop in replacement for the frame on the Anet A8. However I will be upgrading to a metal frame with CoreXZ kinematics using the AM8 Switchwire Mod.
preview: /assets/blog/printer-am8/printer-am8-hero.jpg
slug: /projects/printer-am8
draft: false
tags:
  - Anet A8
categories:
  - 3D Printing
keywords:
  - AM8
---

# Table of contents

# Intro

The [AM8](https://www.thingiverse.com/thing:2263216) is a drop in replacement for the frame on the Anet A8. However I will be upgrading to a metal frame with CoreXZ kinematics using the [AM8 Switchwire Mod](https://github.com/maximilian-foerg/AM8-Switchwire-Mod).

# Frame

Since upgrading to SuperSlicer, I have pushed my printing speeds to the limit of what stock Anet A8 acrylic frame can cope with.

I have [stiffened the frame as much as I can with 3D printed upgrades](printer-printed-upgrades#frame-bracing) however, the frame really could do with a metal frame to print faster.

I had originally intended to migrate from the Anet A8's acrylic frame to a CoreXY [Hypercube](printer-hypercube) style printer but instead decided to build a complete Voron 1.8. As [Nero 3D](https://www.onlybenchies.com/) says 2 printers are 1 and 1 printer is none, therefore I would like to keep at least one working printer before heavilly modifing a working one.

During my research for the [Hypercube](printer-hypercube), I ruled out the AM8 due to the cost of the frame, however the frame I settled on was an [ALTRAX frame that I have imported from Poland](https://hobby-store.pl/en/frame-kits-for-3d-printers/altrax-anet-am8-3d-printer-frame.html) for £30.55 plus postage which I thought was resonable.

After purchasing the frame, I found a [project on Reddit](https://www.reddit.com/r/AnetA8/comments/rvt3zt) to convert the Anet A8 to a CoreXZ style printer similar to the [Voron Switchwire](https://vorondesign.com/voron_switchwire).

# Software

I have purchased an SKR 1.4 to run the printer as I will be using the Anet A8's SKR 1.4 Turbo for the [Voron 1.8](printer-voron-1.8).

It will be flashed with [Klipper Firmware](https://www.klipper3d.org/) as the [Marlin configuration](https://github.com/mikepthomas/Marlin/tree/2.1.x-Anet-SKR-1.4) that I currently use is not set up to use the CoreXZ kinematics the AM8 Switchwire uses. The SKR 1.4 has 5 stepper motors which will be enough to run the 2 XZ stepper motors, the Y Stepper and eventually [2 M4 extruders](printer-voron-1.8-mods#voron-m4) which will be left over when I have built the [ERCF](printer-enraged-rabbit-carrot-feeder).

# Sourcing Parts

## Fasteners

| Item               | Quantity | Received | Notes |
| ------------------ | -------- | -------- | ----- |
| M2 nuts            | 6        | 50       |       |
| M2x10 SHCS         | 4        | 100      |       |
| M2x14 SHCS         | 2        | 50       |       |
| M3x12 SHCS         | 2        | 2        |       |
| M3x16 SHCS         | 1        | 1        |       |
| M3x25 BHCS         | 4        | 25       |       |
| M3x30 BHCS         | 23       | 25       |       |
| M3 0.5mm Spacer    | 18       | 40       |       |
| M3 nuts            | 3        | 3        |       |
| M3 Threaded Insert | 15       | 28       |       |
| M5x10 BHCS         | 31       | 50       |       |
| M5x30 BHCS         | 6        | 7        |       |
| M5 T-Nut           | 25       | 47       |       |

## Motion

| Item                              | Quantity | Received | Notes |
| --------------------------------- | -------- | -------- | ----- |
| F623-RS Bearing                   | 18       | 20       |       |
| GT2 16T Pulley (5mm ID 6mm W)     | 3        | 3        |       |
| GT2 Open Belt LL-2GT-6 (6mm wide) | 5m       | 5m       |       |
| LM8LUU Linear Bearing             | 2        | 2        |       |

## Electronics

| Item                                 | Quantity | Received | Notes                                  |
| ------------------------------------ | -------- | -------- | -------------------------------------- |
| 40x40x20 Centrifugal Fan (12V)       | 1        | 1        |                                        |
| 40x40x10 Axial Fan (12V)             | 1        | 1        |                                        |
| E3D V6 Bowden Hotend Kit (12V)       | 1        |          | Will use the Anet A8 Extruder to start |
| Mini 12864 Display                   | 1        | 1        |                                        |
| NEMA17 Motor 17HS15-1504S1           | 3        | 3        |                                        |
| NEMA17 Motor 17HS08-1004S            | 1        | 1        |                                        |
| Omron TL-Q5MC2 - NPN Inductive Probe | 1        | 1        |                                        |
| SKR 1.4                              | 1        | 1        |                                        |
| Raspberry Pi 3                       | 1        | 1        |                                        |

# Printing Parts

## AM8 Switchwire

### Accessories

I will probably skip these and use right angle M6 threaded hole brackets to mount some rubber compressor feet that are used in the original Switchwire.

| Item                                                                                                                  | Quantity | Material                                            | Printed | Notes |
| --------------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------- | :-----: | ----- |
| [Foot Left](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/Accessories/Foot%20Left%202x.stl)   | 2        | [Ziro TPU (Black)](printer-filament#ziro-tpu-black) |   :x:   |       |
| [Foot Right](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/Accessories/Foot%20Right%202x.stl) | 2        | [Ziro TPU (Black)](printer-filament#ziro-tpu-black) |   :x:   |       |

### Bottom Frame

| Item                                                                              | Quantity | Material                                                                | Printed | Notes                                                               |
| --------------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------- | :-----: | ------------------------------------------------------------------- |
| [Bottom_Corner_Plate](https://www.thingiverse.com/thing:2263216/files)            | 4        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   |                                                                     |
| [Bottom_Tee_Plate](https://www.thingiverse.com/thing:2263216/files)               | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   |                                                                     |
| [Bottom_Tee_Plate_Chain_Adapter](https://www.thingiverse.com/thing:2472832/files) | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [Celphor](https://www.thingiverse.com/Celphor)   |
| [Z_Corner_Bracket](https://www.thingiverse.com/thing:2577774/files)               | 2        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [mariob92](https://www.thingiverse.com/mariob92) |

### Electronics

| Item                                                                                                                  | Quantity | Material                                                                | Printed | Notes                                                                                |
| --------------------------------------------------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------- | :-----: | ------------------------------------------------------------------------------------ |
| [PSU_Mount](https://www.thingiverse.com/thing:2430529/files)                                                          | 2        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [dziliak](https://www.thingiverse.com/dziliak)                    |
| [skr_1.4_mount](https://www.printables.com/model/349157-skr-14-turbo-2020-bracket/files)                              | 2        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [adp97](https://www.printables.com/social/52844-adp97n)           |
| [skr_pico_mount_v2](https://www.printables.com/model/244991-ender-3-skr-pico-mount-for-voron-switchwire-conver/files) | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [thomasfjen](https://www.printables.com/social/222021-thomasfjen) |

### XZ Axis

| Item                                                                                                                                                                           | Quantity | Material                                                                | Printed | Notes |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ----------------------------------------------------------------------- | :-----: | ----- |
| [XZ Idler Pulley Mount Left A](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/XZ%20Axis/XZ%20Idler%20Pulley%20Mount%20Left%20A.stl)                     | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   |       |
| [XZ Idler Pulley Mount Right A](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/XZ%20Axis/XZ%20Idler%20Pulley%20Mount%20Right%20A.stl)                   | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   |       |
| [XZ Joint Left A](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/XZ%20Axis/XZ%20Joint%20Left%20A.stl)                                                   | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   |       |
| [XZ Joint Left B with Z Endstop Screw](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/XZ%20Axis/XZ%20Joint%20Left%20B%20with%20Z%20Endstop%20Screw.stl) | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   |       |
| [XZ Joint Right A](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/XZ%20Axis/XZ%20Joint%20Right%20A.stl)                                                 | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   |       |
| [XZ Joint Right B](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/XZ%20Axis/XZ%20Joint%20Right%20B.stl)                                                 | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   |       |
| [XZ Motor Mount](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/XZ%20Axis/X_Z%20Motor%20Mount%202x.stl)                                                 | 2        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   |       |
| [Z Rod Mount](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/XZ%20Axis/Z%20Rod%20Mount%204x.stl)                                                        | 4        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   |       |
| [XZ Idler Pulley Mount Left B](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/XZ%20Axis/%5BA%5D%20XZ%20Idler%20Pulley%20Mount%20Left%20B.stl)           | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   |       |
| [XZ Idler Pulley Mount Right B](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/XZ%20Axis/%5BA%5D%20XZ%20Idler%20Pulley%20Mount%20Right%20B.stl)         | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   |       |
| [Z Endstop Mount](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/XZ%20Axis/%5BA%5D%20Z%20Endstop%20Mount.stl)                                           | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   |       |

#### Printhead

| Item                                                                                                                                                              | Quantity | Material                                                                | Printed | Notes        |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------- | :-----: | ------------ |
| [Belt Clamp Body](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/XZ%20Axis/Printheads/Anet%20A8/Belt%20Clamp%20Body.stl)                   | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   |              |
| [Belt Clamp Lid](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/XZ%20Axis/Printheads/Anet%20A8/Belt%20Clamp%20Lid%202x.stl)                | 2        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   |              |
| [X Rod Mount](<https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/XZ%20Axis/Printheads/Anet%20A8/%5BA%5D%20X%20Rod%20Mount%20(45mm)%202x.stl>) | 2        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | 45mm version |

### Y Axis

| Item                                                                                                                                            | Quantity | Material                                                                | Printed | Notes |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------- | :-----: | ----- |
| [Belt Clamp](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/Y%20Axis/Belt%20Clamp.stl)                                   | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   |       |
| [Y Idler Pulley Mount A](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/Y%20Axis/Y%20Idler%20Pulley%20Mount%20A.stl)     | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   |       |
| [Y Idler Pulley Mount B](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/Y%20Axis/Y%20Idler%20Pulley%20Mount%20B.stl)     | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   |       |
| [Y Motor Mount](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/Y%20Axis/Y%20Motor%20Mount.stl)                           | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   |       |
| [Y Rod Mount](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/Y%20Axis/Y%20Rod%20Mount%203x.stl)                          | 3        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   |       |
| [Y Rod Mount with Endstop](https://github.com/maximilian-foerg/AM8-Switchwire-Mod/blob/main/STLs/Y%20Axis/Y%20Rod%20Mount%20with%20Endstop.stl) | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   |       |

### Extras

| Item                                                                            | Quantity | Material                                                                | Printed | Notes                                                                         |
| ------------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------- | :-----: | ----------------------------------------------------------------------------- |
| [2040_End_Cap](https://www.thingiverse.com/thing:2396127/files)                 | 2        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [Reediculous](https://www.thingiverse.com/Reediculous)     |
| [front_right_corner_with_logo](https://www.thingiverse.com/thing:2449095/files) | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [jaseatwey](https://www.thingiverse.com/jaseatwey)         |
| [LED_Strip_Clip](https://www.thingiverse.com/thing:2797157/files)               | 2        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [AUREL_14](https://www.thingiverse.com/AUREL_14)           |
| [LED_Strip_Holder](https://www.thingiverse.com/thing:2797157/files)             | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [AUREL_14](https://www.thingiverse.com/AUREL_14)           |
| [Power_Supply_Cover](https://www.thingiverse.com/thing:2744900/files)           | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [thorinair](https://www.thingiverse.com/thorinair)         |
| [t_slot_cover](https://www.thingiverse.com/thing:2449095/files)                 | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [jaseatwey](https://www.thingiverse.com/jaseatwey)         |
| [TL_Smoother_mount](https://www.thingiverse.com/thing:3194074/files)            | 5        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [Doublehelix88](https://www.thingiverse.com/Doublehelix88) |
| [Tool_Caddy](https://www.thingiverse.com/thing:2441957/files)                   | 2        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [kayOs](https://www.thingiverse.com/kayOs)                 |
| [Tool_Holder](https://www.thingiverse.com/thing:2764362/files)                  | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [zimonkaizoku](https://www.thingiverse.com/zimonkaizoku)   |

**_NOTE:_** Colours are provisional, I will probably add in Black as an accent colour for some parts.

## Original AM8 Parts

The AM8 thingyverse page provides [a nice build guide with the order of assembly](https://cdn.thingiverse.com/assets/18/96/c9/fc/38/Build_Guide.pdf).

These parts are to convert to more standard Anet A8 kinematics and are mainly remixes for the original AM8. I will not be printing these parts unless I have issues with the Switchwire mod.

### Y Axis

| Item                                                                              | Quantity | Material                                                                | Printed | Notes                                                                           |
| --------------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------- | :-----: | ------------------------------------------------------------------------------- |
| [Rear_Corner_Plate_Left](https://www.thingiverse.com/thing:2855523/files)         | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [penkerton](https://www.thingiverse.com/penkerton)           |
| [Rear_Corner_Plate_Right](https://www.thingiverse.com/thing:2855523/files)        | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [penkerton](https://www.thingiverse.com/penkerton)           |
| [Y_Belt_Block](https://www.thingiverse.com/thing:2342054/files)                   | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [Blocki_Austria](https://www.thingiverse.com/Blocki_Austria) |
| [Y_Belt_Tensioner](https://www.thingiverse.com/thing:2342054/files)               | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [Blocki_Austria](https://www.thingiverse.com/Blocki_Austria) |
| [Y_Motor_Mount](https://www.thingiverse.com/thing:2657605/files)                  | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [GrkMangas](https://www.thingiverse.com/GrkMangas)           |
| [Y_axis_Rod_Holder](https://www.thingiverse.com/thing:4028536/files)              | 3        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [morganlowe](https://www.thingiverse.com/morganlowe)         |
| [Y_axis_Rod_Holder_with_endstop](https://www.thingiverse.com/thing:4028536/files) | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [morganlowe](https://www.thingiverse.com/morganlowe)         |

### Z Axis

| Item                                                                               | Quantity | Material                                                                | Printed | Notes                                                                   |
| ---------------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------- | :-----: | ----------------------------------------------------------------------- |
| [Top_Corner_Plate_Left](https://www.thingiverse.com/thing:2855523/files)           | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [penkerton](https://www.thingiverse.com/penkerton)   |
| [Top_Corner_Plate_Right](https://www.thingiverse.com/thing:2855523/files)          | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [penkerton](https://www.thingiverse.com/penkerton)   |
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

### LCD Mount

These are for the upgraded screen from an Anet A6.

| Item                                                               | Quantity | Material                                                                | Printed | Notes                                                                                         |
| ------------------------------------------------------------------ | -------- | ----------------------------------------------------------------------- | :-----: | --------------------------------------------------------------------------------------------- |
| [LCD_Base_Left](https://www.thingiverse.com/thing:3116968/files)   | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [bcreigh](https://www.thingiverse.com/bcreigh)                             |
| [LCD_Base_Right](https://www.thingiverse.com/thing:3116968/files)  | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [bcreigh](https://www.thingiverse.com/bcreigh)                             |
| [LCD_Cover_Back](https://www.thingiverse.com/thing:4943812/files)  | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [eat_sleep_make_repeat](https://www.thingiverse.com/eat_sleep_make_repeat) |
| [LCD_Cover_Front](https://www.thingiverse.com/thing:4943812/files) | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [eat_sleep_make_repeat](https://www.thingiverse.com/eat_sleep_make_repeat) |
| [LCD_Cover_SD](https://www.thingiverse.com/thing:4943812/files)    | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [eat_sleep_make_repeat](https://www.thingiverse.com/eat_sleep_make_repeat) |
| [LCD_Cover_USB](https://www.thingiverse.com/thing:4943812/files)   | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | This is a remix by [eat_sleep_make_repeat](https://www.thingiverse.com/eat_sleep_make_repeat) |
