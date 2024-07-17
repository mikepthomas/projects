---
title: Nevermore Filter
heading: Assembling a Nevermore Filter
date: 2022-03-16
lastmod: 2024-05-16T23:10:55.227Z
author: Mike Thomas
description: The Nevermore filters the encosure to reduce the smell of printing ABS.
preview: /assets/blog/nevermore-filter/nevermore-filter-hero.jpg
slug: /projects/nevermore-filter
draft: false
tags:
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

This version will be used on the [Voron 2.4](printer-voron-2.4)

## Sourcing Parts

### Fasteners

| Item                | Quantity | Received | Notes |
| ------------------- | -------- | -------- | ----- |
| M2x4 FHCS           | 7        | 7        |       |
| M3x6 BHCS           | 18       | 18       |       |
| M3x6 SHCS           | 12       | 12       |       |
| M3x8 SHCS           | 2        | 2        |       |
| M3x10 BHCS          | 4        | 4        |       |
| M3x10 SHCS          | 4        | 4        |       |
| M3x12 BHCS          | 4        | 4        |       |
| M3x12 SHCS          | 7        | 7        |       |
| M3x16 BHCS          | 1        | 1        |       |
| M3x16 SHCS          | 1        | 1        |       |
| M3x20 SHCS          | 2        | 3        |       |
| M3x25 SHCS          | 4        | 4        |       |
| M3 Hex Nut          | 1        | 1        |       |
| M3 threaded inserts | 28       | 36       |       |

### Electronics

| Item                                   | Quantity | Received | Notes |
| -------------------------------------- | -------- | -------- | ----- |
| Raspberry Pi Pico W (plus header pins) | 1        | 1        |       |
| SPG40 sensors                          | 2        | 2        |       |
| BME280 sensors                         | 2        | 2        |       |
| Mateksys 6-30V voltage regulator       | 1        | 1        |       |
| M8 threaded DC connector               | 1        | 1        |       |
| 6-pin 1.25mm pitch JST connector       | 1        | 1        |       |
| 4-pin 1.25mm pitch JST connector       | 2        | 2        |       |
| JST-PH 4-pin male GPU fan connector    | 1        | 1        |       |
| AWG26 cable                            | 300mm    | 300mm    |       |
| 65mm GPU fan                           | 1        | 1        |       |

### Misc

| Item                                   | Quantity | Received | Notes                             |
| -------------------------------------- | -------- | -------- | --------------------------------- |
| Linneo 250mm round polycarbonate sheet | 1        | 1        | 3mm thick                         |
| Pneumatic Bowden Fitting M10           | 1        | 1        |                                   |
| HEPA filters                           | 2        | 2        | 130×40mm, same as Xiaomi Mijia G1 |
| Heat shrink tubing                     | 1        | 1        |                                   |
| Polymax Neopren Sponge Cord            | 1m       | 1m       | 3mm thick                         |
| Nevermore XL Carbon refills            | 2        | 2        |                                   |

## Printing Parts

### :negative_squared_cross_mark: Mount

