/*
 * Copyright (c) 2016-2024, Mike Thomas
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

import {
  D,
  Fi,
  GPIOBot,
  GPIOTop,
  I,
  MetalPackageBot,
  MetalPackageTop,
  MetalSoC,
  Pin,
  PinHeader,
  RaspberryPi,
  S,
  SilkScreen,
  USB,
  USBConnector,
  Wi,
} from '../raspberry-pi';

export default function ColorBoards(children: ReactNode) {
  switch (Children.toArray(children).toString()) {
    // Pi Model 3A+
    case '| 1ooooooooooooooooooo  RUN|\n':
      return (
        <RaspberryPi>
          | 
          <GPIOBot />
            RUN|
        </RaspberryPi>
      );
    case '|  Wi                    1o|\n':
      return (
        <RaspberryPi>
          | 
          <Wi />
                             <PinHeader>1o</PinHeader>|
        </RaspberryPi>
      );
    case '|  Fi  Pi Model 3A+ V1.0   |\n':
      return (
        <RaspberryPi>
          | 
          <Fi /> <SilkScreen>Pi Model 3A+ V1.0</SilkScreen>   |
        </RaspberryPi>
      );
    case '| |D     ,---.          +====\n':
      return (
        <RaspberryPi>
          | 
          <D left />
               
          <MetalPackageTop />
                    
          <USB />
        </RaspberryPi>
      );
    case '| |S     |SoC|          | USB\n':
      return (
        <RaspberryPi>
          | 
          <S left metal />
               
          <MetalSoC />
                    
          <USBConnector />
        </RaspberryPi>
      );
    case "| |I     `---'          +====\n":
      return (
        <RaspberryPi>
          | 
          <I left metal />
               
          <MetalPackageBot />
                    
          <USB />
        </RaspberryPi>
      );
    // Pi Model 3B  V1.2
    case '|      Pi Model 3B  V1.2         |\n':
      return (
        <RaspberryPi>
          |      <SilkScreen>Pi Model 3B  V1.2</SilkScreen>         |
        </RaspberryPi>
      );
    // Pi Model 3B+
    case '| oooooooooooooooooooo J8 PoE +====\n':
      return (
        <RaspberryPi>
          | 
          <GPIOTop />
           J8 PoE 
          <USB />
        </RaspberryPi>
      );
    case '| 1ooooooooooooooooooo   12   | USB\n':
      return (
        <RaspberryPi>
          | 
          <GPIOBot />
             <PinHeader>12</PinHeader>   
          <USBConnector />
        </RaspberryPi>
      );
    case '|  Wi                    oo   +====\n':
      return (
        <RaspberryPi>
          | 
          <Wi />
                             
          <Pin />
          <Pin />
             
          <USB />
        </RaspberryPi>
      );
    case '|  Fi  Pi Model 3B+ V1.3         |\n':
      return (
        <RaspberryPi>
          | 
          <Fi /> <SilkScreen>Pi Model 3B+ V1.3</SilkScreen>         |
        </RaspberryPi>
      );
    case '| |D     ,---.           1o   +====\n':
      return (
        <RaspberryPi>
          | 
          <D left />
               
          <MetalPackageTop />
                     
          <PinHeader>1o</PinHeader>   
          <USB />
        </RaspberryPi>
      );
    case '| |S     |SoC|            RUN | USB\n':
      return (
        <RaspberryPi>
          | 
          <S left metal />
               
          <MetalSoC />
                      RUN 
          <USBConnector />
        </RaspberryPi>
      );
    case "| |I     `---'                +====\n":
      return (
        <RaspberryPi>
          | 
          <I left metal />
               
          <MetalPackageBot />
                          
          <USB />
        </RaspberryPi>
      );
    default:
      return children;
  }
}
