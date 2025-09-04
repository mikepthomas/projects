---
title: Klipper Firmware
heading: Configuring the software to run a 3D Printer
date: 2025-08-29T22:45:11.067Z
lastmod: 2025-09-04T21:19:32.286Z
author: Mike Thomas
description: Configuring MainsailOS with all the software to run Klipper on my 3D Printer.
preview: /assets/blog/printer-klipper-firmware/klipper-firmware-hero.jpg
slug: /projects/printer-klipper-firmware
related:
  - /projects/printer-voron-0.2
  - /projects/printer-voron-1.8
  - /projects/printer-voron-2.4
  - /projects/printer-am8
  - /projects/single-board-computers
tags:
  - Raspberry Pi
categories:
  - Software
keywords:
  - Klipper
---

# Table of contents

# MainsailOS

As Mainsail is my Klipper UI of choice I use [MainsailOS 2.1.0](https://docs-os.mainsail.xyz/) for my printers as many of the tools come installed by default.

# Update APT Repositories

One of the first things I do when setting up a new machine is to update apt to use the [Nexus repository](thinkcenter#sonatype-nexus-repository) to avoid downloading updates multiple times over the internet.

```sh
sudo nano /etc/apt/auth.conf.d/nexus.mikethomas.info.conf
sudo nano /etc/apt/sources.list
sudo nano /etc/apt/sources.list.d/raspi.list
```

# Klipper MOTD

This adds a nice splash screen to the console that is really useful when logging into the printer via SSH.

```sh
git clone https://www.github.com/tomaski/klipper-motd.git
chmod +x ./klipper-motd/setup.sh
sudo ./klipper-motd/setup.sh --install
```

1. Enter `Y` to add update check to dashboard

```sh
sudo motd-config
```

2. Select `OS Flavor` (Option 1)
3. Select theme you would like to use

# Kiauh

Kiauh stands for "Klipper Installation And Update Helper" it is a set of scripts making it easier to set up the tools required for Klipper.

```sh
git clone https://github.com/dw-0/kiauh.git
./kiauh/kiauh.sh
```

## Install KlipperScreen

1. Select `Install` (Option 1)
2. Select `KlipperScreen` (Option 5)
3. Press Enter to install as service (Default)
4. Press Enter to use Xserver (Default)
5. Press Enter to install NetworkManager (Default)

## Install PrettyGCode

1. Select `Install` (Option 1)
2. Select `PrettyGCode` (Option 7)
3. Press Enter to use port 7136 (Default)

# LDO Installer

The LDO Installer sets up the printer configurations specifically for LDO Motors printer kits. It also has a nice option to create a splash screen for KlipperScreen whilst the printer is booting up.

```sh
git clone https://github.com/MotorDynamicsLab/LDOInstaller.git
./LDOInstaller/LDOInstaller.sh
```

1. Select LDO Kit you have
2. Select printer size you have
3. Select `Splash Screen` (Option 7)
4. Select `Install` (Option 1)

# CandleLight Firmware

CandleLight Firmware is used for many boards connect the USB port of Raspberry Pi to CAN bus for 3D printing boards such as the [BigTreeTech U2C](https://github.com/bigtreetech/U2C).

```sh
git clone https://github.com/candle-usb/candleLight_fw
cd ~/candleLight_fw/
sudo apt install gcc-arm-none-eabi
mkdir build
cd build
cmake .. -DCMAKE_TOOLCHAIN_FILE=../cmake/gcc-arm-none-eabi-8-2019-q3-update.cmake
make candleLight_fw -j4
sudo dfu-util -a 0 -D ./candleLight_fw.bin --dfuse-address 0x08000000:force:mass-erase:leave -d 0483:df11
```

Create `/etc/network/interfaces.d/can0`:

```
allow-hotplug can0
iface can0 can static
    bitrate 1000000
    up ifconfig $IFACE txqueuelen 128
```

```sh
sudo reboot
~/klippy-env/bin/python ~/klipper/scripts/canbus_query.py can0
ip -s link show can0
```

# Katapult (formerly known as CanBoot)

[Katapult](https://github.com/Arksine/katapult) is a bootloader mainly for MCUs that use CAN bus, however it now also supports USB and UART interfaces.

We will check out the code now ready for use when we flash Klipper to the MCUs in the next section as not all boards will use it.

```sh
git clone https://github.com/Arksine/katapult
```

# Flash Klipper to MCU

Flashing the Klipper firmware to the MCU can be slightly different depending on the type of Micro-controller architecture that the MCU uses.

The basic firmware flashing steps are as follows:

```sh
cd ~/klipper/
make clean
make menuconfig
make
```

However, as I have many different controllers I have opted to use the `KCONFIG_CONFIG` method of configuring allowing me to save the multiple configs so they can be easily reused when I need to update the firmware.

You can find the configs used in the sections below in my [Klipper Config Firmware Repository](https://github.com/mikepthomas/klipper_config/tree/main/Firmware).

## Anet A8

This is the board that originally came with [my first 3D printer](printer).

### Klipper Firmware Configuration

#### USB

```sh
cd ~/klipper/
make clean
make menuconfig KCONFIG_CONFIG=config.anet_a8
```

Set the following configuration:

```
(Top)
                         Klipper Firmware Configuration
[ ] Enable extra low-level configuration options
    Micro-controller Architecture (Atmega AVR)  --->
    Processor model (atmega1284p)  --->
[Space/Enter] Toggle/enter      [?] Help            [/] Search
[Q] Quit (prompts for save)     [ESC] Leave menu
```

Backup config, Build and Flash to the board:

```sh
cp config.anet_a8 ../printer_data/config/Firmware/
make KCONFIG_CONFIG=config.anet_a8 -j4
avrdude -p atmega1284p -c arduino -b 57600 -P /dev/serial/by-id/usb-1a86_USB2.0-Serial-if00-port0 -U out/klipper.elf.hex
```

## Arduino Mega

Used by [RAMPS Shield](https://reprap.org/wiki/RAMPS_1.6).

### Klipper Firmware Configuration

#### USB

```sh
cd ~/klipper/
make clean
make menuconfig KCONFIG_CONFIG=config.arduino_mega
```

Set the following configuration:

```
(Top)
                         Klipper Firmware Configuration
[ ] Enable extra low-level configuration options
    Micro-controller Architecture (Atmega AVR)  --->
    Processor model (atmega2560)  --->
[Space/Enter] Toggle/enter      [?] Help            [/] Search
[Q] Quit (prompts for save)     [ESC] Leave menu
```

Backup config, Build and Flash to the board:

```sh
cp config.arduino_mega ../printer_data/config/Firmware/
make KCONFIG_CONFIG=config.arduino_mega -j4
make KCONFIG_CONFIG=config.arduino_mega flash FLASH_DEVICE=/dev/serial/by-id/usb-1a86_USB_Serial-if00-port0
```

## Arduino Uno

Used by [Arduino CNC Shield](https://all3dp.com/2/arduino-cnc-shield/).

### Klipper Firmware Configuration

#### USB

```sh
cd ~/klipper/
make clean
make menuconfig KCONFIG_CONFIG=config.arduino_uno
```

Set the following configuration:

```
(Top)
                         Klipper Firmware Configuration
[ ] Enable extra low-level configuration options
    Micro-controller Architecture (Atmega AVR)  --->
    Processor model (atmega328p)  --->
    Optional features (to reduce code size)  --->
[Space/Enter] Toggle/enter      [?] Help            [/] Search
[Q] Quit (prompts for save)     [ESC] Leave menu
```

As the firmware is too large to fit in the supplied flash, we also need to disable some features:

```
(Top) → Optional features (to reduce code size)
                         Klipper Firmware Configuration
[*] Support micro-controller based ADC (analog to digital)
[ ] Support communicating with external chips via SPI bus
[ ] Support communicating with external chips via I2C bus
[*] Support hardware PWM (pulse width modulation)
[*] Support GPIO based button reading
[ ] Support Trinamic stepper motor driver UART communication
[ ] Support 'neopixel' type LED control
[ ] Support measuring fan tachometer GPIO pins
    *** LCD chips ***
[*] Support ST7920 LCD display
[*] Support HD44780 LCD display
    *** External ADC type chips ***
[ ] Support HX711 and HX717 ADC chips
[Space/Enter] Toggle/enter      [?] Help            [/] Search
[Q] Quit (prompts for save)     [ESC] Leave menu
```

Backup config, Build and Flash to the board:

```sh
cp config.arduino_uno ../printer_data/config/Firmware/
make KCONFIG_CONFIG=config.arduino_uno -j4
make KCONFIG_CONFIG=config.arduino_uno flash FLASH_DEVICE=/dev/serial/by-id/usb-1a86_USB2.0-Serial-if00-port0
```

## Easy BRD

Get the most up to date info on the [official page](https://github.com/Tircown/ERCF-easy-brd).

This board will be used for the [6 channel Enraged Rabbit Carrot Feeder V1.1](enraged-rabbit-carrot-feeder-1.1).

### Klipper Firmware Configuration

#### USB

```sh
cd ~/klipper/
make clean
make menuconfig KCONFIG_CONFIG=config.easy_brd
```

Set the following configuration:

```
(Top)
                         Klipper Firmware Configuration
[ ] Enable extra low-level configuration options
    Micro-controller Architecture (SAMC21/SAMD21/SAMD51/SAME5x)  --->
    Processor model (SAMD21G18)  --->
    Bootloader offset (8KiB bootloader)  --->
    Clock Reference (Internal clock)  --->
    Communication interface (USB)  --->
[Space/Enter] Toggle/enter      [?] Help            [/] Search
[Q] Quit (prompts for save)     [ESC] Leave menu
```

Backup config, Build and Flash to the board:

```sh
cp config.easy_brd ../printer_data/config/Firmware/
make KCONFIG_CONFIG=config.easy_brd -j4
sudo apt install bossa-cli
sudo bossac -i -d -p /dev/ttyACM0 -e -w -v -R --offset=0x2000 out/klipper.bin
```

## EBB SB2240 CAN V1.0

Get the most up to date info on the [official page](https://github.com/bigtreetech/docs/blob/master/docs/EBB%202240%202209%20CAN.md).

This board will be used for the [Stealthburner](voron-stealthburner) on the [Voron 2.4](printer-voron-2.4) when I upgrade to CAN.

### Katapult Configuration

#### CAN Bus

```sh
cd ~/katapult/
make clean
make menuconfig KCONFIG_CONFIG=config.sb2240_can_katapult
cp config.sb2240_can_katapult ../printer_data/config/Firmware/
make KCONFIG_CONFIG=config.sb2240_can_katapult -j4
sudo dfu-util -a 0 -d 0483:df11 -s 0x08000000:mass-erase:force -D ~/katapult/out/katapult.bin
```

```
(Top)
                         Katapult Configuration
    Micro-controller Architecture (STMicroelectronics STM32)  --->
    Processor model (STM32G0B1)  --->
    Build Katapult deployment application (Do not build)  --->
    Clock Reference (8 MHz crystal)  --->
    Communication interface (CAN bus (on PB0/PB1))  --->
    Application start offset (8KiB offset)  --->
(1000000) CAN bus speed
()  GPIO pins to set on bootloader entry
[*] Support bootloader entry on rapid double click of reset button
[ ] Enable bootloader entry on button (or gpio) state
[*] Enable Status LED
(PA13)  Status LED GPIO Pin
[Space/Enter] Toggle/enter      [?] Help            [/] Search
[Q] Quit (prompts for save)     [ESC] Leave menu
```

#### USB

```sh
cd ~/katapult/
make clean
make menuconfig KCONFIG_CONFIG=config.sb2240_katapult
cp config.sb2240_katapult ../printer_data/config/Firmware/
make KCONFIG_CONFIG=config.sb2240_katapult -j4
sudo dfu-util -a 0 -d 0483:df11 -s 0x08000000:mass-erase:force -D ~/katapult/out/katapult.bin
```

```
(Top)
                         Katapult Configuration
    Micro-controller Architecture (STMicroelectronics STM32)  --->
    Processor model (STM32G0B1)  --->
    Build Katapult deployment application (Do not build)  --->
    Clock Reference (8 MHz crystal)  --->
    Communication interface (USB (on PA11/PA12))  --->
    Application start offset (8KiB offset)  --->
    USB ids  --->
()  GPIO pins to set on bootloader entry
[*] Support bootloader entry on rapid double click of reset button
[ ] Enable bootloader entry on button (or gpio) state
[*] Enable Status LED
(PA13)  Status LED GPIO Pin
[Space/Enter] Toggle/enter      [?] Help            [/] Search
[Q] Quit (prompts for save)     [ESC] Leave menu
```

### Klipper Firmware Configuration

#### CAN Bus

```sh
cd ~/klipper/
make clean
make menuconfig KCONFIG_CONFIG=config.sb2240_can_klipper
cp config.sb2240_can_klipper ../printer_data/config/Firmware/
make KCONFIG_CONFIG=config.sb2240_can_klipper -j4
make KCONFIG_CONFIG=config.sb2240_can_klipper flash FLASH_DEVICE=1209:beba
```

```
(Top)
                         Klipper Firmware Configuration
[*] Enable extra low-level configuration options
    Micro-controller Architecture (STMicroelectronics STM32)  --->
    Processor model (STM32G0B1)  --->
    Bootloader offset (8KiB bootloader)  --->
    Clock Reference (8 MHz crystal)  --->
    Communication interface (CAN bus (on PB0/PB1))  --->
(1000000) CAN bus speed
[*] Optimize stepper code for 'step on both edges'
()  GPIO pins to set at micro-controller startup
[Space/Enter] Toggle/enter      [?] Help            [/] Search
[Q] Quit (prompts for save)     [ESC] Leave menu
```

#### USB

```sh
cd ~/klipper/
make clean
make menuconfig KCONFIG_CONFIG=config.sb2240_klipper
cp config.sb2240_klipper ../printer_data/config/Firmware/
make KCONFIG_CONFIG=config.sb2240_klipper -j4
make KCONFIG_CONFIG=config.sb2240_klipper flash FLASH_DEVICE=/dev/serial/by-id/usb-Klipper_stm32g0b1xx_2C0048000950425539393020-if00
```

```
(Top)
                         Klipper Firmware Configuration
[*] Enable extra low-level configuration options
    Micro-controller Architecture (STMicroelectronics STM32)  --->
    Processor model (STM32G0B1)  --->
    Bootloader offset (8KiB bootloader)  --->
    Clock Reference (8 MHz crystal)  --->
    Communication interface (USB (on PA11/PA12))  --->
    USB ids  --->
[*] Optimize stepper code for 'step on both edges'
()  GPIO pins to set at micro-controller startup
[Space/Enter] Toggle/enter      [?] Help            [/] Search
[Q] Quit (prompts for save)     [ESC] Leave menu
```

## EBB36 V1.0

Get the most up to date info on the [official page](<https://github.com/bigtreetech/EBB/tree/master/EBB%20CAN%20V1.0%20(STM32F072)/EBB36%20CAN%20V1.0>).

### Katapult Configuration

#### USB

```sh
cd ~/katapult/
make clean
make menuconfig KCONFIG_CONFIG=config.ebb36_1.0_katapult
cp config.ebb36_1.0_katapult ../printer_data/config/Firmware/
make KCONFIG_CONFIG=config.ebb36_1.0_katapult -j4
sudo dfu-util -a 0 -D ~/katapult/out/katapult.bin --dfuse-address 0x08000000:force:mass-erase:leave -d 0483:df11
```

```
(Top)
                         Katapult Configuration
    Micro-controller Architecture (STMicroelectronics STM32)  --->
    Processor model (STM32F072)  --->
    Build Katapult deployment application (Do not build)  --->
    Clock Reference (8 MHz crystal)  --->
    Communication interface (USB (on PA11/PA12))  --->
    Application start offset (8KiB offset)  --->
    USB ids  --->
()  GPIO pins to set on bootloader entry
[*] Support bootloader entry on rapid double click of reset button
[ ] Enable bootloader entry on button (or gpio) state
[*] Enable Status LED
(PA14)  Status LED GPIO Pin
[Space/Enter] Toggle/enter      [?] Help            [/] Search
[Q] Quit (prompts for save)     [ESC] Leave menu
```

### Klipper Firmware Configuration

#### USB

```sh
cd ~/klipper/
make clean
make menuconfig KCONFIG_CONFIG=config.ebb36_1.0_klipper
cp config.ebb36_1.0_klipper ../printer_data/config/Firmware/
make KCONFIG_CONFIG=config.ebb36_1.0_klipper -j4
make KCONFIG_CONFIG=config.ebb36_1.0_klipper flash FLASH_DEVICE=/dev/serial/by-id/usb-katapult_stm32f072xb_1F003A000857435231343620-if00
```

```
(Top)
                         Klipper Firmware Configuration
[*] Enable extra low-level configuration options
    Micro-controller Architecture (STMicroelectronics STM32)  --->
    Processor model (STM32F072)  --->
    Bootloader offset (8KiB bootloader)  --->
    Clock Reference (8 MHz crystal)  --->
    Communication interface (USB (on PA11/PA12))  --->
    USB ids  --->
[*] Optimize stepper code for 'step on both edges'
()  GPIO pins to set at micro-controller startup
[Space/Enter] Toggle/enter      [?] Help            [/] Search
[Q] Quit (prompts for save)     [ESC] Leave menu
```

## EBB42 V1.1

Get the most up to date info on the [official page](<https://github.com/bigtreetech/EBB/tree/master/EBB%20CAN%20V1.1%20and%20V1.2%20(STM32G0B1)/EBB42%20CAN%20V1.1%20and%20V1.2>).

### Katapult Configuration

#### USB

```sh
cd ~/katapult/
make clean
make menuconfig KCONFIG_CONFIG=config.ebb42_1.1_katapult
cp config.ebb42_1.1_katapult ../printer_data/config/Firmware/
make KCONFIG_CONFIG=config.ebb42_1.1_katapult -j4
sudo dfu-util -a 0 -D ~/katapult/out/katapult.bin --dfuse-address 0x08000000:force:mass-erase:leave -d 0483:df11
```

```
(Top)
                         Katapult Configuration
    Micro-controller Architecture (STMicroelectronics STM32)  --->
    Processor model (STM32G0B1)  --->
    Build Katapult deployment application (Do not build)  --->
    Clock Reference (8 MHz crystal)  --->
    Communication interface (USB (on PA11/PA12))  --->
    Application start offset (8KiB offset)  --->
    USB ids  --->
()  GPIO pins to set on bootloader entry
[*] Support bootloader entry on rapid double click of reset button
[ ] Enable bootloader entry on button (or gpio) state
[*] Enable Status LED
(PA13)  Status LED GPIO Pin
[Space/Enter] Toggle/enter      [?] Help            [/] Search
[Q] Quit (prompts for save)     [ESC] Leave menu
```

### Klipper Firmware Configuration

#### USB

```sh
cd ~/klipper/
make clean
make menuconfig KCONFIG_CONFIG=config.ebb42_1.1_klipper
cp config.ebb42_1.1_klipper ../printer_data/config/Firmware/
make KCONFIG_CONFIG=config.ebb42_1.1_klipper -j4
make KCONFIG_CONFIG=config.ebb42_1.1_klipper flash FLASH_DEVICE=/dev/serial/by-id/usb-katapult_stm32g0b1xx_42004D001650415833323520-if00
```

```
(Top)
                         Klipper Firmware Configuration
[*] Enable extra low-level configuration options
    Micro-controller Architecture (STMicroelectronics STM32)  --->
    Processor model (STM32G0B1)  --->
    Bootloader offset (8KiB bootloader)  --->
    Clock Reference (8 MHz crystal)  --->
    Communication interface (USB (on PA11/PA12))  --->
    USB ids  --->
[*] Optimize stepper code for 'step on both edges'
()  GPIO pins to set at micro-controller startup
[Space/Enter] Toggle/enter      [?] Help            [/] Search
[Q] Quit (prompts for save)     [ESC] Leave menu
```

## Klipper Expander

Get the most up to date info on the [official page](https://github.com/VoronDesign/Voron-Hardware/blob/master/Klipper_Expander/Documentation/Setup_and_Flashing_Guide.md).

This board is used to control fans on the [Voron 1.8](printer-voron-1.8).

### Klipper Firmware Configuration

#### USB

```sh
cd ~/klipper/
make clean
make menuconfig KCONFIG_CONFIG=config.klipper_expander
```

Set the following configuration:

```
(Top)
                         Klipper Firmware Configuration
[*] Enable extra low-level configuration options
    Micro-controller Architecture (STMicroelectronics STM32)  --->
    Processor model (STM32F042)  --->
    Bootloader offset (No bootloader)  --->
    Clock Reference (Internal clock)  --->
    Communication interface (USB (on PA9/PA10))  --->
    USB ids  --->
    Optional features (to reduce code size)  --->
[*] Optimize stepper code for 'step on both edges'
()  GPIO pins to set at micro-controller startup
[Space/Enter] Toggle/enter      [?] Help            [/] Search
[Q] Quit (prompts for save)     [ESC] Leave menu
```

As the firmware is too large to fit in the supplied flash, we also need to disable some features:

```
(Top) → Optional features (to reduce code size)
                         Klipper Firmware Configuration
[*] Support micro-controller based ADC (analog to digital)
[*] Support communicating with external chips via SPI bus
[*]     Support software based SPI "bit-banging"
[*] Support communicating with external chips via I2C bus
[*]     Support software based I2C "bit-banging"
[*] Support GPIO based button reading
[ ] Support Trinamic stepper motor driver UART communication
[*] Support 'neopixel' type LED control
[*] Support measuring fan tachometer GPIO pins
    *** LCD chips ***
[*] Support ST7920 LCD display
[*] Support HD44780 LCD display
    *** Accelerometer chips ***
[*] Support adxl accelerometers
[*] Support lis2dw and lis3dh 3-axis accelerometers
[*] Support MPU accelerometers
[*] Support ICM20948 accelerometer
    *** External ADC type chips ***
[*] Support thermocouple MAX sensors
[*] Support HX711 and HX717 ADC chips
[*] Support ADS 1220 ADC chip
    *** Other external sensor chips ***
[ ] Support ldc1612 eddy current sensor
[ ] Support angle sensors
[Space/Enter] Toggle/enter      [?] Help            [/] Search
[Q] Quit (prompts for save)     [ESC] Leave menu
```

Install the boot jumper and reset the board to put the board into DFU mode.

Backup config, Build and Flash to the board:

```sh
cp config.klipper_expander ../printer_data/config/Firmware/
make KCONFIG_CONFIG=config.klipper_expander -j4
make KCONFIG_CONFIG=config.klipper_expander flash FLASH_DEVICE=0483:df11
```

## MMB CAN V1.0

Get the most up to date info on the [official page](https://github.com/bigtreetech/MMB).

This board will be used for the [8 channel Enraged Rabbit Carrot Feeder V2.0](enraged-rabbit-carrot-feeder-2.0).

### Katapult Configuration

#### CAN Bus

```sh
cd ~/katapult/
make clean
make menuconfig KCONFIG_CONFIG=config.mmb_can_1.0_can_katapult
cp config.mmb_can_1.0_can_katapult ../printer_data/config/Firmware/
make KCONFIG_CONFIG=config.mmb_can_1.0_can_katapult -j4
```

```
(Top)
                         Katapult Configuration
    Micro-controller Architecture (STMicroelectronics STM32)  --->
    Processor model (STM32G0B1)  --->
    Build Katapult deployment application (Do not build)  --->
    Clock Reference (8 MHz crystal)  --->
    Communication interface (CAN bus (on PB0/PB1))  --->
    Application start offset (8KiB offset)  --->
(1000000) CAN bus speed
()  GPIO pins to set on bootloader entry
[*] Support bootloader entry on rapid double click of reset button
[ ] Enable bootloader entry on button (or gpio) state
[ ] Enable Status LED
[Space/Enter] Toggle/enter      [?] Help            [/] Search
[Q] Quit (prompts for save)     [ESC] Leave menu
```

#### USB

```sh
cd ~/katapult/
make clean
make menuconfig KCONFIG_CONFIG=config.mmb_can_1.0_katapult
cp config.mmb_can_1.0_katapult ../printer_data/config/Firmware/
make KCONFIG_CONFIG=config.mmb_can_1.0_katapult -j4
```

```
(Top)
                         Katapult Configuration
    Micro-controller Architecture (STMicroelectronics STM32)  --->
    Processor model (STM32G0B1)  --->
    Build Katapult deployment application (Do not build)  --->
    Clock Reference (8 MHz crystal)  --->
    Communication interface (USB (on PA11/PA12))  --->
    Application start offset (8KiB offset)  --->
    USB ids  --->
()  GPIO pins to set on bootloader entry
[*] Support bootloader entry on rapid double click of reset button
[ ] Enable bootloader entry on button (or gpio) state
[ ] Enable Status LED
[Space/Enter] Toggle/enter      [?] Help            [/] Search
[Q] Quit (prompts for save)     [ESC] Leave menu
```

### Klipper Firmware Configuration

#### CAN Bus

```sh
cd ~/klipper/
make clean
make menuconfig KCONFIG_CONFIG=config.mmb_can_1.0_can_klipper
cp config.mmb_can_1.0_can_klipper ../printer_data/config/Firmware/
make KCONFIG_CONFIG=config.mmb_can_1.0_can_klipper -j4
```

```
(Top)
                         Klipper Firmware Configuration
[*] Enable extra low-level configuration options
    Micro-controller Architecture (STMicroelectronics STM32)  --->
    Processor model (STM32G0B1)  --->
    Bootloader offset (8KiB bootloader)  --->
    Clock Reference (8 MHz crystal)  --->
    Communication interface (CAN bus (on PB0/PB1))  --->
(1000000) CAN bus speed
[*] Optimize stepper code for 'step on both edges'
()  GPIO pins to set at micro-controller startup
[Space/Enter] Toggle/enter      [?] Help            [/] Search
[Q] Quit (prompts for save)     [ESC] Leave menu
```

#### USB

```sh
cd ~/klipper/
make clean
make menuconfig KCONFIG_CONFIG=config.mmb_can_1.0_klipper
cp config.mmb_can_1.0_klipper ../printer_data/config/Firmware/
make KCONFIG_CONFIG=config.mmb_can_1.0_klipper -j4
```

```
(Top)
                         Klipper Firmware Configuration
[*] Enable extra low-level configuration options
    Micro-controller Architecture (STMicroelectronics STM32)  --->
    Processor model (STM32G0B1)  --->
    Bootloader offset (8KiB bootloader)  --->
    Clock Reference (8 MHz crystal)  --->
    Communication interface (USB (on PA11/PA12))  --->
    USB ids  --->
[*] Optimize stepper code for 'step on both edges'
()  GPIO pins to set at micro-controller startup
[Space/Enter] Toggle/enter      [?] Help            [/] Search
[Q] Quit (prompts for save)     [ESC] Leave menu
```

## Picobilical

Get the most up to date info on the [official page](https://github.com/MotorDynamicsLab/LDO-Picobilical).

This board will be used for the [Voron 0.2](printer-voron-0.2).

### Klipper Firmware Configuration

#### USB

```sh
cd ~/klipper/
make clean
make menuconfig KCONFIG_CONFIG=config.picobilical
cp config.picobilical ../printer_data/config/Firmware/
make KCONFIG_CONFIG=config.picobilical -j4
```

```
(Top)
                         Klipper Firmware Configuration
[ ] Enable extra low-level configuration options
    Micro-controller Architecture (Raspberry Pi RP2040/RP235x)  --->
    Processor model (rp2040)  --->
    Bootloader offset (No bootloader)  --->
    Communication Interface (USBSERIAL)  --->
[Space/Enter] Toggle/enter      [?] Help            [/] Search
[Q] Quit (prompts for save)     [ESC] Leave menu
```

## PITB V1.0

Get the most up to date info on the [official page](https://github.com/kageurufu/PITB/tree/main/firmware).

This board will be used for the A/B Motors on the [Voron 2.4](printer-voron-2.4) when I upgrade to CAN.

### Katapult Configuration

#### CAN Bus

```sh
cd ~/katapult/
make clean
make menuconfig KCONFIG_CONFIG=config.pitb_can_katapult
cp config.pitb_can_katapult ../printer_data/config/Firmware/
make KCONFIG_CONFIG=config.pitb_can_katapult -j4
```

```
(Top)
                         Katapult Configuration
    Micro-controller Architecture (Raspberry Pi RP2040/RP235x)  --->
    Processor model (rp2040)  --->
    Flash chip (W25Q080 with CLKDIV 2)  --->
    Build Katapult deployment application (Do not build)  --->
    Communication Interface (CAN bus)  --->
(14) CAN RX gpio number
(13) CAN TX gpio number
(1000000) CAN bus speed
()  GPIO pins to set on bootloader entry
[*] Support bootloader entry on rapid double click of reset button
[ ] Enable bootloader entry on button (or gpio) state
[*] Enable Status LED
(gpio15) Status LED GPIO Pin
[Space/Enter] Toggle/enter      [?] Help            [/] Search
[Q] Quit (prompts for save)     [ESC] Leave menu
```

### Klipper Firmware Configuration

#### CAN Bus

```sh
cd ~/klipper/
make clean
make menuconfig KCONFIG_CONFIG=config.pitb_can_klipper
cp config.pitb_can_klipper ../printer_data/config/Firmware/
make KCONFIG_CONFIG=config.pitb_can_klipper -j4
```

```
(Top)
                         Klipper Firmware Configuration
[*] Enable extra low-level configuration options
    Micro-controller Architecture (Raspberry Pi RP2040/RP235x)  --->
    Processor model (rp2040)  --->
    Bootloader offset (16KiB bootloader)  --->
    Communication Interface (CAN bus)  --->
(14) CAN RX gpio number
(13) CAN TX gpio number
(1000000) CAN bus speed
[*] Optimize stepper code for 'step on both edges'
()  GPIO pins to set at micro-controller startup
[Space/Enter] Toggle/enter      [?] Help            [/] Search
[Q] Quit (prompts for save)     [ESC] Leave menu
```

#### USB

```sh
cd ~/klipper/
make clean
make menuconfig KCONFIG_CONFIG=config.pitb_klipper
cp config.pitb_klipper ../printer_data/config/Firmware/
make KCONFIG_CONFIG=config.pitb_klipper -j4
```

```
(Top)
                         Klipper Firmware Configuration
[*] Enable extra low-level configuration options
    Micro-controller Architecture (Raspberry Pi RP2040/RP235x)  --->
    Processor model (rp2040)  --->
    Bootloader offset (No bootloader)  --->
    Flash chip (W25Q080 with CLKDIV 2)  --->
    Communication Interface (USBSERIAL)  --->
    USB ids  --->
[*] Optimize stepper code for 'step on both edges'
()  GPIO pins to set at micro-controller startup
[Space/Enter] Toggle/enter      [?] Help            [/] Search
[Q] Quit (prompts for save)     [ESC] Leave menu
```

#### Flash

Hold the `Boot` boot button whilst connecting the MCU to the Raspberry Pi and run:

```sh
sudo mount /dev/sda1 /mnt
sudo cp out/klipper.uf2 /mnt
sudo umount /mnt
```

## SKR 1.4

Get the most up to date info on the [official page](https://github.com/bigtreetech/BIGTREETECH-SKR-V1.3/tree/master/BTT%20SKR%20V1.4).

There is also some useful information in the [Voron Design Documentation](https://docs.vorondesign.com/build/software/skr13_klipper.html).

This board is currently using [Marlin Firmware](https://marlinfw.org/) on my [Anet A8](printer-hardware-upgrades), but will be flashed with klipper when upgrading to the [AM8](printer-am8).

### Klipper Firmware Configuration

#### Serial

```sh
cd ~/klipper/
make clean
make menuconfig KCONFIG_CONFIG=config.skr_1.4_serial
```

Set the following configuration:

```
(Top)
                         Klipper Firmware Configuration
[ ] Enable extra low-level configuration options
    Micro-controller Architecture (LPC176x)  --->
    Processor model (lpc1768 (100 MHz))  --->
    Bootloader offset (16KiB bootloader)  --->
    Communication interface (Serial (on UART0 P0.3/P0.2))  --->
[Space/Enter] Toggle/enter      [?] Help            [/] Search
[Q] Quit (prompts for save)     [ESC] Leave menu
```

Backup config and Build:

```sh
cp config.skr_1.4_serial ../printer_data/config/Firmware/
make KCONFIG_CONFIG=config.skr_1.4_serial -j4
```

#### USB

```sh
cd ~/klipper/
make clean
make menuconfig KCONFIG_CONFIG=config.skr_1.4_usb
```

Set the following configuration:

```
(Top)
                         Klipper Firmware Configuration
[ ] Enable extra low-level configuration options
    Micro-controller Architecture (LPC176x)  --->
    Processor model (lpc1768 (100 MHz))  --->
    Bootloader offset (16KiB bootloader)  --->
    Communication interface (USB)  --->
[Space/Enter] Toggle/enter      [?] Help            [/] Search
[Q] Quit (prompts for save)     [ESC] Leave menu
```

Backup config and Build:

```sh
cp config.skr_1.4_usb ../printer_data/config/Firmware/
make KCONFIG_CONFIG=config.skr_1.4_usb -j4
```

#### Flash

For the initial flash we need to copy the file to a micro sd card.
The easiest way to do this is to copy `out/klipper.bin` to the klipper config directory:

```sh
cp out/klipper.bin ../printer_data/config/
```

You can then:

1. Download it to your local machine from the Mainsail web interface.
2. Copy the `klipper.bin` file to the root of the Micro SD card.
3. Rename `klipper.bin` to `firmware.bin`.
4. Eject the Micro SD card from the PC.
5. Disconnect the power to the MCU.
6. Insert the Micro SD card into the slot on the MCU.
7. Power on the MCU.
8. Check the firmware has flashed, file on the SD card will change to `firmware.cur`, if succesful.

> [!IMPORTANT]
> If the file is not named `firmware.bin`, the firmware will not be updated.

Subsequent flashes can then be done by using the following commands:

```sh
sudo service klipper stop
~/klipper/scripts/flash-sdcard.sh /dev/serial/by-id/usb-Klipper_lpc1769_1C10011425813AAFCED76B5CC22000F5-if00 btt-skr-v1.3
sudo service klipper start
```

## SKR 1.4 Turbo

Get the most up to date info on the [official page](https://github.com/bigtreetech/BIGTREETECH-SKR-V1.3/tree/master/BTT%20SKR%20V1.4).

There is also some useful information in the [Voron Design Documentation](https://docs.vorondesign.com/build/software/skr13_klipper.html).

This board is being used by the [Voron 1.8](printer-voron-1.8).

### Klipper Firmware Configuration

#### Serial

```sh
cd ~/klipper/
make clean
make menuconfig KCONFIG_CONFIG=config.skr_1.4_turbo_serial
```

Set the following configuration:

```
(Top)
                         Klipper Firmware Configuration
[ ] Enable extra low-level configuration options
    Micro-controller Architecture (LPC176x)  --->
    Processor model (lpc1769 (120 MHz))  --->
    Bootloader offset (16KiB bootloader)  --->
    Communication interface (Serial (on UART0 P0.3/P0.2))  --->
[Space/Enter] Toggle/enter      [?] Help            [/] Search
[Q] Quit (prompts for save)     [ESC] Leave menu
```

Backup config and Build:

```sh
cp config.skr_1.4_turbo_serial ../printer_data/config/Firmware/
make KCONFIG_CONFIG=config.skr_1.4_turbo_serial -j4
```

#### USB

```sh
cd ~/klipper/
make clean
make menuconfig KCONFIG_CONFIG=config.skr_1.4_turbo_usb
```

Set the following configuration:

```
(Top)
                         Klipper Firmware Configuration
[ ] Enable extra low-level configuration options
    Micro-controller Architecture (LPC176x)  --->
    Processor model (lpc1769 (120 MHz))  --->
    Bootloader offset (16KiB bootloader)  --->
    Communication interface (USB)  --->
[Space/Enter] Toggle/enter      [?] Help            [/] Search
[Q] Quit (prompts for save)     [ESC] Leave menu
```

Backup config and Build:

```sh
cp config.skr_1.4_turbo_usb ../printer_data/config/Firmware/
make KCONFIG_CONFIG=config.skr_1.4_turbo_usb -j4
```

#### Flash

For the initial flash we need to copy the file to a micro sd card.
The easiest way to do this is to copy `out/klipper.bin` to the klipper config directory:

```sh
cp out/klipper.bin ../printer_data/config/
```

You can then:

1. Download it to your local machine from the Mainsail web interface.
2. Copy the `klipper.bin` file to the root of the Micro SD card.
3. Rename `klipper.bin` to `firmware.bin`.
4. Eject the Micro SD card from the PC.
5. Disconnect the power to the MCU.
6. Insert the Micro SD card into the slot on the MCU.
7. Power on the MCU.
8. Check the firmware has flashed, file on the SD card will change to `firmware.cur`, if succesful.

> [!IMPORTANT]
> If the file is not named `firmware.bin`, the firmware will not be updated.

Subsequent flashes can then be done by using the following commands:

```sh
sudo service klipper stop
~/klipper/scripts/flash-sdcard.sh /dev/serial/by-id/usb-Klipper_lpc1769_1C10011425813AAFCED76B5CC22000F5-if00 btt-skr-v1.3
sudo service klipper start
```

## SKR Mini E3 V2.0

Get the most up to date info on the [official page](https://github.com/bigtreetech/BIGTREETECH-SKR-mini-E3/tree/master/hardware/BTT%20SKR%20MINI%20E3%20V2.0/Hardware).

There is also some useful information in the [Voron Design Documentation](https://docs.vorondesign.com/build/software/miniE3_v20_klipper.html).

This board will be used in the [Rook 2020](printer-rook).

### Klipper Firmware Configuration

#### USB

```sh
cd ~/klipper/
make clean
make menuconfig KCONFIG_CONFIG=config.skr_mini_e3
```

Set the following configuration:

```
(Top)
                         Klipper Firmware Configuration
[*] Enable extra low-level configuration options
    Micro-controller Architecture (STMicroelectronics STM32)  --->
    Processor model (STM32F103)  --->
[ ] Only 10KiB of RAM (for rare stm32f103x6 variant)
[ ] Disable SWD at startup (for GigaDevice stm32f103 clones)
    Bootloader offset (28KiB bootloader)  --->
    Clock Reference (8 MHz crystal)  --->
    Communication interface (USB (on PA11/PA12))  --->
    USB ids  --->
[*] Optimize stepper code for 'step on both edges'
(!PA14) GPIO pins to set at micro-controller startup
[Space/Enter] Toggle/enter      [?] Help            [/] Search
[Q] Quit (prompts for save)     [ESC] Leave menu
```

Backup config and Build:

```sh
cp config.skr_mini_e3 ../printer_data/config/Firmware/
make KCONFIG_CONFIG=config.skr_mini_e3 -j4
```

For the initial flash we need to copy the file to a micro sd card.
The easiest way to do this is to copy `out/klipper.bin` to the klipper config directory:

```sh
cp out/klipper.bin ../printer_data/config/
```

You can then:

1. Download it to your local machine from the Mainsail web interface.
2. Copy the `klipper.bin` file to the root of the Micro SD card.
3. Rename `klipper.bin` to `firmware.bin`.
4. Eject the Micro SD card from the PC.
5. Disconnect the power to the MCU.
6. Insert the Micro SD card into the slot on the MCU.
7. Power on the MCU.
8. Check the firmware has flashed, file on the SD card will change to `firmware.cur`, if succesful.

> [!IMPORTANT]
> If the file is not named `firmware.bin`, the firmware will not be updated.

Subsequent flashes can then be done by using the following commands:

```sh
sudo service klipper stop
~/klipper/scripts/flash-sdcard.sh /dev/serial/by-id/usb-Klipper_stm32f103xe_1C10011425813AAFCED76B5CC22000F5-if00 btt-skr-mini-e3-v2
sudo service klipper start
```

## SKR Pico

Get the most up to date info on the [official page](https://github.com/bigtreetech/SKR-Pico).

There is also some useful information in the [Voron Design Documentation](https://docs.vorondesign.com/build/software/skrPico_klipper.html).

This board will be used for the [Voron 0.2](printer-voron-0.2).

### Klipper Firmware Configuration

#### CAN

You will need a `CAN Transceiver Module` for this, I used [this SN65HVD230 Module](https://www.aliexpress.com/item/1005002843325046.html) connected to the `Raspberry Pi Serial Port`.

```sh
cd ~/klipper/
make clean
make menuconfig KCONFIG_CONFIG=config.skr_pico_can
```

Set the following configuration:

```
(Top)
                         Klipper Firmware Configuration
[*] Enable extra low-level configuration options
    Micro-controller Architecture (Raspberry Pi RP2040/RP235x)  --->
    Processor model (rp2040)  --->
    Bootloader offset (No bootloader)  --->
    Flash chip (W25Q080 with CLKDIV 2)  --->
    Communication Interface (USB to CAN bus bridge)  --->
(1) CAN RX gpio number
(0) CAN TX gpio number
    USB ids  --->
(500000) CAN bus speed
[*] Optimize stepper code for 'step on both edges'
()  GPIO pins to set at micro-controller startup
[Space/Enter] Toggle/enter      [?] Help            [/] Search
[Q] Quit (prompts for save)     [ESC] Leave menu
```

Backup config and Build:

```sh
cp config.skr_pico_can ../printer_data/config/Firmware/
make KCONFIG_CONFIG=config.skr_pico_can -j4
```

#### Serial

```sh
cd ~/klipper/
make clean
make menuconfig KCONFIG_CONFIG=config.skr_pico_serial
```

Set the following configuration:

```
(Top)
                         Klipper Firmware Configuration
[ ] Enable extra low-level configuration options
    Micro-controller Architecture (Raspberry Pi RP2040/RP235x)  --->
    Processor model (rp2040)  --->
    Bootloader offset (No bootloader)  --->
    Communication Interface (UART0 on GPIO0/GPIO1)  --->
[Space/Enter] Toggle/enter      [?] Help            [/] Search
[Q] Quit (prompts for save)     [ESC] Leave menu
```

Backup config and Build:

```sh
cp config.skr_pico_serial ../printer_data/config/Firmware/
make KCONFIG_CONFIG=config.skr_pico_serial -j4
```

#### USB

```sh
cd ~/klipper/
make clean
make menuconfig KCONFIG_CONFIG=config.skr_pico_usb
```

Set the following configuration:

```
(Top)
                         Klipper Firmware Configuration
[ ] Enable extra low-level configuration options
    Micro-controller Architecture (Raspberry Pi RP2040/RP235x)  --->
    Processor model (rp2040)  --->
    Bootloader offset (No bootloader)  --->
    Communication Interface (USBSERIAL)  --->
[Space/Enter] Toggle/enter      [?] Help            [/] Search
[Q] Quit (prompts for save)     [ESC] Leave menu
```

Backup config and Build:

```sh
cp config.skr_pico_usb ../printer_data/config/Firmware/
make KCONFIG_CONFIG=config.skr_pico_usb -j4
```

#### Flash

For the initial flash we need to install jumpers on the `USB Power` and `Boot` pins, connect the MCU to the Raspberry Pi and run:

```sh
sudo mount /dev/sda1 /mnt
sudo cp out/klipper.uf2 /mnt
sudo umount /mnt
```

Disconnect power from the MCU and remove the jumpers we installed earlier.

Subsequent flashes can then be done by using the following commands:

```sh
sudo service klipper stop
cd ~/klipper
make flash FLASH_DEVICE=/dev/serial/by-id/usb-Klipper_rp2040_1D0004001050563046363120-if00
sudo service klipper start
```

## Super8

Get the most up to date info on the [official page](https://mellow-3d.github.io/fly_super8.html).

This board will be used for the [Voron 2.4](printer-voron-2.4).

### Katapult Configuration

#### USB

```sh
cd ~/katapult/
make clean
make menuconfig KCONFIG_CONFIG=config.super8_katapult
```

Set the following configuration:

```
(Top)
                         Katapult Configuration
    Micro-controller Architecture (STMicroelectronics STM32)  --->
    Processor model (STM32F407)  --->
    Build Katapult deployment application (32KiB bootloader)  --->
    Clock Reference (8 MHz crystal)  --->
    Communication interface (USB (on PA11/PA12))  --->
    Application start offset (32KiB offset)  --->
    USB ids  --->
()  GPIO pins to set on bootloader entry
[*] Support bootloader entry on rapid double click of reset button
[ ] Enable bootloader entry on button (or gpio) state
[ ] Enable Status LED
[Space/Enter] Toggle/enter      [?] Help            [/] Search
[Q] Quit (prompts for save)     [ESC] Leave menu
```

Backup config and Build:

```sh
cp config.super8_katapult ../printer_data/config/Firmware/
make KCONFIG_CONFIG=config.super8_katapult -j4
```

For the initial flash we need to copy the file to a micro sd card.
The easiest way to do this is to copy `out/deployer.bin` to the klipper config directory:

```sh
cp out/deployer.bin ../printer_data/config/
```

You can then:

1. Download it to your local machine from the Mainsail web interface.
2. Copy the `deployer.bin` file to the root of the Micro SD card.
3. Rename `deployer.bin` to `firmware.bin`.
4. Eject the Micro SD card from the PC.
5. Insert the Micro SD card into the slot on the MCU.
6. Press the `RESET` button on the MCU.

Subsequent flashes can then be done by double pressing the `RESET` button on the MCU and then using the command:

```sh
python3 ~/katapult/scripts/flashtool.py -f ~/katapult/out/deployer.bin -d /dev/serial/by-id/usb-katapult_stm32f407xx_5A0034000250304235323120-if00
```

### Klipper Firmware Configuration

#### USB

```sh
cd ../klipper/
make clean
make menuconfig KCONFIG_CONFIG=config.super8_klipper
```

Set the following configuration:

```
(Top)
                         Klipper Firmware Configuration
[*] Enable extra low-level configuration options
    Micro-controller Architecture (STMicroelectronics STM32)  --->
    Processor model (STM32F407)  --->
    Bootloader offset (32KiB bootloader)  --->
    Clock Reference (8 MHz crystal)  --->
    Communication interface (USB (on PA11/PA12))  --->
    USB ids  --->
[*] Optimize stepper code for 'step on both edges'
()  GPIO pins to set at micro-controller startup
[Space/Enter] Toggle/enter      [?] Help            [/] Search
[Q] Quit (prompts for save)     [ESC] Leave menu
```

Backup config, Build and Flash to the board:

```sh
cp config.super8_klipper ../printer_data/config/Firmware/
make KCONFIG_CONFIG=config.super8_klipper -j4
make KCONFIG_CONFIG=config.super8_klipper flash FLASH_DEVICE=/dev/serial/by-id/usb-katapult_stm32f407xx_5A0034000250304235323120-if00
```

# RPi microcontroller

To get the most up-to-date info for the latest Klipper version visit the [Klipper RPi micro-controller setup guide](https://www.klipper3d.org/RPi_microcontroller.html).

## Install the RC Script

Copy and enable the `klipper-mcu.service` for systemd:

```sh
cd ~/klipper/
sudo cp ./scripts/klipper-mcu.service /etc/systemd/system/
sudo systemctl enable klipper-mcu.service
```

## Building the Micro-Controller Code

Configure the Klipper micro-controller code:

```sh
cd ~/klipper/
make clean
make menuconfig KCONFIG_CONFIG=config.rpi
cp config.rpi ../printer_data/config/Firmware/
```

Set `Micro-controller Architecture` to `Linux process`...

```
(Top)
                         Klipper Firmware Configuration
[ ] Enable extra low-level configuration options
    Micro-controller Architecture (Linux process)  --->
[Space/Enter] Toggle/enter      [?] Help            [/] Search
[Q] Quit (prompts for save)     [ESC] Leave menu
```

then save and exit and run:

```sh
sudo service klipper stop
make flash KCONFIG_CONFIG=config.rpi
sudo service klipper start
```

If klippy.log reports a `Permission denied` error when attempting to connect to `/tmp/klipper_host_mcu` then you need to add your user to the tty group. The following command will add the `pi` user to the `tty` group:

```sh
sudo usermod -a -G tty pi
```

## Optional: Interface Options

You can find the `Interface Options` in the Raspberry Pi Software Configuration Tool by running:

```sh
sudo raspi-config
```

```
┌─────────┤ Raspberry Pi Software Configuration Tool (raspi-config) ├──────────┐
│                                                                              │
│       1 System Options       Configure system settings                       │
│       2 Display Options      Configure display settings                      │
│      |3 Interface Options    Configure connections to peripherals     |      │
│       4 Performance Options  Configure performance settings                  │
│       5 Localisation Options Configure language and regional settings        │
│       6 Advanced Options     Configure advanced settings                     │
│       8 Update               Update this tool to the latest version          │
│       9 About raspi-config   Information about this configuration tool       │
│                                                                              │
│                                                                              │
│                                                                              │
│                                                                              │
│                                                                              │
│                     <Select>                     <Finish>                    │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Enabling SPI

SPI should be enabled automatically by the hat EEPROM, If you have trouble, you can enable it manually by selecting `SPI` under the `Interface Options` menu.

```
┌─────────┤ Raspberry Pi Software Configuration Tool (raspi-config) ├──────────┐
│                                                                              │
│    I1 SSH         Enable/disable remote command line access using SSH        │
│    I2 RPi Connect Enable/disable Raspberry Pi Connect                        │
│    I3 VNC         Enable/disable graphical remote desktop access             │
│   |I4 SPI         Enable/disable automatic loading of SPI kernel module |    │
│    I5 I2C         Enable/disable automatic loading of I2C kernel module      │
│    I6 Serial Port Enable/disable shell messages on the serial connection     │
│    I7 1-Wire      Enable/disable one-wire interface                          │
│    I8 Remote GPIO Enable/disable remote access to GPIO pins                  │
│                                                                              │
│                                                                              │
│                                                                              │
│                                                                              │
│                                                                              │
│                     <Select>                     <Back>                      │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Enabling I2C

I2C should be enabled automatically by the hat EEPROM, If you have trouble, you can enable it manually by selecting `I2C` under the `Interface Options` menu.

```
┌─────────┤ Raspberry Pi Software Configuration Tool (raspi-config) ├──────────┐
│                                                                              │
│    I1 SSH         Enable/disable remote command line access using SSH        │
│    I2 RPi Connect Enable/disable Raspberry Pi Connect                        │
│    I3 VNC         Enable/disable graphical remote desktop access             │
│    I4 SPI         Enable/disable automatic loading of SPI kernel module      │
│   |I5 I2C         Enable/disable automatic loading of I2C kernel module |    │
│    I6 Serial Port Enable/disable shell messages on the serial connection     │
│    I7 1-Wire      Enable/disable one-wire interface                          │
│    I8 Remote GPIO Enable/disable remote access to GPIO pins                  │
│                                                                              │
│                                                                              │
│                                                                              │
│                                                                              │
│                                                                              │
│                     <Select>                     <Back>                      │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

If planning to use I2C for the MPU accelerometer, it is also required to set the baud rate to 400000 by: adding/uncommenting `dtparam=i2c_arm=on,i2c_arm_baudrate=400000` in `/boot/config.txt` (or `/boot/firmware/config.txt` in some distros).
This should also be automatically be enabled by the hat EEPROM however you can do it manually if you have any problems.

### Enabling 1-wire

If you require, you can enable the 1-wire interface by selecting `1-Wire` under the `Interface Options` menu.

```
┌─────────┤ Raspberry Pi Software Configuration Tool (raspi-config) ├──────────┐
│                                                                              │
│    I1 SSH         Enable/disable remote command line access using SSH        │
│    I2 RPi Connect Enable/disable Raspberry Pi Connect                        │
│    I3 VNC         Enable/disable graphical remote desktop access             │
│    I4 SPI         Enable/disable automatic loading of SPI kernel module      │
│    I5 I2C         Enable/disable automatic loading of I2C kernel module      │
│    I6 Serial Port Enable/disable shell messages on the serial connection     │
│   |I7 1-Wire      Enable/disable one-wire interface                     |    │
│    I8 Remote GPIO Enable/disable remote access to GPIO pins                  │
│                                                                              │
│                                                                              │
│                                                                              │
│                                                                              │
│                                                                              │
│                     <Select>                     <Back>                      │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

you can then find any conneted sensors serial numbers with: `ls /sys/bus/w1/devices/`

## Optional: Identify the correct gpiochip

To install the Linux GPIO character device:

```sh
sudo apt install gpiod
```

To check available gpiochip run:

```sh
gpiodetect
```

To check the pin number and the pin availability run:

```sh
gpioinfo
```

## Optional: Hardware PWM

Raspberry Pi's have two PWM channels (PWM0 and PWM1) which are exposed on the header or if not, can be routed to existing gpio pins. The Linux mcu daemon uses the pwmchip sysfs interface to control hardware pwm devices on Linux hosts. The pwm sysfs interface is not exposed by default on a Raspberry and can be activated by adding a line to `/boot/config.txt`:

```ini
# Enable pwmchip sysfs interface
dtoverlay=pwm,pin=12,func=4
```

This example enables only PWM0 and routes it to gpio12. If both PWM channels need to be enabled you can use `pwm-2chan`:

```ini
# Enable pwmchip sysfs interface
dtoverlay=pwm-2chan,pin=12,pin2=13,func=4,func2=4
```

The overlay does not expose the pwm line on sysfs on boot and needs to be exported by echo'ing the number of the pwm channel to `/sys/class/pwm/pwmchip0/export`:

```sh
# Enable pwmchip sysfs interface
echo 0 > /sys/class/pwm/pwmchip0/export
```

If you have enabled `pwm-2chan` you can enable PWM1 too with:

```sh
# Enable pwmchip sysfs interface
echo 0 > /sys/class/pwm/pwmchip0/export
echo 1 > /sys/class/pwm/pwmchip0/export
```

This will create device `/sys/class/pwm/pwmchip0/pwm0` and optionally `/sys/class/pwm/pwmchip0/pwm1` in the filesystem. The easiest way to do this is by adding them to `/etc/rc.local` before the `exit 0` line.

With the sysfs in place, you can now use either the pwm channel(s) by adding the following piece of configuration to your board's config file:

```ini
[fan_generic fan1]
pin=rpi:pwmchip0/pwm0
pwm=True
hardware_pwm=True
cycle_time=0.000001
```

This will add hardware pwm control to gpio12 on the Pi (because the overlay was configured to route pwm0 to pin=12).

PWM0 can be routed to gpio12 and gpio18, PWM1 can be routed to gpio13 and gpio19:

| PWM | gpio PIN | Func |
| --- | -------- | ---- |
| 0   | 12       | 4    |
| 0   | 18       | 2    |
| 1   | 13       | 4    |
| 1   | 19       | 2    |

# Create Flash MCU Convenience Script

```sh
nano flash-mcu.sh
chmod +x flash-mcu.sh
./flash-mcu.sh
```

Example:

```sh
cd ~/klipper/
make clean
read -p "Press Enter to configure RPI MCU" </dev/tty
make menuconfig KCONFIG_CONFIG=config.rpi
cp config.rpi ../printer_data/config/Firmware/
echo "Flashing RPI MCU"
sudo service klipper stop
make flash KCONFIG_CONFIG=config.rpi
sudo service klipper start
```

# Resonance Compensation

Get the most up to date info on the [official page](https://www.klipper3d.org/Measuring_Resonances.html)

```sh
sudo apt update
sudo apt install python3-numpy python3-matplotlib libatlas-base-dev libopenblas-dev
~/klippy-env/bin/pip install -v "numpy<1.26"
```

Then check no errors from the command:

```sh
~/klippy-env/bin/python -c 'import numpy;'
```

# Setup Crowsnest

Get the most up to date info on the [official page](https://crowsnest.mainsail.xyz/configuration/cam-section).

# Fix for RepRapDiscount 128x64 Full Graphic Smart Controller

My Full Graphic Smart Controller Display is showing the same issue as described in the GitHub issue [RepRap Display doesn't work properly](https://github.com/Klipper3d/klipper/issues/5089)

```sh
cd ~/klipper/src/
mv lcd_st7920.c lcd_st7920.c.bak
wget https://github.com/Stout69/For-Klipper/raw/main/lcd_st7920.c
cd ../klippy/extras/display/
mv st7920.py st7920.py.bak
wget https://github.com/Stout69/For-Klipper/raw/main/st7920.py
```

Then recompile klipper for the MCU (See above)

> [!WARNING]
> I have retried these steps recently, however the problem in the GitHub issue still persists.
>
> Since Klipper no longer uses GitHub issues for it's issue tracker, [I have created a post in config-support Channel on Discord](https://discord.com/channels/431557959978450984/1412458895254749366/1412458895254749366).

# KlipperScreen Fix

When installing KlipperScreen via kiauh you may get [Cannot open virtual Console](https://klipperscreen.readthedocs.io/en/latest/Troubleshooting/VC_ERROR/) error in the log:

```
xf86OpenConsole: Cannot open virtual console 2 (Permission denied)
```

To fix this run the following:

```sh
cat /etc/X11/Xwrapper.config
```

This should have the line `allowed_users=anybody` in it.

Next run:

```sh
cat /etc/group | grep tty
```

If your username is not listed under that line, you need to add it with the following command:

```sh
usermod -a -G tty $USER
```

Add `needs_root_rights=yes` to `/etc/X11/Xwrapper.config`:

```sh
sudo bash -c "echo needs_root_rights=yes>>/etc/X11/Xwrapper.config"
sudo service KlipperScreen restart
systemctl status KlipperScreen
```
