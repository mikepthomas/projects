/*
 * Copyright (c) 2016-2026, Mike Thomas
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

export default function ColorMenu(children: ReactNode) {
  switch (Children.toArray(children).toString()) {
    // Header
    case '(Top)\n':
      return <Header>(Top)</Header>;

    // Micro-controller Architecture
    case '    Micro-controller Architecture (Atmega AVR)  --->\n':
      return (
        <Background>
          <Menu>    Micro-controller Architecture (Atmega AVR)  ---&gt;</Menu>
        </Background>
      );
    case '    Micro-controller Architecture (Linux process)  --->\n':
      return (
        <Background>
              Micro-controller Architecture (Linux process)  ---&gt;
          <Menu> </Menu>
        </Background>
      );
    case '    Micro-controller Architecture (LPC176x)  --->\n':
      return (
        <Background>
          <Menu>    Micro-controller Architecture (LPC176x)  ---&gt;</Menu>
        </Background>
      );
    case '    Micro-controller Architecture (Raspberry Pi RP2040/RP235x)  --->\n':
      return (
        <Background>
          <Menu>
                Micro-controller Architecture (Raspberry Pi
            RP2040/RP235x)  ---&gt;
          </Menu>
        </Background>
      );
    case '    Micro-controller Architecture (SAMC21/SAMD21/SAMD51/SAME5x)  --->\n':
      return (
        <Background>
          <Menu>
                Micro-controller Architecture
            (SAMC21/SAMD21/SAMD51/SAME5x)  ---&gt;
          </Menu>
        </Background>
      );
    case '    Micro-controller Architecture (STMicroelectronics STM32)  --->\n':
      return (
        <Background>
          <Menu>
                Micro-controller Architecture (STMicroelectronics
            STM32)  ---&gt;
          </Menu>
        </Background>
      );

    // Processor model
    case '    Processor model (atmega1284p)  --->\n':
      return (
        <Background>
              Processor model (atmega1284p)  ---&gt;
          <Menu> </Menu>
        </Background>
      );
    case '    Processor model (atmega2560)  --->\n':
      return (
        <Background>
              Processor model (atmega2560)  ---&gt;
          <Menu> </Menu>
        </Background>
      );
    case '    Processor model (atmega328p)  --->\n':
      return (
        <Background>
              Processor model (atmega328p)  ---&gt;
          <Menu> </Menu>
        </Background>
      );
    case '    Processor model (lpc1768 (100 MHz))  --->\n':
      return (
        <Background>
              Processor model (lpc1768 (100 MHz))  ---&gt;
          <Menu> </Menu>
        </Background>
      );
    case '    Processor model (lpc1769 (120 MHz))  --->\n':
      return (
        <Background>
              Processor model (lpc1769 (120 MHz))  ---&gt;
          <Menu> </Menu>
        </Background>
      );
    case '    Processor model (rp2040)  --->\n':
      return (
        <Background>
              Processor model (rp2040)  ---&gt;
          <Menu> </Menu>
        </Background>
      );
    case '    Processor model (SAMD21G18)  --->\n':
      return (
        <Background>
              Processor model (SAMD21G18)  ---&gt;
          <Menu> </Menu>
        </Background>
      );
    case '    Processor model (STM32F042)  --->\n':
      return (
        <Background>
              Processor model (STM32F042)  ---&gt;
          <Menu> </Menu>
        </Background>
      );
    case '    Processor model (STM32F072)  --->\n':
      return (
        <Background>
              Processor model (STM32F072)  ---&gt;
          <Menu> </Menu>
        </Background>
      );
    case '    Processor model (STM32F103)  --->\n':
      return (
        <Background>
              Processor model (STM32F103)  ---&gt;
          <Menu> </Menu>
        </Background>
      );
    case '    Processor model (STM32F407)  --->\n':
      return (
        <Background>
              Processor model (STM32F407)  ---&gt;
          <Menu> </Menu>
        </Background>
      );
    case '    Processor model (STM32G0B1)  --->\n':
      return (
        <Background>
              Processor model (STM32G0B1)  ---&gt;
          <Menu> </Menu>
        </Background>
      );

    // Footer
    case '[Space/Enter] Toggle/enter      [?] Help            [/] Search\n':
      return (
        <>
          <Background>
            <Menu>&nbsp;</Menu>
          </Background>
          <Banner>&nbsp;</Banner>
          <Header>[Space/Enter] Toggle/enter [?] Help [/] Search</Header>
        </>
      );
    case '[Q] Quit (prompts for save)     [ESC] Leave menu\n':
      return <Header>[Q] Quit (prompts for save) [ESC] Leave menu</Header>;

    default:
      return children;
  }
}

export { default as ColorKatapult } from './katapult';
export { default as ColorKlipper } from './klipper';
