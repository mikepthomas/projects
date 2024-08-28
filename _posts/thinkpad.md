---
title: Thinkpads
heading: Adventures with Thinkpads
date: 2017-11-13
lastmod: 2024-08-28T18:09:20.089Z
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
$ sudo apt install python-is-python3
$ sudo ./mk dependencies debian
...
$ ./mk -b coreboot list
```

### Compiling

#### X220

```bash
$ ./mk -b coreboot x220_8mb
...
...
...
Created CBFS (capacity = 8191460 bytes)
    BOOTBLOCK
    CBFS       cbfs_master_header
    CBFS       cpu_microcode_blob.bin
    CBFS       fallback/romstage
Image SIZE 8388608
    CBFS       fallback/ramstage
    CBFS       config
    CBFS       revision
    CBFS       build_info
    CBFS       fallback/dsdt.aml
    CBFS       vbt.bin
    CBFS       cmos.default
    CBFS       cmos_layout.bin
    CBFS       fallback/postcar
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
    CBFS       coreboot.rom
    CBFSLAYOUT  coreboot.rom

This image contains the following sections that can be manipulated with this tool:

'RW_MRC_CACHE' (size 65536, offset 131072)
'COREBOOT' (CBFS, size 8191488, offset 197120)

It is possible to perform either the write action or the CBFS add/remove actions on every section listed above.
To see the image's read-only sections as well, rerun with the -w option.
    CBFSPRINT  coreboot.rom

FMAP REGION: COREBOOT
Name                           Offset     Type           Size   Comp
cbfs_master_header             0x0        cbfs header        32 none
cpu_microcode_blob.bin         0x80       microcode       26624 none
fallback/romstage              0x68c0     stage           90608 none
fallback/ramstage              0x1cb40    stage          121009 LZMA (257980 decompressed)
config                         0x3a480    raw              3267 LZMA (10422 decompressed)
revision                       0x3b180    raw               727 none
build_info                     0x3b480    raw               110 none
fallback/dsdt.aml              0x3b540    raw             14765 none
vbt.bin                        0x3ef40    raw              1400 LZMA (3985 decompressed)
cmos.default                   0x3f500    cmos_default      256 none
cmos_layout.bin                0x3f640    cmos_layout      1976 none
fallback/postcar               0x3fe40    stage           21680 none
(empty)                        0x45340    null          7887460 none
bootblock                      0x7cadc0   bootblock       20480 none

Built lenovo/x220 (ThinkPad X220)

ccache statistics
Cacheable calls:             759 / 784 (96.81%)
  Hits:                      753 / 759 (99.21%)
    Direct:                   80 / 753 (10.62%)
    Preprocessed:            673 / 753 (89.38%)
  Misses:                      6 / 759 ( 0.79%)
Uncacheable calls:            25 / 784 ( 3.19%)
  Called for linking:         12 /  25 (48.00%)
  Called for preprocessing:   13 /  25 (52.00%)
Successful lookups:
  Direct:                     80 / 759 (10.54%)
  Preprocessed:              673 / 679 (99.12%)
Local storage:
  Hits:                      753 / 759 (99.21%)
  Misses:                      6 / 759 ( 0.79%)
  Reads:                    1518
  Writes:                    685
make: Leaving directory '/home/mike/Repos/lbmk/src/coreboot/default'
CONFIG_PAYLOAD_NONE=y
make: Entering directory '/home/mike/Repos/lbmk/src/coreboot/default'
make: Leaving directory '/home/mike/Repos/lbmk/src/coreboot/default'
```

#### X230

```bash
$ ./mk -b coreboot x230_12mb
...
...
...
Created CBFS (capacity = 12385764 bytes)
    BOOTBLOCK
    CBFS       cbfs_master_header
    CBFS       cpu_microcode_blob.bin
    CBFS       fallback/romstage
Image SIZE 12582912
    CBFS       fallback/ramstage
    CBFS       config
    CBFS       revision
    CBFS       build_info
    CBFS       fallback/dsdt.aml
    CBFS       vbt.bin
    CBFS       cmos.default
    CBFS       cmos_layout.bin
    CBFS       fallback/postcar
    DD         Adding Intel Firmware Descriptor
    IFDTOOL    me.bin -> coreboot.pre
