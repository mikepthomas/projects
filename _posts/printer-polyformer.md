---
title: Polyformer
heading: Making 3D Printer Filament from Empty Plastic Bottles
date: 2023-02-03
lastmod: 2023-02-19
author: Mike Thomas
description: Sourcing and printing parts to assemble a Polyformer to make my own filament from empty plastic drinks bottles.
preview: /assets/blog/printer-polyformer/polyformer-hero.jpg
slug: /projects/printer-polyformer
related:
  - /projects/printer-filament
draft: false
tags:
  - Polyformer
categories:
  - 3D Printer
keywords:
  - Filament
---

> Image &copy; 2022 [Reiten Design](https://www.reiten.design/polyformer)

# Table of contents

# Sourcing Parts

Sourcing and printing parts to assemble a [Polyformer](https://www.reiten.design/polyformer).

## Fasteners

| Item               | Quantity | Received | Notes |
| ------------------ | -------- | -------- | ----- |
| M3x6 BHCS          | 39       |          |       |
| M3x8 BHCS          | 14       |          |       |
| M3x12 BHCS         | 63       |          |       |
| M3x20 BHCS         | 9        |          |       |
| M3x30 BHCS         | 4        |          |       |
| M3 Nuts            | 13       |          |       |
| M3 Threaded Insert | 111      |          |       |
| M3 Washers         | 11       |          |       |
| M5x16              | 12       |          |       |
| M5x25              | 4        |          |       |
| M5x30              | 2        |          |       |
| M5 Washers         | 14       |          |       |

## Motion

| Item                  | Quantity | Received | Notes |
| --------------------- | -------- | -------- | ----- |
| 623 Bearing           | 6        | 6        |       |
| 608 Bearing           | 3        | 3        |       |
| Linear Shaft 12x300mm | 6        |          |       |

## Electronics

| Item                          | Quantity | Received | Notes                                                                 |
| ----------------------------- | -------- | -------- | --------------------------------------------------------------------- |
| BigTreeTech EBB42             | 1        | 1        |                                                                       |
| Inlet Power Socket IEC320 C14 | 1        | 1        |                                                                       |
| Nema 17 Stepper Motor         | 1        | 1        | Using original Anet A8 Extruder Motor                                 |
| Power Supply                  | 1        | 1        | Using original Anet A8 Power Supply                                   |
| Raspberry Pi                  | 1        | 1        |                                                                       |
| Volcano Hotend                | 1        | 1        | 3.00mm x 1.20mm Nozzle, 12V 40W Heater Cartridge, M3 Screw Thermistor |
| 40x40x10 Axial Fan            | 1        | 1        | 12V Noctua                                                            |
| 60x60x25 Axial Fan            | 1        | 1        | 12V Noctua                                                            |

## Misc

| Item                   | Quantity | Received | Notes |
| ---------------------- | -------- | -------- | ----- |
| 6x3mm Neodimium Magnet | 24       |          |       |

# PolyPlank Mod

I plan to start by using the [PolyPlank Mod](https://github.com/Reiten966/Polyformer/tree/main/User_Mods/Sean9%238523/PolyPlank) which means printing the bare minimum parts to get the machine working out of ABS.

| Item                                                                                                                          | Quantity | Material                                                      | Printed | Notes |
| ----------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------- | :-----: | ----- |
| [Polyplank_Q4_2022](https://github.com/Reiten966/Polyformer/blob/main/User_Mods/Sean9%238523/PolyPlank/Polyplank_Q4_2022.3mf) | 1        | [BasicFil PETG (Clear)](printer-filament#basicfil-petg-clear) |   :x:   |       |

## Bottle Cutter

| Item                                                                                                                 | Quantity | Material                                                       | Printed | Notes |
| -------------------------------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------- | :-----: | ----- |
| [Body](https://github.com/Reiten966/Polyformer/blob/main/STL/Bottle_Cutter/Body.stl)                                 | 1        | [eSun ABS+ (Cold White)](printer-filament#esun-abs-cold-white) |   :x:   |       |
| [Bottle_Cap](https://github.com/Reiten966/Polyformer/blob/main/STL/Bottle_Cutter/Bottle_Cap.STL)                     | 1        | [eSun ABS+ (Cold White)](printer-filament#esun-abs-cold-white) |   :x:   |       |
| [Bottle_Cap_Tensioner](https://github.com/Reiten966/Polyformer/blob/main/STL/Bottle_Cutter/Bottle_Cap_Tensioner.STL) | 1        | [eSun ABS+ (Cold White)](printer-filament#esun-abs-cold-white) |   :x:   |       |
| [Bottle_Holder](https://github.com/Reiten966/Polyformer/blob/main/STL/Bottle_Cutter/Bottle_Holder.stl)               | 1        | [eSun ABS+ (Cold White)](printer-filament#esun-abs-cold-white) |   :x:   |       |
| [Cutter](https://github.com/Reiten966/Polyformer/blob/main/STL/Bottle_Cutter/Cutter.stl)                             | 1        | [eSun ABS+ (Cold White)](printer-filament#esun-abs-cold-white) |   :x:   |       |
| [Sliding_Gauge](https://github.com/Reiten966/Polyformer/blob/main/STL/Bottle_Cutter/Sliding_Gauge.stl)               | 1        | [eSun ABS+ (Cold White)](printer-filament#esun-abs-cold-white) |   :x:   |       |

## Gearbox

| Item                                                                                                           | Quantity | Material                                                      | Printed | Notes |
| -------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------- | :-----: | ----- |
| [Gear_Box_CAM](https://github.com/Reiten966/Polyformer/blob/main/STL/Gearbox/Gear_Box_CAM.stl)                 | 1        | [BasicFil PETG (Clear)](printer-filament#basicfil-petg-clear) |   :x:   |       |
| [Gear_Box_Cap](https://github.com/Reiten966/Polyformer/blob/main/STL/Gearbox/Gear_Box_Cap.stl)                 | 1        | [BasicFil PETG (Clear)](printer-filament#basicfil-petg-clear) |   :x:   |       |
| [Gear_Box_Fan](https://github.com/Reiten966/Polyformer/blob/main/STL/Gearbox/Gear_Box_Fan.stl)                 | 1        | [BasicFil PETG (Clear)](printer-filament#basicfil-petg-clear) |   :x:   |       |
| [Gear_Box_Motor_Mount](https://github.com/Reiten966/Polyformer/blob/main/STL/Gearbox/Gear_Box_Motor_Mount.stl) | 1        | [BasicFil PETG (Clear)](printer-filament#basicfil-petg-clear) |   :x:   |       |
| [Gear_Box_Output_Gear](https://github.com/Reiten966/Polyformer/blob/main/STL/Gearbox/Gear_Box_Output_Gear.stl) | 1        | [BasicFil PETG (Clear)](printer-filament#basicfil-petg-clear) |   :x:   |       |
| [Gear_Box_Ring_Gear](https://github.com/Reiten966/Polyformer/blob/main/STL/Gearbox/Gear_Box_Ring_Gear.stl)     | 1        | [BasicFil PETG (Clear)](printer-filament#basicfil-petg-clear) |   :x:   |       |

## Spool

| Item                                                                                                                                          | Quantity | Material                                                       | Printed | Notes |
| --------------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------- | :-----: | ----- |
| [Filament_Mount_Meltzone_Side](https://github.com/Reiten966/Polyformer/blob/main/STL/Spool/Filament_Mount_Meltzone_Side.stl)                  | 1        | [eSun ABS+ (Cold White)](printer-filament#esun-abs-cold-white) |   :x:   |       |
| [Filament_Mount_Spool_Side](https://github.com/Reiten966/Polyformer/blob/main/STL/Spool/%5BAccent%20Color%5D%20Filament_Mount_Spool_Side.stl) | 1        | [eSun ABS+ (Red)](printer-filament#esun-abs-red)               |   :x:   |       |
| [Spool_Body](https://github.com/Reiten966/Polyformer/blob/main/STL/Spool/%5BAccent%20Color%5D%20Spool_Body.stl)                               | 1        | [eSun ABS+ (Red)](printer-filament#esun-abs-red)               |   :x:   |       |
| [Spool_Shield_Left](https://github.com/Reiten966/Polyformer/blob/main/STL/Spool/%5BAccent%20Color%5D%20Spool_Shield_Left.stl)                 | 1        | [eSun ABS+ (Red)](printer-filament#esun-abs-red)               |   :x:   |       |

# Printing Parts

Once I have hopefully made some PET Filament I plan to eventually print the rest of the Polyformer using the recycled PET Bottle Filament.

## Ribbon Cartridge

| Item                                                                                                                                                    | Quantity | Material                                   | Printed | Notes |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------ | :-----: | ----- |
| [Ribbon_Cartridge_Body](https://github.com/Reiten966/Polyformer/blob/main/STL/Carriages/Ribbon_Cartridge_Body_2x.stl)                                   | 2        | Recycled PET Bottle Filament               |   :x:   |       |
| [Ribbon_Cartridge_Cap](https://github.com/Reiten966/Polyformer/blob/main/STL/Carriages/Ribbon_Cartridge_Cap_2x.stl)                                     | 2        | Recycled PET Bottle Filament               |   :x:   |       |
| [Ribbon_Cartridge_Turning_Key](https://github.com/Reiten966/Polyformer/blob/main/STL/Carriages/%5BAccent%20Color%5D%20Ribbon_Cartridge_Turning_Key.stl) | 1        | Recycled PET Bottle Filament Accent Colour |   :x:   |       |

## Carriages

| Item                                                                                                                                             | Quantity | Material                                                       | Printed | Notes |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | -------------------------------------------------------------- | :-----: | ----- |
| [Electronics_Bracket](https://github.com/Reiten966/Polyformer/blob/main/STL/Carriages/Electronics_Bracket_4x.stl)                                | 4        | Recycled PET Bottle Filament                                   |   :x:   |       |
| [Filament_Guidler](<https://github.com/Reiten966/Polyformer/blob/main/STL/Carriages/Filament_Guidler_(built_in_supports).stl>)                   | 1        | Recycled PET Bottle Filament                                   |   :x:   |       |
| [Filament_Guidler_Mirrored](<https://github.com/Reiten966/Polyformer/blob/main/STL/Carriages/Filament_Guidler_Mirrored_(built_in_supports).stl>) | 1        | Recycled PET Bottle Filament                                   |   :x:   |       |
| [Filament_Guidler_Spindle](https://github.com/Reiten966/Polyformer/blob/main/STL/Carriages/Filament_Guidler_Spindle.stl)                         | 1        | Recycled PET Bottle Filament                                   |   :x:   |       |
| [Inlet](https://github.com/Reiten966/Polyformer/blob/main/STL/Carriages/Inlet.stl)                                                               | 1        | Recycled PET Bottle Filament                                   |   :x:   |       |
| [Meltzone](https://github.com/Reiten966/Polyformer/blob/main/STL/Carriages/Meltzone.stl)                                                         | 1        | [eSun ABS+ (Cold White)](printer-filament#esun-abs-cold-white) |   :x:   |       |
| [Meltzone_Wings](https://github.com/Reiten966/Polyformer/blob/main/STL/Carriages/Meltzone_Wings_2x.stl)                                          | 2        | [eSun ABS+ (Cold White)](printer-filament#esun-abs-cold-white) |   :x:   |       |
| [Ribbon_Cartridge_Holder](<https://github.com/Reiten966/Polyformer/blob/main/STL/Carriages/Ribbon_Cartridge_Holder_(built_in_supports).stl>)     | 1        | Recycled PET Bottle Filament                                   |   :x:   |       |

## Main Body

| Item                                                                                                                                                | Quantity | Material                                   | Printed | Notes                                    |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------ | :-----: | ---------------------------------------- |
| [Feet](https://github.com/Reiten966/Polyformer/blob/main/STL/Main_Body/Feet_x2.stl)                                                                 | 2        | Recycled PET Bottle Filament               |   :x:   |                                          |
| [Left_Lower_Arm](<https://github.com/Reiten966/Polyformer/blob/main/STL/Main_Body/Left_Lower_Arm_(Built-in%20Supports).stl>)                        | 1        | Recycled PET Bottle Filament               |   :x:   |                                          |
| [Left_Upper_Arm](<https://github.com/Reiten966/Polyformer/blob/main/STL/Main_Body/Left_Upper_Arm_(Built-in%20Supports).stl>)                        | 1        | Recycled PET Bottle Filament               |   :x:   |                                          |
| [Panel_Stabilizer](https://github.com/Reiten966/Polyformer/blob/main/STL/Main_Body/Panel_Stabilizer_x2.stl)                                         | 2        | Recycled PET Bottle Filament               |   :x:   |                                          |
| [Right_Arm_Connector](https://github.com/Reiten966/Polyformer/blob/main/STL/Main_Body/Right_Arm_Connector.stl)                                      | 1        | Recycled PET Bottle Filament               |   :x:   |                                          |
| [Right_Lower_Arm](<https://github.com/Reiten966/Polyformer/blob/main/STL/Main_Body/Right_Lower_Arm_(Built-in%20Supports).stl>)                      | 1        | Recycled PET Bottle Filament               |   :x:   |                                          |
| [Right_Upper_Arm](https://github.com/Reiten966/Polyformer/blob/main/STL/Main_Body/Right_Upper_Arm.stl)                                              | 1        | Recycled PET Bottle Filament               |   :x:   | Replaces [PolyPlank Mod](#polyplank-mod) |
| [Spool_Shaft](https://github.com/Reiten966/Polyformer/blob/main/STL/Main_Body/%5BAccent%20Color%5D%20Spool_Shaft.STL)                               | 1        | Recycled PET Bottle Filament Accent Colour |   :x:   |                                          |
| [Spool_Shaft_Knob](https://github.com/Reiten966/Polyformer/blob/main/STL/Main_Body/%5BAccent%20Color%5D%20Spool_Shaft_Knob.stl)                     | 1        | Recycled PET Bottle Filament Accent Colour |   :x:   |                                          |
| [Spool_Shaft_Knob_Tensioner](https://github.com/Reiten966/Polyformer/blob/main/STL/Main_Body/%5BAccent%20Color%5D%20Spool_Shaft_Knob_Tensioner.stl) | 1        | Recycled PET Bottle Filament Accent Colour |   :x:   |                                          |
| [Trim_Plate](https://github.com/Reiten966/Polyformer/blob/main/STL/Main_Body/%5BAccent%20Color%5D%20Trim_Plate_x2.stl)                              | 2        | Recycled PET Bottle Filament Accent Colour |   :x:   |                                          |

## Panels

| Item                                                                                                                                           | Quantity | Material                                   | Printed | Notes |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------ | :-----: | ----- |
| [Left_Lower_Panel_First_Half](<https://github.com/Reiten966/Polyformer/blob/main/STL/Panels%20(Optional)/Left_Lower_Panel_First_Half.stl>)     | 1        | Recycled PET Bottle Filament               |   :x:   |       |
| [Left_Lower_Panel_Second_Half](<https://github.com/Reiten966/Polyformer/blob/main/STL/Panels%20(Optional)/Left_Lower_Panel_Second_Half.stl>)   | 1        | Recycled PET Bottle Filament               |   :x:   |       |
| [Left_Upper_Panel_First_Half](<https://github.com/Reiten966/Polyformer/blob/main/STL/Panels%20(Optional)/Left_Upper_Panel_First_Half.STL>)     | 1        | Recycled PET Bottle Filament               |   :x:   |       |
| [Left_Upper_Panel_Second_Half](<https://github.com/Reiten966/Polyformer/blob/main/STL/Panels%20(Optional)/Left_Upper_Panel_Second_Half.STL>)   | 1        | Recycled PET Bottle Filament               |   :x:   |       |
| [Panel_Locks](<https://github.com/Reiten966/Polyformer/blob/main/STL/Panels%20(Optional)/Panel_Locks_x6.stl>)                                  | 6        | Recycled PET Bottle Filament               |   :x:   |       |
| [Rail_Cap_Left](<https://github.com/Reiten966/Polyformer/blob/main/STL/Panels%20(Optional)/Rail_Cap_Left.stl>)                                 | 1        | Recycled PET Bottle Filament               |   :x:   |       |
| [Rail_Cap_Right](<https://github.com/Reiten966/Polyformer/blob/main/STL/Panels%20(Optional)/Rail_Cap_Right.stl>)                               | 1        | Recycled PET Bottle Filament               |   :x:   |       |
| [Right_Lower_Panel_First_Half](<https://github.com/Reiten966/Polyformer/blob/main/STL/Panels%20(Optional)/Right_Lower_Panel_First_Half.stl>)   | 1        | Recycled PET Bottle Filament               |   :x:   |       |
| [Right_Lower_Panel_Second_Half](<https://github.com/Reiten966/Polyformer/blob/main/STL/Panels%20(Optional)/Right_Lower_Panel_Second_Half.stl>) | 1        | Recycled PET Bottle Filament               |   :x:   |       |
| [Right_Upper_Panel_First_Half](<https://github.com/Reiten966/Polyformer/blob/main/STL/Panels%20(Optional)/Right_Upper_Panel_First_Half.stl>)   | 1        | Recycled PET Bottle Filament               |   :x:   |       |
| [Right_Upper_Panel_Second_Half](<https://github.com/Reiten966/Polyformer/blob/main/STL/Panels%20(Optional)/Right_Upper_Panel_Second_Half.stl>) | 1        | Recycled PET Bottle Filament               |   :x:   |       |
| [Screen_Mount](<https://github.com/Reiten966/Polyformer/blob/main/STL/Panels%20(Optional)/Screen_Mount.stl>)                                   | 1        | Recycled PET Bottle Filament               |   :x:   |       |
| [Top_Panel](<https://github.com/Reiten966/Polyformer/blob/main/STL/Panels%20(Optional)/Top_Panel.stl>)                                         | 1        | Recycled PET Bottle Filament               |   :x:   |       |
| [Top_Panel_Shaft](<https://github.com/Reiten966/Polyformer/blob/main/STL/Panels%20(Optional)/Top_Panel_Shaft.stl>)                             | 1        | Recycled PET Bottle Filament               |   :x:   |       |
| [Screen_Dial](<https://github.com/Reiten966/Polyformer/blob/main/STL/Panels%20(Optional)/%5BAccent_Color%5D%20Screen_Dial.stl>)                | 1        | Recycled PET Bottle Filament Accent Colour |   :x:   |       |
