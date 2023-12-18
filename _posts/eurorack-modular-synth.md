---
title: Building a DIY Eurorack Modular Synth
date: 2023-06-29
lastmod: 2023-12-11
author: Mike Thomas
description: Building a Eurorack Modular Synthesizer from scratch.
preview: /assets/blog/eurorack-modular-synth/keystep-pro.jpg
slug: /projects/eurorack-modular-synth
draft: false
tags:
  - Music
categories:
  - Electronics
keywords:
  - Eurorack
---

# Table of contents

# Intro

I am a fan of [Look Mum No Computer](https://www.youtube.com/@LOOKMUMNOCOMPUTER), In one of his videos he mentioned about the website [Music From Outer Space](http://musicfromouterspace.com/index.php?MAINTAB=SYNTHDIY&VPW=1430&VPH=660) and the book `Make: Analog Synthesizers` which I have brought and I am currently reading through.

# Sequencer

I wanted something that I could connect up to a computer via USB to use software synths like [VCVRack](https://vcvrack.com/) or for connecting up to [Garageband](https://www.apple.com/mac/garageband/) and maybe later [Logic Pro](https://www.apple.com/uk/logic-pro/). I also wanted something that is able to control hardware synths with Pitch CV, Velocity CV and Gate control or via MIDI inputs and outputs. The Keystep Pro provides all 3, via USB, MIDI and mono 3.5mm output jacks.

| Item        | Quantity | Received | Notes                                                                                                         |
| ----------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------- |
| KeyStep Pro | 1        | 1        | The Special Black Edition I purchased also came with 14 CV/Gate cables for connecting to the eurorack modules |

# Eurorack Case and Power

I have seen a 3D Printed Eurorack case that I would like to make called [The SP1 by Spillerphoto.com on Printables](https://www.printables.com/model/203562)

## Sourcing Parts

| Item                                   | Quantity                   | Received | Notes                                                                                                                                                       |
| -------------------------------------- | -------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Befaco Bananuts (Black)                | 25                         | 25       |                                                                                                                                                             |
| Befaco Bananuts (Red)                  | 25                         | 25       |                                                                                                                                                             |
| Befaco Bananuts Wrench Tool            | 1                          | 1        |                                                                                                                                                             |
| Befaco Passive Bus                     | 1                          | 1        |                                                                                                                                                             |
| Befaco Squid Cable                     | 1                          | 1        |                                                                                                                                                             |
| Eurorack Blank Panels (Thonk Logo)     | 1 x 2HP                    | 1        |                                                                                                                                                             |
| Eurorack Blank Panels (Circuit Design) | Set of 7                   | Set of 7 | Available on [Modular Synth Lab](https://modularsynthlab.com/product/eurorack-blind-panels-3u-complete-set-7-sizes-in-one-package-black-20hp-panel-gratis/) |
| M3 Threaded Strip Insert 84HP          | 4 (6 including dust cover) | 6        | Available on [Modular Synth Lab](https://modularsynthlab.com/product/eurorack-rails-m3-threaded-inserts/?attribute_size=84HP)                               |
| Mean Well RT65B Power Supply           | 1                          | 1        | Available on [Modular Synth Lab](https://modularsynthlab.com/product/eurorack-power-supply-mean-well-rt65b/)                                                |
| 16-16 pin Power Cable                  | 5                          | 10       | 30cm length                                                                                                                                                 |
| M3 Nylon Screws                        | 40                         | 43       | Nylon can prevent [Rack Rash](https://learningmodular.com/glossary/rack-rash/)                                                                              |

## Printing Parts

### Case

| Item                                                       | Quantity | Material                                                            | Time | Size | Weight | Cost | Printed | Notes |
| ---------------------------------------------------------- | -------- | ------------------------------------------------------------------- | ---- | ---- | ------ | ---- | :-----: | ----- |
| [SP110HPRC](https://www.printables.com/model/203562/files) | 1        | [PolyLite PLA Pro (Black)](printer-filament#polylite-pla-pro-black) |      |      |        |      |   :x:   |       |
| [SP1H25GM](https://www.printables.com/model/203562/files)  | 1        | [PolyLite PLA Pro (Black)](printer-filament#polylite-pla-pro-black) |      |      |        |      |   :x:   |       |
| [SP110HPLC](https://www.printables.com/model/203562/files) | 1        | [PolyLite PLA Pro (Black)](printer-filament#polylite-pla-pro-black) |      |      |        |      |   :x:   |       |
| [SP1H10C](https://www.printables.com/model/203562/files)   | 2        | [PolyLite PLA Pro (Black)](printer-filament#polylite-pla-pro-black) |      |      |        |      |   :x:   |       |
| [SP1H10 v6](https://www.printables.com/model/203562/files) | 2        | [PolyLite PLA Pro (Black)](printer-filament#polylite-pla-pro-black) |      |      |        |      |   :x:   |       |

### Dust Cover

| Item                                                                                                       | Quantity | Material                                                            | Time | Size | Weight | Cost | Printed | Notes                                                                                 |
| ---------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------- | ---- | ---- | ------ | ---- | :-----: | ------------------------------------------------------------------------------------- |
| [SP1CapRC](https://www.printables.com/model/203562/files)                                                  | 1        | [PolyLite PLA Pro (Black)](printer-filament#polylite-pla-pro-black) |      |      |        |      |   :x:   |                                                                                       |
| [SP1CapLC](https://www.printables.com/model/203562/files)                                                  | 1        | [PolyLite PLA Pro (Black)](printer-filament#polylite-pla-pro-black) |      |      |        |      |   :x:   |                                                                                       |
| [SP1Cap10](https://www.printables.com/model/203562/files)                                                  | 4        | [PolyLite PLA Pro (Black)](printer-filament#polylite-pla-pro-black) |      |      |        |      |   :x:   |                                                                                       |
| [SP1Cap25](https://github.com/mikepthomas/3dprinting/blob/main/Designs/SP1%20Eurorack%20Case/SP1Cap25.stl) | 1        | [PolyLite PLA Pro (Black)](printer-filament#polylite-pla-pro-black) |      |      |        |      |   :x:   | This part doesn't exist on printables, I have created it myself by extending SP1Cap10 |

# Parts For Testing

To test eurorack modules, I will be firstly building them up on a breadboard, [powered by 2 9V Batteries](https://www.youtube.com/watch?v=QBatvo8bCa4&t=1145s).
I also plan on building a [cheap DIY Oscilloscope kit](https://www.aliexpress.com/item/1005005685435210.html) into a [3D printed Eurorack Module](https://www.thingiverse.com/thing:3631288). I did not want to spend a lot of money on a decent oscilloscope, I just need one "good enough" to help with visualising waveforms and to get an idea of what output a module is producing.

## Sourcing Parts

| Item                                   | Quantity | Received | Notes |
| -------------------------------------- | -------- | -------- | ----- |
| 9V Battery                             | 2        | 2        |       |
| 9V Battery Connector                   | 2        | 6        |       |
| Breadboard                             | 1        | 1        |       |
| DIY 2.4" inch LCD Digital Oscilloscope | 1        | 1        |       |
| MT3608 DC-DC Boost Converter           | 1        | 1        |       |

## Printing Parts

| Item                                                       | Quantity | Material                                                            | Time | Size | Weight | Cost | Printed | Notes |
| ---------------------------------------------------------- | -------- | ------------------------------------------------------------------- | ---- | ---- | ------ | ---- | :-----: | ----- |
| [Bracket](https://www.thingiverse.com/thing:3631288/files) | 2        | [PolyLite PLA Pro (Black)](printer-filament#polylite-pla-pro-black) |      |      |        |      |   :x:   |       |
| [Switch](https://www.thingiverse.com/thing:3631288/files)  | 3        | [PolyLite PLA Pro (Black)](printer-filament#polylite-pla-pro-black) |      |      |        |      |   :x:   |       |
| [Spacers](https://www.thingiverse.com/thing:3631288/files) | 4        | [PolyLite PLA Pro (Black)](printer-filament#polylite-pla-pro-black) |      |      |        |      |   :x:   |       |
| [Button](https://www.thingiverse.com/thing:3631288/files)  | 4        | [PolyLite PLA Pro (Black)](printer-filament#polylite-pla-pro-black) |      |      |        |      |   :x:   |       |
| [Panel](https://www.thingiverse.com/thing:3631288/files)   | 1        | [PolyLite PLA Pro (Black)](printer-filament#polylite-pla-pro-black) |      |      |        |      |   :x:   |       |

# Envelope Generator (EG)

[Moritz Klein's Envelope Generator Video](https://www.youtube.com/watch?v=aGFb7JbTdNU)

Quantities are for 1 Unit

## Capacitors

| Item                          | Quantity | Received | Notes |
| ----------------------------- | -------- | -------- | ----- |
| Electrolytic Capacitor (47uF) | 2        | 10       |       |
| Film Capacitor (1uF)          | 2        | 10       |       |
| Ceramic Capacitor (100NF)     | 8        | 100      |       |

## Diodes

| Item                   | Quantity | Received | Notes                                                                                                                      |
| ---------------------- | -------- | -------- | -------------------------------------------------------------------------------------------------------------------------- |
| Schottky Diode (SB140) | 2        | 20       | [Ordered alternative SR140](https://uk.farnell.com/onsemi/sb140/diode-schottky-1a-40v-do-41/dp/1467528#ProductSubstitutes) |
| Signal Diode (1N4148)  | 6        | 25       |                                                                                                                            |

## Integrated Circuits

| Item                   | Quantity | Received | Notes |
| ---------------------- | -------- | -------- | ----- |
| Transistor NPN (BC548) | 1        | 100      |       |
| Op Amp Dual (TL072)    | 3        | 10       |       |
| 8 Pin DIP Sockets      | 3        | 15       |       |

## Potentiometers

| Item                          | Quantity | Received | Notes |
| ----------------------------- | -------- | -------- | ----- |
| Vertical Potentiometer (1M)   | 2        | 5        |       |
| Vertical Potentiometer (100K) | 1        | 20       |       |
| Aluminum Potentiometer Knob   | 3        | 30       |       |

## Resistors

| Item                       | Quantity | Received | Notes |
| -------------------------- | -------- | -------- | ----- |
| Metal Film resistor (100K) | 10       | 100      |       |
| Metal Film resistor (47K)  | 1        | 100      |       |
| Metal Film resistor (10K)  | 1        | 100      |       |
| Metal Film resistor (1K)   | 2        | 100      |       |
| Metal Film resistor (470R) | 1        | 100      |       |
| Metal Film resistor (100R) | 1        | 100      |       |
| Metal Film resistor (10R)  | 2        | 100      |       |

## Misc

| Item                       | Quantity | Received | Notes                                                                                                      |
| -------------------------- | -------- | -------- | ---------------------------------------------------------------------------------------------------------- |
| 6HP Eurorack Prototype Kit | 1        | 1        | Available on [N8Synth](https://www.n8synth.co.uk/shop/eurorack-prototype-kits/6hp-eurorack-prototype-kit/) |
| SPDT Switch                | 1        | 1        |                                                                                                            |
| 3mm Red LED                | 1        | 1        |                                                                                                            |
| Mono Audio Jack            | 3        | 30       |                                                                                                            |

# Mixer

[Moritz Klein's Mixer Video Series](https://www.youtube.com/watch?v=q8tmUgaXrEQ&list=PLHeL0JWdJLvQUWK_poeQVAd3mvSTiE0uV)

Quantities are for 1 Unit

## Capacitors

| Item                          | Quantity | Received | Notes |
| ----------------------------- | -------- | -------- | ----- |
| Electrolytic Capacitor (47uF) | 2        | 10       |       |
| Ceramic Capacitor (100NF)     | 6        | 100      |       |

## Diodes

| Item                   | Quantity | Received | Notes                                                                                                                      |
| ---------------------- | -------- | -------- | -------------------------------------------------------------------------------------------------------------------------- |
| Schottky Diode (SB140) | 2        | 20       | [Ordered alternative SR140](https://uk.farnell.com/onsemi/sb140/diode-schottky-1a-40v-do-41/dp/1467528#ProductSubstitutes) |
| Signal Diode (1N4148)  | 2        | 25       |                                                                                                                            |

## Integrated Circuits

| Item                | Quantity | Received | Notes |
| ------------------- | -------- | -------- | ----- |
| Op Amp Dual (TL072) | 2        | 10       |       |
| 8 Pin DIP Sockets   | 2        | 15       |       |

## Potentiometers

| Item                          | Quantity | Received | Notes |
| ----------------------------- | -------- | -------- | ----- |
| Vertical Potentiometer (100K) | 3        | 20       |       |
| Trim Potentiometer (20K)      | 1        | 10       |       |
| Aluminum Potentiometer Knob   | 3        | 30       |       |

## Resistors

| Item                       | Quantity | Received | Notes |
| -------------------------- | -------- | -------- | ----- |
| Metal Film resistor (100K) | 8        | 100      |       |
| Metal Film resistor (27K)  | 1        | 100      |       |
| Metal Film resistor (1K)   | 3        | 100      |       |
| Metal Film resistor (10R)  | 2        | 100      |       |

## Misc

| Item                       | Quantity | Received | Notes                                                                                                      |
| -------------------------- | -------- | -------- | ---------------------------------------------------------------------------------------------------------- |
| 6HP Eurorack Prototype Kit | 1        | 1        | Available on [N8Synth](https://www.n8synth.co.uk/shop/eurorack-prototype-kits/6hp-eurorack-prototype-kit/) |
| Mono Audio Jack            | 6        | 30       |                                                                                                            |

# Voltage Controlled Amplifier (VCA)

[Moritz Klein's VCA Video Series](https://www.youtube.com/watch?v=yMrCCx6uqcE&list=PLHeL0JWdJLvRVZeniuulktYO_OQs0UNkY)

Quantities are for 1 Unit

## Capacitors

| Item                          | Quantity | Received | Notes |
| ----------------------------- | -------- | -------- | ----- |
| Electrolytic Capacitor (47uF) | 2        | 10       |       |
| Ceramic Capacitor (100NF)     | 6        | 100      |       |

## Diodes

| Item                   | Quantity | Received | Notes                                                                                                                      |
| ---------------------- | -------- | -------- | -------------------------------------------------------------------------------------------------------------------------- |
| Schottky Diode (SB140) | 2        | 20       | [Ordered alternative SR140](https://uk.farnell.com/onsemi/sb140/diode-schottky-1a-40v-do-41/dp/1467528#ProductSubstitutes) |

## Integrated Circuits

| Item                   | Quantity | Received | Notes |
| ---------------------- | -------- | -------- | ----- |
| Transistor NPN (BC548) | 4        | 100      |       |
| Op Amp Dual (TL072)    | 2        | 10       |       |
| 8 Pin DIP Sockets      | 2        | 15       |       |

## Potentiometers

| Item                          | Quantity | Received | Notes |
| ----------------------------- | -------- | -------- | ----- |
| Trim Potentiometer (100K)     | 2        | 10       |       |
| Vertical Potentiometer (100K) | 2        | 20       |       |
| Aluminum Potentiometer Knob   | 2        | 30       |       |

## Resistors

| Item                       | Quantity | Received | Notes |
| -------------------------- | -------- | -------- | ----- |
| Metal Film resistor (100K) | 12       | 100      |       |
| Metal Film resistor (82K)  | 2        | 100      |       |
| Metal Film resistor (20K)  | 6        | 100      |       |
| Metal Film resistor (10K)  | 6        | 100      |       |
| Metal Film resistor (1K)   | 2        | 100      |       |
| Metal Film resistor (100R) | 4        | 100      |       |
| Metal Film resistor (10R)  | 2        | 100      |       |

## Misc

| Item                       | Quantity | Received | Notes                                                                                                      |
| -------------------------- | -------- | -------- | ---------------------------------------------------------------------------------------------------------- |
| 6HP Eurorack Prototype Kit | 1        | 1        | Available on [N8Synth](https://www.n8synth.co.uk/shop/eurorack-prototype-kits/6hp-eurorack-prototype-kit/) |
| Mono Audio Jack            | 6        | 30       |                                                                                                            |

# Voltage Controlled Filter (VCF)

[Moritz Klein's VCF Video Series](https://www.youtube.com/watch?v=3tMGNI--ofU&list=PLHeL0JWdJLvT1PAqW4TtvxtRoXyk741WM)

Quantities are for 1 Unit

## Capacitors

| Item                          | Quantity | Received | Notes |
| ----------------------------- | -------- | -------- | ----- |
| Electrolytic Capacitor (47uF) | 2        | 10       |       |
| Film Capacitor (1uF)          | 2        | 10       |       |
| Ceramic Capacitor (100NF)     | 6        | 100      |       |
| Film Capacitor (1NF)          | 5        | 20       |       |

## Diodes

| Item                   | Quantity | Received | Notes                                                                                                                      |
| ---------------------- | -------- | -------- | -------------------------------------------------------------------------------------------------------------------------- |
| Schottky Diode (SB140) | 2        | 20       | [Ordered alternative SR140](https://uk.farnell.com/onsemi/sb140/diode-schottky-1a-40v-do-41/dp/1467528#ProductSubstitutes) |
| Signal Diode (1N4148)  | 9        | 25       |                                                                                                                            |

## Integrated Circuits

| Item                | Quantity | Received | Notes |
| ------------------- | -------- | -------- | ----- |
| Op Amp Quad (TL074) | 2        | 10       |       |
| 14 Pin DIP Sockets  | 2        | 10       |       |

## Potentiometers

| Item                          | Quantity | Received | Notes |
| ----------------------------- | -------- | -------- | ----- |
| Vertical Potentiometer (100K) | 5        | 20       |       |
| Trim Potentiometer (50K)      | 1        | 10       |       |
| Aluminum Potentiometer Knob   | 5        | 30       |       |

## Resistors

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

## Misc

| Item                       | Quantity | Received | Notes                                                                                                      |
| -------------------------- | -------- | -------- | ---------------------------------------------------------------------------------------------------------- |
| 6HP Eurorack Prototype Kit | 1        | 1        | Available on [N8Synth](https://www.n8synth.co.uk/shop/eurorack-prototype-kits/6hp-eurorack-prototype-kit/) |
| Mono Audio Jack            | 4        | 30       |                                                                                                            |

# Voltage Controlled Oscillator (VCO)

[Moritz Klein's VCO Video Series](https://www.youtube.com/watch?v=QBatvo8bCa4&list=PLHeL0JWdJLvTuGCyC3qvx0RM39YvopVQN)

Quantities are for 1 Unit

## Capacitors

| Item                          | Quantity | Received | Notes |
| ----------------------------- | -------- | -------- | ----- |
| Electrolytic Capacitor (47uF) | 2        | 10       |       |
| Film Capacitor (1uF)          | 1        | 10       |       |
| Ceramic Capacitor (100NF)     | 5        | 100      |       |
| Film Capacitor (2.2NF)        | 1        | 20       |       |

## Diodes

| Item                   | Quantity | Received | Notes                                                                                                                      |
| ---------------------- | -------- | -------- | -------------------------------------------------------------------------------------------------------------------------- |
| Signal Diode (1N4148)  | 1        | 25       |                                                                                                                            |
| Schottky Diode (SB140) | 2        | 20       | [Ordered alternative SR140](https://uk.farnell.com/onsemi/sb140/diode-schottky-1a-40v-do-41/dp/1467528#ProductSubstitutes) |

## Integrated Circuits

| Item                                   | Quantity | Received | Notes |
| -------------------------------------- | -------- | -------- | ----- |
| Transistor NPN (BC548)                 | 1        | 100      |       |
| Transistor PNP (BC558)                 | 1        | 100      |       |
| Op Amp Quad (TL074)                    | 1        | 10       |       |
| Hex Schmitt-Trigger Inverter (CD40106) | 1        | 10       |       |
| 14 Pin DIP Sockets                     | 2        | 10       |       |

## Potentiometers

| Item                          | Quantity | Received | Notes |
| ----------------------------- | -------- | -------- | ----- |
| Trim Potentiometer (1K)       | 1        | 10       |       |
| Vertical Potentiometer (100K) | 3        | 20       |       |
| Vertical Potentiometer (250K) | 1        | 5        |       |
| Vertical Potentiometer (1M)   | 1        | 5        |       |
| Aluminum Potentiometer Knob   | 5        | 30       |       |

## Resistors

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

## Misc

| Item                       | Quantity | Received | Notes                                                                                                      |
| -------------------------- | -------- | -------- | ---------------------------------------------------------------------------------------------------------- |
| 6HP Eurorack Prototype Kit | 1        | 1        | Available on [N8Synth](https://www.n8synth.co.uk/shop/eurorack-prototype-kits/6hp-eurorack-prototype-kit/) |
| 10K thermistor             | 4        | 20       |                                                                                                            |
| Mono Audio Jack            | 5        | 30       |                                                                                                            |