Warning: No platform specified. Output may be incomplete
File build/coreboot.pre is 12582912 bytes
File build/me.bin is 98304 bytes
Adding build/me.bin as the Intel ME section of build/coreboot.pre
Writing new image to build/coreboot.pre
    IFDTOOL    gbe.bin -> coreboot.pre
Warning: No platform specified. Output may be incomplete
File build/coreboot.pre is 12582912 bytes
File ../../../config/ifd/xx30/gbe is 8192 bytes
Adding ../../../config/ifd/xx30/gbe as the GbE section of build/coreboot.pre
Writing new image to build/coreboot.pre
    IFDTOOL    Unlocking Management Engine
Warning: No platform specified. Output may be incomplete
File build/coreboot.pre is 12582912 bytes
Writing new image to build/coreboot.pre
    CBFS       coreboot.rom
    CBFSLAYOUT  coreboot.rom

This image contains the following sections that can be manipulated with this tool:

'RW_MRC_CACHE' (size 65536, offset 131072)
'COREBOOT' (CBFS, size 12385792, offset 197120)

It is possible to perform either the write action or the CBFS add/remove actions on every section listed above.
To see the image's read-only sections as well, rerun with the -w option.
    CBFSPRINT  coreboot.rom

FMAP REGION: COREBOOT
Name                           Offset     Type           Size   Comp
cbfs_master_header             0x0        cbfs header        32 none
cpu_microcode_blob.bin         0x80       microcode       26624 none
fallback/romstage              0x68c0     stage           87216 none
fallback/ramstage              0x1be00    stage          118954 LZMA (252084 decompressed)
config                         0x38f00    raw              3274 LZMA (10428 decompressed)
revision                       0x39c00    raw               727 none
build_info                     0x39f00    raw               110 none
fallback/dsdt.aml              0x39fc0    raw             14765 none
vbt.bin                        0x3d9c0    raw              1433 LZMA (4281 decompressed)
cmos.default                   0x3dfc0    cmos_default      256 none
cmos_layout.bin                0x3e100    cmos_layout      2012 none
fallback/postcar               0x3e940    stage           21680 none
(empty)                        0x43e40    null         12087140 none
bootblock                      0xbcadc0   bootblock       20480 none

Built lenovo/x230 (ThinkPad X230)

ccache statistics
Cacheable calls:             759 / 784 (96.81%)
  Hits:                      758 / 759 (99.87%)
    Direct:                   80 / 758 (10.55%)
    Preprocessed:            678 / 758 (89.45%)
  Misses:                      1 / 759 ( 0.13%)
Uncacheable calls:            25 / 784 ( 3.19%)
  Called for linking:         12 /  25 (48.00%)
  Called for preprocessing:   13 /  25 (52.00%)
Successful lookups:
  Direct:                     80 / 759 (10.54%)
  Preprocessed:              678 / 679 (99.85%)
Local storage:
  Hits:                      758 / 759 (99.87%)
  Misses:                      1 / 759 ( 0.13%)
  Reads:                    1518
  Writes:                    680
make: Leaving directory '/home/mike/Repos/lbmk/src/coreboot/default'
CONFIG_PAYLOAD_NONE=y
make: Entering directory '/home/mike/Repos/lbmk/src/coreboot/default'
make: Leaving directory '/home/mike/Repos/lbmk/src/coreboot/default'
```

### Prepare a Release image

Get the latest release rom from [a mirror on the Downloads page](https://libreboot.org/download.html) and verify the sha512 e.g:

```bash
$ wget https://www.mirrorservice.org/sites/libreboot.org/release/stable/20240612/roms/libreboot-20240612_x220_8mb.tar.xz
--2024-08-28 15:46:01--  https://www.mirrorservice.org/sites/libreboot.org/release/stable/20240612/roms/libreboot-20240612_x220_8mb.tar.xz
Resolving www.mirrorservice.org (www.mirrorservice.org)... 212.219.56.184, 2001:630:341:12::184
Connecting to www.mirrorservice.org (www.mirrorservice.org)|212.219.56.184|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 3288796 (3.1M) [application/x-xz]
Saving to: ‘libreboot-20240612_x220_8mb.tar.xz’

