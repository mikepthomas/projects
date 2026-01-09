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

import styles from '../raspberry-pi.module.scss';

export default function ColorSodimm(children: ReactNode) {
  switch (Children.toArray(children).toString()) {
    // Pi CM
    case '           GND   (1) (2)   EMMC DISABLE N\n':
      return (
        <>
                     <span className={styles.ground}>GND</span>   (1) (2)   
          <span className={styles.pin}>EMMC DISABLE N</span>
          <br />
        </>
      );
    case '         GPIO0   (3) (4)   NC\n':
      return (
        <>
                   <span className={styles.gpio}>GPIO0</span>   (3) (4)   
          <span className={styles.ground}>NC</span>
          <br />
        </>
      );
    case '         GPIO1   (5) (6)   NC\n':
      return (
        <>
                   <span className={styles.gpio}>GPIO1</span>   (5) (6)   
          <span className={styles.ground}>NC</span>
          <br />
        </>
      );
    case '           GND   (7) (8)   NC\n':
      return (
        <>
                     <span className={styles.ground}>GND</span>   (7) (8)   
          <span className={styles.ground}>NC</span>
          <br />
        </>
      );
    case '         GPIO2   (9) (10)  NC\n':
      return (
        <>
                   <span className={styles.gpio}>GPIO2</span>   (9) (10)  
          <span className={styles.ground}>NC</span>
          <br />
        </>
      );
    case '         GPIO3  (11) (12)  NC\n':
      return (
        <>
                   <span className={styles.gpio}>GPIO3</span>  (11) (12)  
          <span className={styles.ground}>NC</span>
          <br />
        </>
      );
    case '           GND  (13) (14)  NC\n':
      return (
        <>
                     <span className={styles.ground}>GND</span>  (13) (14)  
          <span className={styles.ground}>NC</span>
          <br />
        </>
      );
    case '         GPIO4  (15) (16)  NC\n':
      return (
        <>
                   <span className={styles.gpio}>GPIO4</span>  (15) (16)  
          <span className={styles.ground}>NC</span>
          <br />
        </>
      );
    case '         GPIO5  (17) (18)  NC\n':
      return (
        <>
                   <span className={styles.gpio}>GPIO5</span>  (17) (18)  
          <span className={styles.ground}>NC</span>
          <br />
        </>
      );
    case '           GND  (19) (20)  NC\n':
      return (
        <>
                     <span className={styles.ground}>GND</span>  (19) (20)  
          <span className={styles.ground}>NC</span>
          <br />
        </>
      );
    case '         GPIO6  (21) (22)  NC\n':
      return (
        <>
                   <span className={styles.gpio}>GPIO6</span>  (21) (22)  
          <span className={styles.ground}>NC</span>
          <br />
        </>
      );
    case '         GPIO7  (23) (24)  NC\n':
      return (
        <>
                   <span className={styles.gpio}>GPIO7</span>  (23) (24)  
          <span className={styles.ground}>NC</span>
          <br />
        </>
      );
    case '           GND  (25) (26)  GND\n':
      return (
        <>
                     <span className={styles.ground}>GND</span>  (25) (26)  
          <span className={styles.ground}>GND</span>
          <br />
        </>
      );
    case '         GPIO8  (27) (28)  GPIO28\n':
      return (
        <>
                   <span className={styles.gpio}>GPIO8</span>  (27) (28)  
          <span className={styles.gpio}>GPIO28</span>
          <br />
        </>
      );
    case '         GPIO9  (29) (30)  GPIO29\n':
      return (
        <>
                   <span className={styles.gpio}>GPIO9</span>  (29) (30)  
          <span className={styles.gpio}>GPIO29</span>
          <br />
        </>
      );
    case '           GND  (31) (32)  GND\n':
      return (
        <>
                     <span className={styles.ground}>GND</span>  (31) (32)  
          <span className={styles.ground}>GND</span>
          <br />
        </>
      );
    case '        GPIO10  (33) (34)  GPIO30\n':
      return (
        <>
                  <span className={styles.gpio}>GPIO10</span>  (33) (34)  
          <span className={styles.gpio}>GPIO30</span>
          <br />
        </>
      );
    case '        GPIO11  (35) (36)  GPIO31\n':
      return (
        <>
                  <span className={styles.gpio}>GPIO11</span>  (35) (36)  
          <span className={styles.gpio}>GPIO31</span>
          <br />
        </>
      );
    case '           GND  (37) (38)  GND\n':
      return (
        <>
                     <span className={styles.ground}>GND</span>  (37) (38)  
          <span className={styles.ground}>GND</span>
          <br />
        </>
      );
    case ' GPIO0-27 VREF  (39) (40)  GPIO0-27 VREF\n':
      return (
        <>
           <span className={styles.pin}>GPIO0-27 VREF</span>  (39) (40)  
          <span className={styles.pin}>GPIO0-27 VREF</span>
          <br />
        </>
      );
    case 'GPIO28-45 VREF  (41) (42)  GPIO28-45 VREF\n':
      return (
        <>
          <span className={styles.pin}>GPIO28-45 VREF</span>  (41) (42)  
          <span className={styles.pin}>GPIO28-45 VREF</span>
          <br />
        </>
      );
    case '           GND  (43) (44)  GND\n':
      return (
        <>
                     <span className={styles.ground}>GND</span>  (43) (44)  
          <span className={styles.ground}>GND</span>
          <br />
        </>
      );
    case '        GPIO12  (45) (46)  GPIO32\n':
      return (
        <>
                  <span className={styles.gpio}>GPIO12</span>  (45) (46)  
          <span className={styles.gpio}>GPIO32</span>
          <br />
        </>
      );
    case '        GPIO13  (47) (48)  GPIO33\n':
      return (
        <>
                  <span className={styles.gpio}>GPIO13</span>  (47) (48)  
          <span className={styles.gpio}>GPIO33</span>
          <br />
        </>
      );
    case '           GND  (49) (50)  GND\n':
      return (
        <>
                     <span className={styles.ground}>GND</span>  (49) (50)  
          <span className={styles.ground}>GND</span>
          <br />
        </>
      );
    case '           GND  (51) (52)  GND\n':
      return (
        <>
                     <span className={styles.ground}>GND</span>  (51) (52)  
          <span className={styles.ground}>GND</span>
          <br />
        </>
      );
    case '        GPIO14  (51) (52)  GPIO34\n':
      return (
        <>
                  <span className={styles.gpio}>GPIO14</span>  (51) (52)  
          <span className={styles.gpio}>GPIO34</span>
          <br />
        </>
      );
    case '        GPIO15  (53) (54)  GPIO35\n':
      return (
        <>
                  <span className={styles.gpio}>GPIO15</span>  (53) (54)  
          <span className={styles.gpio}>GPIO35</span>
          <br />
        </>
      );
    case '           GND  (55) (56)  GND\n':
      return (
        <>
                     <span className={styles.ground}>GND</span>  (55) (56)  
          <span className={styles.ground}>GND</span>
          <br />
        </>
      );
    case '        GPIO16  (57) (58)  GPIO36\n':
      return (
        <>
                  <span className={styles.gpio}>GPIO16</span>  (57) (58)  
          <span className={styles.gpio}>GPIO36</span>
          <br />
        </>
      );
    case '        GPIO17  (59) (60)  GPIO37\n':
      return (
        <>
                  <span className={styles.gpio}>GPIO17</span>  (59) (60)  
          <span className={styles.gpio}>GPIO37</span>
          <br />
        </>
      );
    case '           GND  (61) (62)  GND\n':
      return (
        <>
                     <span className={styles.ground}>GND</span>  (61) (62)  
          <span className={styles.ground}>GND</span>
          <br />
        </>
      );
    case '        GPIO18  (63) (64)  GPIO38\n':
      return (
        <>
                  <span className={styles.gpio}>GPIO18</span>  (63) (64)  
          <span className={styles.gpio}>GPIO38</span>
          <br />
        </>
      );
    case '        GPIO19  (65) (66)  GPIO39\n':
      return (
        <>
                  <span className={styles.gpio}>GPIO19</span>  (65) (66)  
          <span className={styles.gpio}>GPIO39</span>
          <br />
        </>
      );
    case '           GND  (67) (68)  GND\n':
      return (
        <>
                     <span className={styles.ground}>GND</span>  (67) (68)  
          <span className={styles.ground}>GND</span>
          <br />
        </>
      );
    case '        GPIO20  (69) (70)  GPIO40\n':
      return (
        <>
                  <span className={styles.gpio}>GPIO20</span>  (69) (70)  
          <span className={styles.gpio}>GPIO40</span>
          <br />
        </>
      );
    case '        GPIO21  (71) (72)  GPIO41\n':
      return (
        <>
                  <span className={styles.gpio}>GPIO21</span>  (71) (72)  
          <span className={styles.gpio}>GPIO41</span>
          <br />
        </>
      );
    case '           GND  (73) (74)  GND\n':
      return (
        <>
                     <span className={styles.ground}>GND</span>  (73) (74)  
          <span className={styles.ground}>GND</span>
          <br />
        </>
      );
    case '        GPIO22  (75) (76)  GPIO42\n':
      return (
        <>
                  <span className={styles.gpio}>GPIO22</span>  (75) (76)  
          <span className={styles.gpio}>GPIO42</span>
          <br />
        </>
      );
    case '        GPIO23  (77) (78)  GPIO43\n':
      return (
        <>
                  <span className={styles.gpio}>GPIO23</span>  (77) (78)  
          <span className={styles.gpio}>GPIO43</span>
          <br />
        </>
      );
    case '           GND  (79) (80)  GND\n':
      return (
        <>
                     <span className={styles.ground}>GND</span>  (79) (80)  
          <span className={styles.ground}>GND</span>
          <br />
        </>
      );
    case '        GPIO24  (81) (82)  GPIO44\n':
      return (
        <>
                  <span className={styles.gpio}>GPIO24</span>  (81) (82)  
          <span className={styles.gpio}>GPIO44</span>
          <br />
        </>
      );
    case '        GPIO25  (83) (84)  GPIO45\n':
      return (
        <>
                  <span className={styles.gpio}>GPIO25</span>  (83) (84)  
          <span className={styles.gpio}>GPIO45</span>
          <br />
        </>
      );
    case '           GND  (85) (86)  GND\n':
      return (
        <>
                     <span className={styles.ground}>GND</span>  (85) (86)  
          <span className={styles.ground}>GND</span>
          <br />
        </>
      );
    case '        GPIO26  (87) (88)  GPIO46 1V8\n':
      return (
        <>
                  <span className={styles.gpio}>GPIO26</span>  (87) (88)  
          <span className={styles.pin}>GPIO46 1V8</span>
          <br />
        </>
      );
    case '        GPIO27  (89) (90)  GPIO47 1V8\n':
      return (
        <>
                  <span className={styles.gpio}>GPIO27</span>  (89) (90)  
          <span className={styles.pin}>GPIO47 1V8</span>
          <br />
        </>
      );
    case '           GND  (91) (92)  GND\n':
      return (
        <>
                     <span className={styles.ground}>GND</span>  (91) (92)  
          <span className={styles.ground}>GND</span>
          <br />
        </>
      );
    case '      DSI0 DN1  (93) (94)  DSI1 DP0\n':
      return (
        <>
                <span className={styles.pin}>DSI0 DN1</span>  (92) (94)  
          <span className={styles.pin}>DSI1 DP0</span>
          <br />
        </>
      );
    case '      DSI0 DP1  (95) (96)  DSI1 DN0\n':
      return (
        <>
                <span className={styles.pin}>DSI0 DP1</span>  (95) (96)  
          <span className={styles.pin}>DSI1 DN0</span>
          <br />
        </>
      );
    case '           GND  (97) (98)  GND\n':
      return (
        <>
                     <span className={styles.ground}>GND</span>  (97) (98)  
          <span className={styles.ground}>GND</span>
          <br />
        </>
      );
    case '      DSI0 DN0  (99) (100) DSI1 CP\n':
      return (
        <>
                <span className={styles.pin}>DSI0 DN0</span>  (95) (100) 
          <span className={styles.pin}>DSI1 CP</span>
          <br />
        </>
      );
    case '      DSI0 DP0 (101) (102) DSI1 CN\n':
      return (
        <>
                <span className={styles.pin}>DSI0 DP0</span> (101) (102) 
          <span className={styles.pin}>DSI1 CN</span>
          <br />
        </>
      );
    case '           GND (103) (104) GND\n':
      return (
        <>
                     <span className={styles.ground}>GND</span> (103) (104) 
          <span className={styles.ground}>GND</span>
          <br />
        </>
      );
    case '       DSI0 CN (105) (106) DSI1 DP3\n':
      return (
        <>
                 <span className={styles.pin}>DSI0 CN</span> (105) (106) 
          <span className={styles.pin}>DSI1 DP3</span>
          <br />
        </>
      );
    case '       DSI0 CP (107) (108) DSI1 DN3\n':
      return (
        <>
                 <span className={styles.pin}>DSI0 CP</span> (107) (108) 
          <span className={styles.pin}>DSI1 DN3</span>
          <br />
        </>
      );
    case '           GND (109) (110) GND\n':
      return (
        <>
                     <span className={styles.ground}>GND</span> (109) (110) 
          <span className={styles.ground}>GND</span>
          <br />
        </>
      );
    case '     HDMI CK N (111) (112) DSI1 DP2\n':
      return (
        <>
               <span className={styles.pin}>HDMI CK N</span> (111) (112) 
          <span className={styles.pin}>DSI1 DP2</span>
          <br />
        </>
      );
    case '     HDMI CK P (113) (114) DSI1 DN2\n':
      return (
        <>
               <span className={styles.pin}>HDMI CK P</span> (113) (114) 
          <span className={styles.pin}>DSI1 DN2</span>
          <br />
        </>
      );
    case '           GND (115) (116) GND\n':
      return (
        <>
                     <span className={styles.ground}>GND</span> (115) (116) 
          <span className={styles.ground}>GND</span>
          <br />
        </>
      );
    case '     HDMI D0 N (117) (118) DSI1 DP1\n':
      return (
        <>
               <span className={styles.pin}>HDMI D0 N</span> (117) (118) 
          <span className={styles.pin}>DSI1 DP1</span>
          <br />
        </>
      );
    case '     HDMI D0 P (119) (120) DSI1 DN1\n':
      return (
        <>
               <span className={styles.pin}>HDMI D0 P</span> (119) (120) 
          <span className={styles.pin}>DSI1 DN1</span>
          <br />
        </>
      );
    case '           GND (121) (122) GND\n':
      return (
        <>
                     <span className={styles.ground}>GND</span> (121) (122) 
          <span className={styles.ground}>GND</span>
          <br />
        </>
      );
    case '     HDMI D1 N (123) (124) NC\n':
      return (
        <>
               <span className={styles.pin}>HDMI D1 N</span> (123) (124) 
          <span className={styles.ground}>NC</span>
          <br />
        </>
      );
    case '     HDMI D1 P (125) (126) NC\n':
      return (
        <>
               <span className={styles.pin}>HDMI D1 P</span> (125) (126) 
          <span className={styles.ground}>NC</span>
          <br />
        </>
      );
    case '           GND (127) (128) NC\n':
      return (
        <>
                     <span className={styles.ground}>GND</span> (127) (128) 
          <span className={styles.ground}>NC</span>
          <br />
        </>
      );
    case '     HDMI D2 N (129) (130) NC\n':
      return (
        <>
               <span className={styles.pin}>HDMI D2 N</span> (129) (130) 
          <span className={styles.ground}>NC</span>
          <br />
        </>
      );
    case '     HDMI D2 P (131) (132) NC\n':
      return (
        <>
               <span className={styles.pin}>HDMI D2 P</span> (131) (132) 
          <span className={styles.ground}>NC</span>
          <br />
        </>
      );
    case '           GND (133) (134) GND\n':
      return (
        <>
                     <span className={styles.ground}>GND</span> (133) (134) 
          <span className={styles.ground}>GND</span>
          <br />
        </>
      );
    case '      CAM1 DP3 (135) (136) CAM0 DP0\n':
      return (
        <>
                <span className={styles.pin}>CAM1 DP3</span> (135) (136) 
          <span className={styles.pin}>CAM0 DP0</span>
          <br />
        </>
      );
    case '      CAM1 DN3 (137) (138) CAM0 DN0\n':
      return (
        <>
                <span className={styles.pin}>CAM1 DN3</span> (137) (138) 
          <span className={styles.pin}>CAM0 DN0</span>
          <br />
        </>
      );
    case '           GND (139) (140) GND\n':
      return (
        <>
                     <span className={styles.ground}>GND</span> (139) (140) 
          <span className={styles.ground}>GND</span>
          <br />
        </>
      );
    case '      CAM1 DP2 (141) (142) CAM0 CP\n':
      return (
        <>
                <span className={styles.pin}>CAM1 DP2</span> (141) (142) 
          <span className={styles.pin}>CAM0 CP</span>
          <br />
        </>
      );
    case '      CAM1 DN2 (143) (144) CAM0 CN\n':
      return (
        <>
                <span className={styles.pin}>CAM1 DN2</span> (143) (144) 
          <span className={styles.pin}>CAM0 CN</span>
          <br />
        </>
      );
    case '           GND (145) (146) GND\n':
      return (
        <>
                     <span className={styles.ground}>GND</span> (145) (146) 
          <span className={styles.ground}>GND</span>
          <br />
        </>
      );
    case '       CAM1 CP (147) (148) CAM0 DP1\n':
      return (
        <>
                <span className={styles.pin}>CAM1 DP2</span> (147) (148) 
          <span className={styles.pin}>CAM0 DP1</span>
          <br />
        </>
      );
    case '       CAM1 CN (149) (150) CAM0 DN1\n':
      return (
        <>
                <span className={styles.pin}>CAM1 DN2</span> (149) (150) 
          <span className={styles.pin}>CAM0 DN1</span>
          <br />
        </>
      );
    case '           GND (151) (152) GND\n':
      return (
        <>
                     <span className={styles.ground}>GND</span> (151) (152) 
          <span className={styles.ground}>GND</span>
          <br />
        </>
      );
    case '      CAM1 DP1 (153) (154) NC\n':
      return (
        <>
                <span className={styles.pin}>CAM1 DP1</span> (153) (154) 
          <span className={styles.ground}>NC</span>
          <br />
        </>
      );
    case '      CAM1 DN1 (155) (156) NC\n':
      return (
        <>
                <span className={styles.pin}>CAM1 DN1</span> (155) (156) 
          <span className={styles.ground}>NC</span>
          <br />
        </>
      );
    case '           GND (157) (158) NC\n':
      return (
        <>
                     <span className={styles.ground}>GND</span> (157) (158) 
          <span className={styles.ground}>NC</span>
          <br />
        </>
      );
    case '      CAM1 DP0 (159) (160) NC\n':
      return (
        <>
                <span className={styles.pin}>CAM1 DP0</span> (159) (160) 
          <span className={styles.ground}>NC</span>
          <br />
        </>
      );
    case '      CAM1 DN0 (161) (162) NC\n':
      return (
        <>
                <span className={styles.pin}>CAM1 DN0</span> (161) (162) 
          <span className={styles.ground}>NC</span>
          <br />
        </>
      );
    case '           GND (163) (164) GND\n':
      return (
        <>
                     <span className={styles.ground}>GND</span> (163) (164) 
          <span className={styles.ground}>GND</span>
          <br />
        </>
      );
    case '        USB DP (165) (166) TVDAC\n':
      return (
        <>
                  <span className={styles.pin}>USB DP</span> (165) (166) 
          <span className={styles.pin}>TVDAC</span>
          <br />
        </>
      );
    case '        USB DM (167) (168) USB OTGID\n':
      return (
        <>
                  <span className={styles.pin}>USB DM</span> (167) (168) 
          <span className={styles.pin}>USB OTGID</span>
          <br />
        </>
      );
    case '           GND (169) (170) GND\n':
      return (
        <>
                     <span className={styles.ground}>GND</span> (169) (170) 
          <span className={styles.ground}>GND</span>
          <br />
        </>
      );
    case '      HDMI CEC (171) (172) VC TRST N\n':
      return (
        <>
                <span className={styles.pin}>HDMI CEC</span> (171) (172) 
          <span className={styles.pin}>VC TRST N</span>
          <br />
        </>
      );
    case '      HDMI SDA (173) (174) VC TDI\n':
      return (
        <>
                <span className={styles.pin}>HDMI SDA</span> (173) (174) 
          <span className={styles.pin}>VC TDI</span>
          <br />
        </>
      );
    case '      HDMI SCL (175) (176) VC TMS\n':
      return (
        <>
                <span className={styles.pin}>HDMI SCL</span> (175) (176) 
          <span className={styles.pin}>VC TMS</span>
          <br />
        </>
      );
    case '           RUN (177) (178) VC TDO\n':
      return (
        <>
                     <span className={styles.pin}>RUN</span> (177) (178) 
          <span className={styles.pin}>VC TDO</span>
          <br />
        </>
      );
    case '      VDD CORE (179) (180) VC TCK\n':
      return (
        <>
                <span className={styles.pin}>VDD CORE</span> (179) (180) 
          <span className={styles.pin}>VC TCK</span>
          <br />
        </>
      );
    case '           GND (181) (182) GND\n':
      return (
        <>
                     <span className={styles.ground}>GND</span> (181) (182) 
          <span className={styles.ground}>GND</span>
          <br />
        </>
      );
    case '           1V8 (183) (184) 1V8\n':
      return (
        <>
                     <span className={styles.power3v}>1V8</span> (183) (184) 
          <span className={styles.power3v}>1V8</span>
          <br />
        </>
      );
    case '           1V8 (185) (186) 1V8\n':
      return (
        <>
                     <span className={styles.power3v}>1V8</span> (185) (186) 
          <span className={styles.power3v}>1V8</span>
          <br />
        </>
      );
    case '           GND (187) (188) GND\n':
      return (
        <>
                     <span className={styles.ground}>GND</span> (187) (188) 
          <span className={styles.ground}>GND</span>
          <br />
        </>
      );
    case '          VDAC (189) (190) VDAC\n':
      return (
        <>
                    <span className={styles.pin}>VDAC</span> (189) (190) 
          <span className={styles.pin}>VDAC</span>
          <br />
        </>
      );
    case '           3V3 (191) (192) 3V3\n':
      return (
        <>
                     <span className={styles.power3v}>3V3</span> (191) (192) 
          <span className={styles.power3v}>3V3</span>
          <br />
        </>
      );
    case '           3V3 (193) (194) 3V3\n':
      return (
        <>
                     <span className={styles.power3v}>3V3</span> (193) (194) 
          <span className={styles.power3v}>3V3</span>
          <br />
        </>
      );
    case '           GND (195) (196) GND\n':
      return (
        <>
                     <span className={styles.ground}>GND</span> (195) (196) 
          <span className={styles.ground}>GND</span>
          <br />
        </>
      );
    case '          VBAT (197) (198) VBAT\n':
      return (
        <>
                    <span className={styles.pin}>VBAT</span> (197) (198) 
          <span className={styles.pin}>VBAT</span>
          <br />
        </>
      );
    case '          VBAT (199) (200) VBAT\n':
      return (
        <>
                    <span className={styles.pin}>VBAT</span> (199) (200) 
          <span className={styles.pin}>VBAT</span>
          <br />
        </>
      );
    // Pi CM3
    case '         GPIO0   (3) (4)   NC / SDX VREF\n':
      return (
        <>
                   <span className={styles.gpio}>GPIO0</span>   (3) (4)   
          <span className={styles.pin}>NC / SDX VREF</span>
          <br />
        </>
      );
    case '         GPIO1   (5) (6)   NC / SDX VREF\n':
      return (
        <>
                   <span className={styles.gpio}>GPIO1</span>   (5) (6)   
          <span className={styles.pin}>NC / SDX VREF</span>
          <br />
        </>
      );
    case '           GND   (7) (8)   GND\n':
      return (
        <>
                     <span className={styles.ground}>GND</span>   (7) (8)   
          <span className={styles.ground}>GND</span>
          <br />
        </>
      );
    case '         GPIO2   (9) (10)  NC / SDX CLK\n':
      return (
        <>
                   <span className={styles.gpio}>GPIO2</span>   (9) (10)  
          <span className={styles.pin}>NC / SDX CLK</span>
          <br />
        </>
      );
    case '         GPIO3  (11) (12)  NC / SDX CMD\n':
      return (
        <>
                   <span className={styles.gpio}>GPIO3</span>  (11) (12)  
          <span className={styles.pin}>NC / SDX CMD</span>
          <br />
        </>
      );
    case '           GND  (13) (14)  GND\n':
      return (
        <>
                     <span className={styles.ground}>GND</span>  (13) (14)  
          <span className={styles.ground}>GND</span>
          <br />
        </>
      );
    case '         GPIO4  (15) (16)  NC / SDX D0\n':
      return (
        <>
                   <span className={styles.gpio}>GPIO4</span>  (15) (16)  
          <span className={styles.pin}>NC / SDX D0</span>
          <br />
        </>
      );
    case '         GPIO5  (17) (18)  NC / SDX D1\n':
      return (
        <>
                   <span className={styles.gpio}>GPIO5</span>  (17) (18)  
          <span className={styles.pin}>NC / SDX D1</span>
          <br />
        </>
      );
    case '           GND  (19) (20)  GND\n':
      return (
        <>
                     <span className={styles.ground}>GND</span>  (13) (14)  
          <span className={styles.ground}>GND</span>
          <br />
        </>
      );
    case '         GPIO6  (21) (22)  NC / SDX D2\n':
      return (
        <>
                   <span className={styles.gpio}>GPIO6</span>  (21) (22)  
          <span className={styles.pin}>NC / SDX D2</span>
          <br />
        </>
      );
    case '         GPIO7  (23) (24)  NC / SDX D3\n':
      return (
        <>
                   <span className={styles.gpio}>GPIO7</span>  (23) (24)  
          <span className={styles.pin}>NC / SDX D3</span>
          <br />
        </>
      );
    case '        GPIO26  (87) (88)  HDMI HPD N 1V8\n':
      return (
        <>
                  <span className={styles.gpio}>GPIO26</span>  (87) (88)  
          <span className={styles.pin}>HDMI HPD N 1V8</span>
          <br />
        </>
      );
    case '        GPIO27  (89) (90)  EMMC EN N 1V8\n':
      return (
        <>
                  <span className={styles.gpio}>GPIO27</span>  (89) (90)  
          <span className={styles.pin}>EMMC EN N 1V8</span>
          <br />
        </>
      );
    default:
      return children;
  }
}
