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
  Fi,
  GPIOBottom,
  GPIOTop,
  HDMI,
  HDMIConnector,
  I,
  Metal,
  MetalConnector,
  MicroHDMI,
  MicroHDMIConnector0,
  MicroHDMIConnector1,
  MicroUSB,
  Net,
  NetConnector,
  Pin,
  PinHeader,
  Plastic,
  PlasticPackage,
  PlasticRAM,
  PlasticSoC,
  RaspberryPi,
  S,
  SD,
  SDConnector,
  SilkScreen,
  USB,
  USB2Connector,
  USB3,
  USB3Connector,
  USBConnector,
  USBPower,
  V,
  Wi,
} from '../raspberry-pi';
import styles from '../raspberry-pi.module.scss';

export default function ColorBoards(children: ReactNode) {
  switch (Children.toArray(children).toString()) {
    // Pi Zero (Old Style)
    case '.-------------------------.\n':
      return <RaspberryPi>.-------------------------.</RaspberryPi>;
    case '| oooooooooooooooooooo J8 |\n':
      return (
        <RaspberryPi>
          | 
          <GPIOTop />
           J8 |
        </RaspberryPi>
      );
    case '| 1ooooooooooooooooooo   |c\n':
      return (
        <RaspberryPi>
          | 
          <GPIOBottom />
             <Metal>|c</Metal>
        </RaspberryPi>
      );
    case '---+|hdmi| +---+  usb pwr |\n':
      return (
        <RaspberryPi>
          <SD />
          <Metal>|hdmi|</Metal> <PlasticPackage />
            
          <MicroUSB /> <USBPower />
           |
        </RaspberryPi>
      );
    case "`---|    |--------| |-| |-'\n":
      return (
        <RaspberryPi>
          `---
          <HDMIConnector />
          --------
          <MetalConnector />-<MetalConnector />
          -'
        </RaspberryPi>
      );
    // Pi Zero 1.2 (Old Style)
    case ',-------------------------.\n':
      return <RaspberryPi>,-------------------------.</RaspberryPi>;
    case '| 1ooooooooooooooooooo    |\n':
      return (
        <RaspberryPi>
          | 
          <GPIOBottom />
              |
        </RaspberryPi>
      );
    case '---+       +---+  PiZero  |\n':
      return (
        <RaspberryPi>
          <SD />
                 
          <PlasticPackage />
            <SilkScreen>PiZero</SilkScreen>  |
        </RaspberryPi>
      );
    case ' sd|       |SoC|   V1.2   |\n':
      return (
        <RaspberryPi>
          <SDConnector />
                 
          <PlasticSoC />
             <SilkScreen>V1.2</SilkScreen>   |
        </RaspberryPi>
      );
    // Pi Zero 1.3 (Old Style)
    case '---+       +---+ PiZero  |s\n':
      return (
        <RaspberryPi>
          <SD />
                 
          <PlasticPackage /> <SilkScreen>PiZero</SilkScreen>  
          <Metal>|s</Metal>
        </RaspberryPi>
      );
    case ' sd|       |SoC|   V1.3  |i\n':
      return (
        <RaspberryPi>
          <SDConnector />
                 
          <PlasticSoC />
             <SilkScreen>V1.3</SilkScreen>  <Metal>|i</Metal>
        </RaspberryPi>
      );
    // Pi Zero W 1.1 (Old Style)
    case '---+       +---+ PiZero W|s\n':
      return (
        <RaspberryPi>
          <SD />
                 
          <PlasticPackage /> <SilkScreen>PiZero W</SilkScreen>
          <Metal>|s</Metal>
        </RaspberryPi>
      );
    case ' sd|       |SoC|   V1.1  |i\n':
      return (
        <RaspberryPi>
          <SDConnector />
                 
          <PlasticSoC />
             <SilkScreen>V1.1</SilkScreen>  <Metal>|i</Metal>
        </RaspberryPi>
      );
    // Original Pi (Old Style)
    case '| ooooooooooooo P1 |C|  |A|      |\n':
      return (
        <RaspberryPi>
          | 
          <GPIOTop P1 />
           P1 
          <C className={styles.composite} />
            
          <A className={styles.audio} />
                |
        </RaspberryPi>
      );
    case '| 1oooooooooooo    +-+  +-+      |\n':
      return (
        <RaspberryPi>
          | 
          <GPIOBottom P1 />
              <Plastic className={styles.composite}>+-+</Plastic>  
          <Plastic className={styles.audio}>+-+</Plastic>      |
        </RaspberryPi>
      );
    case '|                |SoC|          | USB\n':
      return (
        <RaspberryPi>
          |                
          <PlasticSoC />
                    
          <USBConnector />
        </RaspberryPi>
      );
    case '|   |D| Pi Model +---+          +====\n':
      return (
        <RaspberryPi>
          |   
          <D /> <SilkScreen>Pi Model</SilkScreen> 
          <PlasticPackage />
                    
          <USB />
        </RaspberryPi>
      );
    case '=pwr             |HDMI|          |\n':
      return (
        <RaspberryPi>
          <Metal>=</Metal>
          <USBPower />
                       
          <HDMI />
                    |
        </RaspberryPi>
      );
    case '+----------------|    |----------+\n':
      return (
        <RaspberryPi>
          +----------------
          <HDMIConnector />
          ----------+
        </RaspberryPi>
      );
    // Original Pi rev 2 (Old Style)
    case '|    1ooo                        |\n':
      return (
        <RaspberryPi>
          |    
          <GPIOTop P5 />
                                  |
        </RaspberryPi>
      );
    case '| P5 oooo        +---+          +====\n':
      return (
        <RaspberryPi>
          | P5 
          <GPIOBottom P5 />
                  
          <PlasticPackage />
                    
          <USB />
        </RaspberryPi>
      );
    // Original Pi A rev 2 (Old Style)
    case '|   |S| A  V2.0                  |\n':
      return (
        <RaspberryPi>
          |   
          <S /> <SilkScreen>A  V2.0</SilkScreen>
                            |
        </RaspberryPi>
      );
    case '|   |I|                  |C|     |\n':
      return (
        <RaspberryPi>
          |   
          <I />
                            
          <C />
               |
        </RaspberryPi>
      );
    case '|                        |S|     |\n':
      return (
        <RaspberryPi>
          |                        
          <S />
               |
        </RaspberryPi>
      );
    case '|                        |I|     |\n':
      return (
        <RaspberryPi>
          |                        
          <I />
               |
        </RaspberryPi>
      );
    // Original Pi B (Old Style)
    case '|   |I|                  |C|+======\n':
      return (
        <RaspberryPi>
          |   
          <I />
                            
          <C />
          <Net />
        </RaspberryPi>
      );
    case '|                        |S||   Net\n':
      return (
        <RaspberryPi>
          |                        
          <S />
          <NetConnector />
        </RaspberryPi>
      );
    case '|                        |I|+======\n':
      return (
        <RaspberryPi>
          |                        
          <I />
          <Net />
        </RaspberryPi>
      );
    // Original Pi B rev 1 (Old Style)
    case '|                                |\n':
      return <RaspberryPi>|                                |</RaspberryPi>;
    case '|                +---+          +====\n':
      return (
        <RaspberryPi>
          |                
          <PlasticPackage />
                    
          <USB />
        </RaspberryPi>
      );
    case '|   |S| B  V1.0                  |\n':
      return (
        <RaspberryPi>
          |   
          <S /> <SilkScreen>B  V1.0</SilkScreen>
                            |
        </RaspberryPi>
      );
    // Original Pi B rev 2 (Old Style)
    case '|   |S| B  V2.0                  |\n':
      return (
        <RaspberryPi>
          |   
          <S /> <SilkScreen>B  V2.0</SilkScreen>
                            |
        </RaspberryPi>
      );
    // Pi Model A+ (Old Style)
    case '|      +----+           +====\n':
      return (
        <RaspberryPi>
          |      <Plastic>+----+</Plastic>           
          <USB />
        </RaspberryPi>
      );
    case '| |D|  |SoC |           | USB\n':
      return (
        <RaspberryPi>
          | 
          <D />
            <Plastic>|SoC |</Plastic>           
          <USBConnector />
        </RaspberryPi>
      );
    case '| |S|  |    |           +====\n':
      return (
        <RaspberryPi>
          | 
          <S />
            <Plastic>|    |</Plastic>           
          <USB />
        </RaspberryPi>
      );
    case '| |I|  +----+              |\n':
      return (
        <RaspberryPi>
          | 
          <I />
            <Plastic>+----+</Plastic>              |
        </RaspberryPi>
      );
    // Pi Model 3A+ (Old Style)
    case '|  Wi                      |\n':
      return (
        <RaspberryPi>
          | 
          <Wi />
                               |
        </RaspberryPi>
      );
    case '|        ,----.         +====\n':
      return (
        <RaspberryPi>
          |        <Metal>,----.</Metal>         
          <USB />
        </RaspberryPi>
      );
    case '| |D|    |SoC |         | USB\n':
      return (
        <RaspberryPi>
          | 
          <D />
              <Metal>|SoC |</Metal>         
          <USBConnector />
        </RaspberryPi>
      );
    case '| |S|    |    |         +====\n':
      return (
        <RaspberryPi>
          | 
          <S />
              <Metal>|    |</Metal>         
          <USB />
        </RaspberryPi>
      );
    case "| |I|    `----'            |\n":
      return (
        <RaspberryPi>
          | 
          <I />
              <Metal>`----'</Metal>            |
        </RaspberryPi>
      );
    // Pi Model 3B+ (Old Style)
    case '| 1ooooooooooooooooooo  PoE   | USB\n':
      return (
        <RaspberryPi>
          | 
          <GPIOBottom />
            PoE   
          <USBConnector />
        </RaspberryPi>
      );
    case '|  Wi                    1o   +====\n':
      return (
        <RaspberryPi>
          | 
          <Wi />
                             <PinHeader>1o</PinHeader>   
          <USB />
        </RaspberryPi>
      );
    case '|  Fi  Pi Model 3B+ V1.3 oo      |\n':
      return (
        <RaspberryPi>
          | 
          <Fi /> <SilkScreen>Pi Model 3B+ V1.3</SilkScreen> <Pin />
          <Pin />
                |
        </RaspberryPi>
      );
    case '|        ,----.               +====\n':
      return (
        <RaspberryPi>
          |        <Metal>,----.</Metal>               
          <USB />
        </RaspberryPi>
      );
    case '| |D|    |SoC |               | USB\n':
      return (
        <RaspberryPi>
          | 
          <D />
              <Metal>|SoC |</Metal>               
          <USBConnector />
        </RaspberryPi>
      );
    case '| |S|    |    |               +====\n':
      return (
        <RaspberryPi>
          | 
          <S />
              <Metal>|    |</Metal>               
          <USB />
        </RaspberryPi>
      );
    case "| |I|    `----'                  |\n":
      return (
        <RaspberryPi>
          | 
          <I />
              <Metal>`----'</Metal>                  |
        </RaspberryPi>
      );
    // Pi Model 4B (Old Style)
    case '| 1ooooooooooooooooooo  PoE |   Net\n':
      return (
        <RaspberryPi>
          | 
          <GPIOBottom />
            PoE 
          <NetConnector />
        </RaspberryPi>
      );
    case '|  Wi                    1o +======\n':
      return (
        <RaspberryPi>
          | 
          <Wi />
                             <PinHeader>1o</PinHeader> <Net />
        </RaspberryPi>
      );
    case '|        ,----. +---+         +====\n':
      return (
        <RaspberryPi>
          |        <Metal>,----.</Metal> <PlasticPackage />
                   
          <USB3 />
        </RaspberryPi>
      );
    case '| |D|    |SoC | |RAM|         |USB3\n':
      return (
        <RaspberryPi>
          | 
          <D />
              <Metal>|SoC |</Metal> <PlasticRAM />
                   
          <USB3Connector />
        </RaspberryPi>
      );
    case '| |S|    |    | |   |         +====\n':
      return (
        <RaspberryPi>
          | 
          <S />
              <Metal>|    |</Metal> <Plastic>|   |</Plastic>         
          <USB3 />
        </RaspberryPi>
      );
    case "| |I|    `----' +---+            |\n":
      return (
        <RaspberryPi>
          | 
          <I />
              <Metal>`----'</Metal> 
          <PlasticPackage />
                      |
        </RaspberryPi>
      );
    case '|                   |C|       +====\n':
      return (
        <RaspberryPi>
          |                   
          <C />
                 
          <USB />
        </RaspberryPi>
      );
    case '|                   |S|       |USB2\n':
      return (
        <RaspberryPi>
          |                   
          <S />
                 
          <USB2Connector />
        </RaspberryPi>
      );
    case '| pwr   |hd|   |hd| |I||A|    +====\n':
      return (
        <RaspberryPi>
          | 
          <USBPower />
             
          <MicroHDMI />
             
          <MicroHDMI /> <I />
          <A />
              
          <USB />
        </RaspberryPi>
      );
    case "`-| |---|m0|---|m1|----|V|-------'\n":
      return (
        <RaspberryPi>
          `-
          <MetalConnector />
          ---
          <MicroHDMIConnector0 />
          ---
          <MicroHDMIConnector1 />
          ----
          <V />
          -------'
        </RaspberryPi>
      );
    default:
      return children;
  }
}
