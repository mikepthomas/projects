---
title: Thinkpads
heading: Adventures with Thinkpads
date: 2017-11-13
lastmod: 2024-01-23T20:15:07.332Z
author: Mike Thomas
description: The many tinkerings with the internals of an X220 Thinkpad.
preview: /assets/blog/thinkpad/thinkpad-hero.jpg
slug: /projects/thinkpad
draft: false
tags:
  - Computers
  - Raspberry Pi
categories:
  - Software
keywords:
  - Thinkpad
---

# Table of contents

# Freenode Live 2017

![My Exhibitor Lanyard from Freenode Live](/assets/blog/thinkpad/freenode-exhibitor.jpg)

I was a volunteer helping out the [Free Software Foundation](https://www.fsf.org/) at Frennode Live 2017 in Bristol, where I got talking to some really interesting people and played on some Thinkpads running entirely Free software. This made me want to build my own.

# Hardware Upgrades

![Parts to upgrade my Thinkpad X220](/assets/blog/thinkpad/upgrades.jpg)

## Repairs

![Cracked plastics on a laptop](/assets/blog/thinkpad/cracked.jpg)

I brought the laptop for cheap from a seller on eBay. The laptop was quite dirty, has some shiny keys and trackpad and some cracked plastics. my first job was to clean it up and replace the broken parts.

## Bluetooth Upgrade

![The Bluetooth module is separate from the Wifi module](/assets/blog/thinkpad/bluetooth.jpg)

Bluetooth can be upgraded to Bluetooth 4.0 by simply swapping out the daughter card located under the palm rest.

![A Bluetooth 4.0 compatable card salvaged from a broken X230](/assets/blog/thinkpad/bluetooth-upgrade.jpg)

## Processor Upgrade

![The Cables are routed through the keyboard carrier](/assets/blog/thinkpad/cable-routing.jpg)

The Laptop came with an Intel i5 processor however the BIOS was locked with a password so I purchased a second hand motherboard with an Intel i7 and swapped the motherboards over.

![There are only a few screws holding the motherboard in](/assets/blog/thinkpad/mainboard-screw-locations.jpg)

## 4G Modem

![4G Modem installed in the machine](/assets/blog/thinkpad/4g-modem.jpg)

The Laptop came with a 4G modem installed and there is a SIM Card slot in the battery compartment. The module seemed to be locked to the Vodafone network and was quite expensive to use on PAYG.

## Solid State Drives

![So good I brought it twice](/assets/blog/thinkpad/they-are-multiplying.jpg)

I liked the laptop so much I purchased another one.

![A Generic SSD Module](/assets/blog/thinkpad/generic-ssd.jpg)

The newer machine came with a small (32GB I believe) generic SSD.

![A Crucial SSD Module](/assets/blog/thinkpad/crucial-ssd.jpg)

I replaced it with a larger Crucial branded SSD.

![A Samsung SSD Module](/assets/blog/thinkpad/samsung-ssd.jpg)

And whilst I was at it I replaced the 4G Modem in the other laptop with an SSD too.

## Memory

I have now also updated both machines with the maximum that they support. 16GB of Crucial memory in the laptop with a Crucial SSD and 16GB of Samsung memory in the machine with a Samsung SSD.

# BIOS Flashing

![The Stock Thinkpad X220 BIOS screen](/assets/blog/thinkpad/stock-bios.jpg)

The stock BIOS screen.

![Tools to flash the BIOS chip in the laptop](/assets/blog/thinkpad/flashing-tools.jpg)

Collecting the tools required to flash the BIOS:

- A Multimeter
- Some DuPont wires
- A Pomona 5250 clip
- A Raspberry Pi

![Connecting a Raspberry Pi to Flash the BIOS](/assets/blog/thinkpad/raspberry-pi-connection.jpg)

Connecting a Raspberry Pi to read from and write to the BIOS chip.

![Backing up the Stock BIOS](/assets/blog/thinkpad/bios-backup.jpg)

It's always a good idea to read the BIOS data from the chip twice and compare the compare the MD5 hashes to ensure it has been copied correctly.

![Flashing Coreboot with SeaBIOS Payload](/assets/blog/thinkpad/bios-flashing.jpg)

Crossing my fingers and overwriting the stock BIOS.

![SeaBIOS running on the laptop](/assets/blog/thinkpad/seabios.jpg)

It Works! Running the SeaBIOS Payload using [Coreboot](https://www.coreboot.org/).

# Operating Systems

A non-exhaustive list of operating systems that I have used on the laptop.

## Chromium OS

![Chromium OS running on the X220](/assets/blog/thinkpad/chromium-os.jpg)

I compilled [Chromium OS](https://www.chromium.org/chromium-os/quick-start-guide/) and got it running on the laptop.

![I compiled the OS myself from the original source code](/assets/blog/thinkpad/chromium-os-developer-build.jpg)

## Linux From Scratch

![Linux From Scratch running on the X220](/assets/blog/thinkpad/linux-from-scratch.jpg)

I ran through the base [Linux from Scratch book](https://www.linuxfromscratch.org/lfs/view/stable/) and got a basic Linux os.

## Mac OS

![Mac OS running on the X220](/assets/blog/thinkpad/mac-os.jpg)

The laptop can run up to [Mac OS High Sierra](https://x220.mcdonnelltech.com/) as the Video card does not support Metal.

## Ubuntu

![Ubuntu running on the X220](/assets/blog/thinkpad/ubuntu.jpg)

The Main Operating system I use on the laptop

## Windows 11

![Windows 11 running on the X220](/assets/blog/thinkpad/windows-11.jpg)

The laptop does not officially support Windows 11 as it does not have Secure boot or a TPM 2.0, it only has a TPM 1.1.