libreboot-20240612_x220_8mb.tar.xz                    100%[=======================================================================================================================>]   3.14M  19.6MB/s    in 0.2s

2024-08-28 15:46:01 (19.6 MB/s) - ‘libreboot-20240612_x220_8mb.tar.xz’ saved [3288796/3288796]

$ wget https://www.mirrorservice.org/sites/libreboot.org/release/stable/20240612/roms/libreboot-20240612_x220_8mb.tar.xz.sha512
--2024-08-28 15:46:17--  https://www.mirrorservice.org/sites/libreboot.org/release/stable/20240612/roms/libreboot-20240612_x220_8mb.tar.xz.sha512
Resolving www.mirrorservice.org (www.mirrorservice.org)... 212.219.56.184, 2001:630:341:12::184
Connecting to www.mirrorservice.org (www.mirrorservice.org)|212.219.56.184|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 167 [application/x-xz]
Saving to: ‘libreboot-20240612_x220_8mb.tar.xz.sha512’

libreboot-20240612_x220_8mb.tar.xz.sha512             100%[=======================================================================================================================>]     167  --.-KB/s    in 0s

2024-08-28 15:46:17 (78.4 MB/s) - ‘libreboot-20240612_x220_8mb.tar.xz.sha512’ saved [167/167]

$ sha512sum ./libreboot-20240612_x220_8mb.tar.xz && cat ./libreboot-20240612_x220_8mb.tar.xz.sha512
b1a4b466a27a725d916372374a40778c609db27d3e9f7654a22c83acfb3ce9087ad3fa7cf81f4fe22f626fdaad4c7c36dcccfe10ee8f1ce9fc16e928451f77b3  ./libreboot-20240612_x220_8mb.tar.xz
b1a4b466a27a725d916372374a40778c609db27d3e9f7654a22c83acfb3ce9087ad3fa7cf81f4fe22f626fdaad4c7c36dcccfe10ee8f1ce9fc16e928451f77b3  ./libreboot-20240612_x220_8mb.tar.xz
```

Inject the Management Engine into a Release image:

```bash
$ ./vendor inject libreboot-20240612_x220_8mb.tar.xz
...
File tmp/romdir/bin/x220_8mb/seabios_withgrub_x220_8mb_libgfxinit_corebootfb_ukqwerty.rom is 8388608 bytes
File vendorfiles/xx20/me.bin is 86016 bytes
Adding vendorfiles/xx20/me.bin as the Intel ME section of tmp/romdir/bin/x220_8mb/seabios_withgrub_x220_8mb_libgfxinit_corebootfb_ukqwerty.rom
Writing new image to tmp/romdir/bin/x220_8mb/seabios_withgrub_x220_8mb_libgfxinit_corebootfb_ukqwerty.rom
ROM image successfully patched: tmp/romdir/bin/x220_8mb/seabios_withgrub_x220_8mb_libgfxinit_corebootfb_ukqwerty.rom
Warning: No platform specified. Output may be incomplete
File tmp/romdir/bin/x220_8mb/seabios_withgrub_x220_8mb_libgfxinit_corebootfb_ukqwerty_grubfirst.rom is 8388608 bytes
File vendorfiles/xx20/me.bin is 86016 bytes
Adding vendorfiles/xx20/me.bin as the Intel ME section of tmp/romdir/bin/x220_8mb/seabios_withgrub_x220_8mb_libgfxinit_corebootfb_ukqwerty_grubfirst.rom
Writing new image to tmp/romdir/bin/x220_8mb/seabios_withgrub_x220_8mb_libgfxinit_corebootfb_ukqwerty_grubfirst.rom
ROM image successfully patched: tmp/romdir/bin/x220_8mb/seabios_withgrub_x220_8mb_libgfxinit_corebootfb_ukqwerty_grubfirst.rom
Warning: No platform specified. Output may be incomplete
...
```

Make sure the Management Engine is present before flashing the image:

```bash
$ ./mk -d coreboot x220_8mb
...
$ ./elf/ifdtool/default/ifdtool -x bin/release/x220_8mb/seabios_withgrub_x220_8mb_libgfxinit_corebootfb_ukqwerty_grubfirst.rom
Warning: No platform specified. Output may be incomplete
File bin/release/x220_8mb/seabios_withgrub_x220_8mb_libgfxinit_corebootfb_ukqwerty_grubfirst.rom is 8388608 bytes
  Flash Region 0 (Flash Descriptor): 00000000 - 00000fff
  Flash Region 1 (BIOS): 00018000 - 007fffff
  Flash Region 2 (Intel ME): 00003000 - 00017fff
  Flash Region 3 (GbE): 00001000 - 00002fff
  Flash Region 4 (Platform Data): 00fff000 - 00000fff (unused)
