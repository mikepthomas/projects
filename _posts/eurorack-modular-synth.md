---
title: Eurorack Modular Synth
heading: Building a DIY Eurorack Modular Synth
date: 2023-06-29
lastmod: 2025-03-19T23:18:34.929Z
author: Mike Thomas
description: Building a Eurorack Modular Synthesizer from scratch.
preview: /assets/blog/eurorack-modular-synth/eurorack-hero.jpg
slug: /projects/eurorack-modular-synth
draft: false
tags:
  - Music
  - Printed Circuit Board
categories:
  - Electronics
keywords:
  - Eurorack
promoted: true
---

# Table of contents

# Intro

I am a fan of [Look Mum No Computer](https://www.youtube.com/@LOOKMUMNOCOMPUTER), In one of his videos he mentioned about the website [Music From Outer Space](http://musicfromouterspace.com/index.php?MAINTAB=SYNTHDIY&VPW=1430&VPH=660) and the book `Make: Analog Synthesizers` which I have brought and I am currently reading through.

# Controller

![A KeyStep Pro in its original box](/assets/blog/eurorack-modular-synth/keystep-pro.jpg)

I wanted something that I could connect up to a computer via USB to use software synths like [VCVRack](https://vcvrack.com/) or for connecting up to [Garageband](https://www.apple.com/mac/garageband/) and maybe later [Logic Pro](https://www.apple.com/uk/logic-pro/). I also wanted something that is able to control hardware synths with Pitch CV, Velocity CV and Gate control or via MIDI inputs and outputs. The Keystep Pro provides all 3, via USB, MIDI and mono 3.5mm output jacks.

| Item        | Quantity | Received | Notes                                                                                                         |
| ----------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------- |
| KeyStep Pro | 1        | 1        | The Special Black Edition I purchased also came with 14 CV/Gate cables for connecting to the eurorack modules |

# Parts For Testing

## Breadboard

To test eurorack modules, I originally planned on building them up on a breadboard, powered by 2 9V Batteries.
However, I have recently purchased the [Erica Synths EDU DIY Labor Full Kit](#labor) that I will use to power and test the modules.

[Moritz Klein's Breadboard Basics Video](https://www.youtube-nocookie.com/embed/XpMZoR3fgd0?si=k-qhaluHhLYVeLpG)

> Videos © 2021 [Moritz Klein](https://www.youtube.com/@MoritzKlein0)

### Sourcing Parts

| Item                       | Quantity | Received | Notes |
| -------------------------- | -------- | -------- | ----- |
| 9V Battery                 | 2        | 2        |       |
| 9V Battery Connector       | 2        | 6        |       |
| Breadboard                 | 1        | 1        |       |
| Digital Multimeter         | 1        | 1        |       |
| Solid Core Wire Jumper Kit | 1        | 2        |       |

## Labor

[Erica Synths EDU DIY Labor](https://www.youtube-nocookie.com/embed/QyapQpQOwUM)

> Video © 2024 [Moritz Klein](https://www.youtube.com/@MoritzKlein0)

### Parts

| Item                                | Quantity | Received | Notes |
| ----------------------------------- | -------- | -------- | ----- |
| Erica Synths EDU DIY Labor Full Kit | 1        | 1        |       |

### :negative_squared_cross_mark: Assembly

Assembly Instructions are available in the [User Manual](https://www.ericasynths.lv/media/LABOR_MANUAL.pdf) on the [Erica Synths Website](https://www.ericasynths.lv/shop/diy-kits-1/edu-diy-labor/)

## Oscilloscope

I also plan on building a cheap DIY Oscilloscope kit into a [3D printed Eurorack Module](https://www.thingiverse.com/thing:3631288). I did not want to spend a lot of money on a decent oscilloscope, I just need one "good enough" to help with visualising waveforms and to get an idea of what output a module is producing.

### Sourcing Parts

| Item                                   | Quantity | Received | Notes |
| -------------------------------------- | -------- | -------- | ----- |
| DIY 2.4" inch LCD Digital Oscilloscope | 1        | 1        |       |
| MT3608 DC-DC Boost Converter           | 1        | 1        |       |

### Printing Parts

| Item                                                       | Quantity | Material                                                            | Time | Size | Weight | Cost | Printed | Notes |
| ---------------------------------------------------------- | -------- | ------------------------------------------------------------------- | ---- | ---- | ------ | ---- | :-----: | ----- |
| [Bracket](https://www.thingiverse.com/thing:3631288/files) | 2        | [PolyLite PLA Pro (Black)](printer-filament#polylite-pla-pro-black) |      |      |        |      |   :x:   |       |
| [Switch](https://www.thingiverse.com/thing:3631288/files)  | 3        | [PolyLite PLA Pro (Black)](printer-filament#polylite-pla-pro-black) |      |      |        |      |   :x:   |       |
| [Spacers](https://www.thingiverse.com/thing:3631288/files) | 4        | [PolyLite PLA Pro (Black)](printer-filament#polylite-pla-pro-black) |      |      |        |      |   :x:   |       |
| [Button](https://www.thingiverse.com/thing:3631288/files)  | 4        | [PolyLite PLA Pro (Black)](printer-filament#polylite-pla-pro-black) |      |      |        |      |   :x:   |       |
| [Panel](https://www.thingiverse.com/thing:3631288/files)   | 1        | [PolyLite PLA Pro (Black)](printer-filament#polylite-pla-pro-black) |      |      |        |      |   :x:   |       |

# Eurorack Case

I plan on 3D Printing a case to house the [Oscilloscope Module](#oscilloscope), [EDU DIY Drums Bundle](#edu-diy-drums-bundle) and any extra modules I make using [N8 Synth Prototype Kits](http://www.n8synth.co.uk/).

## Accessories

### Sourcing Parts

| Item                                   | Quantity | Received | Notes                                                                                                                                                       |
| -------------------------------------- | -------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Befaco Bananuts (Black)                | 25       | 25       |                                                                                                                                                             |
| Befaco Bananuts (Red)                  | 25       | 25       |                                                                                                                                                             |
| Befaco Bananuts Wrench Tool            | 1        | 1        |                                                                                                                                                             |
| Befaco Squid Cable                     | 1        | 1        |                                                                                                                                                             |
| Eurorack Blank Panels (Thonk Logo)     | 1 x 2HP  | 1        |                                                                                                                                                             |
| Eurorack Blank Panels (Circuit Design) | Set of 7 | Set of 7 | Available on [Modular Synth Lab](https://modularsynthlab.com/product/eurorack-blind-panels-3u-complete-set-7-sizes-in-one-package-black-20hp-panel-gratis/) |

## Power

### Sourcing Parts

| Item                         | Quantity | Received | Notes                                                                                                        |
| ---------------------------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------ |
| 16-16 pin Power Cable        | 5        | 10       | 30cm length                                                                                                  |
| Befaco Passive Bus           | 1        | 1        |                                                                                                              |
| Mean Well RT65B Power Supply | 1        | 1        | Available on [Modular Synth Lab](https://modularsynthlab.com/product/eurorack-power-supply-mean-well-rt65b/) |

## SP1

I have seen a 3D Printed Eurorack case that I would like to make called [The SP1 by Spillerphoto.com on Printables](https://www.printables.com/model/203562)

### Sourcing Parts

| Item                          | Quantity                   | Received | Notes                                                                                                                         |
| ----------------------------- | -------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------- |
| M3 Nylon Screws               | 40                         | 42       | Nylon can prevent [Rack Rash](https://learningmodular.com/glossary/rack-rash/)                                                |
| M3 Threaded Strip Insert 84HP | 4 (6 including dust cover) | 6        | Available on [Modular Synth Lab](https://modularsynthlab.com/product/eurorack-rails-m3-threaded-inserts/?attribute_size=84HP) |

### Printing Parts

#### Case

| Item                                                       | Quantity | Material                                                            | Time | Size | Weight | Cost | Printed | Notes |
| ---------------------------------------------------------- | -------- | ------------------------------------------------------------------- | ---- | ---- | ------ | ---- | :-----: | ----- |
| [SP110HPRC](https://www.printables.com/model/203562/files) | 1        | [PolyLite PLA Pro (Black)](printer-filament#polylite-pla-pro-black) |      |      |        |      |   :x:   |       |
| [SP1H25GM](https://www.printables.com/model/203562/files)  | 1        | [PolyLite PLA Pro (Black)](printer-filament#polylite-pla-pro-black) |      |      |        |      |   :x:   |       |
| [SP110HPLC](https://www.printables.com/model/203562/files) | 1        | [PolyLite PLA Pro (Black)](printer-filament#polylite-pla-pro-black) |      |      |        |      |   :x:   |       |
| [SP1H10C](https://www.printables.com/model/203562/files)   | 2        | [PolyLite PLA Pro (Black)](printer-filament#polylite-pla-pro-black) |      |      |        |      |   :x:   |       |
| [SP1H10 v6](https://www.printables.com/model/203562/files) | 2        | [PolyLite PLA Pro (Black)](printer-filament#polylite-pla-pro-black) |      |      |        |      |   :x:   |       |

#### Dust Cover

| Item                                                                                                       | Quantity | Material                                                            | Time | Size | Weight | Cost | Printed | Notes                                                                                 |
| ---------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------- | ---- | ---- | ------ | ---- | :-----: | ------------------------------------------------------------------------------------- |
| [SP1CapRC](https://www.printables.com/model/203562/files)                                                  | 1        | [PolyLite PLA Pro (Black)](printer-filament#polylite-pla-pro-black) |      |      |        |      |   :x:   |                                                                                       |
| [SP1CapLC](https://www.printables.com/model/203562/files)                                                  | 1        | [PolyLite PLA Pro (Black)](printer-filament#polylite-pla-pro-black) |      |      |        |      |   :x:   |                                                                                       |
| [SP1Cap10](https://www.printables.com/model/203562/files)                                                  | 4        | [PolyLite PLA Pro (Black)](printer-filament#polylite-pla-pro-black) |      |      |        |      |   :x:   |                                                                                       |
| [SP1Cap25](https://github.com/mikepthomas/3dprinting/blob/main/Designs/SP1%20Eurorack%20Case/SP1Cap25.stl) | 1        | [PolyLite PLA Pro (Black)](printer-filament#polylite-pla-pro-black) |      |      |        |      |   :x:   | This part doesn't exist on printables, I have created it myself by extending SP1Cap10 |

# mki x es.EDU System

## DIY Eurorack case

### Parts

Kit contains the `Quantity` needed for building 1 unit, except the parts for the [optional +5V Power Supply](#optional-5v-power-supply)

#### Case

| Item                      | Quantity |
| ------------------------- | -------- |
| 12V 1A AC/DC Wall Adapter | 1        |
| 84HP Eurorack Case        | 1        |
| DC Socket                 | 1        |
| Power Switch              | 1        |

#### Power Supply

| Item                             | Quantity |
| -------------------------------- | -------- |
| 2x8 Pin Sockets                  | 14       |
| 5mm Green LED                    | 1        |
| 5mm Red LED                      | 1        |
| EDU DIY PSU PCB                  | 1        |
| Electrolytic Capacitor (100uF)   | 1        |
| Electrolytic Capacitor (220uF)   | 2        |
| KF301 Screw Terminal (5mm pitch) | 2        |
| Metal Film resistor (3K)         | 2        |
| Mornsun DC/DC converter          | 1        |
| Resettable Fuse (RB300-30)       | 1        |
| Schottky diode (1N5819)          | 1        |

#### Optional: +5V Power Supply

| Item                          | Quantity |
| ----------------------------- | -------- |
| 5mm Red LED                   | 1        |
| Electrolytic Capacitor (10uF) | 2        |
| Film Capacitor (0.1uF)        | 2        |
| Metal Film resistor (1K)      | 1        |
| Voltage Regulator (78M05)     | 1        |

### :white_check_mark: Assembly

Assembly Instructions are available in the [User Manual](https://www.ericasynths.lv/media/instrukcija_2.pdf) on the [Erica Synths Website](https://www.ericasynths.lv/shop/diy-kits-1/mki-x-esedu-diy-1x84hp-case/)

## Sequencer

[Moritz Klein's DIY Sequencer Series](https://www.youtube-nocookie.com/embed/videoseries?list=PLHeL0JWdJLvTHwcS4WTlPvKXeUkZC5TpG)

> Videos © 2022 [Moritz Klein](https://www.youtube.com/@MoritzKlein0)

### Parts

Kit contains the `Quantity` needed for building 1 unit.

#### PCB

| Item                          | Quantity |
| ----------------------------- | -------- |
| EDU DIY Sequencer PCB         | 1        |
| EDU DIY Sequencer Front Panel | 1        |

#### Capacitors

| Item                          | Quantity |
| ----------------------------- | -------- |
| Electrolytic Capacitor (47uF) | 2        |
| Film Capacitor (1uF)          | 1        |
| Ceramic Capacitor (100NF)     | 5        |
| Ceramic Capacitor (1NF)       | 1        |

#### Diodes

| Item                   | Quantity |
| ---------------------- | -------- |
| Schottky Diode (SB140) | 2        |
| Signal Diode (1N4148)  | 15       |

#### Integrated Circuits

| Item                    | Quantity |
| ----------------------- | -------- |
| Transistor NPN (2N3904) | 5        |
| Transistor NPN (BC547)  | 1        |
| Op Amp Quad (TL074)     | 1        |
| Decade Counter (CD4017) | 1        |
| 14 Pin DIP Sockets      | 1        |
| 16 Pin DIP Sockets      | 1        |

#### Potentiometers

| Item                                | Quantity |
| ----------------------------------- | -------- |
| Vertical Trim Potentiometer (B250K) | 1        |
| Vertical Trim Potentiometer (B100K) | 5        |
| PCB Mount Trim Potentiometer (5K)   | 1        |
| PCB Mount Trim Potentiometer (2K)   | 2        |

#### Resistors

| Item                       | Quantity |
| -------------------------- | -------- |
| Metal Film resistor (100K) | 14       |
| Metal Film resistor (68K)  | 1        |
| Metal Film resistor (51K)  | 1        |
| Metal Film resistor (47K)  | 1        |
| Metal Film resistor (18K)  | 1        |
| Metal Film resistor (6.8K) | 1        |
| Metal Film resistor (4.7K) | 1        |
| Metal Film resistor (1K)   | 7        |
| Metal Film resistor (200R) | 1        |
| Metal Film resistor (10R)  | 2        |

#### Misc

| Item            | Quantity |
| --------------- | -------- |
| SPDT Switch     | 5        |
| SPTT Switch     | 1        |
| 3mm Red LED     | 5        |
| Mono Audio Jack | 5        |

### :white_check_mark: Assembly

Assembly Instructions are available in the [User Manual](https://www.ericasynths.lv/media/SEQ_MANUAL_v3.pdf) on the [Erica Synths Website](https://www.ericasynths.lv/shop/diy-kits-1/edu-diy-sequencer/)

## Voltage Controlled Oscillator (VCO)

[Moritz Klein's DIY VCO Series](https://www.youtube-nocookie.com/embed/videoseries?list=PLHeL0JWdJLvTuGCyC3qvx0RM39YvopVQN)

> Videos © 2020 [Moritz Klein](https://www.youtube.com/@MoritzKlein0)

### Parts

Kit contains the `Quantity` needed for building 1 unit, `Received` is extra quantities I have purchased to build additional units.

#### PCB

| Item                       | Quantity | Received | Notes                                                                                                      |
| -------------------------- | -------- | -------- | ---------------------------------------------------------------------------------------------------------- |
| EDU DIY VCO PCB            | 1        |          |                                                                                                            |
| EDU DIY VCO Front Panel    | 1        |          |                                                                                                            |
| 6HP Eurorack Prototype Kit |          | 5        | Available on [N8Synth](https://www.n8synth.co.uk/shop/eurorack-prototype-kits/6hp-eurorack-prototype-kit/) |

#### Capacitors

| Item                          | Quantity | Received | Notes |
| ----------------------------- | -------- | -------- | ----- |
| Electrolytic Capacitor (47uF) | 2        | 10       |       |
| Film Capacitor (1uF)          | 1        | 10       |       |
| Ceramic Capacitor (100NF)     | 5        | 100      |       |
| Film Capacitor (2.2NF)        | 1        | 20       |       |

#### Diodes

| Item                   | Quantity | Received | Notes                                                                                                          |
| ---------------------- | -------- | -------- | -------------------------------------------------------------------------------------------------------------- |
| Signal Diode (1N4148)  | 1        | 25       |                                                                                                                |
| Schottky Diode (SB140) | 2        | 20       | [Ordered suggested alternative SR140](https://uk.farnell.com/multicomp/sb140/diode-schottky-1a-40v/dp/9381350) |

#### Integrated Circuits

| Item                                   | Quantity | Received | Notes |
| -------------------------------------- | -------- | -------- | ----- |
| Transistor NPN (BC548)                 | 1        | 100      |       |
| Transistor PNP (BC558)                 | 1        | 100      |       |
| Op Amp Quad (TL074)                    | 1        | 10       |       |
| Hex Schmitt-Trigger Inverter (CD40106) | 1        | 10       |       |
| 14 Pin DIP Sockets                     | 2        | 10       |       |

#### Potentiometers

| Item                                 | Quantity | Received | Notes                                                   |
| ------------------------------------ | -------- | -------- | ------------------------------------------------------- |
| PCB Mount Trim Potentiometer (1K)    | 1        | 10       |                                                         |
| Vertical Alpha Potentiometer (B100K) | 1        | 20       | With Aluminum Knobs                                     |
| Vertical Trim Potentiometer (B100K)  | 2        | 8        |                                                         |
| Vertical Trim Potentiometer (B250K)  | 1        | 5        | Ordered Alpha Potentiometer With Aluminum Knobs instead |
| Vertical Trim Potentiometer (B1M)    | 1        | 5        | Ordered Alpha Potentiometer With Aluminum Knobs instead |

#### Resistors

| Item                       | Quantity | Received | Notes                               |
| -------------------------- | -------- | -------- | ----------------------------------- |
| Metal Film resistor (1M)   | 2        | 100      |                                     |
| Metal Film resistor (100K) | 9        | 100      |                                     |
| Metal Film resistor (68K)  | 2        | 100      |                                     |
| Metal Film resistor (47K)  | 1        | 100      |                                     |
| Metal Film resistor (33K)  | 1        | 100      |                                     |
| Metal Film resistor (14K)  | 1        |          | Using 47K + 20k in parallel instead |
| Metal Film resistor (1.5K) | 1        | 100      |                                     |
| Metal Film resistor (1K)   | 2        | 100      |                                     |
| Metal Film resistor (10R)  | 2        | 100      |                                     |

#### Misc

| Item            | Quantity | Received | Notes |
| --------------- | -------- | -------- | ----- |
| 10K thermistor  | 4        | 20       |       |
| Mono Audio Jack | 5        | 30       |       |

### :white_check_mark: Assembly

Assembly Instructions are available in the [User Manual](https://www.ericasynths.lv/media/VCO_MANUAL_v2.pdf) on the [Erica Synths Website](https://www.ericasynths.lv/shop/diy-kits-1/edu-diy-vco/)

## Voltage Controlled Filter (VCF)

[Moritz Klein's DIY VCF Series](https://www.youtube-nocookie.com/embed/videoseries?list=PLHeL0JWdJLvT1PAqW4TtvxtRoXyk741WM)

> Videos © 2020 [Moritz Klein](https://www.youtube.com/@MoritzKlein0)

### Parts

Kit contains the `Quantity` needed for building 1 unit, `Received` is extra quantities I have purchased to build additional units.

#### PCB

| Item                       | Quantity | Received | Notes                                                                                                      |
| -------------------------- | -------- | -------- | ---------------------------------------------------------------------------------------------------------- |
| EDU DIY VCF PCB            | 1        |          |                                                                                                            |
| EDU DIY VCF Front Panel    | 1        |          |                                                                                                            |
| 6HP Eurorack Prototype Kit |          | 5        | Available on [N8Synth](https://www.n8synth.co.uk/shop/eurorack-prototype-kits/6hp-eurorack-prototype-kit/) |

#### Capacitors

| Item                          | Quantity | Received | Notes |
| ----------------------------- | -------- | -------- | ----- |
| Electrolytic Capacitor (47uF) | 2        | 10       |       |
| Film Capacitor (1uF)          | 2        | 10       |       |
| Ceramic Capacitor (100NF)     | 6        | 100      |       |
| Film Capacitor (1NF)          | 5        | 20       |       |

#### Diodes

| Item                   | Quantity | Received | Notes                                                                                                          |
| ---------------------- | -------- | -------- | -------------------------------------------------------------------------------------------------------------- |
| Schottky Diode (SB140) | 2        | 20       | [Ordered suggested alternative SR140](https://uk.farnell.com/multicomp/sb140/diode-schottky-1a-40v/dp/9381350) |
| Signal Diode (1N4148)  | 9        | 25       |                                                                                                                |

#### Integrated Circuits

| Item                | Quantity | Received | Notes |
| ------------------- | -------- | -------- | ----- |
| Op Amp Quad (TL074) | 2        | 10       |       |
| 14 Pin DIP Sockets  | 2        | 10       |       |

#### Potentiometers

| Item                                 | Quantity | Received | Notes                                                          |
| ------------------------------------ | -------- | -------- | -------------------------------------------------------------- |
| PCB Mount Trim Potentiometer (50K)   | 1        | 10       |                                                                |
| Vertical Trim Potentiometer (B100K)  | 4        | 8        | Will substitute 3 with Alpha Potentiometer With Aluminum Knobs |
| Vertical Alpha Potentiometer (B100K) | 1        | 20       |                                                                |

#### Resistors

| Item                       | Quantity | Received | Notes                               |
| -------------------------- | -------- | -------- | ----------------------------------- |
| Metal Film resistor (100K) | 5        | 100      |                                     |
| Metal Film resistor (68K)  | 2        | 100      |                                     |
| Metal Film resistor (33K)  | 8        | 100      |                                     |
| Metal Film resistor (27K)  | 2        | 100      |                                     |
| Metal Film resistor (14K)  | 1        |          | Using 47K + 20k in parallel instead |
| Metal Film resistor (2K)   | 2        | 100      |                                     |
| Metal Film resistor (1K)   | 3        | 100      |                                     |
| Metal Film resistor (10R)  | 2        | 100      |                                     |

#### Misc

| Item            | Quantity | Received | Notes |
| --------------- | -------- | -------- | ----- |
| Mono Audio Jack | 4        | 30       |       |

### :white_check_mark: Assembly

Assembly Instructions are available in the [User Manual](https://www.ericasynths.lv/media/VCF_MANUAL_v2.pdf) on the [Erica Synths Website](https://www.ericasynths.lv/shop/diy-kits-1/edu-diy-vcf/)

## Envelope Generator (EG)

[Moritz Klein's DIY Envelope Series](https://www.youtube-nocookie.com/embed/videoseries?list=PLHeL0JWdJLvQBSilvxA9n9hPrUuPoCan1)

> Videos © 2021 [Moritz Klein](https://www.youtube.com/@MoritzKlein0)

### Parts

`Quantity` is for 1 unit, kit contains enough parts for 2 units and `Received` is extra quantities I have purchased to build additional units.

#### PCB

| Item                       | Quantity | Received | Notes                                                                                                      |
| -------------------------- | -------- | -------- | ---------------------------------------------------------------------------------------------------------- |
| EDU DIY EG PCB             | 1        |          |                                                                                                            |
| EDU DIY EG Front Panel     | 1        |          |                                                                                                            |
| 6HP Eurorack Prototype Kit |          | 5        | Available on [N8Synth](https://www.n8synth.co.uk/shop/eurorack-prototype-kits/6hp-eurorack-prototype-kit/) |

#### Capacitors

| Item                          | Quantity | Received | Notes |
| ----------------------------- | -------- | -------- | ----- |
| Electrolytic Capacitor (47uF) | 2        | 10       |       |
| Film Capacitor (1uF)          | 2        | 10       |       |
| Ceramic Capacitor (100NF)     | 8        | 100      |       |

#### Diodes

| Item                   | Quantity | Received | Notes                                                                                                          |
| ---------------------- | -------- | -------- | -------------------------------------------------------------------------------------------------------------- |
| Schottky Diode (SB140) | 2        | 20       | [Ordered suggested alternative SR140](https://uk.farnell.com/multicomp/sb140/diode-schottky-1a-40v/dp/9381350) |
| Signal Diode (1N4148)  | 6        | 25       |                                                                                                                |

#### Integrated Circuits

| Item                   | Quantity | Received | Notes |
| ---------------------- | -------- | -------- | ----- |
| Transistor NPN (BC548) | 1        | 100      |       |
| Op Amp Dual (TL072)    | 3        | 10       |       |
| 8 Pin DIP Sockets      | 3        | 15       |       |

#### Potentiometers

| Item                                | Quantity | Received | Notes |
| ----------------------------------- | -------- | -------- | ----- |
| Vertical Trim Potentiometer (A1M)   | 2        | 4        |       |
| Vertical Trim Potentiometer (A100K) | 1        | 2        |       |

#### Resistors

| Item                       | Quantity | Received | Notes |
| -------------------------- | -------- | -------- | ----- |
| Metal Film resistor (100K) | 10       | 100      |       |
| Metal Film resistor (47K)  | 1        | 100      |       |
| Metal Film resistor (10K)  | 1        | 100      |       |
| Metal Film resistor (1K)   | 2        | 100      |       |
| Metal Film resistor (470R) | 1        | 100      |       |
| Metal Film resistor (100R) | 1        | 100      |       |
| Metal Film resistor (10R)  | 2        | 100      |       |

#### Misc

| Item            | Quantity | Received | Notes |
| --------------- | -------- | -------- | ----- |
| SPDT Switch     | 1        | 1        |       |
| 3mm Red LED     | 1        | 1        |       |
| Mono Audio Jack | 3        | 30       |       |

### :white_check_mark: Assembly

Assembly Instructions are available in the [User Manual](https://www.ericasynths.lv/media/EG_MANUAL_v3.pdf) on the [Erica Synths Website](https://www.ericasynths.lv/shop/diy-kits-1/edu-diy-eg/)

## Voltage Controlled Amplifier (VCA)

[Moritz Klein's DIY VCA Series](https://www.youtube-nocookie.com/embed/videoseries?list=PLHeL0JWdJLvRVZeniuulktYO_OQs0UNkY)

> Videos © 2021 [Moritz Klein](https://www.youtube.com/@MoritzKlein0)

### Parts

Kit contains the `Quantity` needed for building 1 unit, `Received` is extra quantities I have purchased to build additional units.

#### PCB

| Item                       | Quantity | Received | Notes                                                                                                      |
| -------------------------- | -------- | -------- | ---------------------------------------------------------------------------------------------------------- |
| EDU DIY VCA PCB            | 1        |          |                                                                                                            |
| EDU DIY VCA Front Panel    | 1        |          |                                                                                                            |
| 6HP Eurorack Prototype Kit |          | 5        | Available on [N8Synth](https://www.n8synth.co.uk/shop/eurorack-prototype-kits/6hp-eurorack-prototype-kit/) |

#### Capacitors

| Item                          | Quantity | Received | Notes |
| ----------------------------- | -------- | -------- | ----- |
| Electrolytic Capacitor (47uF) | 2        | 10       |       |
| Ceramic Capacitor (100NF)     | 6        | 100      |       |

#### Diodes

| Item                   | Quantity | Received | Notes                                                                                                          |
| ---------------------- | -------- | -------- | -------------------------------------------------------------------------------------------------------------- |
| Schottky Diode (SB140) | 2        | 20       | [Ordered suggested alternative SR140](https://uk.farnell.com/multicomp/sb140/diode-schottky-1a-40v/dp/9381350) |

#### Integrated Circuits

| Item                   | Quantity | Received | Notes |
| ---------------------- | -------- | -------- | ----- |
| Transistor NPN (BC548) | 4        | 100      |       |
| Op Amp Dual (TL072)    | 2        | 10       |       |
| 8 Pin DIP Sockets      | 2        | 15       |       |

#### Potentiometers

| Item                                | Quantity | Received | Notes                                                   |
| ----------------------------------- | -------- | -------- | ------------------------------------------------------- |
| PCB Mount Trim Potentiometer (100K) | 2        | 10       |                                                         |
| Vertical Trim Potentiometer (B100K) | 2        | 20       | Ordered Alpha Potentiometer With Aluminum Knobs instead |

#### Resistors

| Item                       | Quantity | Received | Notes |
| -------------------------- | -------- | -------- | ----- |
| Metal Film resistor (100K) | 12       | 100      |       |
| Metal Film resistor (82K)  | 2        | 100      |       |
| Metal Film resistor (20K)  | 6        | 100      |       |
| Metal Film resistor (10K)  | 6        | 100      |       |
| Metal Film resistor (1K)   | 2        | 100      |       |
| Metal Film resistor (100R) | 4        | 100      |       |
| Metal Film resistor (10R)  | 2        | 100      |       |

#### Misc

| Item            | Quantity | Received | Notes |
| --------------- | -------- | -------- | ----- |
| Mono Audio Jack | 6        | 30       |       |

### :white_check_mark: Assembly

Assembly Instructions are available in the [User Manual](https://www.ericasynths.lv/media/VCA_MANUAL_FINAL.pdf) on the [Erica Synths Website](https://www.ericasynths.lv/shop/diy-kits-1/edu-diy-vca/)

## Mixer

[Moritz Klein's DIY Mixer Series](https://www.youtube-nocookie.com/embed/videoseries?list=PLHeL0JWdJLvQUWK_poeQVAd3mvSTiE0uV)

> Videos © 2022 [Moritz Klein](https://www.youtube.com/@MoritzKlein0)

### Parts

`Quantity` is for 1 unit, kit contains enough parts for 1 unit and [Drums Bundle](#edu-diy-drums-bundle) contans enough for a second. `Received` is extra quantities I have purchased to build additional units.

#### PCB

| Item                       | Quantity | Received | Notes                                                                                                      |
| -------------------------- | -------- | -------- | ---------------------------------------------------------------------------------------------------------- |
| EDU DIY Mixer PCB          | 1        |          |                                                                                                            |
| EDU DIY Mixer Front Panel  | 1        |          |                                                                                                            |
| 6HP Eurorack Prototype Kit |          | 5        | Available on [N8Synth](https://www.n8synth.co.uk/shop/eurorack-prototype-kits/6hp-eurorack-prototype-kit/) |

#### Capacitors

| Item                          | Quantity | Received | Notes |
| ----------------------------- | -------- | -------- | ----- |
| Electrolytic Capacitor (47uF) | 2        | 10       |       |
| Ceramic Capacitor (100NF)     | 6        | 100      |       |

#### Diodes

| Item                   | Quantity | Received | Notes                                                                                                          |
| ---------------------- | -------- | -------- | -------------------------------------------------------------------------------------------------------------- |
| Schottky Diode (SB140) | 2        | 20       | [Ordered suggested alternative SR140](https://uk.farnell.com/multicomp/sb140/diode-schottky-1a-40v/dp/9381350) |
| Signal Diode (1N4148)  | 2        | 25       |                                                                                                                |

#### Integrated Circuits

| Item                | Quantity | Received | Notes |
| ------------------- | -------- | -------- | ----- |
| Op Amp Dual (TL072) | 2        | 10       |       |
| 8 Pin DIP Sockets   | 2        | 15       |       |

#### Potentiometers

| Item                                | Quantity | Received | Notes                                                   |
| ----------------------------------- | -------- | -------- | ------------------------------------------------------- |
| PCB Mount Trim Potentiometer (20K)  | 1        | 10       |                                                         |
| Vertical Trim Potentiometer (B100K) | 3        | 20       | Ordered Alpha Potentiometer With Aluminum Knobs instead |

#### Resistors

| Item                       | Quantity | Received | Notes |
| -------------------------- | -------- | -------- | ----- |
| Metal Film resistor (100K) | 8        | 100      |       |
| Metal Film resistor (27K)  | 1        | 100      |       |
| Metal Film resistor (1K)   | 3        | 100      |       |
| Metal Film resistor (10R)  | 2        | 100      |       |

#### Misc

| Item            | Quantity | Received | Notes |
| --------------- | -------- | -------- | ----- |
| Mono Audio Jack | 6        | 30       |       |

### :wrench: Assembly

Assembly Instructions are available in the [User Manual](https://www.ericasynths.lv/media/MIXER_MANUAL.pdf) on the [Erica Synths Website](https://www.ericasynths.lv/shop/diy-kits-1/edu-diy-mixer/)

## Noise/Sample & Hold (S&H)

### :negative_squared_cross_mark: Assembly

Assembly Instructions are available in the [User Manual](https://www.ericasynths.lv/media/SH_MANUAL_v1.pdf) on the [Erica Synths Website](https://www.ericasynths.lv/shop/diy-kits-1/edu-diy-noisesh/)

## Wavefolder

[Moritz Klein's DIY Wavefolder Series](https://www.youtube-nocookie.com/embed/videoseries?list=PLHeL0JWdJLvREnUuLIMsN1OTiXo5j6B8y)

> Videos © 2022 [Moritz Klein](https://www.youtube.com/@MoritzKlein0)

### :negative_squared_cross_mark: Assembly

Assembly Instructions are available in the [User Manual](https://www.ericasynths.lv/media/WAVEFOLDER_MANUAL.pdf) on the [Erica Synths Website](https://www.ericasynths.lv/shop/diy-kits-1/edu-diy-wavefolder/)

## Output

### :negative_squared_cross_mark: Assembly

Assembly Instructions are available in the [User Manual](https://www.ericasynths.lv/media/DIY_EDU_Output_Manual.pdf) on the [Erica Synths Website](https://www.ericasynths.lv/shop/diy-kits-1/edu-diy-output/)

# EDU DIY Drums Bundle

[Moritz Klein's DIY Drums Series](https://www.youtube-nocookie.com/embed/videoseries?list=PLHeL0JWdJLvQZb-Zapy-OnCdbzCdM2R4-)

> Videos © 2023 [Moritz Klein](https://www.youtube.com/@MoritzKlein0)

## Kick Drum

### :negative_squared_cross_mark: Assembly

Assembly Instructions are available in the [User Manual](https://www.ericasynths.lv/media/KICKDRUM_MANUAL_5wVQsEK.pdf) on the [Erica Synths Website](https://www.ericasynths.lv/shop/diy-kits-1/edu-diy-kick-drum/)

## Snare Drum

### :negative_squared_cross_mark: Assembly

Assembly Instructions are available in the [User Manual](https://www.ericasynths.lv/media/SNARE_MANUAL_Q9zNEN3.pdf) on the [Erica Synths Website](https://www.ericasynths.lv/shop/diy-kits-1/edu-diy-snare-drum/)

## Hi-Hat

### :negative_squared_cross_mark: Assembly

Assembly Instructions are available in the [User Manual](https://www.ericasynths.lv/media/HIHAT_MANUAL_1.pdf) on the [Erica Synths Website](https://www.ericasynths.lv/shop/diy-kits-1/edu-diy-hi-hat/)

## Compressor

[Moritz Klein's DIY Effects Series](https://www.youtube-nocookie.com/embed/videoseries?list=PLHeL0JWdJLvQeWCS5kOJJf2vuoYNQj1Cb)

> Videos © 2023 [Moritz Klein](https://www.youtube.com/@MoritzKlein0)

### :negative_squared_cross_mark: Assembly

Assembly Instructions are available in the [User Manual](https://www.ericasynths.lv/media/COMPRESSOR_MANUAL.pdf) on the [Erica Synths Website](https://www.ericasynths.lv/shop/diy-kits-1/edu-diy-compressor/)
