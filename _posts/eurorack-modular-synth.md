---
title: Eurorack Modular Synth
heading: Building a DIY Eurorack Modular Synth
date: 2023-06-29
lastmod: 2025-09-19T23:33:21.814Z
author: Mike Thomas
description: Building a Eurorack Modular Synthesizer from scratch.
preview: /assets/blog/eurorack-modular-synth/eurorack-hero.jpg
slug: /projects/eurorack-modular-synth
draft: false
tags:
  - Erica Synths
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

I am a fan of [Look Mum No Computer](https://www.youtube.com/@LOOKMUMNOCOMPUTER), in one of his videos he mentions about the website [Music From Outer Space](http://musicfromouterspace.com/index.php?MAINTAB=SYNTHDIY&VPW=1430&VPH=660) and the book `Make: Analog Synthesizers` which has made me follow the deep (and expensive) rabbit hole of Analog Modular Synthesys.

# Controller

![A KeyStep Pro in its original box](/assets/blog/eurorack-modular-synth/keystep-pro.jpg)

I wanted something that I could connect up to a computer via USB to use software synths like [VCVRack](https://vcvrack.com/) or for connecting up to [Garageband](https://www.apple.com/mac/garageband/) and maybe later [Logic Pro](https://www.apple.com/uk/logic-pro/). I also wanted something that is able to control hardware synths with Pitch CV, Velocity CV and Gate control or via MIDI inputs and outputs. The Keystep Pro provides all 3, via USB, MIDI and mono 3.5mm output jacks.

| Item        | Quantity | Received | Notes                                                                                                         |
| ----------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------- |
| KeyStep Pro | 1        | 1        | The Special Black Edition I purchased also came with 14 CV/Gate cables for connecting to the eurorack modules |

# Eurorack Case

I plan on 3D Printing a case to house an [Oscilloscope Module](#oscilloscope) and any extra modules I make using from PCBs or [Prototype Kits](#prototyping).

## Accessories

### Sourcing Parts

| Item                                       | Quantity | Received | Notes                                                                                                                                                        |
| ------------------------------------------ | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Befaco Bananuts (Black)                    | 25       | 25       | Available from [Befaco](https://www.befaco.org/bananuts)                                                                                                     |
| Befaco Bananuts (Red)                      | 25       | 25       | Available from [Befaco](https://www.befaco.org/bananuts)                                                                                                     |
| Befaco Bananuts Wrench Tool                | 1        | 1        | Available from [Befaco](https://www.befaco.org/bananuts)                                                                                                     |
| Befaco Knurlies                            | 100      | 100      | Available from [Befaco](https://www.befaco.org/knurlies)                                                                                                     |
| Befaco Midi Cable (Type B)                 | 1        | 1        | Available from [Befaco](https://www.befaco.org/midi-cables)                                                                                                  |
| Befaco Squid Cable                         | 1        | 1        | Available from [Befaco](https://www.befaco.org/squid-cable-mult)                                                                                             |
| Eurorack Blank Panels (Circuit Design)     | Set of 7 | Set of 7 | Available from [Modular Synth Lab](https://modularsynthlab.com/product/eurorack-blind-panels-3u-complete-set-7-sizes-in-one-package-black-20hp-panel-gratis) |
| Eurorack Blank Panels (Erica Synths Blank) | 2 x 8HP  | 2 x 8HP  | Aluminium                                                                                                                                                    |
| Eurorack Blank Panels (MH Eurorack Logo)   | 3 x 4HP  | 3 x 4HP  | PCB, Came free with [MH Eurorack Kits](#mh-eurorack)                                                                                                         |
| Eurorack Blank Panels (Thonk Logo)         | 2 x 2HP  | 2 x 2HP  | 1 Aluminium and 1 PCB                                                                                                                                        |

## Power

### Sourcing Parts

| Item                            | Quantity | Received | Notes                                                                                                                                   |
| ------------------------------- | -------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Befaco Passive Bus              | 1        | 1        | Available from [Befaco](https://www.befaco.org/passive-bus)                                                                             |
| Eurorack Flying Bus Board Cable | 1        | 1        | 50cm Available from [Modular Synth Lab](https://modularsynthlab.com/product/eurorack-flying-bus-board-cable-8x-or-10x-16pin-connectors) |
| Mean Well RT65B Power Supply    | 1        | 1        | Available from [Modular Synth Lab](https://modularsynthlab.com/product/eurorack-power-supply-mean-well-rt65b)                           |

## SP1

I have seen a 3D Printed Eurorack case that I would like to make called [The SP1 by Spillerphoto.com on Printables](https://www.printables.com/model/203562)

### Sourcing Parts

| Item                          | Quantity                   | Received | Notes                                                                                                                           |
| ----------------------------- | -------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------- |
| M3 Nylon Screws               | 40                         | 42       | Nylon can prevent [Rack Rash](https://learningmodular.com/glossary/rack-rash)                                                   |
| M3 Threaded Strip Insert 84HP | 4 (6 including dust cover) | 6        | Available from [Modular Synth Lab](https://modularsynthlab.com/product/eurorack-rails-m3-threaded-inserts/?attribute_size=84HP) |

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

# Parts For Testing

## Breadboard

To test eurorack modules, I initally built them up on a breadboard, powered by 2 9V Batteries.
However, I have recently purchased the [Erica Synths EDU DIY Labor Full Kit](#edu-diy-labor) that I will use to power and test the modules going forward.

[Moritz Klein's Breadboard Basics Video](https://www.youtube-nocookie.com/embed/XpMZoR3fgd0?si=k-qhaluHhLYVeLpG)

> Videos © 2021 [Moritz Klein](https://www.youtube.com/@MoritzKlein0)

### Sourcing Parts

| Item                       | Quantity | Received | Notes |
| -------------------------- | -------- | -------- | ----- |
| Battery (9V)               | 2        | 2        |       |
| Battery Connector (9V)     | 2        | 6        |       |
| Breadboard                 | 1        | 1        |       |
| Digital Multimeter         | 1        | 1        |       |
| Solid Core Wire Jumper Kit | 1        | 2        |       |

## Prototyping

### N8Synth

#### PCB

| Item                          | Quantity | Received | Notes                                                                                                                           |
| ----------------------------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------- |
| BreadboardEurorack Breadboard | 5        | 5        | Part of [N8Synth 6HP Eurorack Prototype Kit](https://www.n8synth.co.uk/shop/eurorack-prototype-kits/6hp-eurorack-prototype-kit) |
| 6HP Eurorack Control Deck     | 5        | 5        | Part of [N8Synth 6HP Eurorack Prototype Kit](https://www.n8synth.co.uk/shop/eurorack-prototype-kits/6hp-eurorack-prototype-kit) |
| 6HP Eurorack Panel            | 5        | 5        | Part of [N8Synth 6HP Eurorack Prototype Kit](https://www.n8synth.co.uk/shop/eurorack-prototype-kits/6hp-eurorack-prototype-kit) |

#### Capacitors

| Item                          | Quantity | Received | Notes |
| ----------------------------- | -------- | -------- | ----- |
| Electrolytic Capacitor (47uF) | 10       | 10       |       |

#### Misc

| Item                           | Quantity | Received | Notes                                                                                                                           |
| ------------------------------ | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------- |
| 16 Pin Power Header            | 5        | 5        |                                                                                                                                 |
| 16-16 pin Power Cable          | 5        | 5        | 30cm length                                                                                                                     |
| 3mm LED Panel Mount            | 15       | 15       | Available on [N8Synth](https://www.n8synth.co.uk/shop/synth-diy/leds/3mm-led-panel-mount)                                       |
| 3mm LED (Green)                | 5        | 5        | Available on [N8Synth](https://www.n8synth.co.uk/shop/synth-diy/leds/led-3mm-green)                                             |
| 3mm LED (Red)                  | 5        | 5        | Available on [N8Synth](https://www.n8synth.co.uk/shop/synth-diy/leds/led-3mm-red)                                               |
| 3mm LED (Yellow)               | 5        | 5        | Available on [N8Synth](https://www.n8synth.co.uk/shop/synth-diy/leds/led-3mm-yellow)                                            |
| 5mm LED Panel Mount            | 15       | 15       | Available on [N8Synth](https://www.n8synth.co.uk/shop/synth-diy/leds/5mm-led-panel-mount)                                       |
| 5mm LED (Green)                | 5        | 5        | Available on [N8Synth](https://www.n8synth.co.uk/shop/synth-diy/leds/led-5mm-green)                                             |
| 5mm LED (Red)                  | 5        | 5        | Available on [N8Synth](https://www.n8synth.co.uk/shop/synth-diy/leds/led-5mm-red)                                               |
| 5mm LED (Yellow)               | 5        | 5        | Available on [N8Synth](https://www.n8synth.co.uk/shop/synth-diy/leds/led-5mm-yellow)                                            |
| 40 Pin Right Angle Male Header | 5        | 5        | Part of [N8Synth 6HP Eurorack Prototype Kit](https://www.n8synth.co.uk/shop/eurorack-prototype-kits/6hp-eurorack-prototype-kit) |
| 40 Pin Female Header           | 5        | 5        | Part of [N8Synth 6HP Eurorack Prototype Kit](https://www.n8synth.co.uk/shop/eurorack-prototype-kits/6hp-eurorack-prototype-kit) |

### Siam Modular

#### PCB

| Item                          | Quantity | Received | Notes                                                                                                     |
| ----------------------------- | -------- | -------- | --------------------------------------------------------------------------------------------------------- |
| 14hp Eurorack Prototype board | 3        | 3        | Available on [Siam Modular](https://siammodular.com/products/3x-eurorack-prototyping-board-for-synth-diy) |

#### Capacitors

| Item                          | Quantity | Received | Notes |
| ----------------------------- | -------- | -------- | ----- |
| Electrolytic Capacitor (10uF) | 9        | 9        |       |

#### Misc

| Item                                   | Quantity | Received | Notes       |
| -------------------------------------- | -------- | -------- | ----------- |
| 16 Pin Power Header                    | 3        | 3        |             |
| 16-16 pin Power Cable                  | 3        | 3        | 30cm length |
| DWB1 SPDT ON-ON Mini Toggle Switch     | 1        | 1        |             |
| DWB2 SPDT ON-OFF-ON Mini Toggle Switch | 1        | 1        |             |
| DWB3 DPDT ON-ON Mini Toggle Switch     | 1        | 1        |             |
| DWB4 DPDT ON-OFF-ON Mini Toggle Switch | 1        | 1        |             |

### Extra Parts

Many of the parts sourced are used in the Erica Synths EDU DIY series. `Quantity` is extra quantities I have purchased to attempt to build additional modules.

#### PCB

| Item               | Quantity | Received | Notes |
| ------------------ | -------- | -------- | ----- |
| Datanoise Pico ADK | 1        | 1        |       |

#### Capacitors

| Item                           | Quantity | Received | Notes |
| ------------------------------ | -------- | -------- | ----- |
| Ceramic Capacitor (470nF)      | 100      | 101      |       |
| Ceramic Capacitor (100nF)      | 100      | 115      |       |
| Ceramic Capacitor (10nF)       | 100      | 103      |       |
| Ceramic Capacitor (33pF)       | 100      | 105      |       |
| Electrolytic Capacitor (47uF)  | 5        | 5        |       |
| Electrolytic Capacitor (33uF)  | 5        | 5        |       |
| Electrolytic Capacitor (10uF)  | 5        | 5        |       |
| Electrolytic Capacitor (4.7uF) | 4        | 4        |       |
| Electrolytic Capacitor (1uF)   | 4        | 4        |       |
| Film Capacitor (1uF)           | 10       | 10       |       |
| Film Capacitor (470nF)         | 20       | 20       |       |
| Film Capacitor (100nF)         | 20       | 20       |       |
| Film Capacitor (2.2nF)         | 40       | 40       |       |
| Film Capacitor (1nF)           | 20       | 20       |       |

#### Diodes

| Item                                  | Quantity | Received | Notes                                                                                                          |
| ------------------------------------- | -------- | -------- | -------------------------------------------------------------------------------------------------------------- |
| Fast Recovery Rectifier Diode (FR107) | 10       | 10       |                                                                                                                |
| Fast Recovery Rectifier Diode (FR207) | 10       | 10       |                                                                                                                |
| Rectifier Diode (1N4003)              | 4        | 4        |                                                                                                                |
| Rectifier Diode (1N4004)              | 10       | 10       |                                                                                                                |
| Rectifier Diode (1N4007)              | 25       | 25       |                                                                                                                |
| Rectifier Diode (1N5399)              | 10       | 10       |                                                                                                                |
| Rectifier Diode (1N5408)              | 5        | 5        |                                                                                                                |
| Schottky Diode (1N5819)               | 10       | 10       |                                                                                                                |
| Schottky Diode (1N5822)               | 5        | 5        |                                                                                                                |
| Schottky Diode (BAT85)                | 7        | 7        |                                                                                                                |
| Schottky Diode (SB140)                | 20       | 20       | [Ordered suggested alternative SR140](https://uk.farnell.com/multicomp/sb140/diode-schottky-1a-40v/dp/9381350) |
| Signal Diode (1N4148)                 | 25       | 25       |                                                                                                                |
| Zener Diode (C13PH)                   | 1        | 1        |                                                                                                                |

#### Integrated Circuits

| Item                                   | Quantity | Received | Notes |
| -------------------------------------- | -------- | -------- | ----- |
| 8 Pin DIP Sockets                      | 15       | 15       |       |
| 14 Pin DIP Sockets                     | 10       | 10       |       |
| Op Amp Dual (TL072)                    | 10       | 10       |       |
| Op Amp Quad (TL074)                    | 10       | 10       |       |
| Hex Schmitt-Trigger Inverter (CD40106) | 10       | 10       |       |
| Timer (LM555)                          | 10       | 10       |       |
| Transistor N-CH JFET (J113)            | 10       | 10       |       |
| Transistor NPN (2N2222)                | 20       | 20       |       |
| Transistor NPN (2N3904)                | 20       | 20       |       |
| Transistor NPN (BC337)                 | 20       | 20       |       |
| Transistor NPN (BC548)                 | 100      | 97       |       |
| Transistor NPN (C1815)                 | 20       | 20       |       |
| Transistor NPN (S8050)                 | 20       | 20       |       |
| Transistor PNP (2N2907)                | 20       | 20       |       |
| Transistor PNP (2N3906)                | 20       | 20       |       |
| Transistor PNP (A1015)                 | 20       | 20       |       |
| Transistor PNP (BC327)                 | 20       | 20       |       |
| Transistor PNP (BC558)                 | 100      | 99       |       |
| Transistor PNP (S8550)                 | 20       | 20       |       |

#### Potentiometers

| Item                                  | Quantity | Received | Notes |
| ------------------------------------- | -------- | -------- | ----- |
| Aluminum Knob for Alpha Potentiometer | 17       | 17       |       |
| PCB Mount Trim Potentiometer (100K)   | 10       | 10       |       |
| PCB Mount Trim Potentiometer (50K)    | 10       | 10       |       |
| PCB Mount Trim Potentiometer (20K)    | 10       | 10       |       |
| PCB Mount Trim Potentiometer (1K)     | 10       | 10       |       |
| Vertical Alpha Potentiometer (B100K)  | 20       | 20       |       |
| Vertical Alpha Potentiometer (B250K)  | 5        | 5        |       |
| Vertical Alpha Potentiometer (B1M)    | 2        | 2        |       |
| Vertical Trim Potentiometer (A1M)     | 4        | 4        |       |
| Vertical Trim Potentiometer (A100K)   | 2        | 2        |       |
| Vertical Trim Potentiometer (B100K)   | 8        | 8        |       |

#### Resistors

| Item                       | Quantity | Received | Notes                                 |
| -------------------------- | -------- | -------- | ------------------------------------- |
| Metal Film resistor (1M)   | 100      | 103      |                                       |
| Metal Film resistor (750K) | 100      | 100      |                                       |
| Metal Film resistor (560K) | 100      | 100      |                                       |
| Metal Film resistor (470K) | 100      | 103      |                                       |
| Metal Film resistor (120K) | 100      | 100      |                                       |
| Metal Film resistor (100K) | 100      | 103      |                                       |
| Metal Film resistor (82K)  | 100      | 104      |                                       |
| Metal Film resistor (68K)  | 100      | 102      |                                       |
| Metal Film resistor (51K)  | 100      | 105      |                                       |
| Metal Film resistor (47K)  | 100      | 103      |                                       |
| Metal Film resistor (33K)  | 100      | 103      |                                       |
| Metal Film resistor (27K)  | 100      | 104      |                                       |
| Metal Film resistor (24K)  | 100      | 99       |                                       |
| Metal Film resistor (22K)  | 100      | 106      |                                       |
| Metal Film resistor (20K)  | 100      | 104      |                                       |
| Metal Film resistor (18K)  | 100      | 103      |                                       |
| Metal Film resistor (15K)  | 100      | 102      |                                       |
| Metal Film resistor (14K)  | 100      |          | Can use 47K + 20k in parallel instead |
| Metal Film resistor (10K)  | 100      | 92       |                                       |
| Metal Film resistor (4.7K) | 100      | 105      |                                       |
| Metal Film resistor (2.4K) | 100      | 100      |                                       |
| Metal Film resistor (2K)   | 100      | 105      |                                       |
| Metal Film resistor (1.5K) | 100      | 105      |                                       |
| Metal Film resistor (1K)   | 100      | 95       |                                       |
| Metal Film resistor (680R) | 100      | 102      |                                       |
| Metal Film resistor (470R) | 100      | 104      |                                       |
| Metal Film resistor (220R) | 100      | 87       |                                       |
| Metal Film resistor (100R) | 100      | 102      |                                       |
| Metal Film resistor (10R)  | 100      | 105      |                                       |

#### Misc

| Item                                      | Quantity | Received | Notes                                                  |
| ----------------------------------------- | -------- | -------- | ------------------------------------------------------ |
| 5mm Red Square LED                        | 1        | 1        |                                                        |
| 10 Pin Power Header                       | 6        | 6        |                                                        |
| 16 Pin Power Header                       | 2        | 2        |                                                        |
| 10-16 pin Power Cable                     | 10       | 10       | 25cm length                                            |
| 16-16 pin Power Cable                     | 2        | 2        | 30cm length                                            |
| 10K thermistor                            | 20       | 20       |                                                        |
| DW3 DPDT ON-ON Sub-mini Toggle Switch     | 1        | 1        | For use with [Labor Modular Interface](#edu-diy-labor) |
| DW4 DPDT ON-OFF-ON Sub-mini Toggle Switch | 1        | 1        | For use with [Labor Modular Interface](#edu-diy-labor) |
| Mono Audio Jack                           | 3        | 3        |                                                        |

## Oscilloscope

I also plan on building a cheap DIY Oscilloscope kit into a [3D printed Eurorack Module](https://www.thingiverse.com/thing:3631288). I did not want to spend a lot of money on a decent oscilloscope, I just need one "good enough" to help with visualising waveforms and to get an idea of what output a module is producing.

### Sourcing Parts

| Item                                   | Quantity |
| -------------------------------------- | -------- |
| DIY 2.4" inch LCD Digital Oscilloscope | 1        |
| MT3608 DC-DC Boost Converter           | 1        |

### Printing Parts

| Item                                                       | Quantity | Material                                                            | Time | Size | Weight | Cost | Printed | Notes |
| ---------------------------------------------------------- | -------- | ------------------------------------------------------------------- | ---- | ---- | ------ | ---- | :-----: | ----- |
| [Bracket](https://www.thingiverse.com/thing:3631288/files) | 2        | [PolyLite PLA Pro (Black)](printer-filament#polylite-pla-pro-black) |      |      |        |      |   :x:   |       |
| [Switch](https://www.thingiverse.com/thing:3631288/files)  | 3        | [PolyLite PLA Pro (Black)](printer-filament#polylite-pla-pro-black) |      |      |        |      |   :x:   |       |
| [Spacers](https://www.thingiverse.com/thing:3631288/files) | 4        | [PolyLite PLA Pro (Black)](printer-filament#polylite-pla-pro-black) |      |      |        |      |   :x:   |       |
| [Button](https://www.thingiverse.com/thing:3631288/files)  | 4        | [PolyLite PLA Pro (Black)](printer-filament#polylite-pla-pro-black) |      |      |        |      |   :x:   |       |
| [Panel](https://www.thingiverse.com/thing:3631288/files)   | 1        | [PolyLite PLA Pro (Black)](printer-filament#polylite-pla-pro-black) |      |      |        |      |   :x:   |       |

# Erica Synths

![Introducing Sooty and Susie to the Erica Synths mascot "Tuna The Cat"](/assets/blog/eurorack-modular-synth/tuna-socks.jpg)

> Introducing Sooty and Susie to the Erica Synths mascot "Tuna The Cat"

## EDU DIY Labor

[Erica Synths EDU DIY Labor](https://www.youtube-nocookie.com/embed/QyapQpQOwUM)

> Video © 2024 [Moritz Klein](https://www.youtube.com/@MoritzKlein0)

### Basic Kit

Basic Kit contains the `Quantity` needed for building 1 unit.

#### PCB

| Item                                    | Quantity |
| --------------------------------------- | -------- |
| EDULAB Main PCB                         | 1        |
| EDUPRTP Utility Section Panel           | 1        |
| EDUPNLF Expansion Slot Panel            | 1        |
| EDUPNLB Breadboard Panel                | 1        |
| EDUPNLM Modular I/O Panel               | 1        |
| EDUPOT Potentiometer/Socket adapter PCB | 24       |
| EDUSW Switch/Button adapter PCB         | 16       |

#### Connectors

| Item                  | Quantity |
| --------------------- | -------- |
| 16-pin female header  | 8        |
| 4-pin female header   | 36       |
| 8-pin female header   | 3        |
| 40-pin male connector | 4        |
| 830 Point Breadboard  | 1        |

#### Fasteners

| Item                          | Quantity |
| ----------------------------- | -------- |
| 3x11mm Spacer (female/female) | 6        |
| 3x11mm Spacer (female/male)   | 2        |
| 3x23mm Spacer (female/male)   | 2        |
| 3x23mm Spacer (female/female) | 6        |
| M3X6 Phillips Screw (Black)   | 28       |

#### Potentiometers

| Item                                | Quantity |
| ----------------------------------- | -------- |
| Vertical Trim Potentiometer (B1M)   | 2        |
| Vertical Trim Potentiometer (B250K) | 1        |
| Vertical Trim Potentiometer (B100K) | 5        |
| Vertical Trim Potentiometer (B50K)  | 1        |
| Vertical Trim Potentiometer (B10K)  | 2        |
| Vertical Trim Potentiometer (B5K)   | 1        |
| Vertical Trim Potentiometer (B1K)   | 1        |

#### Misc

| Item                                      | Quantity |
| ----------------------------------------- | -------- |
| Mono Audio Jack                           | 5        |
| DW1 SPDT ON-ON Sub-mini Toggle Switch     | 1        |
| DW2 SPDT ON-OFF-ON Sub-mini Toggle Switch | 1        |
| 3mm Red LED                               | 2        |
| Plywood base                              | 1        |
| Breadboarding cable set                   | 1        |
| 12V 1A wall wart                          | 1        |

### Full Kit

Full Kit also contains the `Quantity` of additional parts.

#### Capacitors

| Item                      | Quantity |
| ------------------------- | -------- |
| Ceramic Capacitor (1uF)   | 2        |
| Ceramic Capacitor (470nF) | 1        |
| Ceramic Capacitor (100nF) | 5        |
| Ceramic Capacitor (10nF)  | 2        |
| Ceramic Capacitor (2.2nF) | 2        |
| Ceramic Capacitor (1nF)   | 5        |

#### Diodes

| Item                  | Quantity |
| --------------------- | -------- |
| Signal Diode (1N4148) | 10       |

#### Integrated Circuits

| Item                                   | Quantity |
| -------------------------------------- | -------- |
| Op Amp Dual (TL072)                    | 2        |
| Op Amp Quad (TL074)                    | 2        |
| Hex Schmitt-Trigger Inverter (CD40106) | 2        |
| Decade Counter (CD4017)                | 2        |
| Shift Register Dual (4015)             | 2        |
| Transistor NPN (BC548)                 | 10       |
| Transistor PNP (BC558)                 | 10       |

#### Resistors

| Item                       | Quantity |
| -------------------------- | -------- |
| Metal Film resistor (1M)   | 5        |
| Metal Film resistor (470K) | 2        |
| Metal Film resistor (100K) | 10       |
| Metal Film resistor (82K)  | 2        |
| Metal Film resistor (68K)  | 5        |
| Metal Film resistor (47K)  | 5        |
| Metal Film resistor (33K)  | 5        |
| Metal Film resistor (27K)  | 2        |
| Metal Film resistor (22K)  | 5        |
| Metal Film resistor (14K)  | 2        |
| Metal Film resistor (10K)  | 10       |
| Metal Film resistor (4.7K) | 2        |
| Metal Film resistor (2K)   | 5        |
| Metal Film resistor (1K)   | 10       |

#### Misc

| Item        | Quantity |
| ----------- | -------- |
| 3mm Red LED | 5        |

### :negative_squared_cross_mark: Assembly

Assembly Instructions are available in the [User Manual](https://www.ericasynths.lv/media/LABOR_MANUAL.pdf) on the [Erica Synths Website](https://www.ericasynths.lv/shop/diy-kits-1/edu-diy-labor)

### Labor PSU Connector

#### PCB

| Item             | Quantity |
| ---------------- | -------- |
| EDUPDB2 Main PCB | 1        |

#### Connectors

| Item              | Quantity |
| ----------------- | -------- |
| 2x8 Pin Sockets   | 3        |
| 8-pin male header | 2        |

### Labor Scope

[Erica Synths EDU DIY Labor Scope](https://www.youtube.com/embed/8YweHBtXg0k)

> Video © 2025 [Moritz Klein](https://www.youtube.com/@MoritzKlein0)

#### PCB

| Item             | Quantity |
| ---------------- | -------- |
| EDUSCP2 Main PCB | 1        |

#### Connectors

| Item                | Quantity |
| ------------------- | -------- |
| 4-pin female header | 1        |
| 8-pin male header   | 2        |

### :negative_squared_cross_mark: Assembly

Assembly Instructions are available in the [User Manual](https://www.ericasynths.lv/media/LaborScope_manual_26_03.pdf) on the [Erica Synths Website](https://www.ericasynths.lv/shop/diy-kits-1/edu-diy-labor-scope)

## mki x es.EDU System

I have purchased 2 of these kits. 1 to build as is and one to hold [Effects](edu-diy-effects) and [Drums](edu-diy-drums) modules.

### DIY Eurorack Case

![Fully Assembled DIY Eurorack Case](/assets/blog/eurorack-modular-synth/diy-eurorack-case.jpg)

The case is designed specifically to accommodate the DIY modules from the kit, therefore it does not have threaded screw bar mounts to accomodate any eurorack module and only has screw holes in [Horizontal Pitch](https://learningmodular.com/glossary/hp/) for modules in a specific order.

The order of the modules are as follows:

- 10 HP [Sequencer](#sequencer)
- 10 HP [Voltage Controlled Oscillator (VCO)](#voltage-controlled-oscillator-vco)
- 4 HP [Wavefolder](#wavefolder)
- 10 HP [Noise/Sample & Hold (S&H)](#noisesample--hold-sh)
- 8 HP [Mixer](#mixer)
- 10 HP [Voltage Controlled Filter (VCF)](#voltage-controlled-filter-vcf)
- 8 HP [Envelope Generator (EG)](#envelope-generator-eg)
- 8 HP [Voltage Controlled Amplifier (VCA)](#voltage-controlled-amplifier-vca)
- 8 HP [Envelope Generator (EG)](#envelope-generator-eg)
- 8 HP [Output Mixer](#output-mixer)

![Modular Grid EDU DIY System](https://cdn.modulargrid.net/img/racks/modulargrid_2941317.jpg)

Kit contains the `Quantity` needed for building 1 unit, except the parts for the [optional +5V Power Supply](#optional-5v-power-supply). I have purchased 2 kits.

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

Assembly Instructions are available in the [User Manual](https://www.ericasynths.lv/media/instrukcija_2.pdf) on the [Erica Synths Website](https://www.ericasynths.lv/shop/diy-kits-1/mki-x-esedu-diy-1x84hp-case)

![Fully Assembled Power Supply PCB](/assets/blog/eurorack-modular-synth/mornsun-power-supply.jpg)

### Sequencer

The sequencer steps through a different number of voltages, selectable by a potentiometer for each step. You also have the ability to switch each step on or off via it's `Gate` toggle switch and to change the tempo via the `Rate` selector.

![Sequencer Installed in the Case](/assets/blog/eurorack-modular-synth/sequencer-installed.jpg)

Kit contains the `Quantity` needed for building 1 unit. I have purchased 2 units.

#### PCB

| Item                | Quantity |
| ------------------- | -------- |
| EDUSEQ4 PCB         | 1        |
| EDUSEQ4 Front Panel | 1        |

#### Capacitors

| Item                          | Quantity |
| ----------------------------- | -------- |
| Electrolytic Capacitor (47uF) | 2        |
| Film Capacitor (1uF)          | 1        |
| Ceramic Capacitor (100nF)     | 5        |
| Ceramic Capacitor (1nF)       | 1        |

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

| Item                                      | Quantity |
| ----------------------------------------- | -------- |
| DW1 SPDT ON-ON Sub-mini Toggle Switch     | 6        |
| DW4 DPDT ON-OFF-ON Sub-mini Toggle Switch | 1        |
| 3mm Red LED                               | 5        |
| Mono Audio Jack                           | 5        |
| 10 Pin Power Header                       | 1        |
| 10-16 pin Power Cable                     | 1        |

### How It Works

[Moritz Klein's DIY Sequencer Series](https://www.youtube-nocookie.com/embed/videoseries?list=PLHeL0JWdJLvTHwcS4WTlPvKXeUkZC5TpG)

> Videos © 2022 [Moritz Klein](https://www.youtube.com/@MoritzKlein0)

### :white_check_mark: Assembly

Assembly Instructions are available in the [User Manual](https://www.ericasynths.lv/media/SEQ_MANUAL_v3.pdf) on the [Erica Synths Website](https://www.ericasynths.lv/shop/diy-kits-1/edu-diy-sequencer)

![Components soldered to the Sequencer PCB](/assets/blog/eurorack-modular-synth/sequencer-assembled.jpg)

### Voltage Controlled Oscillator (VCO)

To make music you need something to make noise, noise is created via an oscillation at different frequencies controlled by the `Coarse` and `Fine` potentiometers.

![VCO Installed in the Case](/assets/blog/eurorack-modular-synth/vco-installed.jpg)

Kit contains the `Quantity` needed for building 1 unit. I have purchased 2 units.

#### PCB

| Item                | Quantity |
| ------------------- | -------- |
| EDUVCO3 PCB         | 1        |
| EDUVCO3 Front Panel | 1        |

#### Capacitors

| Item                          | Quantity |
| ----------------------------- | -------- |
| Electrolytic Capacitor (47uF) | 2        |
| Film Capacitor (1uF)          | 1        |
| Ceramic Capacitor (100nF)     | 5        |
| Film Capacitor (2.2nF)        | 1        |

#### Diodes

| Item                   | Quantity |
| ---------------------- | -------- |
| Signal Diode (1N4148)  | 1        |
| Schottky Diode (SB140) | 2        |

#### Integrated Circuits

| Item                                   | Quantity |
| -------------------------------------- | -------- |
| Transistor NPN (BC548)                 | 1        |
| Transistor PNP (BC558)                 | 1        |
| Op Amp Quad (TL074)                    | 1        |
| Hex Schmitt-Trigger Inverter (CD40106) | 1        |
| 14 Pin DIP Sockets                     | 2        |

#### Potentiometers

| Item                                 | Quantity |
| ------------------------------------ | -------- |
| PCB Mount Trim Potentiometer (1K)    | 1        |
| Vertical Alpha Potentiometer (B100K) | 1        |
| Vertical Trim Potentiometer (B100K)  | 2        |
| Vertical Trim Potentiometer (B250K)  | 1        |
| Vertical Trim Potentiometer (B1M)    | 1        |

#### Resistors

| Item                       | Quantity |
| -------------------------- | -------- |
| Metal Film resistor (1M)   | 2        |
| Metal Film resistor (100K) | 9        |
| Metal Film resistor (68K)  | 2        |
| Metal Film resistor (47K)  | 1        |
| Metal Film resistor (33K)  | 1        |
| Metal Film resistor (14K)  | 1        |
| Metal Film resistor (1.5K) | 1        |
| Metal Film resistor (1K)   | 2        |
| Metal Film resistor (10R)  | 2        |

#### Misc

| Item                  | Quantity |
| --------------------- | -------- |
| 10K thermistor        | 4        |
| Mono Audio Jack       | 5        |
| 10 Pin Power Header   | 1        |
| 10-16 pin Power Cable | 1        |

### How It Works

[Moritz Klein's DIY VCO Series](https://www.youtube-nocookie.com/embed/videoseries?list=PLHeL0JWdJLvTuGCyC3qvx0RM39YvopVQN)

> Videos © 2020 [Moritz Klein](https://www.youtube.com/@MoritzKlein0)

### :white_check_mark: Assembly

Assembly Instructions are available in the [User Manual](https://www.ericasynths.lv/media/VCO_MANUAL_v2.pdf) on the [Erica Synths Website](https://www.ericasynths.lv/shop/diy-kits-1/edu-diy-vco)

![Components soldered to the VCO PCB](/assets/blog/eurorack-modular-synth/vco-assembled.jpg)

### Voltage Controlled Filter (VCF)

To change the way the noise sounds you can modify it using a filter. This filter is a low pass filter known as a `diode ladder VCF`.

![VCF Installed in the Case](/assets/blog/eurorack-modular-synth/vcf-installed.jpg)

Kit contains the `Quantity` needed for building 1 unit. I have purchased 2 units.

#### PCB

| Item                | Quantity |
| ------------------- | -------- |
| EDUVCF1 PCB         | 1        |
| EDUVCF1 Front Panel | 1        |

#### Capacitors

| Item                          | Quantity |
| ----------------------------- | -------- |
| Electrolytic Capacitor (47uF) | 2        |
| Film Capacitor (1uF)          | 2        |
| Ceramic Capacitor (100nF)     | 6        |
| Film Capacitor (1nF)          | 5        |

#### Diodes

| Item                   | Quantity |
| ---------------------- | -------- |
| Schottky Diode (SB140) | 2        |
| Signal Diode (1N4148)  | 9        |

#### Integrated Circuits

| Item                | Quantity |
| ------------------- | -------- |
| Op Amp Quad (TL074) | 2        |
| 14 Pin DIP Sockets  | 2        |

#### Potentiometers

| Item                                 | Quantity |
| ------------------------------------ | -------- |
| PCB Mount Trim Potentiometer (50K)   | 1        |
| Vertical Trim Potentiometer (B100K)  | 4        |
| Vertical Alpha Potentiometer (B100K) | 1        |

#### Resistors

| Item                       | Quantity |
| -------------------------- | -------- |
| Metal Film resistor (100K) | 5        |
| Metal Film resistor (68K)  | 2        |
| Metal Film resistor (33K)  | 8        |
| Metal Film resistor (27K)  | 2        |
| Metal Film resistor (14K)  | 1        |
| Metal Film resistor (2K)   | 2        |
| Metal Film resistor (1K)   | 3        |
| Metal Film resistor (10R)  | 2        |

#### Misc

| Item                  | Quantity |
| --------------------- | -------- |
| Mono Audio Jack       | 4        |
| 10 Pin Power Header   | 1        |
| 10-16 pin Power Cable | 1        |

### How It Works

[Moritz Klein's DIY VCF Series](https://www.youtube-nocookie.com/embed/videoseries?list=PLHeL0JWdJLvT1PAqW4TtvxtRoXyk741WM)

> Videos © 2020 [Moritz Klein](https://www.youtube.com/@MoritzKlein0)

### :white_check_mark: Assembly

Assembly Instructions are available in the [User Manual](https://www.ericasynths.lv/media/VCF_MANUAL_v2.pdf) on the [Erica Synths Website](https://www.ericasynths.lv/shop/diy-kits-1/edu-diy-vcf)

![Components soldered to the VCF PCB](/assets/blog/eurorack-modular-synth/vcf-assembled.jpg)

### Envelope Generator (EG)

The Envelope generator shapes the amplitude of a sound over time the one in this kit is known as an `ADSR envelope generator`. ADSR stands for `Attack`, `Decay`, `Sustain`, `Release`. Attack is how fast the sound ramps up, Decay is how fast the sound ramps down, Sustain is how long the sound lasts for and Release is how fast the sound stops.

![Envelope Installed in the Case](/assets/blog/eurorack-modular-synth/envelope-installed.jpg)

`Quantity` is for 1 unit, each kit contains enough parts for 2 units, therefore I have 4.

#### PCB

| Item                | Quantity |
| ------------------- | -------- |
| EDUENV1 PCB         | 1        |
| EDUENV1 Front Panel | 1        |

#### Capacitors

| Item                          | Quantity |
| ----------------------------- | -------- |
| Electrolytic Capacitor (47uF) | 2        |
| Film Capacitor (1uF)          | 2        |
| Ceramic Capacitor (100nF)     | 8        |

#### Diodes

| Item                   | Quantity |
| ---------------------- | -------- |
| Schottky Diode (SB140) | 2        |
| Signal Diode (1N4148)  | 6        |

#### Integrated Circuits

| Item                   | Quantity |
| ---------------------- | -------- |
| Transistor NPN (BC548) | 1        |
| Op Amp Dual (TL072)    | 3        |
| 8 Pin DIP Sockets      | 3        |

#### Potentiometers

| Item                                | Quantity |
| ----------------------------------- | -------- |
| Vertical Trim Potentiometer (A1M)   | 2        |
| Vertical Trim Potentiometer (A100K) | 1        |

#### Resistors

| Item                       | Quantity |
| -------------------------- | -------- |
| Metal Film resistor (100K) | 10       |
| Metal Film resistor (47K)  | 1        |
| Metal Film resistor (10K)  | 1        |
| Metal Film resistor (1K)   | 2        |
| Metal Film resistor (470R) | 1        |
| Metal Film resistor (100R) | 1        |
| Metal Film resistor (10R)  | 2        |

#### Misc

| Item                                  | Quantity |
| ------------------------------------- | -------- |
| DW1 SPDT ON-ON Sub-mini Toggle Switch | 1        |
| 3mm Red LED                           | 1        |
| Mono Audio Jack                       | 3        |
| 10 Pin Power Header                   | 1        |
| 10-16 pin Power Cable                 | 1        |

### How It Works

[Moritz Klein's DIY Envelope Series](https://www.youtube-nocookie.com/embed/videoseries?list=PLHeL0JWdJLvQBSilvxA9n9hPrUuPoCan1)

> Videos © 2021 [Moritz Klein](https://www.youtube.com/@MoritzKlein0)

### :white_check_mark: Assembly

Assembly Instructions are available in the [User Manual](https://www.ericasynths.lv/media/EG_MANUAL_v3.pdf) on the [Erica Synths Website](https://www.ericasynths.lv/shop/diy-kits-1/edu-diy-eg)

![Components soldered to the Envelope PCB](/assets/blog/eurorack-modular-synth/envelope-assembled.jpg)

### Voltage Controlled Amplifier (VCA)

A Voltage Controlled Amplifier allows you to control the `Gain` of an input via a control voltage. It can have a few uses such as shaping the output of an envelope generator or muting a step of a sequence using the `Gate` of the sequencer.

![VCA Installed in the Case](/assets/blog/eurorack-modular-synth/vca-installed.jpg)

Kit contains the `Quantity` needed for building 1 unit, and I have purchased 3 as "you can never have too many VCAs".

#### PCB

| Item                | Quantity |
| ------------------- | -------- |
| EDUVCA2 PCB         | 1        |
| EDUVCA2 Front Panel | 1        |

#### Capacitors

| Item                          | Quantity |
| ----------------------------- | -------- |
| Electrolytic Capacitor (47uF) | 2        |
| Ceramic Capacitor (100nF)     | 6        |

#### Diodes

| Item                   | Quantity |
| ---------------------- | -------- |
| Schottky Diode (SB140) | 2        |

#### Integrated Circuits

| Item                   | Quantity |
| ---------------------- | -------- |
| Transistor NPN (BC548) | 4        |
| Op Amp Dual (TL072)    | 2        |
| 8 Pin DIP Sockets      | 2        |

#### Potentiometers

| Item                                | Quantity |
| ----------------------------------- | -------- |
| PCB Mount Trim Potentiometer (100K) | 2        |
| Vertical Trim Potentiometer (B100K) | 2        |

#### Resistors

| Item                       | Quantity |
| -------------------------- | -------- |
| Metal Film resistor (100K) | 12       |
| Metal Film resistor (82K)  | 2        |
| Metal Film resistor (20K)  | 6        |
| Metal Film resistor (10K)  | 6        |
| Metal Film resistor (1K)   | 2        |
| Metal Film resistor (100R) | 4        |
| Metal Film resistor (10R)  | 2        |

#### Misc

| Item                  | Quantity |
| --------------------- | -------- |
| Mono Audio Jack       | 6        |
| 10 Pin Power Header   | 1        |
| 10-16 pin Power Cable | 1        |

### How It Works

[Moritz Klein's DIY VCA Series](https://www.youtube-nocookie.com/embed/videoseries?list=PLHeL0JWdJLvRVZeniuulktYO_OQs0UNkY)

> Videos © 2021 [Moritz Klein](https://www.youtube.com/@MoritzKlein0)

### :white_check_mark: Assembly

Assembly Instructions are available in the [User Manual](https://www.ericasynths.lv/media/VCA_MANUAL_FINAL.pdf) on the [Erica Synths Website](https://www.ericasynths.lv/shop/diy-kits-1/edu-diy-vca)

![Components soldered to the VCA PCB](/assets/blog/eurorack-modular-synth/vca-assembled.jpg)

### Output Mixer

![Output Mixer Installed in the Case](/assets/blog/eurorack-modular-synth/output-mixer-installed.jpg)

Kit contains the `Quantity` needed for building 1 unit. I have purchased 2 units.

#### PCB

| Item                | Quantity |
| ------------------- | -------- |
| EDUOUT1 PCB         | 1        |
| EDUOUT1 Front Panel | 1        |

#### Capacitors

| Item                          | Quantity |
| ----------------------------- | -------- |
| Electrolytic Capacitor (47uF) | 2        |
| Film Capacitor (1uF)          | 2        |
| Ceramic Capacitor (100nF)     | 6        |
| Ceramic Capacitor (22pF)      | 2        |

#### Diodes

| Item                   | Quantity |
| ---------------------- | -------- |
| Schottky Diode (SB140) | 2        |
| Signal Diode (1N4148)  | 12       |

#### Integrated Circuits

| Item                   | Quantity |
| ---------------------- | -------- |
| Transistor NPN (BD139) | 2        |
| Transistor PNP (BD140) | 2        |
| Op Amp Dual (TL072)    | 2        |
| 8 Pin DIP Sockets      | 2        |

#### Potentiometers

| Item                                | Quantity |
| ----------------------------------- | -------- |
| Vertical Trim Potentiometer (B10K)  | 2        |
| Vertical Trim Potentiometer (B100K) | 2        |

#### Resistors

| Item                       | Quantity |
| -------------------------- | -------- |
| Metal Film resistor (200K) | 2        |
| Metal Film resistor (100K) | 6        |
| Metal Film resistor (30K)  | 2        |
| Metal Film resistor (10K)  | 4        |
| Metal Film resistor (3.6K) | 4        |
| Metal Film resistor (1K)   | 6        |
| Metal Film resistor (470R) | 2        |
| Metal Film resistor (47R)  | 2        |
| Metal Film resistor (10R)  | 2        |
| Metal Film resistor (2R)   | 4        |

#### Misc

| Item                  | Quantity |
| --------------------- | -------- |
| Mono Audio Jack       | 2        |
| Stereo Audio Jack     | 2        |
| 10 Pin Power Header   | 1        |
| 10-16 pin Power Cable | 1        |

### :white_check_mark: Assembly

Assembly Instructions are available in the [User Manual](https://www.ericasynths.lv/media/DIY_EDU_Output_Manual.pdf) on the [Erica Synths Website](https://www.ericasynths.lv/shop/diy-kits-1/edu-diy-output)

![Components soldered to the Output Mixer PCB](/assets/blog/eurorack-modular-synth/output-mixer-assembled.jpg)

### Wavefolder

Kit contains the `Quantity` needed for building 1 unit. I have purchased 2 units.

#### PCB

| Item                 | Quantity |
| -------------------- | -------- |
| EDUWAVE1 PCB         | 1        |
| EDUWAVE1 Front Panel | 1        |

#### Capacitors

| Item                          | Quantity |
| ----------------------------- | -------- |
| Electrolytic Capacitor (47uF) | 2        |
| Film Capacitor (1uF)          | 1        |
| Ceramic Capacitor (100nF)     | 4        |
| Film Capacitor (2.2nF)        | 2        |

#### Diodes

| Item                   | Quantity |
| ---------------------- | -------- |
| Schottky Diode (SB140) | 2        |

#### Integrated Circuits

| Item                   | Quantity |
| ---------------------- | -------- |
| Transistor NPN (BC548) | 4        |
| Transistor PNP (BC558) | 2        |
| Op Amp Quad (TL074)    | 1        |
| 14 Pin DIP Sockets     | 1        |

#### Potentiometers

| Item                               | Quantity |
| ---------------------------------- | -------- |
| PCB Mount Trim Potentiometer (10K) | 1        |
| Vertical Trim Potentiometer (B10K) | 1        |

#### Resistors

| Item                       | Quantity |
| -------------------------- | -------- |
| Metal Film resistor (220K) | 1        |
| Metal Film resistor (100K) | 3        |
| Metal Film resistor (51K)  | 1        |
| Metal Film resistor (22K)  | 1        |
| Metal Film resistor (20K)  | 4        |
| Metal Film resistor (10K)  | 4        |
| Metal Film resistor (1K)   | 5        |
| Metal Film resistor (10R)  | 2        |

#### Misc

| Item                  | Quantity |
| --------------------- | -------- |
| Mono Audio Jack       | 3        |
| 10 Pin Power Header   | 1        |
| 10-16 pin Power Cable | 1        |

### How It Works

[Moritz Klein's DIY Wavefolder Series](https://www.youtube-nocookie.com/embed/videoseries?list=PLHeL0JWdJLvREnUuLIMsN1OTiXo5j6B8y)

> Videos © 2022 [Moritz Klein](https://www.youtube.com/@MoritzKlein0)

### :wrench: Assembly

Assembly Instructions are available in the [User Manual](https://www.ericasynths.lv/media/WAVEFOLDER_MANUAL.pdf) on the [Erica Synths Website](https://www.ericasynths.lv/shop/diy-kits-1/edu-diy-wavefolder)

### Noise/Sample & Hold (S&H)

Kit contains the `Quantity` needed for building 1 unit. I have purchased 2 units.

#### PCB

| Item               | Quantity |
| ------------------ | -------- |
| EDUSH2 PCB         | 1        |
| EDUSH2 Front Panel | 1        |

#### Capacitors

| Item                          | Quantity |
| ----------------------------- | -------- |
| Electrolytic Capacitor (47uF) | 3        |
| Film Capacitor (1uF)          | 2        |
| Film Capacitor (470nF)        | 1        |
| Ceramic Capacitor (100nF)     | 8        |
| Film Capacitor (100nF)        | 1        |
| Film Capacitor (5.6nF)        | 2        |
| Film Capacitor (2.2nF)        | 2        |
| Ceramic Capacitor (1nF)       | 1        |
| Film Capacitor (680pF)        | 2        |

#### Diodes

| Item                   | Quantity |
| ---------------------- | -------- |
| Schottky Diode (SB140) | 2        |
| Signal Diode (1N4148)  | 2        |

#### Integrated Circuits

| Item                    | Quantity |
| ----------------------- | -------- |
| Transistor NPN (2N3904) | 1        |
| Transistor NPN (BC548)  | 1        |
| Transistor JFET (J113)  | 1        |
| Op Amp Dual (TL072)     | 1        |
| Op Amp Quad (TL074)     | 2        |
| 8 Pin DIP Sockets       | 1        |
| 14 Pin DIP Sockets      | 2        |

#### Potentiometers

| Item                                 | Quantity |
| ------------------------------------ | -------- |
| Vertical Alpha Potentiometer (B250K) | 1        |
| Vertical Trim Potentiometer (B100K)  | 2        |

#### Resistors

| Item                       | Quantity |
| -------------------------- | -------- |
| Metal Film resistor (1M)   | 2        |
| Metal Film resistor (470K) | 2        |
| Metal Film resistor (100K) | 12       |
| Metal Film resistor (51K)  | 1        |
| Metal Film resistor (47K)  | 1        |
| Metal Film resistor (33K)  | 2        |
| Metal Film resistor (22K)  | 1        |
| Metal Film resistor (20K)  | 1        |
| Metal Film resistor (10K)  | 1        |
| Metal Film resistor (4.7K) | 2        |
| Metal Film resistor (2K)   | 1        |
| Metal Film resistor (1K)   | 6        |
| Metal Film resistor (680R) | 1        |
| Metal Film resistor (10R)  | 2        |

#### Misc

| Item                  | Quantity |
| --------------------- | -------- |
| 3mm Red LED           | 1        |
| Mono Audio Jack       | 8        |
| 10 Pin Power Header   | 1        |
| 10-16 pin Power Cable | 1        |

### :negative_squared_cross_mark: Assembly

Assembly Instructions are available in the [User Manual](https://www.ericasynths.lv/media/SH_MANUAL_v1.pdf) on the [Erica Synths Website](https://www.ericasynths.lv/shop/diy-kits-1/edu-diy-noisesh)

### Mixer

`Quantity` is for 1 unit, the two kits I purchased contain enough parts for 2 units and [Drums Bundle](https://www.thonk.co.uk/shop/mki-erica-edu-drums/) contans enough for a third.

#### PCB

| Item                | Quantity |
| ------------------- | -------- |
| EDUMIX2 PCB         | 1        |
| EDUMIX2 Front Panel | 1        |

#### Capacitors

| Item                          | Quantity |
| ----------------------------- | -------- |
| Electrolytic Capacitor (47uF) | 2        |
| Ceramic Capacitor (100nF)     | 6        |

#### Diodes

| Item                   | Quantity |
| ---------------------- | -------- |
| Schottky Diode (SB140) | 2        |
| Signal Diode (1N4148)  | 2        |

#### Integrated Circuits

| Item                | Quantity |
| ------------------- | -------- |
| Op Amp Dual (TL072) | 2        |
| 8 Pin DIP Sockets   | 2        |

#### Potentiometers

| Item                                | Quantity |
| ----------------------------------- | -------- |
| PCB Mount Trim Potentiometer (20K)  | 1        |
| Vertical Trim Potentiometer (B100K) | 3        |

#### Resistors

| Item                       | Quantity |
| -------------------------- | -------- |
| Metal Film resistor (100K) | 8        |
| Metal Film resistor (27K)  | 1        |
| Metal Film resistor (1K)   | 3        |
| Metal Film resistor (10R)  | 2        |

#### Misc

| Item                  | Quantity |
| --------------------- | -------- |
| Mono Audio Jack       | 6        |
| 10 Pin Power Header   | 1        |
| 10-16 pin Power Cable | 1        |

### How It Works

[Moritz Klein's DIY Mixer Series](https://www.youtube-nocookie.com/embed/videoseries?list=PLHeL0JWdJLvQUWK_poeQVAd3mvSTiE0uV)

> Videos © 2022 [Moritz Klein](https://www.youtube.com/@MoritzKlein0)

### :negative_squared_cross_mark: Assembly

Assembly Instructions are available in the [User Manual](https://www.ericasynths.lv/media/MIXER_MANUAL.pdf) on the [Erica Synths Website](https://www.ericasynths.lv/shop/diy-kits-1/edu-diy-mixer)

## EDU DIY Drums & Effects

### DIY Eurorack Case

The order of the modules for the second case will be as follows:

- 10 HP [Sequencer](#sequencer)
- 10 HP [Bucket Brigade Delay (BBD)](#bucket-brigade-delay-bbd)
- 4 HP [Boost](#boost)
- 10 HP [Snare Drum](#snare-drum)
- 8 HP [Hi-Hat](#hi-hat)
- 10 HP [Kick Drum](#kick-drum)
- 8 HP [Mixer](#mixer)
- 8 HP [Compressor](#compressor)
- 16 HP [FM Drum](#fm-drum)

![Modular Grid EDU DIY Drums and Effects](https://cdn.modulargrid.net/img/racks/modulargrid_2941319.jpg?1757851255)

### Compressor

Kit contains the `Quantity` needed for building 1 unit.

#### PCB

| Item                 | Quantity |
| -------------------- | -------- |
| EDUCOMP2 PCB         | 1        |
| EDUCOMP2 Front Panel | 1        |

#### Capacitors

| Item                          | Quantity |
| ----------------------------- | -------- |
| Electrolytic Capacitor (47uF) | 2        |
| Film Capacitor (1.5uF)        | 3        |
| Ceramic Capacitor (100nF)     | 8        |
| Ceramic Capacitor (680pF)     | 1        |

#### Diodes

| Item                   | Quantity |
| ---------------------- | -------- |
| Signal Diode (1N4148)  | 13       |
| Schottky Diode (SB140) | 2        |

#### Integrated Circuits

| Item                    | Quantity |
| ----------------------- | -------- |
| Transistor NPN (2N3904) | 5        |
| Op Amp Dual (TL072)     | 2        |
| Op Amp Quad (TL074)     | 1        |
| 8 Pin DIP Sockets       | 2        |
| 14 Pin DIP Sockets      | 1        |

#### Potentiometers

| Item                                | Quantity |
| ----------------------------------- | -------- |
| Vertical Trim Potentiometer (A1M)   | 1        |
| Vertical Trim Potentiometer (A500K) | 1        |
| Vertical Trim Potentiometer (A100K) | 2        |
| Vertical Trim Potentiometer (A20K)  | 1        |
| Vertical Trim Potentiometer (A10K)  | 1        |

#### Resistors

| Item                       | Quantity |
| -------------------------- | -------- |
| Metal Film resistor (470K) | 2        |
| Metal Film resistor (330K) | 1        |
| Metal Film resistor (220K) | 1        |
| Metal Film resistor (120K) | 1        |
| Metal Film resistor (100K) | 11       |
| Metal Film resistor (47K)  | 1        |
| Metal Film resistor (33K)  | 4        |
| Metal Film resistor (20K)  | 1        |
| Metal Film resistor (10K)  | 4        |
| Metal Film resistor (3.3K) | 4        |
| Metal Film resistor (2K)   | 1        |
| Metal Film resistor (470R) | 1        |
| Metal Film resistor (200R) | 1        |
| Metal Film resistor (10R)  | 2        |

#### Misc

| Item                  | Quantity |
| --------------------- | -------- |
| Mono Audio Jack       | 3        |
| 3mm Red LED           | 2        |
| 3mm Green LED         | 3        |
| 10 Pin Power Header   | 1        |
| 10-16 pin Power Cable | 1        |

### How It Works

[Moritz Klein's DIY Effects Series](https://www.youtube-nocookie.com/embed/videoseries?list=PLHeL0JWdJLvQeWCS5kOJJf2vuoYNQj1Cb)

> Videos © 2023 [Moritz Klein](https://www.youtube.com/@MoritzKlein0)

### :negative_squared_cross_mark: Assembly

Assembly Instructions are available in the [User Manual](https://www.ericasynths.lv/media/COMPRESSOR_MANUAL.pdf) on the [Erica Synths Website](https://www.ericasynths.lv/shop/diy-kits-1/edu-diy-compressor)

### Bucket Brigade Delay (BBD)

Kit contains the `Quantity` needed for building 1 unit.

#### PCB

| Item                | Quantity |
| ------------------- | -------- |
| EDUBBD2 PCB         | 1        |
| EDUBBD2 Front Panel | 1        |

#### Capacitors

| Item                           | Quantity |
| ------------------------------ | -------- |
| Electrolytic Capacitor (47uF)  | 2        |
| Electrolytic Capacitor (3.3uF) | 2        |
| Film Capacitor (1uF)           | 2        |
| Film Capacitor (15nF)          | 1        |
| Ceramic Capacitor (100nF)      | 12       |
| Ceramic Capacitor (1nF)        | 1        |
| Ceramic Capacitor (220pF)      | 2        |

#### Diodes

| Item                   | Quantity |
| ---------------------- | -------- |
| Signal Diode (1N4148)  | 5        |
| Schottky Diode (SB140) | 2        |

#### Integrated Circuits

| Item                 | Quantity |
| -------------------- | -------- |
| N-CH JFET (J113)     | 1        |
| 5V Regulator (78L05) | 1        |
| Op Amp Dual (TL072)  | 3        |
| BBF 4096 (V3205SD)   | 1        |
| PLL (CD4046BE)       | 1        |
| 8 Pin DIP Sockets    | 3        |
| 14 Pin DIP Sockets   | 1        |
| 16 Pin DIP Sockets   | 1        |

#### Potentiometers

| Item                                 | Quantity |
| ------------------------------------ | -------- |
| Vertical Alpha Potentiometer (B100K) | 1        |
| Vertical Trim Potentiometer (A100K)  | 1        |
| Vertical Trim Potentiometer (B100K)  | 2        |
| Vertical Trim Potentiometer (B10K)   | 1        |

#### Resistors

| Item                       | Quantity |
| -------------------------- | -------- |
| Metal Film resistor (2.2M) | 1        |
| Metal Film resistor (100K) | 9        |
| Metal Film resistor (82K)  | 1        |
| Metal Film resistor (62K)  | 1        |
| Metal Film resistor (51K)  | 1        |
| Metal Film resistor (47K)  | 1        |
| Metal Film resistor (39K)  | 1        |
| Metal Film resistor (22K)  | 3        |
| Metal Film resistor (10K)  | 2        |
| Metal Film resistor (6.2K) | 1        |
| Metal Film resistor (4.7K) | 1        |
| Metal Film resistor (1K)   | 1        |
| Metal Film resistor (470R) | 2        |
| Metal Film resistor (10R)  | 2        |

#### Misc

| Item                                  | Quantity |
| ------------------------------------- | -------- |
| Mono Audio Jack                       | 5        |
| DW1 SPDT ON-ON Sub-mini Toggle Switch | 1        |
| 10 Pin Power Header                   | 1        |
| 10-16 pin Power Cable                 | 1        |

### How It Works

[Moritz Klein's DIY BBD Video](https://www.youtube-nocookie.com/embed/4LjP5Y1yxXs)

> Video © 2024 [Moritz Klein](https://www.youtube.com/@MoritzKlein0)

### :negative_squared_cross_mark: Assembly

Assembly Instructions are available in the [User Manual](https://www.ericasynths.lv/media/BBD_MANUAL_250228.pdf) on the [Erica Synths Website](https://www.ericasynths.lv/shop/diy-kits-1/edu-diy-bbd)

### Kick Drum

Kit contains the `Quantity` needed for building 1 unit.

#### PCB

| Item                 | Quantity |
| -------------------- | -------- |
| EDUKICK2 PCB         | 1        |
| EDUKICK2 Front Panel | 1        |

#### Capacitors

| Item                          | Quantity |
| ----------------------------- | -------- |
| Electrolytic Capacitor (47uF) | 2        |
| Film Capacitor (220nF)        | 1        |
| Ceramic Capacitor (100nF)     | 6        |
| Film Capacitor (15nF)         | 3        |
| Film Capacitor (10nF)         | 1        |
| Film Capacitor (3.3nF)        | 1        |

#### Diodes

| Item                   | Quantity |
| ---------------------- | -------- |
| Schottky Diode (SB140) | 2        |
| Signal Diode (1N4148)  | 7        |

#### Integrated Circuits

| Item                   | Quantity |
| ---------------------- | -------- |
| Transistor NPN (BC548) | 3        |
| Transistor PNP (BC558) | 2        |
| Op Amp Dual (TL072)    | 2        |
| 8 Pin DIP Sockets      | 2        |

#### Potentiometers

| Item                                | Quantity |
| ----------------------------------- | -------- |
| Vertical Alpha Potentiometer (B1M)  | 1        |
| Vertical Trim Potentiometer (B250K) | 1        |
| Vertical Trim Potentiometer (A100K) | 1        |
| Vertical Trim Potentiometer (B100K) | 2        |
| Vertical Trim Potentiometer (B50K)  | 1        |
| Vertical Trim Potentiometer (B10K)  | 1        |

#### Resistors

| Item                       | Quantity |
| -------------------------- | -------- |
| Metal Film resistor (1M)   | 2        |
| Metal Film resistor (470K) | 1        |
| Metal Film resistor (120K) | 1        |
| Metal Film resistor (100K) | 5        |
| Metal Film resistor (47K)  | 2        |
| Metal Film resistor (39K)  | 1        |
| Metal Film resistor (33K)  | 2        |
| Metal Film resistor (14K)  | 1        |
| Metal Film resistor (10K)  | 2        |
| Metal Film resistor (2K)   | 1        |
| Metal Film resistor (1K)   | 3        |
| Metal Film resistor (10R)  | 2        |

#### Misc

| Item                  | Quantity |
| --------------------- | -------- |
| Mono Audio Jack       | 4        |
| 10 Pin Power Header   | 1        |
| 10-16 pin Power Cable | 1        |

### How It Works

[Moritz Klein's DIY Kick Drum Video](https://www.youtube-nocookie.com/embed/yz37Yz315eU)

> Video © 2023 [Moritz Klein](https://www.youtube.com/@MoritzKlein0)

### :negative_squared_cross_mark: Assembly

Assembly Instructions are available in the [User Manual](https://www.ericasynths.lv/media/KICKDRUM_MANUAL_5wVQsEK.pdf) on the [Erica Synths Website](https://www.ericasynths.lv/shop/diy-kits-1/edu-diy-kick-drum)

### Hi-Hat

Kit contains the `Quantity` needed for building 1 unit.

#### PCB

| Item                 | Quantity |
| -------------------- | -------- |
| EDUHHAT2 PCB         | 1        |
| EDUHHAT2 Front Panel | 1        |

#### Capacitors

| Item                          | Quantity |
| ----------------------------- | -------- |
| Electrolytic Capacitor (47uF) | 2        |
| Film Capacitor (1uF)          | 1        |
| Ceramic Capacitor (470nF)     | 1        |
| Ceramic Capacitor (100nF)     | 13       |
| Ceramic Capacitor (10nF)      | 1        |
| Ceramic Capacitor (2.2nF)     | 1        |
| Ceramic Capacitor (1nF)       | 2        |
| Ceramic Capacitor (330pF)     | 2        |
| Ceramic Capacitor (100pF)     | 1        |

#### Diodes

| Item                   | Quantity |
| ---------------------- | -------- |
| Schottky Diode (SB140) | 2        |
| Signal Diode (1N4148)  | 6        |

#### Integrated Circuits

| Item                                   | Quantity |
| -------------------------------------- | -------- |
| Transistor NPN (BC548)                 | 4        |
| Transistor PNP (BC558)                 | 2        |
| Op Amp Dual (TL072)                    | 3        |
| Hex Schmitt-Trigger Inverter (CD40106) | 1        |
| 8 Pin DIP Sockets                      | 3        |
| 14 Pin DIP Sockets                     | 2        |

#### Potentiometers

| Item                                 | Quantity |
| ------------------------------------ | -------- |
| Vertical Trim Potentiometer (B250K)  | 1        |
| Vertical Alpha Potentiometer (B100K) | 1        |
| Vertical Trim Potentiometer (B10K)   | 2        |

#### Resistors

| Item                       | Quantity |
| -------------------------- | -------- |
| Metal Film resistor (1M)   | 1        |
| Metal Film resistor (820K) | 1        |
| Metal Film resistor (470K) | 1        |
| Metal Film resistor (120K) | 1        |
| Metal Film resistor (100K) | 18       |
| Metal Film resistor (82K)  | 1        |
| Metal Film resistor (68K)  | 1        |
| Metal Film resistor (56K)  | 1        |
| Metal Film resistor (51K)  | 1        |
| Metal Film resistor (47K)  | 3        |
| Metal Film resistor (39K)  | 2        |
| Metal Film resistor (33K)  | 2        |
| Metal Film resistor (22K)  | 1        |
| Metal Film resistor (10K)  | 1        |
| Metal Film resistor (4.7K) | 1        |
| Metal Film resistor (1K)   | 3        |
| Metal Film resistor (680R) | 1        |
| Metal Film resistor (100R) | 1        |
| Metal Film resistor (10R)  | 2        |

#### Misc

| Item                  | Quantity |
| --------------------- | -------- |
| Mono Audio Jack       | 5        |
| 10 Pin Power Header   | 1        |
| 10-16 pin Power Cable | 1        |

### How It Works

[Moritz Klein's DIY Hi-Hat Video](https://www.youtube-nocookie.com/embed/zbBY7JL9nnQ)

> Video © 2023 [Moritz Klein](https://www.youtube.com/@MoritzKlein0)

### :negative_squared_cross_mark: Assembly

Assembly Instructions are available in the [User Manual](https://www.ericasynths.lv/media/HIHAT_MANUAL_1.pdf) on the [Erica Synths Website](https://www.ericasynths.lv/shop/diy-kits-1/edu-diy-hi-hat)

### Snare Drum

Kit contains the `Quantity` needed for building 1 unit.

#### PCB

| Item                 | Quantity |
| -------------------- | -------- |
| EDUSNAR1 PCB         | 1        |
| EDUSNAR1 Front Panel | 1        |

#### Capacitors

| Item                          | Quantity |
| ----------------------------- | -------- |
| Electrolytic Capacitor (47uF) | 2        |
| Film Capacitor (1uF)          | 1        |
| Ceramic Capacitor (470nF)     | 2        |
| Ceramic Capacitor (100nF)     | 8        |
| Film Capacitor (33nF)         | 3        |
| Film Capacitor (10nF)         | 2        |
| Ceramic Capacitor (2.2nF)     | 2        |
| Film Capacitor (1nF)          | 2        |

#### Diodes

| Item                   | Quantity |
| ---------------------- | -------- |
| Schottky Diode (SB140) | 2        |
| Signal Diode (1N4148)  | 6        |

#### Integrated Circuits

| Item                   | Quantity |
| ---------------------- | -------- |
| Transistor NPN (BC548) | 5        |
| Transistor PNP (BC558) | 2        |
| Op Amp Dual (TL072)    | 3        |
| 8 Pin DIP Sockets      | 3        |

#### Potentiometers

| Item                                | Quantity |
| ----------------------------------- | -------- |
| Vertical Trim Potentiometer (B250K) | 1        |
| Vertical Trim Potentiometer (A100K) | 1        |
| Vertical Trim Potentiometer (B100K) | 1        |
| Vertical Trim Potentiometer (B5K)   | 1        |
| Vertical Alpha Potentiometer (B1K)  | 1        |

#### Resistors

| Item                       | Quantity |
| -------------------------- | -------- |
| Metal Film resistor (1M)   | 2        |
| Metal Film resistor (910K) | 1        |
| Metal Film resistor (470K) | 1        |
| Metal Film resistor (120K) | 1        |
| Metal Film resistor (100K) | 7        |
| Metal Film resistor (47K)  | 3        |
| Metal Film resistor (39K)  | 1        |
| Metal Film resistor (33K)  | 2        |
| Metal Film resistor (27K)  | 1        |
| Metal Film resistor (22K)  | 5        |
| Metal Film resistor (10K)  | 2        |
| Metal Film resistor (1K)   | 7        |
| Metal Film resistor (470R) | 1        |
| Metal Film resistor (330R) | 1        |
| Metal Film resistor (10R)  | 2        |

#### Misc

| Item                  | Quantity |
| --------------------- | -------- |
| Mono Audio Jack       | 5        |
| 10 Pin Power Header   | 1        |
| 10-16 pin Power Cable | 1        |

### How It Works

[Moritz Klein's DIY Snare Drum Video](https://www.youtube-nocookie.com/embed/hULEn2_4Unw)

> Video © 2024 [Moritz Klein](https://www.youtube.com/@MoritzKlein0)

### :negative_squared_cross_mark: Assembly

Assembly Instructions are available in the [User Manual](https://www.ericasynths.lv/media/SNARE_MANUAL_Q9zNEN3.pdf) on the [Erica Synths Website](https://www.ericasynths.lv/shop/diy-kits-1/edu-diy-snare-drum)

### FM Drum

Kit contains the `Quantity` needed for building 1 unit.

#### PCB

| Item                | Quantity |
| ------------------- | -------- |
| EDUFMD2 PCB         | 1        |
| EDUFMD2 Front Panel | 1        |

#### Capacitors

| Item                          | Quantity |
| ----------------------------- | -------- |
| Electrolytic Capacitor (47uF) | 2        |
| Film Capacitor (1uF)          | 1        |
| Ceramic Capacitor (470nF)     | 1        |
| Ceramic Capacitor (100nF)     | 4        |
| Film Capacitor (15nF)         | 1        |
| Ceramic Capacitor (10nF)      | 1        |
| Film Capacitor (5.6nF)        | 1        |
| Film Capacitor (2.2nF)        | 1        |
| Film Capacitor (470pF)        | 2        |
| Film Capacitor (330pF)        | 1        |

#### Diodes

| Item                    | Quantity |
| ----------------------- | -------- |
| Schottky Diode (1N5819) | 2        |
| Signal Diode (1N4148)   | 18       |

#### Integrated Circuits

| Item                   | Quantity |
| ---------------------- | -------- |
| Transistor NPN (BC548) | 8        |
| Transistor PNP (BC558) | 5        |
| Op Amp Dual (TL072)    | 1        |
| Op Amp Quad (TL074)    | 1        |
| 8 Pin DIP Sockets      | 1        |
| 14 Pin DIP Sockets     | 1        |

#### Potentiometers

| Item                                 | Quantity |
| ------------------------------------ | -------- |
| PCB Mount Trim Potentiometer (2M)    | 1        |
| Vertical Trim Potentiometer (B1M)    | 1        |
| Vertical Trim Potentiometer (A500K)  | 1        |
| Vertical Trim Potentiometer (B250K)  | 1        |
| Vertical Alpha Potentiometer (A100K) | 2        |
| Vertical Trim Potentiometer (A100K)  | 1        |

#### Resistors

| Item                       | Quantity |
| -------------------------- | -------- |
| Metal Film resistor (1M)   | 4        |
| Metal Film resistor (470K) | 3        |
| Metal Film resistor (330K) | 1        |
| Metal Film resistor (200K) | 1        |
| Metal Film resistor (100K) | 16       |
| Metal Film resistor (68K)  | 1        |
| Metal Film resistor (51K)  | 2        |
| Metal Film resistor (47K)  | 1        |
| Metal Film resistor (39K)  | 2        |
| Metal Film resistor (33K)  | 3        |
| Metal Film resistor (18K)  | 1        |
| Metal Film resistor (10K)  | 7        |
| Metal Film resistor (5.6K) | 1        |
| Metal Film resistor (4.7K) | 1        |
| Metal Film resistor (2K)   | 2        |
| Metal Film resistor (1K)   | 4        |
| Metal Film resistor (470R) | 1        |
| Metal Film resistor (47R)  | 1        |
| Metal Film resistor (10R)  | 2        |

#### Misc

| Item                                  | Quantity |
| ------------------------------------- | -------- |
| Mono Audio Jack                       | 5        |
| DW1 SPDT ON-ON Sub-mini Toggle Switch | 2        |

### How It Works

[Moritz Klein's DIY FM Drum Video](https://www.youtube-nocookie.com/embed/Xbl1xwFR3eg)

> Video © 2025 [Moritz Klein](https://www.youtube.com/@MoritzKlein0)

### :negative_squared_cross_mark: Assembly

Assembly Instructions are available in the [User Manual](https://www.ericasynths.lv/media/FM_DRUM_MANUAL.pdf) on the [Erica Synths Website](https://www.ericasynths.lv/shop/diy-kits-1/edu-diy-fm-drum)

# Bleep Sound

## Basic ADSR

### Parts

#### PCB

| Item             | Quantity | Received | Notes |
| ---------------- | -------- | -------- | ----- |
| ADSR Front Panel | 1        | 1        |       |
| ADSR PCB 1       | 1        | 1        |       |
| ADSR PCB 2       | 1        | 1        |       |

#### Capacitors

| Item                           | Quantity | Received     | Notes |
| ------------------------------ | -------- | ------------ | ----- |
| Ceramic Capacitor (100nF)      | 3        | 100 in stock |       |
| Ceramic Capacitor (10nF)       | 1        | 100 in stock |       |
| Electrolytic Capacitor (10uF)  | 3        | 3            |       |
| Electrolytic Capacitor (4.7uF) | 1        | 1            |       |
| Electrolytic Capacitor (1uF)   | 1        | 1            |       |

#### Diodes

| Item                  | Quantity | Received    | Notes |
| --------------------- | -------- | ----------- | ----- |
| Signal Diode (1N4148) | 5        | 25 in stock |       |

#### Integrated Circuits

| Item                   | Quantity | Received     | Notes                   |
| ---------------------- | -------- | ------------ | ----------------------- |
| 8 Pin DIP Sockets      | 2        | 15 in stock  |                         |
| Op Amp Dual (TL072)    | 1        | 10 in stock  |                         |
| Timer (LM555)          | 1        | 10 in stock  |                         |
| Transistor NPN (BC547) | 4        | 100 in stock | Will replace with BC548 |

#### Potentiometers

| Item                                  | Quantity | Received | Notes |
| ------------------------------------- | -------- | -------- | ----- |
| Aluminum Knob for Alpha Potentiometer | 4        | 4        |       |
| Vertical Alpha Potentiometer (B1M)    | 3        | 3        |       |
| Vertical Alpha Potentiometer (B10K)   | 1        | 1        |       |

#### Resistors

| Item                       | Quantity | Received     | Notes |
| -------------------------- | -------- | ------------ | ----- |
| Metal Film resistor (22K)  | 1        | 100 in stock |       |
| Metal Film resistor (10K)  | 2        | 100 in stock |       |
| Metal Film resistor (4.7K) | 4        | 100 in stock |       |
| Metal Film resistor (1K)   | 1        | 100 in stock |       |
| Metal Film resistor (100R) | 3        | 100 in stock |       |

#### Misc

| Item                               | Quantity | Received | Notes |
| ---------------------------------- | -------- | -------- | ----- |
| 5mm Red Square LED                 | 1        | 1        |       |
| 8 Pin Header                       | 2        | 2        |       |
| 8 Pin Socket                       | 2        | 2        |       |
| 10 Pin Power Header                | 1        | 1        |       |
| 10-16 pin Power Cable              | 1        |          |       |
| Mono Audio Jack                    | 2        | 2        |       |
| DWB1 SPDT ON-ON Mini Toggle Switch | 1        | 1        |       |

### :negative_squared_cross_mark: Assembly

BOM and Build Information are available on the [Bleep Sound Website](https://bleepsound.github.io/basic_adsr)

## Basic DC mixer

### Parts

#### PCB

| Item                 | Quantity | Received | Notes |
| -------------------- | -------- | -------- | ----- |
| DC Mixer Front Panel | 1        | 1        |       |
| DC Mixer PCB         | 1        | 1        |       |

#### Capacitors

| Item                          | Quantity | Received | Notes |
| ----------------------------- | -------- | -------- | ----- |
| Electrolytic Capacitor (10uF) | 2        | 2        |       |

#### Integrated Circuits

| Item                | Quantity | Received    | Notes |
| ------------------- | -------- | ----------- | ----- |
| 8 Pin DIP Sockets   | 1        | 15 in stock |       |
| Op Amp Dual (TL072) | 1        | 10 in stock |       |

#### Potentiometers

| Item                                  | Quantity | Received | Notes |
| ------------------------------------- | -------- | -------- | ----- |
| Aluminum Knob for Alpha Potentiometer | 4        | 4        |       |
| Vertical Alpha Potentiometer (B10K)   | 4        | 4        |       |

#### Resistors

| Item                       | Quantity | Received     | Notes |
| -------------------------- | -------- | ------------ | ----- |
| Metal Film resistor (100K) | 5        | 100 in stock |       |
| Metal Film resistor (10K)  | 2        | 100 in stock |       |
| Metal Film resistor (4.7K) | 4        | 100 in stock |       |

#### Misc

| Item                               | Quantity | Received | Notes |
| ---------------------------------- | -------- | -------- | ----- |
| 5mm Red Square LED                 | 4        | 4        |       |
| 10 Pin Power Header                | 1        | 1        |       |
| 10-16 pin Power Cable              | 1        |          |       |
| DWB3 DPDT ON-ON Mini Toggle Switch | 4        | 5        |       |
| Mono Audio Jack                    | 6        | 6        |       |

### :negative_squared_cross_mark: Assembly

BOM and Build Information are available on the [Bleep Sound Website](https://bleepsound.github.io/basic_mixer_dc)

# Free Modular

## Boost

### Parts

#### PCB

| Item              | Quantity | Received | Notes |
| ----------------- | -------- | -------- | ----- |
| Boost Front Panel | 1        | 1        |       |
| Boost PCB         | 1        | 1        |       |

#### Capacitors

| Item                          | Quantity | Received     | Notes                                      |
| ----------------------------- | -------- | ------------ | ------------------------------------------ |
| Ceramic Capacitor (470nF)     | 1        | 100 in stock |                                            |
| Ceramic Capacitor (100nF)     | 2        | 100 in stock |                                            |
| Ceramic Capacitor (10nF)      | 1        | 100 in stock |                                            |
| Ceramic Capacitor (33pF)      | 1        | 100 in stock |                                            |
| Electrolytic Capacitor (10uF) | 2        | 5 in stock   | Optional power supply filtering capacitors |

#### Diodes

| Item                  | Quantity | Received    | Notes |
| --------------------- | -------- | ----------- | ----- |
| Signal Diode (1N4148) | 2        | 25 in stock |       |

#### Integrated Circuits

| Item                    | Quantity | Received    | Notes                             |
| ----------------------- | -------- | ----------- | --------------------------------- |
| 14 Pin DIP Sockets      | 1        | 10 in stock |                                   |
| Op Amp Quad (TL074)     | 1        | 10 in stock |                                   |
| Transistor NPN (2N3904) | 1        | 20 in stock | Optional for high-impedance input |

#### Potentiometers

| Item                                  | Quantity | Received | Notes |
| ------------------------------------- | -------- | -------- | ----- |
| Aluminum Knob for Alpha Potentiometer | 2        | 2        |       |
| Vertical Alpha Potentiometer (B50K)   | 2        | 2        |       |

#### Resistors

| Item                       | Quantity | Received     | Notes |
| -------------------------- | -------- | ------------ | ----- |
| Metal Film resistor (750K) | 1        | 100 in stock |       |
| Metal Film resistor (560K) | 1        | 100 in stock |       |
| Metal Film resistor (100K) | 2        | 100 in stock |       |
| Metal Film resistor (24K)  | 1        | 100 in stock |       |
| Metal Film resistor (18K)  | 1        | 100 in stock |       |
| Metal Film resistor (15K)  | 1        | 100 in stock |       |
| Metal Film resistor (10K)  | 2        | 100 in stock |       |
| Metal Film resistor (2.4K) | 1        | 100 in stock |       |
| Metal Film resistor (2K)   | 1        | 100 in stock |       |
| Metal Film resistor (1K)   | 1        | 100 in stock |       |

#### Misc

| Item                  | Quantity | Received | Notes |
| --------------------- | -------- | -------- | ----- |
| 10 Pin Power Header   | 1        | 1        |       |
| 10-16 pin Power Cable | 1        |          |       |
| Mono Audio Jack       | 2        | 2        |       |

### :negative_squared_cross_mark: Assembly

Assembly Instructions are available on the [Free Modular Website](https://freemodular.org/modules/Boost/docs/assembly_instructions) along with the [User Manual](https://files.freemodular.org/Boost/boost_manual.pdf)

# MH Eurorack

## Bypass

### Parts

I purchased this as PCB and Panel only, I sourced the rest of the parts for the kit myself.

Kit contains the `Quantity` needed for building 1 unit.

#### PCB

| Item               | Quantity |
| ------------------ | -------- |
| Bypass Front Panel | 1        |
| Bypass PCB         | 1        |

#### Potentiometers

| Item                                  | Quantity |
| ------------------------------------- | -------- |
| Aluminum Knob for Alpha Potentiometer | 2        |
| Vertical Alpha Potentiometer (A100K)  | 2        |

#### Misc

| Item                                  | Quantity |
| ------------------------------------- | -------- |
| DW3 DPDT ON-ON Sub-mini Toggle Switch | 1        |
| Mono Audio Jack                       | 6        |

### :negative_squared_cross_mark: Assembly

Assembly Instructions are available in the [Assembly Guide](http://database-help.co.uk/wp-content/uploads/2024/08/MH-Bypass-Assembly-instructions.pdf) on the [MH Eurorack Website](http://database-help.co.uk/mheurorack/bypass)

## TRS

### Parts

I purchased this as PCB and Panel only, I sourced the rest of the parts for the kit myself.

Kit contains the `Quantity` needed for building 1 unit.

#### PCB

| Item            | Quantity |
| --------------- | -------- |
| TRS Front Panel | 1        |
| TRS PCB         | 1        |

#### Potentiometers

| Item                                            | Quantity |
| ----------------------------------------------- | -------- |
| Aluminum Knob for Alpha Potentiometer           | 1        |
| Vertical Alpha Potentiometer - Dual Gang (A50K) | 1        |

#### Misc

| Item                                      | Quantity |
| ----------------------------------------- | -------- |
| DW4 DPDT ON-OFF-ON Sub-mini Toggle Switch | 1        |
| Mono Audio Jack                           | 2        |
| Stereo Audio Jack                         | 8        |

### :negative_squared_cross_mark: Assembly

Assembly Instructions are available in the [Assembly Guide](http://database-help.co.uk/wp-content/uploads/2024/08/TRS-Assembly-instructions.pdf) on the [MH Eurorack Website](http://database-help.co.uk/mheurorack/trs)

## UMIX

### Parts

#### PCB

| Item             | Quantity | Received | Notes |
| ---------------- | -------- | -------- | ----- |
| UMIX Front Panel | 1        | 1        |       |
| UMIX PCB         | 1        | 1        |       |

#### Capacitors

| Item                          | Quantity | Received     | Notes                    |
| ----------------------------- | -------- | ------------ | ------------------------ |
| Ceramic Capacitor (100nF)     | 6        | 100 in stock |                          |
| Electrolytic Capacitor (22uF) | 2        | 5 in stock   | I will replace with 33uF |

#### Diodes

| Item                    | Quantity | Received    | Notes                      |
| ----------------------- | -------- | ----------- | -------------------------- |
| Schottky Diode (1N5818) | 2        | 10 in stock | I will replace with 1N5819 |

#### Integrated Circuits

| Item                | Quantity | Received    | Notes |
| ------------------- | -------- | ----------- | ----- |
| 8 Pin DIP Sockets   | 1        | 15 in stock |       |
| Op Amp Dual (TL072) | 1        | 10 in stock |       |

#### Resistors

| Item                       | Quantity | Received     | Notes                   |
| -------------------------- | -------- | ------------ | ----------------------- |
| Metal Film resistor (100K) | 10       | 100 in stock |                         |
| Metal Film resistor (50K)  | 4        | 105 in stock | I will replace with 51K |
| Metal Film resistor (1K)   | 2        | 100 in stock |                         |
| Metal Film resistor (10R)  | 2        | 100 in stock |                         |

#### Misc

| Item                  | Quantity | Received     | Notes |
| --------------------- | -------- | ------------ | ----- |
| 2 Pin Header          | 2        | 2 in stock   |       |
| 3 Pin Header          | 1        | 1 in stock   |       |
| 10 Pin Power Header   | 1        | 1            |       |
| 10-16 pin Power Cable | 1        |              |       |
| Jumper Cap 2.54mm     | 3        | 109 in stock |       |
| Mono Audio Jack       | 8        | 8            |       |

### :negative_squared_cross_mark: Assembly

Assembly Instructions are available in the [Assembly Guide](http://database-help.co.uk/wp-content/uploads/2024/08/MH-UMIX-Assembly-guide.pdf) on the [MH Eurorack Website](http://database-help.co.uk/mheurorack/umix)

# Thonk Synth

## Triple Attenuator

### Parts

Kit contains the `Quantity` needed for building 1 unit.

#### PCB

| Item                 | Quantity |
| -------------------- | -------- |
| TAT v1.0 Front Panel | 1        |
| TAT v1.0 PCB         | 1        |

#### Potentiometers

| Item                                 | Quantity |
| ------------------------------------ | -------- |
| Plastic Knob for Alpha Potentiometer | 3        |
| Vertical Alpha Potentiometer (?)     | 3        |

#### Resistors

| Item                      | Quantity |
| ------------------------- | -------- |
| Metal Film resistor (10K) | 3        |

#### Misc

| Item              | Quantity |
| ----------------- | -------- |
| 3 Pin Header      | 3        |
| Jumper Cap 2.54mm | 3        |
| Mono Audio Jack   | 6        |

### :negative_squared_cross_mark: Assembly

[Assembly Instructions](https://www.thonk.co.uk/wp-content/uploads/2025/06/t05-TAT-Build-Doc-v1.1.pdf) and [Manual](https://www.thonk.co.uk/wp-content/uploads/2025/06/t05-TAT-Manual.pdf) are available on the [Thonk Website](https://www.thonk.co.uk/shop/thonk-synth-t05-tat-kit/)

# Patching

Once I have fully assembled both the [mki x es.EDU System](#mki-x-esedu-system) and [EDU DIY Drums & Effects](#edu-diy-drums--effects) I plan to re-arrange the modules to connect to the ports on the back of the Keystep Pro:

- Voice 1 and 2 `Pitch`, `Velo/Mod` and `Gate` each connecting to a VCO, VCF, Envelope and VCA (Top of diagram below)
- 4 Drum Gates connecting to `Trigger` of the Drums modules (Bottom of diagram below)

![Modular Grid EDU DIY System](https://cdn.modulargrid.net/img/patches/modulargrid_129015.jpg)
