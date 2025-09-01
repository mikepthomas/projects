---
title: Klipper Firmware
heading: Configuring the software to run a 3D Printer
date: 2025-08-29T22:45:11.067Z
lastmod: 2025-08-30T23:45:25.299Z
author: Mike Thomas
description: Configuring MainsailOS with all the software to run Klipper on my 3D Printer.
preview: /assets/blog/printer-klipper-firmware/klipper-firmware-hero.jpg
slug: /projects/printer-klipper-firmware
related:
  - /projects/printer-voron-0.2
  - /projects/printer-voron-1.8
  - /projects/printer-voron-2.4
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
    bitrate 500000
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

### Klipper Firmware Configuration

#### USB

```sh
cd ~/klipper/
make clean
make menuconfig KCONFIG_CONFIG=config.anet_a8
cp config.anet_a8 ../printer_data/config/Firmware/
make KCONFIG_CONFIG=config.anet_a8 -j4
```

```
(Top)
                         Klipper Firmware Configuration
[ ] Enable extra low-level configuration options
    Micro-controller Architecture (Atmega AVR)  --->
    Processor model (atmega1284p)  --->
[Space/Enter] Toggle/enter      [?] Help            [/] Search
[Q] Quit (prompts for save)     [ESC] Leave menu
```

## Arduino Mega

### Klipper Firmware Configuration

#### USB

```sh
cd ~/klipper/
make clean
make menuconfig KCONFIG_CONFIG=config.arduino_mega
cp config.arduino_mega ../printer_data/config/Firmware/
make KCONFIG_CONFIG=config.arduino_mega -j4
```

```
(Top)
                         Klipper Firmware Configuration
[ ] Enable extra low-level configuration options
    Micro-controller Architecture (Atmega AVR)  --->
    Processor model (atmega2560)  --->
[Space/Enter] Toggle/enter      [?] Help            [/] Search
[Q] Quit (prompts for save)     [ESC] Leave menu
```

## Arduino Uno

### Klipper Firmware Configuration

#### USB

```sh
cd ~/klipper/
make clean
make menuconfig KCONFIG_CONFIG=config.arduino_uno
cp config.arduino_uno ../printer_data/config/Firmware/
make KCONFIG_CONFIG=config.arduino_uno -j4
```

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

## Easy BRD

