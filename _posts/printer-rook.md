---
title: 3D Printing a cheap CoreXY 3D Printer
date: 2023-02-02
lastmod: 2023-10-22
author: Mike Thomas
description: Sourcing and printing parts to assemble a Rook 2020 MK1 3D Printer.
preview: /assets/blog/printer-rook/rook-2020-frame.jpg
slug: /projects/printer-rook
draft: false
tags:
  - Rook
categories:
  - 3D Printing
keywords:
  - Printer
---

# Table of contents

# Sourcing Parts

Sourcing and printing parts to assemble a [Rook 2020 MK1 3D Printer](https://www.printables.com/model/447255).

## Printer Frame

| Item                                  | Quantity | Received | Notes |
| ------------------------------------- | -------- | -------- | ----- |
| 200mm T-slot 2020 Aluminium Extrusion | 12       | 12       |       |
| 2020 Aluminium Extrusion 3-way corner | 8        | 8        |       |

## Fasteners

| Item               | Quantity | Received | Notes                          |
| ------------------ | -------- | -------- | ------------------------------ |
| M3x6               | 10       |          |                                |
| M3x10              | 22       |          |                                |
| M3x12              | 2        |          |                                |
| M3x16              | 6        |          |                                |
| M3x18              | 2        |          |                                |
| M3x25              | 8        |          |                                |
| M3 Threaded Insert | 100      |          | BOM specifies more than needed |
| M5x8               | 35       |          |                                |
| M5x16              | 12       |          |                                |
| M5x25              | 4        |          |                                |
| M5x30              | 2        |          |                                |
| M5 T-nuts          | 35       |          |                                |
| M5 Washers         | 16       |          |                                |

## Motion

| Item                                 | Quantity | Received | Notes                                                                        |
| ------------------------------------ | -------- | -------- | ---------------------------------------------------------------------------- |
| Filament Extruder                    | 1        | 1        | Using original Anet A8 Extruder with M6 Bowden Coupler                       |
| F695 Bearing                         | 12       | 16       |                                                                              |
| GT2 20T Pulley (5mm ID 6mm W)        | 3        | 3        |                                                                              |
| GT2 20T Toothed Idler (5mm ID 6mm W) | 3        | 3        | Using 3 of these instead of 6 F695 Bearings for gantry idlers and belted bed |
| GT2 Open Belt LL-2GT-6 (6mm wide)    | 4m       | 4m       |                                                                              |
| Linear Rail MGN9C 200mm              | 2        | 2        |                                                                              |
| Linear Rail MGN9C 150mm              | 1        | 1        |                                                                              |
| Linear Shaft 8x200mm                 | 4        | 4        |                                                                              |
| LM8UU Linear Bearing                 | 2        | 2        |                                                                              |

## Print Bed

| Item                   | Quantity | Received | Notes |
| ---------------------- | -------- | -------- | ----- |
| 6" Glass Picture Frame | 1        | 1        |       |
| Yellow Die Spring - M3 | 3        | 3        |       |

## Electronics

| Item                         | Quantity | Received | Notes                                                                    |
| ---------------------------- | -------- | -------- | ------------------------------------------------------------------------ |
| Nema 17 Stepper Motors       | 4        | 4        | Using original Anet A8 X/Y/Z1/Z2 Stepper Motors                          |
| CR10 Style Hotend            | 1        | 1        |                                                                          |
| Power Supply                 | 1        | 1        | Using original Anet A8 Power Supply                                      |
| Raspberry Pi Zero            | 1        | 1        | Using Zero 2W                                                            |
| SKR Pico                     | 1        | 1        |                                                                          |
| SPDT KW10 Limit Micro Switch | 1        | 1        |                                                                          |
| V0 Simple Display            | 1        | 1        |                                                                          |
| 30x30x10 Axial Fan           | 1        | 1        |                                                                          |
| 40x40x10 Centrifugal Fan     | 2        | 2        | Using instead of 120x120x32 Centrifugal Fan for the the Rookery Toolhead |

# Printing Parts

## Bed

| Item                                                                | Quantity | Material                                                       | Printed | Notes                                                                   |
| ------------------------------------------------------------------- | -------- | -------------------------------------------------------------- | :-----: | ----------------------------------------------------------------------- |
| [Bed-Front](https://www.printables.com/model/447255/files)          | 1        | [eSun ABS+ (Peak Green)](printer-filament#esun-abs-peak-green) |   :x:   |                                                                         |
| [Bed-Left](https://www.printables.com/model/447255/files)           | 1        | [eSun ABS+ (Peak Green)](printer-filament#esun-abs-peak-green) |   :x:   |                                                                         |
| [Bed-Right](https://www.printables.com/model/447255/files)          | 1        | [eSun ABS+ (Peak Green)](printer-filament#esun-abs-peak-green) |   :x:   |                                                                         |
| [Chain Clamp Top](https://www.printables.com/model/520929/files)    | 1        | [eSun ABS+ (Peak Green)](printer-filament#esun-abs-peak-green) |   :x:   | This is a mod by [JagdNutCrkr](https://www.printables.com/@JagdNutCrkr) |
| [Chain Clamp Bottom](https://www.printables.com/model/520929/files) | 1        | [eSun ABS+ (Peak Green)](printer-filament#esun-abs-peak-green) |   :x:   | This is a mod by [JagdNutCrkr](https://www.printables.com/@JagdNutCrkr) |
| [Chain Frame Mount](https://www.printables.com/model/520929/files)  | 1        | [eSun ABS+ (Peak Green)](printer-filament#esun-abs-peak-green) |   :x:   | This is a mod by [JagdNutCrkr](https://www.printables.com/@JagdNutCrkr) |
| [Rook Bed Frame 150](https://www.printables.com/model/381943/files) | 1        | [eSun ABS+ (Peak Green)](printer-filament#esun-abs-peak-green) |   :x:   | This is a mod by [Kanrog](https://www.printables.com/@Kanrog)           |

## Frame

| Item                                                                                         | Quantity | Material                                                       | Printed | Notes |
| -------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------- | :-----: | ----- |
| [Foot](https://www.printables.com/model/447255/files)                                        | 4        | [eSun ABS+ (Peak Green)](printer-filament#esun-abs-peak-green) |   :x:   |       |
| [OPTIONAL_Foot_Spacer](https://www.printables.com/model/447255/files)                        | 4        | [eSun ABS+ (Peak Green)](printer-filament#esun-abs-peak-green) |   :x:   |       |
| [Optional_Idler_Mount_Lower_Front_2020_Left](https://www.printables.com/model/447255/files)  | 1        | [eSun ABS+ (Peak Green)](printer-filament#esun-abs-peak-green) |   :x:   |       |
| [Optional_Idler_Mount_Lower_Front_2020_Right](https://www.printables.com/model/447255/files) | 1        | [eSun ABS+ (Peak Green)](printer-filament#esun-abs-peak-green) |   :x:   |       |
| [Left_Motor_Mount](https://www.printables.com/model/447255/files)                            | 1        | [eSun ABS+ (Peak Green)](printer-filament#esun-abs-peak-green) |   :x:   |       |
| [Right_Motor_Mount](https://www.printables.com/model/447255/files)                           | 1        | [eSun ABS+ (Peak Green)](printer-filament#esun-abs-peak-green) |   :x:   |       |
| [Motor_Tensioner.](https://www.printables.com/model/447255/files)                            | 1        | [eSun ABS+ (Peak Green)](printer-filament#esun-abs-peak-green) |   :x:   |       |

## Z Axis

| Item                                                                                      | Quantity | Material                                                       | Printed | Notes |
| ----------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------- | :-----: | ----- |
| [Optional_Skirt_Z-motor_No_Gear_Reduction](https://www.printables.com/model/447255/files) | 1        | [eSun ABS+ (Peak Green)](printer-filament#esun-abs-peak-green) |   :x:   |       |
| [Z_Endstop_Mount](https://www.printables.com/model/447255/files)                          | 1        | [eSun ABS+ (Peak Green)](printer-filament#esun-abs-peak-green) |   :x:   |       |
| [Z_Idler_Mount](https://www.printables.com/model/447255/files)                            | 1        | [eSun ABS+ (Peak Green)](printer-filament#esun-abs-peak-green) |   :x:   |       |
| [Z_Rod_Mount](https://www.printables.com/model/447255/files)                              | 4        | [eSun ABS+ (Peak Green)](printer-filament#esun-abs-peak-green) |   :x:   |       |

## Gantry

| Item                                                              | Quantity | Material                                                       | Printed | Notes                                                                             |
| ----------------------------------------------------------------- | -------- | -------------------------------------------------------------- | :-----: | --------------------------------------------------------------------------------- |
| [Left_Y_carriage](https://www.printables.com/model/447255/files)  | 1        | [eSun ABS+ (Peak Green)](printer-filament#esun-abs-peak-green) |   :x:   |                                                                                   |
| [Right_Y_carriage](https://www.printables.com/model/447255/files) | 1        | [eSun ABS+ (Peak Green)](printer-filament#esun-abs-peak-green) |   :x:   |                                                                                   |
| [belt_tie_v2](https://www.printables.com/model/389235/files)      | 2        | [eSun ABS+ (Peak Green)](printer-filament#esun-abs-peak-green) |   :x:   | This is a mod by [kyledavis_351660](https://www.printables.com/@kyledavis_351660) |

## Toolhead

| Item                                                                              | Quantity | Material                                                       | Printed | Notes |
| --------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------- | :-----: | ----- |
| [Fan_Shroud_4010_Modded_Fan_Inlet](https://www.printables.com/model/447255/files) | 1        | [eSun ABS+ (Peak Green)](printer-filament#esun-abs-peak-green) |   :x:   |       |
| [Rookery \_ Belt Cradle](https://www.printables.com/model/447255/files)           | 1        | [eSun ABS+ (Peak Green)](printer-filament#esun-abs-peak-green) |   :x:   |       |
| [Rookery_CR10_Key](https://www.printables.com/model/447255/files)                 | 1        | [eSun ABS+ (Peak Green)](printer-filament#esun-abs-peak-green) |   :x:   |       |

## Side-mounted spool and Extruder

| Item                                                            | Quantity | Material                                                       | Printed | Notes                                                         |
| --------------------------------------------------------------- | -------- | -------------------------------------------------------------- | :-----: | ------------------------------------------------------------- |
| [Extruder-Mount](https://www.printables.com/model/510328/files) | 1        | [eSun ABS+ (Peak Green)](printer-filament#esun-abs-peak-green) |   :x:   | This is a mod by [Kanrog](https://www.printables.com/@Kanrog) |
| [Spool-holder](https://www.printables.com/model/488474/files)   | 1        | [eSun ABS+ (Peak Green)](printer-filament#esun-abs-peak-green) |   :x:   | This is a mod by [Kanrog](https://www.printables.com/@Kanrog) |

## Skirts

| Item                                                                   | Quantity | Material                                                       | Printed | Notes |
| ---------------------------------------------------------------------- | -------- | -------------------------------------------------------------- | :-----: | ----- |
| [Skirt](https://www.printables.com/model/447255/files)                 | 3        | [eSun ABS+ (Peak Green)](printer-filament#esun-abs-peak-green) |   :x:   |       |
| [Optional_Skirt_Backer](https://www.printables.com/model/447255/files) | 3        | [eSun ABS+ (Peak Green)](printer-filament#esun-abs-peak-green) |   :x:   |       |

## Panels

| Item                                                                 | Quantity | Material                                                       | Printed | Notes                                                             |
| -------------------------------------------------------------------- | -------- | -------------------------------------------------------------- | :-----: | ----------------------------------------------------------------- |
| [Bottom_Panel_Rear_Right](https://www.printables.com/model/447255)   | 1        | [eSun ABS+ (Peak Green)](printer-filament#esun-abs-peak-green) |   :x:   |                                                                   |
| [Bottom_Panel_Rear_Left](https://www.printables.com/model/447255)    | 1        | [eSun ABS+ (Peak Green)](printer-filament#esun-abs-peak-green) |   :x:   |                                                                   |
| [Bottom_Panel_Front_Right](https://www.printables.com/model/447255)  | 1        | [eSun ABS+ (Peak Green)](printer-filament#esun-abs-peak-green) |   :x:   |                                                                   |
| [Bottom_Panel_Front_Left](https://www.printables.com/model/447255)   | 1        | [eSun ABS+ (Peak Green)](printer-filament#esun-abs-peak-green) |   :x:   |                                                                   |
| [Rook2020-BackPanel](https://www.printables.com/model/501946)        | 1        | [eSun ABS+ (Peak Green)](printer-filament#esun-abs-peak-green) |   :x:   | This is a mod by [ImSteffe](https://www.printables.com/@ImSteffe) |
| [LRS-150-Case-Lid](https://www.printables.com/model/397744)          | 1        | [eSun ABS+ (Peak Green)](printer-filament#esun-abs-peak-green) |   :x:   | This is a mod by [ImSteffe](https://www.printables.com/@ImSteffe) |
| [LRS-150-Case-Heat-Inserts](https://www.printables.com/model/397744) | 1        | [eSun ABS+ (Peak Green)](printer-filament#esun-abs-peak-green) |   :x:   | This is a mod by [ImSteffe](https://www.printables.com/@ImSteffe) |