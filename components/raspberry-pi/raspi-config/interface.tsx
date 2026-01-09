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
import { Background, Menu, Selected, Shadow } from '../menus';

export default function ColorInterface(children: ReactNode) {
  switch (Children.toArray(children).toString()) {
    // Menu Items
    case '│    I1 SSH         Enable/disable remote command line access using SSH        │\n':
      return (
        <Background>
          <span className="d-none d-md-block d-lg-none d-xl-block">     </span>
          <span className="d-none d-xl-block">     </span>
          <span className="d-none d-xxl-block">        </span>
          <Menu>
            │    I1 SSH         Enable/disable remote command line access using
            SSH        │
          </Menu>
          <Shadow> </Shadow>
          <span className="d-none d-md-block d-lg-none d-xl-block">     </span>
          <span className="d-none d-xl-block">     </span>
          <span className="d-none d-xxl-block">        </span>
        </Background>
      );
    case '│    I2 RPi Connect Enable/disable Raspberry Pi Connect                        │\n':
      return (
        <Background>
          <span className="d-none d-md-block d-lg-none d-xl-block">     </span>
          <span className="d-none d-xl-block">     </span>
          <span className="d-none d-xxl-block">        </span>
          <Menu>
            │    I2 RPi Connect Enable/disable Raspberry Pi
            Connect                        │
          </Menu>
          <Shadow> </Shadow>
          <span className="d-none d-md-block d-lg-none d-xl-block">     </span>
          <span className="d-none d-xl-block">     </span>
          <span className="d-none d-xxl-block">        </span>
        </Background>
      );
    case '│    I3 VNC         Enable/disable graphical remote desktop access             │\n':
      return (
        <Background>
          <span className="d-none d-md-block d-lg-none d-xl-block">     </span>
          <span className="d-none d-xl-block">     </span>
          <span className="d-none d-xxl-block">        </span>
          <Menu>
            │    I3 VNC         Enable/disable graphical remote desktop
            access             │
          </Menu>
          <Shadow> </Shadow>
          <span className="d-none d-md-block d-lg-none d-xl-block">     </span>
          <span className="d-none d-xl-block">     </span>
          <span className="d-none d-xxl-block">        </span>
        </Background>
      );
    case '│    I4 SPI         Enable/disable automatic loading of SPI kernel module      │\n':
      return (
        <Background>
          <span className="d-none d-md-block d-lg-none d-xl-block">     </span>
          <span className="d-none d-xl-block">     </span>
          <span className="d-none d-xxl-block">        </span>
          <Menu>
            │    I4 SPI         Enable/disable automatic loading of SPI kernel
            module      │
          </Menu>
          <Shadow> </Shadow>
          <span className="d-none d-md-block d-lg-none d-xl-block">     </span>
          <span className="d-none d-xl-block">     </span>
          <span className="d-none d-xxl-block">        </span>
        </Background>
      );
    case '│   |I4 SPI         Enable/disable automatic loading of SPI kernel module |    │\n':
      return (
        <Background>
          <span className="d-none d-md-block d-lg-none d-xl-block">     </span>
          <span className="d-none d-xl-block">     </span>
          <span className="d-none d-xxl-block">        </span>
          <Menu>
            │    
            <Selected>
              I4 SPI         Enable/disable automatic loading of SPI kernel
              module 
            </Selected>
                 │
          </Menu>
          <Shadow> </Shadow>
          <span className="d-none d-md-block d-lg-none d-xl-block">     </span>
          <span className="d-none d-xl-block">     </span>
          <span className="d-none d-xxl-block">        </span>
        </Background>
      );
    case '│    I5 I2C         Enable/disable automatic loading of I2C kernel module      │\n':
      return (
        <Background>
          <span className="d-none d-md-block d-lg-none d-xl-block">     </span>
          <span className="d-none d-xl-block">     </span>
          <span className="d-none d-xxl-block">        </span>
          <Menu>
            │    I5 I2C         Enable/disable automatic loading of I2C kernel
            module      │
          </Menu>
          <Shadow> </Shadow>
          <span className="d-none d-md-block d-lg-none d-xl-block">     </span>
          <span className="d-none d-xl-block">     </span>
          <span className="d-none d-xxl-block">        </span>
        </Background>
      );
    case '│   |I5 I2C         Enable/disable automatic loading of I2C kernel module |    │\n':
      return (
        <Background>
          <span className="d-none d-md-block d-lg-none d-xl-block">     </span>
          <span className="d-none d-xl-block">     </span>
          <span className="d-none d-xxl-block">        </span>
          <Menu>
            │    
            <Selected>
              I5 I2C         Enable/disable automatic loading of I2C kernel
              module 
            </Selected>
                 │
          </Menu>
          <Shadow> </Shadow>
          <span className="d-none d-md-block d-lg-none d-xl-block">     </span>
          <span className="d-none d-xl-block">     </span>
          <span className="d-none d-xxl-block">        </span>
        </Background>
      );
    case '│    I6 Serial Port Enable/disable shell messages on the serial connection     │\n':
      return (
        <Background>
          <span className="d-none d-md-block d-lg-none d-xl-block">     </span>
          <span className="d-none d-xl-block">     </span>
          <span className="d-none d-xxl-block">        </span>
          <Menu>
            │    I6 Serial Port Enable/disable shell messages on the serial
            connection     │
          </Menu>
          <Shadow> </Shadow>
          <span className="d-none d-md-block d-lg-none d-xl-block">     </span>
          <span className="d-none d-xl-block">     </span>
          <span className="d-none d-xxl-block">        </span>
        </Background>
      );
    case '│    I7 1-Wire      Enable/disable one-wire interface                          │\n':
      return (
        <Background>
          <span className="d-none d-md-block d-lg-none d-xl-block">     </span>
          <span className="d-none d-xl-block">     </span>
          <span className="d-none d-xxl-block">        </span>
          <Menu>
            │    I7 1-Wire      Enable/disable one-wire
            interface                          │
          </Menu>
          <Shadow> </Shadow>
          <span className="d-none d-md-block d-lg-none d-xl-block">     </span>
          <span className="d-none d-xl-block">     </span>
          <span className="d-none d-xxl-block">        </span>
        </Background>
      );
    case '│   |I7 1-Wire      Enable/disable one-wire interface                     |    │\n':
      return (
        <Background>
          <span className="d-none d-md-block d-lg-none d-xl-block">     </span>
          <span className="d-none d-xl-block">     </span>
          <span className="d-none d-xxl-block">        </span>
          <Menu>
            │    
            <Selected>
              I7 1-Wire      Enable/disable one-wire
              interface                     
            </Selected>
                 │
          </Menu>
          <Shadow> </Shadow>
          <span className="d-none d-md-block d-lg-none d-xl-block">     </span>
          <span className="d-none d-xl-block">     </span>
          <span className="d-none d-xxl-block">        </span>
        </Background>
      );
    case '│    I8 Remote GPIO Enable/disable remote access to GPIO pins                  │\n':
      return (
        <Background>
          <span className="d-none d-md-block d-lg-none d-xl-block">     </span>
          <span className="d-none d-xl-block">     </span>
          <span className="d-none d-xxl-block">        </span>
          <Menu>
            │    I8 Remote GPIO Enable/disable remote access to GPIO
            pins                  │
          </Menu>
          <Shadow> </Shadow>
          <span className="d-none d-md-block d-lg-none d-xl-block">     </span>
          <span className="d-none d-xl-block">     </span>
          <span className="d-none d-xxl-block">        </span>
        </Background>
      );

    default:
      return children;
  }
}
