---
title: Voron 2.4
heading: Building the Flying Gantry Voron
date: 2024-05-14T21:10:30.971Z
lastmod: 2025-10-17T22:00:44.220Z
author: Mike Thomas
description: Building another Voron... The Voron 2.4 with it's flying gantry.
preview: /assets/blog/printer-voron-2.4/voron-hero.jpg
slug: /projects/printer-voron-2.4
related:
  - /projects/voron-stealthburner
  - /projects/enraged-rabbit-carrot-feeder-2.0
  - /projects/nevermore-filter
  - /projects/printer-klipper-firmware
external:
  - https://www.vorondesign.com/voron2.4
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

The following list of parts are from the Bill of Materials (BOM) for a 300mm spec printer that can be found via the `Configurator` on the [Voron2 v2.4 page on the Voron Design Website](https://www.vorondesign.com/voron2.4).

## Fasteners

![Description of the types of fasteners](/assets/blog/printer-voron-2.4/voron-design/fasteners.jpg 'Fasteners')

> Image © 2023 [Voron Design](https://www.vorondesign.com/)

| Item                        | Quantity | Received | Notes                                  |
| --------------------------- | -------- | -------- | -------------------------------------- |
| M5x40 SHCS                  | 22       | 27       | In LDO Voron V2.4 Premium Hardware Kit |
| M5x30 BHCS                  | 22       | 25       | In LDO Voron V2.4 Premium Hardware Kit |
| M5x16 BHCS                  | 35       | 38       | In LDO Voron V2.4 Premium Hardware Kit |
| M5x10 BHCS                  | 35       | 38       | In LDO Voron V2.4 Premium Hardware Kit |
| M5 Post-install T-nut       | 68       | 70       | In LDO Voron V2.4 Premium Hardware Kit |
| M5 Hexnut                   | 16       | 20       | In LDO Voron V2.4 Premium Hardware Kit |
| M5 1mm Shim                 | 42       | 46       | In LDO Voron V2.4 Premium Hardware Kit |
| M4x6 BHCS                   | 7        | 9        | In LDO Voron V2.4 Premium Hardware Kit |
| M4 Knurled Nut (DIN 466-B)  | 4        | 4        | In LDO Voron V2.4 Premium Hardware Kit |
| M3x8 SHCS                   | 180      | 190      | In LDO Voron V2.4 Premium Hardware Kit |
| M3x6 FHCS                   | 8        | 51       |                                        |
| M3x6 BHCS                   | 11       | 16       | In LDO Voron V2.4 Premium Hardware Kit |
| M3x50 SHCS                  | 2        |          | See [StealthBurner][StealthBurner] BOM |
| M3x40 SHCS                  | 30       | 33       | In LDO Voron V2.4 Premium Hardware Kit |
| M3x30 SHCS                  | 25       | 35       | In LDO Voron V2.4 Premium Hardware Kit |
| M3x25 SHCS                  | 6        |          | See [StealthBurner][StealthBurner] BOM |
| M3x20 SHCS                  | 22       | 30       | In LDO Voron V2.4 Premium Hardware Kit |
| M3x16 SHCS                  | 20       | 23       | In LDO Voron V2.4 Premium Hardware Kit |
| M3x12 SHCS                  | 41       | 44       | In LDO Voron V2.4 Premium Hardware Kit |
| M3x10 FHCS                  | 4        | 55       |                                        |
| M3 Washer                   | 4        | 3        | In LDO Voron V2.4 Premium Hardware Kit |
| M3 Threaded Insert (M3x5x4) | 110      | 95       | In LDO Voron V2.4 Premium Hardware Kit |
| M3 Post-install T-nut       | 96       | 124      | In LDO Voron V2.4 Premium Hardware Kit |
| M3 Hexnut                   | 6        | 12       | In LDO Voron V2.4 Premium Hardware Kit |
| M3 Hammer Head T-nuts       | 60       | 65       | In LDO Voron V2.4 Premium Hardware Kit |
| M2x10 Self-tapping Screw    | 18       | 18       | In LDO Voron V2.4 Premium Hardware Kit |

![A big ol' bag of nuts n' bolts](/assets/blog/printer-voron-2.4/ldo-hardware-kit.jpg 'LDO Hardware Kit')

I got the majority of the fasteners in a kit at a good discount (the original price was £83, and I got it for £50) as the kit is for the pre V2.4R2 revision.
I have sourced the missing quantities of parts from elsewhere and I should also have many spares left over for mods and future projects.

## Motion

![Description of the types of motion components](/assets/blog/printer-voron-2.4/voron-design/motion.jpg 'Motion')

> Image © 2023 [Voron Design](https://www.vorondesign.com/)

| Item                                       | Quantity | Received | Notes                                   |
| ------------------------------------------ | -------- | -------- | --------------------------------------- |
| Ø5x60mm Shaft, D Cut                       | 4        | 4        | In [Powge 2.4r2 Motion Kit][Motion Kit] |
| Ø5x35mm Shaft (trim to size)               | 1        | 1        | In [Powge 2.4r2 Motion Kit][Motion Kit] |
| Linear Rail MGN9H 350mm                    | 6        | 6        | Stainless Steel, Medium Preload         |
| Linear Rail MGN12H 350mm                   | 1        | 1        | All Stainless Steel, Medium Preload     |
| GT2 Open Belt LL-2GT-9 (9mm wide) - 1100mm | 4        | 4        | In [Powge 2.4r2 Motion Kit][Motion Kit] |
| GT2 Open Belt LL-2GT-6 (6mm wide) - 1800mm | 2        | 2        | In [LDO CNC AWD Kit][AWD Kit]           |
| GT2 Belt Loop (6mm W) - 188mm              | 4        | 4        | In [Powge 2.4r2 Motion Kit][Motion Kit] |
| GT2 80T Pulley (5mm ID 6mm W)              | 4        | 4        | In [Powge 2.4r2 Motion Kit][Motion Kit] |
| GT2 20T Toothed Idler (5mm ID 9mm W)       | 4        | 4        | In [Powge 2.4r2 Motion Kit][Motion Kit] |
| GT2 20T Toothed Idler (5mm ID 6mm W)       | 2        | 2        | In [Powge 2.4r2 Motion Kit][Motion Kit] |
| GT2 20T Pulley (5mm ID 9mm W)              | 4        | 4        | In [Powge 2.4r2 Motion Kit][Motion Kit] |
| GT2 20T Pulley (5mm ID 6mm W)              | ~3~ 6    | 6        | In [LDO CNC AWD Kit][AWD Kit]           |
| GT2 16T Pulley (5mm ID 6mm W)              | 4        | 4        | In [Powge 2.4r2 Motion Kit][Motion Kit] |
| F695 Bearing                               | ~20~ 26  | 26       | In [LDO CNC AWD Kit][AWD Kit]           |
| BMG Extruder Components Kit                | 1        |          | See [StealthBurner][StealthBurner] BOM  |
| 625 Bearing                                | 12       | 12       | In [Powge 2.4r2 Motion Kit][Motion Kit] |

> [!NOTE]
> The Linear Rails are [RDBB All Stainless Steel Versions](https://www.aliexpress.com/item/1005003476565429.html).
> If you get the same, make sure to request medium preload when ordering, otherwise you will be randomly sent either light or medium preload.
>
> All other parts except for the `BMG Extruder Components Kit` are either from the [Powge 2.4r2 Motion Kit][Motion Kit] or the [LDO CNC AWD Kit][AWD Kit].

[AWD Kit]: https://www.onetwo3d.co.uk/product/ldo-voron-awd-all-wheel-drive-upgrade-kit 'LDO Voron AWD (All-Wheel-Drive) Upgrade Kit from OneTwo3D'
[Motion Kit]: https://www.aliexpress.com/item/4000937359753.html 'Powge Voron 2.4 R2 Motion Kit from Ali Express'

## Electronics

![3D render of the Voron 2.4 Electronics](/assets/blog/printer-voron-2.4/voron-design/electronics.jpg 'Electronics')

> Image © 2023 [Voron Design](https://www.vorondesign.com/)

| Item                                                  | Quantity | Received | Notes                                                                                              |
| ----------------------------------------------------- | -------- | -------- | -------------------------------------------------------------------------------------------------- |
| ZF Rocker Switch DPST 16A ON-OFF                      | 1        |          | Using [Inlet Power Socket IEC320 C14][Power Inlet] instead                                         |
| USB Cable for selected controller                     | 1        | 1        |                                                                                                    |
| TycoElectronics 10EGG1-1 Filtered Power Inlet (NA/UK) | 1        |          | Using [Inlet Power Socket IEC320 C14][Power Inlet] instead                                         |
| Thermal Fuse (150C)                                   | 1        | 1        | 120C Thermal Fuse left over from [Voron 1.8](printer-voron-1.8) build                              |
| TMC2209 Stepper Motor Driver                          | 7        | 12       | Mellow Fly TMC2130                                                                                 |
| RaspberryPi 3B+ or better                             | 1        | 1        |                                                                                                    |
| Omron G3A-210B-DC5 SSR                                | 1        | 1        | [Omron G3NA-210B-UTU][SSR]                                                                         |
| Omron D2F-01L Micro Switch                            | 3        | 30       |                                                                                                    |
| NEMA17 Motor 17HS19-2004S                             | 6        | 6        | 4 [LDO Speedy Power HT Motors][A/B Motor] for A/B & 4 [LDO SwitchWire Motors][Z Motor] for Z       |
| NEMA14 Motor 36STH20-1004AHG                          | 1        |          | See [StealthBurner][StealthBurner] BOM                                                             |
| ~Mini 12864 Display~                                  | ~1~      |          | I will be using a [BigTreeTech PITFT50 V2.0 Display][PITFT50] instead                              |
| Medium Blow Fuse 5x20mm 4A (220V mains)               | 2        |          | Comes with [Inlet Power Socket IEC320 C14][Power Inlet]                                            |
| Mean Well RS-25-5 PSU                                 | 1        | 1        |                                                                                                    |
| Mean Well LRS-200-24 PSU                              | 1        | 1        |                                                                                                    |
| ~Keystone CAT6 Insert (Optional)~                     | ~1~      |          | I plan on printing the [PiPlate Skirt](#-raspberry-pi) instead                                     |
| ~Inductive Probe (See sourcing guide)~                | ~1~      | ~1~      | I will be installing [ChaoticLab CNC Tap][Tap] instead                                             |
| Hotend Kit (24V)                                      | 1        |          | V6 Heatsink and Bi-Metal Heatbreak                                                                 |
| DIN Rail Mount Bracket for G3A SSR                    | 1        | 1        |                                                                                                    |
| Controller with 7+ Stepper outputs                    | 1        | 1        | [Mellow Fly Super8 V1.0][Controller]                                                               |
| C13 Power Cord                                        | 1        | 1        |                                                                                                    |
| ~BAT85 Diode~                                         | ~1~      | 7        | Comes installed on [LDO Toolhead PCB][Toolhead PCB]                                                |
| 60x60x20 Fan (24V)                                    | 3        | 2        | AFB0624HD Delta Fans, 1 Not required as I am building [Nevermore StealthMax][StealthMax] instead   |
| ~40x40x20 Centrifugal Fan (24V)~                      | ~1~      |          | Not required, for [AfterBurner][AfterBurner], I am building [StealthBurner][StealthBurner] instead |
| ~40x40x10 Axial Fan (24V)~                            | ~1~      |          | Not required, for [AfterBurner][AfterBurner], I am building [StealthBurner][StealthBurner] instead |
| Filament Sensor                                       |          | 2        | [BigTreeTech Smart Filament Sensor V2.0][Filament Sensor]                                          |

[A/B Motor]: https://www.onetwo3d.co.uk/product/ldo-42sth48-2504-s35-stepper-motor 'LDO 42STH48-2504AH(S35) Stepper Motor from OneTwo3D'
[Controller]: https://mellow-3d.github.io/fly_super8.html 'Mellow Fly Super8 V1.0'
[Filament Sensor]: https://biqu.equipment/products/btt-sfs-v2-0-smart-filament-sensor 'BigTreeTech Smart Filament Sensor V2.0'
[PITFT50]: https://biqu.equipment/products/bigtreetech-pi-tft43-v2-0-screen-board 'BigTreeTech PITFT50 V2.0 Touch Screen for Raspberry Pi'
[Power Inlet]: https://www.amazon.co.uk/dp/B0BVRF249S 'POFET Power Supply Socket with Fuse for 3D Printer from Amazon'
[SSR]: https://www.onetwo3d.co.uk/product/omron-g3na-210b-utu-solid-state-relay-ssr 'Omron Solid State relay (SSR) from OneTwo3D'
[Tap]: https://www.chaoticlab.com/products/cnc-voron-tap?variant=40494842675298 'Chaoticlab CNC Voron Tap V2.0'
[Toolhead PCB]: https://docs.ldomotors.com/en/voron/toolhead_harness#the-toolhead-pcb-stealthburner-version 'LDO Toolhead Wiring Kit Toolhead PCB (Stealthburner Version)'
[Z Motor]: https://www.onetwo3d.co.uk/product/ldo-stepper-motor-42sth40-1684ac 'LDO Stepper Motor (42STH40-1684AC) from OneTwo3D'

## Vibration Management

| Item                            | Quantity | Received | Notes |
| ------------------------------- | -------- | -------- | ----- |
| Rubber Foot (1.5x.75", 38x19mm) | 4        | 4        |       |

## Frame

![3D render of the Voron 2.4 Frame](/assets/blog/printer-voron-2.4/voron-design/frame.jpg 'Frame')

> Image © 2023 [Voron Design](https://www.vorondesign.com/)

| Item                                            | Quantity | Received | Notes |
| ----------------------------------------------- | -------- | -------- | ----- |
| OpenBuilds Billet Angle Corner Connector (2020) | 4        | 4        |       |
| Misumi HFSB5-2020-480-LCP-RCP                   | 4        | 4        |       |
| Misumi HFSB5-2020-420-TPW                       | 10       | 10       |       |
| Misumi HFSB5-2020-400                           | 2        | 2        |       |
| Misumi HFSB5-2020-380                           | 1        | 1        |       |
| Misumi HFSB5-2020-290                           | 1        | 1        |       |
| DIN 3 Rails (35mm W) - 415mm                    | 2        | 2        | 400mm |

> [!NOTE]
> All parts except from the `DIN 3 Rails` are from the [LDO V2.4 300 Frame Kit](https://www.onetwo3d.co.uk/product/voron-2-4-frame-set-ldo 'LDO Voron 2.4 Frame Set from OneTwo3D').

## Misc

| Item                                  | Quantity | Received | Notes |
| ------------------------------------- | -------- | -------- | ----- |
| Ø6x3mm Neodimium Magnet               | 8        | 8        |       |
| Single Sided Foam Tape 3mm Thick (5m) | 1        | 1        |       |
| Single Sided Foam Tape 1mm Thick (5m) | 1        | 1        |       |
| PTFE Tube (4mm OD 3mm ID) - 1000mm    | 1        | 1        |       |
| PTFE Tube (4mm OD 2mm ID) - 300mm     | 1        | 1        |       |
| Mobil EP1/2 Grease                    | 1        | 1        |       |
| Loctite Blue Threadlocker Stick       | 1        | 1        |       |
| Fume Extractor Carbon Filter Element  | 1        | 1        |       |
| 4mm Threaded Bowden Coupler           | 1        | 1        |       |
| 3M VHB Tape 5952                      | 1        | 1        |       |

## Cables

![Image of the Voron 2.4 Wiring](/assets/blog/printer-voron-2.4/voron-design/wiring.jpg 'Wiring')

> Image © 2023 [Voron Design](https://www.vorondesign.com/)

| Item                                                           | Quantity | Received | Notes                                              |
| -------------------------------------------------------------- | -------- | -------- | -------------------------------------------------- |
| WAGO 221-415 Lever-Nuts                                        | 3        | 10       |                                                    |
| Ring Crimp Terminal (16-22AWG, #6)                             | 1        | 1        |                                                    |
| Nylon Cable Ties, Small (.07-.10", 1.8-2.7mm wide)             | 42       | 100      |                                                    |
| MicroFit3 Male Pin                                             | 40       | 140      |                                                    |
| MicroFit3 Female Pin                                           | 40       | 140      |                                                    |
| MicroFit3 Connector Receptacle 4 Position                      | 4        | 10       |                                                    |
| MicroFit3 Connector Receptacle 3 Position                      | 1        | 10       |                                                    |
| MicroFit3 Connector Receptacle 2 Position                      | 2        | 10       |                                                    |
| MicroFit3 Connector Plug 4 Position                            | 4        | 10       |                                                    |
| MicroFit3 Connector Plug 3 Position                            | 1        | 10       |                                                    |
| MicroFit3 Connector Plug 2 Position                            | 2        | 10       |                                                    |
| MLX Power Receptacle 3 Position (bed wiring)                   | 1        |          | Using Wagos instead                                |
| MLX Power Plug 3 Position                                      | 1        |          | Using Wagos instead                                |
| MLX Male Pin                                                   | 6        |          | Using Wagos instead                                |
| MLX Female Pin                                                 | 6        |          | Using Wagos instead                                |
| JST XH Connector, 3 Position Male/Female Pair plus Pins        | 1        | 1        |                                                    |
| Fork Spade Crimp Terminal (18-22AWG, #10)                      | 5        | 5        |                                                    |
| Female Spade Crimp Terminal (18-22AWG, .250", 6.35mm)          | 7        | 7        |                                                    |
| Crimp Ferrule Kit (covering sizes 24AWG to 18AWG)              | 1        | 1        |                                                    |
| Connector kit matching your controller choice (usually JST-XH) | 1        | 1        |                                                    |
| ~22-24AWG High-flex Wire (min 19 strand)(250ft/76m total)~     | ~1~      |          | Using LDO Toolhead Cable instead                   |
| 20AWG High-flex Wire (10ft/3m total)                           | 1        | 1        | In various colours                                 |
| 18AWG Wire (10ft/3m total)                                     | 1        | 1        | Salvaged from a MacBook Power Supply Mains Cable   |
| 10x15 Generic Cable Chain (495mm)                              | 1        | 1        | Veekaft Brand, 10x15 open, to insert cables easier |
| 10x10 Generic Cable Chain (355mm)                              | 2        | 2        | Veekaft Brand, 10x11 open, to insert cables easier |

> [!NOTE]
> I ordered [Veekaft Brand](https://www.aliexpress.com/item/1005001795469984.html) cable chains specifying a Bending Radius of `R18`.

## Panels

| Item                                 | Quantity | Received | Notes |
| ------------------------------------ | -------- | -------- | ----- |
| Coroplast Sheet - 433x453x4 mm       | 1        | 1        |       |
| Coroplast Sheet - 419x419x4 mm       | 2        | 2        |       |
| Acrylic Sheet Clear - 433x453x3 mm   | 2        | 2        |       |
| Acrylic Sheet Clear - 433x433x3 mm   | 1        | 1        |       |
| Acrylic Sheet Clear - 216.5x453x3 mm | 2        | 2        |       |

> [!NOTE]
> Instead of Coroplast Sheets I ordered [3mm Black ACM Panels](https://plasticsheetsshop.co.uk/product/black-aluminium-composite-panel-3mm 'Black aluminium composite panel from Plastic Sheets Shop')
> using the DXFs from the [Voron 2.4 GitHub Repository](https://github.com/VoronDesign/Voron-2/tree/Voron2.4/Drawing_DXFs/Panels), marked `300`,
> and instead of Acrylic Sheets I ordered [3mm Clear Polycarbonate Panels](https://plasticsheetsshop.co.uk/product/clear-polycarbonate-sheet-3mm 'Clear polycarbonate sheet from Plastic Sheets Shop')
> specifing the width and height from the table above.

## Buildplate

![3D render of the Voron 2.4 Print Bed](/assets/blog/printer-voron-2.4/voron-design/print-bed.jpg 'Print Bed')

> Image © 2023 [Voron Design](https://www.vorondesign.com/)

| Item                                                        | Quantity | Received | Notes                                                        |
| ----------------------------------------------------------- | -------- | -------- | ------------------------------------------------------------ |
| Spring Steel Flexible Print Surface - 12"x12"               | 1        | 1        | [Energetic Dual Sided Textured PEI & Smooth PEY][Flex Plate] |
| MIC6 5/16" Plate - 12"x12"                                  | 1        | 1        | [Mandela Rose Works Non-Magnetic Plate][Build Plate]         |
| Keenovo Silicone AC Heater w/ thermistor - 250x250mm (450W) | 1        | 1        | [Keenovo 150 220V 400W][Heater]                              |
| Adhesive Magnetic Sheet - 12"x12"                           | 1        | 1        | Came with [Energetic Spring Steel Sheet][Flex Plate]         |

[Build Plate]: https://www.onetwo3d.co.uk/product/mandala-rose-works-ultra-flat-voron-2-4-trident-bed-magnetic-non-magnetic 'Mandala Rose Works ultra-flat Voron 2.4 Bed (non-magnetic) from OneTwo3D'
[Flex Plate]: https://www.aliexpress.com/item/1005006340164332.html 'Energetic Spring Steel Magnetic Print Bed from Ali Express'
[Heater]: https://www.onetwo3d.co.uk/product/keenovo-heater-pads 'Keenovo Heater Pad for Voron Printers from OneTwo3D'

# Printing Parts

All printed parts will be printed in eSun ABS+. The Voron team recommends an infill type of 40% of either Grid, Gyroid, Honeycomb, Triangle or Cubic. A layer height of 0.2mm and extrusion width of 0.4mm, with a wall count of 4 and top/bottom layers of 5.

[accent]: printer-filament#esun-abs-purple 'Accent Color'
[primary]: printer-filament#esun-abs-black 'Primary Color'

## Tools

| Item                                                                                                                                                                                                           | Quantity | Material                     | Size  | Weight | Cost  |      Printed       | Notes                                                                         |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------- | ----- | ------ | ----- | :----------------: | ----------------------------------------------------------------------------- |
| [jig](https://github.com/VoronDesign/VoronUsers/blob/main/printer_mods/claytono/2.4-extrusion-jig/jig.stl)                                                                                                     | 1        | [eSun ABS+ (Black)][primary] | 3.77m | 9.60g  | £0.16 | :heavy_check_mark: | This is a Voron Users mod by `claytono`                                       |
| [Bed_Support_Alignment_Tool_300_Corners](https://github.com/VoronDesign/VoronUsers/blob/main/printer_mods/GadgetAngel/Bed_Support_Alignment_Tools/Bed_Support_Alignment_Tool_300_Corners_x4.stl)               | ~4~ 2    | [eSun ABS+ (Black)][primary] | 2.22m | 5.65g  | £0.09 | :heavy_check_mark: | This is a Voron Users mod by `GadgetAngel`. 4 recommended I'm only printing 2 |
| [Bed_Support_Alignment_Tool_Center_250_300_350](https://github.com/VoronDesign/VoronUsers/blob/main/printer_mods/GadgetAngel/Bed_Support_Alignment_Tools/Bed_Support_Alignment_Tool_Center_250_300_350_x2.stl) | 2        | [eSun ABS+ (Black)][primary] | 2.30m | 5.86g  | £0.10 | :heavy_check_mark: | This is a Voron Users mod by `GadgetAngel`                                    |
| [MGN12_rail_guide](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Tools/MGN12_rail_guide_x2.stl)                                                                                                    | 2        | [eSun ABS+ (Black)][primary] | 1.05m | 2.69g  | £0.04 | :heavy_check_mark: |                                                                               |
| ~[MGN9_rail_guide](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Tools/MGN9_rail_guide_x2.stl)~                                                                                                    | ~2~      |                              |       |        |       |        :x:         | I will use the ones I printed for [Voron 1.8](printer-voron-1.8#tools)        |
| ~[pulley_jig](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Tools/pulley_jig.stl)~                                                                                                                 | ~1~      |                              |       |        |       |        :x:         | I will use the one I printed for [Voron 1.8](printer-voron-1.8#tools)         |

## Frame

![3D render of the Voron 2.4 Frame](/assets/blog/printer-voron-2.4/voron-design/frame.jpg 'Frame')

> Image © 2023 [Voron Design](https://www.vorondesign.com/)

### :white_check_mark: Main Frame Assembly

![Getting all the parts and tools together to build the frame](/assets/blog/printer-voron-2.4/preparing-the-parts-and-tools.jpg 'Preparing the Parts and Tools')

#### Assembly

To aid in keeping the frame square I added some Square Frame Washers into the blind joints. These have metal claws that fit into the grooves of the extrusion to help stop the extrusion from twisting whilst tightening up the bolts.

![Square frame nuts to help stop extrusions from twisting](/assets/blog/printer-voron-2.4/square-frame-washers.jpg 'Square Frame Washers')

##### Parts Needed

| Item                                        | Quantity |
| ------------------------------------------- | -------- |
| M5x16 BHCS                                  | 16       |
| Misumi HFSB5-2020-420-TPW (A Extrusion)     | 8        |
| Misumi HFSB5-2020-480-LCP-RCP (B Extrusion) | 4        |
| Square Frame Washers                        | 16       |

![Using a flat glass surface to keep the frame square during assembly](/assets/blog/printer-voron-2.4/assembling-the-frame.jpg 'Assembling The Frame')

As mentioned in the manual, it is a good idea to build the frame on a flat surface. I used a large pane of glass to endure the edges of the extrusions were completely square whilst tightening up the bolts of the blind joints.

### :white_check_mark: Bed Extrusions

![Adding the Angle Corner Connectors to the Bed Extrusions](/assets/blog/printer-voron-2.4/bed-extrusions.jpg 'Bed Extrusions')

The glass was also used to endure the Right Angle Corner Connectors were attached square to the ends of the extrusion.

#### Assembly

##### Parts Needed

| Item                                            | Quantity |
| ----------------------------------------------- | -------- |
| M5x10 BHCS                                      | 4        |
| M5x16 BHCS                                      | 4        |
| M5 Post-install T-nut                           | 4        |
| M5 1mm Shim                                     | 4        |
| Misumi HFSB5-2020-420-TPW (A Extrusion)         | 2        |
| OpenBuilds Billet Angle Corner Connector (2020) | 4        |

I used the [Bed Support Alignment Tools](#tools) to get the bed extrusions roughly aligned in the correct place on the main frame. I found that they were a little too small to accurately screw them down so I also used a ruler to measure that they were tightened down in the correct place.

## Z Drives

![3D render of the Voron 2.4 Z Drives](/assets/blog/printer-voron-2.4/voron-design/z-drives.jpg 'Z Drives')

> Image © 2023 [Voron Design](https://www.vorondesign.com/)

### :white_check_mark: Z Rails

![Cleaning the bearings with IPA](/assets/blog/printer-voron-2.4/bearings-cleaning.jpg 'Bearings Cleaning')

The linear rails come delivered with a coating of oil to prevent rust during storage and shipping. This coating is not a lubricant and needs to be removed before applying a coating of grease to the bearing surfaces.

I carefully removed the carriages from the rails and soaked them in Isopropyl alcohol for a few hours, then let them air dry before applying Mobil EP2 grease with a syringe directly to the ball bearings. I then reassembled the rails and applied more grease through one of the mounting holes behind the carriage.

![Bearings assembled and ready for installation](/assets/blog/printer-voron-2.4/bearings-assembled.jpg 'Bearings Assembled')

| Item                                                                                           | Quantity | Material                     | Size  | Weight | Cost  |      Printed       | Notes                  |
| ---------------------------------------------------------------------------------------------- | -------- | ---------------------------- | ----- | ------ | ----- | :----------------: | ---------------------- |
| [z_rail_stop](https://github.com/MotorDynamicsLab/LDOVoron2/blob/main/STLs/z_rail_stop_x4.stl) | 4        | [eSun ABS+ (Purple)][accent] | 0.51m | 1.31g  | £0.03 | :heavy_check_mark: | This is a LDO 2.4 Part |

#### Assembly

I laid the rail next to the slot on the extrusion where it was about to be installed and used it as a guide to ensure the T-nuts are spaced where they need to be before lightly screwing them down.

The manual mentions to install the rails ~3mm from the bottom extrusions. I used the [Pully Jig](#tools) as a spacer for this as it is slightly thicker at 3.1mm, measured with my digital calipers.

I then used the [MGN9 Rail Guides](#tools) to center the rail on the extrusion and tightend down the screws starting from the center outward to make sure it sits flush.

![Z Axis linear rails installed on the frame](/assets/blog/printer-voron-2.4/z-rails-installed.jpg 'Z Rails Installed')

The rails on the 300mm build require an extra T-nut and Socket Head Screw, per rail, than what is shown in the manual. I have also added the LDO Z Rail stops to the top of each one to make sure the carriages do not fall off when turning the frame upside down in the next step.

##### Parts Needed

| Item                    | Quantity |
| ----------------------- | -------- |
| Linear Rail MGN9H 350mm | 4        |
| M3x8 BHCS               | 4        |
| M3x8 SHCS               | 36       |
| M3 Post-install T-nut   | 40       |

### :white_check_mark: Deck Panel

![Installing the Deck Panel with DIN Rails parallel to the Bed Extrusions](/assets/blog/printer-voron-2.4/deck-panel.jpg 'Deck Panel')

I have installed the Deck panel with the DIN Rails parallel to the Bed Extrusions as I will be following along with the [LDO Wiring Guide](https://docs.ldomotors.com/en/voron/voron2/wiring_guide_rev_c#installing-the-din-rails) when setting up the electronics.

| Item                                                                                                                                                                                    | Quantity | Material                     | Size  | Weight | Cost  |      Printed       | Notes                                  |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------- | ----- | ------ | ----- | :----------------: | -------------------------------------- |
| [deck_panel_support_lower](<https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/wile-e1/Deck_Panel_Support_Clips/wile.e-deck_panel_support_lower_adjustable(3-6mm).stl>) | 4        | [eSun ABS+ (Black)][primary] | 0.72m | 1.83g  | £0.03 | :heavy_check_mark: | This is a Voron Users mod by `wile-e1` |
| [deck_panel_support_upper](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/wile-e1/Deck_Panel_Support_Clips/wile.e-deck_panel_support_upper.stl)                     | 4        | [eSun ABS+ (Purple)][accent] | 0.93m | 2.36g  | £0.04 | :heavy_check_mark: | This is a Voron Users mod by `wile-e1` |

#### Assembly

As the DIN Rails are no longer supporting the Deck Panel along the sides of the printer, I have opted to install the [Deck Panel Support Clips mod from the Voron Users Repository](https://github.com/VoronDesign/VoronUsers/tree/main/printer_mods/wile-e1/Deck_Panel_Support_Clips).

![Adding support clips to the deck panel](/assets/blog/printer-voron-2.4/deck-panel-support.jpg 'Deck Panel Support')

I used the [Bed Support Alignment Tools](#tools) to get the same spacing along the sides as the Bed Extrusions, installing each of the uppers with a M3x6 SHCS and a M3 Hammer Head T-Nut, and secured the lowers with a M3x6 BHCS and a M3 Post-install T-nut.

##### Parts Needed

| Item                          | Quantity |
| ----------------------------- | -------- |
| ACM Deck Panel - 419x419x3 mm | 1        |
| DIN 3 Rails (35mm W) - 400mm  | 2        |
| M3x6 BHCS                     | 4        |
| M3x6 SHCS                     | 4        |
| M3 Hammer Head T-nuts         | 4        |
| M3 Post-install T-nut         | 4        |
| M5x10 BHCS                    | 4        |
| M5 Post-install T-nut         | 4        |

### :white_check_mark: Z Drive

![Using a soldering iron to add heatset inserts to 3D printed parts](/assets/blog/printer-voron-2.4/adding-threaded-inserts.jpg 'Adding Threaded Inserts')

| Item                                                                                                                        | Quantity | Material                     | Size   | Weight | Cost  |      Printed       | Notes |
| --------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------- | ------ | ------ | ----- | :----------------: | ----- |
| [belt_tensioner_a](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Z_Drive/%5Ba%5D_belt_tensioner_a_x2.stl)       | 2        | [eSun ABS+ (Purple)][accent] | 0.61m  | 1.55g  | £0.03 | :heavy_check_mark: |       |
| [belt_tensioner_b](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Z_Drive/%5Ba%5D_belt_tensioner_b_x2.stl)       | 2        | [eSun ABS+ (Purple)][accent] | 0.61m  | 1.55g  | £0.03 | :heavy_check_mark: |       |
| [z_drive_baseplate_a](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Z_Drive/%5Ba%5D_z_drive_baseplate_a_x2.stl) | 2        | [eSun ABS+ (Purple)][accent] | 3.40m  | 8.66g  | £0.17 | :heavy_check_mark: |       |
| [z_drive_baseplate_b](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Z_Drive/%5Ba%5D_z_drive_baseplate_b_x2.stl) | 2        | [eSun ABS+ (Purple)][accent] | 3.40m  | 8.66g  | £0.17 | :heavy_check_mark: |       |
| [z_drive_main_a](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Z_Drive/z_drive_main_a_x2.stl)                   | 2        | [eSun ABS+ (Black)][primary] | 14.13m | 36.03g | £0.59 | :heavy_check_mark: |       |
| [z_drive_main_b](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Z_Drive/z_drive_main_b_x2.stl)                   | 2        | [eSun ABS+ (Black)][primary] | 14.13m | 36.03g | £0.59 | :heavy_check_mark: |       |
| [z_drive_retainer_a](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Z_Drive/z_drive_retainer_a_x2.stl)           | 2        | [eSun ABS+ (Black)][primary] | 6.75m  | 17.20g | £0.28 | :heavy_check_mark: |       |
| [z_drive_retainer_b](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Z_Drive/z_drive_retainer_b_x2.stl)           | 2        | [eSun ABS+ (Black)][primary] | 6.75m  | 17.20g | £0.28 | :heavy_check_mark: |       |
| [z_motor_mount_a](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Z_Drive/z_motor_mount_a_x2.stl)                 | 2        | [eSun ABS+ (Black)][primary] | 4.06m  | 10.36g | £0.17 | :heavy_check_mark: |       |
| [z_motor_mount_b](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Z_Drive/z_motor_mount_b_x2.stl)                 | 2        | [eSun ABS+ (Black)][primary] | 4.06m  | 10.36g | £0.17 | :heavy_check_mark: |       |

#### Assembly

![Putting together the parts for the belts in the Z-Drives](/assets/blog/printer-voron-2.4/assembling-z-drives.jpg 'Assembling Z-Drives')

The manual mentions to position the GT2 pulley 33mm from the end of the 60mm shaft.
When I assembled according to the manual, the parts were not quite centered when inserting them into the 3D printed parts.
I found, at least with the parts in my Powge Motion Kit, that positioning the pulleys at 34mm from the end of the shafts aligned them perfectly.

![One of the Z motors installed to the Z Drive](/assets/blog/printer-voron-2.4/z-motor-installed.jpg 'Z Motor Installed')

> [!NOTE]
> The LDO wiring guide that I am following for the electronics mentions [The motor should be installed in a way so that the connector faces outwards towards the skirts](https://docs.ldomotors.com/en/voron/voron2/wiring_guide_rev_c).
> As I am using [LDO SwitchWire Motors][Z Motor] which are 8mm shorter than the ones in the LDO kit, I have mounted them the same way as in the official manual.
> However, they will likely need to be turned another 90° so the connector faces upwards towards the deck so that the power supply and PiPlate skirt can fit.

![The Z Drives and feet installed on the printer](/assets/blog/printer-voron-2.4/z-drives-installed.jpg 'Z Drives Installed')

##### Parts Needed

| Item                            | Quantity |
| ------------------------------- | -------- |
| Ø5x60mm Shaft, D Cut            | 4        |
| 625 Bearing                     | 12       |
| GT2 16T Pulley (5mm ID 6mm W)   | 4        |
| GT2 20T Pulley (5mm ID 9mm W)   | 4        |
| GT2 80T Pulley (5mm ID 6mm W)   | 4        |
| GT2 Belt Loop (6mm W) - 188mm   | 4        |
| LDO-42STH40-1684AC Motor        | 4        |
| M3x8 SHCS                       | 24       |
| M3x40 SHCS                      | 24       |
| M3 Threaded Insert (M3x5x4)     | 36       |
| M5x10 BHCS                      | 8        |
| M5x16 BHCS                      | 4        |
| M5x40 SHCS                      | 8        |
| M5 1mm Shim                     | 16       |
| M5 Hexnut                       | 4        |
| M5 Post-install T-nut           | 16       |
| Rubber Foot (1.5x.75", 38x19mm) | 4        |

### :white_check_mark: Z Idlers

![Z Idlers assembled](/assets/blog/printer-voron-2.4/eyedlers.jpg 'EYEdlers')

| Item                                                                                                                     | Quantity | Material                     | Size  | Weight | Cost  |      Printed       | Notes |
| ------------------------------------------------------------------------------------------------------------------------ | -------- | ---------------------------- | ----- | ------ | ----- | :----------------: | ----- |
| [z_tensioner_9mm](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Z_Idlers/%5Ba%5D_z_tensioner_9mm_x4.stl)     | 4        | [eSun ABS+ (Purple)][accent] | 2.79m | 7.12g  | £0.14 | :heavy_check_mark: |       |
| [z_tensioner_bracket_a](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Z_Idlers/z_tensioner_bracket_a_x2.stl) | 2        | [eSun ABS+ (Black)][primary] | 4.40m | 11.23g | £0.18 | :heavy_check_mark: |       |
| [z_tensioner_bracket_b](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Z_Idlers/z_tensioner_bracket_b_x2.stl) | 2        | [eSun ABS+ (Black)][primary] | 4.40m | 11.23g | £0.18 | :heavy_check_mark: |       |

#### Assembly

![The Z Idlers installed into the top extrustions of the printer](/assets/blog/printer-voron-2.4/z-idlers-installed.jpg 'Z Idlers Installed')

##### Parts Needed

| Item                                 | Quantity |
| ------------------------------------ | -------- |
| GT2 20T Toothed Idler (5mm ID 9mm W) | 4        |
| M3x16 SHCS                           | 4        |
| M3 Hexnut                            | 4        |
| M5x30 BHCS                           | 12       |
| M5 Post-install T-nut                | 8        |

## A/B Drives and Idlers

![3D render of the Voron 2.4 A/B Drives and Idlers](/assets/blog/printer-voron-2.4/voron-design/a-b-drives-and-idlers.jpg 'A/B Drives and Idlers')

> Image © 2023 [Voron Design](https://www.vorondesign.com/)

I have opted to upgrade the stock A/B Drives and Idlers with [LDO Voron AWD (All-Wheel-Drive) Upgrade Kit][AWD Kit].

### :wrench: A Idler

| Item                                                                                                                                 | Quantity | Material                     | Size  | Weight | Cost  |      Printed       | Notes                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------- | ---------------------------- | ----- | ------ | ----- | :----------------: | --------------------------------------------------------------- |
| [cable_anchor](https://github.com/VCProjects/LDO_AWD/blob/main/Voron-V2.4r2/STL/%5Ba%5D_cable_anchor_x6.stl)                         | 1        | [eSun ABS+ (Purple)][accent] | 0.09m | 0.22g  | £0.01 | :heavy_check_mark: | This is a LDO_AWD Part                                          |
| ~[tensioner_left](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Gantry/Front_Idlers/%5Ba%5D_tensioner_left.stl)~         | ~1~      | [eSun ABS+ (Purple)][accent] | 2.55m | 6.51g  | £0.13 | :heavy_check_mark: | This is not required when using the LDO CNC AWD Kit             |
| ~[front_idler_left_lower](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Gantry/Front_Idlers/front_idler_left_lower.stl)~ | ~1~      | [eSun ABS+ (Black)][primary] | 2.57m | 6.56g  | £0.11 | :heavy_check_mark: | This is replaced by the LDO CNC AWD `A Drive Frame Front Lower` |
| ~[front_idler_left_upper](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Gantry/Front_Idlers/front_idler_left_upper.stl)~ | ~1~      | [eSun ABS+ (Black)][primary] | 4.93m | 12.57g | £0.21 | :heavy_check_mark: | This is replaced by the LDO CNC AWD `A Drive Frame Front Upper` |

#### Assembly

![The A Idler and Belt Tentioner for the Flying Gantry](/assets/blog/printer-voron-2.4/a-idler.jpg 'A Idler')

The screw on the front of the idler moves the tensioner forwards and backwards, this allows for easy adjustment of the belt tension.

> [!NOTE]
> I will be using [LDO Speedy Power HT Motors][A/B Motor] for both A and B Idlers.

##### Parts Needed

| Item                          | Quantity |
| ----------------------------- | -------- |
| ~F695 Bearing~                | ~2~      |
| ~M3x40 SHCS~                  | ~1~      |
| ~M3 Threaded Insert (M3x5x4)~ | ~1~      |
| ~M3 Washer~                   | ~1~      |
| ~M5x40 SHCS~                  | ~1~      |
| ~M5 1mm Shim~                 | ~2~      |
| ~M5 Hexnut~                   | ~1~      |

> [!WARNING]
> These parts are not required as they are for the stock `front_idler_left` parts.

##### Front Drive Frame

| Item                                  | Quantity |
| ------------------------------------- | -------- |
| 5x28mm Pin                            | 1        |
| 5x8x0.5mm Shim                        | 1        |
| 5x8x1mm Shim                          | 6        |
| A Drive Frame Front Lower             | 1        |
| A Drive Frame Front Upper             | 1        |
| F695-2RS Bearing                      | 9        |
| GT2 20T Pulley                        | 2        |
| LDO 42STH48-2504AH(S35) Stepper Motor | 1        |
| M3 Washer                             | 3        |
| M3x5 BHCS                             | 3        |
| M3x8 BHCS                             | 1        |
| M3x10 FHCS                            | 2        |
| M3x32 FHCS                            | 3        |
| Shim Pin - Threaded                   | 1        |
| Shim Pin - Unthreaded                 | 2        |
| Standoff                              | 1        |

### :wrench: B Idler

| Item                                                                                                                                   | Quantity | Material                     | Size  | Weight | Cost  |      Printed       | Notes                                                           |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------- | ----- | ------ | ----- | :----------------: | --------------------------------------------------------------- |
| [cable_anchor](https://github.com/VCProjects/LDO_AWD/blob/main/Voron-V2.4r2/STL/%5Ba%5D_cable_anchor_x6.stl)                           | 1        | [eSun ABS+ (Purple)][accent] | 0.09m | 0.22g  | £0.01 | :heavy_check_mark: | This is a LDO_AWD Part                                          |
| ~[tensioner_right](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Gantry/Front_Idlers/%5Ba%5D_tensioner_right.stl)~         | ~1~      | [eSun ABS+ (Purple)][accent] | 2.55m | 6.51g  | £0.13 | :heavy_check_mark: | This is not required when using the LDO CNC AWD Kit             |
| ~[front_idler_right_lower](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Gantry/Front_Idlers/front_idler_right_lower.stl)~ | ~1~      | [eSun ABS+ (Black)][primary] | 4.80m | 12.25g | £0.20 | :heavy_check_mark: | This is replaced by the LDO CNC AWD `A Drive Frame Front Upper` |
| ~[front_idler_right_upper](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Gantry/Front_Idlers/front_idler_right_upper.stl)~ | ~1~      | [eSun ABS+ (Black)][primary] | 2.69m | 6.86g  | £0.11 | :heavy_check_mark: | This is replaced by the LDO CNC AWD `A Drive Frame Front Upper` |

#### Assembly

![The B Idler and Belt Tentioner for the Flying Gantry](/assets/blog/printer-voron-2.4/b-idler.jpg 'B Idler')

The screw on the front of the idler moves the tensioner forwards and backwards, this allows for easy adjustment of the belt tension.

> [!NOTE]
> I will be using [LDO Speedy Power HT Motors][A/B Motor] for both A and B Idlers.

##### Parts Needed

| Item                          | Quantity |
| ----------------------------- | -------- |
| ~F695 Bearing~                | ~2~      |
| ~M3x40 SHCS~                  | ~1~      |
| ~M3 Threaded Insert (M3x5x4)~ | ~1~      |
| ~M3 Washer~                   | ~1~      |
| ~M5x40 SHCS~                  | ~1~      |
| ~M5 1mm Shim~                 | ~2~      |
| ~M5 Hexnut~                   | ~1~      |

> [!WARNING]
> These parts are not required as they are for the stock `front_idler_right` parts.

##### Front Drive Frame

| Item                                  | Quantity |
| ------------------------------------- | -------- |
| 5x28mm Pin                            | 1        |
| 5x8x0.5mm Shim                        | 1        |
| 5x8x1mm Shim                          | 6        |
| B Drive Frame Front Lower             | 1        |
| B Drive Frame Front Upper             | 1        |
| F695-2RS Bearing                      | 9        |
| GT2 20T Pulley                        | 2        |
| LDO 42STH48-2504AH(S35) Stepper Motor | 1        |
| M3 Washer                             | 3        |
| M3x5 BHCS                             | 3        |
| M3x8 BHCS                             | 1        |
| M3x10 FHCS                            | 2        |
| M3x32 FHCS                            | 3        |
| Shim Pin - Threaded                   | 1        |
| Shim Pin - Unthreaded                 | 2        |
| Standoff                              | 1        |

### :wrench: A Drive

| Item                                                                                                                             | Quantity | Material                     | Size  | Weight | Cost  |      Printed       | Notes                                                          |
| -------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------- | ----- | ------ | ----- | :----------------: | -------------------------------------------------------------- |
| ~[a_drive_frame_lower](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Gantry/AB_Drive_Units/a_drive_frame_lower.stl)~ | ~1~      | [eSun ABS+ (Black)][primary] | 7.66m | 19.53g | £0.32 | :heavy_check_mark: | This is replaced by the LDO CNC AWD `A Drive Frame Rear Lower` |
| ~[a_drive_frame_upper](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Gantry/AB_Drive_Units/a_drive_frame_upper.stl)~ | ~1~      | [eSun ABS+ (Black)][primary] | 7.55m | 19.25g | £0.31 | :heavy_check_mark: | This is replaced by the LDO CNC AWD `A Drive Frame Rear Upper` |
| [cable_anchor](https://github.com/VCProjects/LDO_AWD/blob/main/Voron-V2.4r2/STL/%5Ba%5D_cable_anchor_x6.stl)                     | 2        | [eSun ABS+ (Purple)][accent] | 0.09m | 0.22g  | £0.01 | :heavy_check_mark: | This is a LDO_AWD Part                                         |

#### Assembly

![A Drive Assembled](/assets/blog/printer-voron-2.4/a-drive.jpg 'A Drive')

> [!NOTE]
> I will be using [LDO Speedy Power HT Motors][A/B Motor] for both A and B Drives.

##### Parts Needed

| Item                            | Quantity |
| ------------------------------- | -------- |
| ~F695 Bearing~                  | ~6~      |
| ~GT2 20T Pulley (5mm ID 6mm W)~ | ~1~      |
| ~LDO 42STH48-2504AC Motor~      | ~1~      |
| ~M3x30 SHCS~                    | ~3~      |
| ~M3 Threaded Insert (M3x5x4)~   | ~2~      |
| ~M5x30 BHCS~                    | ~2~      |
| ~M5 1mm Shim~                   | ~6~      |

> [!WARNING]
> These parts are not required as they are for the stock `a_drive_frame` parts.

##### Tensioner Slide

| Item                | Quantity |
| ------------------- | -------- |
| 5x8x0.5mm Shim      | 1        |
| 5x8x1mm Shim        | 1        |
| F695-2RS Bearing    | 2        |
| M3x8 WHCS           | 2        |
| Shim Pin - Threaded | 1        |
| Tensioner Slide     | 1        |

##### Rear Drive Frame

| Item                                  | Quantity |
| ------------------------------------- | -------- |
| 5x8x1mm Shim                          | 2        |
| A Drive Frame Rear Lower              | 1        |
| A Drive Frame Rear Upper              | 1        |
| F695-2RS Bearing                      | 5        |
| GT2 20T Pulley                        | 1        |
| LDO 42STH48-2504AH(S35) Stepper Motor | 1        |
| M3 Washer                             | 3        |
| M3x5 BHCS                             | 3        |
| M3x8 BHCS                             | 2        |
| M3x6 FHCS                             | 1        |
| M3x10 FHCS                            | 4        |
| M3x32 FHCS                            | 2        |
| Shim Pin - Threaded                   | 2        |
| Standoff                              | 1        |
| Tensioner Block                       | 1        |
| Tensioner Slide (Assembled)           | 1        |
| Tensioner Wedge                       | 1        |

### :wrench: B Drive

| Item                                                                                                                             | Quantity | Material                     | Size  | Weight | Cost  |      Printed       | Notes                                                          |
| -------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------- | ----- | ------ | ----- | :----------------: | -------------------------------------------------------------- |
| ~[b_drive_frame_lower](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Gantry/AB_Drive_Units/b_drive_frame_lower.stl)~ | ~1~      | [eSun ABS+ (Black)][primary] | 7.10m | 18.11g | £0.30 | :heavy_check_mark: | This is replaced by the LDO CNC AWD `A Drive Frame Rear Lower` |
| ~[b_drive_frame_upper](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Gantry/AB_Drive_Units/b_drive_frame_upper.stl)~ | ~1~      | [eSun ABS+ (Black)][primary] | 7.32m | 18.66g | £0.30 | :heavy_check_mark: | This is replaced by the LDO CNC AWD `A Drive Frame Rear Upper` |
| [cable_anchor](https://github.com/VCProjects/LDO_AWD/blob/main/Voron-V2.4r2/STL/%5Ba%5D_cable_anchor_x6.stl)                     | 2        | [eSun ABS+ (Purple)][accent] |       |        |       | :heavy_check_mark: | This is a LDO_AWD Part                                         |

#### Assembly

![B Drive Assembled](/assets/blog/printer-voron-2.4/b-drive.jpg 'B Drive')

> [!NOTE]
> I will be using [LDO Speedy Power HT Motors][A/B Motor] for both A and B Drives.

##### Parts Needed

| Item                            | Quantity |
| ------------------------------- | -------- |
| ~F695 Bearing~                  | ~6~      |
| ~GT2 20T Pulley (5mm ID 6mm W)~ | ~1~      |
| ~LDO 42STH48-2504AC Motor~      | ~1~      |
| ~M3x30 SHCS~                    | ~3~      |
| ~M5x30 BHCS~                    | ~2~      |
| ~M5 1mm Shim~                   | ~6~      |

> [!WARNING]
> These parts are not required as they are for the stock `b_drive_frame` parts.

##### Tensioner Slide

| Item                | Quantity |
| ------------------- | -------- |
| 5x8x0.5mm Shim      | 1        |
| 5x8x1mm Shim        | 1        |
| F695-2RS Bearing    | 2        |
| M3x8 WHCS           | 2        |
| Shim Pin - Threaded | 1        |
| Tensioner Slide     | 1        |

##### Rear Drive Frame

| Item                                  | Quantity |
| ------------------------------------- | -------- |
| 5x8x1mm Shim                          | 2        |
| B Drive Frame Rear Lower              | 1        |
| B Drive Frame Rear Upper              | 1        |
| F695-2RS Bearing                      | 5        |
| GT2 20T Pulley                        | 1        |
| LDO 42STH48-2504AH(S35) Stepper Motor | 1        |
| M3 Washer                             | 3        |
| M3x5 BHCS                             | 3        |
| M3x6 FHCS                             | 1        |
| M3x8 BHCS                             | 2        |
| M3x10 FHCS                            | 4        |
| M3x32 FHCS                            | 2        |
| Shim Pin - Threaded                   | 2        |
| Standoff                              | 1        |
| Tensioner Block                       | 1        |
| Tensioner Slide (Assembled)           | 1        |
| Tensioner Wedge                       | 1        |

## Gantry

![3D render of the Voron 2.4 Gantry](/assets/blog/printer-voron-2.4/voron-design/gantry.jpg 'Gantry')

> Image © 2023 [Voron Design](https://www.vorondesign.com/)

### :white_check_mark: Gantry Assembly

#### Assembly

![A and B drives attached to the rear gantry extrusion](/assets/blog/printer-voron-2.4/rear-gantry-extrusion.jpg 'Rear Gantry Extrusion')

##### Parts Needed

| Item                                | Quantity |
| ----------------------------------- | -------- |
| M5x10 FHCS                          | 8        |
| M5 Post-install T-nut               | 8        |
| Misumi HFSB5-2020-290 (E Extrusion) | 1        |

### :white_check_mark: Y Axis

| Item                                                                                                                     | Quantity | Material                     | Size  | Weight | Cost  |      Printed       | Notes                                                                 |
| ------------------------------------------------------------------------------------------------------------------------ | -------- | ---------------------------- | ----- | ------ | ----- | :----------------: | --------------------------------------------------------------------- |
| ~[z_belt_clip_upper](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Gantry/%5Ba%5D_z_belt_clip_upper_x4.stl)~ | ~4~      | [eSun ABS+ (Purple)][accent] | 0.79m | 2.02g  | £0.04 | :heavy_check_mark: | This is replaced by the LDO CNC AWD `Belt Clamp A` and `Belt Clamp B` |

#### Assembly

![Y rails and A/B idlers attached to the gantry](/assets/blog/printer-voron-2.4/y-axis-assembly.jpg 'Y-Axis Assembly')

##### Parts Needed

| Item                                | Quantity |
| ----------------------------------- | -------- |
| Belt Clamp A                        | 2        |
| Belt Clamp B                        | 2        |
| Linear Rail MGN9H 350mm             | 2        |
| M3x8 SHCS                           | 16       |
| M3x16 FHCS                          | 4        |
| M3 Post-install T-nut               | 24       |
| M5x16 FHCS                          | 4        |
| M5 Post-install T-nut               | 8        |
| Misumi HFSB5-2020-400 (C Extrusion) | 2        |

### :white_check_mark: Right XY Joint

I have opted to upgrade the stock XY Joints with [Vitalii3D CNC XY Joints](https://www.onetwo3d.co.uk/product/vitalii3d-cnc-xy-joints-for-voron-printers).

| Item                                                                                                                                             | Quantity | Material                     | Size   | Weight | Cost  |      Printed       | Notes                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ---------------------------- | ------ | ------ | ----- | :----------------: | ------------------------------------------------------------------- |
| ~[xy_joint_right_lower_MGN12](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Gantry/X_Axis/XY_Joints/xy_joint_right_lower_MGN12.stl)~ | ~1~      | [eSun ABS+ (Black)][primary] | 11.43m | 29.14g | £0.48 | :heavy_check_mark: | This is replaced by the Vitalii3D CNC `Bottom Right Part`           |
| ~[xy_joint_right_upper_MGN12](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Gantry/X_Axis/XY_Joints/xy_joint_right_upper_MGN12.stl)~ | ~1~      | [eSun ABS+ (Black)][primary] | 3.80m  | 9.70g  | £0.16 | :heavy_check_mark: | This is replaced by the Vitalii3D CNC `Top Right Part`              |
| [Endstops_print_with_supports](https://www.printables.com/model/1211705/files)                                                                   | 1        | [eSun ABS+ (Black)][primary] | 8.87m  | 22.60g | £0.37 |        :x:         | This is a mod by [Vitalii3D](https://www.printables.com/@Vitalii3D) |

#### Assembly

![Right X/Y Joint Assembled](/assets/blog/printer-voron-2.4/xy-joint-right.jpg 'X/Y Joint (Right)')

##### Parts Needed

| Item                                 | Quantity |
| ------------------------------------ | -------- |
| 10mm M5 sleeve                       | 2        |
| F695 Bearing                         | 2        |
| GT2 20T Toothed Idler (5mm ID 6mm W) | 1        |
| M3x8 FHCS                            | 4        |
| ~M5x40 SHCS~                         | ~4~      |
| M5 1mm Shim                          | 2        |
| ~M5 Hexnut~                          | ~3~      |
| Stainless steel pin                  | 2        |
| Vitalii3D CNC Bottom Right Part      | 1        |
| Vitalii3D CNC Top Right Part         | 1        |

> [!WARNING]
> Some of these parts are not required as they are for the stock `xy_joint_right` parts.

### :white_check_mark: Left XY Joint

I have opted to upgrade the stock XY Joints with [Vitalii3D CNC XY Joints](https://www.onetwo3d.co.uk/product/vitalii3d-cnc-xy-joints-for-voron-printers).

| Item                                                                                                                                           | Quantity | Material                     | Size   | Weight | Cost  |      Printed       | Notes                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------- | ------ | ------ | ----- | :----------------: | -------------------------------------------------------- |
| ~[xy_joint_left_lower_MGN12](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Gantry/X_Axis/XY_Joints/xy_joint_left_lower_MGN12.stl)~ | ~1~      | [eSun ABS+ (Black)][primary] | 11.32m | 28.87g | £0.47 | :heavy_check_mark: | This is replaced by the Vitalii3D CNC `Top Left Part`    |
| ~[xy_joint_left_upper_MGN12](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Gantry/X_Axis/XY_Joints/xy_joint_left_upper_MGN12.stl)~ | ~1~      | [eSun ABS+ (Black)][primary] | 4.00m  | 10.21g | £0.17 | :heavy_check_mark: | This is replaced by the Vitalii3D CNC `Bottom Left Part` |

#### Assembly

![Left X/Y Joint Assembled](/assets/blog/printer-voron-2.4/xy-joint-left.jpg 'X/Y Joint (Left)')

##### Parts Needed

| Item                                 | Quantity |
| ------------------------------------ | -------- |
| 10mm M5 sleeve                       | 2        |
| F695 Bearing                         | 2        |
| GT2 20T Toothed Idler (5mm ID 6mm W) | 1        |
| M3x8 FHCS                            | 4        |
| ~M5x40 SHCS~                         | ~4~      |
| M5 1mm Shim                          | 2        |
| ~M5 Hexnut~                          | ~3~      |
| Stainless steel pin                  | 2        |
| Vitalii3D CNC Bottom Left Part       | 1        |
| Vitalii3D CNC Top Left Part          | 1        |

> [!WARNING]
> Some of these parts are not required as they are for the stock `xy_joint_left` parts.

### :white_check_mark: X Axis

| Item                                                                                                                                               | Quantity | Material                     | Size  | Weight | Cost  |      Printed       | Notes         |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------- | ----- | ------ | ----- | :----------------: | ------------- |
| [xy_joint_cable_bridge](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Gantry/X_Axis/XY_Joints/%5Ba%5D_xy_joint_cable_bridge_3hole.stl) | 1        | [eSun ABS+ (Purple)][accent] | 3.18m | 8.11g  | £0.16 | :heavy_check_mark: | 3Hole Version |

#### Assembly

![X-Axis installed onto the gantry](/assets/blog/printer-voron-2.4/x-axis-installed.jpg 'X-Axis Installed')

##### Parts Needed

| Item                                | Quantity |
| ----------------------------------- | -------- |
| Linear Rail MGN12H 350mm            | 1        |
| M3x8 SHCS                           | 8        |
| M3x16 SHCS                          | 6        |
| M3 Post-install T-nut               | 8        |
| M3 Threaded Insert (M3x5x4)         | 3        |
| M5x10 BHCS                          | 2        |
| M5x16 BHCS                          | 2        |
| M5x30 BHCS                          | 2        |
| M5 1mm Shim                         | 2        |
| M5 Post-install T-nut               | 6        |
| Misumi HFSB5-2020-380 (D Extrusion) | 1        |

### :white_check_mark: Titanium Backers

[Titanium backers](https://mods.vorondesign.com/details/ewDI1Cntz7urtuq3Cm9wGQ) by `whoppingpochard` are laser-cut pieces of titanium bolted onto the opposite side of extrusions from the linear rails, designed to counteract bi-metallic frame warping when the printer heats up.

#### Assembly

![Titanium Backers Installed on the gantry](/assets/blog/printer-voron-2.4/titanium-backers.jpg 'Titanium Backers')

##### Parts Needed

| Item                                                            | Quantity |
| --------------------------------------------------------------- | -------- |
| 300mm X-Axis Titanium Backing Plate (With chain mounting holes) | 1        |
| 340mm Y-Axis Titanium Backing Plate (With chain mounting holes) | 1        |
| 340mm Y-Axis Titanium Backing Plate                             | 1        |
| M3x8 FHCS                                                       | 26       |
| M3 Hammer Head T-nuts                                           | 26       |

## Z Axis

![3D render of the Voron 2.4 Z Axis](/assets/blog/printer-voron-2.4/voron-design/z-axis.jpg 'Z Axis')

> Image © 2023 [Voron Design](https://www.vorondesign.com/)

### :white_check_mark: Z Bearing Blocks

I have opted to upgrade the stock Z Bearing Blocks with [Annex Engineering Reinforced Gantry Mounts](https://www.onetwo3d.co.uk/product/re-enforced-gantry-mounts-for-voron-2-4/).

![Annex Engineering Reinforced Gantry Mounts](/assets/blog/printer-voron-2.4/reinforced-gantry-mounts.jpg 'Reinforced Gantry Mounts')

| Item                                                                                                                                                                                                                       | Quantity | Material                     | Size  | Weight | Cost  |      Printed       | Notes                                                                 |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------- | ----- | ------ | ----- | :----------------: | --------------------------------------------------------------------- |
| [halleffect_spacer](https://github.com/Annex-Engineering/Annex-Engineering_User_Mods/blob/main/Printers/Non_Annex_Printers/VORON_Printers/VORON_V2dot4/annex_dev-Reinforced_Gantry_Mounts/STLs/halleffect_spacer_Rev1.STL) | 1        | [eSun ABS+ (Black)][primary] | 1.19m | 3.02g  | £0.05 | :heavy_check_mark: | This is a mod by `Annex-Engineering`                                  |
| [z_bearing_block](https://github.com/Annex-Engineering/Annex-Engineering_User_Mods/blob/main/Printers/Non_Annex_Printers/VORON_Printers/VORON_V2dot4/annex_dev-Reinforced_Gantry_Mounts/STLs/z_bearing_block_x4_Rev3.STL)  | 4        | [eSun ABS+ (Black)][primary] | 2.48m | 6.33g  | £0.10 | :heavy_check_mark: | This is a mod by `Annex-Engineering`                                  |
| ~[z_belt_clip_lower](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Gantry/%5Ba%5D_z_belt_clip_lower_x4.stl)~                                                                                                   | ~4~      | [eSun ABS+ (Purple)][accent] | 0.77m | 1.97g  | £0.04 | :heavy_check_mark: | This is replaced by the LDO CNC AWD `Belt Clamp A` and `Belt Clamp B` |
| [z_belt_clip](https://github.com/VoronDesign/VoronUsers/blob/main/printer_mods/ChenTheDesignMaker/Z_Belt_Clip/z_belt_clipX4.stl)                                                                                           | 4        | [eSun ABS+ (Black)][primary] | 0.35m | 0.89g  | £0.01 | :heavy_check_mark: | This is a Voron Users mod by `ChenTheDesignMaker`                     |
| ~[z_joint_lower](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Gantry/Z_Joints/z_joint_lower_x4.stl)~                                                                                                          | ~4~      | [eSun ABS+ (Black)][primary] |       |        |       |        :x:         | This is replaced by the `z_bearing_block`                             |
| ~[z_joint_upper_hall_effect](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Gantry/Z_Joints/z_joint_upper_hall_effect.stl)~                                                                                     | ~1~      | [eSun ABS+ (Black)][primary] |       |        |       |        :x:         | This is replaced by the `z_bearing_block`                             |
| ~[z_joint_upper](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Gantry/Z_Joints/z_joint_upper_x4.stl)~                                                                                                          | ~3~      | [eSun ABS+ (Black)][primary] |       |        |       |        :x:         | This is replaced by the `z_bearing_block`                             |
| [z_tensioner](https://github.com/Annex-Engineering/Annex-Engineering_User_Mods/blob/main/Printers/Non_Annex_Printers/VORON_Printers/VORON_V2dot4/annex_dev-Reinforced_Gantry_Mounts/STLs/z_tensioner_x4_Rev3.STL)          | 4        | [eSun ABS+ (Black)][primary] | 0.34m | 0.87g  | £0.01 | :heavy_check_mark: | This is a mod by `Annex-Engineering`                                  |

> [!NOTE]
> I am not going to install hall effect endstops now as I already have an endstop PCB with switches, however I will install the hall effect magnets in case I want to upgrade to a hall effect PCB at a later date.

#### Assembly

![Using Zip Ties to support the gantry whilst installing the belts](/assets/blog/printer-voron-2.4/z-belts-prep.jpg 'Z Belts Prep')

The manual recommends securing the gantry with long zip ties as `a helping hand` whilst the gantry is installed.

![Annex Enginnering Reinforced Gantry Mounts installed in the printer](/assets/blog/printer-voron-2.4/reinforced-gantry-mounts-installed.jpg 'Reinforced Gantry Mounts Installed')

The Reinforced Gantry Mounts by `Annex Enginnering` were originally developed for [Redoubt](https://github.com/Annex-Engineering/Redoubt) but are backwards compatible with the Voron 2.4.
The main advantage to installing them is that the gantry is 13mm closer to the linear rails and using them shows reduced ringing in the Y-Axis.

![Z Belts installed in the printer](/assets/blog/printer-voron-2.4/z-belts-installed.jpg 'Z Belts Installed')

##### Parts Needed

| Item                                       | Quantity |
| ------------------------------------------ | -------- |
| Ø6x3mm Neodimium Magnet                    | 1        |
| 02152 ball head screws                     | 4        |
| Belt Clamp A                               | 2        |
| Belt Clamp B                               | 2        |
| GT2 Open Belt LL-2GT-9 (9mm wide) - 1100mm | 4        |
| M3x12 SHCS                                 | 14       |
| M3x16 FHCS                                 | 4        |
| M3x20 SHCS                                 | 2        |
| ~M3x30 SHCS~                               | ~4~      |
| M3 Threaded Insert (M3x5x4)                | 4        |
| ~M5x30 BHCS~                               | ~4~      |
| ~M5 Hexnut~                                | ~4~      |
| M5 Washer (1mm)                            | 4        |
| M10x20 Hex Socket Set Screw (flat end)     | 4        |

> [!WARNING]
> Some of these parts are not required as they are for the `z_joint_upper`s. The remaining M3 Screws are from the `Annex Engineering Reinforced Gantry Mounts` kit and are shorter than what is specified in the Manual.

Finally the belts are tidied up with the Z Belt Clip mod by `ChenTheDesignMaker`. I think they look a little nicer than using a zip tie as specified in the manual.

![Clips to tidy up the Z Belts, looks a little better than zip ties](/assets/blog/printer-voron-2.4/z-belt-clips.jpg 'Z Belt Clips')

## A/B Belts

![3D render of the Voron 2.4 A/B Belts](/assets/blog/printer-voron-2.4/voron-design/a-b-belts.jpg 'A/B Belts')

> Image © 2023 [Voron Design](https://www.vorondesign.com/)

### :negative_squared_cross_mark: X Carriage

I have opted to upgrade the stock X Carriage with [ChaoticLab CNC Tap][Tap].

| Item                                                                                                                                          | Quantity | Material                     | Size  | Weight | Cost  |      Printed       | Notes                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------- | ----- | ------ | ----- | :----------------: | --------------------------------------------- |
| ~[probe_retainer_bracket](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Gantry/X_Axis/X_Carriage/probe_retainer_bracket.stl)~     | ~1~      | [eSun ABS+ (Black)][primary] |       |        |       |        :x:         | This is replaced by [ChaoticLab CNC Tap][Tap] |
| [V2 Hall Sensor Adapter](https://github.com/Chaoticlab/CNC-Tap-for-Voron/blob/master/STL/CNC_VORON_TAP_V2/V2%20Hall%20Sensor%20Adapter.STL)   | 1        | [eSun ABS+ (Black)][primary] | 0.44m | 1.11g  | £0.02 | :heavy_check_mark: | This is `Chaoticlab` Part                     |
| ~[x_frame_V2TR_MGN12_left](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Gantry/X_Axis/X_Carriage/x_frame_V2TR_MGN12_left.stl)~   | ~1~      | [eSun ABS+ (Black)][primary] |       |        |       |        :x:         | This is replaced by [ChaoticLab CNC Tap][Tap] |
| ~[x_frame_V2TR_MGN12_right](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Gantry/X_Axis/X_Carriage/x_frame_V2TR_MGN12_right.stl)~ | ~1~      | [eSun ABS+ (Black)][primary] |       |        |       |        :x:         | This is replaced by [ChaoticLab CNC Tap][Tap] |

> [!NOTE]
> I am not going to install hall effect endstops now as I already have an endstop PCB with switches, however I will install the hall effect magnets in case I want to upgrade to a hall effect PCB at a later date.

#### Assembly

The belts are routed in a layout that is known as [CoreXY](https://corexy.com/theory.html). When one motor rotates the toolhead will move diagonally, when both motors rotate in the same direction the toolhead will move in the X axis and when both motors rotate in opposite directions the toolhead will move in the Y axis.

##### Parts Needed

| Item                                       | Quantity |
| ------------------------------------------ | -------- |
| Ø6x3mm Neodimium Magnet                    | 1        |
| ChaoticLab CNC Tap V2                      | 1        |
| ChaoticLab CNC Tap Belt Clamp              | 2        |
| ChaoticLab CNC Tap Limit Switch Bracket    | 1        |
| GT2 Open Belt LL-2GT-6 (6mm wide) - 1800mm | 2        |
| M2x5 SHCS                                  | 2        |
| M2x8 SHCS                                  | 2        |
| M3x5 BHCS                                  | 2        |
| M3x6 SHCS                                  | 2        |
| ~M3x8 SHCS~                                | ~4~      |
| M3x12 SHCS                                 | 2        |
| ~M3x30 SHCS~                               | ~4~      |
| ~M3 Hexnut~                                | ~2~      |
| ~M3 Threaded Insert (M3x5x4)~              | ~4~      |
| M5x16 SHCS                                 | 2        |
| ~Omron TL-Q5MC2 Probe~                     | ~1~      |

> [!WARNING]
> Some of these parts are not required as they are for the stock `x_frame_V2TR_MGN12` and `probe_retainer_bracket`.

## Electronics

![3D render of the Voron 2.4 Electronics](/assets/blog/printer-voron-2.4/voron-design/electronics.jpg 'Electronics')

> Image © 2023 [Voron Design](https://www.vorondesign.com/)

The Electronics mounts are maintained separately in the [Voron Parts repository](https://github.com/VoronDesign/Voron-Parts).

### :negative_squared_cross_mark: Raspberry Pi

I have opted to upgrade the stock Raspberry Pi mount with [PiPlate Skirt mod](https://mods.vorondesign.com/details/SMPmB3yokwtdGs23vUiKQ) by `LoganFraser`.

The first 20 layers of the rear skirt parts will be printed in Purple and then I will perform a filament swap to Black to achieve two-tone skirts.

![PiPlate Skirt with both main and accent colours achieved with a filament swap](/assets/blog/printer-voron-2.4/piplate-skirt.jpg 'PiPlate Skirt')

| Item                                                                                                                                             | Quantity | Material                     | Size   | Weight | Cost  |      Printed       | Notes                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ---------------------------- | ------ | ------ | ----- | :----------------: | ------------------------------------------ |
| [2.4r2_Skirt_for_PiPlate](https://github.com/VoronDesign/VoronUsers/blob/main/printer_mods/LoganFraser/PiPlate/STLs/2.4r2_Skirt_for_PiPlate.stl) | 1        | [eSun ABS+ (Black)][primary] | 12.31m | 31.39g | £0.63 | :heavy_check_mark: | This is a Voron Users mod by `LoganFraser` |
| [Pi4Plate](https://github.com/VoronDesign/VoronUsers/blob/main/printer_mods/LoganFraser/PiPlate/STLs/Pi4Plate.stl)                               | 1        | [eSun ABS+ (Black)][primary] | 4.81m  | 12.27g | £0.20 | :heavy_check_mark: | This is a Voron Users mod by `LoganFraser` |
| ~[Raspberry_Pi](https://github.com/VoronDesign/Voron-Parts/blob/main/DIN_Mounts/Misc/Raspberry_Pi.stl)~                                          | ~1~      | [eSun ABS+ (Black)][primary] |        |        |       |        :x:         | This is replaced by the `PiPlate Skirt`    |
| ~[din_clip](https://github.com/VoronDesign/Voron-Parts/blob/main/DIN_Mounts/din_clip.stl)~                                                       | ~1~      | [eSun ABS+ (Black)][primary] |        |        |       |        :x:         | This is replaced by the `PiPlate Skirt`    |

#### Assembly

##### Parts Needed

| Item                        | Quantity |
| --------------------------- | -------- |
| M2x10 Self-tapping Screw    | ~6~ 4    |
| M3x8 SHCS                   | 4        |
| M3 Post-install T-nut       | 2        |
| M3 Threaded Insert (M3x5x4) | 3        |

> [!WARNING]
> Some of these parts are not required as I will be installing the `PiPlate Skirt`.

### :negative_squared_cross_mark: 5V PSU

The 5V PSU is used to power the Raspberry Pi for Klipper and any LED lighting.

| Item                                                                                                    | Quantity | Material                     | Size  | Weight | Cost  |      Printed       | Notes |
| ------------------------------------------------------------------------------------------------------- | -------- | ---------------------------- | ----- | ------ | ----- | :----------------: | ----- |
| [MW_RS_25](https://github.com/VoronDesign/Voron-Parts/blob/main/DIN_Mounts/Power_Supplies/MW_RS_25.stl) | 1        | [eSun ABS+ (Black)][primary] | 2.19m | 5.59g  | £0.09 | :heavy_check_mark: |       |

#### Assembly

##### Parts Needed

| Item      | Quantity |
| --------- | -------- |
| M3x6 BHCS | 2        |

### :negative_squared_cross_mark: 24V PSU

The 24V PSU is used to power the main MCU, Motors and Hotend.

| Item                                                                                                                     | Quantity | Material                     | Size  | Weight | Cost  |      Printed       | Notes |
| ------------------------------------------------------------------------------------------------------------------------ | -------- | ---------------------------- | ----- | ------ | ----- | :----------------: | ----- |
| [MW_LRS_200](https://github.com/VoronDesign/Voron-Parts/blob/main/DIN_Mounts/Power_Supplies/MW_LRS_200.stl)              | 2        | [eSun ABS+ (Black)][primary] | 2.75m | 7.01g  | £0.11 | :heavy_check_mark: |       |
| [PSU_stabilizer_50mm](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Electronics_Bay/PSU_stabilizer_50mm.stl) | 1        | [eSun ABS+ (Black)][primary] | 1.41m | 3.60g  | £0.06 | :heavy_check_mark: |       |

#### Assembly

##### Parts Needed

| Item                  | Quantity |
| --------------------- | -------- |
| M4x6 BHCS             | 5        |
| M5x10 BHCS            | 1        |
| M5 Post-install T-nut | 1        |

### :negative_squared_cross_mark: Controller Board

![3D render of the Voron 2.4 Controller Board](/assets/blog/printer-voron-2.4/voron-design/controller-board.jpg 'Controller Board')

> Image © 2023 [Voron Design](https://www.vorondesign.com/)

The only Controller Board that I own with more than 5 stepper driver sockets is the [Mellow Fly Super8 V1.0](https://mellow-3d.github.io/fly_super8.html).

I did contemplate using my [BigTreeTech SKR 1.4 Turbo](https://biqu.equipment/collections/control-board/products/bigtreetech-skr-v1-4-skr-v1-4-turbo-control-board)
with the optional [EXP-MOT](https://biqu.equipment/products/btt-rrf-wifi-v1-0-module-driver-expansion-module-for-skr-v1-4-1-4-turbo-skr-v1-3-3d-printer-part) module
as I will not be using the `EXP1` and `EXP2` ports for a display, however, the SKR 1.4 Turbo does not have enough controllable fan ports, which is why I designed the [Klipper Fan Hat](printer-klipper-fan-hat).

| Item                                                                                                                    | Quantity | Material                     | Size  | Weight | Cost  |      Printed       | Notes |
| ----------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------- | ----- | ------ | ----- | :----------------: | ----- |
| [Fly_Super8_2pc](https://github.com/VoronDesign/Voron-Parts/blob/main/DIN_Mounts/Controllers/Mellow/Fly_Super8_2pc.stl) | 1        | [eSun ABS+ (Black)][primary] | 3.00m | 7.65g  | £0.13 | :heavy_check_mark: |       |
| [din_clip](https://github.com/VoronDesign/Voron-Parts/blob/main/DIN_Mounts/din_clip.stl)                                | 2        | [eSun ABS+ (Black)][primary] | 1.99m | 5.06g  | £0.08 | :heavy_check_mark: |       |

#### Assembly

##### Parts Needed

| Item                     | Quantity |
| ------------------------ | -------- |
| M2x10 Self-tapping Screw | 4        |
| M3x6 BHCS                | 4        |

### :negative_squared_cross_mark: Solid State Relay

The Solid State Relay is used to control the Mains powered bed from the Controller Board as the main MCU does not have a way of switching mains electricity on it's own.

#### Assembly

##### Parts Needed

| Item                               | Quantity |
| ---------------------------------- | -------- |
| DIN Rail Mount Bracket for G3A SSR | 1        |
| M4x6 BHCS                          | 2        |
| Omron G3A-210B-DC5 SSR             | 1        |

### :negative_squared_cross_mark: LDO Toolhead Breakout PCB Bracket

A bracket to hold the LDO Breakout PCB, the PCB converts the 14 pin connector from the toolhead to separate connectors making it a little easier to connect to the MCU.

| Item                                                                                                                            | Quantity | Material                     | Size  | Weight | Cost  |      Printed       | Notes |
| ------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------- | ----- | ------ | ----- | :----------------: | ----- |
| [toolhead_breakout_pcb_bracket](https://github.com/MotorDynamicsLab/LDOVoron2/blob/main/STLs/toolhead_breakout_pcb_bracket.stl) | 1        | [eSun ABS+ (Black)][primary] | 1.46m | 3.72g  | £0.06 | :heavy_check_mark: |       |
| [din_clip](https://github.com/VoronDesign/Voron-Parts/blob/main/DIN_Mounts/din_clip.stl)                                        | 1        | [eSun ABS+ (Black)][primary] | 1.99m | 5.06g  | £0.08 | :heavy_check_mark: |       |

#### Assembly

##### Parts Needed

| Item                     | Quantity |
| ------------------------ | -------- |
| M2x10 Self-Tapping Screw | 6        |

### :negative_squared_cross_mark: Power Inlet

The first 20 layers of the rear skirt parts will be printed in Purple and then I will perform a filament swap to Black to achieve two-tone skirts.

![Power Inlet Skirt with both main and accent colours achieved with a filament swap](/assets/blog/printer-voron-2.4/power-inlet.jpg 'Power Inlet')

| Item                                                                                      | Quantity | Material                     | Size   | Weight | Cost  |      Printed       | Notes               |
| ----------------------------------------------------------------------------------------- | -------- | ---------------------------- | ------ | ------ | ----- | :----------------: | ------------------- |
| [power_inlet](https://www.teamfdm.com/files/file/613-voron-24-r2-power-inlet-iecgs-15mm/) | 1        | [eSun ABS+ (Black)][primary] | 12.54m | 31.98g | £0.64 | :heavy_check_mark: | IECGS 1.5mm Version |

#### Assembly

##### Parts Needed

| Item                        | Quantity |
| --------------------------- | -------- |
| M3x8 SHCS                   | 2        |
| M3 Post-install T-nut       | 2        |
| M3 Threaded Insert (M3x5x4) | 3        |

### :negative_squared_cross_mark: Z Endstop

The Z Endstop is not used when using `Tap`. [The instructions in the main Voron-Tap repository](https://github.com/VoronDesign/Voron-Tap/blob/main/config/tap_klipper_instructions.md) mentions to change the `endstop_pin` of the `[stepper_z]` block so that it uses the virtual Z endstop for Tap.

| Item                                                                                                   | Quantity | Material                     | Printed | Notes                                                  |
| ------------------------------------------------------------------------------------------------------ | -------- | ---------------------------- | :-----: | ------------------------------------------------------ |
| ~[nozzle_probe](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Z_Endstop/nozzle_probe.stl)~ | ~1~      | [eSun ABS+ (Black)][primary] |   :x:   | I will be installing [ChaoticLab CNC Tap][Tap] instead |

#### Assembly

##### Parts Needed

| Item                               | Quantity |
| ---------------------------------- | -------- |
| ~Ø5x35mm Shaft~                    | ~1~      |
| ~GT2 20T Pulley (5mm ID 6mm W)~    | ~1~      |
| ~JST XH Connector Plug 3 Position~ | ~1~      |
| ~M2x10 Self-Tapping Screw~         | ~2~      |
| ~M3x20 SHCS~                       | ~2~      |
| ~M3 Post-install T-nut~            | ~2~      |
| ~Omron D2F-01L Micro Switch~       | ~1~      |

> [!CAUTION]
> These parts are not required as I will be installing the [ChaoticLab CNC Tap][Tap].

### :negative_squared_cross_mark: X/Y Endstop

I have chosen to use a [Microswitch X/Y Endstop PCB](https://www.onetwo3d.co.uk/product/voron-2-4-microswitch-xy-endstop-pcb/) for the X/Y endstops as I am more familliar with physical switches in my other machines. I will potentially experiment with Hall Effect Switches or Sensorless Homing once I have the machine up and running.

![Endstop pod for X/Y Endstop PCB](/assets/blog/printer-voron-2.4/xy-endstop-pcb.jpg 'X/Y Endstop PCB')

| Item                                                                                                                                          | Quantity | Material                     | Size  | Weight | Cost  |      Printed       | Notes                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------- | ----- | ------ | ----- | :----------------: | ------------------------------------------------------- |
| ~[endstop_pod](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Gantry/X_Axis/XY_Joints/%5Ba%5D_endstop_pod_D2F_switch.stl)~         | ~1~      | [eSun ABS+ (Purple)][accent] |       |        |       |        :x:         | I will be using a `Microswitch X/Y Endstop PCB` instead |
| [Microswitch_Edge_Pod](https://github.com/VoronDesign/VoronUsers/blob/main/printer_mods/randell/Microswitch_Endstop/Microswitch_Edge_Pod.stl) | 1        | [eSun ABS+ (Purple)][accent] | 2.68m | 6.83g  | £0.14 | :heavy_check_mark: | This is a Voron Users mod by `randell`                  |

#### Assembly

##### Parts Needed

| Item                         | Quantity |
| ---------------------------- | -------- |
| ~M2x10 Self-tapping Screw~   | ~4~      |
| M3x8 SHCS                    | 2        |
| M3x30 SHCS                   | 2        |
| Microswitch X/Y Endstop PCB  | 1        |
| ~Omron D2F-01L Micro Switch~ | ~2~      |

> [!WARNING]
> Some of these parts are not required as they are for the stock `endstop_pod`.

### :negative_squared_cross_mark: Mains Distribution

![Wago Holder to make removal of the heated bed easier](/assets/blog/printer-voron-2.4/heated-bed-wagos.jpg 'Heated Bed Wagos')

| Item                                                                                                                               | Quantity | Material                     | Size  | Weight | Cost  |      Printed       | Notes                                          |
| ---------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------- | ----- | ------ | ----- | :----------------: | ---------------------------------------------- |
| ~[wago_221-415_mount_3by5](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Electronics_Bay/wago_221-415_mount_3by5.stl)~ | ~1~      | [eSun ABS+ (Black)][primary] |       |        |       |        :x:         | Does not fit with DIN Rails turned 90°         |
| [v2_bed_wago](https://github.com/VoronDesign/VoronUsers/blob/main/printer_mods/deepfriedheroin/v2_bed_wagos/stl/v2_bed_wago.stl)   | 1        | [eSun ABS+ (Black)][primary] | 4.41m | 11.24g | £0.18 | :heavy_check_mark: | This is a Voron Users mod by `deepfriedheroin` |

#### Assembly

##### Parts Needed

| Item                    | Quantity |
| ----------------------- | -------- |
| M5x10 BHCS              | 4        |
| M5 Post-install T-nut   | 4        |
| WAGO 221-412 Lever-Nuts | 6        |

## Wiring

![Image of the Voron 2.4 Wiring](/assets/blog/printer-voron-2.4/voron-design/wiring.jpg 'Wiring')

> Image © 2023 [Voron Design](https://www.vorondesign.com/)

I have purchased the [LDO Toolhead Wiring Kit](https://docs.ldomotors.com/en/voron/toolhead_harness) for convienience, instead of creating my own harness from scratch like I did for my [Voron 1.8](printer-voron-1.8).

### :negative_squared_cross_mark: Z Cable Chain

| Item                                                                                                                                                | Quantity | Material                     | Size  | Weight | Cost  |      Printed       | Notes                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------- | ----- | ------ | ----- | :----------------: | --------------------------------------------- |
| ~[cable_cover](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Gantry/AB_Drive_Units/%5Ba%5D_cable_cover.stl)~                            | ~1~      | [eSun ABS+ (Purple)][accent] | 2.86m | 7.29g  | £0.15 | :heavy_check_mark: | This is replaced by the LDO_AWD `cable_cover` |
| [cable_cover](https://github.com/VCProjects/LDO_AWD/blob/main/Voron-V2.4r2/STL/%5Ba%5D_cable_cover.stl)                                             | 1        | [eSun ABS+ (Purple)][accent] | 2.03m | 5.18g  | £0.10 | :heavy_check_mark: | This is a LDO_AWD Part                        |
| [z_chain_retainer_bracket](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Gantry/AB_Drive_Units/%5Ba%5D_z_chain_retainer_bracket_x2.stl) | 2        | [eSun ABS+ (Purple)][accent] | 0.22m | 0.56g  | £0.01 | :heavy_check_mark: |                                               |
| [z_chain_bottom_anchor](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Gantry/z_chain_bottom_anchor.stl)                                 | 1        | [eSun ABS+ (Black)][primary] | 3.15m | 8.03g  | £0.13 | :heavy_check_mark: |                                               |
| [z_chain_guide](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Gantry/z_chain_guide.stl)                                                 | 1        | [eSun ABS+ (Black)][primary] | 2.04m | 5.21g  | £0.09 | :heavy_check_mark: |                                               |
| [z_chain_upper_mount](https://github.com/VCProjects/LDO_AWD/blob/main/Voron-V2.4r2/STL/z_chain_upper_mount.stl)                                     | 1        | [eSun ABS+ (Black)][primary] | 2.76m | 7.04g  | £0.11 | :heavy_check_mark: | This is a LDO_AWD Part                        |

#### Assembly

##### Parts Needed

| Item                        | Quantity |
| --------------------------- | -------- |
| M3x10 FHCS                  | 2        |
| M3x12 SHCS                  | 2        |
| M3 Threaded Insert (M3x5x4) | 2        |
| M5 Post-install T-nut       | 2        |
| M5x10 BHCS                  | 2        |

## Print Bed

![3D render of the Voron 2.4 Print Bed](/assets/blog/printer-voron-2.4/voron-design/print-bed.jpg 'Print Bed')

> Image © 2023 [Voron Design](https://www.vorondesign.com/)

### :negative_squared_cross_mark: Heated Bed

I will be using an [ultra-flat Mandala Rose Works heated bed without embeded magnets][Build Plate] that has been checked to be under 0.1mm overall flatness.

#### Assembly

The manual says to install this earlier in the build. I have opted to leave it until after the electronics have been installed as the bed adds considerable weight to the printer, making it harder flip upside down and move around.

##### Parts Needed

| Item                                                | Quantity |
| --------------------------------------------------- | -------- |
| 18AWG Wire (Protective Earth)                       | 300mm    |
| Adhesive Magnetic Sheet - 12"x12"                   | 1        |
| Keenovo 150 Silicone AC Heater w/ thermistor (400W) | 1        |
| M3x6 BHCS                                           | 1        |
| M3x12 SHCS                                          | 1        |
| M3x16 SHCS                                          | 4        |
| M3 Post-install T-nut                               | 4        |
| M3 Washer                                           | 1        |
| M4 Knurled Nut (DIN 466-B)                          | 4        |
| Mandela Rose Works Non-Magnetic Plate - 12"x12"     | 1        |
| Ring Crimp Terminal (16-22AWG, #6)                  | 1        |
| Spring Steel Flexible Print Surface - 12"x12"       | 1        |
| Thermal Fuse (120C)                                 | 1        |

## Stealthburner

![3D render of the Voron StealthBurner Assembled](/assets/blog/voron-stealthburner/voron-design/stealthburner-assembled.jpg 'Stealthburner Assembled')

> Image © 2023 [Voron Design](https://www.vorondesign.com/)

The StealthBurner’s files are maintained separately in the [Voron Stealthburner repository](https://github.com/VoronDesign/Voron-Stealthburner).

[Assembly of the parts can be found on its own separate page][StealthBurner].

## Skirts

![3D render of the Voron 2.4 Skirts](/assets/blog/printer-voron-2.4/voron-design/skirts.jpg 'Skirts')

> Image © 2023 [Voron Design](https://www.vorondesign.com/)

### :negative_squared_cross_mark: LCD

I have opted to upgrade the stock Mini 12864 LCD with [BigTreeTech PITFT50][PITFT50] touch screen display to run [KlipperScreen](https://klipperscreen.readthedocs.io/).

| Item                                                                                                                                                           | Quantity | Material                     | Size   | Weight | Cost  |      Printed       | Notes                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------- | ------ | ------ | ----- | :----------------: | -------------------------------------------------- |
| ~[btt_knob_light_shield](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Skirts/%5Ba%5D_btt_knob_light_shield.stl)~                                  | ~1~      | [eSun ABS+ (Purple)][accent] |        |        |       |        :x:         | I will be using the [BigTreeTech PITFT50][PITFT50] |
| [BTT-PITFT50-v2-Mount](https://github.com/VoronDesign/VoronUsers/blob/main/printer_mods/alanho/BTT_PITFT50_v2_Mount/STLs/BTT-PITFT50-v2-Mount.stl)             | 1        | [eSun ABS+ (Purple)][accent] | 10.07m | 25.68g | £0.51 | :heavy_check_mark: | This is a Voron Users mod by `alanho`              |
| ~[mini12864_case_front_insert](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Skirts/%5Ba%5D_mini12864_case_front_insert.stl)~                      | ~1~      | [eSun ABS+ (Purple)][accent] |        |        |       |        :x:         | I will be using the [BigTreeTech PITFT50][PITFT50] |
| ~[mini12864_case_hinge](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Skirts/%5Ba%5D_mini12864_case_hinge.stl)~                                    | ~1~      | [eSun ABS+ (Purple)][accent] |        |        |       |        :x:         | I will be using the [BigTreeTech PITFT50][PITFT50] |
| ~[mini12864_case_front](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Skirts/mini12864_case_front.stl)~                                            | ~1~      | [eSun ABS+ (Black)][primary] |        |        |       |        :x:         | I will be using the [BigTreeTech PITFT50][PITFT50] |
| ~[mini12864_case_rear](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Skirts/mini12864_case_rear.stl)~                                              | ~1~      | [eSun ABS+ (Black)][primary] |        |        |       |        :x:         | I will be using the [BigTreeTech PITFT50][PITFT50] |
| [PITFT50_45_degree_mount](https://github.com/VoronDesign/VoronUsers/blob/main/printer_mods/CannedBass/PITFT50_45_degree_mount/STL/PITFT50_45_degree_mount.stl) | 1        | [eSun ABS+ (Black)][primary] | 13.33m | 33.98g | £0.55 | :heavy_check_mark: | This is a Voron Users mod by `CannedBass`          |

#### Assembly

##### Parts Needed

| Item                                     | Quantity |
| ---------------------------------------- | -------- |
| 15 pin Raspberry Pi Display Ribbon Cable | 1m       |
| BigTreeTech PITFT50 V2.0                 | 1        |
| M2.5x4 (included in the BTT PITFT50 v2)  | 4        |
| M3x8 SHCS                                | 6        |
| ~M3x12 SHCS~                             | ~4~      |
| ~M3x40 SHCS~                             | ~1~      |
| M3 Post-install T-nut                    | 2        |
| M3 Threaded Insert (M3x5x4)              | 4        |
| ~Mini 12864 Display~                     | ~1~      |

> [!WARNING]
> Some of these parts are not required as they are for the stock `mini12864_case`.

### :negative_squared_cross_mark: Front Skirts

Rather than modifying the stock skirts to add mesh I have chosen to print [Plug-In Mesh Inserts](https://www.printables.com/model/925417) by `DET-Man`.

| Item                                                                                                            | Quantity | Material                     | Size   | Weight | Cost  |      Printed       | Notes                                                          |
| --------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------- | ------ | ------ | ----- | :----------------: | -------------------------------------------------------------- |
| [belt_guard_a](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Skirts/%5Ba%5D_belt_guard_a_x2.stl)    | 1        | [eSun ABS+ (Purple)][accent] | 1.70m  | 4.33g  | £0.09 | :heavy_check_mark: |                                                                |
| [belt_guard_b](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Skirts/%5Ba%5D_belt_guard_b_x2.stl)    | 1        | [eSun ABS+ (Purple)][accent] | 1.70m  | 4.33g  | £0.09 | :heavy_check_mark: |                                                                |
| [Front Skirt 300 - Mesh - Left](https://www.printables.com/model/925417/files)                                  | 1        | [eSun ABS+ (Purple)][accent] | 3.54m  | 9.01g  | £0.18 | :heavy_check_mark: | This is a mod by [DET-Man](https://www.printables.com/@DETMan) |
| [Front Skirt 300 - Mesh - Right](https://www.printables.com/model/925417/files)                                 | 1        | [eSun ABS+ (Purple)][accent] | 3.53m  | 9.01g  | £0.18 | :heavy_check_mark: | This is a mod by [DET-Man](https://www.printables.com/@DETMan) |
| [front_skirt_a_300](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Skirts/300/front_skirt_a_300.stl) | 1        | [eSun ABS+ (Black)][primary] | 11.63m | 29.65g | £0.48 | :heavy_check_mark: |                                                                |
| [front_skirt_b_300](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Skirts/300/front_skirt_b_300.stl) | 1        | [eSun ABS+ (Black)][primary] | 11.63m | 29.64g | £0.48 | :heavy_check_mark: |                                                                |

#### Assembly

##### Parts Needed

| Item                        | Quantity |
| --------------------------- | -------- |
| M3x8 SHCS                   | 8        |
| M3 Post-install T-nut       | 4        |
| M3 Threaded Insert (M3x5x4) | 6        |

### :negative_squared_cross_mark: Rear Skirts

The first 20 layers of the rear skirt parts will be printed in Purple and then I will perform a filament swap to Black to achieve two-tone skirts.

![Rear Skirt with both main and accent colours achieved with a filament swap](/assets/blog/printer-voron-2.4/two-tone-rear-skirt.jpg 'Two-tone Rear Skirt')

| Item                                                                                                                          | Quantity | Material                     | Size   | Weight | Cost  |      Printed       | Notes                                                          |
| ----------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------- | ------ | ------ | ----- | :----------------: | -------------------------------------------------------------- |
| [belt_guard_a](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Skirts/%5Ba%5D_belt_guard_a_x2.stl)                  | 1        | [eSun ABS+ (Purple)][accent] | 1.70m  | 4.33g  | £0.09 | :heavy_check_mark: |                                                                |
| [belt_guard_b](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Skirts/%5Ba%5D_belt_guard_b_x2.stl)                  | 1        | [eSun ABS+ (Purple)][accent] | 1.70m  | 4.33g  | £0.09 | :heavy_check_mark: |                                                                |
| ~[keystone_blank_insert](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Skirts/%5Ba%5D_keystone_blank_insert.stl)~ | ~2~      | [eSun ABS+ (Purple)][accent] |        |        |       |        :x:         | I plan on printing the [PiPlate Skirt](#-raspberry-pi) instead |
| ~[keystone_panel](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Skirts/keystone_panel.stl)~                       | ~1~      | [eSun ABS+ (Black)][primary] |        |        |       |        :x:         | I plan on printing the [PiPlate Skirt](#-raspberry-pi) instead |
| [rear_center_skirt_300](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Skirts/300/rear_center_skirt_300.stl)       | 1        | [eSun ABS+ (Black)][primary] | 18.81m | 47.96g | £0.96 | :heavy_check_mark: |                                                                |
| [Rear Skirt - Logo Insert](https://www.printables.com/model/925417/files)                                                     | 1        | [eSun ABS+ (Purple)][accent] | 1.09m  | 2.78g  | £0.06 | :heavy_check_mark: | This is a mod by [DET-Man](https://www.printables.com/@DETMan) |

#### Assembly

##### Parts Needed

| Item                        | Quantity |
| --------------------------- | -------- |
| M3x8 SHCS                   | ~8~ 4    |
| M3 Post-install T-nut       | ~4~ 2    |
| M3 Threaded Insert (M3x5x4) | ~6~ 3    |

> [!WARNING]
> Some of these parts are not required as they are for the `keystone_panel`.

### :negative_squared_cross_mark: Side Skirts

Rather than modifying the Stock skirts to add mesh I have chosen to print [Plug-In Mesh Inserts](https://www.printables.com/model/925417) by `DET-Man`.

| Item                                                                                                                     | Quantity | Material                     | Size | Weight | Cost | Printed | Notes                                                          |
| ------------------------------------------------------------------------------------------------------------------------ | -------- | ---------------------------- | ---- | ------ | ---- | :-----: | -------------------------------------------------------------- |
| [fan_grill_a](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Skirts/%5Ba%5D_fan_grill_a_x2.stl)               | 2        | [eSun ABS+ (Purple)][accent] |      |        |      |   :x:   |                                                                |
| [fan_grill_b](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Skirts/%5Ba%5D_fan_grill_b_x2.stl)               | 2        | [eSun ABS+ (Purple)][accent] |      |        |      |   :x:   |                                                                |
| [Fan Grill - Mesh Insert - HF Logo](https://www.printables.com/model/931612/files)                                       | 2        | [eSun ABS+ (Black)][primary] |      |        |      |   :x:   | This is a mod by [DET-Man](https://www.printables.com/@DETMan) |
| [fan_grill_retainer](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Skirts/%5Ba%5D_fan_grill_retainer_x2.stl) | 2        | [eSun ABS+ (Purple)][accent] |      |        |      |   :x:   |                                                                |
| [side_fan_support](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Skirts/side_fan_support_x2.STL)             | 2        | [eSun ABS+ (Black)][primary] |      |        |      |   :x:   |                                                                |
| [Side Skirt 300 - Mesh - Left](https://www.printables.com/model/925417/files)                                            | 2        | [eSun ABS+ (Purple)][accent] |      |        |      |   :x:   | This is a mod by [DET-Man](https://www.printables.com/@DETMan) |
| [Side Skirt 300 - Mesh - Right](https://www.printables.com/model/925417/files)                                           | 2        | [eSun ABS+ (Purple)][accent] |      |        |      |   :x:   | This is a mod by [DET-Man](https://www.printables.com/@DETMan) |
| [side_skirt_a_300](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Skirts/300/side_skirt_a_300_x2.stl)         | 2        | [eSun ABS+ (Black)][primary] |      |        |      |   :x:   |                                                                |
| [side_skirt_b_300](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Skirts/300/side_skirt_b_300_x2.stl)         | 2        | [eSun ABS+ (Black)][primary] |      |        |      |   :x:   |                                                                |
| [Side Skirt Center - Mesh](https://www.printables.com/model/925417/files)                                                | 2        | [eSun ABS+ (Purple)][accent] |      |        |      |   :x:   | This is a mod by [DET-Man](https://www.printables.com/@DETMan) |

#### Assembly

##### Parts Needed

| Item                        | Quantity |
| --------------------------- | -------- |
| 60x60x20 Delta Fan (24V)    | 2        |
| M3x8 SHCS                   | 20       |
| M3 Post-install T-nut       | 4        |
| M3 Threaded Insert (M3x5x4) | 18       |
| M5 Post-install T-nut       | 2        |
| M5x10 BHCS                  | 2        |

### :negative_squared_cross_mark: Bottom Panel

| Item                                                                                                                     | Quantity | Material                     | Size | Weight | Cost | Printed | Notes |
| ------------------------------------------------------------------------------------------------------------------------ | -------- | ---------------------------- | ---- | ------ | ---- | :-----: | ----- |
| [bottom_panel_clip](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Panel_Mounting/bottom_panel_clip_x4.stl)   | 4        | [eSun ABS+ (Black)][primary] |      |        |      |   :x:   |       |
| [bottom_panel_hinge](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Panel_Mounting/bottom_panel_hinge_x2.stl) | 2        | [eSun ABS+ (Black)][primary] |      |        |      |   :x:   |       |

#### Assembly

##### Parts Needed

| Item                            | Quantity |
| ------------------------------- | -------- |
| 3M VHB Tape 5952                | ?        |
| ACM Bottom Panel - 419x419x3 mm | 1        |
| M3x8 SHCS                       | 6        |

### :negative_squared_cross_mark: Z Belt Covers

| Item                                                                                                             | Quantity | Material                     | Size | Weight | Cost | Printed | Notes                                                           |
| ---------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------- | ---- | ------ | ---- | :-----: | --------------------------------------------------------------- |
| [z_belt_cover_a](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Panel_Mounting/z_belt_cover_a_x2.stl) | ~2~ 1    | [eSun ABS+ (Purple)][accent] |      |        |      |   :x:   | Only 1 required as I will also be printing `z_belt_cover_a_led` |
| [z_belt_cover_a_led](https://github.com/MotorDynamicsLab/LDOVoron2/blob/main/STLs/z_belt_cover_a_led.stl)        | 1        | [eSun ABS+ (Purple)][accent] |      |        |      |   :x:   | This is a LDO 2.4 Part                                          |
| [z_belt_cover_b](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Panel_Mounting/z_belt_cover_b_x2.stl) | 2        | [eSun ABS+ (Purple)][accent] |      |        |      |   :x:   |                                                                 |

#### Assembly

##### Parts Needed

| Item                  | Quantity |
| --------------------- | -------- |
| M3x6 BHCS             | 4        |
| M3 Hammer Head T-nuts | 4        |

## Panels

![3D render of the Voron 2.4 Panels](/assets/blog/printer-voron-2.4/voron-design/panels.jpg 'Panels')

> Image © 2023 [Voron Design](https://www.vorondesign.com/)

I have opted to upgrade the stock Panel Clips with [Annex Engineering Panel Clips](https://github.com/Annex-Engineering/Annex-Engineering_User_Mods/tree/main/Printers/All_Printers/annex_dev-Panel_2020_Clips_and_Hinges).

### :negative_squared_cross_mark: Back Panel

| Item                                                                                                                                                                                                                   | Quantity | Material                     | Size | Weight | Cost | Printed | Notes                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------- | ---- | ------ | ---- | :-----: | ---------------------------------------- |
| [corner_lock_body_4](https://github.com/Annex-Engineering/Annex-Engineering_User_Mods/blob/main/Printers/All_Printers/annex_dev-Panel_2020_Clips_and_Hinges/panel_clips_and_corners/corner/STL/corner_lock_body_4.STL) | 4        | [eSun ABS+ (Purple)][accent] |      |        |      |   :x:   | This is a mod by `Annex-Engineering`     |
| ~[corner_panel_clip_4mm](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Panel_Mounting/corner_panel_clip_4mm_x8.stl)~                                                                                       | ~4~      | [eSun ABS+ (Purple)][accent] |      |        |      |   :x:   | This is replaced by `corner_lock_body_4` |
| [key_asymmetric_4](https://github.com/Annex-Engineering/Annex-Engineering_User_Mods/blob/main/Printers/All_Printers/annex_dev-Panel_2020_Clips_and_Hinges/panel_clips_and_corners/key/STL/key_asymmetric_4.STL)        | 11       | [eSun ABS+ (Black)][primary] |      |        |      |   :x:   | This is a mod by `Annex-Engineering`     |
| [lock_body_4](https://github.com/Annex-Engineering/Annex-Engineering_User_Mods/blob/main/Printers/All_Printers/annex_dev-Panel_2020_Clips_and_Hinges/panel_clips_and_corners/single/STL/lock_body_4mm.STL)             | 3        | [eSun ABS+ (Purple)][accent] |      |        |      |   :x:   | This is a mod by `Annex-Engineering`     |
| ~[midspan_panel_clip_4mm](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Panel_Mounting/midspan_panel_clip_4mm_x7.stl)~                                                                                     | ~3~      | [eSun ABS+ (Purple)][accent] |      |        |      |   :x:   | This is replaced by `lock_body_4`        |

#### Assembly

##### Parts Needed

| Item                             | Quantity |
| -------------------------------- | -------- |
| ACM Back Panel - 433x453x3 mm    | 1        |
| ~M3x8 SHCS~                      | ~11~     |
| ~M3 Hammer Head T-nuts~          | ~11~     |
| Single Sided Foam Tape 1mm Thick | ?        |

> [!WARNING]
> Some of these parts are not required as they are for the stock `panel_clip`s.

### :negative_squared_cross_mark: Side Panels

| Item                                                                                                                                                                                                                   | Quantity | Material                     | Size | Weight | Cost | Printed | Notes                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------- | ---- | ------ | ---- | :-----: | ---------------------------------------- |
| [corner_lock_body_6](https://github.com/Annex-Engineering/Annex-Engineering_User_Mods/blob/main/Printers/All_Printers/annex_dev-Panel_2020_Clips_and_Hinges/panel_clips_and_corners/corner/STL/corner_lock_body_6.STL) | 8        | [eSun ABS+ (Purple)][accent] |      |        |      |   :x:   | This is a mod by `Annex-Engineering`     |
| ~[corner_panel_clip_6mm](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Panel_Mounting/corner_panel_clip_6mm_x8.stl)~                                                                                       | ~8~      | [eSun ABS+ (Purple)][accent] |      |        |      |   :x:   | This is replaced by `corner_lock_body_6` |
| [key_asymmetric_6](https://github.com/Annex-Engineering/Annex-Engineering_User_Mods/blob/main/Printers/All_Printers/annex_dev-Panel_2020_Clips_and_Hinges/panel_clips_and_corners/key/STL/key_asymmetric_6.STL)        | 24       | [eSun ABS+ (Black)][primary] |      |        |      |   :x:   | This is a mod by `Annex-Engineering`     |
| [lock_body_6](https://github.com/Annex-Engineering/Annex-Engineering_User_Mods/blob/main/Printers/All_Printers/annex_dev-Panel_2020_Clips_and_Hinges/panel_clips_and_corners/single/STL/lock_body_6mm.STL)             | 8        | [eSun ABS+ (Purple)][accent] |      |        |      |   :x:   | This is a mod by `Annex-Engineering`     |
| ~[midspan_panel_clip_6mm](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Panel_Mounting/midspan_panel_clip_6mm_x8.stl)~                                                                                     | ~8~      | [eSun ABS+ (Purple)][accent] |      |        |      |   :x:   | This is replaced by `lock_body_6`        |

#### Assembly

##### Parts Needed

| Item                                          | Quantity |
| --------------------------------------------- | -------- |
| ~M3x12 SHCS~                                  | ~24~     |
| ~M3 Hammer Head T-nuts~                       | ~24~     |
| Polycarbonate Side Panel Clear - 433x453x3 mm | 2        |
| Single Sided Foam Tape 3mm Thick              | ?        |

> [!WARNING]
> Some of these parts are not required as they are for the stock `panel_clip`s.

### :negative_squared_cross_mark: Top Panel

| Item                                                                                                                                                                                                                   | Quantity | Material                     | Size | Weight | Cost | Printed | Notes                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------- | ---- | ------ | ---- | :-----: | ---------------------------------------- |
| [corner_lock_body_4](https://github.com/Annex-Engineering/Annex-Engineering_User_Mods/blob/main/Printers/All_Printers/annex_dev-Panel_2020_Clips_and_Hinges/panel_clips_and_corners/corner/STL/corner_lock_body_4.STL) | 4        | [eSun ABS+ (Purple)][accent] |      |        |      |   :x:   | This is a mod by `Annex-Engineering`     |
| ~[corner_panel_clip_4mm](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Panel_Mounting/corner_panel_clip_4mm_x8.stl)~                                                                                       | ~4~      | [eSun ABS+ (Purple)][accent] |      |        |      |   :x:   | This is replaced by `corner_lock_body_4` |
| [key_asymmetric_4](https://github.com/Annex-Engineering/Annex-Engineering_User_Mods/blob/main/Printers/All_Printers/annex_dev-Panel_2020_Clips_and_Hinges/panel_clips_and_corners/key/STL/key_asymmetric_4.STL)        | 12       | [eSun ABS+ (Black)][primary] |      |        |      |   :x:   | This is a mod by `Annex-Engineering`     |
| [lock_body_4](https://github.com/Annex-Engineering/Annex-Engineering_User_Mods/blob/main/Printers/All_Printers/annex_dev-Panel_2020_Clips_and_Hinges/panel_clips_and_corners/single/STL/lock_body_4mm.STL)             | 4        | [eSun ABS+ (Purple)][accent] |      |        |      |   :x:   | This is a mod by `Annex-Engineering`     |
| ~[midspan_panel_clip_4mm](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Panel_Mounting/midspan_panel_clip_4mm_x7.stl)~                                                                                     | ~4~      | [eSun ABS+ (Purple)][accent] |      |        |      |   :x:   | This is replaced by `lock_body_4`        |

#### Assembly

##### Parts Needed

| Item                                         | Quantity |
| -------------------------------------------- | -------- |
| ~M3x8 SHCS~                                  | ~12~     |
| ~M3 Hammer Head T-nuts~                      | ~12~     |
| Polycarbonate Top Panel Clear - 433x433x3 mm | 1        |
| Single Sided Foam Tape 1mm Thick             | ?        |

> [!WARNING]
> Some of these parts are not required as they are for the stock `panel_clip`s.

### :negative_squared_cross_mark: LDO Aluminum Handlebars

| Item                                                                                                     | Quantity | Material                     | Size | Weight | Cost | Printed | Notes                  |
| -------------------------------------------------------------------------------------------------------- | -------- | ---------------------------- | ---- | ------ | ---- | :-----: | ---------------------- |
| [handlebar_spacer](https://github.com/MotorDynamicsLab/LDOVoron2/blob/main/STLs/handlebar_spacer_x4.stl) | 4        | [eSun ABS+ (Black)][primary] |      |        |      |   :x:   | This is a LDO 2.4 Part |

### :negative_squared_cross_mark: Doors

I have opted to upgrade the stock door hinges with the [270 Clamping Hinges](https://mods.vorondesign.com/details/uS9PdDxZtFj4MWLRzNXUyA) mod by `AlexanderT-Moss`.

The Stock door hinges are attached using VHB, the Clamping Hinges grab onto the acrylic panel and also allow the doors to open all the way.

| Item                                                                                                                                                               | Quantity | Material                     | Size  | Weight | Cost  | Printed | Notes                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ---------------------------- | ----- | ------ | ----- | :-----: | ---------------------------------------------- |
| ~[door_hinge](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Panel_Mounting/Front_Doors/door_hinge_x6.stl)~                                             | ~6~      | [eSun ABS+ (Purple)][accent] |       |        |       |   :x:   | I will be using `Clamping Door Hinges` instead |
| [face_plate_bottom](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/AlexanderT-Moss/270-Clamping-Hinges/STLs/face_plate_bottom.stl)             | 6        | [eSun ABS+ (Black)][primary] | 0.97m | 2.47g  | £0.05 |   :x:   | This is a Voron Users mod by `AlexanderT-Moss` |
| [face_plate_no_logo](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/AlexanderT-Moss/270-Clamping-Hinges/STLs/face_plate_no_logo.stl)           | 4        | [eSun ABS+ (Purple)][accent] | 1.94m | 4.93g  | £0.09 |   :x:   | This is a Voron Users mod by `AlexanderT-Moss` |
| [face_plate_through_logo](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/AlexanderT-Moss/270-Clamping-Hinges/STLs/face_plate_through_logo.stl) | 2        | [eSun ABS+ (Purple)][accent] | 1.90m | 4.86g  | £0.09 |   :x:   | This is a Voron Users mod by `AlexanderT-Moss` |
| [handle_a](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Panel_Mounting/Front_Doors/handle_a_x2.stl)                                                   | 2        | [eSun ABS+ (Purple)][accent] |       |        |       |   :x:   |                                                |
| [handle_b](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Panel_Mounting/Front_Doors/handle_b_x2.stl)                                                   | 2        | [eSun ABS+ (Purple)][accent] |       |        |       |   :x:   |                                                |
| [latch](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Panel_Mounting/Front_Doors/latch_x2.stl)                                                         | 2        | [eSun ABS+ (Black)][primary] |       |        |       |   :x:   |                                                |
| [side_mount](https://github.com/VoronDesign/VoronUsers/blob/master/printer_mods/AlexanderT-Moss/270-Clamping-Hinges/STLs/side_mount_brimed.stl)                    | 6        | [eSun ABS+ (Purple)][accent] | 1.93m | 4.93g  | £0.09 |   :x:   | This is a Voron Users mod by `AlexanderT-Moss` |

### :negative_squared_cross_mark: Exhaust

I have opted to upgrade the stock Exhaust with the [Nevermore StealthMax][StealthMax].

| Item                                                                                                                                   | Quantity | Material                     | Size | Weight | Cost | Printed | Notes                                               |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------- | ---- | ------ | ---- | :-----: | --------------------------------------------------- |
| [exhaust_cover](https://github.com/MotorDynamicsLab/LDOVoron2/blob/main/STLs/exhaust_cover.stl)                                        | 1        | [eSun ABS+ (Black)][primary] |      |        |      |   :x:   | This is a LDO 2.4 Part, and is just a placeholder   |
| ~[exhaust_fan_grill](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Exhaust_Filter/%5Ba%5D_exhaust_fan_grill.stl)~          | ~1~      | [eSun ABS+ (Purple)][accent] |      |        |      |   :x:   | I will be building [StealthMax][StealthMax] instead |
| ~[exhaust_filter_grill](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Exhaust_Filter/exhaust_filter_grill.stl)~            | ~1~      | [eSun ABS+ (Black)][primary] |      |        |      |   :x:   | I will be building [StealthMax][StealthMax] instead |
| ~[exhaust_filter_housing](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Exhaust_Filter/exhaust_filter_housing.stl)~        | ~1~      | [eSun ABS+ (Black)][primary] |      |        |      |   :x:   | I will be building [StealthMax][StealthMax] instead |
| ~[exhaust_filter_mount](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Exhaust_Filter/%5Ba%5D_exhaust_filter_mount_x2.stl)~ | ~2~      | [eSun ABS+ (Purple)][accent] |      |        |      |   :x:   | I will be building [StealthMax][StealthMax] instead |
| ~[filter_access_cover](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Exhaust_Filter/%5Ba%5D_filter_access_cover.stl)~      | ~1~      | [eSun ABS+ (Purple)][accent] |      |        |      |   :x:   | I will be building [StealthMax][StealthMax] instead |

### :negative_squared_cross_mark: Spool Holder

I have opted to upgrade the stock Bowden Retainer with a [BigTreeTech Smart Filament Sensor V2.0][Filament Sensor] mount.

I plan on printing the spool holder in accent colour as I have some black PTFE tubing which I think will look better than the standard white.

| Item                                                                                                                | Quantity | Material                     | Size | Weight | Cost | Printed | Notes                                                                           |
| ------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------- | ---- | ------ | ---- | :-----: | ------------------------------------------------------------------------------- |
| ~[bowden_retainer](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Spool_Management/bowden_retainer.stl)~ | ~1~      | [eSun ABS+ (Purple)][accent] |      |        |      |   :x:   | I will be using the `BigTreeTech Smart Filament Sensor Mount` instead           |
| [btt_sfs_mount](https://www.printables.com/model/673702/files)                                                      | 1        | [eSun ABS+ (Purple)][accent] |      |        |      |   :x:   | This is a mod by [Lecso](https://www.printables.com/@Lecso_113752). 6mm version |
| [spool_holder](https://github.com/VoronDesign/Voron-2/blob/Voron2.4/STLs/Spool_Management/spool_holder.stl)         | 1        | [eSun ABS+ (Purple)][accent] |      |        |      |   :x:   |                                                                                 |

[Related Links]: #
[AfterBurner]: voron-afterburner 'Assembling the Voron AfterBurner Toolhead'
[StealthBurner]: voron-stealthburner 'Assembling the Voron StealthBurner Toolhead'
[StealthMax]: nevermore-filter#nevermore-stealthmax 'Assembling a Nevermore Filter'
