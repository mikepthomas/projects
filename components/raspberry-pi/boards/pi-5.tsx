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
  C,
  Fi,
  GPIOBot,
  GPIOTop,
  I,
  Metal,
  MetalConnector,
  MicroHDMI,
  MicroHDMI0,
  MicroHDMI1,
  Net,
  NetConnector,
  One,
  P,
  Pin,
  PinHeader,
  Plastic,
  PlasticPackage,
  PlasticRAM,
  PlasticRP1,
  RaspberryPi,
  S,
  SilkScreen,
  USB,
  USB2Connector,
  USB3,
  USB3Connector,
  USBPower,
  Wi,
  Zero,
} from '../raspberry-pi';
import styles from '../raspberry-pi.module.scss';

export default function ColorBoards(children: ReactNode) {
  switch (Children.toArray(children).toString()) {
    // Pi Model 5B
    case '| oooooooooooooooooooo J8   : +====\n':
      return (
        <RaspberryPi>
          | 
          <GPIOTop />
           J8   <Metal>:</Metal> 
          <USB />
        </RaspberryPi>
      );
    case '| 1ooooooooooooooooooo      : |USB2\n':
      return (
        <RaspberryPi>
          | 
          <GPIOBot />
                <Metal>:</Metal> <USB2Connector />
        </RaspberryPi>
      );
    case '|  Wi  Pi Model 5B  V1.0  fan +====\n':
      return (
        <RaspberryPi>
          | 
          <Wi /> <SilkScreen>Pi Model 5B  V1.0</SilkScreen>  fan 
          <USB />
        </RaspberryPi>
      );
    case '|  Fi     +---+      +---+       |\n':
      return (
        <RaspberryPi>
          | 
          <Fi />
              
          <PlasticPackage />
                
          <PlasticPackage />
                 |
        </RaspberryPi>
      );
    case '|         |RAM|      |RP1|    +====\n':
      return (
        <RaspberryPi>
          |         
          <PlasticRAM />
                
          <PlasticRP1 />
              
          <USB3 />
        </RaspberryPi>
      );
    case '||p       +---+      +---+    |USB3\n':
      return (
        <RaspberryPi>
          |<P className={styles.composite} left lower />
                 
          <PlasticPackage />
                
          <PlasticPackage />
              
          <USB3Connector />
        </RaspberryPi>
      );
    case '||c      -------              +====\n':
      return (
        <RaspberryPi>
          |<C className={styles.composite} left lower metal />
                <Metal>-------</Metal>              
          <USB3 />
        </RaspberryPi>
      );
    case '||i        SoC      |c|c J14     |\n':
      return (
        <RaspberryPi>
          |<I className={styles.composite} left lower />
                <Metal>  SoC  </Metal>    
          <C className={styles.composite} left lower />
          <C className={styles.composite} left lower />
           J14     |
        </RaspberryPi>
      );
    case '(        -------  J7|s|s 12 +======\n':
      return (
        <RaspberryPi>
          <SilkScreen>{'('}</SilkScreen>        <Metal>-------</Metal>  J7
          <S className={styles.composite} left lower metal />
          <S className={styles.composite} left lower metal /> 
          <PinHeader>12</PinHeader> 
          <Net />
        </RaspberryPi>
      );
    case '|  J2 bat   uart   1|i|i oo |   Net\n':
      return (
        <RaspberryPi>
          |  J2 bat   uart   <PinHeader>1</PinHeader>
          <I className={styles.composite} left lower metal />
          <I className={styles.composite} left lower metal /> 
          <Pin />
          <Pin /> <NetConnector />
        </RaspberryPi>
      );
    case '| pwr\\..|hd|...|hd|o|1|0    +======\n':
      return (
        <RaspberryPi>
          | 
          <USBPower />\<Metal>..</Metal>
          <MicroHDMI />
          <Metal>...</Metal>
          <MicroHDMI />
          <Plastic className={styles.ground}>o</Plastic>
          <One className={styles.composite} left lower />
          <Zero className={styles.composite} left lower />
              
          <Net />
        </RaspberryPi>
      );
    case "`-| |-1o|m0|---|m1|--------------'\n":
      return (
        <RaspberryPi>
          `-
          <MetalConnector />-<PinHeader>1</PinHeader>
          <Plastic className={styles.ground}>o</Plastic>
          <MicroHDMI0 />
          ---
          <MicroHDMI1 />
          --------------'
        </RaspberryPi>
      );
    default:
      return children;
  }
}
