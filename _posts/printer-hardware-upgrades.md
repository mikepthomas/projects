---
title: Printer Hardware Upgrades
heading: 3D Printer Hardware Upgrades
date: 2021-05-12
lastmod: 2023-11-12
author: Mike Thomas
description: This page contains information about how I upgraded my Anet A8 to add various hardware mods including swapping out the control board to a BigTreeTech SKR 1.4.
preview: /assets/blog/printer-hardware-upgrades/skr-upgrade-hero.jpg
slug: /projects/printer-hardware-upgrades
draft: false
tags:
  - Anet A8
  - BigTreeTech
categories:
  - 3D Printing
keywords:
  - Upgrades
---

# Table of contents

# Intro

This page contains information about how I upgraded my Anet A8 to add various hardware mods including swapping out the control board to a BigTreeTech SKR 1.4.

# Wiring

In addition to upgrading the heated bed cables as part of the [safety upgrades](printer#safety-upgrades) I also have replaced the original 12V wiring with thicker 18AWG cables.

![Making adaptor wires for the existing cables](/assets/blog/printer-hardware-upgrades/wiring.jpg)

I made adapter cables by following the guide at [Caggius Interweb blog](https://caggius.wordpress.com/anet-a8-rewiring-for-skr1-3/) so that I did not need to repin the existing cables if i ever need to go back to using the original Anet A8 control board.

# SKR 1.4 Control Board

![The obligatory Benchy](/assets/blog/printer-hardware-upgrades/benchy.jpg)

## Electronics Case Design

Adapted from [Anet A8 Electronics Case](printer-printed-upgrades#anet-a8-electronics-case)

![Designing a case for the new control board](/assets/blog/printer-hardware-upgrades/designing-case.jpg)

The STLs that I printed to install the new board and mosfets are available on [my 3D printing repository on Github](<https://github.com/mikepthomas/3dprinting/blob/main/Designs/Anet%20A8%20Electronics%20Case/Anet%20A8%20Electronics%20Case%20(No%20Access%20Holes).stl>) including [the top half](https://github.com/mikepthomas/3dprinting/blob/main/Designs/Anet%20A8%20Electronics%20Case/Anet%20A8%20Electronics%20Case%20Top.stl) that has an update to hold the [Mini UPS V2.0](<https://github.com/bigtreetech/BIGTREETECH-MINI-UPS-V2.0/blob/master/miniUPS_V2.0%20(12V)/MINI%20UPS%20V2.0%20user%20manual-2019-11-29.pdf>).

![Using Fusion 360 to design a mount for the control board](/assets/blog/printer-hardware-upgrades/design.jpg)

I have made a few updates to the design to allow access to the USB port and to fit the [TF Cloud V1.0](https://github.com/bigtreetech/BTT-SD-TF-Cloud-V1.0/blob/master/BTT%20SD%26TF%20Cloud%20V1.0%20Instruction.pdf).
The design also includes a pocket to house the [BTT EEPROM module](https://github.com/bigtreetech/BTT-Expansion-module/blob/master/BTT%20EEPROM/BTT%20EEPROM%20V1.0User%20Manual.pdf) however, I have not yet printed this so there may be some issues with sizes & support of the holes in the back, and the size of the pocket for the EEPROM module.
You can download the experimental design from [my 3D printing repository on Github](<https://github.com/mikepthomas/3dprinting/blob/main/Designs/Anet%20A8%20Electronics%20Case/Anet%20A8%20Electronics%20Case%20(With%20Access%20Holes).stl>).

![Before mounting the new electronics case](/assets/blog/printer-hardware-upgrades/electronics-case.jpg)

## Firmware

![Marlin firmware for the BTT SKR 1.4 on an Anet A8](/assets/blog/printer-hardware-upgrades/firmware.jpg)

The firmware configured to run the printer and all of the mods I have made is available on [my Marlin Github repository](https://github.com/mikepthomas/Marlin/tree/2.1.x-Anet-SKR-1.4).

# TFT24 Mount

[TFT24 Case for AnetA8 from Thingyverse](https://www.thingiverse.com/thing:4651132) by user [joeleonardo](https://www.thingiverse.com/joeleonardo)

I used this design to locate the new display in the same place as the original, to cover up the holes at the top of the frame. I may replace this at a later date with a blanking plate and relocate the screen somewhere else as this one blocks the gantry at about a height of 200mm and therefore I have lost approximately 40mm of Z travel.

![TFT24 mounted to the printer](/assets/blog/printer-hardware-upgrades/tft-mount.jpg)

# Smart Filament Sensor

[Mount for BTT SFS V1.0 Smart Filament Sensor from Thingyverse](https://www.thingiverse.com/thing:4640216) by user [StonehengeFR](https://www.thingiverse.com/StonehengeFR)

I used the original design with the arms as the updated design without the arms was too loose and would not hold the sensor in an upright position.

![Smart filament sensor amongst a few other upgrades](/assets/blog/printer-hardware-upgrades/smart-filament-sensor.jpg)

# Relay Mount

Adapted from [PSU Cover Remix](printer-printed-upgrades#psu-cover-remix)

I updated the PSU Cover to hold the [BTT Relay V1.2](https://github.com/bigtreetech/BIGTREETECH-Relay-V1.2/blob/master/BIGTREETECH%20Relay%20V1.2/BIGTREETECH%20Relay%20V1.2/Relay%20V1.2-Operating%20Instruction.pdf) The relay allows me to safely turn off the printer when a print has finished and to save electricity.

You can download the changes to the original PSU Cover from [my 3D printing repository on Github](https://github.com/mikepthomas/3dprinting/blob/main/Designs/Anet%20A8%20Relay%20Mount%20/Anet%20A8%20Relay%20Mount.stl).

![The Relay board installed in the power supply mount](/assets/blog/printer-hardware-upgrades/relay-mount.jpg)

# 3D Touch

My inductive probe did not sense the bed underneath the borosilicate glass plate I purchased to make my prints have a smoother appearance on the first layer so I installed a 3D Touch sensor in place of it to physically touch the bed and get more accurate bed mesh.

# Drylin Bearings

![Rebuilding the X-Axis to install Drylin Bearings](/assets/blog/printer-hardware-upgrades/drylin-bearings.jpg)

To make the movement of the printer smoother I decided to replace the stock metal linear bearings with Drylin ones.

# Hard Silicone Bed Mounts

![Hard Silicone Bed Mounts](/assets/blog/printer-hardware-upgrades/silicone-bed-mounts.jpg)

The stock bed springs can vibrate at high accelerations and cause ripples in the prints. I have replaced them with hard silicone mounts to help stop these.

# Neopixel LED Strip

![Neopixel LED Strip](/assets/blog/printer-hardware-upgrades/led-strip.jpg)

I [followed this guide](https://www.makenprint.uk/3d-printing/3d-printing-guides/skr-v1-4-adding-neopixel-leds/) to add 20 Neopixel LED lights to the bottom of the X gantry. This also required the DCDC Power adapter to allow higher power draw from the main board.

# Optical Endstops

![Optical Endstop installed on X Axis](/assets/blog/printer-hardware-upgrades/optical-endstop.jpg)

The stock clicky switches are only rated to a certain number of presses before they fail. I wanted to try out optical endstops to replace the clicky switches to stop any extra stresses of the gantry constantly hitting the frame.

# 0.9 Degree Motors

![LDO X Motor](/assets/blog/printer-hardware-upgrades/ldo-motor-installed.jpg)

Since tuning the printer to remove as many imperfections in my prints as possible, I started to notice Vertical Fine Artifacts in my prints:

![Vertical Fine Artifacts shown on a printed part](/assets/blog/printer-hardware-upgrades/vfas-in-print.jpg)

[This page on the Prusa Printer Forums](https://forum.prusaprinters.org/forum/original-prusa-i3-mk3s-mk3-user-mods-octoprint-enclosures-nozzles/stepper-motor-upgrades-to-eliminate-vfa-s-vertical-fine-artifacts/) suggests replacing the stock 1.8 degree motors with higher resolution 0.9 degree stepper motors.

I have mainly been printing with Matt ABS filament since fitting the motors and therefore have not really seen any improvements in print quality. I will have to print with some glossy black PETG to see some like for like results before recommending the upgrade.

# PEI Flex Plate

When I first started printing with this machine I printed directly on the bed, covered in painters masking tape.

After having to replace the tape after pretty much every print I purchased a [piece of tempered glass](https://www.amazon.co.uk/gp/product/B00ICKHRBA) to print on, however when I added an [inductive bed level sensor](printer#auto-bed-levelling) the sensor could not sense the metal through the glass pane so I switched to using [cheap buildtack clone build surfaces](https://www.amazon.co.uk/gp/product/B076G2X6ZH).

![Heat + adhesive = bad time](/assets/blog/printer-hardware-upgrades/baked-on-adhesive.jpg)

I really liked the glossy look of printing on the glass so after I added a [3D Touch](printer-hardware-upgrades#3d-touch) sensor I moved back to printing on the glass build surface. To get the prints to adhere to the glass, I had to use glue stick or [Magigoo](https://www.amazon.co.uk/gp/product/B01N2JGTWJ) and wash the glass clean after a few prints.

![Finally removed the baked on adhesive](/assets/blog/printer-hardware-upgrades/adhesive-removed.jpg)

More modern printers have moved over to using magnetic PEI Flex plates. The PEI has excellent print adhesion without adding anything extra and as the flex plate is removable, once the bed has cooled you can easilly pop off the print by slightly flexing the plate.

![PEI Flex Plate installed](/assets/blog/printer-hardware-upgrades/pei-flex-plate.jpg)

# BMG Direct Drive

I have purchased parts to install the [ANET A8 E3DV6 BMG Direct Drive X Carriage](https://www.thingiverse.com/thing:3807114), the adapter plate should be a direct bolt on to the X Carriage of the Anet A8. This was chosen as the parts that are required for this are the exact same parts that are required to build the [Voron Afterburner](printer-voron-1.8#afterburner).

## Motion

| Item             | Quantity | Received | Notes |
| ---------------- | -------- | -------- | ----- |
| BMG Extruder Kit | 1        | 1        |       |

## Electronics

| Item                           | Quantity | Received | Notes                              |
| ------------------------------ | -------- | -------- | ---------------------------------- |
| 3D Touch                       | 1        | 1        |                                    |
| 50x50x15 Centrifugal Fan (12V) | 1        | 1        |                                    |
| 40x40x10 Axial Fan (12V)       | 1        | 1        |                                    |
| E3D V6 Bowden Hotend Kit (12V) | 1        | 1        |                                    |
| NEMA17 Motor                   | 1        | 1        | Using stock Anet A8 Extruder Motor |

## Printed Parts

| Item                                                                   | Quantity | Material                                                                | Printed | Notes                          |
| ---------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------- | :-----: | ------------------------------ |
| [StepperBMG_holder](https://www.thingiverse.com/thing:4271258/files)   | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   | Version with Cable Chain Mount |
| [BLtouch_support](https://www.thingiverse.com/thing:3807114/files)     | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   |                                |
| [Fan_holder](https://www.thingiverse.com/thing:3807114/files)          | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   |                                |
| [Baseplate_BMG](https://www.thingiverse.com/thing:3807114/files)       | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   |                                |
| [Mistral_V2.1a_Leo_N](https://www.thingiverse.com/thing:2121279/files) | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   |                                |
| [E3D_Fan_Duct](https://www.thingiverse.com/thing:929326/files)         | 1        | [PrimaValue ABS (Dark Grey)](printer-filament#primavalue-abs-dark-grey) |   :x:   |                                |
