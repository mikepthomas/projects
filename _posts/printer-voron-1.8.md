---
title: Voron 1.8
heading: Building my first Voron printer
date: 2022-02-17
lastmod: 2026-06-16T21:25:51.914Z
author: Mike Thomas
description: The steps I have taken to print and source parts to assemble a Voron 1.8 3D printer.
preview: /assets/blog/printer-voron-1.8/voron-hero.jpg
slug: /projects/printer-voron-1.8
related:
  - /projects/voron-afterburner
  - /projects/voron-m4
  - /projects/printer-hypercube
  - /projects/nevermore-filter
  - /projects/printer-klipper-firmware
external:
  - https://www.vorondesign.com/voron1.8
  - https://mods.vorondesign.com
draft: false
tags:
  - CoreXY
  - Voron
categories:
  - 3D Printer
keywords:
  - Printer
promoted: true
---

# Table of contents

# Sourcing Parts

I had originally chosen parts for the [Hypercube](printer-hypercube) that will lead up to re-building it into a Voron 1.8. However, I have chosen to build a new printer rather than upgrade my existing one in case I need to reprint more parts. I have already sourced many of the parts on the [BOM from the configurator](https://www.vorondesign.com/voron1.8) and I will replace some with alternatives that I already have (see the notes columns for details).

The quantities here are from the 1.8 BOM, however I am planning on swapping out a few parts for the updated versions from the Trident. Therefore these quantities may not be accurate and I will also need to source more items for some modifications and future upgrades that I would like to implement.

## Fasteners

| Item                       | Quantity | Received | Notes                                      |
| -------------------------- | -------: | -------: | ------------------------------------------ |
| M5x40 SHCS                 |        8 |       29 |
| M5x30 BHCS                 |        6 |       15 |
| M5x16 BHCS                 |       67 |       69 |
| M5x10 BHCS                 |       71 |      104 |
| M5 Hexnut                  |        8 |       19 |
| M5 1mm Spacer              |       20 |       50 |
| M5 T-nut                   |       83 |      130 |
| M4x6 BHCS                  |        4 |       20 |
| M3x40 SHCS                 |        5 |       20 |
| M3x30 SHCS                 |       25 |       30 |
| M3x20 SHCS                 |       10 |       26 |
| M3x16 SHCS                 |       17 |       66 |
| M3x12 SHCS                 |       30 |       77 |
| M3x8 SHCS                  |      171 |      254 |
| M3x6 BHCS                  |       20 |       47 |
| M3 Hexnut                  |        7 |       50 |
| M3 Washer                  |       10 |       50 |
| M3 T-nut                   |      120 |      160 |
| M3 Hammer Head T-nuts      |       54 |       97 |
| M3 Threaded Insert         |       50 |       78 |
| M3 Knurled Nut (DIN 466-B) |    ~3~ 1 |        5 | Replacing 2 rear with M4s                  |
| M4 Knurled Nut (DIN 466-B) |        2 |        5 | Using these instead of 2 M3 at rear of bed |
| M2x10 Self-Tapping Screw   |        7 |       51 |
| Yellow Die Spring - M3     |        1 |       10 |

## Vibration Management

| Item                   | Quantity | Received | Notes |
| ---------------------- | -------: | -------: | ----- |
| Rubber Compressor Foot |        4 |        4 |

## Frame

![3D render of the Voron 1.8 Frame](/assets/blog/printer-voron-1.8/voron-design/frame.jpg 'Frame')

> Image © 2020 [Voron Design](https://www.vorondesign.com)

| Item                                     | Quantity | Received | Notes                            |
| ---------------------------------------- | -------: | -------: | -------------------------------- |
| DIN 3 Rails (35mm W) - 420mm             |        2 |        3 | BOM specifies 2 but manual has 3 |
| Misumi HFSB5-2020-290                    |        1 |        1 | In `LDO V1.8 300 Frame Kit`      |
| Misumi HFSB5-2020-420-TPW                |       10 |       10 | In `LDO V1.8 300 Frame Kit`      |
| Misumi HFSB5-2020-420                    |        1 |        1 | In `LDO V1.8 300 Frame Kit`      |
| Misumi HFSB5-2020-230                    |        2 |        2 | In `LDO V1.8 300 Frame Kit`      |
| Misumi HFSB5-2020-380                    |        1 |        1 | In `LDO V1.8 300 Frame Kit`      |
| Misumi HFSB5-2020-500-LTP-RCP-AV380-AP40 |        4 |        4 | In `LDO V1.8 300 Frame Kit`      |
| Misumi HFSB5-2020-200-TPW                |        2 |        2 | In `LDO V1.8 300 Frame Kit`      |
| Misumi HFSB5-2020-420-AH45-BH375         |        2 |        2 | In `LDO V1.8 300 Frame Kit`      |

![Starting assembly of the frame](/assets/blog/printer-voron-1.8/voron-frame.jpg 'Voron Frame')

I have looked into a few different options for a new frame for my 3D Printer and eventually settled on an LDO frame kit for a Voron 1.8. All these parts (Except for the DIN rails) come from this kit.

## Motion

![3D render of the Voron 1.8 Belt Path](/assets/blog/printer-voron-1.8/voron-design/belt-path.jpg 'Belt Path')

> Image © 2020 [Voron Design](https://www.vorondesign.com)

| Item                                       | Quantity | Received | Notes                                         |
| ------------------------------------------ | -------: | -------: | --------------------------------------------- |
| GT2 20T Pulley (5mm ID 6mm W)              |        3 |        3 |
| GT2 20T Toothed Idler (5mm ID 6mm W)       |        2 |        4 |
| F695 Bearing                               |       20 |       30 |
| LM8LUU Linear Bearing                      |        4 |        4 |
| TR8x4 Leadscrew Nut                        |        2 |        2 | Replaced the stock LDO Brass ones with Delrin |
| 5x30mm Shaft                               |        1 |        1 |
| BMG Extruder Components Kit                |        1 |        1 |
| Linear Rail MGN9H 350mm                    |        4 |        4 |
| Linear Shaft 8x320mm                       |        4 |        4 |
| GT2 Open Belt LL-2GT-6 (6mm wide) - 1890mm |        2 |        4 |

## Print Bed

![3D render of the Voron 1.8 Print Bed and Wire Path](/assets/blog/printer-voron-1.8/voron-design/print-bed-and-wire-path.jpg 'Print Bed and Wire Path')

> Image © 2020 [Voron Design](https://www.vorondesign.com)

| Item                                                        | Quantity | Received | Notes                                                         |
| ----------------------------------------------------------- | -------: | -------: | ------------------------------------------------------------- |
| 3M 468MP Adhesive Sheet - 12"x12"                           |        1 |        1 | Came with Energetic 300x300mm PEI Spring Steel Sheet + Magnet |
| PEI 0.04" Sheet - 12"x12"                                   |        1 |        1 | Came with Energetic 300x300mm PEI Spring Steel Sheet + Magnet |
| MIC6 5/16" Plate - 12"x12"                                  |        1 |        1 | Anodised Black                                                |
| Keenovo Silicone AC Heater w/ thermistor - 250x250mm (450W) |        1 |        1 | Keenovo 240V 600W 240x240mm                                   |

## Wires

| Item                                      | Quantity | Received | Notes              |
| ----------------------------------------- | -------: | -------: | ------------------ |
| Nylon Cable Ties 4"                       |       40 |      100 |
| 1/2" Braided Cable Sheathing (ft)         |        5 |       16 |
| 20AWG Silicone Cable (ft)                 |       10 |      137 | in various colours |
| 24AWG Silicone Cable (ft)                 |      100 |      177 | in various colours |
| Spade Crimp Terminal 4.8mm Female         |       10 |       20 |
| JST XH Connector Plug 4 Position          |        5 |       20 |
| JST XH Connector Plug 3 Position          |        4 |       20 |
| JST XH Connector Plug 2 Position          |        2 |       20 |
| JST XH Female Pin                         |       40 |      200 |
| MicroFit3 Connector Plug 4 Position       |        2 |       10 |
| MicroFit3 Connector Plug 3 Position       |        1 |       10 |
| MicroFit3 Connector Plug 2 Position       |        5 |       10 |
| MicroFit3 Connector Receptacle 4 Position |        2 |       10 |
| MicroFit3 Connector Receptacle 3 Position |        1 |       10 |
| MicroFit3 Connector Receptacle 2 Position |        5 |       10 |
| MicroFit3 Female Pin                      |       40 |      140 |
| MicroFit3 Male Pin                        |       40 |      140 |
| 10x11 Cable Chain - 1m                    |        2 |        2 |

## Electronics

![An LDO Motors V1/2 HT Motor Kit](/assets/blog/printer-voron-1.8/ldo-motors.jpg 'LDO Motors')

| Item                                 | Quantity | Received | Notes                                                                                                            |
| ------------------------------------ | -------: | -------: | ---------------------------------------------------------------------------------------------------------------- |
| NEMA17 Motor 17HS19-2004S            |        2 |        2 | Ordered some [LDO 42STH48-2004MAH(VRN) Stepper Motors] to replace the ones in the `LDO Voron V1/V2 HT Motor Kit` |
| SPDT KW10 Limit Micro Switch         |        3 |       30 |
| PL-08N Inductive Probe               |        1 |        1 | Purchased an Omron TL-Q5MC2. Going to replace with [Klicky Probe](#klicky-probe)                                 |
| E3D V6 Bowden Hotend Kit (24V)       |        1 |        1 |
| 40x40x20 Centrifugal Fan (24V)       |        1 |        1 | [GDSTime 4020 Blower Fan]                                                                                        |
| 40x40x10 Axial Fan (24V)             |        1 |        1 | [GDSTime 4010 Axial Fan]                                                                                         |
| Mini 12864 Display                   |        1 |        1 |
| Inlet Power Socket IEC320 C14        |        1 |        1 |
| Keystone CAT6 Insert (Optional)      |        1 |        2 | 1 Ethernet and 1 USB                                                                                             |
| 60x60x20 Fan (24V)                   |        2 |        2 | [GDSTime 6020 Axial Fans]                                                                                        |
| BigTreeTech SKR 1.4                  |        1 |        1 | I have the Turbo version                                                                                         |
| TMC2209 Stepper Motor Driver         |        5 |        5 |
| USB Cable A-male B-male              |        1 |        1 |
| Raspberry Pi 4                       |        1 |        1 | 4GB RAM Version                                                                                                  |
| Mean Well LRS-200-24 PSU             |        1 |        1 |
| Mean Well RS-25-5 PSU                |        1 |        1 |
| Omron G3A-210B-DC5 SSR               |        1 |        1 |
| DIN Rail Mount Bracket for G3A SSR   |        1 |        1 |
| ~BAT85 Diode~                        |      ~1~ |        7 | Not required as [Afterburner Toolhead PCB (ERCF)] and [LDO Toolhead PCB] has the BAT85 Diode integrated          |
| C13 Power Cord                       |        1 |        3 |
| Thermal Fuse (120C)                  |        1 |        5 |
| NEMA17 Motor 17HS08-1004S            |        1 |        1 | In `LDO Voron V1/V2 HT Motor Kit`                                                                                |
| NEMA17 TR8x4 300mm Linear Stepper    |        2 |        2 | In `LDO V1 Z Motor Kit`                                                                                          |
| BigTreeTech Smart Filament Sensor V1 |        2 |        2 |

[Afterburner Toolhead PCB (ERCF)]: voron-hardware#afterburner-toolhead-pcb-ercf
[GDSTime 4010 Axial Fan]: http://www.gdstime.com/pro1/66.html
[GDSTime 4020 Blower Fan]: http://www.gdstime.com/list_45/68.html
[GDSTime 6020 Axial Fans]: http://www.gdstime.com/pro1/78.html
[LDO 42STH48-2004MAH(VRN) Stepper Motors]: https://www.onetwo3d.co.uk/product/ldo-42sth48-2004mahvrn?wlr_ref=REF-ULH-QWV
[LDO Toolhead PCB]: https://docs.ldomotors.com/en/voron/toolhead_harness#the-toolhead-pcb-stealthburner-version 'LDO Toolhead Wiring Kit Toolhead PCB (Stealthburner Version)'

## Panels

![3D render of the Voron 1.8 Panels](/assets/blog/printer-voron-1.8/voron-design/panels.jpg 'Panels')

> Image © 2020 [Voron Design](https://www.vorondesign.com)

| Item                                 | Quantity | Received | Notes                                                                            |
| ------------------------------------ | -------: | -------: | -------------------------------------------------------------------------------- |
| Coroplast Sheet - 420x420x4 mm       |        1 |        1 | Brought 5 [A1 3mm Sheets] to cut to size and [1mm Foam Tape] to avoid vibrations |
| Coroplast Sheet - 435x435x4 mm       |        1 |        1 | Brought 5 [A1 3mm Sheets] to cut to size and [1mm Foam Tape] to avoid vibrations |
| Coroplast Sheet - 198x434x4 mm       |        1 |        1 | Brought 5 [A1 3mm Sheets] to cut to size and [1mm Foam Tape] to avoid vibrations |
| Coroplast Sheet - 246x434x4 mm       |        1 |        1 | Brought 5 [A1 3mm Sheets] to cut to size and [1mm Foam Tape] to avoid vibrations |
| Coroplast Sheet - 236x415x4 mm       |        1 |        1 | Brought 5 [A1 3mm Sheets] to cut to size and [1mm Foam Tape] to avoid vibrations |
| Coroplast Sheet - 242x46x4 mm        |        2 |        2 | Brought 5 [A1 3mm Sheets] to cut to size and [1mm Foam Tape] to avoid vibrations |
| Coroplast Sheet - 419x66x4 mm        |        1 |        1 | Brought 5 [A1 3mm Sheets] to cut to size and [1mm Foam Tape] to avoid vibrations |
| Acrylic Sheet Clear - 217x444x2.5 mm |        2 |        2 | 3mm thickness for Doors                                                          |
| Acrylic Sheet Clear - 434x444x2.5 mm |        2 |        2 | 3mm thickness for Sides                                                          |
| Acrylic Sheet Clear - 434x434x2.5 mm |        1 |        1 | 3mm thickness for Top                                                            |

[A1 3mm Sheets]: https://www.amazon.co.uk/gp/product/B016EMNWS4

## Misc

| Item                                 | Quantity | Received | Notes |
| ------------------------------------ | -------: | -------: | ----- |
| Fume Extractor Carbon Filter Element |        1 |        1 |
| 4mm Bowden Coupler                   |        1 |        4 |
| Bowden Tube (m)                      |        1 |        3 |
| 3M VHB Tape 5952                     |        1 |        1 |
| Loctite Blue Threadlocker Stick      |        1 |        1 |
| Mobil EP2 Grease                     |        1 |        1 |
| Tesa Wire Loom Harness Tape          |        1 |        1 |
| [1mm Foam Tape]                      |        1 |        1 |
| 6x3mm Neodimium Magnet               |        8 |       41 |
| PTFE Tube (4mm OD 3mm ID) - 1m       |        1 |        1 |

[1mm Foam Tape]: https://www.amazon.co.uk/gp/product/B076WTFWS5

# Assembling The Frame

![LDO Motors Frame Kit Assembled](/assets/blog/printer-voron-1.8/voron-frame-assembled.jpg 'Voron Frame Assembled')

## Parts Used

| Item                                     | Quantity |
| ---------------------------------------- | -------: |
| M5x16 BHCS                               |       20 |
| M5x30 BHCS                               |        4 |
| Misumi HFSB5-2020-420-TPW                |       10 |
| Misumi HFSB5-2020-500-LTP-RCP-AV380-AP40 |        4 |
| Rubber Compressor Foot                   |        4 |

# Printing Parts

All printed parts will be printed in eSun ABS+. The Voron team recommends an infill type of 40% of either Grid, Gyroid, Honeycomb, Triangle or Cubic. A layer height of 0.2mm and extrusion width of 0.4mm, with a wall count of 4 and top/bottom layers of 5.

## Tools

| Item                                                                                                                                                             | Quantity | Material                |  Time |   Size | Weight |  Cost |      Printed       | Notes                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------: | ----------------------- | ----: | -----: | -----: | ----: | :----------------: | ------------------------------------------- |
| [ba_pulley_align_tool](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Tools/ba_pulley_align_tool.stl)                                               |        1 | [eSun ABS+ (Black)]     |       |        |        |       |        :x:         | This is a [Trident R2] Part                 |
| [ptfe_jig_35mm](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Tools/ptfe_jig_35mm.stl)                                                             |        1 | [eSun ABS+ (Black)]     |       |        |        |       |        :x:         | This is a [Trident R2] Part                 |
| [x_rail_alignment_guide](https://github.com/VoronDesign/Voron-2/blob/9c0f3c257aeda370d4e160f2d2cd93bef3dfed73/STLs/VORON2.4/Tools/x_rail_alignment_guide_x4.stl) |    ~4~ 2 | [eSun ABS+ (Black)]     |   19m |  0.80m |  2.04g | £0.03 | :heavy_check_mark: | This is a [Voron 2.4] part                  |
| ~[v1.8_extrusion_drilling_jig](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Tools/v1.8_extrusion_drilling_jig.stl)~                                 |      ~1~ |                         |       |        |        |       |        :x:         | Not required as I brought my frame as a kit |
| [TensionMeter](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/Kruppes/Tension_Meter/TensionMeter.stl)                                        |        1 | [eSun ABS+ (Black)]     |   47m |  2.02m |  5.16g | £0.08 | :heavy_check_mark: | This is a Voron Users mod by `Kruppes`      |
| [lower_extrusion_alignment](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/natewalck/v1.8_Jigs/lower_extrusion_alignment.stl)                |        1 | [Tinmorry PETG (Black)] | 6h15m | 26.54m | 92.56g | £1.85 | :heavy_check_mark: | This is a Voron Users mod by `natewalck`    |

## Gantry

![3D render of the Voron 1.8 Gantry](/assets/blog/printer-voron-1.8/voron-design/gantry.jpg 'Gantry')

> Image © 2020 [Voron Design](https://www.vorondesign.com)

Some of the gantry parts (specifically the A/B Drive Units and Front Idlers) will be replaced with the upgraded versions from the Trident as they fit the 1.8 frame.

### :wrench: A/B Drive Units

![3D render of the Voron Trident r2 A/B Drive Units](/assets/blog/printer-voron-1.8/voron-design/ab-drive.jpg 'A/B Drive Units')

> Image © 2026 [Voron Design](https://www.vorondesign.com)

| Item                                                                                                                               | Quantity | Material                      |  Time |  Size | Weight |  Cost |      Printed       | Notes                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------- | -------: | ----------------------------- | ----: | ----: | -----: | ----: | :----------------: | -------------------------------------------------------------------------- |
| ~[a_drive_frame_lower](https://github.com/VoronDesign/Voron-Trident/blob/VTr1/STLs/Gantry/AB_Drive_Units/a_drive_frame_lower.stl)~ |      ~1~ | [eSun ABS+ (Black)]           | 3h11m | 8.07m | 20.57g | £0.34 | :heavy_check_mark: | This is a [Trident R1] Part                                                |
| ~[a_drive_frame_upper](https://github.com/VoronDesign/Voron-Trident/blob/VTr1/STLs/Gantry/AB_Drive_Units/a_drive_frame_upper.stl)~ |      ~1~ | [eSun ABS+ (Black)]           | 3h12m | 7.86m | 20.03g | £0.33 | :heavy_check_mark: | This is a [Trident R1] Part                                                |
| [a_stepper_lower](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Gantry/ba_drive_units/a_stepper_lower.stl)           |        1 | [eSun ABS+ (Black)]           |       |       |        |       |        :x:         | This is a [Trident R2] Part                                                |
| [a_stepper_upper](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Gantry/ba_drive_units/a_stepper_upper.stl)           |        1 | [eSun ABS+ (Black)]           |       |       |        |       |        :x:         | This is a [Trident R2] Part                                                |
| ~[b_drive_frame_lower](https://github.com/VoronDesign/Voron-Trident/blob/VTr1/STLs/Gantry/AB_Drive_Units/b_drive_frame_lower.stl)~ |      ~1~ | [eSun ABS+ (Black)]           | 3h06m | 7.57m | 19.29g | £0.32 | :heavy_check_mark: | This is a [Trident R1] Part                                                |
| ~[b_drive_frame_upper](https://github.com/VoronDesign/Voron-Trident/blob/VTr1/STLs/Gantry/AB_Drive_Units/b_drive_frame_upper.stl)~ |      ~1~ | [eSun ABS+ (Black)]           | 3h07m | 7.70m | 19.64g | £0.32 | :heavy_check_mark: | This is a [Trident R1] Part                                                |
| [b_stepper_lower](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Gantry/ba_drive_units/b_stepper_lower.stl)           |        1 | [eSun ABS+ (Black)]           |       |       |        |       |        :x:         | This is a [Trident R2] Part                                                |
| [b_stepper_upper](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Gantry/ba_drive_units/b_stepper_upper.stl)           |        1 | [eSun ABS+ (Black)]           |       |       |        |       |        :x:         | This is a [Trident R2] Part                                                |
| ~[circlip](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Gantry/ba_drive_units/circlip_x2.stl)~                      |      ~2~ | [eSun ABS+ (Black)]           |       |       |        |       |        :x:         | This is a [Trident R2] Part, Not required, for Double Shear Shaft Supports |
| ~[cover_bearing](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Gantry/ba_drive_units/%5Ba%5D_cover_bearing_x2.stl)~  |      ~2~ | [eSun ABS+ (Fire Engine Red)] |       |       |        |       |        :x:         | This is a [Trident R2] Part, Not required, for Double Shear Shaft Supports |
| [cover_logo](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Gantry/ba_drive_units/%5Ba%5D_cover_logo_x2.stl)          |        2 | [eSun ABS+ (Fire Engine Red)] |       |       |        |       |        :x:         | This is a [Trident R2] Part                                                |
| ~[wire_cover](https://github.com/VoronDesign/Voron-Trident/blob/VTr1/STLs/Gantry/AB_Drive_Units/%5Ba%5D_wire_cover.stl)~           |      ~1~ | [eSun ABS+ (Fire Engine Red)] |   38m | 1.27m |  3.25g | £0.05 | :heavy_check_mark: | This is a [Trident] Part                                                   |

![An A Drive Unit printed in ABS with different settings](/assets/blog/printer-voron-1.8/a-drive-abs-tuning.jpg 'A Drive ABS Tuning')

The lower A drive was the first time I have tried to print with ABS. The upper was printed after a few tweaks to my slicer settings and updates to my Marlin firmware configuration. I am now quite happy with the results and will carry on printing the rest of the parts.

#### Assembly

![Voron Trident AB Drive Units complete](/assets/blog/printer-voron-1.8/ab-drive-complete.jpg 'A/B Drive Complete')

##### Parts Used

| Item                          | Quantity |
| ----------------------------- | -------: |
| F695 Bearing                  |  ~12~ 16 |
| GT2 20T Pulley (5mm ID 6mm W) |        2 |
| M3 Threaded Insert            |    ~1~ 4 |
| M3x6 BHCS                     |        4 |
| M3x8 SHCS                     |        4 |
| ~M3x10 SHCS~                  |      ~1~ |
| M3x30 SHCS                    |    ~6~ 8 |
| M5 1mm Spacer                 |  ~12~ 16 |
| M5 Threaded Insert            |        4 |
| M5x30 BHCS                    |        4 |
| NEMA17 Motor 17HS19-2004S     |        2 |

> [!NOTE]
> I will upgrade these motors to [LDO Speedy Power Motors](https://www.onetwo3d.co.uk/product/ldo-stepper-motor-42sth48-2504ac?wlr_ref=REF-ULH-QWV) for both A and B Drives.

### :wrench: Front Idlers

![3D render of the Voron Trident r2 Front Idlers](/assets/blog/printer-voron-1.8/voron-design/front-idlers.jpg 'Front Idlers')

> Image © 2026 [Voron Design](https://www.vorondesign.com)

| Item                                                                                                                              | Quantity | Material                      |  Time |  Size | Weight |  Cost |      Printed       | Notes                       |
| --------------------------------------------------------------------------------------------------------------------------------- | -------: | ----------------------------- | ----: | ----: | -----: | ----: | :----------------: | --------------------------- |
| ~[front_idler_a](https://github.com/VoronDesign/Voron-Trident/blob/VTr1/STLs/Gantry/Front_Idlers/front_idler_a_x2.stl)~           |      ~2~ | [eSun ABS+ (Black)]           | 1h45m | 4.96m | 12.64g | £0.21 | :heavy_check_mark: | This is a [Trident R1] Part |
| ~[front_idler_b](https://github.com/VoronDesign/Voron-Trident/blob/VTr1/STLs/Gantry/Front_Idlers/front_idler_b_x2.stl)~           |      ~2~ | [eSun ABS+ (Black)]           | 1h11m | 2.91m |  7.43g | £0.12 | :heavy_check_mark: | This is a [Trident R1] Part |
| [idler_carrier_a](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Gantry/Front_Idlers/%5Ba%5D_idler_carrier_a_x2.stl) |        2 | [eSun ABS+ (Fire Engine Red)] |       |       |        |       |        :x:         | This is a [Trident R2] Part |
| [idler_carrier_b](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Gantry/Front_Idlers/%5Ba%5D_idler_carrier_b_x2.stl) |        2 | [eSun ABS+ (Fire Engine Red)] |       |       |        |       |        :x:         | This is a [Trident R2] Part |
| [idler_front](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Gantry/Front_Idlers/%5Ba%5D_idler_front_x2.stl)         |        2 | [eSun ABS+ (Fire Engine Red)] |       |       |        |       |        :x:         | This is a [Trident R2] Part |
| [idler_housing](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Gantry/Front_Idlers/idler_housing_x2.stl)             |        2 | [eSun ABS+ (Black)]           |       |       |        |       |        :x:         | This is a [Trident R2] Part |
| ~[tensioner_left](https://github.com/VoronDesign/Voron-Trident/blob/VTr1/STLs/Gantry/Front_Idlers/%5Ba%5D_tensioner_left.stl)~    |      ~1~ | [eSun ABS+ (Fire Engine Red)] |   56m | 2.52m |  6.43g | £0.10 | :heavy_check_mark: | This is a [Trident R1] Part |
| ~[tensioner_right](https://github.com/VoronDesign/Voron-Trident/blob/VTr1/STLs/Gantry/Front_Idlers/%5Ba%5D_tensioner_right.stl)~  |      ~1~ | [eSun ABS+ (Fire Engine Red)] |   57m | 2.52m |  6.43g | £0.10 | :heavy_check_mark: | This is a [Trident R1] Part |

#### Assembly

![Voron Trident Front Idlers](/assets/blog/printer-voron-1.8/front-idlers-complete.jpg 'Front Idlers Complete')

The screws on the front of the idlers move the tensioners forwards and backwards, this allows for easy adjustment of the belt tension.

##### Parts Used

| Item                             | Quantity |
| -------------------------------- | -------: |
| F695 Bearing                     |        4 |
| M3 Threaded Insert               |   ~2~ 10 |
| M3 Washer                        |        2 |
| M3x8 SHCS                        |        2 |
| M3x16 SHCS                       |        2 |
| M3x25 SHCS                       |        4 |
| M3x40 SHCS                       |    ~2~ 4 |
| M5 1mm Spacer                    |        4 |
| ~M5 Hexnut~                      |      ~2~ |
| M5x16 SHCS                       |        2 |
| ~M5x40 SHCS~                     |      ~2~ |
| PTFE Tube (4mm OD 3mm ID) - 35mm |        4 |

### :white_check_mark: Rear Crossbar

Both fully assembled AB Drive Units are required to install the rear crossbar.

#### Assembly

![Installed the rear crossbar](/assets/blog/printer-voron-1.8/rear-crossbar-installed.jpg 'Rear Crossbar Installed')

##### Parts Used

| Item                  | Quantity |
| --------------------- | -------: |
| M5 T-nut              |        8 |
| M5x10 BHCS            |        8 |
| Misumi HFSB5-2020-290 |        1 |

### :white_check_mark: Linear Rails

![Cleaning the bearings with IPA](/assets/blog/printer-voron-1.8/bearings-cleaning.jpg 'Bearings Cleaning')

The linear rails come delivered with a coating of oil to prevent rust during storage and shipping. This coating is not a lubricant and needs to be removed before applying a coating of grease to the bearing surfaces.

I carefully removed the carriages from the rails and soaked them in Isopropyl alcohol for a few hours, then let them air dry before applying Mobil EP2 grease with a syringe directly to the ball bearings. I then reassembled the rails and applied more grease through one of the mounting holes behind the carriage.

![Bearings assembled and ready for installation](/assets/blog/printer-voron-1.8/bearings-assembled.jpg 'Bearings Assembled')

#### Assembly

![Installed the front idlers and linear rails](/assets/blog/printer-voron-1.8/linear-rails-installed.jpg 'Linear Rails Installed')

##### Parts Used

| Item                    | Quantity |
| ----------------------- | -------: |
| Linear Rail MGN9H 350mm |        2 |
| M3 T-nut                |       20 |
| M3 Washer               |        1 |
| M3x8 SHCS               |       18 |
| M3x12 BHCS              |        1 |
| M5 T-nut                |       14 |
| M5x10 BHCS              |       13 |

## Z Axis

![3D render of the Voron 1.8 Z Axis](/assets/blog/printer-voron-1.8/voron-design/z-axis.jpg 'Z-Axis')

> Image © 2020 [Voron Design](https://www.vorondesign.com)

### :white_check_mark: Bed Frame

![3D render of the Voron 1.8 Bed Frame](/assets/blog/printer-voron-1.8/voron-design/bed-frame.jpg 'Bed Frame')

> Image © 2020 [Voron Design](https://www.vorondesign.com)

| Item                                                                                                        | Quantity | Material                      |  Time |  Size | Weight |  Cost |      Printed       | Notes                                               |
| ----------------------------------------------------------------------------------------------------------- | -------: | ----------------------------- | ----: | ----: | -----: | ----: | :----------------: | --------------------------------------------------- |
| ~[bed_mount_front](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bed/bed_mount_front.stl)~      |      ~1~ | [eSun ABS+ (Fire Engine Red)] | 2h53m | 9.92m | 25.28g | £0.41 | :heavy_check_mark: | Replaced later when [mounting the bed](#heated-bed) |
| [z_bearing_block_a](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bed/z_bearing_block_a_x2.stl) |        2 | [eSun ABS+ (Black)]           | 2h11m | 6.84m | 17.44g | £0.28 | :heavy_check_mark: |
| [z_bearing_block_b](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bed/z_bearing_block_b_x2.stl) |        2 | [eSun ABS+ (Black)]           | 2h11m | 6.84m | 17.44g | £0.28 | :heavy_check_mark: |

#### Assembly

![The Assembled Bed Frame](/assets/blog/printer-voron-1.8/bed-frame-assembled.jpg 'Bed Frame Assembled')

The bed frame will not only hold the bed, but will also be a base for the [Z endstop](#endstops), some [Wago mounts](#-wago-mounts) to connect the low voltage connections to the endstop and thermistor and the mains connections to the bed, and also [Bed Fans](#-bed-fans) to circulate hot air around to heat up the enclosure.

##### Parts Used

| Item                             | Quantity |
| -------------------------------- | -------: |
| LM8LUU Linear Bearing            |        4 |
| M5 T-nut                         |       10 |
| M5x10 BHCS                       |        8 |
| M5x16 BHCS                       |        6 |
| Misumi HFSB5-2020-200-TPW        |        2 |
| Misumi HFSB5-2020-420-AH45-BH375 |        2 |

### :wrench: Z Axis Rods

| Item                                                                                                              | Quantity | Material                      |  Time |   Size | Weight |  Cost |      Printed       | Notes                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------- | -------: | ----------------------------- | ----: | -----: | -----: | ----: | :----------------: | ----------------------------------------------------------------------------------------------------------------------- |
| [leadscrew_block](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bed/%5Ba%5D_leadscrew_block_x2.stl)   |        2 | [eSun ABS+ (Fire Engine Red)] | 1h21m |  3.73m |  9.51g | £0.15 | :heavy_check_mark: |
| [z_shaft_retainer](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bed/%5Ba%5D_z_shaft_retainer_x8.stl) |        8 | [eSun ABS+ (Black)]           |   23m |  0.87m |  2.22g | £0.04 | :heavy_check_mark: |
| [z_cover_rear](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Z_Assembly/%5Ba%5D_z_cover_rear.stl)   |        2 | [eSun ABS+ (Fire Engine Red)] | 1h53m |  4.66m | 11.88g | £0.19 |        :x:         | This is for mounting the rear stepper motor for the [Trident R2]. But will fit to replace the stock 1.8 `z_motor_mount` |
| ~[z_motor_mount](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bed/z_motor_mount_x2.stl)~             |      ~2~ | [eSun ABS+ (Fire Engine Red)] | 2h53m |  8.15m | 20.78g | £0.33 | :heavy_check_mark: |
| [z_lower_3hole](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Z_Assembly/z_lower_3hole.stl)         |        1 |                               |       |        |        |       |     :question:     | This is a [Trident R2] Part. May need to make some modifications for it to fit                                          |
| [z_stepper_rear](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Z_Assembly/z_stepper_rear.stl)       |        2 | [eSun ABS+ (Black)]           | 4h25m | 12.07m | 30.77g | £0.50 |        :x:         | This is for mounting the rear stepper motor for the [Trident R2]. But will fit to replace the stock 1.8 `z_motor_mount` |

#### Assembly

![The Z-Axis fully assembled](/assets/blog/printer-voron-1.8/z-axis-assembled.jpg 'Z Axis Assembled')

##### Parts Used

| Item                              | Quantity |
| --------------------------------- | -------: |
| Linear Shaft 8x320mm              |        4 |
| M2x10 Self-Tapping Screw          |        2 |
| M3 Nyloc Hexnut                   |        4 |
| M3 T-nut                          |        2 |
| M3 Threaded Insert                |        2 |
| M3x6 BHCS                         |        6 |
| ~M3x12 SHCS~                      |     ~12~ |
| M3x16 SHCS                        |       12 |
| M5 T-nut                          |       24 |
| M5x10 BHCS                        |  ~20~ 16 |
| M5x16 BHCS                        |    ~4~ 8 |
| NEMA17 TR8x4 300mm Linear Stepper |        2 |
| TR8x4 Leadscrew Nut               |        2 |

## X Axis

![3D render of the Voron 1.8 X Axis](/assets/blog/printer-voron-1.8/voron-design/x-axis.jpg 'X-Axis')

> Image © 2020 [Voron Design](https://www.vorondesign.com)

The X Axis was flipped on the Trident (linear rails are on the bottom of the extrusion like the V2, this will not work on the 1.8 as the guide rails are mounted to the bottom of the extrusion too). I had originally wanted to use the Trident toolhead carriage with a single MGN12 linear rail, however due to the changes on the X axis the endstops were moved to the XY Joints not the toolhead. Because of this I wouldn't have anywhere to mount my endstop so I am not using an MGN12 rail here and instead using the dual MGN9s of the original design.

### :white_check_mark: XY Joints

| Item                                                                                                                                            | Quantity | Material            |  Time |  Size | Weight |  Cost |      Printed       | Notes                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | -------: | ------------------- | ----: | ----: | -----: | ----: | :----------------: | --------------------------------------- |
| [cap](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Gantry/X_Axis/XY_Joint/cap_x2.stl)                                              |        2 | [eSun ABS+ (Black)] |   05m | 0.11m |  0.29g | £0.01 | :heavy_check_mark: |
| [xy_joint_left_lower](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Gantry/X_Axis/XY_Joint/xy_joint_left_lower.stl)                 |        1 | [eSun ABS+ (Black)] | 2h01m | 5.02m | 12.79g | £0.21 | :heavy_check_mark: |
| [xy_joint_left_upper](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Gantry/X_Axis/XY_Joint/xy_joint_left_upper.stl)                 |        1 | [eSun ABS+ (Black)] | 3h31m | 9.62m | 24.52g | £0.40 | :heavy_check_mark: |
| [xy_joint_right_lower](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Gantry/X_Axis/XY_Joint/xy_joint_right_lower.stl)               |        1 | [eSun ABS+ (Black)] | 2h08m | 5.29m | 13.48g | £0.22 | :heavy_check_mark: |
| [xy_joint_right_upper](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Gantry/X_Axis/XY_Joint/xy_joint_right_upper_generic_chain.stl) |        1 | [eSun ABS+ (Black)] | 3h31m | 9.37m | 23.90g | £0.39 | :heavy_check_mark: | This is the Generic Cable Chain Version |

#### Assembly

![X/Y Joints and Linear rails assembled on the Gantry](/assets/blog/printer-voron-1.8/xy-joints-assembled.jpg 'X/Y Joints Assembled')

The bolts on the linear rails and the X axis extrusion are left loose at this stage as they will need to be aligned when the X carriage is installed. I have left the little white plastic clips on the rails here so that the blocks do not fall off the ends of the linear rails.

##### Parts Used

| Item                                 | Quantity |
| ------------------------------------ | -------: |
| F695 Bearing                         |        4 |
| GT2 20T Toothed Idler (5mm ID 6mm W) |        2 |
| Linear Rail MGN9H 350mm              |        2 |
| M3 T-nut                             |       12 |
| M3 Threaded Insert                   |        3 |
| M3x8 SHCS                            |       20 |
| M5 1mm Spacer                        |        4 |
| M5 Hexnut                            |        6 |
| M5 T-nut                             |        4 |
| M5x16 BHCS                           |        4 |
| M5x30 BHCS                           |        2 |
| M5x40 SHCS                           |        6 |
| Misumi HFSB5-2020-380                |        1 |

### :white_check_mark: X Carriage

| Item                                                                                                                                         | Quantity | Material                      |  Time |  Size | Weight |  Cost |      Printed       | Notes |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------: | ----------------------------- | ----: | ----: | -----: | ----: | :----------------: | ----- |
| [belt_clamp](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Gantry/X_Axis/X_Carriage/%5Ba%5D_belt_clamp_x2.stl)                   |        2 | [eSun ABS+ (Fire Engine Red)] |   09m | 0.21m |  0.54g | £0.01 | :heavy_check_mark: |
| [probe_retainer_bracket](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Gantry/X_Axis/X_Carriage/probe_retainer_bracket.stl)      |        1 | [eSun ABS+ (Black)]           |   08m | 0.18m |  0.45g | £0.01 | :heavy_check_mark: |
| [x_carriage_frame_left](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Gantry/X_Axis/X_Carriage/x_carriage_frame_left.stl)        |        1 | [eSun ABS+ (Black)]           | 2h43m | 6.63m | 16.91g | £0.28 | :heavy_check_mark: |
| [x_carriage_frame_right](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Gantry/X_Axis/X_Carriage/x_carriage_frame_right_V1.8.stl) |        1 | [eSun ABS+ (Black)]           | 2h41m | 6.51m | 16.60g | £0.27 | :heavy_check_mark: |
| [x_carriage_pivot_block](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Gantry/X_Axis/X_Carriage/x_carriage_pivot_block.stl)      |        1 | [eSun ABS+ (Black)]           |   35m | 1.22m |  3.11g | £0.05 | :heavy_check_mark: |

#### Assembly

![X Carriage Installed and Gantry added to frame](/assets/blog/printer-voron-1.8/x-carriage-assembled.jpg 'X Carriage Assembled')

The stock design uses an inductive probe in the toolhead, either a PL-08N or an Omron TL-Q5MC2. I do have a XY-08N which is similar to the PL-08N, however, due to the close proximity to the hotend the inductive probe has a tendency to melt. Therefore I have chosen instead to use [Klicky Probe](#klicky-probe).

##### Parts Used

| Item                            | Quantity |
| ------------------------------- | -------: |
| Black 20AWG Silicone Cable (mm) |      300 |
| M2x10 Self-Tapping Screw        |        1 |
| M3 Hexnut                       |        3 |
| M3 Threaded Insert              |        6 |
| M3x8 SHCS                       |        8 |
| M3x10 SHCS                      |        2 |
| M3x12 SHCS                      |        2 |
| M3x16 SHCS                      |        2 |
| M3x30 SHCS                      |        3 |
| SPDT KW10 Limit Micro Switch    |        1 |

### Klicky Probe

Recommended upgrade to replace the PL-08N Inductive Probe which can be a bit unreliable with magnetic flexible build plates and have a tendency to melt being in such close proximity to the hotend.

#### :wrench: Dock

| Item                                                                                                                                                                                                        | Quantity | Material                      |  Time |  Size | Weight |  Cost |      Printed       | Notes                                |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------: | ----------------------------- | ----: | ----: | -----: | ----: | :----------------: | ------------------------------------ |
| [Dock_sidemount_fixed_v2](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/JosAr/Klicky-Probe/Printers/v1.8_v2.4_Legacy_Trident/v1.8_v2.4_Legacy_Trident_STL/Dock_sidemount_fixed_v2.stl) |        1 | [eSun ABS+ (Black)]           | 1h46m | 5.82m | 14.83g | £0.24 | :heavy_check_mark: | This is a Voron Users mod by `JosAr` |
| [Dock_sidemount_left_v2](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/JosAr/Klicky-Probe/Printers/v1.8_v2.4_Legacy_Trident/v1.8_v2.4_Legacy_Trident_STL/Dock_sidemount_left_v2.stl)   |        1 | [eSun ABS+ (Black)]           | 1h12m | 3.77m |  9.62g | £0.16 | :heavy_check_mark: | This is a Voron Users mod by `JosAr` |
| [Dock_sidemount_right_v2](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/JosAr/Klicky-Probe/Printers/v1.8_v2.4_Legacy_Trident/v1.8_v2.4_Legacy_Trident_STL/Dock_sidemount_right_v2.stl) |        1 | [eSun ABS+ (Black)]           | 1h12m | 3.77m |  9.62g | £0.16 | :heavy_check_mark: | This is a Voron Users mod by `JosAr` |
| [Probe_Dock_v2.1](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/JosAr/Klicky-Probe/Base_STL/Probe_Dock_v2.1.stl)                                                                       |        1 | [eSun ABS+ (Fire Engine Red)] |   28m | 1.13m |  2.87g | £0.05 | :heavy_check_mark: | This is a Voron Users mod by `JosAr` |

##### Assembly

###### Parts Used

| Item                   | Quantity |
| ---------------------- | -------: |
| 6x3mm Neodimium Magnet |        1 |
| M3 Threaded Insert     |        4 |
| M3x10 SHCS             |        2 |
| M3x18 SHCS             |        2 |
| Super Glue             |        1 |

#### :white_check_mark: Probe

| Item                                                                                                                                                                                                        | Quantity | Material                      | Time |  Size | Weight |  Cost |      Printed       | Notes                                |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------: | ----------------------------- | ---: | ----: | -----: | ----: | :----------------: | ------------------------------------ |
| [KlickyProbe_v2](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/JosAr/Klicky-Probe/Base_STL/KlickyProbe_v2.stl)                                                                         |        1 | [eSun ABS+ (Fire Engine Red)] |  32m | 0.93m |  2.36g | £0.04 | :heavy_check_mark: | This is a Voron Users mod by `JosAr` |
| [Switch_extender](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/JosAr/Klicky-Probe/Base_STL/Switch_extender.stl)                                                                       |        1 | [eSun ABS+ (Fire Engine Red)] |      |       |        |       |        :x:         | This is a Voron Users mod by `JosAr` |
| [KlickyProbe_AB_mount_v2](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/JosAr/Klicky-Probe/Printers/v1.8_v2.4_Legacy_Trident/v1.8_v2.4_Legacy_Trident_STL/KlickyProbe_AB_mount_v2.stl) |        1 | [eSun ABS+ (Black)]           |  50m | 1.40m |  3.57g | £0.06 | :heavy_check_mark: | This is a Voron Users mod by `JosAr` |

##### Assembly

![Klicky Probe installed on the printer](/assets/blog/printer-voron-1.8/klicky-probe.jpg 'Klicky Probe')

###### Parts Used

| Item                            | Quantity |
| ------------------------------- | -------: |
| Black 20AWG Silicone Cable (mm) |      300 |
| 6x3mm Neodimium Magnet          |        7 |
| M2x10 Self-Tapping Screw        |        2 |
| Nylon Cable Ties 4"             |        1 |
| SPDT KW10 Limit Micro Switch    |        1 |
| Super Glue                      |        1 |

#### Tools

| Item                                                                                                                                                                                                                  | Quantity | Material | Time | Size | Weight | Cost | Printed | Notes                                |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------: | -------- | ---: | ---: | -----: | ---: | :-----: | ------------------------------------ |
| [Probe_magnet_holder](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/JosAr/Klicky-Probe/Base_STL/Probe_magnet_holder.stl)                                                                         |        1 |          |      |      |        |      |   :x:   | This is a Voron Users mod by `JosAr` |
| [Probe_magnet_pressfit_helper](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/JosAr/Klicky-Probe/Base_STL/Probe_magnet_pressfit_helper.stl)                                                       |        1 |          |      |      |        |      |   :x:   | This is a Voron Users mod by `JosAr` |
| [Probe_pressfit_holder](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/JosAr/Klicky-Probe/Base_STL/Probe_pressfit_holder.stl)                                                                     |        1 |          |      |      |        |      |   :x:   | This is a Voron Users mod by `JosAr` |
| [Mount_magnet_holder](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/JosAr/Klicky-Probe/Printers/v1.8_v2.4_Legacy_Trident/v1.8_v2.4_Legacy_Trident_STL/Mount_magnet_holder.stl)                   |        1 |          |      |      |        |      |   :x:   | This is a Voron Users mod by `JosAr` |
| [Mount_magnet_pressfit_helper](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/JosAr/Klicky-Probe/Printers/v1.8_v2.4_Legacy_Trident/v1.8_v2.4_Legacy_Trident_STL/Mount_magnet_pressfit_helper.stl) |        1 |          |      |      |        |      |   :x:   | This is a Voron Users mod by `JosAr` |
| [Mount_pressfit_holder](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/JosAr/Klicky-Probe/Printers/v1.8_v2.4_Legacy_Trident/v1.8_v2.4_Legacy_Trident_STL/Mount_pressfit_holder.stl)               |        1 |          |      |      |        |      |   :x:   | This is a Voron Users mod by `JosAr` |

### PCB Klicky

This will replace the [Klicky Probe](#klicky-probe) as I have found that my printed probe does not quite sit flush on the toolhead as the magnets are not fully pressed into the printed parts.

#### :negative_squared_cross_mark: Dock

| Item                                                                                                               | Quantity | Material                      | Time | Size | Weight | Cost | Printed | Notes                     |
| ------------------------------------------------------------------------------------------------------------------ | -------: | ----------------------------- | ---: | ---: | -----: | ---: | :-----: | ------------------------- |
| [dock-front_insert](https://github.com/tanaes/whopping_Voron_mods/blob/main/pcb_klicky/STLs/dock-front_insert.stl) |        1 | [eSun ABS+ (Fire Engine Red)] |      |      |        |      |   :x:   | This is a mod by `tanaes` |

#### :negative_squared_cross_mark: Probe

| Item                                                                                                             | Quantity | Material                      | Time | Size | Weight | Cost | Printed | Notes                                                                                    |
| ---------------------------------------------------------------------------------------------------------------- | -------: | ----------------------------- | ---: | ---: | -----: | ---: | :-----: | ---------------------------------------------------------------------------------------- |
| [AB_mount-heatset](https://github.com/tanaes/whopping_Voron_mods/blob/main/pcb_klicky/STLs/AB_mount-heatset.stl) |        1 | [eSun ABS+ (Black)]           |      |      |        |      |   :x:   | This is a mod by `tanaes`                                                                |
| [probe-heatset](https://github.com/tanaes/whopping_Voron_mods/blob/main/pcb_klicky/STLs/probe-heatset.stl)       |        1 | [eSun ABS+ (Fire Engine Red)] |      |      |        |      |   :x:   | This is a mod by `tanaes`. For standard size switch, may need to swap out for XL version |

### :white_check_mark: Belts

#### Assembly

![Belts routed and Installed](/assets/blog/printer-voron-1.8/belts-installed.jpg 'Belts Installed')

The belts are routed in a layout that is known as [CoreXY](https://corexy.com/theory.html). When one motor rotates the toolhead will move diagonally, when both motors rotate in the same direction the toolhead will move in the X axis and when both motors rotate in opposite directions the toolhead will move in the Y axis.

##### Parts Used

| Item                                       | Quantity |
| ------------------------------------------ | -------: |
| GT2 Open Belt LL-2GT-6 (6mm wide) - 1890mm |        2 |

## AfterBurner

![3D render of the Voron AfterBurner Assembled](/assets/blog/voron-afterburner/voron-design/afterburner-assembled.jpg 'AfterBurner Assembled')

> Image © 2021 [Voron Design](https://www.vorondesign.com/)

I built the Afterburner toolhead but will eventually add the [StealthBurner Main Body](voron-stealthburner#stealthburner). However, I will keep the original Afterburner extruder, the Clockwork 1 rather than upgrade to Clockwork 2, There are a number of reasons for deciding this:

1. I was planning on adding the [AB-BN By Badnoob](https://github.com/VoronDesign/VoronUsers/tree/master/printer_mods/Badnoob/AB-BN) for a larger cooling fan, this was integrated into the design of the StealthBurner.
2. I want to add the filament sensor for the [Enraged Rabbit Carrot Feeder](enraged-rabbit-carrot-feeder-1.1) which is not currently compatible with Clockwork 2.
3. I want to add the [ERCF Afterburner Toolhead PCB](voron-afterburner#toolhead-pcb-1) which is also not currently compatible with Clockwork 2.
4. The StealthBurner has an integrated mount for an [ADXL345 for Klipper Input Shaper](https://www.klipper3d.org/Measuring_Resonances.html).
5. The StealthBurner also integrates some cool RGB LEDs (and who doesn't like a bit of RGB?).

[Assembly of the parts can be found on its own separate page](voron-afterburner).

## Endstops

### :wrench: Y Endstop

| Item                                                                                                                         | Quantity | Material                      | Time |  Size | Weight |  Cost |      Printed       | Notes                                                               |
| ---------------------------------------------------------------------------------------------------------------------------- | -------: | ----------------------------- | ---: | ----: | -----: | ----: | :----------------: | ------------------------------------------------------------------- |
| ~[y_bumper](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Gantry/ba_drive_units/%5Ba%5D_y_bumper.stl)~         |      ~1~ | [eSun ABS+ (Fire Engine Red)] |      |       |        |       |        :x:         | This is a [Trident R2] Part, Not required, only for X/Y Endstop PCB |
| ~[y_endstop_housing](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Gantry/AB_Drive_Units/y_endstop_housing.stl)~ |      ~1~ | [eSun ABS+ (Fire Engine Red)] |  33m | 1.41m |  3.59g | £0.06 | :heavy_check_mark: | Replaced by `y_endstop_pod`                                         |
| [y_endstop_pod](https://github.com/VoronDesign/Voron-Trident/blob/main/STLs/Gantry/ba_drive_units/%5Ba%5D_y_endstop_pod.stl) |        1 | [eSun ABS+ (Fire Engine Red)] |      |       |        |       |        :x:         | This is a [Trident R2] Part                                         |

#### Assembly

![Y endstop attached to the frame](/assets/blog/printer-voron-1.8/y-endstop.jpg 'Y Endstop')

As I am using the Trident A/B Drive Units, I have had to move the Y Endstop to the opposite side of the machine to allow space for the toolhead wires to pass through the wire cover. The side panels will have 1mm foam tape on them and therefore, should allow enough clearance for the endstop wires to tuck between the panel and the outside of the extrusion. The wire will then be bundled with the B Motor wires down into the electronics compartment.

##### Parts Used

| Item                         | Quantity |
| ---------------------------- | -------: |
| 24AWG PTFE Cable (Black)     |    500mm |
| M2x10 Self-Tapping Screw     |        2 |
| ~M3x16 SHCS~                 |      ~1~ |
| M5x16 BHCS                   |        1 |
| SPDT KW10 Limit Micro Switch |        1 |

### :white_check_mark: Z Endstop

I am not going to print the stock Z endstop, I will replace it with the `Sexbolt Z Endstop` which uses an enclosed bolt with sleeved bearings.

| Item                                                                                                                                                      | Quantity | Material            |  Time |  Size | Weight |  Cost |      Printed       | Notes                                    |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | -------: | ------------------- | ----: | ----: | -----: | ----: | :----------------: | ---------------------------------------- |
| [EndstopHousing](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/hartk1213/Voron2.4_SexBolt_ZEndstop/STLs/EndstopHousingVoronLogo.stl) |        1 | [eSun ABS+ (Black)] | 1h17m | 3.03m |  7.72g | £0.13 | :heavy_check_mark: | This is a Voron Users mod by `hartk1213` |
| ~[nozzle_probe](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Z_Endstop/nozzle_probe.stl)~                                                    |      ~1~ |                     |       |       |        |       |        :x:         |

### Assembly

![Z endstop based on a PCB](/assets/blog/printer-voron-1.8/sexbolt-z-endstop.jpg 'Sexbolt Z Endstop')

#### Parts Used

| Item                           | Quantity |
| ------------------------------ | -------: |
| 5x7x8 Sleeve Bearings          |        2 |
| 5mmx20mm Binding Screw         |        1 |
| 6mmx5mm Stainless Steel Spring |        1 |
| M2x10 Self-Tapping Screw       |        4 |
| M4x8 SHCS                      |        1 |
| M3 T-nut                       |        2 |
| M3x20 SHCS                     |        2 |
| Microswitch Z Endstop PCB      |        1 |

## Wire Path

### :white_check_mark: Cable Clips

Clips to route zip ties through 3 hole cable chain to attach to 2020 extrusion.

| Item                                                                                                                                                                                                      | Quantity | Material            | Time |  Size | Weight |  Cost |      Printed       | Notes                                  |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------: | ------------------- | ---: | ----: | -----: | ----: | :----------------: | -------------------------------------- |
| [chain_wire_anchor](https://github.com/VoronDesign/Voron-Trident/blob/VTr1/STLs/Gantry/chain_wire_anchor_3hole_x2.stl)                                                                                    |        2 | [eSun ABS+ (Black)] |  08m | 0.27m |  0.69g | £0.01 | :heavy_check_mark: | This is a [Trident R1] Part            |
| [Triangle_Hole_Pattern_End_Mount_to_2020](https://github.com/VoronDesign/VoronUsers/blob/master/legacy_printers/printer_mods/bryansj/Befenybay_Chain_Anchors/Triangle_Hole_Pattern_End_Mount_to_2020.stl) |        2 | [eSun ABS+ (Black)] |  04m | 0.10m |  0.26g | £0.01 | :heavy_check_mark: | This is a Voron Users mod by `bryansj` |

### :white_check_mark: Cable Chains

I may want to have the ends of the cable chains printed in accent colour so may print the ends from these mods.

I will also need 2 more ends for the Z chain once I have made the neccessary changes to the Trident mount.

There are versions for 3 hole and 2 hole (3 hole can be fixed firmly to printed parts with 3 screws and the two hole versions can be fixed to 2020 extrusion easier)

| Item                                                                                                                                                        | Quantity | Material                      | Time | Size | Weight | Cost | Printed | Notes                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | -------: | ----------------------------- | ---: | ---: | -----: | ---: | :-----: | --------------------------------------- |
| [fixed_end](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/hymness1/10x11mm_chain_VSW/STLs/fixed_end.stl)                               |        2 | [eSun ABS+ (Fire Engine Red)] |      |      |        |      |   :x:   | This is a Voron Users mod by `hymness1` |
| [unfixed_end](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/hymness1/10x11mm_chain_VSW/STLs/unfixed_end.stl)                           |        2 | [eSun ABS+ (Fire Engine Red)] |      |      |        |      |   :x:   | This is a Voron Users mod by `hymness1` |
| [10x11-chain-endcap1](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/mjoaris/10x11_Cable_Chain_Endcaps/10x11-chain-endcap1_support.STL) |        1 | [eSun ABS+ (Fire Engine Red)] |      |      |        |      |   :x:   | This is a Voron Users mod by `mjoaris`  |
| [10x11-chain-endcap2](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/mjoaris/10x11_Cable_Chain_Endcaps/10x11-chain-endcap2_support.STL) |        1 | [eSun ABS+ (Fire Engine Red)] |      |      |        |      |   :x:   | This is a Voron Users mod by `mjoaris`  |

#### Assembly

![Routing the wires to the toolhead using Cable Chains](/assets/blog/printer-voron-1.8/cable-chains.jpg 'Cable Chains')

I have applied some Super Lube PTFE grease to the silicone cables inside the cable chains and anchored the cables at each end with cable ties using the chain wire anchors from the Trident r1 update.
As I am using multi coloured cables I have also added a bit of cable sleeving over the bare wires between the chains and into the rear electronics compartment these are also held in place with the cable ties at the end of the cable chains, and do not run through the chain.

I have purchased the [LDO Toolhead Wiring Kit](https://docs.ldomotors.com/en/voron/toolhead_harness) which contains PTFE coated wire to replace the silicone wiring harness I made when it eventually breaks.

##### X Axis Chain

| Item                         | Quantity |
| ---------------------------- | -------: |
| 1/2" Braided Cable Sheathing |    150mm |
| 10x11 Cable Chain            |    350mm |
| M3 T-nut                     |        1 |
| M3x8 FHCS                    |        4 |
| Nylon Cable Ties 4"          |        1 |

##### Y Axis Chain

| Item                         | Quantity |
| ---------------------------- | -------: |
| 1/2" Braided Cable Sheathing |    250mm |
| 10x11 Cable Chain            |    500mm |
| M3 T-nut                     |        1 |
| M3x8 FHCS                    |        4 |
| Nylon Cable Ties 4"          |        1 |

##### Main Toolhead connector

| Item                                 | Quantity |
| ------------------------------------ | -------: |
| 20AWG PTFE Cable (Black)             |   2200mm |
| 20AWG PTFE Cable (Red)               |   2200mm |
| 20AWG PTFE Cable (White)             |   2200mm |
| 24AWG PTFE Cable (Black)             |   4400mm |
| 24AWG PTFE Cable (Blue)              |   6600mm |
| 24AWG PTFE Cable (Green)             |   6600mm |
| 24AWG PTFE Cable (Red)               |   2200mm |
| 24AWG PTFE Cable (White)             |   4400mm |
| JST XH Connector Plug 2 Position     |        5 |
| JST XH Connector Plug 3 Position     |        1 |
| JST XH Connector Plug 4 Position     |        1 |
| MicroFit3 Connector Plug 14 Position |        1 |

##### ERCF Connector

| Item                                | Quantity |
| ----------------------------------- | -------: |
| 24AWG PTFE Cable (Red)              |   2200mm |
| 24AWG PTFE Cable (Yellow)           |   2200mm |
| JST XH Connector Plug 3 Position    |        1 |
| MicroFit3 Connector Plug 2 Position |        1 |

##### Neopixel Cable

| Item                                | Quantity |
| ----------------------------------- | -------: |
| 24AWG PTFE Cable (Black)            |   2200mm |
| 24AWG PTFE Cable (Red)              |   2200mm |
| 24AWG PTFE Cable (Yellow)           |   2200mm |
| JST XH Connector Plug 3 Position    |        1 |
| MicroFit3 Connector Plug 3 Position |        1 |

### :negative_squared_cross_mark: LDO Toolhead Breakout PCB Bracket

A bracket to hold the LDO Breakout PCB, the PCB converts the 14 pin connector from the toolhead to separate connectors making it a little easier to connect to the MCU.

| Item                                                                                                                            | Quantity | Material            | Time |  Size | Weight |  Cost |      Printed       | Notes |
| ------------------------------------------------------------------------------------------------------------------------------- | -------: | ------------------- | ---: | ----: | -----: | ----: | :----------------: | ----- |
| [toolhead_breakout_pcb_bracket](https://github.com/MotorDynamicsLab/LDOVoron2/blob/main/STLs/toolhead_breakout_pcb_bracket.stl) |        1 | [eSun ABS+ (Black)] |  36m | 1.46m |  3.72g | £0.06 | :heavy_check_mark: |
| [din_clip](https://github.com/VoronDesign/Voron-Parts/blob/main/DIN_Mounts/din_clip.stl)                                        |        1 | [eSun ABS+ (Black)] |  45m | 1.99m |  5.06g | £0.08 | :heavy_check_mark: |

### :white_check_mark: Wire Management

It appears that these parts are not specified in the manual, I will use them for the A/B Motor wires and to bring the toolhead wires down to the rear electronics compartment.

| Item                                                                                                             | Quantity | Material            | Time |  Size | Weight |  Cost |      Printed       | Notes |
| ---------------------------------------------------------------------------------------------------------------- | -------: | ------------------- | ---: | ----: | -----: | ----: | :----------------: | ----- |
| [wire_anchor](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/wire_anchor_x2.stl) |        3 | [eSun ABS+ (Black)] |  17m | 0.63m |  1.60g | £0.03 | :heavy_check_mark: |

#### Assembly

##### Parts Used

| Item                  | Quantity |
| --------------------- | -------: |
| M3 Hammer Head T-nuts |        6 |
| M3x8 BHCS             |        6 |
| Nylon Cable Ties 4"   |        6 |

### :wrench: LED Strips

I plan to mount LED Neopixel Strips to the inside of the top extrusions using Modular clips.

![The Corner Cable Cover Mod to hide LED Strip cables around the corner extrusions](/assets/blog/printer-voron-1.8/corner-cable-cover.jpg 'Corner Cable Cover')

To hide the cables for the LED strip I will also use a cover around the top corners of the printer

| Item                                                                                                                                                                          | Quantity | Material                      |  Time |  Size | Weight |  Cost |      Printed       | Notes                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------: | ----------------------------- | ----: | ----: | -----: | ----: | :----------------: | ------------------------------------------------------------- |
| [LED_Bar_Clip](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/eddie/LED_Bar_Clip/LED_Bar_Clip_Misumi_version2.stl)                                        |        ? | [eSun ABS+ (Black)]           |       |       |        |       |        :x:         | This is a Voron Users mod by `eddie`                          |
| ~[light_bar](https://github.com/VoronDesign/Voron-Switchwire/blob/master/STL/Panel_Mounting/light_bar_x2.stl)~                                                                |      ~2~ | [eSun ABS+ (Black)]           |       |       |        |       |        :x:         | This is a [Switchwire] Part. Will replace with `LED_Bar_Clip` |
| [top_corner_cable_hide_left](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/samwiseg0/corner_cable_hide/STLs/%5Ba%5D_top_corner_cable_hide_left_x2.stl)   |        1 | [eSun ABS+ (Fire Engine Red)] | 1h28m | 3.83m |  9.76g | £0.16 | :heavy_check_mark: | This is a Voron Users mod by `samwiseg0`                      |
| [top_corner_cable_hide_right](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/samwiseg0/corner_cable_hide/STLs/%5Ba%5D_top_corner_cable_hide_right_x2.stl) |        1 | [eSun ABS+ (Fire Engine Red)] | 1h29m | 3.83m |  9.76g | £0.16 | :heavy_check_mark: | This is a Voron Users mod by `samwiseg0`                      |

#### Assembly

##### Parts Used

| Item                       | Quantity |
| -------------------------- | -------: |
| LED Neopixel Strip (300mm) |        2 |
| M3 Hammer Head T-nuts      |        8 |
| M3x8 SHCS                  |        8 |

I will also use some extrusion slot covers to hold the LED strip cables inside the rear of the front top extrusion like so:

![Rear of the Corner Cable Covers showing holes to route the cables](/assets/blog/printer-voron-1.8/corner-cable-cover-rear.jpg 'Corner Cable Cover Rear')

## Bottom Compartment

![3D render of the Voron 1.8 Skirts and Bottom Compartment](/assets/blog/printer-voron-1.8/voron-design/skirts-and-bottom-compartment.jpg 'Skirts and Bottom Compartment')

> Image © 2020 [Voron Design](https://www.vorondesign.com)

The bottom compartment is designed to hold the high voltage components such as the main power supply, the power supply for the Raspberry Pi and Neopixel light strips, and Solid State Relay (SSR) for the heated bed. I will also be placing a [BigTreeTech 24V UPS module](#-btt-ups-24v-din-mount) to add capacators across the 24V supply to smooth out the power supplying the MCUs.

### :white_check_mark: Skirts

| Item                                                                                                                              | Quantity | Material                      |  Time |   Size | Weight |  Cost |      Printed       | Notes                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------- | -------: | ----------------------------- | ----: | -----: | -----: | ----: | :----------------: | ----------------------------------------------------------------------------------------- |
| ~[keystone_blank_insert](https://github.com/VoronDesign/Voron-Trident/blob/VTr1/STLs/Skirt/%5Ba%5D_keystone_blank_insert_x2.stl)~ |      ~2~ |                               |       |        |        |       |        :x:         | This is a [Trident] Part. Not required as I am using both keystone spaces                 |
| ~[skirt_300_left](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bottom_Skirts/skirt_300_left_x3.stl)~                 |      ~3~ | [eSun ABS+ (Fire Engine Red)] | 3h52m | 12.44m | 31.72g | £0.51 | :heavy_check_mark: | Will be replaced by `Mesh Skirts`                                                         |
| [skirt_300_left](https://github.com/mikepthomas/3dprinting/blob/main/Designs/Voron%201.8%20Skirt%20Mesh/skirt_300_left_x3.3mf)    |        3 | [eSun ABS+ (Black)]           |       |        |        |       |        :x:         |
| [skirt_300_power](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bottom_Skirts/skirt_300_power.stl)                    |        1 | [eSun ABS+ (Fire Engine Red)] | 3h35m | 11.95m | 30.48g | £0.49 | :heavy_check_mark: |
| ~[skirt_300_right](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bottom_Skirts/skirt_300_right_x4.stl)~               |      ~4~ | [eSun ABS+ (Fire Engine Red)] | 3h53m | 12.44m | 31.72g | £0.51 | :heavy_check_mark: | Will be replaced by `Mesh Skirts`                                                         |
| [skirt_300_right](https://github.com/mikepthomas/3dprinting/blob/main/Designs/Voron%201.8%20Skirt%20Mesh/skirt_300_right_x4.3mf)  |        4 | [eSun ABS+ (Black)]           |       |        |        |       |        :x:         |
| ~[skirt_middle](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Bottom_Skirts/skirt_middle_x3.stl)~                     |      ~3~ | [eSun ABS+ (Fire Engine Red)] | 2h25m |  7.24m | 18.45g | £0.30 | :heavy_check_mark: | Will be replaced by `Mesh Skirts`                                                         |
| [skirt_middle](https://github.com/mikepthomas/3dprinting/blob/main/Designs/Voron%201.8%20Skirt%20Mesh/skirt_middle_x3.3mf)        |        3 | [eSun ABS+ (Black)]           |       |        |        |       |        :x:         |
| [foot_spacer](https://github.com/VoronDesign/Voron-1/blob/Voron1.6/STLs/Bottom_Skirts/foot_spacer_x4.stl)                         |        4 | [eSun ABS+ (Black)]           |   52m |  2.17m |  5.53g | £0.09 | :heavy_check_mark: | This is a [Voron 1.6] Part. Required to raise the printer up and allow Display to swivel. |

#### Assembly

![Power switch and keystone jacks added to the skirt](/assets/blog/printer-voron-1.8/power-skirt.jpg 'Power Skirt')

Before attaching the power skirt to the printer the power socket and Keystone inserts are installed into the part.

![Skirts Installed on the bottom of the printer](/assets/blog/printer-voron-1.8/skirts-installed.jpg 'Skirts Installed')

The skirts will be updated to add mesh using the method decribed in [Eddie the Engineer's Youtube Video](https://www.youtube.com/watch?v=K6sHfXldK4k).

![Slicer Preview](https://github.com/mikepthomas/3dprinting/raw/main/Designs/Voron%201.8%20Skirt%20Mesh/slicer-preview.png 'Voron Skirt Mesh')

##### Parts Used

| Item                          | Quantity |
| ----------------------------- | -------: |
| Inlet Power Socket IEC320 C14 |        1 |
| M3 T-nut                      |       22 |
| M3x8 SHCS                     |       22 |
| Keystone CAT6 Insert          |        1 |
| Keystone USB Insert           |        1 |
| M3 Threaded Insert            |        8 |

### :white_check_mark: Display Module

Modified mount for the display allowing it to be tilted and angled.

| Item                                                                                                                                                                      | Quantity | Material                      |  Time |  Size | Weight |  Cost |      Printed       | Notes                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------: | ----------------------------- | ----: | ----: | -----: | ----: | :----------------: | ------------------------------------------------------------------------------------------------------------------------ |
| [Case_arm](https://github.com/VoronDesign/VoronUsers/blob/master/legacy_printers/printer_mods/Iakabos/Mini12864_display_mount/Case_arm.stl)                               |        1 | [eSun ABS+ (Black)]           |   41m | 1.92m |  4.91g | £0.08 | :heavy_check_mark: | This is a Voron Users mod by `Iakabos`                                                                                   |
| [Case_arm(Mirror)](<https://github.com/VoronDesign/VoronUsers/blob/master/legacy_printers/printer_mods/Iakabos/Mini12864_display_mount/Case_arm(Mirror).stl>)             |        1 | [eSun ABS+ (Black)]           |   42m | 1.93m |  4.91g | £0.08 | :heavy_check_mark: | This is a Voron Users mod by `Iakabos`                                                                                   |
| ~[mini12864_arm](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Display_Module/mini12864_arm_x2.stl)~                                     |      ~2~ | [eSun ABS+ (Black)]           |   36m | 1.68m |  4.27g | £0.07 | :heavy_check_mark: | Not required, replaced by `Case_arm`, `Mount_block` and `Swingarm`                                                       |
| [mini12864_case_back](<https://github.com/mikepthomas/3dprinting/blob/main/Designs/Voron%201.8%20Mini12864%20Case%20Back/Mini12864%20Case%20Back%20(Swivel).stl>)         |        1 | [eSun ABS+ (Black)]           | 2h06m | 5.06m | 12.89g | £0.21 | :heavy_check_mark: | I have modified the mounting holes for this to make them closer together so that the display will fit between the skirts |
| [mini12864_case_front](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Display_Module/mini12864_case_front.stl)                            |        1 | [eSun ABS+ (Black)]           | 1h39m | 4.93m | 12.56g | £0.21 | :heavy_check_mark: |
| [Mount_block](https://github.com/VoronDesign/VoronUsers/blob/master/legacy_printers/printer_mods/Iakabos/Mini12864_display_mount/Mount_block.stl)                         |        1 | [eSun ABS+ (Black)]           |   43m | 1.60m |  4.08g | £0.07 | :heavy_check_mark: | This is a Voron Users mod by `Iakabos`                                                                                   |
| [Mount_block(Mirror)](<https://github.com/VoronDesign/VoronUsers/blob/master/legacy_printers/printer_mods/Iakabos/Mini12864_display_mount/Mount_block(Mirror).stl>)       |        1 | [eSun ABS+ (Black)]           |   44m | 1.60m |  4.08g | £0.07 | :heavy_check_mark: | This is a Voron Users mod by `Iakabos`                                                                                   |
| [Swingarm_long](https://github.com/VoronDesign/VoronUsers/blob/master/legacy_printers/printer_mods/Iakabos/Mini12864_display_mount/Swingarm_long.stl)                     |        1 | [eSun ABS+ (Fire Engine Red)] |   25m | 0.76m |  1.93g | £0.03 | :heavy_check_mark: | This is a Voron Users mod by `Iakabos`                                                                                   |
| [Swingarm_long(Mirror)](<https://github.com/VoronDesign/VoronUsers/blob/master/legacy_printers/printer_mods/Iakabos/Mini12864_display_mount/Swingarm_long(Mirror).stl>)   |        1 | [eSun ABS+ (Fire Engine Red)] |   25m | 0.76m |  1.93g | £0.03 | :heavy_check_mark: | This is a Voron Users mod by `Iakabos`                                                                                   |
| [Swingarm_short](https://github.com/VoronDesign/VoronUsers/blob/master/legacy_printers/printer_mods/Iakabos/Mini12864_display_mount/Swingarm_short.stl)                   |        1 | [eSun ABS+ (Fire Engine Red)] |   14m | 0.43m |  1.10g | £0.02 | :heavy_check_mark: | This is a Voron Users mod by `Iakabos`                                                                                   |
| [Swingarm_short(Mirror)](<https://github.com/VoronDesign/VoronUsers/blob/master/legacy_printers/printer_mods/Iakabos/Mini12864_display_mount/Swingarm_short(Mirror).stl>) |        1 | [eSun ABS+ (Fire Engine Red)] |   14m | 0.43m |  1.10g | £0.02 | :heavy_check_mark: | This is a Voron Users mod by `Iakabos`                                                                                   |

#### Assembly

![Display Mount that can be tilted for a better view](/assets/blog/printer-voron-1.8/display-mount.jpg 'Display Mount')

##### Parts Used

| Item               | Quantity |
| ------------------ | -------: |
| M3x8 SHCS          |       16 |
| M5 1mm Spacer      |        2 |
| M5 T-nut           |        2 |
| M5x16 BHCS         |        2 |
| Mini 12864 Display |        1 |

![The Display Mount installed on the printer](/assets/blog/printer-voron-1.8/display-mount-installed.jpg 'Display Mount Installed')

The reason to add this mod is that it allows me to fold the display flat with the frame out of the way or angled up to view the display at different angles.

![Display Mount Folded Flat out of the way](/assets/blog/printer-voron-1.8/display-mount-flat.jpg 'Display Mount Flat')

### :white_check_mark: Bottom Electronics Mounting

| Item                                                                                                                       | Quantity | Material            | Time |  Size | Weight |  Cost |      Printed       | Notes                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------: | ------------------- | ---: | ----: | -----: | ----: | :----------------: | ------------------------ |
| [cable_frame_anchor](https://github.com/VoronDesign/Voron-Trident/blob/VTr1/STLs/ElectronicsBay/cable_frame_anchor_x6.stl) |        5 | [eSun ABS+ (Black)] |  10m | 0.25m |  0.64g | £0.01 | :heavy_check_mark: | This is a [Trident] Part |
| [DIN_center_support](https://github.com/VoronDesign/Voron-Trident/blob/VTr1/STLs/ElectronicsBay/DIN_center_support_x2.stl) |        3 | [eSun ABS+ (Black)] |  12m | 0.29m |  0.75g | £0.01 | :heavy_check_mark: | This is a [Trident] Part |
| [DIN_frame_mount](https://github.com/VoronDesign/Voron-Trident/blob/VTr1/STLs/ElectronicsBay/DIN_frame_mount_x4.stl)       |        2 | [eSun ABS+ (Black)] |  53m | 2.40m |  6.12g | £0.10 | :heavy_check_mark: | This is a [Trident] Part |

#### Assembly

![Single DIN Rail installed in the bottom of the printer](/assets/blog/printer-voron-1.8/din-rail-installed.jpg 'DIN Rail Installed')

##### Parts Used

| Item                           | Quantity |
| ------------------------------ | -------: |
| Coroplast Sheet - 420x420x4 mm |        1 |
| DIN 3 Rails (35mm W) - 420mm   |        1 |
| M3x8 SHCS                      |        2 |
| M5 T-nut                       |        4 |
| M5x16 BHCS                     |        4 |

### :white_check_mark: Bottom Electronics Brackets

| Item                                                                                                                                               | Quantity | Material            | Time |  Size | Weight |  Cost |      Printed       | Notes                             |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------: | ------------------- | ---: | ----: | -----: | ----: | :----------------: | --------------------------------- |
| [psu_brace](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Bottom_Electronics_Mounting/psu_brace.stl)              |        1 | [eSun ABS+ (Black)] |  27m | 0.93m |  2.36g | £0.04 | :heavy_check_mark: |
| [psu_mount_clip](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Bottom_Electronics_Mounting/psu_mount_clip_x2.stl) |        2 | [eSun ABS+ (Black)] |  33m | 0.84m |  2.15g | £0.04 | :heavy_check_mark: |
| [MW_RS_25](https://github.com/VoronDesign/Voron-Parts/blob/main/DIN_Mounts/Power_Supplies/MW_RS_25.stl)                                            |        1 | [eSun ABS+ (Black)] |  50m | 2.19m |  5.59g | £0.09 | :heavy_check_mark: | From the [Voron Parts] Repository |

#### Assembly

![High voltage electronics are installed in the bottom](/assets/blog/printer-voron-1.8/bottom-compartment-electronics.jpg 'Bottom Compartment Electronics')

##### Parts Used

| Item                               | Quantity |
| ---------------------------------- | -------: |
| DIN Rail Mount Bracket for G3A SSR |        1 |
| M3x6 BHCS                          |        2 |
| M4x6 BHCS                          |        5 |
| M5 T-nut                           |        1 |
| M5x10 BHCS                         |        1 |
| Mean Well LRS-200-24 PSU           |        1 |
| Mean Well RS-25-5 PSU              |        1 |
| Omron G3A-210B-DC5 SSR             |        1 |

### :negative_squared_cross_mark: BTT UPS 24V DIN Mount

A mount for a [BigTreeTech 24V UPS Module](https://github.com/bigtreetech/BIGTREETECH-MINI-UPS-V2.0/tree/master/BTT%20UPS%2024V%20V1.0) using a metal SSR DIN clamp.

| Item                                                                                                                                         | Quantity | Material            | Time | Size | Weight | Cost | Printed | Notes                                 |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------: | ------------------- | ---: | ---: | -----: | ---: | :-----: | ------------------------------------- |
| [BTT_UPS_24V_DIN](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/Oakman/BTT_24V_UPS_Metal_DIN_Mount/BTT_UPS_24V_DIN.stl) |        1 | [eSun ABS+ (Black)] |      |      |        |      |   :x:   | This is a Voron Users mod by `Oakman` |

#### Assembly

##### Parts Used

| Item      | Quantity |
| --------- | -------: |
| M4x6 BHCS |        4 |

### :wrench: Mosfet Mounts

The SKR 1.4 Turbo only has 1 controllable fan header, to control more fans, I have purchased a few mosfets and need something to mount them.

| Item                                                                                                                                         | Quantity | Material            |  Time |  Size | Weight |  Cost |      Printed       | Notes                                   |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------: | ------------------- | ----: | ----: | -----: | ----: | :----------------: | --------------------------------------- |
| [Mosfet_Mount](https://github.com/VoronDesign/VoronUsers/blob/master/legacy_printers/printer_mods/JaredC01/Mosfet_Mounts/Mosfet_Mount_4.stl) |        1 | [eSun ABS+ (Black)] | 2h41m | 7.72m | 19.68g | £0.32 | :heavy_check_mark: | This is a Voron Users mod by `JaredC01` |

#### Assembly

![Mount to hold 4 External Mosfets](/assets/blog/printer-voron-1.8/mosfet-mounts.jpg 'Mosfet Mounts')

##### Parts Used

| Item                     | Quantity |
| ------------------------ | -------: |
| IRF520 MOS Driver Module |        4 |
| M2x10 Self-Tapping Screw |        8 |
| M3 Hammer Head T-nuts    |        2 |
| M3x8 SHCS                |        2 |
| TO-220 Aluminum Heatsink |        4 |

### :wrench: Wago Mounts

Wago Mount for connecting wires under the bed and in the electronics compartments.

| Item                                                                                                                                                                          | Quantity | Material            |  Time |  Size | Weight |  Cost |      Printed       | Notes                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------: | ------------------- | ----: | ----: | -----: | ----: | :----------------: | ----------------------------------------------------------------------------------------------------------------- |
| [Wago_2x_221-415_Extrusion_Mount](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/LoganFraser/WagoMounts/STLs/Wago_2x_221-415_Extrusion_Mount.stl)         |        1 | [eSun ABS+ (Black)] | 1h07m | 2.70m |  6.87g | £0.11 | :heavy_check_mark: | This is a Voron Users mod by `LoganFraser`. For Bed fans                                                          |
| [Wago_2x_221-415_Thin_Din_Rail_Mount](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/LoganFraser/WagoMounts/STLs/Wago_2x_221-415_Thin_Din_Rail_Mount.stl) |        1 | [eSun ABS+ (Black)] | 1h21m | 3.21m |  8.19g | £0.13 | :heavy_check_mark: | This is a Voron Users mod by `LoganFraser`. For Mosfet power                                                      |
| [Wago_3x_221-415_Extrusion_Mount](https://github.com/VoronDesign/VoronUsers/blob/main/printer_mods/LoganFraser/WagoMounts/STLs/Wago_3x_221-415_Extrusion_Mount.stl)           |        1 | [eSun ABS+ (Black)] | 1h31m | 3.66m |  9.33g | £0.15 | :heavy_check_mark: | This is a Voron Users mod by `LoganFraser`. For Input AC power                                                    |
| [Wago-3x-221-413_Thin-Din_Rail_Mount](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/LoganFraser/WagoMounts/STLs/Wago-3x-221-413_Thin-Din_Rail_Mount.stl) |        2 | [eSun ABS+ (Black)] | 1h22m | 3.23m |  8.25g | £0.13 | :heavy_check_mark: | This is a Voron Users mod by `LoganFraser`. One for Exhaust and Controller fans and one for 12V & 5V to toolhead  |
| [Wago_3x_221-415_Thin_Din_Rail_Mount](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/LoganFraser/WagoMounts/STLs/Wago_3x_221-415_Thin_Din_Rail_Mount.stl) |        1 | [eSun ABS+ (Black)] | 1h41m | 4.12m | 10.49g | £0.17 | :heavy_check_mark: | This is a Voron Users mod by `LoganFraser`. For 24V SKR, Klipper Expander and ERCF, and 5V Raspberry Pi Power     |
| [Wago_4x_221-412_Extrusion_Mount](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/LoganFraser/WagoMounts/STLs/Wago_4x_221-412_Extrusion_Mount.stl)         |        2 | [eSun ABS+ (Black)] | 1h09m | 2.74m |  6.99g | £0.11 | :heavy_check_mark: | This is a Voron Users mod by `LoganFraser`. One for Bed mains connections and one for Bed low voltage connections |
| [Wago_5x_221-412_Extrusion_Mount](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/LoganFraser/WagoMounts/STLs/Wago_5x_221-412_Extrusion_Mount.stl)         |        1 | [eSun ABS+ (Black)] | 1h20m | 3.19m |  8.15g | £0.13 | :heavy_check_mark: | This is a Voron Users mod by `LoganFraser`. For Rear Electronics Compartment connections                          |

### Assembly

![Wago Mounts to make wiring up the printer electronics easier](/assets/blog/printer-voron-1.8/wago-mounts.jpg 'Wago Mounts')

> [!WARNING]
> I have currently printed [this version from Thingyverse](https://www.thingiverse.com/thing:4579456) for the Wago 221-412, I will replace these with ones from this User mod.

##### Parts Used

| Item                  | Quantity |
| --------------------- | -------: |
| M5 Hammer Head T-nuts |       10 |
| M5x10 SHCS            |       10 |
| Wago 221-412          |        8 |
| Wago 221-413          |        6 |
| Wago 221-415          |        7 |

> [!CAUTION]
> I need to purchase 5 more Wago 221-412 and 3 more Wago 221-415

### :white_check_mark: Deck Panel Support Clips

The coroplast on the bottom of the printer is not that well supported so this just add a bit more support to the bottom deck panel.

| Item                                                                                                                                                                                    | Quantity | Material                      | Time |  Size | Weight |  Cost |      Printed       | Notes                                  |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------: | ----------------------------- | ---: | ----: | -----: | ----: | :----------------: | -------------------------------------- |
| [deck_panel_support_lower](<https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/wile-e1/Deck_Panel_Support_Clips/wile.e-deck_panel_support_lower_adjustable(3-6mm).stl>) |        4 | [eSun ABS+ (Black)]           |  22m | 0.69m |  1.77g | £0.03 | :heavy_check_mark: | This is a Voron Users mod by `wile-e1` |
| [deck_panel_support_upper](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/wile-e1/Deck_Panel_Support_Clips/wile.e-deck_panel_support_upper.stl)                     |        4 | [eSun ABS+ (Fire Engine Red)] |  24m | 0.89m |  2.26g | £0.04 | :heavy_check_mark: | This is a Voron Users mod by `wile-e1` |

#### Assembly

![Decorative clips to hold in the deck panel](/assets/blog/printer-voron-1.8/deck-panel-support-clips.jpg 'Deck Panel Support Clips')

##### Parts Used

| Item                  | Quantity |
| --------------------- | -------: |
| M3 Hammer Head T-nuts |        8 |
| M3x6 BHCS             |        4 |
| M3x6 SHCS             |        4 |

## Electronics Compartment

![3D render of the Voron 1.8 Electronics Compartment](/assets/blog/printer-voron-1.8/voron-design/electronics-compartment.jpg 'Electronics Compartment')

> Image © 2020 [Voron Design](https://www.vorondesign.com)

The rear electronics compartment is designed to house the low voltage components for the printer. The compartment was removed from the 1.8's successor the Trident, however I wanted to have the separation between the low and high voltage components and also wanted space to expand and add additional compenents without being restricted to the space beneath the printer.

### :white_check_mark: Rear Electronics Enclosure

| Item                                                                                                                                                       | Quantity | Material            |  Time |   Size | Weight |  Cost |      Printed       | Notes                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | -------: | ------------------- | ----: | -----: | -----: | ----: | :----------------: | ------------------------------------------------------------------------------------------ |
| [base_left](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/base_left.stl)                       |        1 | [eSun ABS+ (Black)] | 1h09m |  3.31m |  8.44g | £0.14 | :heavy_check_mark: |
| [base_right](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/base_right.stl)                     |        1 | [eSun ABS+ (Black)] | 1h08m |  3.32m |  8.45g | £0.14 | :heavy_check_mark: |
| [corner_bracket_left](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/corner_bracket_left.stl)   |        1 | [eSun ABS+ (Black)] | 3h56m | 10.68m | 27.22g | £0.44 | :heavy_check_mark: |
| [corner_bracket_right](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/corner_bracket_right.stl) |        1 | [eSun ABS+ (Black)] | 3h56m | 10.67m | 27.19g | £0.44 | :heavy_check_mark: |
| [din_bracket_base](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/din_bracket_base_x4.stl)      |        4 | [eSun ABS+ (Black)] |   36m |  1.53m |  3.91g | £0.06 | :heavy_check_mark: |
| [din_bracket_clamp](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/din_bracket_clamp_x4.stl)    |        4 | [eSun ABS+ (Black)] |   30m |  1.24m |  3.16g | £0.05 | :heavy_check_mark: |
| ~[panel_holder](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/panel_holder_x2.stl)~            |      ~2~ |                     |       |        |        |       |        :x:         | Not required, Will replace these with `front_panel_rest`                                   |
| [wire_cover_left](https://github.com/VoronDesign/Voron-Trident/blob/VTr1/STLs/Panels/wire_cover_left.stl)                                                  |        1 |                     |       |        |        |       |     :question:     | This is a [Trident R1] Part. I may need to make some modifications to this to make it fit. |
| [wire_cover_right](https://github.com/VoronDesign/Voron-Trident/blob/VTr1/STLs/Panels/wire_cover_right.stl)                                                |        1 |                     |       |        |        |       |     :question:     | This is a [Trident R1] Part. I may need to make some modifications to this to make it fit. |

#### Assembly

![The V1.8 has a separate enclosure for the low voltage electronics](/assets/blog/printer-voron-1.8/rear-electronics-enclosure.jpg 'Rear Electronics Enclosure')

The manual says to install the DIN Rails after fitting the enclosure. I found it easier to add the DIN rails to the enclosure and afterwards install the assembly to the frame.

![Two DIN Rails are installed in the Rear Electronics Enclosure](/assets/blog/printer-voron-1.8/rear-din-rails.jpg 'Rear DIN Rails')

I have also purchased an additional DIN rail than what was specified on the BOM as the manual displays 2 installed and it will give the flexability to place additional components in the rear of the printer.

##### Parts Used

| Item                           | Quantity |
| ------------------------------ | -------: |
| Coroplast Sheet - 236x415x4 mm |        1 |
| Coroplast Sheet - 242x46x4 mm  |        2 |
| Coroplast Sheet - 419x66x4 mm  |        1 |
| DIN 3 Rails (35mm W) - 420mm   |        2 |
| M3 T-nut                       |        8 |
| M3x16 BHCS                     |        8 |
| M5 T-nut                       |       12 |
| M5x10 SHCS                     |       12 |
| Misumi HFSB5-2020-230          |        2 |
| Misumi HFSB5-2020-420          |        1 |

### :wrench: Rear Electronics Brackets

![3D render of the Voron 1.8 Electronics](/assets/blog/printer-voron-1.8/voron-design/electronics.jpg 'Electronics')

> Image © 2020 [Voron Design](https://www.vorondesign.com)

I managed purchase a SKR 1.4 (the non Turbo verion) cheaply to replace the [SKR 1.4 Turbo I have in my Anet A8](printer-hardware-upgrades) and planed to install the SKR 1.4 Turbo here. I chose this to enable me to swap the boards with minimal re-wiring, and without the need to re-print a new case for my Anet A8.
I have also purchased the [BTT EXP-MOT motor expansion module](https://github.com/bigtreetech/BTT-Expansion-module/tree/master/BTT%20EXP-MOT) to allow me to install additional stepper motor drivers to run the [Enraged Rabbit Carrot Feeder](enraged-rabbit-carrot-feeder-2.0) and potentially add a [3rd Z Stepper Motor](https://github.com/VoronDesign/VoronUsers/tree/master/printer_mods/yeri/V1_3Z).

| Item                                                                                                                                                               | Quantity | Material                      |  Time |  Size | Weight |  Cost |      Printed       | Notes                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------: | ----------------------------- | ----: | ----: | -----: | ----: | :----------------: | -------------------------------------------------------------------------------------------- |
| [beefy_raspberry_bracket](https://github.com/MotorDynamicsLab/LDOVoron2/blob/main/STLs/beefy_raspberry_bracket.stl)                                                |        1 | [eSun ABS+ (Black)]           |       |       |        |       |        :x:         | This is a `LDO 2.4` Part.                                                                    |
| [BTT_MOT_EXP_bracket](https://github.com/VoronDesign/Voron-Trident/blob/VTr1/STLs/ElectronicsBay/Controller_Mounts/BTT_MOT_EXP_bracket.stl)                        |        1 | [eSun ABS+ (Black)]           |   42m | 1.71m |  4.37g | £0.07 | :heavy_check_mark: | This is a [Trident] Part.                                                                    |
| [controller_fan_guard](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/%5Ba%5D_controller_fan_guard.stl) |        1 | [eSun ABS+ (Fire Engine Red)] |   41m | 1.71m |  4.35g | £0.07 | :heavy_check_mark: |
| [controller_fan_mount](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/controller_fan_mount.stl)         |        1 | [eSun ABS+ (Black)]           | 1h31m | 5.28m | 13.46g | £0.22 | :heavy_check_mark: |
| [din_clip](https://github.com/VoronDesign/Voron-Parts/blob/main/DIN_Mounts/din_clip.stl)                                                                           |        5 | [eSun ABS+ (Black)]           |   45m | 1.99m |  5.06g | £0.08 |         3          | From the [Voron Parts] Repository. 2 for SKR 1.4 Turbo, 1 for BTT MOT and 2 for Raspberry Pi |
| ~[raspberrypi_bracket](https://github.com/VoronDesign/Voron-Trident/blob/VTr1/STLs/ElectronicsBay/raspberrypi_bracket.stl)~                                        |      ~1~ | [eSun ABS+ (Black)]           |   40m | 1.68m |  4.28g | £0.07 | :heavy_check_mark: | This is a [Trident] Part. Going to replace with `beefy_raspberry_bracket`                    |
| [SKR_bracket_inline_set](https://github.com/VoronDesign/Voron-Trident/blob/VTr1/STLs/ElectronicsBay/Controller_Mounts/SKR_bracket_inline_set.stl)                  |        1 | [eSun ABS+ (Black)]           |   57m | 2.42m |  6.16g | £0.10 | :heavy_check_mark: | This is a [Trident] Part.                                                                    |

#### Assembly

![A Fan to cool the electronics](/assets/blog/printer-voron-1.8/controller-fan-mount.jpg 'Controller Fan Mount')

##### Parts Used

| Item                     | Quantity |
| ------------------------ | -------: |
| 3M VHB Tape 5952         |        1 |
| M2x10 Self-Tapping Screw |       10 |
| M3x6 BHCS                |        4 |
| M5 Hammer Head T-nuts    |        2 |
| M5x10 BHCS               |        2 |

### :wrench: MKS Mosfet Mount

A mount for a [BIQU116-A2 MKS Mosfet](https://www.biqu.equipment/products/3d-printer-parts-heating-controller-mks-mosfet-for-heat-bed-extruder-mos-module-exceed-30a-support-big-current) based on the Trident Raspberry Pi mount.

| Item                                                                                                                                         | Quantity | Material            | Time |  Size | Weight |  Cost |      Printed       | Notes                                                   |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------: | ------------------- | ---: | ----: | -----: | ----: | :----------------: | ------------------------------------------------------- |
| [MKS Mosfet Mount](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/mikepthomas/MKS_Mosfet_Mount/STL/MKS_Mosfet_Mount.stl) |        1 | [eSun ABS+ (Black)] |  50m | 2.17m |  5.52g | £0.09 | :heavy_check_mark: | This is a Voron Users mod by `mikepthomas` (me :blush:) |
| [din_clip](https://github.com/VoronDesign/Voron-Parts/blob/main/DIN_Mounts/din_clip.stl)                                                     |        1 | [eSun ABS+ (Black)] |  45m | 1.99m |  5.06g | £0.08 | :heavy_check_mark: |

#### Assembly

##### Parts Used

| Item                     | Quantity |
| ------------------------ | -------: |
| M2x10 Self-Tapping Screw |        6 |

## Rear Panel and Exhaust

![3D render of the Voron 1.8 Rear Panel and Exhaust](/assets/blog/printer-voron-1.8/voron-design/rear-panel-and-exhaust.jpg 'Rear Panel and Exhaust')

> Image © 2020 [Voron Design](https://www.vorondesign.com)

### :white_check_mark: Exhaust Filter Grill

Exhaust filter grill with Cover to allow the chamber to hold it's temperature better.

| Item                                                                                                                                                                | Quantity | Material                      |  Time |  Size | Weight |  Cost |      Printed       | Notes                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------: | ----------------------------- | ----: | ----: | -----: | ----: | :----------------: | --------------------------------------------------------------------------------------- |
| [exhaust_filter_cover](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/falo/magnetic_grill_cover/STL/exhaust_filter_cover.stl)                   |        1 | [eSun ABS+ (Black)]           | 2h37m | 6.73m | 17.16g | £0.28 | :heavy_check_mark: | This is a Voron Users mod by `falo`                                                     |
| ~[exhaust_filter_grill](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Exhaust_Filter/exhaust_filter_grill.stl)~                                         |      ~1~ | [Amazon Basics PETG (Red)]    | 1h16m | 3.62m | 11.06g | £0.21 | :heavy_check_mark: | Not required, Will replace with Magnetic `exhaust_filter_grill_modified` printed in ABS |
| [exhaust_filter_grill_modified](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/falo/magnetic_grill_cover/STL/exhaust_filter_grill_modified.stl) |        1 | [eSun ABS+ (Fire Engine Red)] | 1h43m | 4.39m | 11.19g | £0.18 | :heavy_check_mark: | This is a Voron Users mod by `falo`                                                     |
| [exhaust_filter_mount](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Exhaust_Filter/exhaust_filter_mount_x2.stl)                                        |        2 | [eSun ABS+ (Fire Engine Red)] |   18m | 0.79m |  2.01g | £0.03 | :heavy_check_mark: |

#### Assembly

![Cover to hold in chamber temperature whilst printing](/assets/blog/printer-voron-1.8/magnetic-grill-cover.jpg 'Magnetic Grill Cover')

##### Parts Used

| Item                   | Quantity |
| ---------------------- | -------: |
| 6x3mm Neodimium Magnet |        8 |
| M3x12 BHCS             |        2 |
| M5x10 BHCS             |        2 |
| M5 Hammer Head T-nuts  |        2 |

The cover can be easily removed to allow air to be exracted from the exhaust filter.

![Cover removed to allow ventilation](/assets/blog/printer-voron-1.8/magnetic-grill-cover-removed.jpg 'Magnetic Grill Cover Removed')

### :white_check_mark: Exhaust Filter

The stock exhaust filter has the bowden coupler coming out of the back. As I will have my printer up against the wall I would like to have the bowden coupler coming out of the side to save some space. It will also allow the ability to run two bowden tubes into the enclosure to experiment with [dual extrusion toolheads](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Gantry/X_Axis/X_Carriage/Bowden/bowden_dual_front_b.stl).

The Voron Exhaust Filter Activated Coal + Hepa (VEFACH) mod has an insert that fits into stock exhaust filter.

| Item                                                                                                                                                                                     | Quantity | Material                      |  Time |   Size | Weight |  Cost |      Printed       | Notes                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------: | ----------------------------- | ----: | -----: | -----: | ----: | :----------------: | ---------------------------------------------------------------------------------- |
| [exhaust_fan_grill](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Exhaust_Filter/%5Ba%5D_exhaust_fan_grill.stl)                                                              |        1 | [eSun ABS+ (Fire Engine Red)] |   47m |  2.07m |  5.28g | £0.08 | :heavy_check_mark: | This is a [Voron 2.4] part                                                         |
| ~[exhaust_filter_housing](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Exhaust_Filter/exhaust_filter_housing.stl)~                                                          |      ~1~ | [Tinmorry PETG (Black)]       | 7h34m | 25.10m | 87.54g | £1.75 | :heavy_check_mark: | Not required, Will replace with Side Entry `exhaust_filter_housing` printed in ABS |
| [exhaust_filter_housing](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/120decibell/exhaust_housing_side_entry/STL/exhaust_filter_housing.stl)                       |        1 | [eSun ABS+ (Black)]           | 7h35m | 24.06m | 61.33g | £1.00 | :heavy_check_mark: | This is a Voron Users mod by `120decibell`                                         |
| [exhaust_housing_insert_plug](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/120decibell/exhaust_housing_side_entry/STL/%5Ba%5D_exhaust_housing_insert_plug.stl)     |        1 | [eSun ABS+ (Fire Engine Red)] |   14m |  0.41m |  1.04g | £0.02 | :heavy_check_mark: | This is a Voron Users mod by `120decibell`                                         |
| [exhaust_housing_insert_thread](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/120decibell/exhaust_housing_side_entry/STL/%5Ba%5D_exhaust_housing_insert_thread.stl) |        2 | [eSun ABS+ (Fire Engine Red)] |   12m |  0.32m |  0.80g | £0.01 | :heavy_check_mark: | This is a Voron Users mod by `120decibell`                                         |
| ~[filter_access_cover](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Exhaust_Filter/%5Ba%5D_filter_access_cover.stl)~                                                        |      ~1~ | [Amazon Basics PETG (Red)]    | 3h47m |  9.62m | 29.38g | £0.56 | :heavy_check_mark: | Not required, Will replace with Side Entry `filter_access_cover` printed in ABS    |
| [filter_access_cover](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/120decibell/exhaust_housing_side_entry/STL/%5Ba%5D_filter_access_cover.stl)                     |        1 | [eSun ABS+ (Fire Engine Red)] | 3h48m |  9.26m | 23.62g | £0.38 | :heavy_check_mark: | This is a Voron Users mod by `120decibell`                                         |
| [hepa](<https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/KevinAkaSam/VEFACH/STL_CAD/V2.4(R2)_Trident/1_hepa.stl>)                                                      |        1 | [eSun ABS+ (Black)]           |       |        |        |       |        :x:         | This is a Voron Users mod by `KevinAkaSam`                                         |

#### Assembly

![An enclosure to hold a filter](/assets/blog/printer-voron-1.8/exhaust-filter.jpg 'Exhaust Filter')

I originally printed this in PETG that would be fitted to [my HyperCube upgrade](printer-hypercube). I will replace with the Side Entry Exhaust Mount mod to allow me to pass 2 bowden tubes through to experiment with a [dual bowden setup using 2 M4 extruders](voron-m4).

![Modified Exhaust filter with multiple PTFE entry points](/assets/blog/printer-voron-1.8/exhaust-mount-side-entry.jpg 'Exhaust Mount Side Entry')

##### Parts Used

| Item                                 | Quantity |
| ------------------------------------ | -------: |
| 4mm Bowden Coupler                   |        2 |
| 40mmx80mm Hepa filter                |        1 |
| 60x60x20 Fan (24V)                   |        1 |
| Fume Extractor Carbon Filter Element |        1 |
| M3 Threaded Insert                   |        8 |
| M3x8 BHCS                            |        2 |
| M3x25 SHCS                           |        4 |

### :white_check_mark: Electronics Panel

| Item                                                                                                                                                                | Quantity | Material                      |  Time |  Size | Weight |  Cost |      Printed       | Notes                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------: | ----------------------------- | ----: | ----: | -----: | ----: | :----------------: | -------------------------------------------------------------------------- |
| [front_panel_rest](https://github.com/VoronDesign/Voron-2/blob/Voron2.2/STLs/VORON2.2/Panel_Mounting/Handles_Panel_Rests_Misc/front_panel_rest_3%2B6mm_x2_Rev1.STL) |        2 | [eSun ABS+ (Black)]           | 2h42m | 9.34m | 23.80g | £0.39 | :heavy_check_mark: | For [Voron 2.2]. Will swap out `panel_holder` for these at rear of printer |
| [latch_left](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/%5Ba%5D_latch_left.stl)                      |        1 | [eSun ABS+ (Fire Engine Red)] |   08m | 0.19m |  0.48g | £0.01 | :heavy_check_mark: |
| [latch_right](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/%5Ba%5D_latch_right.stl)                    |        1 | [eSun ABS+ (Fire Engine Red)] |   08m | 0.19m |  0.48g | £0.01 | :heavy_check_mark: |
| [lever_left](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/%5Ba%5D_lever_left.stl)                      |        1 | [eSun ABS+ (Fire Engine Red)] |   14m | 0.40m |  1.03g | £0.02 | :heavy_check_mark: |
| [lever_right](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/%5Ba%5D_lever_right.stl)                    |        1 | [eSun ABS+ (Fire Engine Red)] |   14m | 0.40m |  1.03g | £0.02 | :heavy_check_mark: |
| [lock_body](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/lock_body_x2.stl)                             |        2 | [eSun ABS+ (Black)]           |   39m | 1.58m |  4.02g | £0.07 | :heavy_check_mark: |

#### Assembly

![Electronics Panel Holder replaced by handles](/assets/blog/printer-voron-1.8/rear-handles.jpg 'Rear Handles')

The [Electronics Compartment](#electronics-compartment) has a couple of parts to rest the elecronics panel on called `panel_holder`s I have replaced these with the front handles from the 2.2 to enable me to move the printer about a little easier and to also keep a little bit of space behind the printer to allow the electronics compartment fan to breathe.

I also plan on installing the [Klipper Expander](voron-hardware#klipper-expander) in the space at the bottom of the electronics compartment just above the handle shown.

![3D printed locks to hold on the back panel](/assets/blog/printer-voron-1.8/rear-panel-locks.jpg 'Rear Panel Locks')

The V1.8 has 3D printed locks to hold on the back panel; This makes accessing the electronics easy as installing and removing it is completely tool free.

![The panel to cover the electronics is installed](/assets/blog/printer-voron-1.8/electronics-panel-installed.jpg 'Electronics Panel Installed')

##### Parts Used

| Item                           | Quantity |
| ------------------------------ | -------: |
| Coroplast Sheet - 246x434x4 mm |        1 |
| M3x8 SHCS                      |        2 |
| M5 T-nut                       |        4 |
| M5x10 SHCS                     |        4 |

## Heated Bed

| Item                                                                                                                                 | Quantity | Material                      |  Time |   Size | Weight |  Cost |      Printed       | Notes                                       |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------: | ----------------------------- | ----: | -----: | -----: | ----: | :----------------: | ------------------------------------------- |
| [bed_mount_front](https://github.com/mikepthomas/3dprinting/blob/main/Designs/Voron%201.8%20Front%20Bed%20Mount/bed_mount_front.stl) |        1 | [eSun ABS+ (Fire Engine Red)] | 3h20m | 11.56m | 29.48g | £0.47 | :heavy_check_mark: | I modified this part to fit my off spec bed |

### :white_check_mark: Print Surface

![Individual parts for the heated print bed](/assets/blog/printer-voron-1.8/print-bed-parts.jpg 'Print Bed Parts')

#### Assembly

I cleaned the Aluminium Tooling plate on both sides, thouroughly with Isopropyl alcohol and ensured it was completely dry before peeling a small portion of the adhesive backing from the magnet for the spring steel sheet.

I then carefully lined up the magnet to the center of the top of the tooling plate, and pressed it down making sure to press from the center outwards to remove any air bubbles, pulled back some more of the backing and repeated until the magnet has been applied.

Once the magnet was applied I used a 3mm drill bit from the undersde of the tool plate to make holes for the mounting screws and then used a craft knife to make space for the screw heads and tidied up using a de-burring tool to remove any sharp edges.

##### Parts Used

| Item                              | Quantity |
| --------------------------------- | -------: |
| 3M 468MP Adhesive Sheet - 12"x12" |        1 |
| PEI 0.04" Sheet - 12"x12"         |        1 |

### :white_check_mark: Heater Mat

#### Assembly

![The Bed Heater installed and sealed with RTV](/assets/blog/printer-voron-1.8/heater-installed.jpg 'Heater Installed')

I flipped over the tooling plate and applied the Kenovo heater mat to the center of the bottom of the tooling plate in the same way as the magnet above, ensuring the wires come out of the rear of the bed.

I then added some thick cardboard around the thermistor and wires of the mat and added some weights (I used 6 rolls of filament) on top of the plate to ensure the adhesive cures and sticks well.

After 24 hours I removed the weights and applied some masking tape 1cm from the heater mat, and appled a bead of red RTV silicone sealant around the plate and the mat. I then removed the masking tape while the RTV was still wet and then waited for it to dry.

##### Parts Used

| Item                                                        | Quantity |
| ----------------------------------------------------------- | -------: |
| Frogtape Masking Tape                                       |        1 |
| JB Weld Red Hi-Temp RTV Silicone Gasket Maker & Sealant     |        1 |
| Keenovo Silicone AC Heater w/ thermistor - 250x250mm (600W) |        1 |
| MIC6 5/16" Plate - 12"x12"                                  |        1 |

### :white_check_mark: Bed Mounting

#### Assembly

![Bed installed in the frame of the printer](/assets/blog/printer-voron-1.8/bed-installed.jpg 'Bed Installed')

When mounting the bed, I noticed the mounting holes in the aluminum plate I purchased are a little different to the mounting holes in the [Drawings](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/Drawings/Voron_1.8_300mm_Bed_Drawing.pdf), my rear bed mounting holes are about 265mm from the front rather than 262mm.
I have redesigned the front bed mount move the front mounting hole forward a few millimeters to compensate

![My modified Bed Mount for my non-standard bed](/assets/blog/printer-voron-1.8/bed-mount.jpg 'Bed Mount')

##### Parts Used

| Item                       | Quantity |
| -------------------------- | -------: |
| M3 Knurled Nut (DIN 466-B) |        1 |
| M3x16 SHCS                 |        2 |
| M3x40 SHCS                 |        1 |
| M3 T-nut                   |        2 |
| M4 Knurled Nut (DIN 466-B) |        2 |
| M5x16 SHCS                 |        2 |
| Yellow Die Spring - M3     |        1 |

### :wrench: Bed Fans

Mounts for 5015 fans to circulate air around the enclosure to get hotter chamber temps.

| Item                                                                                                                                    | Quantity | Material            |  Time |  Size | Weight |  Cost |      Printed       | Notes                                     |
| --------------------------------------------------------------------------------------------------------------------------------------- | -------: | ------------------- | ----: | ----: | -----: | ----: | :----------------: | ----------------------------------------- |
| [Mounting_Plate](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/CannedBass/Trident_Bed_Fans/STL/Mounting_Plate.stl) |        4 | [eSun ABS+ (Black)] | 1h20m | 3.81m |  9.71g | £0.16 | :heavy_check_mark: | This is a Voron Users mod by `CannedBass` |

#### Assembly

##### Parts Used

| Item                       | Quantity |
| -------------------------- | -------: |
| 5015 Centrifugal Fan (24V) |        4 |
| M3 Hammer Head T-nuts      |        4 |
| M3 Threaded Insert         |        8 |
| M3x8 SHCS                  |        4 |
| M3x18 BHCS                 |        8 |

### :wrench: Nozzle Scrubber

Cleans the nozzle before printing and has sheet stops to locate the magnetic bed.

| Item                                                                                                                                                                                               | Quantity | Material                      |  Time |   Size | Weight |  Cost |      Printed       | Notes                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------: | ----------------------------- | ----: | -----: | -----: | ----: | :----------------: | ------------------------------------------ |
| [brush_holder_sheet_stop](https://github.com/VoronDesign/VoronUsers/blob/main/orphaned_mods/edwardyeeks/Decontaminator_Purge_Bucket_%26_Nozzle_Scrubber/STLs/brush_holder_sheet_stop_rev4.stl)     |        1 | [eSun ABS+ (Fire Engine Red)] |   50m |  1.74m |  4.44g | £0.07 | :heavy_check_mark: | This is a Voron Users mod by `edwardyeeks` |
| [extension_bracket](https://github.com/VoronDesign/VoronUsers/blob/main/orphaned_mods/edwardyeeks/Decontaminator_Purge_Bucket_%26_Nozzle_Scrubber/STLs/extension_bracket_v1.8_rev4.stl)            |        2 | [eSun ABS+ (Black)]           | 1h01m |  3.11m |  7.93g | £0.13 | :heavy_check_mark: | This is a Voron Users mod by `edwardyeeks` |
| [individual_sheetstop](https://github.com/VoronDesign/VoronUsers/blob/main/orphaned_mods/edwardyeeks/Decontaminator_Purge_Bucket_%26_Nozzle_Scrubber/STLs/individual_sheetstop_v1.8_v2.4_rev4.stl) |        1 | [eSun ABS+ (Fire Engine Red)] |   28m |  0.69m |  1.75g | £0.03 | :heavy_check_mark: | This is a Voron Users mod by `edwardyeeks` |
| [purge_bucket](https://github.com/VoronDesign/VoronUsers/blob/main/orphaned_mods/edwardyeeks/Decontaminator_Purge_Bucket_%26_Nozzle_Scrubber/STLs/purge_bucket_300mm_rev4.stl)                     |        1 | [eSun ABS+ (Black)]           | 3h55m | 12.11m | 30.87g | £0.50 | :heavy_check_mark: | This is a Voron Users mod by `edwardyeeks` |

#### Assembly

##### Parts Used

| Item                     | Quantity |
| ------------------------ | -------: |
| 6x3mm Neodimium Magnet   |        2 |
| M2x10 Self-Tapping Screw |        3 |
| M3 Hexnut                |        3 |
| M3 T-nut                 |        2 |
| M3x8 SHCS (Carbon Steel) |        5 |
| TriangleLabs Brass Brush |        1 |

### :wrench: Wiring

#### Assembly

##### Parts Used

| Item                                                    | Quantity |
| ------------------------------------------------------- | -------: |
| High Temp Yellow/Green Fibreglass coated wire 2.5mm (m) |        1 |
| M3x8 SHCS                                               |        2 |
| Red Ring Crimp Terminal                                 |        1 |
| Thermal Fuse (125C)                                     |        1 |

## Panel Mounting

![3D render of the Voron 1.8 Panels](/assets/blog/printer-voron-1.8/voron-design/panels.jpg 'Panels')

> Image © 2020 [Voron Design](https://www.vorondesign.com)

### :wrench: Panel Mounts

| Item                                                                                                                             | Quantity | Material                      | Time |  Size | Weight |  Cost |      Printed       | Notes                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------- | -------: | ----------------------------- | ---: | ----: | -----: | ----: | :----------------: | ---------------------------------------------------------------------------------------- |
| [bottom_panel_clip](https://github.com/VoronDesign/Voron-Trident/blob/VTr1/STLs/Panels/bottom_panel_clip_x4.stl)                 |    ~6~ 8 | [eSun ABS+ (Black)]           |  27m | 1.08m |  2.75g | £0.04 | :heavy_check_mark: | This is a [Trident] Part                                                                 |
| ~[bottom_panel_hinge](https://github.com/VoronDesign/Voron-Trident/blob/VTr1/STLs/Panels/bottom_panel_hinge_x2.stl)~             |      ~2~ | [eSun ABS+ (Black)]           |  42m | 1.54m |  3.94g | £0.06 | :heavy_check_mark: | This is a [Trident] Part                                                                 |
| [corner_panel_clip_4mm](https://github.com/VoronDesign/Voron-Trident/blob/VTr1/STLs/Panels/corner_panel_clip_4mm_x8.stl)         |        6 | [eSun ABS+ (Fire Engine Red)] |  28m | 1.09m |  2.77g | £0.04 | :heavy_check_mark: | This is a [Trident R1] Part                                                              |
| [corner_panel_clip_6mm](https://github.com/VoronDesign/Voron-Trident/blob/VTr1/STLs/Panels/corner_panel_clip_6mm_x8.stl)         |        8 | [eSun ABS+ (Fire Engine Red)] |  35m | 1.56m |  3.98g | £0.06 | :heavy_check_mark: | This is a [Trident R1] Part                                                              |
| [midspan_panel_clip_4mm](https://github.com/VoronDesign/Voron-Trident/blob/VTr1/STLs/Panels/midspan_panel_clip_4mm_x7.stl)       |        6 | [eSun ABS+ (Fire Engine Red)] |  19m | 0.71m |  1.82g | £0.03 | :heavy_check_mark: | This is a [Trident R1] Part                                                              |
| [midspan_panel_clip_6mm](https://github.com/VoronDesign/Voron-Trident/blob/VTr1/STLs/Panels/midspan_panel_clip_6mm_x8.stl)       |        8 | [eSun ABS+ (Fire Engine Red)] |  26m | 1.02m |  2.59g | £0.04 | :heavy_check_mark: | This is a [Trident R1] Part                                                              |
| [sturdy_handles](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/jeoje/Sturdy_Handles/STL/sturdy_handles.stl) |        2 | [eSun ABS+ (Black)]           |      |       |        |       |        :x:         | This is a Voron Users mod by `jeoje`. Not required as replacing with [LDO Carry Handles] |

[LDO Carry Handles]: https://www.onetwo3d.co.uk/product/ldo-carry-handles?wlr_ref=REF-ULH-QWV

> [!TIP]
> I have not been able to succesfully print the bottom panel hinges, they always seem to fuse up and the small pin just snaps when trying to free the hinge.
> If you have the same issue you replace them with extra panel clips instead.

#### Assembly

![Steve Builds would approve, I've fitted the bottom panel](/assets/blog/printer-voron-1.8/bottom-panel.jpg 'Bottom Panel')

##### Parts Used

| Item                  | Quantity |
| --------------------- | -------: |
| M3x8 SHCS             |       26 |
| M3x12 SHCS            |       24 |
| M3 Hammer Head T-nuts |       42 |
| M5 T-nut              |        4 |
| M5x10 BHCS            |        4 |

### :wrench: Front Doors

I have chosen to replace the stock door hinges, which are attached using VHB, with clamping door hinges that clamp around the acrylic panel and also allow the doors to open all the way.

| Item                                                                                                                                                               | Quantity | Material                      | Time |  Size | Weight |  Cost |      Printed       | Notes                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------: | ----------------------------- | ---: | ----: | -----: | ----: | :----------------: | ------------------------------------------------------------------------- |
| ~[door_hinge](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Panel_Mounting/Front_Doors/door_hinge_x4.stl)~                                             |    ~4~ 6 |                               |      |       |        |       |        :x:         | Using 2 extra here like the Trident. Will swap for `Clamping Door Hinges` |
| [face_plate_bottom](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/AlexanderT-Moss/270-Clamping-Hinges/STLs/face_plate_bottom.stl)             |        6 | [eSun ABS+ (Black)]           |  23m | 0.94m |  2.40g | £0.04 | :heavy_check_mark: | This is a Voron Users mod by `AlexanderT-Moss`                            |
| [face_plate_no_logo](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/AlexanderT-Moss/270-Clamping-Hinges/STLs/face_plate_no_logo.stl)           |        4 | [eSun ABS+ (Fire Engine Red)] |  44m | 1.90m |  4.85g | £0.08 | :heavy_check_mark: | This is a Voron Users mod by `AlexanderT-Moss`                            |
| [face_plate_through_logo](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/AlexanderT-Moss/270-Clamping-Hinges/STLs/face_plate_through_logo.stl) |        2 | [eSun ABS+ (Fire Engine Red)] |  45m | 1.87m |  4.76g | £0.08 | :heavy_check_mark: | This is a Voron Users mod by `AlexanderT-Moss`                            |
| [handle_bottom_left](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Panel_Mounting/Front_Doors/handle_bottom_left.stl)                                  |        1 | [eSun ABS+ (Fire Engine Red)] |  33m | 1.57m |  4.01g | £0.06 | :heavy_check_mark: |
| [handle_bottom_right](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Panel_Mounting/Front_Doors/handle_bottom_right.stl)                                |        1 | [eSun ABS+ (Fire Engine Red)] |  33m | 1.58m |  4.02g | £0.06 | :heavy_check_mark: |
| [handle_top_left](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Panel_Mounting/Front_Doors/handle_top_left.stl)                                        |        1 | [eSun ABS+ (Fire Engine Red)] |  32m | 1.36m |  3.48g | £0.06 | :heavy_check_mark: |
| [handle_top_right](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Panel_Mounting/Front_Doors/handle_top_right.stl)                                      |        1 | [eSun ABS+ (Fire Engine Red)] |  32m | 1.36m |  3.47g | £0.06 | :heavy_check_mark: |
| [latch](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Panel_Mounting/Front_Doors/latch.stl)                                                            |        1 | [eSun ABS+ (Black)]           |  32m | 1.23m |  3.14g | £0.05 | :heavy_check_mark: |
| [side_mount](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/AlexanderT-Moss/270-Clamping-Hinges/STLs/side_mount_brimed.stl)                    |        6 | [eSun ABS+ (Fire Engine Red)] |  44m | 1.89m |  4.82g | £0.08 | :heavy_check_mark: | This is a Voron Users mod by `AlexanderT-Moss`                            |

#### Assembly

![Door Hinges that do not require VHB Tape](/assets/blog/printer-voron-1.8/clamping-door-hinges.jpg 'Clamping Door Hinges')

##### Parts Used

| Item                   | Quantity |
| ---------------------- | -------: |
| 3M VHB Tape 5952       |        1 |
| 6x3mm Neodimium Magnet |       10 |
| M3 Hammer Head T-nuts  |        7 |
| M3 Hex Nuts            |       12 |
| M3x8 SHCS              |       31 |

### :wrench: Spool Management

| Item                                                                                                                  | Quantity | Material            |  Time |  Size | Weight |  Cost |      Printed       | Notes                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | -------: | ------------------- | ----: | ----: | -----: | ----: | :----------------: | ----------------------------------------------------------------------------------------------------------------------------------- |
| ~[bowden_retainer](https://github.com/VoronDesign/Voron-Trident/blob/VTr1/STLs/Spool_Management/bowden_retainer.stl)~ |      ~1~ |                     |       |       |        |       |        :x:         | This is a [Trident] Part. Not printing this as I will be using the [Smart Filament Sensor Mount](#-smart-filament-sensor-mount)     |
| [spool_holder](https://github.com/VoronDesign/Voron-Trident/blob/VTr1/STLs/Spool_Management/spool_holder.stl)         |        2 | [eSun ABS+ (Black)] | 2h02m | 5.89m | 15.01g | £0.25 | :heavy_check_mark: | This is a [Trident] Part. May not need this as I currently use an [eSun Filament Dryer box](https://www.amazon.co.uk/dp/B094XWVQ1X) |

#### Assembly

![Spool Holders with Red PTFE guides](/assets/blog/printer-voron-1.8/spool-holders.jpg 'Spool Holders')

##### Parts Used

| Item                  | Quantity |
| --------------------- | -------: |
| Red Bowden Tube (m)   |        1 |
| M5 Hammer Head T-nuts |        2 |
| M5x16 BHCS            |        2 |

### :negative_squared_cross_mark: Smart Filament Sensor Mount

Mount for the BigTreeTech Smart filment sensor V1.0 that I already have. There are two different mounts, one vertical and one horizontal.

| Item                                                                                                                                                     | Quantity | Material            |  Time |  Size | Weight |  Cost |      Printed       | Notes                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------: | ------------------- | ----: | ----: | -----: | ----: | :----------------: | -------------------------------------- |
| [BTT_Sensor_Mount_A](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/Empusas/BTT_Filament_Motion_Sensor_Mount/BTT_Sensor_Mount_A.stl) |        2 |                     |       |       |        |       |        :x:         | This is a Voron Users mod by `Empusas` |
| [BTT_Sensor_Mount_B](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/Empusas/BTT_Filament_Motion_Sensor_Mount/BTT_Sensor_Mount_B.stl) |        2 | [eSun ABS+ (Black)] | 1h11m | 3.61m |  9.21g | £0.15 | :heavy_check_mark: | This is a Voron Users mod by `Empusas` |

I have printed the 'B' mounts as I am planning on mounting 2 of them, 1 at the top of each rear extrusion along with an [M4 extruder](voron-m4) on each side. I have had to mirror one part along the Y axis when importing to the slicer as I want a mirrored version for opposite sides of the printer.

#### Assembly

##### Parts Used

| Item                                 | Quantity |
| ------------------------------------ | -------: |
| BigTreeTech Smart Filament Sensor V1 |        2 |
| M3 Hammer Head T-nuts                |        4 |
| M3x8 SHCS                            |        4 |

### :negative_squared_cross_mark: Tophat

The bowden is very close to the top panel, this raises the top panel up by 35mm to stop the bowden scratching the acrylic.

| Item                                                                                                                 | Quantity | Material                      | Time | Size | Weight | Cost | Printed | Notes                      |
| -------------------------------------------------------------------------------------------------------------------- | -------: | ----------------------------- | ---: | ---: | -----: | ---: | :-----: | -------------------------- |
| [V2_Trident_300_Tophat_35mm_Side_left](https://www.printables.com/model/571759/files#folder:model:35mm%20300)        |        2 | [eSun ABS+ (Fire Engine Red)] |      |      |        |      |   :x:   | This is a mod by [Luc1luc] |
| [V2_Trident_300_Tophat_35mm_Front_Back_left](https://www.printables.com/model/571759/files#folder:model:35mm%20300)  |        2 | [eSun ABS+ (Fire Engine Red)] |      |      |        |      |   :x:   | This is a mod by [Luc1luc] |
| [V2_Trident_300_Tophat_35mm_Front_Back_right](https://www.printables.com/model/571759/files#folder:model:35mm%20300) |        2 | [eSun ABS+ (Fire Engine Red)] |      |      |        |      |   :x:   | This is a mod by [Luc1luc] |
| [V2_Trident_300_Tophat_35mm_Side_right](https://www.printables.com/model/571759/files#folder:model:35mm%20300)       |        2 | [eSun ABS+ (Fire Engine Red)] |      |      |        |      |   :x:   | This is a mod by [Luc1luc] |
| [V2_Trident_Tophat_Connector_Cover](https://www.printables.com/model/571759/files)                                   |        4 | [eSun ABS+ (Fire Engine Red)] |      |      |        |      |   :x:   | This is a mod by [Luc1luc] |
| [V2_Trident_Tophat_Connector](https://www.printables.com/model/571759/files)                                         |        4 | [eSun ABS+ (Fire Engine Red)] |      |      |        |      |   :x:   | This is a mod by [Luc1luc] |
| [Voron_Logo_Stripes_Connector_Cover_Inserts](https://www.printables.com/model/571759/files)                          |        4 | [eSun ABS+ (Black)]           |      |      |        |      |   :x:   | This is a mod by [Luc1luc] |
| [Magnet-Insert](https://www.printables.com/model/571759/files#folder:model:MISC)                                     |       12 | [eSun ABS+ (Black)]           |      |      |        |      |   :x:   | This is a mod by [Luc1luc] |
| [Unhammer-v2-Hex-Head](https://www.printables.com/model/571759/files#folder:model:MISC)                              |       12 | [eSun ABS+ (Black)]           |      |      |        |      |   :x:   | This is a mod by [Luc1luc] |

#### Assembly

##### Parts Used

| Item               | Quantity |
| ------------------ | -------: |
| 6x3 Magnet         |       48 |
| M3x6 SHCS          |        4 |
| M3x8 SHCS          |        8 |
| M3 Threaded Insert |       20 |
| 1x5mm Foam Tape    |     1-2m |
| 1x5mm VHB Tape     |     1-2m |
| Super Glue         |        1 |

[Filament]: #
[Amazon Basics PETG (Red)]: printer-filament#amazon-basics-petg-red
[eSun ABS+ (Black)]: printer-filament#esun-abs-black 'Primary Color'
[eSun ABS+ (Fire Engine Red)]: printer-filament#esun-abs-fire-engine-red 'Accent Color'
[Tinmorry PETG (Black)]: printer-filament#tinmorry-petg-black
[Related Links]: #
[Switchwire]: https://github.com/VoronDesign/Voron-Switchwire
[Trident]: https://github.com/VoronDesign/Voron-Trident/releases/tag/Trident
[Trident R1]: https://github.com/VoronDesign/Voron-Trident/releases/tag/VTr1
[Trident R2]: https://github.com/VoronDesign/Voron-Trident/releases/tag/VTr2
[Voron 1.6]: https://github.com/VoronDesign/Voron-1/tree/Voron1.6
[Voron 2.2]: https://github.com/VoronDesign/Voron-2/tree/Voron2.2
[Voron 2.4]: https://github.com/VoronDesign/Voron-2/tree/Voron2.4
[Voron Parts]: https://github.com/VoronDesign/Voron-Parts
[Printables]: #
[Luc1luc]: https://www.printables.com/@Luc1luc_279134
