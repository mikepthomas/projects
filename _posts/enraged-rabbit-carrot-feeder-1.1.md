---
title: Building a 6 channel Enraged Rabbit Carrot Feeder V1.1
date: 2022-02-22
lastmod: 2023-12-26T19:04:26.478Z
author: Mike Thomas
description: Re-building an Enraged Rabbit Carrot Feeder to print using multiple colours of filament on the AM8.
preview: /assets/blog/enraged-rabbit-carrot-feeder-1.1/enraged-rabbit-carrot-feeder-1.1-hero.jpg
slug: /projects/enraged-rabbit-carrot-feeder-1.1
draft: false
tags:
  - Anet A8
categories:
  - 3D Printing
keywords:
  - Enraged Rabbit Carrot Feeder
---

# Table of contents

# Intro

I purchased an already built, 9 channel [Enraged Rabbit Carrot Feeder](https://github.com/EtteGit/EnragedRabbitProject) from the Voron Discord garage sale. I plan on dismantling it to use the parts for [V2.0](enraged-rabbit-carrot-feeder-2.0) and using the printed parts to build a 6 channel to use on the [AM8](printer-am8) when it is built.

# Enraged Rabbit Carrot Feeder

## Sourcing Parts

### Electronics

| Item                              | Quantity | Received | Notes                             |
| --------------------------------- | -------- | -------- | --------------------------------- |
| ERCF EASY BRD                     | 1        | 1        |                                   |
| NEMA14 Motor 14HS11-1004S         | 1        | 1        | Oukeda Motor OK35STH34-1254A      |
| NEMA17 Motor 17HS08-1004S         | 1        | 1        | Oukeda Motor OK42STH20-104A-XH400 |
| TowerPro MG90S servo              | 1        | 1        |                                   |
| TMC2209 Stepper drivers           | 2        | 2        |                                   |
| TCRT5000 sensor pcb               | 1        | 1        |                                   |
| Omron Mouse Button - Micro Switch | 1        | 1        |                                   |

### Hardware

| Item                      | Quantity | Received | Notes               |
| ------------------------- | -------- | -------- | ------------------- |
| 7 sets of bondtechs gears | 7        | 7        |                     |
| LM8UU bearings            | 2        | 2        |                     |
| M5 threaded rods          | 2        | 2        | 156mm for 6 channel |
| 8mm smooth rods           | 2        | 2        | 171mm for 6 channel |
| D-cut 5mm shaft           | 1        | 1        | 201mm for 6 channel |
| MR623ZZ bearing           | 1        | 1        |                     |
| MR85ZZ bearings           | 6        | 6        |                     |

### Fasteners

| Item                   | Quantity | Received | Notes |
| ---------------------- | -------- | -------- | ----- |
| M3 threaded inserts    | 28       | 32       |       |
| M5x30 BHCS             | 2        | 2        |       |
| M5x16 BHCS             | 1        | 1        |       |
| M5 nuts                | 4        | 5        |       |
| M5 nylock nuts         | 5        | 6        |       |
| M5 washers             | 2        | 3        |       |
| M3x8 SHCS              | 22       | 22       |       |
| M3x8 BHCS              | 5        | 5        |       |
| M3x12 SHCS             | 3        | 3        |       |
| M3x16 SHCS             | 10       | 13       |       |
| M3x20 SHCS             | 7        | 7        |       |
| M3x40 SHCS             | 2        | 2        |       |
| M3 DIN125 Steel Washer | 9        | 13       |       |
| M2x10 SHCS             | 2        | 2        |       |

### Motion

| Item                                 | Quantity | Received | Notes               |
| ------------------------------------ | -------- | -------- | ------------------- |
| GT2 belt 6mm (open)                  | 1        | 1        | 412mm for 6 channel |
| GT2 20T Pulley 6 mm, 5mm bore        | 3        | 3        |                     |
| GT2 20T Toothed Idler 6 mm, 5mm bore | 1        | 1        |                     |
| GT2 188m Belt loop 6mm               | 1        | 1        |                     |

### Misc

| Item                              | Quantity | Received | Notes |
| --------------------------------- | -------- | -------- | ----- |
| 6mm x 3mm Round Neodymium Magnets | 22       | 23       |       |
| Bowden Clip                       | 7        | 10       |       |
| Bowden Fitting                    | 7        | 10       |       |
| 7X7 Drag chain                    | 1        | 1        |       |

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

### Filament Blocks

| Item                                                                                                                                                     | Quantity | Material  |      Printed       | Notes |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------- | :----------------: | ----- |
| [Filament_Block](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/Filament_Block_xN.stl)                   | 6        | Black ABS | :heavy_check_mark: |       |
| [Filament_Blocks_End](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/Filament_Blocks_End.stl)            | 1        | Black ABS | :heavy_check_mark: |       |
| [Bearing_Insert_Feet](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/%5Ba%5D_Bearing_Insert_Feet_x2.stl) | 2        | Blue ABS  | :heavy_check_mark: |       |
| [Bearing_Insert](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/%5Ba%5D_Bearing_Insert_x2.stl)           | 2        | Blue ABS  | :heavy_check_mark: |       |
| [Blocks_End_Feet](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/%5Ba%5D_Blocks_End_Feet.stl)            | 1        | Blue ABS  | :heavy_check_mark: |       |
| [Latch](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/%5Ba%5D_Latch_xN.stl)                             | 6        | Blue ABS  | :heavy_check_mark: |       |
| [Top_Hat](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/%5Ba%5D_Top_Hat_xN.stl)                         | 6        | Blue ABS  | :heavy_check_mark: |       |

#### Magnetic Gates

| Item                                                                                                                                                           | Quantity | Material |      Printed       | Notes |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------- | :----------------: | ----- |
| [Magnetic_Gate_0](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/Magnetic%20Gates/%5Ba%5D_Magnetic_Gate_0.stl) | 1        | Blue ABS | :heavy_check_mark: |       |
| [Magnetic_Gate_1](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/Magnetic%20Gates/%5Ba%5D_Magnetic_Gate_1.stl) | 1        | Blue ABS | :heavy_check_mark: |       |
| [Magnetic_Gate_2](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/Magnetic%20Gates/%5Ba%5D_Magnetic_Gate_2.stl) | 1        | Blue ABS | :heavy_check_mark: |       |
| [Magnetic_Gate_3](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/Magnetic%20Gates/%5Ba%5D_Magnetic_Gate_3.stl) | 1        | Blue ABS | :heavy_check_mark: |       |
| [Magnetic_Gate_4](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/Magnetic%20Gates/%5Ba%5D_Magnetic_Gate_4.stl) | 1        | Blue ABS | :heavy_check_mark: |       |
| [Magnetic_Gate_5](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/Magnetic%20Gates/%5Ba%5D_Magnetic_Gate_5.stl) | 1        | Blue ABS | :heavy_check_mark: |       |

#### Tag Plates

| Item                                                                                                                                               | Quantity | Material |      Printed       | Notes                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------- | :----------------: | -------------------------------------------------------------------------- |
| [Tag_Plate_0](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/Tag%20Plates/%5Ba%5D_Tag_Plate_0.stl) | 1        | Blue ABS | :heavy_check_mark: | Will reprint the Multi colour version when the ERCF is installed and tuned |
| [Tag_Plate_1](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/Tag%20Plates/%5Ba%5D_Tag_Plate_1.stl) | 1        | Blue ABS | :heavy_check_mark: | Will reprint the Multi colour version when the ERCF is installed and tuned |
| [Tag_Plate_2](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/Tag%20Plates/%5Ba%5D_Tag_Plate_2.stl) | 1        | Blue ABS | :heavy_check_mark: | Will reprint the Multi colour version when the ERCF is installed and tuned |
| [Tag_Plate_3](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/Tag%20Plates/%5Ba%5D_Tag_Plate_3.stl) | 1        | Blue ABS | :heavy_check_mark: | Will reprint the Multi colour version when the ERCF is installed and tuned |
| [Tag_Plate_4](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/Tag%20Plates/%5Ba%5D_Tag_Plate_4.stl) | 1        | Blue ABS | :heavy_check_mark: | Will reprint the Multi colour version when the ERCF is installed and tuned |
| [Tag_Plate_5](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/Tag%20Plates/%5Ba%5D_Tag_Plate_5.stl) | 1        | Blue ABS | :heavy_check_mark: | Will reprint the Multi colour version when the ERCF is installed and tuned |

#### Tag Plates

| Item                                                                                                                                                           | Quantity | Material  |      Printed       | Notes                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------- | :----------------: | ---------------------------------------- |
| [Top_Hat_Locker_1](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Filament%20blocks/Top%20Hat%20Lockers/Top_Hat_Locker_1_xN.stl) | 6        | Black ABS | :heavy_check_mark: | Manual says to start with all tools at 1 |

### Gearbox

| Item                                                                                                                                                   | Quantity | Material  |      Printed       | Notes                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | --------- | :----------------: | -------------------------------------------------------------------------- |
| [Gear_Box_Back](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Gear%20box/Gear_Box_Back.stl)                             | 1        | Black ABS | :heavy_check_mark: |                                                                            |
| [Gear_Box_Back](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Gear%20box/Gear_Box_Back.stl)                             | 1        | Black ABS | :heavy_check_mark: |                                                                            |
| [Motor_Arm_NEMA14](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Gear%20box/NEMA14%20Gear%20motor/Motor_Arm_NEMA14.stl) | 1        | Black ABS | :heavy_check_mark: |                                                                            |
| [Bearing_Spacer](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Gear%20box/%5Ba%5D_Bearing_Spacer_x2.stl)                | 2        | Blue ABS  | :heavy_check_mark: |                                                                            |
| [Bottom_Panel](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Gear%20box/%5Ba%5D_Bottom_Panel.stl)                       | 1        | Blue ABS  | :heavy_check_mark: |                                                                            |
| [Knob](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Gear%20box/%5Ba%5D_Knob.stl)                                       | 1        | Blue ABS  |        :x:         |                                                                            |
| [Logo_Plate](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Gear%20box/%5Ba%5D_Logo_Plate.stl)                           | 1        | Blue ABS  | :heavy_check_mark: | Will reprint the Multi colour version when the ERCF is installed and tuned |
| [M4_80T_Wheel](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Gear%20box/%5Ba%5D_M4_80T_Wheel.stl)                       | 1        | Blue ABS  | :heavy_check_mark: |                                                                            |
| [Side_Latch](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Gear%20box/%5Ba%5D_Side_Latch_x2.stl)                        | 2        | Blue ABS  | :heavy_check_mark: |                                                                            |
| [Top_Panel](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Gear%20box/%5Ba%5D_Top_Panel.stl)                             | 1        | Blue ABS  | :heavy_check_mark: |                                                                            |

### Linear Axis

| Item                                                                                                                                                        | Quantity | Material  |      Printed       | Notes |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------- | :----------------: | ----- |
| [Idler_Block](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Linear%20axis/Idler_Block.stl)                                   | 1        | Black ABS | :heavy_check_mark: |       |
| [Selector_Motor_Support](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Linear%20axis/Selector_Motor_Support.stl)             | 1        | Black ABS | :heavy_check_mark: |       |
| [Drag_Chain_Anchor_Bottom](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Linear%20axis/%5Ba%5D_Drag_Chain_Anchor_Bottom.stl) | 1        | Blue ABS  | :heavy_check_mark: |       |
| [Motor_Lock](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Linear%20axis/%5Ba%5D_Motor_Lock.stl)                             | 1        | Blue ABS  | :heavy_check_mark: |       |

### Selector

| Item                                                                                                                               | Quantity | Material  |      Printed       | Notes                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------- | -------- | --------- | :----------------: | -------------------------------------------------------------------------- |
| [Belt_Tensionner](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Selector/Belt_Tensionner.stl)       | 1        | Black ABS | :heavy_check_mark: |                                                                            |
| [Drag_Chain_Anchor](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Selector/Drag_Chain_Anchor.stl)   | 1        | Black ABS | :heavy_check_mark: |                                                                            |
| [Encoder_Cart_Left](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Selector/Encoder_Cart_Left.stl)   | 1        | Black ABS | :heavy_check_mark: |                                                                            |
| [Encoder_Cart_Right](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Selector/Encoder_Cart_Right.stl) | 1        | Black ABS | :heavy_check_mark: |                                                                            |
| [Gate_Key](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Selector/Gate_Key.stl)                     | 1        | Black ABS | :heavy_check_mark: |                                                                            |
| [Selector_Door](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Selector/Selector_Door.stl)           | 1        | Black ABS | :heavy_check_mark: | Will reprint the Multi colour version when the ERCF is installed and tuned |
| [Selector_Cart](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Selector/%5Ba%5D_Selector_Cart.stl)   | 1        | Blue ABS  | :heavy_check_mark: |                                                                            |
| [Servo_Arm](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Selector/%5Ba%5D_Servo_Arm.stl)           | 1        | Blue ABS  | :heavy_check_mark: |                                                                            |

### Supports

| Item                                                                                                                                                            | Quantity | Material  | Printed | Notes |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------- | :-----: | ----- |
| [2020_Mount](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Supports/Adjustable%20mount/2020/2020_Mount.stl)                      | 1        | Black ABS |   :x:   |       |
| [2020_Mount_Mirrored](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Supports/Adjustable%20mount/2020/2020_Mount_Mirrored.stl)    | 1        | Black ABS |   :x:   |       |
| [Junction_Plate_Flat](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Supports/Adjustable%20mount/Junction_Plate_Flat_x2.stl)      | 2        | Black ABS |   :x:   |       |
| [Junction_Plate_Gear_Box](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Supports/Adjustable%20mount/Junction_Plate_Gear_Box.stl) | 1        | Black ABS |   :x:   |       |
| [Screw](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Supports/Adjustable%20mount/%5Ba%5D_Screw_x3.stl)                          | 3        | Blue ABS  |   :x:   |       |

### Tools

| Item                                                                                                                            | Quantity | Material | Printed | Notes |
| ------------------------------------------------------------------------------------------------------------------------------- | -------- | -------- | :-----: | ----- |
| [Calib_Test](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Tools/Calib_Test.stl)                 | 1        |          |   :x:   |       |
| [Pulley_Tool_NEMA14](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Tools/Pulley_Tool_NEMA14.stl) | 1        |          |   :x:   |       |
| [Pulley_Tool_NEMA17](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Feeder/Stls/Tools/Pulley_Tool_NEMA17.stl) | 1        |          |   :x:   |       |

# Enraged Rabbit Carrot Patch

![An assembled Enraged Rabbit Carrot Patch](/assets/blog/enraged-rabbit-carrot-feeder-1.1/enraged-rabbit-carrot-patch.jpg)

## Sourcing Parts

The [Enraged Rabbit Carrot Patch](https://github.com/EtteGit/EnragedRabbitProject) manages filament reels being used by the Enraged Rabbit Carrot Feeder.
Quantities are for 1 Patch. I should have enough parts for 2 patches.

### Fasteners

| Item                | Quantity | Received | Notes |
| ------------------- | -------- | -------- | ----- |
| M3 threaded inserts | 4        | 8        |       |
| M3x8 SHCS           | 2        | 4        |       |
| M3x16 SHCS          | 1        | 2        |       |
| M3x20 SHCS          | 1        | 2        |       |
| M5 nylock nuts      | 1        | 2        |       |
| M5x30 BHCS          | 1        | 2        |       |

### Misc

| Item                             | Quantity | Received | Notes |
| -------------------------------- | -------- | -------- | ----- |
| Bowden Clip                      | 2        | 4        |       |
| Bowden Fitting                   | 2        | 4        |       |
| PTFE Tube (4mm OD 3mm ID) - 30cm | 1        | 6m       |       |

### Motion

| Item          | Quantity | Received | Notes |
| ------------- | -------- | -------- | ----- |
| 608ZZ Bearing | 1        | 2        |       |

## Printing Parts

### Frame

| Item                                                                                                                 | Quantity | Material  |      Printed       | Notes |
| -------------------------------------------------------------------------------------------------------------------- | -------- | --------- | :----------------: | ----- |
| [Main_Body](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Patch/STLs/Main_Body.stl)               | 1        | Black ABS | :heavy_check_mark: |       |
| [Spool_Arm](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Patch/STLs/Spool_Arm.stl)               | 1        | Black ABS | :heavy_check_mark: |       |
| [Handle_0](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Patch/STLs/Handles/%5Ba%5D_Handle_0.stl) | 1        | Blue ABS  |        :x:         |       |
| [Feet](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Patch/STLs/%5Ba%5D_Feet_x2.stl)              | 2        | Black ABS | :heavy_check_mark: |       |
| [608_Adapter](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Patch/STLs/608_Adapter.stl)           | 1        | Black ABS | :heavy_check_mark: |       |

### Buffer Assembly

| Item                                                                                                                 | Quantity | Material  |      Printed       | Notes |
| -------------------------------------------------------------------------------------------------------------------- | -------- | --------- | :----------------: | ----- |
| [Buffer_Wheel](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Patch/STLs/%5Ba%5D_Buffer_Wheel.stl) | 1        | Black ABS | :heavy_check_mark: |       |
| [Buffer_Cross](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Patch/STLs/Buffer_Cross.stl)         | 1        | Black ABS | :heavy_check_mark: |       |
| [Latch](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Patch/STLs/%5Ba%5D_Latch_x3.stl)            | 3        | Black ABS | :heavy_check_mark: |       |

### Sliding Arm

| Item                                                                                                               | Quantity | Material  |      Printed       | Notes                    |
| ------------------------------------------------------------------------------------------------------------------ | -------- | --------- | :----------------: | ------------------------ |
| [Sliding_Arm](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Patch/STLs/%5Ba%5D_Sliding_Arm.stl) | 1        | Black ABS | :heavy_check_mark: |                          |
| [Ptfe_Entry](https://github.com/EtteGit/EnragedRabbitProject/blob/main/Carrot_Patch/STLs/Ptfe_Entry_ECAS.stl)      | 1        | Black ABS | :heavy_check_mark: | This is the ECAS version |

# Mods

## Printable Chain

The chain is smaller on the ERCF than the chain for the Voron build. I am not expecting to have any chain left over (especially as I am going to print Z chain) and rather than buying some more chain I will try printing it instead.

[Printable Chain](https://github.com/EtteGit/EnragedRabbitProject/tree/main/usermods/Printable_drag_chain)

## Easy BRD

My SKR 1.4 Turbo does not have enough Stepper Motor Drivers to run the ERCF, this is a board specifically designed to run the Carrot Feeder.

[Easy BRD](https://github.com/Tircown/ERCF-easy-brd)
