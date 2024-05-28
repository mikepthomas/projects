---
title: Thinkpads
heading: Adventures with Thinkpads
date: 2017-11-13
lastmod: 2024-05-28T20:33:53.948Z
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

![Using Araldite to fix split lid of the laptop](/assets/blog/thinkpad/repairing-split-lid.jpg)

I also used Araldite to fix the broken parts where there is a split in the lid of the laptop.

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

## Backup Stock BIOS

![The Stock Thinkpad X220 BIOS screen](/assets/blog/thinkpad/stock-bios.jpg)

The stock BIOS screen.

![Tools to flash the BIOS chip in the laptop](/assets/blog/thinkpad/flashing-tools.jpg)

Collecting the tools required to flash the BIOS:

- A Multimeter
- Some DuPont wires
- A Pomona 5250 clip
- A Raspberry Pi

![Connecting a Raspberry Pi to Flash the BIOS](/assets/blog/thinkpad/raspberry-pi-connection.jpg)

### Laptop Pinout

```
Screen (furthest from you)
            __
 MOSI  5 --|  |-- 4  GND
  CLK  6 --|  |-- 3  N/C
  N/C  7 --|  |-- 2  MISO
  VCC  8 --|__|-- 1  CS

Palm Rest (closest to you)
```

### Pi Pinout

```
Edge of pi (furthest from you)

L                                                             CS
E                                                             |
F +--------------------------------------------------------------------------------------------------------+
T |    x    x    x    x    x    x    x    x    x    x    x    x    x    x    x    x    x    x    x    x    |
  |    x    x    x    x    x    x    x    x    x    x    x    x    x    x    x    x    x    x    x    x    |
E +--------------------------------------------^----^----^----^---------------------------------------^----+
D                                              |    |    |    |                                       |
G                                             3.3V  MOSI MISO |                                      GND
E                                           (VCC)            CLK

Body of Pi (closest to you)
```

Connecting a Raspberry Pi to read from and write to the BIOS chip.

![Backing up the Stock BIOS](/assets/blog/thinkpad/bios-backup.jpg)

It's always a good idea to read the BIOS data from the chip twice and compare the compare the MD5 hashes to ensure it has been copied correctly.

One of my X220s had a different brand EEPROM chip than the Winbond one in the screenshot above:

```bash
flashrom unknown on Linux 6.1.0-rpi8-rpi-v8 (aarch64)
flashrom is free software, get the source code at https://flashrom.org

Using clock_gettime for delay loops (clk_id: 1, resolution: 1ns).
Using default 2000kHz clock. Use 'spispeed' parameter to override.
Found Macronix flash chip "MX25L6405" (8192 kB, SPI) on linux_spi.
Found Macronix flash chip "MX25L6405D" (8192 kB, SPI) on linux_spi.
Found Macronix flash chip "MX25L6406E/MX25L6408E" (8192 kB, SPI) on linux_spi.
Found Macronix flash chip "MX25L6436E/MX25L6445E/MX25L6465E/MX25L6473E/MX25L6473F" (8192 kB, SPI) on linux_spi.
Multiple flash chip definitions match the detected chip(s): "MX25L6405", "MX25L6405D", "MX25L6406E/MX25L6408E", "MX25L6436E/MX25L6445E/MX25L6465E/MX25L6473E/MX25L6473F"
Please specify which chip definition to use with the -c <chipname> option.
```

To connect to this chip I had to pass the `-c` parameter

```bash
flashrom -p linux_spi:dev=/dev/spidev0.0 -c MX25L6405
flashrom unknown on Linux 6.1.0-rpi8-rpi-v8 (aarch64)
flashrom is free software, get the source code at https://flashrom.org

Using clock_gettime for delay loops (clk_id: 1, resolution: 1ns).
Using default 2000kHz clock. Use 'spispeed' parameter to override.
Found Macronix flash chip "MX25L6405" (8192 kB, SPI) on linux_spi.
===
This flash part has status UNTESTED for operations: WP
The test status of this chip may have been updated in the latest development
version of flashrom. If you are running the latest development version,
please email a report to flashrom@flashrom.org if any of the above operations
work correctly for you with this flash chip. Please include the flashrom log
file for all operations you tested (see the man page for details), and mention
which mainboard or programmer you tested in the subject line.
Thanks for your help!
No operations were specified.
```

