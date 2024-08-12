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
  A,
  C,
  D,
  GPIOBottom,
  GPIOTop,
  HDMI,
  HDMIConnector,
  I,
  MetalConnector,
  Net,
  NetConnector,
  Plastic,
  PlasticPackage,
  PlasticSoC,
  RaspberryPi,
  S,
  SilkScreen,
  U,
  USB,
  USBConnector,
  USBPower,
  V,
  X,
  Zero,
} from '../raspberry-pi';

export default function ColorBoards(children: ReactNode) {
  switch (Children.toArray(children).toString()) {
    // Common A
    case ',--------------------------.\n':
      return <RaspberryPi>,--------------------------.</RaspberryPi>;
    case '| oooooooooooooooooooo J8  |\n':
      return (
        <RaspberryPi>
          | 
          <GPIOTop />
           J8  |
        </RaspberryPi>
      );
    case '| 1ooooooooooooooooooo     |\n':
      return (
        <RaspberryPi>
          | 
          <GPIOBottom />
               |
        </RaspberryPi>
      );
    case '| |0               C|      |\n':
      return (
        <RaspberryPi>
          | 
          <Zero left />
                         
          <C right />
                |
        </RaspberryPi>
      );
    case '|                  S|      |\n':
      return (
        <RaspberryPi>
          |                  
          <S metal right />
                |
        </RaspberryPi>
      );
    case '|                  I| |A|  |\n':
      return (
        <RaspberryPi>
          |                  
          <I metal right /> <A />
            |
        </RaspberryPi>
      );
    case '| pwr      |HDMI|  0| |u|  |\n':
      return (
        <RaspberryPi>
          | 
          <USBPower />
                
          <HDMI />
            
          <Zero right /> <U />
            |
        </RaspberryPi>
      );
    case "`-| |------|    |-----|x|--'\n":
      return (
        <RaspberryPi>
          `-
          <MetalConnector />
          ------
          <HDMIConnector />
          -----
          <X />
          --'
        </RaspberryPi>
      );
    // Common A (Old Style)
    case '|                   |C|    |\n':
      return (
        <RaspberryPi>
          |                   
          <C />
              |
        </RaspberryPi>
      );
    case '|                   |S|    |\n':
      return (
        <RaspberryPi>
          |                   
          <S />
              |
        </RaspberryPi>
      );
    case '| pwr        |HDMI| |I||A| |\n':
      return (
        <RaspberryPi>
          | 
          <USBPower />
                  
          <HDMI /> <I />
          <A />
           |
        </RaspberryPi>
      );
    case "`-| |--------|    |----|V|-'\n":
      return (
        <RaspberryPi>
          `-
          <MetalConnector />
          --------
          <HDMIConnector />
          ----
          <V />
          -'
        </RaspberryPi>
      );
    // Common B
    case ',--------------------------------.\n':
      return <RaspberryPi>,--------------------------------.</RaspberryPi>;
    case '| oooooooooooooooooooo J8     +====\n':
      return (
        <RaspberryPi>
          | 
          <GPIOTop />
           J8     
          <USB />
        </RaspberryPi>
      );
    case '| 1ooooooooooooooooooo        | USB\n':
      return (
        <RaspberryPi>
          | 
          <GPIOBottom />
                  
          <USBConnector />
        </RaspberryPi>
      );
    case '|                             +====\n':
      return (
        <RaspberryPi>
          |                             
          <USB />
        </RaspberryPi>
      );
    case '| |D      +---+               +====\n':
      return (
        <RaspberryPi>
          | 
          <D left />
                
          <PlasticPackage />
                         
          <USB />
        </RaspberryPi>
      );
    case '| |S      |SoC|               | USB\n':
      return (
        <RaspberryPi>
          | 
          <S left metal />
                
          <PlasticSoC />
                         
          <USBConnector />
        </RaspberryPi>
      );
    case '| |I      +---+               +====\n':
      return (
        <RaspberryPi>
          | 
          <I left metal />
                
          <PlasticPackage />
                         
          <USB />
        </RaspberryPi>
      );
    case '| |0               C|            |\n':
      return (
        <RaspberryPi>
          | 
          <Zero left />
                         
          <C right />
                      |
        </RaspberryPi>
      );
    case '|                  S|       +======\n':
      return (
        <RaspberryPi>
          |                  
          <S right metal />
                 
          <Net />
        </RaspberryPi>
      );
    case '|                  I| |A|   |   Net\n':
      return (
        <RaspberryPi>
          |                  
          <I right metal /> <A />
             
          <NetConnector />
        </RaspberryPi>
      );
    case '| pwr      |HDMI|  0| |u|   +======\n':
      return (
        <RaspberryPi>
          | 
          <USBPower />
                
          <HDMI />
            
          <Zero right /> <U />
             
          <Net />
        </RaspberryPi>
      );
    case "`-| |------|    |-----|x|--------'\n":
      return (
        <RaspberryPi>
          `-
          <MetalConnector />
          ------
          <HDMIConnector />
          -----
          <X />
          --------'
        </RaspberryPi>
      );
    // Common B (Old Style)
    case '|      Pi Model ??? V1.0         |\n':
      return (
        <RaspberryPi>
          |      <SilkScreen>Pi Model ??? V1.0</SilkScreen>         |
        </RaspberryPi>
      );
    case '|      +----+                 +====\n':
      return (
        <RaspberryPi>
          |      <Plastic>+----+</Plastic>                 
          <USB />
        </RaspberryPi>
      );
    case '| |D|  |SoC |                 | USB\n':
      return (
        <RaspberryPi>
          | 
          <D />
            <Plastic>|SoC |</Plastic>
                           
          <USBConnector />
        </RaspberryPi>
      );
    case '| |S|  |    |                 +====\n':
      return (
        <RaspberryPi>
          | 
          <S />
            <Plastic>|    |</Plastic>
                           
          <USB />
        </RaspberryPi>
      );
    case '| |I|  +----+                    |\n':
      return (
        <RaspberryPi>
          | 
          <I />
            <Plastic>+----+</Plastic>
                              |
        </RaspberryPi>
      );
    case '|                   |C|     +======\n':
      return (
        <RaspberryPi>
          |                   
          <C />
               
          <Net />
        </RaspberryPi>
      );
    case '|                   |S|     |   Net\n':
      return (
        <RaspberryPi>
          |                   
          <S />
               
          <NetConnector />
        </RaspberryPi>
      );
    case '| pwr        |HDMI| |I||A|  +======\n':
      return (
        <RaspberryPi>
          | 
          <USBPower />
                  
          <HDMI /> <I />
          <A />
            
          <Net />
        </RaspberryPi>
      );
    case "`-| |--------|    |----|V|-------'\n":
      return (
        <RaspberryPi>
          `-
          <MetalConnector />
          --------
          <HDMIConnector />
          ----
          <V />
          -------'
        </RaspberryPi>
      );
    default:
      return children;
  }
}

export { default as ColorOldStyle } from './old-style';
export { default as ColorPiPico } from './pi-pico';
export { default as ColorPiZero } from './pi-zero';
export { default as ColorPi1 } from './pi-1';
export { default as ColorPi2 } from './pi-2';
export { default as ColorPi3 } from './pi-3';
export { default as ColorPi4 } from './pi-4';
export { default as ColorPi5 } from './pi-5';