Get the most up to date info on the [official page](https://github.com/Tircown/ERCF-easy-brd).

### Klipper Firmware Configuration

#### USB

```sh
cd ~/klipper/
make clean
make menuconfig KCONFIG_CONFIG=config.easy_brd
cp config.easy_brd ../printer_data/config/Firmware/
make KCONFIG_CONFIG=config.easy_brd -j4
sudo apt install bossa-cli
sudo bossac -i -d -p /dev/ttyACM1 -e -w -v -R --offset=0x2000 out/klipper.bin
```

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

## EBB SB2240 CAN V1.0

Get the most up to date info on the [official page](https://github.com/bigtreetech/docs/blob/master/docs/EBB%202240%202209%20CAN.md).

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

### Klipper Firmware Configuration

#### USB

```sh
cd ~/klipper/
make clean
make menuconfig KCONFIG_CONFIG=config.klipper_expander
cp config.klipper_expander ../printer_data/config/Firmware/
make KCONFIG_CONFIG=config.klipper_expander -j4
```

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

## PITB

Get the most up to date info on the [official page](https://github.com/kageurufu/PITB/tree/main/firmware).

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
[ ] Enable Status LED
[Space/Enter] Toggle/enter      [?] Help            [/] Search
[Q] Quit (prompts for save)     [ESC] Leave menu
```

#### USB

```sh
cd ~/katapult/
make clean
make menuconfig KCONFIG_CONFIG=config.pitb_katapult
cp config.pitb_katapult ../printer_data/config/Firmware/
make KCONFIG_CONFIG=config.pitb_katapult -j4
```

```
(Top)
                         Katapult Configuration
    Micro-controller Architecture (Raspberry Pi RP2040/RP235x)  --->
    Processor model (rp2040)  --->
    Flash chip (W25Q080 with CLKDIV 2)  --->
    Build Katapult deployment application (Do not build)  --->
    Communication Interface (USBSERIAL)  --->
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
    Bootloader offset (16KiB bootloader)  --->
    Communication Interface (USBSERIAL)  --->
    USB ids  --->
[*] Optimize stepper code for 'step on both edges'
()  GPIO pins to set at micro-controller startup
[Space/Enter] Toggle/enter      [?] Help            [/] Search
[Q] Quit (prompts for save)     [ESC] Leave menu
```

## SKR 1.4

Get the most up to date info on the [official page](https://github.com/bigtreetech/BIGTREETECH-SKR-V1.3/tree/master/BTT%20SKR%20V1.4).

### Klipper Firmware Configuration

#### Serial

```sh
cd ~/klipper/
make clean
make menuconfig KCONFIG_CONFIG=config.skr_1.4_serial
cp config.skr_1.4_serial ../printer_data/config/Firmware/
make KCONFIG_CONFIG=config.skr_1.4_serial -j4
```

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

#### USB

```sh
cd ~/klipper/
make clean
make menuconfig KCONFIG_CONFIG=config.skr_1.4_usb
cp config.skr_1.4_usb ../printer_data/config/Firmware/
make KCONFIG_CONFIG=config.skr_1.4_usb -j4
```

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

## SKR 1.4 Turbo

Get the most up to date info on the [official page](https://github.com/bigtreetech/BIGTREETECH-SKR-V1.3/tree/master/BTT%20SKR%20V1.4).

### Klipper Firmware Configuration

#### Serial

```sh
cd ~/klipper/
make clean
make menuconfig KCONFIG_CONFIG=config.skr_1.4_turbo_serial
cp config.skr_1.4_turbo_serial ../printer_data/config/Firmware/
make KCONFIG_CONFIG=config.skr_1.4_turbo_serial -j4
```

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

#### USB

```sh
cd ~/klipper/
make clean
make menuconfig KCONFIG_CONFIG=config.skr_1.4_turbo_usb
cp config.skr_1.4_turbo_usb ../printer_data/config/Firmware/
make KCONFIG_CONFIG=config.skr_1.4_turbo_usb -j4
```

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

## SKR Pico

Get the most up to date info on the [official page](https://github.com/bigtreetech/SKR-Pico).

### Klipper Firmware Configuration

#### CAN

```sh
cd ~/klipper/
make clean
make menuconfig KCONFIG_CONFIG=config.skr_pico_can
cp config.skr_pico_can ../printer_data/config/Firmware/
make KCONFIG_CONFIG=config.skr_pico_can -j4
```

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

#### Serial

```sh
cd ~/klipper/
make clean
make menuconfig KCONFIG_CONFIG=config.skr_pico_serial
cp config.skr_pico_serial ../printer_data/config/Firmware/
make KCONFIG_CONFIG=config.skr_pico_serial -j4
```

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

#### USB

```sh
cd ~/klipper/
make clean
make menuconfig KCONFIG_CONFIG=config.skr_pico_usb
cp config.skr_pico_usb ../printer_data/config/Firmware/
make KCONFIG_CONFIG=config.skr_pico_usb -j4
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

## Super8

Get the most up to date info on the [official page](https://mellow-3d.github.io/fly_super8.html).

### Katapult Configuration

```sh
cd ~/katapult/
make clean
make menuconfig KCONFIG_CONFIG=config.super8_katapult
cp config.super8_katapult ../printer_data/config/Firmware/
make KCONFIG_CONFIG=config.super8_katapult -j4
cp out/deployer.bin ../printer_data/config/
```

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

### Klipper Firmware Configuration

```sh
cd ../klipper/
make clean
make menuconfig KCONFIG_CONFIG=config.super8_klipper
cp config.super8_klipper ../printer_data/config/Firmware/
make KCONFIG_CONFIG=config.super8_klipper -j4
make KCONFIG_CONFIG=config.super8_klipper flash FLASH_DEVICE=/dev/serial/by-id/usb-katapult_stm32f407xx_5A0034000250304235323120-if00
```

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

```sh
# Enable pwmchip sysfs interface
dtoverlay=pwm,pin=12,func=4
```

This example enables only PWM0 and routes it to gpio12. If both PWM channels need to be enabled you can use `pwm-2chan`:

```sh
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

```sh
[fan_generic fan1]
pin: rpi:pwmchip0/pwm0
pwm: True
hardware_pwm: True
cycle_time: 0.000001
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

```sh
cd klipper/src/
mv lcd_st7920.c lcd_st7920.c.bak
wget https://github.com/Stout69/For-Klipper/raw/main/lcd_st7920.c
cd ../klippy/extras/display/
mv st7920.py st7920.py.bak
wget https://github.com/Stout69/For-Klipper/raw/main/st7920.py
```

Then recompile klipper for the MCU (See above)

# KlipperScreen Fix

Install KlipperScreen via kiauh.

```sh
systemctl status KlipperScreen
cat /etc/X11/Xwrapper.config
cat /etc/group | grep tty
sudo bash -c "echo needs_root_rights=yes>>/etc/X11/Xwrapper.config"
sudo service KlipperScreen restart
systemctl status KlipperScreen
```
