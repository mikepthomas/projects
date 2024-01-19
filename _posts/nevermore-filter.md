---
title: Assembling a Nevermore Filter
date: 2024-01-19T22:33:50.401Z
author: Mike Thomas
description: The Nevermore filters the encosure to reduce the smell of printing ABS.
preview: /assets/blog/nevermore-filter/nevermore-filter-hero.jpg
slug: /projects/nevermore-filter
draft: false
tags:
  - 3D Printer
  - Voron
categories:
  - 3D Printing
keywords:
  - Nevermore Filter
---

# Table of contents

# Nevermore StealthMax

Very large filter to recirculate the air inside the chamber so no heat is lost while filtering.

[Carbon refill is available from here](https://www.onetwo3d.co.uk/product/nevermore-carbon-refill-xl/).

This version will be used on the [Voron 1.8](printer-voron-1.8)

## Sourcing Parts

### Fasteners

| Item                | Quantity | Received | Notes       |
| ------------------- | -------- | -------- | ----------- |
| M2x4 FHCS           | 7        |          | 7 on order  |
| M3x6 BHCS           | 18       |          | 18 on order |
| M3x8 BHCS           | 2        |          | 2 on order  |
| M3x10 BHCS          | 7        |          | 7 on order  |
| M3x12 BHCS          | 4        |          | 4 on order  |
| M3x12 SHCS          | 7        |          | 7 on order  |
| M3x25 SHCS          | 4        |          | 4 on order  |
| M3 Hex Nut          | 1        |          | 1 on order  |
| M3 threaded inserts | 24       |          | 24 on order |

### Electronics

| Item                                   | Quantity | Received | Notes          |
| -------------------------------------- | -------- | -------- | -------------- |
| Raspberry Pi Pico W (plus header pins) | 1        |          | 1 on order     |
| SPG40 sensors                          | 2        |          | 2 on order     |
| BME280 sensors                         | 2        |          | 2 on order     |
| Mateksys 6-30V voltage regulator       | 1        |          | 1 on order     |
| M8 threaded DC connector               | 1        |          | 1 on order     |
| 6-pin 1.25mm pitch JST connector       | 1        |          | 1 on order     |
| 4-pin 1.25mm pitch JST connector       | 2        |          | 2 on order     |
| JST-PH 4-pin male GPU fan connector    | 1        |          | 1 on order     |
| AWG26 cable                            | 300mm    |          | 300mm on order |
| 65mm GPU fan                           | 1        |          | 1 on order     |

### Misc

| Item                                   | Quantity | Received | Notes                                          |
| -------------------------------------- | -------- | -------- | ---------------------------------------------- |
| Linneo 250mm round polycarbonate sheet | 1        |          | 1 on order, 3mm thick                          |
| Pneumatic Bowden Fitting M10           | 1        |          | 1 on order                                     |
| HEPA filters                           | 2        |          | 2 on order, 130×40 mm, same as Xiaomi Mijia G1 |
| Heat shrink tubing                     | 1        |          | 1 on order                                     |
| Polymax Neopren Sponge Cord            | 1m       |          | 1m on order, 3mm thick                         |
| Nevermore XL Carbon refills            | 2        |          | 2 on order                                     |

## Printing Parts

| Item                                                                                                                                                                     | Quantity | Material                                                                 | Printed | Notes               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ------------------------------------------------------------------------ | :-----: | ------------------- |
| [Flow_Chamber](https://github.com/nevermore3d/StealthMax/blob/main/STL/Voron-Back-Panel-Cutout_Mount/1-Flow_Chamber.stl)                                                 | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)                     |   :x:   |                     |
| [Main_Chamber](https://github.com/nevermore3d/StealthMax/blob/main/STL/Voron-Back-Panel-Cutout_Mount/2-Main_Chamber.stl)                                                 | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)                     |   :x:   |                     |
| [Main_Chamber_HEPA_Cover](https://github.com/nevermore3d/StealthMax/blob/main/STL/Voron-Back-Panel-Cutout_Mount/2-Main_Chamber_HEPA_Cover.stl)                           | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)                     |   :x:   |                     |
| [Main_Chamber_Voron_Hub_Cap](https://github.com/nevermore3d/StealthMax/blob/main/STL/Voron-Back-Panel-Cutout_Mount/2-Main_Chamber_Voron_Hub_Cap.stl)                     | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)                     |   :x:   |                     |
| [Lid](https://github.com/nevermore3d/StealthMax/blob/main/STL/Voron-Back-Panel-Cutout_Mount/3-Lid/Lid_3mm_250mm.stl)                                                     | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)                     |   :x:   | 3mm x 250mm version |
| [Panel_Holder](https://github.com/nevermore3d/StealthMax/blob/main/STL/Voron-Back-Panel-Cutout_Mount/3-Lid/Panel_Holder_3mm_250mm.stl)                                   | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)                     |   :x:   | 3mm x 250mm version |
| [Voron_Chamber_Connection_and_Exhaust](https://github.com/nevermore3d/StealthMax/blob/main/STL/Voron-Back-Panel-Cutout_Mount/4-Voron_Chamber_Connection_and_Exhaust.stl) | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)                     |   :x:   |                     |
| [Hinge_and_Latches](https://github.com/nevermore3d/StealthMax/blob/main/STL/Voron-Back-Panel-Cutout_Mount/%5Ba%5DHinge_and_Latches.stl)                                  | 1        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) |   :x:   |                     |
| [Slider_and_Plugs](https://github.com/nevermore3d/StealthMax/blob/main/STL/Voron-Back-Panel-Cutout_Mount/%5Ba%5DSlider_and_Plugs.stl)                                    | 1        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) |   :x:   |                     |

### Carbon Basket

Dual colour lid can be achieved with a filament swap.

| Item                                                                                                                                   | Quantity | Material                                                                 | Printed | Notes |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------ | :-----: | ----- |
| [Basket_Lid3](https://github.com/nevermore3d/StealthMax/blob/main/STL/Voron-Back-Panel-Cutout_Mount/Carbon_Basket/Basket_Lid3.stl)     | 1        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) |   :x:   |       |
| [Carbon_Basket](https://github.com/nevermore3d/StealthMax/blob/main/STL/Voron-Back-Panel-Cutout_Mount/Carbon_Basket/Carbon_Basket.stl) | 1        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) |   :x:   |       |

# Nevermore Micro V6

The V6 no longer requires you to cut up the fans like you used to have to do with the V5.

[Carbon refill is available from here](https://www.onetwo3d.co.uk/product/nevermore3d-carbon/).

This version will be used on the [Voron 0.2](printer-voron-0.2).

## Sourcing Parts

### Fasteners

| Item                  | Quantity | Received | Notes |
| --------------------- | -------- | -------- | ----- |
| M3 threaded inserts   | 2        | 2        |       |
| M3x16 SHCS            | 1        | 1        |       |
| M3x6 SHCS             | 1        | 1        |       |
| M3 Hammer Head T-nuts | 1        | 1        |       |

### Electronics

| Item                               | Quantity | Received | Notes |
| ---------------------------------- | -------- | -------- | ----- |
| 5015 Centrifugal Fan (24V)         | 2        | 2        |       |
| JST XH Connector Header 2 Position | 3        | 3        |       |

### Misc

| Item                              | Quantity | Received | Notes |
| --------------------------------- | -------- | -------- | ----- |
| 6mm x 3mm Round Neodymium Magnets | 8        | 8        |       |
| Acid-free Activated Carbon Pack   | 1        | 1        |       |

## Printing Parts

| Item                                                                                                                                    | Quantity | Material                                               | Printed | Notes |
| --------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------ | :-----: | ----- |
| [v0_90deg_Cartridge](https://github.com/nevermore3d/Nevermore_Micro/blob/master/V6/v0/v0_90deg_Cartridge.stl)                           | 1        | [eSun ABS+ (Purple)](printer-filament#esun-abs-purple) |   :x:   |       |
| [v0_Plenum_Delta_GDStime_Winsinn](https://github.com/nevermore3d/Nevermore_Micro/blob/master/V6/v0/v0_Plenum_Delta_GDStime_Winsinn.stl) | 1        | [eSun ABS+ (Purple)](printer-filament#esun-abs-purple) |   :x:   |       |
| [V6_Plenum_Lid](https://github.com/nevermore3d/Nevermore_Micro/blob/master/V6/STL/V6_Plenum_Lid.stl)                                    | 1        | [eSun ABS+ (Purple)](printer-filament#esun-abs-purple) |   :x:   |       |
| [V6_Jalousie_Slicer](https://github.com/nevermore3d/Nevermore_Micro/blob/master/V6/STL/%5Ba%5DV6_Jalousie_Slicer.stl)                   | 1        | [eSun ABS+ (Orange)](printer-filament#esun-abs-orange) |   :x:   |       |
| [1515_Frame_Connector](https://github.com/nevermore3d/Nevermore_Micro/blob/master/V6/STL/Optional_stuff/1515_Frame_Connector.stl)       | 1        | [eSun ABS+ (Purple)](printer-filament#esun-abs-purple) |   :x:   |       |
| [JST_Holder](https://github.com/nevermore3d/Nevermore_Micro/blob/master/V6/STL/Optional_stuff/2xJST_Holder%5Bno_cut_fan_wires%5D.stl)   | 1        | [eSun ABS+ (Purple)](printer-filament#esun-abs-purple) |   :x:   |       |
