---
title: Assembly of an Anet A8 3D printer
date: 2018-05-19
author: Mike Thomas
description: This project was to assemble a cheap 3D printer with the premise to eventually make it better by upgrading components and 3D printing improved parts.
preview: /assets/blog/printer/printer-hero.jpg
slug: /projects/printer
related:
  - /projects/printer-failures
  - /projects/printer-printed-upgrades
  - /projects/printer-hardware-upgrades
  - /projects/printer-am8
  - /projects/printer-enclosure
draft: false
tags:
  - Anet A8
categories:
  - 3D Printing
keywords:
  - Printer
---

# Table of contents

# Intro

This project was to assemble a cheap 3D printer with the premise to eventually make it better by upgrading components and 3D printing improved parts.

# Assembly

## Frame

![An unassembled Anet A8 in original packaging](/assets/blog/printer/01-before-assembly.jpg)

The kit comes nicely packed in these polystyrene trays keeping things nice and protected.

![Assembled Mid Frame](/assets/blog/printer/02-mid-frame.jpg)

The top and bottom support plates get fixed to the side support plates making up the main part of the frame.

![Adding the top frame lock plates](/assets/blog/printer/03-top-frame.jpg)

And finally the support plate lock plates tie them together.

## Y Axis

![Installing the Y-Axis motor to the back plate](/assets/blog/printer/04-y-axis-motor.jpg)

The Y axis motor is secured to the back plate by the Y axis motor fixed plate and the Y limit switch is fixed into place with the Y axis limit switch fixed plate.

![Adding the back plate to the rear of the frame](/assets/blog/printer/05-rear-frame.jpg)

The back plate is then attached to the rear of the frame.

![Y-Axis bearing support on Front Plate](/assets/blog/printer/06-y-axis-tensioner.jpg)

The Y axis bearing support is attached to the front plate.

![Installing the Y-Axis threaded rods](/assets/blog/printer/07-y-axis-install.jpg)

The front plate is then attached to the main frame using the 400mm M8 threaded rods and 12 M8 nuts and washers.

![Installing the Y-Axis bearings and smooth rods](/assets/blog/printer/08-y-axis-rods.jpg)

2 linear bearing blocks are threaded onto 2 of the 380mm smooth rods and then affixed next to the threaded rods. These are held in place with 4 guide rod back up plates.

## Heated Bed

![Screwing the Bed Carriage together](/assets/blog/printer/09-bed-carriage.jpg)

Two Y axis fixation clamps are loosely screwed to the hot bed fixed aluminium plate, these will hold the ends of the belt later.

![Bed Carriage installed on the printer](/assets/blog/printer/10-bed-carriage-install.jpg)

The hot bed aluminium plate is then attached to the linear bearing blocks.

![Installing the belt to the bed](/assets/blog/printer/11-y-belt.jpg)

The Y axis belt is then installed and the carriage is moved back and forth along the rails to ensure the travel is smooth.

![Adding the heated bed with adjusting springs](/assets/blog/printer/12-heated-bed.jpg)

The heated bed is then attached to the hot bed aluminium plate with 4 springs and wing nuts to allow the bed to be levelled.

## Z Axis

![Z-Axis motors and limit switch installed](/assets/blog/printer/13-z-axis-motors.jpg)

The Z axis motors are attached to the Z axis motor fixed plates and then attached to the frame with the 4 Z axis support plates. The Z axis limit switch is then affixed to the frame with the Z axis limit switch fixed plate.

![Smooth rods for the Z-Axis](/assets/blog/printer/14-z-axis-rods.jpg)

The Z axis nut supports are each added to the last two 380mm smooth rods and then threaded through the support plate lock plates at the top of the frame. These are held in place with the two remaining guide rod back up plates.

![Adding in the lead screws](/assets/blog/printer/15-lead-screws.jpg)

The two 345mm 8mm lead screws are then threaded through the nut supports and fixed to the Z motors.

## X Axis

![X-Axis bearings on the smooth rods](/assets/blog/printer/16-x-axis-rods.jpg)

3 linear bearing blocks are added to the two 436mm guide rods, 2 on the top rod 1 on the bottom and then press fitted into the nut supports.

![Fully assembled Anet A8 Extruder](/assets/blog/printer/17-extruder.jpg)

The extruder assembly is assembled.

![Screwing the X-Axis carriage to the bearings](/assets/blog/printer/18-x-axis-carriage.jpg)

The X axis carriage is then attached to the X axis linear bearing blocks.

![Extruder Installed on the X-Axis carriage](/assets/blog/printer/19-extruder-install.jpg)

And the extruder is attached to the carriage.

![Adding the part cooling fan](/assets/blog/printer/20-part-cooling-fan.jpg)

The part cooling fan is fixed to the front of the carriage.

![X-Axis motor is attached to the Z-Axis nut support](/assets/blog/printer/21-x-axis-motor.jpg)

The X axis motor is attached to the left Z axis nut support.

![The completed X-Axis](/assets/blog/printer/22-x-axis-complete.jpg)

The X axis belt is then installed and the carriage is moved back and forth along the rails to ensure the travel is smooth.

## Electronics

![Installing the Display](/assets/blog/printer/23-display.jpg)

the LCD 2004 screen is installed into the frame sandwiched between the top support plate and the screen baffle plate.

![Bolting the power supply to the side of the frame](/assets/blog/printer/24-power-supply.jpg)

The 12V power supply is fixed into place on the right of the frame.

![Installing the control board](/assets/blog/printer/25-control-board.jpg)

The control board is fixed into place on the left side of the frame.

![A mess of wires before they are installed](/assets/blog/printer/26-wiring.jpg)

The various wires are then plugged into the correct spots on the power supply and control board.

## Testing

![Not letting out the magic smoke](/assets/blog/printer/27-initial-power-on.jpg)

After double checking the wires are plugged into place in the correct polarity the printer is turned on for the first time.

![Printer booted up for the first time](/assets/blog/printer/28-she-lives.jpg)

Always good to see that something is displayed on the screen.

![Tidying up the wiring](/assets/blog/printer/29-wire-management.jpg)

The wires are then tidied up with the included spiral wrap to keep them getting snagged on any moving parts.

## Finished

![First ever print on the printer; a Benchy boat](/assets/blog/printer/30-first-print.jpg)

The hello world of the 3D printing world... the first print had to be a [3D Benchy](https://www.3dbenchy.com/).

# Safety Upgrades

![Goodies to upgrade the printer](/assets/blog/printer/safety-upgrades.jpg)

The Anet A8 has [a bit of a reputation](https://www.fabbaloo.com/2018/12/3d-printer-safety-another-anet-a8-burns) for [catching on fire and burning your house down](https://www.thissmarthouse.net/dont-burn-your-house-down-3d-printing-a-cautionary-tale/) these upgrades are a must to ensure safety of using the printer.

- 30A power supply
- Mosfets
- Enable Thermal runaway in Marlin

I also ran 2 more cables to the heated bed to spread the current load between the extra pins on the heated bed as if the existing pins become loose they will melt the connector.

# Auto Bed Levelling

To enable auto bed levelling on the printer I used a Tronxy XY-08N.

![Auto Level Sensor Installed](/assets/blog/printer/auto-level-sensor.jpg)

The firmware to enable the sensor is available on [my Marlin Github repository](https://github.com/mikepthomas/Marlin/tree/2.0.x-Anet3D-V1-5)
