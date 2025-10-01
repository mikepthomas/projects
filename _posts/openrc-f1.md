---
title: OpenRC F1
heading: 3D Printing an OpenRC F1 radio controlled car
date: 2018-06-28
lastmod: 2023-08-01
author: Mike Thomas
description: How I printed my OpenRC F1 car, Designed by Daniel Norée. This project was one of the main reasons I got into 3D printing in the first place.
preview: /assets/blog/openrc-f1/openrc-hero.jpg
slug: /projects/openrc-f1
external:
  - https://danielnoree.com/the-openrc-f1-build-guide/
draft: false
tags:
  - OpenRC
  - Remote Control
categories:
  - 3D Printing
keywords:
  - F1
promoted: true
---

# Table of contents

# Front Wheel Assembly

![Front Wheel Assembly Diagram](https://cdn.thingiverse.com/renders/e2/53/2b/53/72/Front_Wheel_Assembly_display_large.jpg)

> Image &copy; 2015 [Daniel Norée](https://danielnoree.com/)

> [!WARNING]
> Quantities are for 1 Wheel, 2 front wheel assemblies are required

| Item | Quantity | Description                                                                            | Material                                                                | Time   | Size       | Weight | Cost                    |      Printed       | Notes                                                                                         |
| ---- | -------- | -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ------ | ---------- | ------ | ----------------------- | :----------------: | --------------------------------------------------------------------------------------------- |
| 1    | 1        | [Front Rim](https://www.thingiverse.com/thing:1193309/files)                           | [PrimaValue PLA (Dark Grey)](printer-filament#primavalue-pla-dark-grey) | 5h 56m | 3.35m      | 10g    | £0.20                   | :heavy_check_mark: | Replaced with [Tamiya F104 Tyres](#tamiya-f104-tyres)                                         |
| 2    | 2        | [TOOGOO Sealed Metal Bearing MR128-ZZ](https://www.amazon.co.uk/gp/product/B074364291) | Stainless Steel                                                         |        | 8x12x3.5mm |        | £2.06 (Pack of 10)      |                    |                                                                                               |
| 3    | 1        | [Front Wheel Axle](https://www.thingiverse.com/thing:1193309/files)                    | [PrimaValue PLA (Dark Grey)](printer-filament#primavalue-pla-dark-grey) | 26m    | 0.76m      | 2.26g  | £0.04                   | :heavy_check_mark: | Replaced with [one piece front axle with endstops](https://www.thingiverse.com/thing:2886038) |
| 4    | 1        | [Front Wheel Hub](https://www.thingiverse.com/thing:1193309/files)                     | [PrimaValue PLA (Dark Grey)](printer-filament#primavalue-pla-dark-grey) | 28m    | 1.22m      | 3.65g  | £0.07                   | :heavy_check_mark: | Replaced with [one piece front axle with endstops](https://www.thingiverse.com/thing:2886038) |
| 5    | 1        | [AHC Countersunk Allen Key Bolts](https://www.amazon.co.uk/gp/product/B00WMNMOLG)      | Stainless Steel                                                         |        | M3x12mm    |        | £16.86 (1020 Piece set) |                    |                                                                                               |
| 6    | 1        | [Wheel Lock Nut](https://www.thingiverse.com/thing:1193309/files)                      | [PrimaValue PLA (Dark Grey)](printer-filament#primavalue-pla-dark-grey) | 6m     | 0.16m      | 0.48g  | £0.01                   | :heavy_check_mark: |                                                                                               |
| 7    | 1        | [AHC Countersunk Allen Key Bolts](https://www.amazon.co.uk/gp/product/B00GR404L8)      | Stainless Steel                                                         |        | M3x8mm     |        | £4.39 (Pack of 500)     |                    |                                                                                               |
| 8    | 1        | [OPENRC F1 Rain Tires](https://www.thingiverse.com/thing:999257/files)                 | [Ziro TPU (Black)](printer-filament#ziro-tpu-black)                     | 2h 16m | 8.72m      | 26.02g | £0.57                   | :heavy_check_mark: | Replaced with [Tamiya F104 Tyres](#tamiya-f104-tyres)                                         |

![Printed TPU Tyres](/assets/blog/openrc-f1/front-tyres.jpg)

# Front BOM Assembly

![Front BOM Assembly Diagram](https://cdn.thingiverse.com/renders/a6/8d/e8/c3/31/Front_BOM_Assembly_display_large.jpg)

> Image &copy; 2015 [Daniel Norée](https://danielnoree.com/)

| Item | Quantity | Description                                                                                                      | Material                                                        | Time  | Size   | Weight | Cost                  |      Printed       | Notes |
| ---- | -------- | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | ----- | ------ | ------ | --------------------- | :----------------: | ----- |
| 1    | 10       | [AHC Countersunk Allen Key Bolts](https://www.amazon.co.uk/gp/product/B00GR404L8)                                | Stainless Steel                                                 |       | M3x8mm |        | £4.39 (Pack of 500)   |                    |       |
| 2    | 1        | [One piece servo saver for OpenRC F1](https://www.thingiverse.com/thing:2928431/files)                           | [PrimaValue PLA (Black)](printer-filament#primavalue-pla-black) | 29m   | 1.03m  | 3.07g  | £0.05                 | :heavy_check_mark: |       |
| 3    | 3        | [Aussel Pan Head Screw Bolts](https://www.amazon.co.uk/gp/product/B071J1CQWS)                                    | Stainless Steel                                                 |       | M3x8mm |        | £8.49 (300 Piece set) |                    |       |
| 4    | 1        | [OpenRC F1 2017 Front Suspension - flexible filament BOM Block](https://www.thingiverse.com/thing:2282773/files) | [Ziro TPU (Black)](printer-filament#ziro-tpu-black)             | 1h 6m | 3.06m  | 9.14g  | £0.20                 | :heavy_check_mark: |       |
| 5    | 6        | [Aussel Nyloc Nuts](https://www.amazon.co.uk/gp/product/B071J1CQWS)                                              | Stainless Steel                                                 |       | M3     |        | £8.49 (300 Piece set) |                    |       |
| 6    | 1        | [OpenRC F1 2017 Front Suspension - flexible filament Upper BOM](https://www.thingiverse.com/thing:2282773/files) | [PrimaValue PLA (Black)](printer-filament#primavalue-pla-black) | 42m   | 2.08m  | 6.21g  | £0.10                 | :heavy_check_mark: |       |
| 7    | 1        | [OpenRC F1 2017 Front Suspension - flexible filament Lower BOM](https://www.thingiverse.com/thing:2282773/files) | [Ziro TPU (Black)](printer-filament#ziro-tpu-black)             | 41m   | 2.16m  | 6.45g  | £0.14                 | :heavy_check_mark: |       |
| 8    | 2        | [Front Wheel Assembly](#front-wheel-assembly)                                                                    |                                                                 |       |        |        |                       |                    |       |
| 9    | 2        | [OpenRC F1 Stackable Steering Pin](https://www.thingiverse.com/thing:3107676/files)                              | [PrimaValue PLA (Black)](printer-filament#primavalue-pla-black) | 10m   | 0.46m  | 1.38g  | £0.02                 | :heavy_check_mark: |       |

![Front End Assembled](/assets/blog/openrc-f1/front-bom-assembly.jpg)

# Rear Wheel Assembly

![Rear Wheel Assembly Diagram](https://cdn.thingiverse.com/renders/24/b9/79/f2/e5/Rear_Wheel_Assembly_display_large.jpg)

> Image &copy; 2015 [Daniel Norée](https://danielnoree.com/)

> [!WARNING]
> Quantities are for 1 Wheel, 2 front wheel assemblies are required

| Item | Quantity | Description                                                            | Material                                                                | Time   | Size  | Weight | Cost  |      Printed       | Notes                                                 |
| ---- | -------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------- | ------ | ----- | ------ | ----- | :----------------: | ----------------------------------------------------- |
| 1    | 1        | [Rear Rim](https://www.thingiverse.com/thing:1193309/files)            | [PrimaValue PLA (Dark Grey)](printer-filament#primavalue-pla-dark-grey) | 2h 8m  | 3.95m | 11.77g | £0.23 | :heavy_check_mark: | Replaced with [Tamiya F104 Tyres](#tamiya-f104-tyres) |
| 2    | 1        | [OPENRC F1 Rain Tires](https://www.thingiverse.com/thing:999257/files) | [Ziro TPU (Black)](printer-filament#ziro-tpu-black)                     | 2h 16m | 8.72m | 26.02g | £0.57 | :heavy_check_mark: | Replaced with [Tamiya F104 Tyres](#tamiya-f104-tyres) |

![Printed Rear Axle](/assets/blog/openrc-f1/rear-wheel-assembly.jpg)

# Rear Axle Assembly

![Rear Axle Assembly Diagram](https://cdn.thingiverse.com/renders/44/24/da/87/7b/Rear_Axle_Assembly_display_large.jpg)

> Image &copy; 2015 [Daniel Norée](https://danielnoree.com/)

| Item | Quantity | Description                                                                                                                                             | Material                                                                | Time   | Size      | Weight | Cost                    |      Printed       | Notes                                        |
| ---- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ------ | --------- | ------ | ----------------------- | :----------------: | -------------------------------------------- |
| 1    | 2        | [AHC Countersunk Allen Key Bolts](https://www.amazon.co.uk/gp/product/B00GR404L8)                                                                       | Stainless Steel                                                         |        | M3x8mm    |        | £4.39 (Pack of 500)     |                    |                                              |
| 2    | 4        | [AHC Nut](https://www.amazon.co.uk/gp/product/B00WMNMOLG)                                                                                               | Stainless Steel                                                         |        | M3        |        | £16.86 (1020 Piece set) |                    |                                              |
| 3    | 1        | [Rear Axle Holder Right](https://www.thingiverse.com/thing:1193309/files)                                                                               | [PrimaValue PLA (Blue)](printer-filament#primavalue-pla-blue)           | 1h     | 3m        | 8.96g  | £0.16                   | :heavy_check_mark: | Originally in Grey but wanted in body colour |
| 4    | 1        | [Rear Wheel Axle](https://www.thingiverse.com/thing:2123450/files)                                                                                      | [PrimaValue PLA (Dark Grey)](printer-filament#primavalue-pla-dark-grey) | 1h 31m | 5.65m     | 16.85g | £0.33                   | :heavy_check_mark: |                                              |
| 5    | 1        | [Racerstar Brushed RC Car Motor](https://www.banggood.com/Racerstar-540-Brushed-RC-Car-Motor-13T17T23T80T21T27T35T45T55T-For-110-RC-Car-p-1044473.html) | Electronics                                                             |        | 540/35T   |        | £8.70                   |                    |                                              |
| 5    | 1        | [Pinion Gear](https://www.thingiverse.com/thing:1193309/files)                                                                                          | [PrimaValue PLA (Dark Grey)](printer-filament#primavalue-pla-dark-grey) | 19m    | 0.6m      | 1.8g   | £0.04                   | :heavy_check_mark: | Will eventually replace with ABS             |
| 6    | 4        | [Aussel Pan Head Screw Bolts](https://www.amazon.co.uk/gp/product/B071J1CQWS)                                                                           | Stainless Steel                                                         |        | M3x12mm   |        | £8.49 (300 Piece set)   |                    |                                              |
| 7    | 1        | [Spur Gear](https://www.thingiverse.com/thing:1193309/files)                                                                                            | [PrimaValue PLA (Dark Grey)](printer-filament#primavalue-pla-dark-grey) | 1h     | 3.12m     | 9.32g  | £0.18                   | :heavy_check_mark: |                                              |
| 8    | 2        | [Rear Wheel Assembly](#rear-wheel-assembly)                                                                                                             |                                                                         |        |           |        |                         |                    |                                              |
| 9    | 2        | [TOOGOO Sealed Metal Bearing 6701-ZZ](https://www.amazon.co.uk/gp/product/B07437MQW3)                                                                   | Stainless Steel                                                         |        | 12x18x4mm |        | £2.80 (Pack of 10)      |                    |                                              |
| 10   | 1        | [Rear Axle Holder Left](https://www.thingiverse.com/thing:1193309/files)                                                                                | [PrimaValue PLA (Blue)](printer-filament#primavalue-pla-blue)           | 36m    | 1.87m     | 5.56g  | £0.10                   | :heavy_check_mark: | Originally in Grey but wanted in body colour |
| 11   | 2        | [Wheel Lock Nut](https://www.thingiverse.com/thing:1193309/files)                                                                                       | [PrimaValue PLA (Dark Grey)](printer-filament#primavalue-pla-dark-grey) | 6m     | 0.16m     | 0.48g  | £0.01                   | :heavy_check_mark: |                                              |

![Rear End Assembled](/assets/blog/openrc-f1/rear-axle-assembly.jpg)

# Chassis Assembly

![Chassis Assembly Diagram](https://cdn.thingiverse.com/renders/b0/b3/37/79/ad/Chassie_Assembly_display_large.jpg)

> Image &copy; 2015 [Daniel Norée](https://danielnoree.com/)

| Item | Quantity | Description                                                                                                               | Material                                                                | Time   | Size    | Weight | Cost                    |      Printed       | Notes |
| ---- | -------- | ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ------ | ------- | ------ | ----------------------- | :----------------: | ----- |
| 1    | 6        | [AHC Countersunk Allen Key Bolts](https://www.amazon.co.uk/gp/product/B00GR404L8)                                         | Stainless Steel                                                         |        | M3x8mm  |        | £4.39 (Pack of 500)     |                    |       |
| 2    | 1        | [OpenRC F1 Front Suspension Servo Saver Solution](https://www.thingiverse.com/thing:2724542/files)                        | [Ziro TPU (Black)](printer-filament#ziro-tpu-black)                     | 58m    | 2.76m   | 8.23g  | £0.18                   | :heavy_check_mark: |       |
| 3    | 1        | [Front Chassis 2017 update](https://www.thingiverse.com/thing:2123450/files)                                              | [PrimaValue PLA (Dark Grey)](printer-filament#primavalue-pla-dark-grey) | 3h 40m | 10.94m  | 32.62g | £0.65                   | :heavy_check_mark: |       |
| 3    | 1        | [Rear Chassis 2017 update optimized for F104 Tires](https://www.thingiverse.com/thing:2830632/files)                      | [PrimaValue PLA (Dark Grey)](printer-filament#primavalue-pla-dark-grey) | 5h 45m | 17.96m  | 53.57g | £1.06                   | :heavy_check_mark: |       |
| 4    | 1        | [Front BOM Assembly](#front-bom-assembly)                                                                                 |                                                                         |        |         |        |                         |                    |       |
| 5    | 1        | [Metal Gear RC Micro Servo](https://www.banggood.com/Tower-Pro-MG90S-Metal-Gear-RC-Micro-Servo-For-RC-Model-p-74870.html) | Electronics                                                             |        | MG90S   |        | £2.80                   |                    |       |
| 6    | 1        | Servo Saver Connector Rod                                                                                                 | Paperclip                                                               |        |         |        |                         |                    |       |
| 7    | 1        | [Rear Axle Assembly](#rear-axle-assembly)                                                                                 |                                                                         |        |         |        |                         |                    |       |
| 8    | 2        | [AHC Countersunk Allen Key Bolts](https://www.amazon.co.uk/gp/product/B00WMNMOLG)                                         | Stainless Steel                                                         |        | M3x12mm |        | £16.86 (1020 Piece set) |                    |       |

![Testing the layout of the electronics](/assets/blog/openrc-f1/chassis-assembly.jpg)

# Body

![OpenRC F1 Body Installed](/assets/blog/openrc-f1/complete.jpg)

| Item                                                                                      | Quantity | Material                                                                | Time   | Size   | Weight | Cost  |      Printed       | Notes                          |
| ----------------------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------- | ------ | ------ | ------ | ----- | :----------------: | ------------------------------ |
| [OpenRC F1 Nose with S-duct](https://www.thingiverse.com/thing:2124204/files)             | 1        | [PrimaValue PLA (Blue)](printer-filament#primavalue-pla-blue)           | 2h 37m | 6.65m  | 19.83g | £0.35 | :heavy_check_mark: |                                |
| [OpenRC F1 2017 Front Chassis](https://www.thingiverse.com/thing:2135283/files)           | 1        | [PrimaValue PLA (Blue)](printer-filament#primavalue-pla-blue)           | 5h 42m | 19.29m | 57.52g | £1.03 | :heavy_check_mark: |                                |
| [OpenRC F1 2017 Front Chassis Side Pods](https://www.thingiverse.com/thing:2135283/files) | 1        | [PrimaValue PLA (Blue)](printer-filament#primavalue-pla-blue)           | 6h     | 20.02m | 59.72g | £1.07 | :heavy_check_mark: |                                |
| [OpenRc F1 lid with side scoops](https://www.thingiverse.com/thing:2887041/files)         | 1        | [PrimaValue PLA (Blue)](printer-filament#primavalue-pla-blue)           | 7h 3m  | 24.39m | 72.74g | £1.30 | :heavy_check_mark: |                                |
| [OpenRc F1 motor cover with louvers](https://www.thingiverse.com/thing:2863703/files)     | 1        | [PrimaValue PLA (Blue)](printer-filament#primavalue-pla-blue)           | 5h 28m | 16.03m | 47.81g | £0.86 | :heavy_check_mark: |                                |
| [Lock Pin](https://www.thingiverse.com/thing:1193309/files)                               | 1        | [PrimaValue PLA (Blue)](printer-filament#primavalue-pla-blue)           | 4m     | 0.11m  | 0.34g  | £0.01 | :heavy_check_mark: |                                |
| [Main Turning Vane Left](https://www.thingiverse.com/thing:1193309/files)                 | 1        | [PrimaValue PLA (Black)](printer-filament#primavalue-pla-black)         | 25m    | 0.76m  | 2.28g  | £0.04 | :heavy_check_mark: | Originally in TPU but too soft |
| [Main Turning Vane Right](https://www.thingiverse.com/thing:1193309/files)                | 1        | [PrimaValue PLA (Black)](printer-filament#primavalue-pla-black)         | 25m    | 0.76m  | 2.28g  | £0.04 | :heavy_check_mark: | Originally in TPU but too soft |
| [Front Spoiler 2019](https://www.thingiverse.com/thing:3596053/files)                     | 1        | [Ziro TPU (Black)](printer-filament#ziro-tpu-black)                     | 3h 45m | 12.05m | 35.93g | £0.79 | :heavy_check_mark: |                                |
| [Crash Safe Rear Wing](https://www.thingiverse.com/thing:1968442/files)                   | 1        | [Ziro TPU (Black)](printer-filament#ziro-tpu-black)                     | 2h 52m | 10.38m | 30.95g | £0.68 | :heavy_check_mark: |                                |
| [Rainlight and Diffuser](https://www.thingiverse.com/thing:1193309/files)                 | 1        | [PrimaValue PLA (Dark Grey)](printer-filament#primavalue-pla-dark-grey) | 1h 4m  | 3.57m  | 10.65g | £0.21 | :heavy_check_mark: |                                |

# Trim

| Item                                                                                     | Quantity | Material                                                        | Time | Size  | Weight | Cost  |      Printed       | Notes |
| ---------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------------- | ---- | ----- | ------ | ----- | :----------------: | ----- |
| [OpenRC F1 2017 Front Chassis Winglets](https://www.thingiverse.com/thing:2135283/files) | 1        | [Ziro TPU (Black)](printer-filament#ziro-tpu-black)             | 4m   | 0.11m | 0.33g  | £0.01 | :heavy_check_mark: |       |
| [Barge Board Left](https://www.thingiverse.com/thing:2123450/files)                      | 1        | [PrimaValue PLA (Black)](printer-filament#primavalue-pla-black) | 34m  | 1.09m | 3.25g  | £0.05 | :heavy_check_mark: |       |
| [Barge Board Right](https://www.thingiverse.com/thing:2123450/files)                     | 1        | [PrimaValue PLA (Black)](printer-filament#primavalue-pla-black) | 34m  | 1.09m | 3.24g  | £0.05 | :heavy_check_mark: |       |
| [Rear View Mirror Left](https://www.thingiverse.com/thing:1193309/files)                 | 1        | [Ziro TPU (Black)](printer-filament#ziro-tpu-black)             | 7m   | 0.20m | 0.61g  | £0.01 | :heavy_check_mark: |       |
| [Rear View Mirror Right](https://www.thingiverse.com/thing:1193309/files)                | 1        | [Ziro TPU (Black)](printer-filament#ziro-tpu-black)             | 7m   | 0.20m | 0.61g  | £0.01 | :heavy_check_mark: |       |
| [Camera](https://www.thingiverse.com/thing:1193309/files)                                | 1        | [Ziro TPU (Black)](printer-filament#ziro-tpu-black)             | 19m  | 0.56m | 1.67g  | £0.04 | :heavy_check_mark: |       |
| [Shark Fin 2018](https://danielnoree.com/openrc-f1-2018/)                                | 1        | [Ziro TPU (Black)](printer-filament#ziro-tpu-black)             | 50m  | 1.51m | 4.51g  | £0.10 | :heavy_check_mark: |       |
| [Halo 2018](https://danielnoree.com/openrc-f1-2018/)                                     | 1        | [Ziro TPU (Black)](printer-filament#ziro-tpu-black)             | 29m  | 1.48m | 4.41g  | £0.10 | :heavy_check_mark: |       |
| [Cockpit](https://www.thingiverse.com/thing:4935156/files)                               | 1        | [PrimaValue PLA (Black)](printer-filament#primavalue-pla-black) |      |       |        |       |        :x:         |       |

# Accessories

## Tyre Stand

| Item                                                     | Quantity | Material                                                    | Time | Size | Weight | Cost |      Printed       | Notes |
| -------------------------------------------------------- | -------- | ----------------------------------------------------------- | ---- | ---- | ------ | ---- | :----------------: | ----- |
| [PartA](https://www.thingiverse.com/thing:1379463/files) | 2        | [PrimaValue PLA (Red)](printer-filament#primavalue-pla-red) |      |      |        |      | :heavy_check_mark: |       |
| [PartB](https://www.thingiverse.com/thing:1379463/files) | 2        | [PrimaValue PLA (Red)](printer-filament#primavalue-pla-red) |      |      |        |      | :heavy_check_mark: |       |
| [PartC](https://www.thingiverse.com/thing:1379463/files) | 4        | [PrimaValue PLA (Red)](printer-filament#primavalue-pla-red) |      |      |        |      | :heavy_check_mark: |       |

## Work Bench

| Item                                                              | Quantity | Material                                                    | Time | Size | Weight | Cost |      Printed       | Notes |
| ----------------------------------------------------------------- | -------- | ----------------------------------------------------------- | ---- | ---- | ------ | ---- | :----------------: | ----- |
| [Connector_A](https://www.thingiverse.com/thing:1387301/files)    | 3        | [PrimaValue PLA (Red)](printer-filament#primavalue-pla-red) |      |      |        |      | :heavy_check_mark: |       |
| [Connector_B](https://www.thingiverse.com/thing:1387301/files)    | 2        | [PrimaValue PLA (Red)](printer-filament#primavalue-pla-red) |      |      |        |      | :heavy_check_mark: |       |
| [Side_A](https://www.thingiverse.com/thing:1387301/files)         | 1        | [PrimaValue PLA (Red)](printer-filament#primavalue-pla-red) |      |      |        |      | :heavy_check_mark: |       |
| [Side_B_F1_2017](https://www.thingiverse.com/thing:2503028/files) | 1        | [PrimaValue PLA (Red)](printer-filament#primavalue-pla-red) |      |      |        |      | :heavy_check_mark: |       |

# Tamiya F104 Tyres

![Installing some proper rubber RC car tyres](/assets/blog/openrc-f1/tamiya-f104-tyres.jpg)

| Item                                                                                  | Quantity | Material                                                                | Time   | Size   | Weight | Cost              |      Printed       | Notes |
| ------------------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------- | ------ | ------ | ------ | ----------------- | :----------------: | ----- |
| [Front Rim for F104 Tyres](https://www.thingiverse.com/thing:2876251/files)           | 2        | [PrimaValue PLA (Dark Grey)](printer-filament#primavalue-pla-dark-grey) | 4h 1m  | 7.47m  | 22.28g | £0.44             | :heavy_check_mark: |       |
| [Rear Rim for F104 Tyres](https://www.thingiverse.com/thing:3351007/files)            | 2        | [PrimaValue PLA (Dark Grey)](printer-filament#primavalue-pla-dark-grey) | 4h 58m | 10.55m | 31.47g | £0.62             | :heavy_check_mark: |       |
| [Tamiya F104 Hollow, Back Soft Tyre](https://www.amazon.co.uk/gp/product/B0035WV8B0)  | 2        | Rubber                                                                  |        |        |        | £15.49 (Set of 2) |                    |       |
| [Tamiya F104 Hollow, Front Hard Tyre](https://www.amazon.co.uk/gp/product/B0035WV8AQ) | 2        | Rubber                                                                  |        |        |        | £13.27 (Set of 2) |                    |       |

To make the tyres soft enough to be usable, they need to have a very low percentage of infil, therefore they are quite fragile and can be easily split.

![The TPU Tyres are quite hard to print](/assets/blog/openrc-f1/tyres-split.jpg)

To get better grip and have harder wearing tyres, it's recommended to use off-the-shelf rubber tyres specifically desgned for radio controlled cars.

# Electronics Box

![Designing a box to hold the electronics](/assets/blog/openrc-f1/electronics-box-layout.jpg)

This was one of the first items I modified. I used SketchUp 2017 to edit an existing electronics box to fit the battery I purchased. You can also [view the design on the SketchUp website](https://app.sketchup.com/share/tc/europe/eDflgsYeHGA?stoken=uL6KUMBR9SgNFsqt7Iui99P_QAL9iSydfDcQVslXiyaSsP3Mw8FabXYOr0XHB1bj&source=web).

![Electronics added into the printed box](/assets/blog/openrc-f1/electronics-box-assembled.jpg)

The source file and STL is [available to download on my 3D Printing repository on GitHub](https://github.com/mikepthomas/3dprinting/blob/main/Designs/OpenRC%20F1%20Battery%20Box/Battery%20Box.stl).

![The Electronics box installed in the car](/assets/blog/openrc-f1/electronics-box-installed.jpg)
