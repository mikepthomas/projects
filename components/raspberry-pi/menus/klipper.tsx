/*
 * Copyright (c) 2016-2025, Mike Thomas
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * * Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 * * Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */
import { Children, ReactNode } from 'react';
import { Banner, Header, Menu, Selected } from '../menuconfig';

export default function ColorKlipper(children: ReactNode) {
  switch (Children.toArray(children).toString()) {
    // Header
    case '(Top) → Optional features (to reduce code size)\n':
      return <Header>(Top) → Optional features (to reduce code size)</Header>;
    case '                                        Klipper Firmware Configuration\n':
      return <Banner>Klipper Firmware Configuration</Banner>;

    // Main Menu
    case '[ ] Enable extra low-level configuration options\n':
      return <Menu>[ ] Enable extra low-level configuration options</Menu>;
    case '[*] Enable extra low-level configuration options\n':
      return <Menu>[*] Enable extra low-level configuration options</Menu>;
    case '    Micro-controller Architecture (Atmega AVR)  --->\n':
      return (
        <Menu>    Micro-controller Architecture (Atmega AVR)  ---&gt;</Menu>
      );
    case '    Micro-controller Architecture (Linux process)  --->\n':
      return (
        <Menu>
          <Selected>
                Micro-controller Architecture (Linux process)  ---&gt;
          </Selected>
        </Menu>
      );
    case '    Micro-controller Architecture (LPC176x)  --->\n':
      return <Menu>    Micro-controller Architecture (LPC176x)  ---&gt;</Menu>;
    case '    Micro-controller Architecture (Raspberry Pi RP2040/RP235x)  --->\n':
      return (
        <Menu>
              Micro-controller Architecture (Raspberry Pi
          RP2040/RP235x)  ---&gt;
        </Menu>
      );
    case '    Micro-controller Architecture (SAMC21/SAMD21/SAMD51/SAME5x)  --->\n':
      return (
        <Menu>
              Micro-controller Architecture
          (SAMC21/SAMD21/SAMD51/SAME5x)  ---&gt;
        </Menu>
      );
    case '    Micro-controller Architecture (STMicroelectronics STM32)  --->\n':
      return (
        <Menu>
              Micro-controller Architecture (STMicroelectronics STM32)  ---&gt;
        </Menu>
      );
    case '    Processor model (atmega1284p)  --->\n':
      return (
        <Menu>
          <Selected>    Processor model (atmega1284p)  ---&gt;</Selected>
        </Menu>
      );
    case '    Processor model (atmega2560)  --->\n':
      return (
        <Menu>
          <Selected>    Processor model (atmega2560)  ---&gt;</Selected>
        </Menu>
      );
    case '    Processor model (atmega328p)  --->\n':
      return (
        <Menu>
          <Selected>    Processor model (atmega328p)  ---&gt;</Selected>
        </Menu>
      );
    case '    Processor model (lpc1768 (100 MHz))  --->\n':
      return (
        <Menu>
          <Selected>    Processor model (lpc1768 (100 MHz))  ---&gt;</Selected>
        </Menu>
      );
    case '    Processor model (lpc1769 (120 MHz))  --->\n':
      return (
        <Menu>
          <Selected>    Processor model (lpc1769 (120 MHz))  ---&gt;</Selected>
        </Menu>
      );
    case '    Processor model (rp2040)  --->\n':
      return (
        <Menu>
          <Selected>    Processor model (rp2040)  ---&gt;</Selected>
        </Menu>
      );
    case '    Processor model (SAMD21G18)  --->\n':
      return (
        <Menu>
          <Selected>    Processor model (SAMD21G18)  ---&gt;</Selected>
        </Menu>
      );
    case '    Processor model (STM32F042)  --->\n':
      return (
        <Menu>
          <Selected>    Processor model (STM32F042)  ---&gt;</Selected>
        </Menu>
      );
    case '    Processor model (STM32F072)  --->\n':
      return (
        <Menu>
          <Selected>    Processor model (STM32F072)  ---&gt;</Selected>
        </Menu>
      );
    case '    Processor model (STM32F407)  --->\n':
      return (
        <Menu>
          <Selected>    Processor model (STM32F407)  ---&gt;</Selected>
        </Menu>
      );
    case '    Processor model (STM32G0B1)  --->\n':
      return (
        <Menu>
          <Selected>    Processor model (STM32G0B1)  ---&gt;</Selected>
        </Menu>
      );
    case '    Bootloader offset (No bootloader)  --->\n':
      return <Menu>    Bootloader offset (No bootloader)  ---&gt;</Menu>;
    case '    Bootloader offset (8KiB bootloader)  --->\n':
      return <Menu>    Bootloader offset (8KiB bootloader)  ---&gt;</Menu>;
    case '    Bootloader offset (16KiB bootloader)  --->\n':
      return <Menu>    Bootloader offset (16KiB bootloader)  ---&gt;</Menu>;
    case '    Bootloader offset (32KiB bootloader)  --->\n':
      return <Menu>    Bootloader offset (32KiB bootloader)  ---&gt;</Menu>;
    case '    Clock Reference (8 MHz crystal)  --->\n':
      return <Menu>    Clock Reference (8 MHz crystal)  ---&gt;</Menu>;
    case '    Clock Reference (Internal clock)  --->\n':
      return <Menu>    Clock Reference (Internal clock)  ---&gt;</Menu>;
    case '    Flash chip (W25Q080 with CLKDIV 2)  --->\n':
      return <Menu>    Flash chip (W25Q080 with CLKDIV 2)  ---&gt;</Menu>;
    case '    Communication Interface (CAN bus)  --->\n':
      return <Menu>    Communication Interface (CAN bus)  ---&gt;</Menu>;
    case '    Communication interface (CAN bus (on PB0/PB1))  --->\n':
      return (
        <Menu>    Communication interface (CAN bus (on PB0/PB1))  ---&gt;</Menu>
      );
    case '    Communication interface (Serial (on UART0 P0.3/P0.2))  --->\n':
      return (
        <Menu>
              Communication interface (Serial (on UART0 P0.3/P0.2))  ---&gt;
        </Menu>
      );
    case '    Communication Interface (UART0 on GPIO0/GPIO1)  --->\n':
      return (
        <Menu>    Communication Interface (UART0 on GPIO0/GPIO1)  ---&gt;</Menu>
      );
    case '    Communication interface (USB)  --->\n':
      return <Menu>    Communication interface (USB)  ---&gt;</Menu>;
    case '    Communication interface (USB (on PA9/PA10))  --->\n':
      return (
        <Menu>    Communication interface (USB (on PA9/PA10))  ---&gt;</Menu>
      );
    case '    Communication interface (USB (on PA11/PA12))  --->\n':
      return (
        <Menu>    Communication interface (USB (on PA11/PA12))  ---&gt;</Menu>
      );
    case '    Communication Interface (USB to CAN bus bridge)  --->\n':
      return (
        <Menu>
              Communication Interface (USB to CAN bus bridge)  ---&gt;
        </Menu>
      );
    case '    Communication Interface (USBSERIAL)  --->\n':
      return <Menu>    Communication Interface (USBSERIAL)  ---&gt;</Menu>;
    case '(1) CAN RX gpio number\n':
      return <Menu>(1) CAN RX gpio number</Menu>;
    case '(14) CAN RX gpio number\n':
      return <Menu>(14) CAN RX gpio number</Menu>;
    case '(0) CAN TX gpio number\n':
      return <Menu>(0) CAN TX gpio number</Menu>;
    case '(13) CAN TX gpio number\n':
      return <Menu>(13) CAN TX gpio number</Menu>;
    case '(500000) CAN bus speed\n':
      return <Menu>(500000) CAN bus speed</Menu>;
    case '(1000000) CAN bus speed\n':
      return <Menu>(1000000) CAN bus speed</Menu>;
    case '    USB ids  --->\n':
      return <Menu>    USB ids  ---&gt;</Menu>;
    case '    Optional features (to reduce code size)  --->\n':
      return <Menu>    Optional features (to reduce code size)  ---&gt;</Menu>;
    case "[*] Optimize stepper code for 'step on both edges'\n":
      return <Menu>[*] Optimize stepper code for 'step on both edges'</Menu>;
    case '()  GPIO pins to set at micro-controller startup\n':
      return <Menu>() GPIO pins to set at micro-controller startup</Menu>;

    // Optional features Menu
    case '[*] Support micro-controller based ADC (analog to digital)\n':
      return (
        <Menu>
          <Selected>
            [*] Support micro-controller based ADC (analog to digital)
          </Selected>
        </Menu>
      );
    case '[ ] Support communicating with external chips via SPI bus\n':
      return (
        <Menu>[ ] Support communicating with external chips via SPI bus</Menu>
      );
    case '[*] Support communicating with external chips via SPI bus\n':
      return (
        <Menu>[*] Support communicating with external chips via SPI bus</Menu>
      );
    case '[*]     Support software based SPI "bit-banging"\n':
      return <Menu>[*]     Support software based SPI "bit-banging"</Menu>;
    case '[ ] Support communicating with external chips via I2C bus\n':
      return (
        <Menu>[ ] Support communicating with external chips via I2C bus</Menu>
      );
    case '[*] Support communicating with external chips via I2C bus\n':
      return (
        <Menu>[*] Support communicating with external chips via I2C bus</Menu>
      );
    case '[*]     Support software based I2C "bit-banging"\n':
      return <Menu>[*]     Support software based I2C "bit-banging"</Menu>;
    case '[*] Support hardware PWM (pulse width modulation)\n':
      return <Menu>[*] Support hardware PWM (pulse width modulation)</Menu>;
    case '[*] Support GPIO based button reading\n':
      return <Menu>[*] Support GPIO based button reading</Menu>;
    case '[ ] Support Trinamic stepper motor driver UART communication\n':
      return (
        <Menu>
          [ ] Support Trinamic stepper motor driver UART communication
        </Menu>
      );
    case "[ ] Support 'neopixel' type LED control\n":
      return <Menu>[ ] Support 'neopixel' type LED control</Menu>;
    case "[*] Support 'neopixel' type LED control\n":
      return <Menu>[*] Support 'neopixel' type LED control</Menu>;
    case '[ ] Support measuring fan tachometer GPIO pins\n':
      return <Menu>[ ] Support measuring fan tachometer GPIO pins</Menu>;
    case '[*] Support measuring fan tachometer GPIO pins\n':
      return <Menu>[*] Support measuring fan tachometer GPIO pins</Menu>;
    case '    *** LCD chips ***\n':
      return <Menu>    *** LCD chips ***</Menu>;
    case '[*] Support ST7920 LCD display\n':
      return <Menu>[*] Support ST7920 LCD display</Menu>;
    case '[*] Support HD44780 LCD display\n':
      return <Menu>[*] Support HD44780 LCD display</Menu>;
    case '    *** Accelerometer chips ***\n':
      return <Menu>    *** Accelerometer chips ***</Menu>;
    case '[*] Support adxl accelerometers\n':
      return <Menu>[*] Support adxl accelerometers</Menu>;
    case '[*] Support lis2dw and lis3dh 3-axis accelerometers\n':
      return <Menu>[*] Support lis2dw and lis3dh 3-axis accelerometers</Menu>;
    case '[*] Support MPU accelerometers\n':
      return <Menu>[*] Support MPU accelerometers</Menu>;
    case '[*] Support ICM20948 accelerometer\n':
      return <Menu>[*] Support ICM20948 accelerometer</Menu>;
    case '    *** External ADC type chips ***\n':
      return <Menu>    *** External ADC type chips ***</Menu>;
    case '[*] Support thermocouple MAX sensors\n':
      return <Menu>[*] Support thermocouple MAX sensors</Menu>;
    case '[ ] Support HX711 and HX717 ADC chips\n':
      return <Menu>[ ] Support HX711 and HX717 ADC chips</Menu>;
    case '[*] Support HX711 and HX717 ADC chips\n':
      return <Menu>[*] Support HX711 and HX717 ADC chips</Menu>;
    case '[*] Support ADS 1220 ADC chip\n':
      return <Menu>[*] Support ADS 1220 ADC chip</Menu>;
    case '    *** Other external sensor chips ***\n':
      return <Menu>    *** Other external sensor chips ***</Menu>;
    case '[ ] Support ldc1612 eddy current sensor\n':
      return <Menu>[ ] Support ldc1612 eddy current sensor</Menu>;
    case '[ ] Support angle sensors\n':
      return <Menu>[ ] Support angle sensors</Menu>;

    default:
      return children;
  }
}
