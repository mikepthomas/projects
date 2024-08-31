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
  BatteryCenter,
  BatteryConnector,
  C,
  E,
  Fi,
  GPIOBot,
  GPIOTop,
  HDMI,
  I,
  Metal,
  MetalConnector,
  MetalPackageBot,
  MetalPackageTop,
  MetalSoC,
  MicroUSB,
  P,
  PinHeader,
  Plastic,
  PlasticEM,
  PlasticMC,
  PlasticPackage,
  PlasticSoC,
  R,
  RaspberryPi,
  S,
  SilkScreen,
  USD,
  W,
  Wi,
} from '../raspberry-pi';
import styles from '../raspberry-pi.module.scss';

export default function ColorBoards(children: ReactNode) {
  switch (Children.toArray(children).toString()) {
    // Pi CM
    case '+---------------------------------------+\n':
      return (
        <RaspberryPi>+---------------------------------------+</RaspberryPi>
      );
    case '| O  Raspberry Pi CM                  O |\n':
      return (
        <RaspberryPi>
          | 
          <Plastic>O</Plastic>  
          <SilkScreen>Raspberry Pi CM</SilkScreen>
                            
          <Plastic>O</Plastic> |
        </RaspberryPi>
      );
    case ' )   Version 1.1     +---+             (\n':
      return (
        <RaspberryPi className={styles.transparent}>
           
          <span className={styles.pcb}>
            )   Version 1.1     
            <PlasticPackage />
                         (
          </span>
        </RaspberryPi>
      );
    case '|                    |SoC|              |\n':
      return (
        <RaspberryPi>
          |                    
          <PlasticSoC />
                        |
        </RaspberryPi>
      );
    case ' )                   +---+             (\n':
      return (
        <RaspberryPi className={styles.transparent}>
           
          <span className={styles.pcb}>
            )                   
            <PlasticPackage />
                         (
          </span>
        </RaspberryPi>
      );
    case '| O   _                               O |\n':
      return (
        <RaspberryPi>
          | <Plastic>O</Plastic>   _                               
          <Plastic>O</Plastic> |
        </RaspberryPi>
      );
    case '|||||| ||||||||||||||||||||||||||||||||||\n':
      return (
        <RaspberryPi className={styles.transparent}>
          <span className={styles.pcb}>||||||</span> 
          <span className={styles.pcb}>||||||||||||||||||||||||||||||||||</span>
        </RaspberryPi>
      );
    // Pi CM3
    case '| O  Raspberry Pi CM3                 O |\n':
      return (
        <RaspberryPi>
          | 
          <Plastic>O</Plastic>  
          <SilkScreen>Raspberry Pi CM3</SilkScreen>
                           
          <Plastic>O</Plastic> |
        </RaspberryPi>
      );
    case ' )   Version 1.0     +---+             (\n':
      return (
        <RaspberryPi className={styles.transparent}>
           
          <span className={styles.pcb}>
            )   Version 1.0     
            <PlasticPackage />
                         (
          </span>
        </RaspberryPi>
      );
    // Pi CM3+
    case '| O  Raspberry Pi CM3+                O |\n':
      return (
        <RaspberryPi>
          | 
          <Plastic>O</Plastic>  
          <SilkScreen>Raspberry Pi CM3+</SilkScreen>
                          
          <Plastic>O</Plastic> |
        </RaspberryPi>
      );
    case ' )   Version 1.0      ,---.            (\n':
      return (
        <RaspberryPi className={styles.transparent}>
           
          <span className={styles.pcb}>
            )   Version 1.0     
            <MetalPackageTop />
                         (
          </span>
        </RaspberryPi>
      );
    case '|                     |SoC|             |\n':
      return (
        <RaspberryPi>
          |                    
          <MetalSoC />
                        |
        </RaspberryPi>
      );
    case " )                    `---'            (\n":
      return (
        <RaspberryPi className={styles.transparent}>
           
          <span className={styles.pcb}>
            )                   
            <MetalPackageBot />
                         (
          </span>
        </RaspberryPi>
      );
    // Pi CM4
    case ',--csi1---dsi0---dsi1-----------,-------------.-----------.\n':
      return (
        <RaspberryPi>
          ,--<Metal>csi1</Metal>---<Metal>dsi0</Metal>---<Metal>dsi1</Metal>
          -----------<SilkScreen>,-------------.</SilkScreen>-----------.
        </RaspberryPi>
      );
    case '|  ----   ----   ---- J2 ooooooo|             |oo1        |\n':
      return (
        <RaspberryPi>
          |  <Metal>----</Metal>   <Metal>----</Metal>   <Metal>----</Metal> J2 
          <PinHeader>
            oooo<span className={styles.ground}>oo</span>o
          </PinHeader>
          <SilkScreen>|</SilkScreen>             
          <SilkScreen>|</SilkScreen>
          <PinHeader>
            o<span className={styles.ground}>o</span>1
          </PinHeader>
                  |
        </RaspberryPi>
      );
    case 'c|    Pi CM4  Rev 1.0    1oooooo|        Wi   |J3         |\n':
      return (
        <RaspberryPi>
          <C className={styles.metal} right lower />
              <SilkScreen>Pi CM4  Rev 1.0</SilkScreen>    
          <PinHeader>
            1oo<span className={styles.ground}>o</span>ooo
          </PinHeader>
          <SilkScreen>|</SilkScreen>       
          <Wi />
            <SilkScreen>|</SilkScreen>J3         |
        </RaspberryPi>
      );
    case 's|    IO Board                  |        Fi   |           |\n':
      return (
        <RaspberryPi>
          <S className={styles.metal} right lower />
              <SilkScreen>IO Board</SilkScreen>                  
          <SilkScreen>|</SilkScreen>       
          <Fi />
            <SilkScreen>|</SilkScreen>           |
        </RaspberryPi>
      );
    case 'i|          J6 2o               |         +--+|  |P|      |\n':
      return (
        <RaspberryPi>
          <I className={styles.metal} right lower />
                    J6 <PinHeader>2o</PinHeader>               
          <SilkScreen>|</SilkScreen>         
          <PlasticPackage size={4} />
          <SilkScreen>|</SilkScreen>  
          <P />
                |
        </RaspberryPi>
      );
    case '| J8           1o               |  ,----. |eM||  }-{      |\n':
      return (
        <RaspberryPi>
          | J8           <PinHeader>1o</PinHeader>               
          <SilkScreen>|</SilkScreen>  
          <MetalPackageTop size={6} /> 
          <PlasticEM />
          <SilkScreen>|</SilkScreen>  
          <Plastic>{'}-{'}</Plastic>      |
        </RaspberryPi>
      );
    case '| oooooooooooooooooooo          |  |SoC | |MC||  |C|      |\n':
      return (
        <RaspberryPi>
          | 
          <GPIOTop />
                    <SilkScreen>|</SilkScreen>  
          <Metal>|SoC |</Metal> <PlasticMC />
          <SilkScreen>|</SilkScreen>  
          <C />
                |
        </RaspberryPi>
      );
    case '| 1ooooooooooooooooooo   J9     |  |    | +--+|  |I|      |\n':
      return (
        <RaspberryPi>
          | 
          <GPIOBot />
             J9     <SilkScreen>|</SilkScreen>  <Metal>|    |</Metal> 
          <PlasticPackage size={4} />
          <SilkScreen>|</SilkScreen>  
          <I />
                |
        </RaspberryPi>
      );
    case "| ,---.                  12     |  `----'     |  |e|      |\n":
      return (
        <RaspberryPi>
          | 
          <MetalPackageTop />
                            
          <PinHeader>12</PinHeader>     
          <SilkScreen>|</SilkScreen>  
          <MetalPackageBot size={6} />
               
          <SilkScreen>|</SilkScreen>  
          <E lower />
                |
        </RaspberryPi>
      );
    case '|( =O |                  oo     |  +----+     |           |\n':
      return (
        <RaspberryPi>
          |<BatteryConnector />
                            
          <PinHeader>oo</PinHeader>     
          <SilkScreen>|</SilkScreen>  
          <PlasticPackage size={6} />
               
          <SilkScreen>|</SilkScreen>           |
        </RaspberryPi>
      );
    case '| ) + |                         |  |RAM |     |           |\n':
      return (
        <RaspberryPi>
          | 
          <BatteryCenter />
                                   
          <SilkScreen>|</SilkScreen>  
          <Plastic>|RAM |</Plastic>     
          <SilkScreen>|</SilkScreen>           |
        </RaspberryPi>
      );
    case "|( =O |                         `--+----+-----'           |\n":
      return (
        <RaspberryPi>
          |<BatteryConnector />
                                   
          <SilkScreen>
            `--
            <PlasticPackage size={6} />
            -----'
          </SilkScreen>
                     |
        </RaspberryPi>
      );
    case "| `---'                                                   |\n":
      return (
        <RaspberryPi>
          | 
          <MetalPackageBot />
                                                             |
        </RaspberryPi>
      );
    case '|   oo1 J1                                                |\n':
      return (
        <RaspberryPi>
          |   
          <PinHeader>
            o<span className={styles.ground}>o</span>1
          </PinHeader>
           J1                                                |
        </RaspberryPi>
      );
    case '|                                                         |\n':
      return (
        <RaspberryPi>
          |                                                         |
        </RaspberryPi>
      );
    case '|                          |Net | |USB|     |uSD|      |p||\n':
      return (
        <RaspberryPi>
          |                          
          <MetalConnector>Net </MetalConnector> 
          <MetalConnector>USB</MetalConnector>     
          <USD />
                
          <P lower />|
        </RaspberryPi>
      );
    case '|    |HDMI|   |HDMI|       |    | | 2 | usb |   |      |w||\n':
      return (
        <RaspberryPi>
          |    
          <HDMI />
             
          <HDMI />
                 
          <MetalConnector size={6} /> <MetalConnector> 2 </MetalConnector> 
          <MicroUSB /> 
          <MetalConnector size={5} />
                
          <W lower />|
        </RaspberryPi>
      );
    case "`----| 0  |---| 1  |-------|    |-|   |-| |------------|r|'\n":
      return (
        <RaspberryPi>
          `----
          <MetalConnector> 0  </MetalConnector>---
          <MetalConnector> 1  </MetalConnector>-------
          <MetalConnector size={6} />-
          <MetalConnector size={5} />-
          <MetalConnector />
          ------------
          <R lower />'
        </RaspberryPi>
      );
    default:
      return children;
  }
}
