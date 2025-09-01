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
import { Background, Banner, Header, Menu } from '../menus';

export default function ColorKlipper(children: ReactNode) {
  switch (Children.toArray(children).toString()) {
    // Header
    case '(Top) → Optional features (to reduce code size)\n':
      return <Header>(Top) → Optional features (to reduce code size)</Header>;
    case '                         Klipper Firmware Configuration\n':
      return <Banner>Klipper Firmware Configuration</Banner>;

    // Main Menu
    case '[ ] Enable extra low-level configuration options\n':
      return (
        <Background>
          <Menu>[ ] Enable extra low-level configuration options</Menu>
        </Background>
      );
    case '[*] Enable extra low-level configuration options\n':
      return (
        <Background>
          <Menu>[*] Enable extra low-level configuration options</Menu>
        </Background>
      );
    case '    Bootloader offset (No bootloader)  --->\n':
      return (
        <Background>
          <Menu>    Bootloader offset (No bootloader)  ---&gt;</Menu>
        </Background>
      );
    case '    Bootloader offset (8KiB bootloader)  --->\n':
      return (
        <Background>
          <Menu>    Bootloader offset (8KiB bootloader)  ---&gt;</Menu>
        </Background>
      );
    case '    Bootloader offset (16KiB bootloader)  --->\n':
      return (
        <Background>
          <Menu>    Bootloader offset (16KiB bootloader)  ---&gt;</Menu>
        </Background>
      );
    case '    Bootloader offset (32KiB bootloader)  --->\n':
      return (
        <Background>
          <Menu>    Bootloader offset (32KiB bootloader)  ---&gt;</Menu>
        </Background>
      );
    case '    Clock Reference (8 MHz crystal)  --->\n':
      return (
        <Background>
          <Menu>    Clock Reference (8 MHz crystal)  ---&gt;</Menu>
        </Background>
      );
    case '    Clock Reference (Internal clock)  --->\n':
      return (
        <Background>
          <Menu>    Clock Reference (Internal clock)  ---&gt;</Menu>
        </Background>
      );
    case '    Flash chip (W25Q080 with CLKDIV 2)  --->\n':
      return (
        <Background>
          <Menu>    Flash chip (W25Q080 with CLKDIV 2)  ---&gt;</Menu>
        </Background>
      );
    case '    Communication Interface (CAN bus)  --->\n':
      return (
        <Background>
          <Menu>    Communication Interface (CAN bus)  ---&gt;</Menu>
        </Background>
      );
    case '    Communication interface (CAN bus (on PB0/PB1))  --->\n':
      return (
        <Background>
          <Menu>
                Communication interface (CAN bus (on PB0/PB1))  ---&gt;
          </Menu>
        </Background>
      );
    case '    Communication interface (Serial (on UART0 P0.3/P0.2))  --->\n':
      return (
        <Background>
          <Menu>
                Communication interface (Serial (on UART0 P0.3/P0.2))  ---&gt;
          </Menu>
        </Background>
      );
    case '    Communication Interface (UART0 on GPIO0/GPIO1)  --->\n':
      return (
        <Background>
          <Menu>
                Communication Interface (UART0 on GPIO0/GPIO1)  ---&gt;
          </Menu>
        </Background>
      );
    case '    Communication interface (USB)  --->\n':
      return (
        <Background>
          <Menu>    Communication interface (USB)  ---&gt;</Menu>
        </Background>
      );
    case '    Communication interface (USB (on PA9/PA10))  --->\n':
      return (
        <Background>
          <Menu>    Communication interface (USB (on PA9/PA10))  ---&gt;</Menu>
        </Background>
      );
    case '    Communication interface (USB (on PA11/PA12))  --->\n':
      return (
        <Background>
          <Menu>    Communication interface (USB (on PA11/PA12))  ---&gt;</Menu>
        </Background>
      );
    case '    Communication Interface (USB to CAN bus bridge)  --->\n':
      return (
        <Background>
          <Menu>
                Communication Interface (USB to CAN bus bridge)  ---&gt;
          </Menu>
        </Background>
      );
    case '    Communication Interface (USBSERIAL)  --->\n':
      return (
        <Background>
          <Menu>    Communication Interface (USBSERIAL)  ---&gt;</Menu>
        </Background>
      );
    case '(1) CAN RX gpio number\n':
      return (
        <Background>
          <Menu>(1) CAN RX gpio number</Menu>
        </Background>
      );
    case '(14) CAN RX gpio number\n':
      return (
        <Background>
          <Menu>(14) CAN RX gpio number</Menu>
        </Background>
      );
    case '(0) CAN TX gpio number\n':
      return (
        <Background>
          <Menu>(0) CAN TX gpio number</Menu>
        </Background>
      );
    case '(13) CAN TX gpio number\n':
      return (
        <Background>
          <Menu>(13) CAN TX gpio number</Menu>
        </Background>
      );
    case '(500000) CAN bus speed\n':
      return (
        <Background>
          <Menu>(500000) CAN bus speed</Menu>
        </Background>
      );
    case '(1000000) CAN bus speed\n':
      return (
        <Background>
          <Menu>(1000000) CAN bus speed</Menu>
        </Background>
      );
    case '    USB ids  --->\n':
      return (
        <Background>
          <Menu>    USB ids  ---&gt;</Menu>
        </Background>
      );
    case '    Optional features (to reduce code size)  --->\n':
      return (
        <Background>
          <Menu>    Optional features (to reduce code size)  ---&gt;</Menu>
        </Background>
      );
    case "[*] Optimize stepper code for 'step on both edges'\n":
      return (
        <Background>
          <Menu>[*] Optimize stepper code for 'step on both edges'</Menu>
        </Background>
      );
    case '()  GPIO pins to set at micro-controller startup\n':
      return (
        <Background>
          <Menu>() GPIO pins to set at micro-controller startup</Menu>
        </Background>
      );

    // Optional features Menu
    case '[*] Support micro-controller based ADC (analog to digital)\n':
      return (
        <Background>
          [*] Support micro-controller based ADC (analog to digital)
          <Menu> </Menu>
        </Background>
      );
    case '[ ] Support communicating with external chips via SPI bus\n':
      return (
        <Background>
          <Menu>[ ] Support communicating with external chips via SPI bus</Menu>
        </Background>
      );
    case '[*] Support communicating with external chips via SPI bus\n':
      return (
        <Background>
          <Menu>[*] Support communicating with external chips via SPI bus</Menu>
        </Background>
      );
    case '[*]     Support software based SPI "bit-banging"\n':
      return (
        <Background>
          <Menu>[*]     Support software based SPI "bit-banging"</Menu>
        </Background>
      );
    case '[ ] Support communicating with external chips via I2C bus\n':
      return (
        <Background>
          <Menu>[ ] Support communicating with external chips via I2C bus</Menu>
        </Background>
      );
    case '[*] Support communicating with external chips via I2C bus\n':
      return (
        <Background>
          <Menu>[*] Support communicating with external chips via I2C bus</Menu>
        </Background>
      );
    case '[*]     Support software based I2C "bit-banging"\n':
      return (
        <Background>
          <Menu>[*]     Support software based I2C "bit-banging"</Menu>
        </Background>
      );
    case '[*] Support hardware PWM (pulse width modulation)\n':
      return (
        <Background>
          <Menu>[*] Support hardware PWM (pulse width modulation)</Menu>
        </Background>
      );
    case '[*] Support GPIO based button reading\n':
      return (
        <Background>
          <Menu>[*] Support GPIO based button reading</Menu>
        </Background>
      );
    case '[ ] Support Trinamic stepper motor driver UART communication\n':
      return (
        <Background>
          <Menu>
            [ ] Support Trinamic stepper motor driver UART communication
          </Menu>
        </Background>
      );
    case "[ ] Support 'neopixel' type LED control\n":
      return (
        <Background>
          <Menu>[ ] Support 'neopixel' type LED control</Menu>
        </Background>
      );
    case "[*] Support 'neopixel' type LED control\n":
      return (
        <Background>
          <Menu>[*] Support 'neopixel' type LED control</Menu>
        </Background>
      );
    case '[ ] Support measuring fan tachometer GPIO pins\n':
      return (
        <Background>
          <Menu>[ ] Support measuring fan tachometer GPIO pins</Menu>
        </Background>
      );
    case '[*] Support measuring fan tachometer GPIO pins\n':
      return (
        <Background>
          <Menu>[*] Support measuring fan tachometer GPIO pins</Menu>
        </Background>
      );
    case '    *** LCD chips ***\n':
      return (
        <Background>
          <Menu>    *** LCD chips ***</Menu>
        </Background>
      );
    case '[*] Support ST7920 LCD display\n':
      return (
        <Background>
          <Menu>[*] Support ST7920 LCD display</Menu>
        </Background>
      );
    case '[*] Support HD44780 LCD display\n':
      return (
        <Background>
          <Menu>[*] Support HD44780 LCD display</Menu>
        </Background>
      );
    case '    *** Accelerometer chips ***\n':
      return (
        <Background>
          <Menu>    *** Accelerometer chips ***</Menu>
        </Background>
      );
    case '[*] Support adxl accelerometers\n':
      return (
        <Background>
          <Menu>[*] Support adxl accelerometers</Menu>
        </Background>
      );
    case '[*] Support lis2dw and lis3dh 3-axis accelerometers\n':
      return (
        <Background>
          <Menu>[*] Support lis2dw and lis3dh 3-axis accelerometers</Menu>
        </Background>
      );
    case '[*] Support MPU accelerometers\n':
      return (
        <Background>
          <Menu>[*] Support MPU accelerometers</Menu>
        </Background>
      );
    case '[*] Support ICM20948 accelerometer\n':
      return (
        <Background>
          <Menu>[*] Support ICM20948 accelerometer</Menu>
        </Background>
      );
    case '    *** External ADC type chips ***\n':
      return (
        <Background>
          <Menu>    *** External ADC type chips ***</Menu>
        </Background>
      );
    case '[*] Support thermocouple MAX sensors\n':
      return (
        <Background>
          <Menu>[*] Support thermocouple MAX sensors</Menu>
        </Background>
      );
    case '[ ] Support HX711 and HX717 ADC chips\n':
      return (
        <Background>
          <Menu>[ ] Support HX711 and HX717 ADC chips</Menu>
        </Background>
      );
    case '[*] Support HX711 and HX717 ADC chips\n':
      return (
        <Background>
          <Menu>[*] Support HX711 and HX717 ADC chips</Menu>
        </Background>
      );
    case '[*] Support ADS 1220 ADC chip\n':
      return (
        <Background>
          <Menu>[*] Support ADS 1220 ADC chip</Menu>
        </Background>
      );
    case '    *** Other external sensor chips ***\n':
      return (
        <Background>
          <Menu>    *** Other external sensor chips ***</Menu>
        </Background>
      );
    case '[ ] Support ldc1612 eddy current sensor\n':
      return (
        <Background>
          <Menu>[ ] Support ldc1612 eddy current sensor</Menu>
        </Background>
      );
    case '[ ] Support angle sensors\n':
      return (
        <Background>
          <Menu>[ ] Support angle sensors</Menu>
        </Background>
      );

    default:
      return children;
  }
}
