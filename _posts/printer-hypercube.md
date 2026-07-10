---
title: Hypercube
heading: Upgrading my Anet A8 to a Hypercube
date: 2022-02-15
lastmod: 2022-03-30
author: Mike Thomas
description: I had originally intended to migrate from the Anet A8's acrylic frame to a CoreXY Hypercube style printer. This was abandoned for building a Voron instead.
preview: /assets/blog/printer-hypercube/hypercube-hero.jpg
slug: /projects/printer-hypercube
related:
  - /projects/printer-am8
external:
  - https://www.thingiverse.com/thing:1752766
draft: false
tags:
  - Anet A8
  - CoreXY
categories:
  - 3D Printer
keywords:
  - Hypercube
---

# Table of contents

# Intro

I had originally intended to migrate from the Anet A8's acrylic frame to a CoreXY Hypercube style printer.
I thought that it may be a bad idea to modify my only printer in case I need to print other parts so have decided to [build a new printer instead](printer-voron-1.8).

# Frame

Since upgrading to SuperSlicer, I have pushed my printing speeds to the limit of what stock Anet A8 acrylic frame can cope with.

I have [stiffened the frame as much as I can with 3D printed upgrades](printer-printed-upgrades#frame-bracing) so I have now been looking at a number of different projects to upgrade the somewhat flexible plastic frame with a metal alternative.

Some of the ones I have found are:

## AM8

The [AM8](https://www.thingiverse.com/thing:2263216) is a direct drop in replacement for the acrylic frame on the Anet A8. This looks to be the easiest upgrade path that would do the job of getting a stiff frame on the printer, however, I would like the ability to upgrade the machine further in the future.

For the price of this frame upgrade, it would probably be better just to buy the upgraded version of the Anet A8, [The Anet A8 plus](https://anet3d.com/pages/a8-plus) which would also give me an upgraded build volume.

## Hypercube

The [Hypercube](https://www.thingiverse.com/thing:1752766) is a printer that uses a different way of moving the extruder around, known as CoreXY kinamatics, whereas the Anet A8 uses Cartesian kinematics. There is a Remix specialising in upgrading the Anet A8 to a Hypercube called the [Anet Evolution](https://www.thingiverse.com/thing:2786292).

## Hypercube Evolution

The [Hypercube Evolution](https://www.thingiverse.com/thing:2254103) is, as the name implies, a progression on the Hypercube. It also has a Remix devoted to upgrading an Anet A8 or AM8, [Anet A8/AM8 to Hypercube Evolution Upgrade Path](https://www.thingiverse.com/thing:3268908).

It is based on 3030 Extrusion... having looked around on the internet I have concluded that 3030 extrusion is very hard to source in the UK (especially looking for somewhere that provides custom cut lengths).

## RatRig

There are a number of printers in the [RatRig lineup](https://www.ratrig.com/) however many of them use custom plates that you will either need to buy off them as a kit or have custom machined. I would like to self source parts if required to upgrade the printer in stages.

## Voron Design

Voron is an open source project designed to create a 3D printer using only off the shelf and 3D printed parts.

They have a number of Printers in their current line up:

- [Voron0](https://www.vorondesign.com/voron0.1)
- [Trident](https://www.vorondesign.com/voron_trident)
- [Voron2](https://www.vorondesign.com/voron2.4)
- [Switchwire](https://www.vorondesign.com/voron_switchwire)
- [Legacy](https://www.vorondesign.com/voron_legacy)

## What I have chosen

I really like the idea of learning something new by upgrading the printer to CoreXY kinamatics, this rules out the AM8 and the Voron Switchwire. I also want to be able to incrementally upgrade the printer parts at a time rather than buying a kit and building a new printer (kinda like [Trigger's broom](https://www.youtube.com/watch?v=56yN2zHtofM) I like the idea that it is the same printer at the end). This also rules out buying a RatRig or a Voron kit. I have found it rather difficult to source 3030 extrusion in the UK so that rules out the Hypercube Evolution.

This leaves one option left, the Hypercube, this is a rather old design so I am going to start with this as a base, using ideas and remixes from the Anet Evolution... but using a frame from an older revision of the Voron Trident, the [Voron1](https://www.vorondesign.com/voron1.8). The four vertical corner extrusions, and the four front and rear extrusions on the 300mm Spec Voron 1.8 frame are exactly the same size as the ones required for the Anet Evolution. The 6 side extrusions, however, are 40mm longer.

What I am planning on doing to remedy this is instead of using 2 380mm smooth guide rods for the Z axis and two for the Y axis from the Anet A8 that the Anet Evolution suggests. I am going to use all four 380mm guide rods for the Z axis, like in the double Z axis version of the Hypercube Evolution. I will then purchase 2 new 400mm smooth guide rods to use for the Y axis. These seem to come in standard sizes and therefore may be about 20mm short, if this is the case I will modify the motor mounts and belt idlers to fit the rods.

The other reason for purchasing the frame for the Voron 1.8 instead of purchasing custom cut extrusion is that it is fairly difficult to find aluminium extrusion in the UK that is NOT V-slot. I want T-slot extrusion so that I have the ability to install [MGN9 linear rails](printer-voron-1.8#motion) in the future. As the name suggests MGN9 rails are 9mm wide however the widest part of V-Slot extrusion is 11mm wide, therfore the rail would not fit flat on the V-slot.

The kit I purchased also comes with the extrusions to build the electronics case into the rear of the printer (the newer Trident and Voron2 moved their electronics to the bottom of the printer) which means that I will not need to find or design an electronics case to fit, the Anet Evolution only has a case for the stock Anet A8 electronics.

# X Axis

To start off with I will not be deviating too far from the Anet Evolution. I will be printing the Belt clamp with belt tensioners from that and [eventually plan to upgrade the toolhead in the future](printer-hardware-upgrades#bmg-direct-drive).

| Item                                                                       | Quantity | Material                   |  Time |  Size | Weight |  Cost |      Printed       | Notes |
| -------------------------------------------------------------------------- | -------: | -------------------------- | ----: | ----: | -----: | ----: | :----------------: | ----- |
| [1_Carriage_X_NewVersion](https://www.thingiverse.com/thing:2786292/files) |        1 | [Tinmorry PETG (Black)]    | 2h58m | 9.06m | 31.59g | £0.63 | :heavy_check_mark: |
| [2_Belt_Clamp.stl](https://www.thingiverse.com/thing:2786292/files)        |        2 | [Amazon Basics PETG (Red)] |   16m | 0.59m |  1.81g | £0.03 | :heavy_check_mark: |
| [4_Belt_Tensioner](https://www.thingiverse.com/thing:2786292/files)        |        4 | [Amazon Basics PETG (Red)] |   03m | 0.08m |  0.25g | £0.01 | :heavy_check_mark: |

There is also an adapter plate, [Hypercube Afterburner adapter intergration remix](https://www.thingiverse.com/thing:5156654) that may work to mount an Afterburner on the guide rails.

# Y Axis

I have chosen to [replace the stock Y carriages with a remixed version](https://www.thingiverse.com/thing:2907433) by [osvalijr](https://www.thingiverse.com/osvalijr) as I prefer the modularity of them and it will allow me to print the bearing blocks in a different accent colour.

| Item                                                                   | Quantity | Material                   |  Time |   Size | Weight |  Cost |      Printed       | Notes |
| ---------------------------------------------------------------------- | -------: | -------------------------- | ----: | -----: | -----: | ----: | :----------------: | ----- |
| [1x_Conjunto_Y_Corpo](https://www.thingiverse.com/thing:2907433/files) |        2 | [Amazon Basics PETG (Red)] | 3h38m | 12.58m | 38.43g | £0.74 | :heavy_check_mark: |
| [1x_Conjunto_Y_Trava](https://www.thingiverse.com/thing:2907433/files) |        2 | [Tinmorry PETG (Black)]    |   37m |  1.71m |  5.95g | £0.12 | :heavy_check_mark: |
| [2x_Conjunto_Y_Bucha](https://www.thingiverse.com/thing:2907433/files) |        4 | [Tinmorry PETG (Black)]    |   44m |  1.67m |  5.84g | £0.12 | :heavy_check_mark: |

As I have a slightly longer Y axis compared to the Anet Evolution, I have redesigned some parts to allow me to use Y Guide rods that are 20mm too short for the frame.

I remixed the Belt Idlers from the [reinforced ones](https://www.thingiverse.com/thing:3853322) by [yoloswagersaurus](https://www.thingiverse.com/yoloswagersaurus) I extended the Y rod clamps by 13mm to make the full width of the Y clamps 25mm.

![Belt Idlers with extended Y clamps](/assets/blog/printer-hypercube/belt-idlers.png)

| Item                                                                                                                    | Quantity | Material                   |  Time |  Size | Weight |  Cost |      Printed       | Notes |
| ----------------------------------------------------------------------------------------------------------------------- | -------: | -------------------------- | ----: | ----: | -----: | ----: | :----------------: | ----- |
| [XY Idler Left](https://github.com/mikepthomas/3dprinting/blob/main/Designs/Hypercube%20Idlers/XY%20Idler%20Left.stl)   |        1 | [Amazon Basics PETG (Red)] | 2h47m | 8.99m | 27.45g | £0.53 | :heavy_check_mark: |
| [XY Idler Right](https://github.com/mikepthomas/3dprinting/blob/main/Designs/Hypercube%20Idlers/XY%20Idler%20Right.stl) |        1 | [Amazon Basics PETG (Red)] | 2h46m | 8.99m | 27.45g | £0.53 | :heavy_check_mark: |

I remixed the XY Motor brackets from the ones from the Anet Evolution (Nut Remix) to extend the Y rod clamps by 10mm, this including the extra on the Idlers should make up the 20mm I have short on my Y axis guide rods.

To support the Y motor, I want to add a [Y Motor support bracket](https://www.thingiverse.com/thing:3015584), however this if for the Hypercube Evolution and therefore, will only fit 3030 aluminium extrusion. I have redesigned this to fit the motor bracket that fit 2020 extrusion

![Y motor suport bracket with extended Y clamps](/assets/blog/printer-hypercube/y-motor-support-bracket.png)

| Item                                                                                                                                                         | Quantity | Material                   |  Time |  Size | Weight |  Cost |      Printed       | Notes |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------: | -------------------------- | ----: | ----: | -----: | ----: | :----------------: | ----- |
| [XY Stepper Mount - Left](https://github.com/mikepthomas/3dprinting/blob/main/Designs/Hypercube%20XY%20Motor%20Mounts/XY%20Stepper%20Mount%20-%20Left.stl)   |        1 | [Amazon Basics PETG (Red)] | 3h01m | 9.16m | 27.98g | £0.54 | :heavy_check_mark: |
| [XY Stepper Mount - Right](https://github.com/mikepthomas/3dprinting/blob/main/Designs/Hypercube%20XY%20Motor%20Mounts/XY%20Stepper%20Mount%20-%20Right.stl) |        1 | [Amazon Basics PETG (Red)] | 3h01m | 9.17m | 28.01g | £0.54 | :heavy_check_mark: |
| [Motor Brace Left](https://github.com/mikepthomas/3dprinting/blob/main/Designs/Hypercube%20Motor%20Brace/Motor%20Brace%20Left.stl)                           |        1 | [Tinmorry PETG (Black)]    | 2h04m | 6.04m | 21.05g | £0.42 | :heavy_check_mark: |
| [Motor Brace Right](https://github.com/mikepthomas/3dprinting/blob/main/Designs/Hypercube%20Motor%20Brace/Motor%20Brace%20Right.stl)                         |        1 | [Tinmorry PETG (Black)]    | 2h03m | 6.03m | 21.02g | £0.42 | :heavy_check_mark: |

If there is too much flex from the printed parts I will replace the stainless steel guide rods with some 8mm carbon fiber rods. I can then easilly cut these to the exact size required with a Dremel and have the added benefit of making the gantry lighter.

# Z Axis

As I will be using standard Nema 17 motors, with separate lead screws, connected with the stock flexible couplers, I want to support the lead screw with standard 608 bearings.

I have designed a holder for the bearing to sit on top of the couplers inspired by the [Z Axis Motor With Bearing Holder](https://www.thingiverse.com/thing:2780754) by [butchja](https://www.thingiverse.com/butchja)

![Part to add a bearing to support the lead screws](/assets/blog/printer-hypercube/z-motor-bearing-support.png)

| Item                                                                                                                                   | Quantity | Material                   |  Time |  Size | Weight |  Cost |      Printed       | Notes |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------: | -------------------------- | ----: | ----: | -----: | ----: | :----------------: | ----- |
| [2_Z_Motor_Mount](https://www.thingiverse.com/thing:2786292/files)                                                                     |        2 | [Amazon Basics PETG (Red)] | 2h02m | 6.68m | 20.41g | £0.39 | :heavy_check_mark: |
| [Z Motor Bearing](https://github.com/mikepthomas/3dprinting/blob/main/Designs/Hypercube%20Z%20Motor%20Bearing/Z%20Motor%20Bearing.stl) |        2 | [Tinmorry PETG (Black)]    | 3h10m | 7.64m | 26.66g | £0.53 | :heavy_check_mark: |

I have printed [Z Axis anti wobble](https://www.thingiverse.com/thing:2907460) by [osvalijr](https://www.thingiverse.com/osvalijr) to support the top of the lead screw.

| Item                                                                        | Quantity | Material                   |  Time |  Size | Weight |  Cost |      Printed       | Notes |
| --------------------------------------------------------------------------- | -------: | -------------------------- | ----: | ----: | -----: | ----: | :----------------: | ----- |
| ~[1x_Right_Z_Wooble_608z](https://www.thingiverse.com/thing:2907460/files)~ |        1 | [Amazon Basics PETG (Red)] | 2h05m | 6.53m | 19.96g | £0.38 | :heavy_check_mark: |
| ~[1x_left_Z_Wooble_608z](https://www.thingiverse.com/thing:2907460/files)~  |        1 | [Amazon Basics PETG (Red)] | 2h05m | 6.54m | 19.98g | £0.38 | :heavy_check_mark: |

> [!CAUTION]
> I am not fitting these as they are based on the top Z guide rod clamps that are too tall to fit on the Voron frame. I may remix them into the shorter bottom clamps at a later stage so that they will fit.

## Z Rail Arms

I have remixed the original Z Rail Arms to add some M3 nut traps, to recess the screw head, so that I can use socket head screws instead of button head screws. I have also printed 2 additional Bottom mounts to use at the top of the Z rails to allow more space for the Y Axis to move.

![Stock rail arms with added m3 nut traps](/assets/blog/printer-hypercube/z-rail-arms.png)

| Item                                                                                                                                                  | Quantity | Material                |  Time |  Size | Weight |  Cost |      Printed       | Notes |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------: | ----------------------- | ----: | ----: | -----: | ----: | :----------------: | ----- |
| [Z Rail Arm Bottom Left](https://github.com/mikepthomas/3dprinting/blob/main/Designs/Hypercube%20Z%20Rail%20Arm/Z%20Rail%20Arm%20Bottom%20Left.stl)   |    ~2~ 4 | [Tinmorry PETG (Black)] | 1h08m | 3.20m | 11.14g | £0.22 | :heavy_check_mark: |
| [Z Rail Arm Bottom Right](https://github.com/mikepthomas/3dprinting/blob/main/Designs/Hypercube%20Z%20Rail%20Arm/Z%20Rail%20Arm%20Bottom%20Right.stl) |    ~2~ 4 | [Tinmorry PETG (Black)] | 1h09m | 3.19m | 11.14g | £0.22 | :heavy_check_mark: |
| ~[Z Rail Arm Top Left](https://github.com/mikepthomas/3dprinting/blob/main/Designs/Hypercube%20Z%20Rail%20Arm/Z%20Rail%20Arm%20Top%20Left.stl)~       |        2 | [Tinmorry PETG (Black)] | 2h05m | 5.99m | 20.88g | £0.42 | :heavy_check_mark: |
| ~[Z Rail Arm Top Right](https://github.com/mikepthomas/3dprinting/blob/main/Designs/Hypercube%20Z%20Rail%20Arm/Z%20Rail%20Arm%20Top%20Right.stl)~     |        2 | [Tinmorry PETG (Black)] | 2h05m | 5.98m | 20.87g | £0.42 | :heavy_check_mark: |

> [!CAUTION]
> I am using another set of bottom mounts for the top as the top Z guide rod clamps are too tall to fit on the Voron frame.

# Bed Mounting

The bearing clamps to mount the bed carriage to the Z axis are from the Anet Evolution however, as I am using [Igus DryLin RJ4JP 01-08 Bearings](https://www.igus.com/product/990). The bearings are not as snug in the holders as the stainless steel ones. Therefore, I took inspiration from [this Z Bearing Fixer](https://www.thingiverse.com/thing:3095514) by [Budiman7x](https://www.thingiverse.com/Budiman7x) and redesigned them to fit my smaller 8mm guide rods.

![Clamp to secure the Z-Axis bearings](/assets/blog/printer-hypercube/z-bearing-fixer.png)

| Item                                                                                                                                               | Quantity | Material                   |  Time |   Size | Weight |  Cost |      Printed       | Notes |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------: | -------------------------- | ----: | -----: | -----: | ----: | :----------------: | ----- |
| [2_Z_Axis_Holder](https://www.thingiverse.com/thing:2786292/files)                                                                                 |        4 | [Tinmorry PETG (Black)]    | 3h22m | 11.66m | 40.66g | £0.81 | :heavy_check_mark: |
| [Z Bearing Fixer](https://github.com/mikepthomas/3dprinting/blob/main/Designs/Hypercube%20Z%20Bearing%20Fixer/Hypercube%20Z%20Bearing%20Fixer.stl) |        4 | [Amazon Basics PETG (Red)] | 1h13m |  4.55m | 13.89g | £0.27 | :heavy_check_mark: |
| [2_Z_Nut_Braket](https://www.thingiverse.com/thing:2786292/files)                                                                                  |        2 | [Amazon Basics PETG (Red)] | 1h34m |  5.46m | 16.68g | £0.32 | :heavy_check_mark: |

When the bed frame is assembled I will measure the difference between the bed and the frame and create some Bed Mounts remixed from something like the [Anet Evolution Printerbed Holder](https://www.thingiverse.com/thing:3351036).

# Case

The Anet Evolution comes with STLs to print a case to attach to the 2020 aluminium extrusion, however it is for the stock Anet A8 board, I have [upgraded mine to an SKR 1.4 Turbo](printer-hardware-upgrades). There are [cases on Thingyverse that may work](https://www.thingiverse.com/search?q=SKR+1.4+case+for+2020) but as I am using a Voron Frame I might as well print the parts required for the [Rear Electronics Enclosure](https://github.com/VoronDesign/Voron-1/tree/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure) and mount the electronics on DIN rails. This will require me to design some mounts similar to the [Raspberry Pi bracket](https://github.com/VoronDesign/Voron-1/blob/Voron1.8/STLs/Electronics_Brackets/Rear_Electronics_Enclosure/raspberrypi_bracket.stl) that I can mount the [BIQU Mosfets](https://www.biqu.equipment/products/3d-printer-parts-heating-controller-mks-mosfet-for-heat-bed-extruder-mos-module-exceed-30a-support-big-current) for the heated bed and hotend.

# Endstops

I am not sure whether to use the clicky switches that the Anet Evolution provides mounts for or search for optical endstop mounts that will fit 8mm guide rods. I will work this out after the frame is assembled and the guide rods are mounted.

# Heated Bed

I am currently using a 12V power supply and the stock 12V Anet A8 heated bed. All current Voron printers use [mains powered silicone heater mat, attached to a Cast Aluminium Tooling Plate](printer-voron-1.8#print-bed) and controlled by a Solid State Relay. This allows the heated bed to heat up to temperature quicker and holds a greater thermal mass for longer.

This upgrade will also increase the XY build volume from the stock Anet A8 build plate size of 220x220mm to 300x300mm.

# Electronics

The Anet A8 uses a 12V power supply however modern 3D printers opt to use 24V as the heated bed can heat up quicker. I will eventually upgrade the 12V power supply to the one recommended on the Voron BOM, a Meanwell 24V one, this will also require me to upgrade the hotend heater and all fans to 24V versions.

# Rebuild the Anet A8

Once I have upgraded everything to this point I should have all the original parts left over to rebuild it back into the original frame... or maybe reuse them to build a Voron Legacy? :wink:

[Filament]: #
[Amazon Basics PETG (Red)]: printer-filament#amazon-basics-petg-red
[Tinmorry PETG (Black)]: printer-filament#tinmorry-petg-black