| Item                                                                                                                                                    | Quantity | Material                                               | Printed | Notes |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------ | :-----: | ----- |
| [VoronExhaustFitting](https://github.com/nevermore3d/StealthMax/blob/main/STLs/0_Mount/0a_BackPanelMount/StealthMax/M_0a.0_VoronExhaustFitting_BPM.stl) | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)   |   :x:   |       |
| [BackPanelMount](https://github.com/nevermore3d/StealthMax/blob/main/STLs/0_Mount/0a_BackPanelMount/0a.1_BackPanelMount_BPM.stl)                        | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)   |   :x:   |       |
| [BackPanelMountCover](https://github.com/nevermore3d/StealthMax/blob/main/STLs/0_Mount/0a_BackPanelMount/0a.2_BackPanelMountCover_BPM.stl)              | 1        | [eSun ABS+ (Purple)](printer-filament#esun-abs-purple) |   :x:   |       |

### :negative_squared_cross_mark: Flow Chamber

| Item                                                                                                                                                  | Quantity | Material                                               | Printed | Notes                                                      |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------ | :-----: | ---------------------------------------------------------- |
| [FlowChamber](https://github.com/nevermore3d/StealthMax/blob/main/STLs/1_FlowChamber/1a_BackPanelMount/StealthMax/M_1a.0_FlowChamber_BPM.stl)         | 1        | [eSun ABS+ (Purple)](printer-filament#esun-abs-purple) |   :x:   |                                                            |
| [AirExhaustWheel](https://github.com/nevermore3d/StealthMax/blob/main/STLs/1_FlowChamber/1a_BackPanelMount/StealthMax/M_1a.1_AirExhaustWheel_BPM.stl) | 1        | [eSun ABS+ (Purple)](printer-filament#esun-abs-purple) |   :x:   |                                                            |
| [AirExhaustSlider](https://github.com/nevermore3d/StealthMax/blob/main/STLs/1_FlowChamber/1.2_AirExhaustSlider.stl)                                   | 1        | [eSun ABS+ (Purple)](printer-filament#esun-abs-purple) |   :x:   |                                                            |
| [BowdenCap](https://github.com/nevermore3d/StealthMax/blob/main/STLs/1_FlowChamber/1.3a_BowdenCap_Closed.stl)                                         | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)   |   :x:   | Closed Version                                             |
| [BowdenCap](https://github.com/nevermore3d/StealthMax/blob/main/STLs/1_FlowChamber/1.3b_BowdenCap_Open.stl)                                           | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)   |   :x:   | Open Version                                               |
| [CableEntryCap](https://github.com/nevermore3d/StealthMax/blob/main/STLs/1_FlowChamber/1.4a_CableEntryCap_M8Barrel.stl)                               | 1        | [eSun ABS+ (Purple)](printer-filament#esun-abs-purple) |   :x:   | M8 Barrel Version                                          |
| [CableEntryCap](https://github.com/nevermore3d/StealthMax/blob/main/STLs/1_FlowChamber/1.4b_CableEntryCap_MicroFit3.stl)                              | 1        | [eSun ABS+ (Purple)](printer-filament#esun-abs-purple) |   :x:   | MicroFit3 Version, Not Required as using M8 Barrel Version |
| [CableEntryCap](https://github.com/nevermore3d/StealthMax/blob/main/STLs/1_FlowChamber/1.4c_CableEntryCap_Closed.stl)                                 | 1        | [eSun ABS+ (Purple)](printer-filament#esun-abs-purple) |   :x:   | Closed Version, Not Required as using M8 Barrel Version    |
| [FanWirePin_Spare](https://github.com/nevermore3d/StealthMax/blob/main/STLs/1_FlowChamber/1.5_FanWirePin_Spare.stl)                                   | 1        | [eSun ABS+ (Purple)](printer-filament#esun-abs-purple) |   :x:   | Not Required, Included in FlowChamber                      |
| [PCBSpacer](https://github.com/nevermore3d/StealthMax/blob/main/STLs/1_FlowChamber/1.6_PCBSpacer.stl)                                                 | 4        | [eSun ABS+ (Purple)](printer-filament#esun-abs-purple) |   :x:   |                                                            |

### :negative_squared_cross_mark: Main Chamber

Dual colour Carbon Basket Lid and Pico Access Latch can be achieved with a filament swap.

| Item                                                                                                                                                     | Quantity | Material                                               | Printed | Notes                                               |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------ | :-----: | --------------------------------------------------- |
| [MainChamber](https://github.com/nevermore3d/StealthMax/blob/main/STLs/2_MainChamber/StealthMax/M_2.0_MainChamber.stl)                                   | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)   |   :x:   |                                                     |
| [CarbonBasket](https://github.com/nevermore3d/StealthMax/blob/main/STLs/2_MainChamber/StealthMax/M_2.1_CarbonBasket.stl)                                 | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)   |   :x:   |                                                     |
| [CarbonBasketLid](https://github.com/nevermore3d/StealthMax/blob/main/STLs/2_MainChamber/StealthMax/M_2.2a_CarbonBasketLid.stl)                          | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)   |   :x:   | Not Required as I will print the No Handles version |
| [CarbonBasketLid](https://github.com/nevermore3d/StealthMax/blob/main/STLs/2_MainChamber/StealthMax/M_2.2b_CarbonBasketLid_noHandles.stl)                | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)   |   :x:   | No Handles Version                                  |
| [HEPACover](https://github.com/nevermore3d/StealthMax/blob/main/STLs/2_MainChamber/StealthMax/M_2.3_HEPACover.stl)                                       | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)   |   :x:   |                                                     |
| [HEPAPryerTool](https://github.com/nevermore3d/StealthMax/blob/main/STLs/2_MainChamber/StealthMax/M_2.4_HEPAPryerTool_Spare.stl)                         | 2        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)   |   :x:   |                                                     |
| [LogoCap](https://github.com/nevermore3d/StealthMax/blob/main/STLs/2_MainChamber/StealthMax/M_2.5a_LogoCap.stl)                                          | 1        | [eSun ABS+ (Purple)](printer-filament#esun-abs-purple) |   :x:   |                                                     |
| [PicoAccessLatch](https://github.com/nevermore3d/StealthMax/blob/main/STLs/2_MainChamber/StealthMax/M_2.6a_PicoAccessLatch.stl)                          | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)   |   :x:   |                                                     |
| [IntakeSensorStackAccessLatch](https://github.com/nevermore3d/StealthMax/blob/main/STLs/2_MainChamber/StealthMax/M_2.7_IntakeSensorStackAccessLatch.stl) | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)   |   :x:   |                                                     |
| [BowdenTubeAccessLatch](https://github.com/nevermore3d/StealthMax/blob/main/STLs/2_MainChamber/StealthMax/M_2.8_BowdenTubeAccessLatch.stl)               | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)   |   :x:   |                                                     |
| [CarbonBasketLidHandle](https://github.com/nevermore3d/StealthMax/blob/main/STLs/2_MainChamber/2.9_CarbonBasketLidHandle_Spare.stl)                      | 2        | [eSun ABS+ (Purple)](printer-filament#esun-abs-purple) |   :x:   | For Carbon Basket Lid No Handles Version            |

### :negative_squared_cross_mark: Lid

| Item                                                                                                                 | Quantity | Material                                               | Printed | Notes |
| -------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------ | :-----: | ----- |
| [LidFrame](https://github.com/nevermore3d/StealthMax/blob/main/STLs/3_Lid/StealthMax/M_3.0_LidFrame.stl)             | 1        | [eSun ABS+ (Purple)](printer-filament#esun-abs-purple) |   :x:   |       |
| [LidPanelHolder](https://github.com/nevermore3d/StealthMax/blob/main/STLs/3_Lid/StealthMax/M_3.1_LidPanelHolder.stl) | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)   |   :x:   |       |
| [LidFrontHinge](https://github.com/nevermore3d/StealthMax/blob/main/STLs/3_Lid/3.2_LidFrontHinge.stl)                | 1        | [eSun ABS+ (Purple)](printer-filament#esun-abs-purple) |   :x:   |       |
| [LidLatch](https://github.com/nevermore3d/StealthMax/blob/main/STLs/3_Lid/3.3_LidLatch.stl)                          | 3        | [eSun ABS+ (Purple)](printer-filament#esun-abs-purple) |   :x:   |       |

# Nevermore Micro V6

The V6 no longer requires you to cut up the fans like you used to have to do with the V5.

[Carbon refill is available from here](https://www.onetwo3d.co.uk/product/nevermore3d-carbon/).

This version will be used on the [Voron 1.8](printer-voron-1.8).

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

| Item                                                                                                                                    | Quantity | Material                                                                 | Printed | Notes |
| --------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------ | :-----: | ----- |
| [v0_90deg_Cartridge](https://github.com/nevermore3d/Nevermore_Micro/blob/master/V6/v0/v0_90deg_Cartridge.stl)                           | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)                     |   :x:   |       |
| [v0_Plenum_Delta_GDStime_Winsinn](https://github.com/nevermore3d/Nevermore_Micro/blob/master/V6/v0/v0_Plenum_Delta_GDStime_Winsinn.stl) | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)                     |   :x:   |       |
| [V6_Plenum_Lid](https://github.com/nevermore3d/Nevermore_Micro/blob/master/V6/STL/V6_Plenum_Lid.stl)                                    | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)                     |   :x:   |       |
| [V6_Jalousie_Slicer](https://github.com/nevermore3d/Nevermore_Micro/blob/master/V6/STL/%5Ba%5DV6_Jalousie_Slicer.stl)                   | 1        | [eSun ABS+ (Fire Engine Red)](printer-filament#esun-abs-fire-engine-red) |   :x:   |       |
| [1515_Frame_Connector](https://github.com/nevermore3d/Nevermore_Micro/blob/master/V6/STL/Optional_stuff/1515_Frame_Connector.stl)       | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)                     |   :x:   |       |
| [JST_Holder](https://github.com/nevermore3d/Nevermore_Micro/blob/master/V6/STL/Optional_stuff/2xJST_Holder%5Bno_cut_fan_wires%5D.stl)   | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black)                     |   :x:   |       |