## Coreboot

[Coreboot](https://www.coreboot.org/) is on Open Source BIOS replacement.

![Flashing Coreboot with SeaBIOS Payload](/assets/blog/thinkpad/bios-flashing.jpg)

Crossing my fingers and overwriting the stock BIOS.

![SeaBIOS running on the laptop](/assets/blog/thinkpad/seabios.jpg)

It Works! Running the SeaBIOS Payload using [Coreboot](https://www.coreboot.org/).

## Libreboot

![Libreboot running on the laptop](/assets/blog/thinkpad/libreboot.jpg)

"[Libreboot](https://libreboot.org/) is specifically a coreboot distribution". It simplifies the install with pre-compiled images and also provides scripts to simplify compillation.

I used Debian 12 Bookworm to build Libreboot from sources:

```bash
$ git clone https://codeberg.org/libreboot/lbmk
$ cd lbmk
$ git config --global user.name "Mike Thomas"
$ git config --global user.email mikepthomas@outlook.com
$ ./build dependencies debian
...
$ ./build roms list
```

### Compiling

```bash
$ ./build roms x220_8mb x230_12mb -p grub -d corebootfb -k ukqwerty
...
...
...
Created CBFS (capacity = 8191460 bytes)
    BOOTBLOCK
    CBFS       cbfs_master_header
    CBFS       fallback/romstage
Image SIZE 8388608
    CBFS       cpu_microcode_blob.bin
    CBFS       fallback/ramstage
    CBFS       config
    CBFS       revision
    CBFS       build_info
    CBFS       fallback/dsdt.aml
    CBFS       vbt.bin
    CBFS       cmos.default
    CBFS       cmos_layout.bin
    CBFS       fallback/postcar
   IFDTOOL
    DD         Adding Intel Firmware Descriptor
    IFDTOOL    me.bin -> coreboot.pre
Warning: No platform specified. Output may be incomplete
File build/coreboot.pre is 8388608 bytes
File build/me.bin is 86016 bytes
Adding build/me.bin as the Intel ME section of build/coreboot.pre
Writing new image to build/coreboot.pre
    IFDTOOL    gbe.bin -> coreboot.pre
Warning: No platform specified. Output may be incomplete
File build/coreboot.pre is 8388608 bytes
File ../../../config/ifd/xx20/gbe is 8192 bytes
Adding ../../../config/ifd/xx20/gbe as the GbE section of build/coreboot.pre
Writing new image to build/coreboot.pre
    IFDTOOL    Unlocking Management Engine
Warning: No platform specified. Output may be incomplete
File build/coreboot.pre is 8388608 bytes
Writing new image to build/coreboot.pre
    HOSTCC     cbfstool/ifittool.o
    HOSTCC     cbfstool/fit.o
    HOSTCC     cbfstool/ifittool (link)
    CBFS       coreboot.rom
    CBFSLAYOUT  coreboot.rom

This image contains the following sections that can be manipulated with this tool:

'RW_MRC_CACHE' (size 65536, offset 131072)
'COREBOOT' (CBFS, size 8191488, offset 197120)

It is possible to perform either the write action or the CBFS add/remove actions on every section listed above.
To see the image's read-only sections as well, rerun with the -w option.
    CBFSPRINT  coreboot.rom

    HOSTCC     cbfstool/ifwitool.o
    HOSTCC     cbfstool/ifwitool (link)
    HOSTCC     cbfstool/cse_fpt.o
    HOSTCC     cbfstool/cse_helpers.o
    HOSTCC     cbfstool/fpt_hdr_20.o
    HOSTCC     cbfstool/fpt_hdr_21.o
    HOSTCC     cbfstool/cse_fpt (link)
    HOSTCC     cbfstool/cse_serger.o
    HOSTCC     cbfstool/bpdt_1_6.o
    HOSTCC     cbfstool/bpdt_1_7.o
    HOSTCC     cbfstool/subpart_hdr_1.o
    HOSTCC     cbfstool/subpart_hdr_2.o
    HOSTCC     cbfstool/subpart_entry_1.o
    HOSTCC     cbfstool/cse_serger (link)
FMAP REGION: COREBOOT
Name                           Offset     Type           Size   Comp
cbfs_master_header             0x0        cbfs header        32 none
fallback/romstage              0x80       stage           90512 none
cpu_microcode_blob.bin         0x162c0    microcode       26624 none
fallback/ramstage              0x1cb00    stage          119904 LZMA (258012 decompressed)
config                         0x39fc0    raw              3161 LZMA (10125 decompressed)
revision                       0x3ac80    raw               726 none
build_info                     0x3af80    raw               109 none
fallback/dsdt.aml              0x3b040    raw             14726 none
vbt.bin                        0x3ea00    raw              1400 LZMA (3985 decompressed)
cmos.default                   0x3efc0    cmos_default      256 none
cmos_layout.bin                0x3f100    cmos_layout      1976 none
fallback/postcar               0x3f900    stage           21744 none
(empty)                        0x44e40    null          7890468 none
bootblock                      0x7cb480   bootblock       18752 none

Built lenovo/x220 (ThinkPad X220)
make: Leaving directory '/home/mike/Repos/lbmk/src/coreboot/default'
make: Entering directory '/home/mike/Repos/lbmk/src/coreboot/default'
make: Leaving directory '/home/mike/Repos/lbmk/src/coreboot/default'
Done! Check  elf/coreboot_nopayload_DO_NOT_FLASH/

Creating target image: bin/x220_8mb/grub_x220_8mb_libgfxinit_corebootfb_ukqwerty.rom

ROM images available in these directories:
* bin/x220_8mb
* bin/x230_12mb
^^ ROM images available in these directories.

DO NOT flash images from elf/ - please use bin/ instead.
```

## Split X230 image

```bash
$ cd ./bin/x230_12mb/
$ dd if=grub_x230_12mb_libgfxinit_corebootfb_ukqwerty.rom of=top.rom bs=1M skip=8
4+0 records in
4+0 records out
4194304 bytes (4.2 MB, 4.0 MiB) copied, 0.0690374 s, 60.8 MB/s
$ dd if=grub_x230_12mb_libgfxinit_corebootfb_ukqwerty.rom of=bottom.rom bs=1M count=8
8+0 records in
8+0 records out
8388608 bytes (8.4 MB, 8.0 MiB) copied, 0.0276864 s, 303 MB/s
```

### Flashing

Connecting the EEPROM to a Raspberry Pi for flashing is same the same way as [Backing up the stock BIOS](#backup-stock-bios).

I had an error when erasing and writing the flash chip, however it managed to recover itself:

```bash
flashrom -p linux_spi:dev=/dev/spidev0.0 -c MX25L6405 -w ./grub_x220_8mb_libgfxinit_corebootfb_ukqwerty.rom
flashrom unknown on Linux 6.1.0-rpi8-rpi-v8 (aarch64)
flashrom is free software, get the source code at https://flashrom.org

Using clock_gettime for delay loops (clk_id: 1, resolution: 1ns).
Using default 2000kHz clock. Use 'spispeed' parameter to override.
Found Macronix flash chip "MX25L6405" (8192 kB, SPI) on linux_spi.
===
This flash part has status UNTESTED for operations: WP
The test status of this chip may have been updated in the latest development
version of flashrom. If you are running the latest development version,
please email a report to flashrom@flashrom.org if any of the above operations
work correctly for you with this flash chip. Please include the flashrom log
file for all operations you tested (see the man page for details), and mention
which mainboard or programmer you tested in the subject line.
Thanks for your help!
Reading old flash chip contents... done.
Erasing and writing flash chip... FAILED at 0x00081000! Expected=0xff, Found=0xea, failed byte count from 0x00080000-0x0008ffff: 0xeee7
ERASE FAILED!
Reading current flash chip contents... done. Looking for another erase function.
Erase/write done.
Verifying flash... VERIFIED.
```

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
