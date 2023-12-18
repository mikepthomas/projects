---
title: 3D Printing an FPV OpenRC Mini Quad
date: 2019-08-30
lastmod: 2023-07-17
author: Mike Thomas
description: How I printed my OpenRC 220 FPV Mini Quad, Designed by Daniel Norée. Another jump into Radio Contolled vehicles, this time I want to fly!
preview: /assets/blog/openrc-mini-quad/mini-quad-hero.jpg
slug: /projects/openrc-mini-quad
draft: false
tags:
  - Remote Control
categories:
  - 3D Printing
keywords:
  - OpenRC
---

# Table of contents

# Flight Stack

![Flight Stack](https://cdn.thingiverse.com/renders/26/51/4f/9f/11/fb69c74314b1c4dd86291f720344c80b_preview_featured.jpg)

> Image &copy; 2017 [Daniel Norée](https://danielnoree.com/)

| Item                                                                                                                                                                                                              | Quantity | Material                                            | Size      | Weight | Cost                  |      Printed       | Notes                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------- | --------- | ------ | --------------------- | :----------------: | ------------------------------------------------------ |
| [Racerstar RS 20A x4 V2](https://www.banggood.com/Racerstar-RS20Ax4-V2-20A-BB2-48MHz-Blheli_S-2-4S-Opto-Oneshot42-Multishot-4-in-1-ESC-for-FPV-Racer-p-1080541.html)                                              | 1        | 4 in 1 ESC PCB                                      | 36x36mm   |        | $37.23                |                    |                                                        |
| [Electronics Frame](https://www.thingiverse.com/thing:2037868/files)                                                                                                                                              | 1        | [Ziro PLA (Black)](printer-filament#ziro-pla-black) | 3.65m     | 10.87g | £0.17                 | :heavy_check_mark: | Originally printed in red but it broke during assembly |
| HGLRC F3 V4 Pro                                                                                                                                                                                                   | 1        | Flight Controller PCB                               | 36x36mm   |        | $39.80                |                    |                                                        |
| Foxeer HS1177                                                                                                                                                                                                     | 1        | FPV Camera Module                                   |           |        | $15.90                |                    |                                                        |
| Suleve M3 Nylon Button Head Screw                                                                                                                                                                                 | 4        | Nylon                                               | M3x6 BHCS |        | $2.99 (300 Piece set) |                    |                                                        |
| Suleve M3 Nylon PCB Standoff                                                                                                                                                                                      | 4        | Nylon                                               | M3 8mm    |        | Included in above     |                    |                                                        |
| [Flysky i6X & X6B Receiver](https://www.banggood.com/FlySky-i6X-FS-i6X-2_4GHz-10CH-AFHDS-2A-RC-Radio-Transmitter-With-X6B-or-IA6B-or-A8S-Receiver-for-FPV-RC-Drone-Engineering-Vehicle-Boat-Robot-p-1090406.html) | 1        | Radio Transmitter with Reciever PCB                 | 36x22mm   |        | $42.99                |                    |                                                        |

![Flight Stack](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/openrc-mini-quad/flight-stack.jpg)

# Motors

![Motors](https://cdn.thingiverse.com/renders/32/6d/40/f7/05/e722d113b2fb009ba3426204cb3afb86_preview_featured.jpg)

> Image &copy; 2017 [Daniel Norée](https://danielnoree.com/)

| Item                                                                       | Quantity | Material                                                    | Size   | Weight | Cost               |      Printed       | Notes                              |
| -------------------------------------------------------------------------- | -------- | ----------------------------------------------------------- | ------ | ------ | ------------------ | :----------------: | ---------------------------------- |
| Emax RS2205 2300KV Racing Edition CW                                       | 2        | Clockwise Brushless Motor                                   | 2300KV |        | $12.75 each        |                    |                                    |
| Emax RS2205 2300KV Racing Edition CCW                                      | 2        | Counter Clockwise Brushless Motor                           | 2300KV |        | $12.75 each        |                    |                                    |
| [Main Frame Lower](https://danielnoree.com/openrc-fpv-mini-quad-v1-5/)     | 1        | [PrimaValue PLA (Red)](printer-filament#primavalue-pla-red) | 17.27m | 51.50g | £1.24              | :heavy_check_mark: |                                    |
| [Motor Spacer Soft Mount](https://www.thingiverse.com/thing:2037868/files) | 4        | [Ziro TPU (Black)](printer-filament#ziro-tpu-black)         | 0.28m  | 0.83g  | £0.02              | :heavy_check_mark: | Did not fit the motors I purchased |
| Kingkong 5 Inch 3 Blade Propeller CW                                       | 2        | Plastic                                                     | 5 Inch |        | $7.30 for 10 pairs |                    |                                    |
| Kingkong 5 Inch 3 Blade Propeller CCW                                      | 2        | Plastic                                                     | 5 Inch |        | Included in above  |                    |                                    |

**_NOTE:_** Used screws that came with the motors to attach to the body.

![Motors](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/openrc-mini-quad/motors.jpg)

# Body

![Body](https://cdn.thingiverse.com/renders/9a/75/f9/fa/7d/cef882309c568e1bed7d872d4704287f_preview_featured.jpg)

> Image &copy; 2017 [Daniel Norée](https://danielnoree.com/)

| Item                                                                          | Quantity | Material                                            | Size       | Weight | Cost                  |      Printed       | Notes |
| ----------------------------------------------------------------------------- | -------- | --------------------------------------------------- | ---------- | ------ | --------------------- | :----------------: | ----- |
| [Aussel Pan Head Screw Bolts](https://www.amazon.co.uk/gp/product/B071J1CQWS) | 12       | Stainless Steel                                     | M3x12 BHCS |        | £8.49 (300 Piece set) |                    |       |
| [Aussel M3 Nuts](https://www.amazon.co.uk/gp/product/B071J1CQWS)              | 12       | Stainless Steel                                     | M3 nuts    |        | Included in above     |                    |       |
| [Main Frame Upper](https://danielnoree.com/openrc-fpv-mini-quad-v1-5/)        | 1        | [Ziro PLA (Black)](printer-filament#ziro-pla-black) | 8.03m      | 23.94g | £0.38                 | :heavy_check_mark: |       |

![Props On](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/openrc-mini-quad/props-on.jpg)

# Top Deck

![Top Deck](https://cdn.thingiverse.com/renders/e9/2e/ea/14/b2/82582c0da2d639c3dfffda954992fd8e_preview_featured.jpg)

> Image &copy; 2017 [Daniel Norée](https://danielnoree.com/)

| Item                                                                               | Quantity | Material                                                    | Size       | Weight | Cost              |      Printed       | Notes                                |
| ---------------------------------------------------------------------------------- | -------- | ----------------------------------------------------------- | ---------- | ------ | ----------------- | :----------------: | ------------------------------------ |
| 5mm Spacer                                                                         | 2        | [PrimaValue PLA (Red)](printer-filament#primavalue-pla-red) | 0.08m      | 0.24g  | £0.01             | :heavy_check_mark: | Z scaled versions of the 27mm spacer |
| [27mm Spacer](https://danielnoree.com/openrc-fpv-mini-quad-v1-5/)                  | 6        | [PrimaValue PLA (Red)](printer-filament#primavalue-pla-red) | 0.41m      | 1.22g  | £0.03             | :heavy_check_mark: |                                      |
| [Ant Lower](https://www.thingiverse.com/thing:2037868/files)                       | 1        | [PrimaValue PLA (Red)](printer-filament#primavalue-pla-red) | 0.92m      | 2.73g  | £0.07             | :heavy_check_mark: |                                      |
| [Ant Upper](https://www.thingiverse.com/thing:2037868/files)                       | 1        | [PrimaValue PLA (Red)](printer-filament#primavalue-pla-red) | 0.59m      | 1.77g  | £0.04             | :heavy_check_mark: |                                      |
| Turnigy Bolt 1000 LIHV High Voltage LIPO Battery                                   | 1        | LIPO Battery                                                | 1000mAh    |        | £20.95            |                    |                                      |
| [GoPro Holder](https://www.thingiverse.com/thing:2037868/files)                    | 1        | [PrimaValue PLA (Red)](printer-filament#primavalue-pla-red) | 1.40m      | 4.18g  | £0.10             | :heavy_check_mark: |                                      |
| [GoPro Lens Protector](https://www.thingiverse.com/thing:2037868/files)            | 1        | [Ziro TPU (Black)](printer-filament#ziro-tpu-black)         | 1.53m      | 4.57g  | £0.10             | :heavy_check_mark: |                                      |
| [Merriway Slotted Pan Head Machine Screws](https://www.amazon.co.uk/dp/B00OBFRUZI) | 8        | Stainless Steel                                             | M3x50 BHCS |        | £2.88 for 25      |                    |                                      |
| [Merriway Nuts](https://www.amazon.co.uk/dp/B00OBFRUZI)                            | 8        | Stainless Steel                                             | M3 nuts    |        | Included in above |                    |                                      |
| DYS FPV 5.8G 4dBi Mushroom Antenna SMA Version                                     | 1        | Mushroom Antenna                                            |            |        | $4.85             |                    |                                      |
| [Top Deck](https://www.thingiverse.com/thing:2037868/files)                        | 1        | [Ziro PLA (Black)](printer-filament#ziro-pla-black)         | 5.19m      | 15.49g | £0.25             | :heavy_check_mark: |                                      |

![Almost Finished](https://github.com/mikepthomas/mikepthomas.github.io/raw/develop/src/img/openrc-mini-quad/almost-finished.jpg)
