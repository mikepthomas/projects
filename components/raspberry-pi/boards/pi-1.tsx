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
  A,
  C,
  D,
  GPIOBot,
  GPIOTop,
  HDMI,
  I,
  Metal,
  MetalConnector,
  Net,
  NetConnector,
  Pin,
  PinHeader,
  Plastic,
  PlasticConnector,
  PlasticPackage,
  PlasticSoC,
  RaspberryPi,
  S,
  SilkScreen,
  USB,
  USBConnector,
  USBPower,
  Zero,
} from '../raspberry-pi';
import styles from '../raspberry-pi.module.scss';

export default function ColorBoards(children: ReactNode) {
  switch (Children.toArray(children).toString()) {
    // Original Pi
    case '+------------------| |--| |------+\n':
      return (
        <RaspberryPi>
          +------------------
          <MetalConnector />
          --
          <PlasticConnector className={styles.audio} />
          ------+
        </RaspberryPi>
      );
    case '| ooooooooooooo P1 |C|o |A|      |\n':
      return (
        <RaspberryPi>
          | 
          <GPIOTop P1 />
           P1 
          <C className={styles.composite} />
          <Pin /> <A className={styles.audio} />
                |
        </RaspberryPi>
      );
    case '| 1oooooooooooo    +-+oo+-+      |\n':
      return (
        <RaspberryPi>
          | 
          <GPIOBot P1 />
              <Plastic className={styles.composite}>+-+</Plastic>
          <Pin />
          <Pin />
          <Plastic className={styles.audio}>+-+</Plastic>      |
        </RaspberryPi>
      );
    case '|   |D          |SoC| oo        | USB\n':
      return (
        <RaspberryPi>
          |   
          <D left />
                    
          <PlasticSoC /> <Pin />
          <Pin />
                  
          <USBConnector />
        </RaspberryPi>
      );
    case '|   |S Pi Model +---+ oo        +====\n':
      return (
        <RaspberryPi>
          |   
          <S left /> <SilkScreen>Pi Model</SilkScreen> 
          <PlasticPackage /> <Pin />
          <Pin />
                  
          <USB />
        </RaspberryPi>
      );
    case '+----------------|    |--0|------+\n':
      return (
        <RaspberryPi>
          +----------------
          <MetalConnector size={6} />
          --
          <Zero right />
          ------+
        </RaspberryPi>
      );
    // Original Pi rev 1
    case '|                     oo         |\n':
      return (
        <RaspberryPi>
          |                     
          <Pin />
          <Pin />
                   |
        </RaspberryPi>
      );
    case '|               +---+ oo        +====\n':
      return (
        <RaspberryPi>
          |               
          <PlasticPackage /> <Pin />
          <Pin />
                  
          <USB />
        </RaspberryPi>
      );
    // Original Pi rev 2
    case '|    1ooo             oo         |\n':
      return (
        <RaspberryPi>
          |    
          <GPIOTop P5 />
                       
          <Pin />
          <Pin />
                   |
        </RaspberryPi>
      );
    case '| P5 oooo       +---+ oo        +====\n':
      return (
        <RaspberryPi>
          | P5 
          <GPIOBot P5 />
                 
          <PlasticPackage /> <Pin />
          <Pin />
                  
          <USB />
        </RaspberryPi>
      );
    case '=pwr      P6 1   |HDMI|  I|      |\n':
      return (
        <RaspberryPi>
          <Metal>=</Metal>
          <USBPower />
                P6 <PinHeader>1</PinHeader>   
          <HDMI />
            <Plastic>I|</Plastic>      |
        </RaspberryPi>
      );
    // Original Pi A rev 2
    case '|   |I A  V2.0        oo P3      |\n':
      return (
        <RaspberryPi>
          |   
          <I left /> <SilkScreen>A  V2.0</SilkScreen>        
          <Pin />
          <Pin />
           P3      |
        </RaspberryPi>
      );
    case '|   |0             P2 11         |\n':
      return (
        <RaspberryPi>
          |   
          <Zero left />
                       P2 <PinHeader>11</PinHeader>
                   |
        </RaspberryPi>
      );
    case '|                        C|      |\n':
      return (
        <RaspberryPi>
          |                        
          <C right />
                |
        </RaspberryPi>
      );
    case '|            o           S|      |\n':
      return (
        <RaspberryPi>
          |            <Plastic className={styles.ground}>o</Plastic>           
          <S right />
                |
        </RaspberryPi>
      );
    // Original Pi B
    case '|   |0             P2 11    +======\n':
      return (
        <RaspberryPi>
          |   
          <Zero left />
                       P2 <PinHeader>11</PinHeader>    
          <Net />
        </RaspberryPi>
      );
    case '|                        C| |   Net\n':
      return (
        <RaspberryPi>
          |                        
          <C right /> <NetConnector />
        </RaspberryPi>
      );
    // Original Pi B rev 1
    case '|   |I B  V1.0        oo P3      |\n':
      return (
        <RaspberryPi>
          |   
          <I left /> <SilkScreen>B  V1.0</SilkScreen>        
          <Pin />
          <Pin />
           P3      |
        </RaspberryPi>
      );
    case '|                        S| +======\n':
      return (
        <RaspberryPi>
          |                        
          <S right /> <Net />
        </RaspberryPi>
      );
    case '=pwr             |HDMI|  I|      |\n':
      return (
        <RaspberryPi>
          <Metal>=</Metal>
          <USBPower />
                       
          <HDMI />
            
          <I right />
                |
        </RaspberryPi>
      );
    // Original Pi B rev 2
    case '|   |I B  V2.0        oo P3      |\n':
      return (
        <RaspberryPi>
          |   
          <I left /> <SilkScreen>B  V2.0</SilkScreen>        
          <Pin />
          <Pin />
           P3      |
        </RaspberryPi>
      );
    case '|            o           S| +======\n':
      return (
        <RaspberryPi>
          |            <Plastic className={styles.ground}>o</Plastic>           
          <S right /> <Net />
        </RaspberryPi>
      );
    // Pi Model A+
    case '|                          |\n':
      return <RaspberryPi>|                          |</RaspberryPi>;
    case '|      Pi Model A+  V1.1   |\n':
      return (
        <RaspberryPi>
          |      <SilkScreen>Pi Model A+  V1.1</SilkScreen>   |
        </RaspberryPi>
      );
    case '| |D      +---+         +====\n':
      return (
        <RaspberryPi>
          | 
          <D left />
                
          <PlasticPackage />
                   
          <USB />
        </RaspberryPi>
      );
    case '| |S      |SoC|         | USB\n':
      return (
        <RaspberryPi>
          | 
          <S left metal />
                
          <PlasticSoC />
                   
          <USBConnector />
        </RaspberryPi>
      );
    case '| |I      +---+         +====\n':
      return (
        <RaspberryPi>
          | 
          <I left metal />
                
          <PlasticPackage />
                   
          <USB />
        </RaspberryPi>
      );
    // Pi Model B+
    case '|      Pi Model B+  V1.2         |\n':
      return (
        <RaspberryPi>
          |      <SilkScreen>Pi Model B+  V1.2</SilkScreen>         |
        </RaspberryPi>
      );
    default:
      return children;
  }
}