$ hexdump flashregion_2_intel_me.bin
...
0010500 4dde 9bf2 bdc9 79b3 c237 266f 27e6 9038
0010510 bb90 c196 249d 012b a19e e27c b042 3129
0010520 8b65 b4dc a806 45a9 0cea 70b1 19d3 13d3
0010530 faf6 9b87 4d63 f761 f7f7 f7f7 f7f7 f7f7
0010540 f7f7 f7f7 f7f7 f7f7 f7f7 f7f7 fff6 ffff
0010550 ffff ffff ffff ffff ffff ffff ffff ffff
*
0010c80 36ff 7fdf 7f7f 7f7f 7f7f 7f7f 7f7f 7f7f
0010c90 7f7f 7f7f 7f7f 7f7f 7f7f 7f7f 7f7f 7f7f
*
0010cc0 7f7f 7f7f 7f7f ff60 ffff ffff ffff ffff
0010cd0 ffff ffff ffff ffff ffff ffff ffff ffff
*
0011160 7fff fe8c 5e5e d058 f80c 0cd0 d0f8 f80c
0011170 0cd0 d0f8 f80c 0cd0 d0f8 f80c 0cd0 d0f8
0011180 f80c 0cd0 d0f8 f80c 0cd0 d0f8 f80c 0cd0
0011190 d0f8 f80c 0cd0 d0f8 f80c 0cd0 d0f8 f80c
00111a0 0cd0 d0f8 f80c 0cd0 d0f8 f80c 0cd0 d0f8
00111b0 f80c 0cd0 d0f8 f80c 0cd0 d0f8 f80c 0cd0
00111c0 d0f8 f80c 0cd0 d0f8 f80c 0cd0 d0f8 f80c
00111d0 0cd0 d0f8 f80c 0cd0 d0f8 f80c 0cd0 d0f8
00111e0 f80c 0cd0 d0f8 f80c 0cd0 d0f8 f80c 0cd0
00111f0 d0f8 f80c 0cd0 d0f8 f80c 0cd0 d0f8 f80c
0011200 0cd0 d0f8 f80c 0cd0 d0f8 f80c 0cd0 fff8
0011210 ffff ffff ffff ffff ffff ffff ffff ffff
*
0015000
```

### Split X230 image

```bash
$ cd ./bin/x230_12mb/
$ dd if=seagrub_x230_12mb_libgfxinit_corebootfb_ukqwerty.rom of=top.rom bs=1M skip=8
4+0 records in
4+0 records out
4194304 bytes (4.2 MB, 4.0 MiB) copied, 0.0175795 s, 239 MB/s
$ dd if=seagrub_x230_12mb_libgfxinit_corebootfb_ukqwerty.rom of=bottom.rom bs=1M count=8
8+0 records in
8+0 records out
8388608 bytes (8.4 MB, 8.0 MiB) copied, 0.0340301 s, 247 MB/s
```

### Flashing

#### Serprog

You can use a Raspberry Pi Pico to flash the bios, you can compile the image to flash to the pico with one of the following.

```bash
$ ./mk -b pico-serprog
```

#### Flashprog

Libreboot standardises on flashprog now, compile it with:

```bash
$ ./mk -b flashprog
```

Connecting the EEPROM to a Raspberry Pi for flashing is same the same way as [Backing up the stock BIOS](#backup-stock-bios).

I had an error when erasing and writing the flash chip, however it managed to recover itself:

```bash
$ flashrom -p linux_spi:dev=/dev/spidev0.0 -c MX25L6405 -w ./grub_x220_8mb_libgfxinit_corebootfb_ukqwerty.rom
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
