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

import {
  C,
  Fi,
  GPIOBot,
  GPIOTop,
  I,
  MetalConnector,
  MicroUSB,
  MiniHDMI,
  PinHeader,
  Plastic,
  PlasticPackage,
  PlasticSoC,
  RaspberryPi,
  S,
  SD,
  SDConnector,
  SilkScreen,
  USBPower,
  Wi,
} from '../raspberry-pi';
import styles from '../raspberry-pi.module.scss';

export default function ColorBoards(children: ReactNode) {
  switch (Children.toArray(children).toString()) {
    // Pi Zero
    case ',--oooooooooooooooooooo---.\n':
      return (
        <RaspberryPi>
          ,--
          <GPIOTop />
          ---.
        </RaspberryPi>
      );
    case '|  1ooooooooooooooooooo J8|\n':
      return (
        <RaspberryPi>
          |  
          <GPIOBot />
           J8|
        </RaspberryPi>
      );
    case '---+      |SoC|           i|\n':
      return (
        <RaspberryPi>
          <SD />
                
          <PlasticSoC />
                     
          <I lower metal right />
        </RaspberryPi>
      );
    case '| hdmi    +---+   usb pwr |\n':
      return (
        <RaspberryPi>
          | 
          <MiniHDMI />
              
          <PlasticPackage />
             
          <MicroUSB /> <USBPower />
           |
        </RaspberryPi>
      );
    case "`-|  |------------| |-| |-'\n":
      return (
        <RaspberryPi>
          `-
          <MetalConnector size={4} />
          ------------
          <MetalConnector />-<MetalConnector />
          -'
        </RaspberryPi>
      );
    // Pi Zero 1.2
    case '---+ PiZero      RUN o1   |\n':
      return (
        <RaspberryPi>
          <SD /> <SilkScreen>PiZero</SilkScreen>      RUN 
          <Plastic className={styles.ground}>o</Plastic>
          <PinHeader>1</PinHeader>   |
        </RaspberryPi>
      );
    case ' sd| V1.2 +---+   TV 1o   |\n':
      return (
        <RaspberryPi>
          <SDConnector /> <SilkScreen>V1.2</SilkScreen> 
          <PlasticPackage />
             TV <PinHeader>1</PinHeader>
          <Plastic className={styles.ground}>o</Plastic>   |
        </RaspberryPi>
      );
    case '---+      |SoC|           |\n':
      return (
        <RaspberryPi>
          <SD />
                
          <PlasticSoC />
                     |
        </RaspberryPi>
      );
    // Pi Zero 1.3
    case '---+ PiZero      RUN o1   c|\n':
      return (
        <RaspberryPi>
          <SD /> <SilkScreen>PiZero</SilkScreen>      RUN 
          <Plastic className={styles.ground}>o</Plastic>
          <PinHeader>1</PinHeader>   
          <C lower metal right />
        </RaspberryPi>
      );
    case ' sd| V1.3 +---+   TV 1o   s|\n':
      return (
        <RaspberryPi>
          <SDConnector /> <SilkScreen>V1.3</SilkScreen> 
          <PlasticPackage />
             TV <PinHeader>1</PinHeader>
          <Plastic className={styles.ground}>o</Plastic>   
          <S lower metal right />
        </RaspberryPi>
      );
    // Pi Zero W 1.1
    case '---+ PiZero W    RUN o1   c|\n':
      return (
        <RaspberryPi>
          <SD /> <SilkScreen>PiZero W</SilkScreen>    RUN 
          <Plastic className={styles.ground}>o</Plastic>
          <PinHeader>1</PinHeader>   
          <C lower metal right />
        </RaspberryPi>
      );
    case ' sd| V1.1 +---+   TV 1o   s|\n':
      return (
        <RaspberryPi>
          <SDConnector /> <SilkScreen>V1.1</SilkScreen> 
          <PlasticPackage />
             TV <PinHeader>1</PinHeader>
          <Plastic className={styles.ground}>o</Plastic>   
          <S lower metal right />
        </RaspberryPi>
      );
    // Pi Zero2W 1.0
    case '---+     +---+  PiZero2W  c|\n':
      return (
        <RaspberryPi>
          <SD />
               
          <PlasticPackage />
            <SilkScreen>PiZero2W</SilkScreen>  
          <C lower metal right />
        </RaspberryPi>
      );
    case ' sd|     |SoC|   Wi V1.0  s|\n':
      return (
        <RaspberryPi>
          <SDConnector />
               
          <PlasticSoC />
            
          <Wi />
          <SilkScreen>V1.0</SilkScreen>  
          <S lower metal right />
        </RaspberryPi>
      );
    case '---+     +---+   Fi       i|\n':
      return (
        <RaspberryPi>
          <SD />
               
          <PlasticPackage />
            
          <Fi />
                
          <I lower metal right />
        </RaspberryPi>
      );
    case '| hdmi            usb pwr |\n':
      return (
        <RaspberryPi>
          | 
          <MiniHDMI />
                      
          <MicroUSB /> <USBPower />
           |
        </RaspberryPi>
      );
    default:
      return children;
  }
}
