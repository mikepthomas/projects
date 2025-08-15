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

import styles from '../raspberry-pi.module.scss';

export default function ColorPins(children: ReactNode) {
  switch (Children.toArray(children).toString()) {
    // J1 / J2
    case 'GLOBAL ENABLE (1)\n':
      return (
        <>
          <span className={styles.pin}>GLOBAL ENABLE</span> (1)
          <br />
        </>
      );
    case '          GND (2)\n':
      return (
        <>
                    <span className={styles.ground}>GND</span> (2)
          <br />
        </>
      );
    case '          RUN (3)\n':
      return (
        <>
                    <span className={styles.pin}>RUN</span> (3)
          <br />
        </>
      );
    // J2 / P6 / RUN
    case 'RUN (1)\n':
      return (
        <>
          <span className={styles.pin}>RUN</span> (1)
          <br />
        </>
      );
    case 'GND (2)\n':
      return (
        <>
          <span className={styles.ground}>GND</span> (2)
          <br />
        </>
      );
    // J2
    case '1-2 DISABLE eMMC BOOT  (1) (2)  1-2 DISABLE eMMC BOOT\n':
      return (
        <>
          <span className={styles.pin}>1-2 DISABLE eMMC BOOT</span>  (1) (2)  
          <span className={styles.pin}>1-2 DISABLE eMMC BOOT</span>
          <br />
        </>
      );
    case '3-4 WRITE-PROT EEPROM  (3) (4)  3-4 WRITE-PROT EEPROM\n':
      return (
        <>
          <span className={styles.pin}>3-4 WRITE-PROT EEPROM</span>  (3) (4)  
          <span className={styles.pin}>3-4 WRITE-PROT EEPROM</span>
          <br />
        </>
      );
    case '         AIN0 MXL7704  (5) (6)  AIN1 MXL7704\n':
      return (
        <>
                   <span className={styles.pin}>AIN0 MXL7704</span>  (5) (6)  
          <span className={styles.pin}>AIN1 MXL7704</span>
          <br />
        </>
      );
    case '                  GND  (7) (8)  SYNC_IN\n':
      return (
        <>
                            <span className={styles.ground}>GND</span>
            (7) (8)  
          <span className={styles.pin}>SYNC_IN</span>
          <br />
        </>
      );
    case '             SYNC OUT  (9) (10) GND\n':
      return (
        <>
                       <span className={styles.pin}>SYNC OUT</span>  (9) (10) 
          <span className={styles.ground}>GND</span>
          <br />
        </>
      );
    case '               TV OUT (11) (12) GND\n':
      return (
        <>
                         <span className={styles.pin}>TV OUT</span> (11) (12) 
          <span className={styles.ground}>GND</span>
          <br />
        </>
      );
    case '           13-14 WAKE (13) (14) 13-14 WAKE\n':
      return (
        <>
                     <span className={styles.pin}>13-14 WAKE</span> (13) (14) 
          <span className={styles.pin}>13-14 WAKE</span>
          <br />
        </>
      );
    // J3
    case 'WL DISABLE (1)\n':
      return (
        <>
          <span className={styles.pin}>WL DISABLE</span> (1)
          <br />
        </>
      );
    case '       GND (2)\n':
      return (
        <>
                 <span className={styles.ground}>GND</span> (2)
          <br />
        </>
      );
    case 'BT DISABLE (3)\n':
      return (
        <>
          <span className={styles.pin}>BT DISABLE</span> (3)
          <br />
        </>
      );
    // J6
    case '1-2 CAM0+DISP0 (1) (2) 1-2 CAM0+DISP0\n':
      return (
        <>
          <span className={styles.pin}>1-2 CAM0+DISP0</span> (1) (2) 
          <span className={styles.pin}>1-2 CAM0+DISP0</span>
          <br />
        </>
      );
    case '3-4 CAM0+DISP0 (3) (4) 3-4 CAM0+DISP0\n':
      return (
        <>
          <span className={styles.pin}>3-4 CAM0+DISP0</span> (3) (4) 
          <span className={styles.pin}>3-4 CAM0+DISP0</span>
          <br />
        </>
      );
    // J7 / TV
    case 'COMPOSITE (1)\n':
      return (
        <>
          <span className={styles.pin}>COMPOSITE</span> (1)
          <br />
        </>
      );
    case '      GND (2)\n':
      return (
        <>
                <span className={styles.ground}>GND</span> (2)
          <br />
        </>
      );
    // J8 / P1
    case '   3V3  (1) (2)  5V\n':
      return (
        <>
             <span className={styles.power3v}>3V3</span>  (1) (2)  
          <span className={styles.power5v}>5V</span>
          <br />
        </>
      );
    case ' GPIO2  (3) (4)  5V\n':
      return (
        <>
           <span className={styles.gpio}>GPIO2</span>  (3) (4)  
          <span className={styles.power5v}>5V</span>
          <br />
        </>
      );
    case ' GPIO3  (5) (6)  GND\n':
      return (
        <>
           <span className={styles.gpio}>GPIO3</span>  (5) (6)  
          <span className={styles.ground}>GND</span>
          <br />
        </>
      );
    case ' GPIO4  (7) (8)  GPIO14\n':
      return (
        <>
           <span className={styles.gpio}>GPIO4</span>  (7) (8)  
          <span className={styles.gpio}>GPIO14</span>
          <br />
        </>
      );
    case '   GND  (9) (10) GPIO15\n':
      return (
        <>
             <span className={styles.ground}>GND</span>  (9) (10) 
          <span className={styles.gpio}>GPIO15</span>
          <br />
        </>
      );
    case 'GPIO17 (11) (12) GPIO18\n':
      return (
        <>
          <span className={styles.gpio}>GPIO17</span> (11) (12) 
          <span className={styles.gpio}>GPIO18</span>
          <br />
        </>
      );
    case 'GPIO27 (13) (14) GND\n':
      return (
        <>
          <span className={styles.gpio}>GPIO27</span> (13) (14) 
          <span className={styles.ground}>GND</span>
          <br />
        </>
      );
    case 'GPIO22 (15) (16) GPIO23\n':
      return (
        <>
          <span className={styles.gpio}>GPIO22</span> (15) (16) 
          <span className={styles.gpio}>GPIO23</span>
          <br />
        </>
      );
    case '   3V3 (17) (18) GPIO24\n':
      return (
        <>
             <span className={styles.power3v}>3V3</span> (17) (18) 
          <span className={styles.gpio}>GPIO24</span>
          <br />
        </>
      );
    case 'GPIO10 (19) (20) GND\n':
      return (
        <>
          <span className={styles.gpio}>GPIO10</span> (19) (20) 
          <span className={styles.ground}>GND</span>
          <br />
        </>
      );
    case ' GPIO9 (21) (22) GPIO25\n':
      return (
        <>
           <span className={styles.gpio}>GPIO9</span> (21) (22) 
          <span className={styles.gpio}>GPIO25</span>
          <br />
        </>
      );
    case 'GPIO11 (23) (24) GPIO8\n':
      return (
        <>
          <span className={styles.gpio}>GPIO11</span> (23) (24) 
          <span className={styles.gpio}>GPIO8</span>
          <br />
        </>
      );
    case '   GND (25) (26) GPIO7\n':
      return (
        <>
             <span className={styles.ground}>GND</span> (25) (26) 
          <span className={styles.gpio}>GPIO7</span>
          <br />
        </>
      );
    // J8
    case ' GPIO0 (27) (28) GPIO1\n':
      return (
        <>
           <span className={styles.gpio}>GPIO0</span> (27) (28) 
          <span className={styles.gpio}>GPIO1</span>
          <br />
        </>
      );
    case ' GPIO5 (29) (30) GND\n':
      return (
        <>
           <span className={styles.gpio}>GPIO5</span> (29) (30) 
          <span className={styles.ground}>GND</span>
          <br />
        </>
      );
    case ' GPIO6 (31) (32) GPIO12\n':
      return (
        <>
           <span className={styles.gpio}>GPIO6</span> (31) (32) 
          <span className={styles.gpio}>GPIO12</span>
          <br />
        </>
      );
    case 'GPIO13 (33) (34) GND\n':
      return (
        <>
          <span className={styles.gpio}>GPIO13</span> (33) (34) 
          <span className={styles.ground}>GND</span>
          <br />
        </>
      );
    case 'GPIO19 (35) (36) GPIO16\n':
      return (
        <>
          <span className={styles.gpio}>GPIO19</span> (35) (36) 
          <span className={styles.gpio}>GPIO16</span>
          <br />
        </>
      );
    case 'GPIO26 (37) (38) GPIO20\n':
      return (
        <>
          <span className={styles.gpio}>GPIO26</span> (37) (38) 
          <span className={styles.gpio}>GPIO20</span>
          <br />
        </>
      );
    case '   GND (39) (40) GPIO21\n':
      return (
        <>
             <span className={styles.ground}>GND</span> (39) (40) 
          <span className={styles.gpio}>GPIO21</span>
          <br />
        </>
      );
    // J9 / J14 / POE
    case 'TR01 TAP (1) (2) TR00 TAP\n':
      return (
        <>
          <span className={styles.pin}>TR01 TAP</span> (1) (2) 
          <span className={styles.pin}>TR00 TAP</span>
          <br />
        </>
      );
    case 'TR03 TAP (3) (4) TR02 TAP\n':
      return (
        <>
          <span className={styles.pin}>TR03 TAP</span> (3) (4) 
          <span className={styles.pin}>TR02 TAP</span>
          <br />
        </>
      );
    // P1 Raspberry Pi B rev 1.0
    case ' GPIO0  (3) (4)  5V\n':
      return (
        <>
           <span className={styles.gpio}>GPIO0</span>  (3) (4)  
          <span className={styles.power5v}>5V</span>
          <br />
        </>
      );
    case ' GPIO1  (5) (6)  GND\n':
      return (
        <>
           <span className={styles.gpio}>GPIO1</span>  (5) (6)  
          <span className={styles.ground}>5V</span>
          <br />
        </>
      );
    case 'GPIO21 (13) (14) GND\n':
      return (
        <>
          <span className={styles.gpio}>GPIO21</span> (13) (14) 
          <span className={styles.ground}>GND</span>
          <br />
        </>
      );
    // P2
    case 'GPU JTAG (1)\n':
      return (
        <>
          <span className={styles.pin}>GPU JTAG</span> (1)
          <br />
        </>
      );
    case 'GPU JTAG (2)\n':
      return (
        <>
          <span className={styles.pin}>GPU JTAG</span> (2)
          <br />
        </>
      );
    case 'GPU JTAG (3)\n':
      return (
        <>
          <span className={styles.pin}>GPU JTAG</span> (3)
          <br />
        </>
      );
    case 'GPU JTAG (4)\n':
      return (
        <>
          <span className={styles.pin}>GPU JTAG</span> (4)
          <br />
        </>
      );
    case 'GPU JTAG (5)\n':
      return (
        <>
          <span className={styles.pin}>GPU JTAG</span> (5)
          <br />
        </>
      );
    case 'GPU JTAG (6)\n':
      return (
        <>
          <span className={styles.pin}>GPU JTAG</span> (6)
          <br />
        </>
      );
    case 'GPU JTAG (7)\n':
      return (
        <>
          <span className={styles.pin}>GPU JTAG</span> (7)
          <br />
        </>
      );
    case 'GPU JTAG (8)\n':
      return (
        <>
          <span className={styles.pin}>GPU JTAG</span> (8)
          <br />
        </>
      );
    // P3
    case 'LAN JTAG (1)\n':
      return (
        <>
          <span className={styles.pin}>LAN JTAG</span> (1)
          <br />
        </>
      );
    case 'LAN JTAG (2)\n':
      return (
        <>
          <span className={styles.pin}>LAN JTAG</span> (2)
          <br />
        </>
      );
    case 'LAN JTAG (3)\n':
      return (
        <>
          <span className={styles.pin}>LAN JTAG</span> (3)
          <br />
        </>
      );
    case 'LAN JTAG (4)\n':
      return (
        <>
          <span className={styles.pin}>LAN JTAG</span> (4)
          <br />
        </>
      );
    case 'LAN JTAG (5)\n':
      return (
        <>
          <span className={styles.pin}>LAN JTAG</span> (5)
          <br />
        </>
      );
    case 'LAN JTAG (6)\n':
      return (
        <>
          <span className={styles.pin}>LAN JTAG</span> (6)
          <br />
        </>
      );
    case 'LAN JTAG (7)\n':
      return (
        <>
          <span className={styles.pin}>LAN JTAG</span> (7)
          <br />
        </>
      );
    // P5
    case '    5V (1) (2) 3V3\n':
      return (
        <>
              <span className={styles.power5v}>5V</span> (1) (2) 
          <span className={styles.power3v}>3V3</span>
          <br />
        </>
      );
    case 'GPIO28 (3) (4) GPIO29\n':
      return (
        <>
          <span className={styles.gpio}>GPIO28</span> (3) (4) 
          <span className={styles.gpio}>GPIO29</span>
          <br />
        </>
      );
    case 'GPIO30 (5) (6) GPIO31\n':
      return (
        <>
          <span className={styles.gpio}>GPIO30</span> (5) (6) 
          <span className={styles.gpio}>GPIO31</span>
          <br />
        </>
      );
    case '   GND (7) (8) GND\n':
      return (
        <>
             <span className={styles.ground}>GND</span> (7) (8) 
          <span className={styles.ground}>GND</span>
          <br />
        </>
      );
    // POE
    case 'TR01 (1) (2) TR00\n':
      return (
        <>
          <span className={styles.pin}>TR01</span> (1) (2) 
          <span className={styles.pin}>TR00</span>
          <br />
        </>
      );
    case 'TR03 (3) (4) TR02\n':
      return (
        <>
          <span className={styles.pin}>TR03</span> (3) (4) 
          <span className={styles.pin}>TR02</span>
          <br />
        </>
      );
    // RUN
    case 'POWER ENABLE (1)\n':
      return (
        <>
          <span className={styles.pin}>POWER ENABLE</span> (1)
          <br />
        </>
      );
    case '         RUN (2)\n':
      return (
        <>
                   <span className={styles.pin}>RUN</span> (2)
          <br />
        </>
      );
    case 'For further information, please refer to https://pinout.xyz/\n':
      return (
        <>
          For further information, please refer to 
          <a
            href="https://pinout.xyz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://pinout.xyz/
          </a>
          <br />
        </>
      );
    default:
      return children;
  }
}

export { default as ColorSodimm } from './sodimm';
