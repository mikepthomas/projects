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
  GPIOBot,
  GPIOTop,
  Highlight,
  I,
  MetalConnector,
  MetalPackageBot,
  MetalPackageTop,
  MetalSoC,
  MicroHDMI,
  MicroHDMI0,
  MicroHDMI1,
  Net,
  NetConnector,
  Pin,
  PinHeader,
  Plastic,
  PlasticPackage,
  PlasticRAM,
  RaspberryPi,
  S,
  SilkScreen,
  U,
  USB,
  USB2Connector,
  USB3,
  USB3Connector,
  USBPower,
  Wi,
  X,
  Zero,
} from '../raspberry-pi';
import styles from '../raspberry-pi.module.scss';

export default function ColorBoards(children: ReactNode) {
  switch (Children.toArray(children).toString()) {
    // Pi Model 4B
    case '| oooooooooooooooooooo J8   +======\n':
      return (
        <RaspberryPi>
          | 
          <GPIOTop />
           J8   
          <Net />
        </RaspberryPi>
      );
    case '| 1ooooooooooooooooooo  J14 |   Net\n':
      return (
        <RaspberryPi>
          | 
          <GPIOBot />
            J14 
          <NetConnector />
        </RaspberryPi>
      );
    case '|  Wi                    12 +======\n':
      return (
        <RaspberryPi>
          | 
          <Wi />
                             <PinHeader>12</PinHeader> <Net />
        </RaspberryPi>
      );
    case '| |D     ,---. +---+          +====\n':
      return (
        <RaspberryPi>
          | 
          <D left />
               
          <MetalPackageTop /> 
          <PlasticPackage />
                    
          <USB3 />
        </RaspberryPi>
      );
    case '| |S     |SoC| |RAM|          |USB3\n':
      return (
        <RaspberryPi>
          | 
          <S left metal />
               
          <MetalSoC /> <PlasticRAM />
                    
          <USB3Connector />
        </RaspberryPi>
      );
    case "| |I     `---' +---+          +====\n":
      return (
        <RaspberryPi>
          | 
          <I left metal />
               
          <MetalPackageBot /> <PlasticPackage />
                    
          <USB3 />
        </RaspberryPi>
      );
    case '| |0                C|           |\n':
      return (
        <RaspberryPi>
          | 
          <Zero left />
                          
          <C right />
                     |
        </RaspberryPi>
      );
    case '| oo1 J2            S|        +====\n':
      return (
        <RaspberryPi>
          | 
          <Pin />
          <Plastic className={styles.ground}>o</Plastic>
          <PinHeader>1</PinHeader> J2            
          <S metal right />
                  
          <USB />
        </RaspberryPi>
      );
    case '|                   I| |A|    |USB2\n':
      return (
        <RaspberryPi>
          |                   
          <I metal right /> <A />
              
          <USB2Connector />
        </RaspberryPi>
      );
    case '| pwr   |hd|   |hd| 0| |u|    +====\n':
      return (
        <RaspberryPi>
          | 
          <USBPower />
             
          <MicroHDMI />
             
          <MicroHDMI /> 
          <Zero right /> <U lower />
              
          <USB />
        </RaspberryPi>
      );
    case "`-| |---|m0|---|m1|----|x|-------'\n":
      return (
        <RaspberryPi>
          `-
          <MetalConnector />
          ---
          <MicroHDMI0 />
          ---
          <MicroHDMI1 />
          ----
          <X lower />
          -------'
        </RaspberryPi>
      );
    // Pi Model 4B 1.1
    case '|  Fi  Pi Model 4B  V1.1 oo      |\n':
      return (
        <RaspberryPi>
          | 
          <Fi /> <SilkScreen>Pi Model 4B  V1.1</SilkScreen> 
          <Pin />
          <Pin />
                |
        </RaspberryPi>
      );
    // Pi Model 4B 1.2
    case '|  Fi  Pi Model 4B  V1.2 oo      |\n':
      return (
        <RaspberryPi>
          | 
          <Fi /> <SilkScreen>Pi Model 4B  V1.2</SilkScreen> 
          <Pin />
          <Pin />
                |
        </RaspberryPi>
      );
    // Pi Model 4B 1.4
    case '|  Fi  Pi Model 4B  V1.4 oo      |\n':
      return (
        <RaspberryPi>
          | 
          <Fi /> <SilkScreen>Pi Model 4B  V1.4</SilkScreen> 
          <Pin />
          <Pin />
                |
        </RaspberryPi>
      );
    // Pi Model 4B 1.5
    case '|  Fi  Pi Model 4B  V1.5 oo      |\n':
      return (
        <RaspberryPi>
          | 
          <Fi /> <SilkScreen>Pi Model 4B  V1.5</SilkScreen> 
          <Pin />
          <Pin />
                |
        </RaspberryPi>
      );
    // Pi 400
    case '    ,------+----+----+----+----+---+--+--+--+--------------------+---.\n':
      return (
        <RaspberryPi className={styles.transparent}>
              
          <Plastic className={styles.accent}>
            ,------+----+----+----+----+---+--+--+--+--------------------+---.
          </Plastic>
        </RaspberryPi>
      );
    case "  ,'       |Net |USB |USB |USB |pwr|hd|hd|sd|oooooooooooooooooooo|    `.\n":
      return (
        <RaspberryPi className={styles.transparent}>
            
          <Plastic className={styles.accent}>
            ,'       |<Plastic>Net </Plastic>|<Plastic>USB </Plastic>|
            <Plastic className={styles.power3v}>USB </Plastic>|
            <Plastic className={styles.power3v}>USB </Plastic>|
            <Plastic>pwr</Plastic>|<Plastic>hd</Plastic>|<Plastic>hd</Plastic>|
            <Plastic>sd</Plastic>|
            <GPIOTop />
            |    `.
          </Plastic>
        </RaspberryPi>
      );
    case ' /     ==  |    | 2  | 3  | 3  |   |m1|m0|  |1ooooooooooooooooooo|      \\\n':
      return (
        <RaspberryPi className={styles.transparent}>
           
          <Plastic className={styles.accent}>
            /     <span className={styles.vent}>==</span>
              |<Plastic>    </Plastic>|<Plastic> 2  </Plastic>|
            <Plastic className={styles.power3v}> 3  </Plastic>|
            <Plastic className={styles.power3v}> 3  </Plastic>|
            <Plastic>   </Plastic>|<Plastic>m1</Plastic>|<Plastic>m0</Plastic>|
            <Plastic>  </Plastic>|<GPIOBot />
            |      \
          </Plastic>
        </RaspberryPi>
      );
    case ',------------------------------------------------------------------------.\n':
      return (
        <RaspberryPi className={styles.case}>
          ,------------------------------------------------------------------------.
        </RaspberryPi>
      );
    case '|  ___ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ o o o____  |\n':
      return (
        <RaspberryPi className={styles.case}>
          |  ___ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ 
          <span className={styles.ground}>o</span> 
          <span className={styles.ground}>o</span> 
          <span className={styles.gpio}>o</span>____  |
        </RaspberryPi>
      );
    case '| |Esc|F111|F212|F3  |F4  |F5  |F6  |F7  |F8  |F9  |F10o|NumL|PtSq|DlIn| |\n':
      return (
        <RaspberryPi className={styles.case}>
          | |Esc|F1<Highlight>11</Highlight>|F2
          <Highlight>12</Highlight>
          |F3  |F4  |F5  |F6  |F7  |F8  |F9  |F10
          <Highlight>o</Highlight>|NumL|Pt
          <Highlight>Sq</Highlight>|Dl
          <Highlight>In</Highlight>| |
        </RaspberryPi>
      );
    case '|  ___ ___ ____ ____ ____ ____ ____ ___ ____ ____ ____ ___ ____ _______  |\n':
      return (
        <RaspberryPi className={styles.case}>
          |  ___ ___ ____ ____ ____ ____ ____ ___ ____ ____ ____ ___ ____ _______  |
        </RaspberryPi>
      );
    case '| |¬  |!  |"   |£   |$   |%   |^   |& 7|*  8|(  9|)  *|_  |+   |BkSpc  | |\n':
      return (
        <RaspberryPi className={styles.case}>
          | |¬  |!  |"   |£   |$   |%   |^   |& <Highlight>7</Highlight>|*  
          <Highlight>8</Highlight>|(  <Highlight>9</Highlight>|)  
          <Highlight>*</Highlight>|_  |+   |BkSpc  | |
        </RaspberryPi>
      );
    case '| |` ||1  |2   |3   |4   |5   |6   |7  |8   |9   |0   |-  |=   |<--    | |\n':
      return (
        <RaspberryPi className={styles.case}>
          | |` ||1  |2   |3   |4   |5   |6   |7  |8   |9   |0   |-  |=   |{'<'}
          --    | |
        </RaspberryPi>
      );
    case '|  _____ ___ ____ ____ ____ ____ ____ ___ ____ ____ ____ ____ __ ______  |\n':
      return (
        <RaspberryPi className={styles.case}>
          |  _____ ___ ____ ____ ____ ____ ____ ___ ____ ____ ____ ____ __ ______  |
        </RaspberryPi>
      );
    case '| |Tab  |Q  |W   |E   |R   |T   |Y   |U 4|I  5|O  6|P  -|{   |} |Enter | |\n':
      return (
        <RaspberryPi className={styles.case}>
          | |Tab  |Q  |W   |E   |R   |T   |Y   |U <Highlight>4</Highlight>|I  
          <Highlight>5</Highlight>|O  <Highlight>6</Highlight>|P  
          <Highlight>-</Highlight>|{'{'}   |
          {'}'} |Enter | |
        </RaspberryPi>
      );
    case "| |->|  |   |    |    |    |    |    |   |    |    |    |[   |] |<-'   | |\n":
      return (
        <RaspberryPi className={styles.case}>
          | |-{'>'}|  |   |    |    |    |    |    |   |    |    |    |[   |] |
          {'<'}-'   | |
        </RaspberryPi>
      );
    case '|  ______ ____ ____ ____ ____ ____ ____ ___ ____ ____ ____ ____ __     | |\n':
      return (
        <RaspberryPi className={styles.case}>
          |  ______ ____ ____ ____ ____ ____ ____ ___ ____ ____ ____ ____ __     | |
        </RaspberryPi>
      );
    case '| |Caps  |A   |S   |D   |F   |G   |H   |J 1|K  2|L  3|:  +|@   |~ |    | |\n':
      return (
        <RaspberryPi className={styles.case}>
          | |Caps  |A   |S   |D   |F   |G   |H   |J <Highlight>1</Highlight>|K  
          <Highlight>2</Highlight>|L  <Highlight>3</Highlight>|:  
          <Highlight>+</Highlight>|@   |~ |    | |
        </RaspberryPi>
      );
    case "| |Lock  |    |    |    |    |    |    |   |    |    |;   |'   |# |    | |\n":
      return (
        <RaspberryPi className={styles.case}>
          | |Lock  |    |    |    |    |    |    |   |    |    |;   |'   |# |    | |
        </RaspberryPi>
      );
    case '|  _____ ___ ___ ____ ____ ____ ____ ____ ___ ____ ____ ____ __________  |\n':
      return (
        <RaspberryPi className={styles.case}>
          |  _____ ___ ___ ____ ____ ____ ____ ____ ___ ____ ____ ____ __________  |
        </RaspberryPi>
      );
    case '| |Shift||  |Z  |X   |C   |V   |B   |N   |M 0|<   |>  .|?  /|Shift     | |\n':
      return (
        <RaspberryPi className={styles.case}>
          | |Shift||  |Z  |X   |C   |V   |B   |N   |M <Highlight>0</Highlight>|
          {'<'}   |{'>'}
            <Highlight>.</Highlight>|?  <Highlight>/</Highlight>|Shift     | |
        </RaspberryPi>
      );
    case '| |^    |\\  |   |    |    |    |    |    |   |,   |.   |/   |^         | |\n':
      return (
        <RaspberryPi className={styles.case}>
          | |^    |\  |   |    |    |    |    |    |   |,   |.   |/   |^         | |
        </RaspberryPi>
      );
    case '|  ____ ___ ____ ____ _______________________ ____ ____      _____       |\n':
      return (
        <RaspberryPi className={styles.case}>
          |  ____ ___ ____ ____ _______________________ ____ ____      _____       |
        </RaspberryPi>
      );
    case '| |Ctrl|Fn | ** |Alt |                       |Alt |Ctrl|____|^PgUp|____  |\n':
      return (
        <RaspberryPi className={styles.case}>
          | |Ctrl|<Highlight>Fn</Highlight> | <Highlight>**</Highlight>
           |Alt |                       |Alt |Ctrl|____|^
          <Highlight>PgUp</Highlight>|____  |
        </RaspberryPi>
      );
    case '| |    |   | {} |    |                       |    |    |<Hom|vPgDn|>End| |\n':
      return (
        <RaspberryPi className={styles.case}>
          | |    |   | <Highlight>{'{}'}</Highlight>
           |    |                       |    |    |{'<'}
          <Highlight>Hom</Highlight>|v<Highlight>PgDn</Highlight>|{'>'}
          <Highlight>End</Highlight>| |
        </RaspberryPi>
      );
    case "`------------------------------------------------------------------------'\n":
      return (
        <RaspberryPi className={styles.case}>
          `------------------------------------------------------------------------'
        </RaspberryPi>
      );
    case '                                                 Raspberry Pi 400 Rev 1.0\n':
      return (
        <RaspberryPi className={styles.transparent}>
                                                           Raspberry Pi 
          <Highlight>400</Highlight> Rev 1.0
        </RaspberryPi>
      );
    default:
      return children;
  }
}
