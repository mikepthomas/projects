---
title: Voron M4
heading: Assembling the Voron M4 Extruder
date: 2022-03-07
lastmod: 2024-05-19T16:25:23.786Z
author: Mike Thomas
description: M4 Extruders for Dual color printing on the Voron 1.8.
preview: /assets/blog/voron-m4/m4-hero.jpg
slug: /projects/voron-m4
related:
  - https://www.vorondesign.com/voron_m4
  - /projects/voron-afterburner
draft: false
tags:
  - Extruder
  - Voron
categories:
  - 3D Printer
keywords:
  - Printer
---

> Image © 2019 [Voron Design](https://www.vorondesign.com/)

# Table of contents

# Sourcing Parts

I plan to build two M4 Extruders, 1 standard and 1 mirrored to mount to the back of the printer so that I can experiment with the dual bowden setup.

## Fasteners

| Item                 | Quantity | Received | Notes |
| -------------------- | -------- | -------- | ----- |
| M3x30 SHCS           | 4        | 8        |       |
| M3x16 SHCS           | 2        | 4        |       |
| M3x12 SHCS           | 1        | 2        |       |
| M3x6 BHCS            | 5        | 10       |       |
| M3 Threaded Insert   | 5        | 10       |       |
| M3 Washer            | 2        | 4        |       |
| Thumb Screw Assembly | 1        | 2        |       |

## Motion

| Item                                 | Quantity | Received | Notes |
| ------------------------------------ | -------- | -------- | ----- |
| GT2 Belt Loop (6mm wide) - 188mm     | 1        | 2        |       |
| GT2 20T (6mm wide) Pulley (5mm bore) | 2        | 4        |       |
| F695 2RS                             | 2        | 4        |       |
| Bondtech Drive Gear Set              | 1        | 2        |       |
| 5mm x 50mm Shaft                     | 1        | 2        |       |

## Electronics

| Item                      | Quantity | Received | Notes              |
| ------------------------- | -------- | -------- | ------------------ |
| NEMA17 Motor 17HS08-1004S | 1        | 2        | LDO 42STH20-1004AS |

## Bowden

| Item            | Quantity | Received | Notes        |
| --------------- | -------- | -------- | ------------ |
| Bowden Clip     | 1        | 2        |              |
| Bowden Fitting  | 1        | 2        | ECAS Version |
| Bowden Tube (m) | 1        | 2        |              |

# Printing Parts

All printed parts will be printed in eSun ABS+. The Voron team recommends an infill type of 40% of either Grid, Gyroid, Honeycomb, Triangle or Cubic. A layer height of 0.2mm and extrusion width of 0.4mm, with a wall count of 4 and top/bottom layers of 5.

## 80T Gear

| Item                                                                                             | Quantity | Material                                                                 | Printed | Notes |
| ------------------------------------------------------------------------------------------------ | -------- | ------------------------------------------------------------------------ | :-----: | ----- |
| [80t_gear](https://github.com/VoronDesign/Mobius-Extruder/blob/master/STLs/%5Ba%5D_80t_gear.stl) | 2        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) |   :x:   |       |

### :negative_squared_cross_mark: Assembly

#### Parts Needed

| Item                                 | Quantity |
| ------------------------------------ | -------- |
| GT2 20T (6mm wide) Pulley (5mm bore) | 1        |
| M3x8 BHCS                            | 5        |

## Drive Shaft

| Item                                                                                                     | Quantity | Material                                                                 | Printed | Notes |
| -------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------ | :-----: | ----- |
| [5x4mm_spacer](https://github.com/VoronDesign/Mobius-Extruder/blob/master/STLs/%5Ba%5D_5x4mm_spacer.stl) | 2        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) |   :x:   |       |

### :negative_squared_cross_mark: Assembly

#### Parts Needed

| Item             | Quantity |
| ---------------- | -------- |
| 5mm x 50mm Shaft | 1        |
| BMG Drive Gear   | 1        |
| F695 2RS         | 1        |

## Idler Assembly

| Item                                                                                                         | Quantity | Material                                                                 | Printed | Notes |
| ------------------------------------------------------------------------------------------------------------ | -------- | ------------------------------------------------------------------------ | :-----: | ----- |
| [guidler](https://github.com/VoronDesign/Mobius-Extruder/blob/master/STLs/%5Ba%5D_guidler.stl)               | 1        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) |   :x:   |       |
| [guidler_mirror](https://github.com/VoronDesign/Mobius-Extruder/blob/master/STLs/%5Ba%5D_guidler_mirror.stl) | 1        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) |   :x:   |       |

### :negative_squared_cross_mark: Assembly

#### Parts Needed

| Item               | Quantity |
| ------------------ | -------- |
| BMG Idler Assembly | 1        |

## Body Assembly

| Item                                                                                                         | Quantity | Material                                                                 | Printed | Notes |
| ------------------------------------------------------------------------------------------------------------ | -------- | ------------------------------------------------------------------------ | :-----: | ----- |
| [latch_shuttle](https://github.com/VoronDesign/Mobius-Extruder/blob/master/STLs/latch_shuttle.stl)           | 2        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)                     |   :x:   |       |
| [end_plate](https://github.com/VoronDesign/Mobius-Extruder/blob/master/STLs/end_plate.stl)                   | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)                     |   :x:   |       |
| [end_plate_mirror](https://github.com/VoronDesign/Mobius-Extruder/blob/master/STLs/end_plate_mirror.stl)     | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)                     |   :x:   |       |
| [motor_plate](https://github.com/VoronDesign/Mobius-Extruder/blob/master/STLs/motor_plate.stl)               | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)                     |   :x:   |       |
| [motor_plate_mirror](https://github.com/VoronDesign/Mobius-Extruder/blob/master/STLs/motor_plate_mirror.stl) | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)                     |   :x:   |       |
| [main_body](https://github.com/VoronDesign/Mobius-Extruder/blob/master/STLs/main_body.stl)                   | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)                     |   :x:   |       |
| [main_body_mirror](https://github.com/VoronDesign/Mobius-Extruder/blob/master/STLs/main_body_mirror.stl)     | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)                     |   :x:   |       |
| [latch](https://github.com/VoronDesign/Mobius-Extruder/blob/master/STLs/%5Ba%5D_latch.stl)                   | 2        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) |   :x:   |       |

### :negative_squared_cross_mark: Assembly

#### Parts Needed

| Item                                 | Quantity |
| ------------------------------------ | -------- |
| Bowden Fitting                       | 1        |
| F695 2RS                             | 1        |
| GT2 20T (6mm wide) Pulley (5mm bore) | 1        |
| GT2 Belt Loop (6mm wide) - 188mm     | 1        |
| LDO 42STH20-1004AS                   | 1        |
| M3x12 SHCS                           | 1        |
| M3x16 SHCS                           | 2        |
| M3x30 SHCS                           | 4        |
| M3 Threaded Insert                   | 5        |
| M3 Washer                            | 2        |
| Thumb Screw Assembly                 | 1        |
