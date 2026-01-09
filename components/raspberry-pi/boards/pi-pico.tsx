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
import cn from 'classnames';
import { Children, ReactNode } from 'react';

import { Metal, Plastic, RaspberryPi } from '../raspberry-pi';
import styles from '../raspberry-pi.module.scss';

export default function ColorBoards(children: ReactNode) {
  switch (Children.toArray(children).toString()) {
    // Pi Pico
    case '╭───────────────────────────────────────── Raspberry Pi Pico Pinout ─────────────────────────────────────────╮\n':
      return (
        <RaspberryPi className={cn(styles.silkscreen, styles.transparent)}>
          ╭───────────────────────────────────────── Raspberry Pi Pico Pinout
          ─────────────────────────────────────────╮
        </RaspberryPi>
      );
    case '│                                                 ┏━━━━━┓                                                    │\n':
      return (
        <RaspberryPi className={cn(styles.silkscreen, styles.transparent)}>
          │                                                 
          <Metal>┏━━━━━┓</Metal>
                                                              │
        </RaspberryPi>
      );
    case '│                                            ┏━━━━┫     ┣━━━━┓                                               │\n':
      return (
        <RaspberryPi className={cn(styles.silkscreen, styles.transparent)}>
          │                                            
          <span className={styles.pcb}>
            ┏━━━━<Metal>┫     ┣</Metal>━━━━┓
          </span>
                                                         │
        </RaspberryPi>
      );
    case '│ PWM0 A UART0 TX  I2C0 SDA SPI0 RX      GP0 ┃◎   ┗━━━━━┛   ◎┃ VBUS                                          │\n':
      return (
        <RaspberryPi className={cn(styles.silkscreen, styles.transparent)}>
          │ 
          <span className={styles.pwm}>PWM0 A</span> 
          <span className={styles.uart}>UART0 TX</span>  
          <span className={styles.i2c}>I2C0 SDA</span> 
          <span className={styles.spi}>SPI0 RX</span>      
          <span className={styles.gpio}>GP0</span> 
          <span className={styles.pcb}>
            ┃<span className={styles.pin}>◎</span>   <Metal>┗━━━━━┛</Metal>   
            <span className={styles.pin}>◎</span>┃
          </span>
           <span className={styles.power5v}>VBUS</span>
                                                    │
        </RaspberryPi>
      );
    case '│ PWM0 B UART0 RX  I2C0 SCL SPI0 CSn     GP1 ┃◎ ▩           ◎┃ VSYS                                          │\n':
      return (
        <RaspberryPi className={cn(styles.silkscreen, styles.transparent)}>
          │ 
          <span className={styles.pwm}>PWM0 B</span> 
          <span className={styles.uart}>UART0 RX</span>  
          <span className={styles.i2c}>I2C0 SCL</span> 
          <span className={styles.spi}>SPI0 CSn</span>     
          <span className={styles.gpio}>GP1</span> 
          <span className={styles.pcb}>
            ┃<span className={styles.pin}>◎</span> 
            <span className={styles.pin}>▩</span>           
            <span className={styles.pin}>◎</span>┃
          </span>
           <span className={styles.power5v}>VSYS</span>
                                                    │
        </RaspberryPi>
      );
    case '│                                     Ground ┃▣ └─GP25      ▣┃ Ground                                        │\n':
      return (
        <RaspberryPi className={cn(styles.silkscreen, styles.transparent)}>
          │                                     
          <span className={styles.ground}>Ground</span> 
          <span className={styles.pcb}>
            ┃<span className={styles.pin}>▣</span> └─
            <span className={styles.gpio}>GP25</span>      
            <span className={styles.pin}>▣</span>┃
          </span>
           <span className={styles.ground}>Ground</span>
                                                  │
        </RaspberryPi>
      );
    case '│ PWM1 A UART0 CTS I2C1 SDA SPI0 SCK     GP2 ┃◎  ▒▒▒        ◎┃ 3v3 En                                        │\n':
      return (
        <RaspberryPi className={cn(styles.silkscreen, styles.transparent)}>
          │ 
          <span className={styles.pwm}>PWM1 A</span> 
          <span className={styles.uart}>UART0 CTS</span> 
          <span className={styles.i2c}>I2C1 SDA</span> 
          <span className={styles.spi}>SPI0 SCK</span>     
          <span className={styles.gpio}>GP2</span> 
          <span className={styles.pcb}>
            ┃<span className={styles.pin}>◎</span>  <Metal>   </Metal>        
            <span className={styles.pin}>◎</span>┃
          </span>
           <span className={styles.power3v}>3v3 En</span>
                                                  │
        </RaspberryPi>
      );
    case '│ PWM1 B UART0 RTS I2C1 SCL SPI0 TX      GP3 ┃◎  ▒▒▒        ◎┃ 3v3 Out                                       │\n':
      return (
        <RaspberryPi className={cn(styles.silkscreen, styles.transparent)}>
          │ 
          <span className={styles.pwm}>PWM1 B</span> 
          <span className={styles.uart}>UART0 RTS</span> 
          <span className={styles.i2c}>I2C1 SCL</span> 
          <span className={styles.spi}>SPI0 TX</span>      
          <span className={styles.gpio}>GP3</span> 
          <span className={styles.pcb}>
            ┃<span className={styles.pin}>◎</span>  <Metal>   </Metal>        
            <span className={styles.pin}>◎</span>┃
          </span>
           <span className={styles.power3v}>3v3 Out</span>
                                                 │
        </RaspberryPi>
      );
    case '│ PWM2 A UART1 TX  I2C0 SDA SPI0 RX      GP4 ┃◎             ◎┃ ADC VRef                                      │\n':
      return (
        <RaspberryPi className={cn(styles.silkscreen, styles.transparent)}>
          │ 
          <span className={styles.pwm}>PWM2 A</span> 
          <span className={styles.uart}>UART1 TX</span>  
          <span className={styles.i2c}>I2C0 SDA</span> 
          <span className={styles.spi}>SPI0 RX</span>      
          <span className={styles.gpio}>GP4</span> 
          <span className={styles.pcb}>
            ┃<span className={styles.pin}>◎</span>             
            <span className={styles.pin}>◎</span>┃
          </span>
           <span className={styles.adc}>ADC VRef</span>
                                                │
        </RaspberryPi>
      );
    case '│ PWM2 B UART1 RX  I2C0 SCL SPI0 CSn     GP5 ┃◎             ◎┃ GP28 / A2  SPI1 RX  I2C0 SDA UART0 TX  PWM6 A │\n':
      return (
        <RaspberryPi className={cn(styles.silkscreen, styles.transparent)}>
          │ 
          <span className={styles.pwm}>PWM2 B</span> 
          <span className={styles.uart}>UART1 RX</span>  
          <span className={styles.i2c}>I2C0 SCL</span> 
          <span className={styles.spi}>SPI0 CSn</span>     
          <span className={styles.gpio}>GP5</span> 
          <span className={styles.pcb}>
            ┃<span className={styles.pin}>◎</span>             
            <span className={styles.pin}>◎</span>┃
          </span>
           <span className={styles.adc}>GP28 / A2</span>  
          <span className={styles.spi}>SPI1 RX</span>  
          <span className={styles.i2c}>I2C0 SDA</span> 
          <span className={styles.uart}>UART0 TX</span>  
          <span className={styles.pwm}>PWM6 A</span> │
        </RaspberryPi>
      );
    case '│                                     Ground ┃▣             ▣┃ ADC Ground                                    │\n':
      return (
        <RaspberryPi className={cn(styles.silkscreen, styles.transparent)}>
          │                                     
          <span className={styles.ground}>Ground</span> 
          <span className={styles.pcb}>
            ┃<span className={styles.pin}>▣</span>             
            <span className={styles.pin}>▣</span>┃
          </span>
           <span className={styles.adc}>ADC Ground</span>
                                              │
        </RaspberryPi>
      );
    case '│ PWM3 A UART1 CTS I2C1 SDA SPI0 SCK     GP6 ┃◎   ▓▓▓▓▓▓▓   ◎┃ GP27 / A1  SPI1 TX  I2C1 SCL UART1 RTS PWM5 B │\n':
      return (
        <RaspberryPi className={cn(styles.silkscreen, styles.transparent)}>
          │ 
          <span className={styles.pwm}>PWM3 A</span> 
          <span className={styles.uart}>UART1 CTS</span> 
          <span className={styles.i2c}>I2C1 SDA</span> 
          <span className={styles.spi}>SPI0 SCK</span>     
          <span className={styles.gpio}>GP6</span> 
          <span className={styles.pcb}>
            ┃<span className={styles.pin}>◎</span>   
            <Plastic>       </Plastic>   
            <span className={styles.pin}>◎</span>┃
          </span>
           <span className={styles.adc}>GP27 / A1</span>  
          <span className={styles.spi}>SPI1 TX</span>  
          <span className={styles.i2c}>I2C1 SCL</span> 
          <span className={styles.uart}>UART1 RTS</span> 
          <span className={styles.pwm}>PWM5 B</span> │
        </RaspberryPi>
      );
    case '│ PWM3 B UART1 RTS I2C1 SCL SPI0 TX      GP7 ┃◎   ▓▓▓▓▓▓▓   ◎┃ GP26 / A0  SPI1 SCK I2C1 SDA UART1 CTS PWM5 A │\n':
      return (
        <RaspberryPi className={cn(styles.silkscreen, styles.transparent)}>
          │ 
          <span className={styles.pwm}>PWM3 B</span> 
          <span className={styles.uart}>UART1 RTS</span> 
          <span className={styles.i2c}>I2C1 SCL</span> 
          <span className={styles.spi}>SPI0 TX</span>      
          <span className={styles.gpio}>GP7</span> 
          <span className={styles.pcb}>
            ┃<span className={styles.pin}>◎</span>   
            <Plastic>       </Plastic>   
            <span className={styles.pin}>◎</span>┃
          </span>
           <span className={styles.adc}>GP26 / A0</span>  
          <span className={styles.spi}>SPI1 SCK</span> 
          <span className={styles.i2c}>I2C1 SDA</span> 
          <span className={styles.uart}>UART1 CTS</span> 
          <span className={styles.pwm}>PWM5 A</span> │
        </RaspberryPi>
      );
    case '│ PWM4 A UART1 TX  I2C0 SDA SPI1 RX      GP8 ┃◎   ▓▓▓▓▓▓▓   ◎┃ run                                           │\n':
      return (
        <RaspberryPi className={cn(styles.silkscreen, styles.transparent)}>
          │ 
          <span className={styles.pwm}>PWM4 A</span> 
          <span className={styles.uart}>UART1 TX</span>  
          <span className={styles.i2c}>I2C0 SDA</span> 
          <span className={styles.spi}>SPI1 RX</span>      
          <span className={styles.gpio}>GP8</span> 
          <span className={styles.pcb}>
            ┃<span className={styles.pin}>◎</span>   
            <Plastic>       </Plastic>   
            <span className={styles.pin}>◎</span>┃
          </span>
           <span className={styles.system}>run</span>
                                                     │
        </RaspberryPi>
      );
    case '│ PWM4 B UART1 RX  I2C0 SCL SPI1 CSn     GP9 ┃◎   ▓▓▓▓▓▓▓   ◎┃ GP22       SPI0 SCK I2C1 SDA UART1 CTS PWM3 A │\n':
      return (
        <RaspberryPi className={cn(styles.silkscreen, styles.transparent)}>
          │ 
          <span className={styles.pwm}>PWM4 B</span> 
          <span className={styles.uart}>UART1 RX</span>  
          <span className={styles.i2c}>I2C0 SCL</span> 
          <span className={styles.spi}>SPI1 CSn</span>     
          <span className={styles.gpio}>GP9</span> 
          <span className={styles.pcb}>
            ┃<span className={styles.pin}>◎</span>   
            <Plastic>       </Plastic>   
            <span className={styles.pin}>◎</span>┃
          </span>
           <span className={styles.gpio}>GP22</span>       
          <span className={styles.spi}>SPI0 SCK</span> 
          <span className={styles.i2c}>I2C1 SDA</span> 
          <span className={styles.uart}>UART1 CTS</span> 
          <span className={styles.pwm}>PWM3 A</span> │
        </RaspberryPi>
      );
    case '│                                     Ground ┃▣             ▣┃ Ground                                        │\n':
      return (
        <RaspberryPi className={cn(styles.silkscreen, styles.transparent)}>
          │                                     
          <span className={styles.ground}>Ground</span> 
          <span className={styles.pcb}>
            ┃<span className={styles.pin}>▣</span>             
            <span className={styles.pin}>▣</span>┃
          </span>
           <span className={styles.ground}>Ground</span>
                                                  │
        </RaspberryPi>
      );
    case '│ PWM5 A UART1 CTS I2C1 SDA SPI1 SCK    GP10 ┃◎             ◎┃ GP21       SPI0 CSn I2C0 SCL UART1 RX  PWM2 B │\n':
      return (
        <RaspberryPi className={cn(styles.silkscreen, styles.transparent)}>
          │ 
          <span className={styles.pwm}>PWM5 A</span> 
          <span className={styles.uart}>UART1 CTS</span> 
          <span className={styles.i2c}>I2C1 SDA</span> 
          <span className={styles.spi}>SPI1 SCK</span>    
          <span className={styles.gpio}>GP10</span> 
          <span className={styles.pcb}>
            ┃<span className={styles.pin}>◎</span>             
            <span className={styles.pin}>◎</span>┃
          </span>
           <span className={styles.gpio}>GP21</span>       
          <span className={styles.spi}>SPI0 CSn</span> 
          <span className={styles.i2c}>I2C0 SCL</span> 
          <span className={styles.uart}>UART1 RX</span>  
          <span className={styles.pwm}>PWM2 B</span> │
        </RaspberryPi>
      );
    case '│ PWM5 B UART1 RTS I2C1 SCL SPI1 TX     GP11 ┃◎             ◎┃ GP20       SPI0 RX  I2C0 SDA UART1 TX  PWM2 A │\n':
      return (
        <RaspberryPi className={cn(styles.silkscreen, styles.transparent)}>
          │ 
          <span className={styles.pwm}>PWM5 B</span> 
          <span className={styles.uart}>UART1 RTS</span> 
          <span className={styles.i2c}>I2C1 SCL</span> 
          <span className={styles.spi}>SPI1 TX</span>     
          <span className={styles.gpio}>GP11</span> 
          <span className={styles.pcb}>
            ┃<span className={styles.pin}>◎</span>             
            <span className={styles.pin}>◎</span>┃
          </span>
           <span className={styles.gpio}>GP20</span>       
          <span className={styles.spi}>SPI0 RX</span>  
          <span className={styles.i2c}>I2C0 SDA</span> 
          <span className={styles.uart}>UART1 TX</span>  
          <span className={styles.pwm}>PWM2 A</span> │
        </RaspberryPi>
      );
    case '│ PWM6 A UART0 TX  I2C0 SDA SPI1 RX     GP12 ┃◎             ◎┃ GP19       SPI0 TX  I2C1 SCL UART0 RTS PWM1 B │\n':
      return (
        <RaspberryPi className={cn(styles.silkscreen, styles.transparent)}>
          │ 
          <span className={styles.pwm}>PWM6 A</span> 
          <span className={styles.uart}>UART0 TX</span>  
          <span className={styles.i2c}>I2C0 SDA</span> 
          <span className={styles.spi}>SPI1 RX</span>     
          <span className={styles.gpio}>GP12</span> 
          <span className={styles.pcb}>
            ┃<span className={styles.pin}>◎</span>             
            <span className={styles.pin}>◎</span>┃
          </span>
           <span className={styles.gpio}>GP19</span>       
          <span className={styles.spi}>SPI0 TX</span>  
          <span className={styles.i2c}>I2C1 SCL</span> 
          <span className={styles.uart}>UART0 RTS</span> 
          <span className={styles.pwm}>PWM1 B</span> │
        </RaspberryPi>
      );
    case '│ PWM6 B UART0 RX  I2C0 SCL SPI1 CSn    GP13 ┃◎             ◎┃ GP18       SPI0 SCK I2C1 SDA UART0 CTS PWM1 A │\n':
      return (
        <RaspberryPi className={cn(styles.silkscreen, styles.transparent)}>
          │ 
          <span className={styles.pwm}>PWM6 B</span> 
          <span className={styles.uart}>UART0 RX</span>  
          <span className={styles.i2c}>I2C0 SCL</span> 
          <span className={styles.spi}>SPI1 CSn</span>    
          <span className={styles.gpio}>GP13</span> 
          <span className={styles.pcb}>
            ┃<span className={styles.pin}>◎</span>             
            <span className={styles.pin}>◎</span>┃
          </span>
           <span className={styles.gpio}>GP18</span>       
          <span className={styles.spi}>SPI0 SCK</span> 
          <span className={styles.i2c}>I2C1 SDA</span> 
          <span className={styles.uart}>UART0 CTS</span> 
          <span className={styles.pwm}>PWM1 A</span> │
        </RaspberryPi>
      );
    case '│ PWM7 A UART0 CTS I2C1 SDA SPI1 SCK    GP14 ┃◎             ◎┃ GP17       SPI0 CSn I2C0 SCL UART0 RX  PWM0 B │\n':
      return (
        <RaspberryPi className={cn(styles.silkscreen, styles.transparent)}>
          │ 
          <span className={styles.pwm}>PWM7 A</span> 
          <span className={styles.uart}>UART0 CTS</span> 
          <span className={styles.i2c}>I2C1 SDA</span> 
          <span className={styles.spi}>SPI1 SCK</span>    
          <span className={styles.gpio}>GP14</span> 
          <span className={styles.pcb}>
            ┃<span className={styles.pin}>◎</span>    DEBUG    
            <span className={styles.pin}>◎</span>┃
          </span>
           <span className={styles.gpio}>GP17</span>       
          <span className={styles.spi}>SPI0 CSn</span> 
          <span className={styles.i2c}>I2C0 SCL</span> 
          <span className={styles.uart}>UART0 RX</span>  
          <span className={styles.pwm}>PWM0 B</span> │
        </RaspberryPi>
      );
    case '│ PWM7 B UART0 RTS I2C1 SCL SPI1 TX     GP15 ┃◎    ◎ ▣ ◎    ◎┃ GP16       SPI0 RX  I2C0 SDA UART0 TX  PWM0 A │\n':
      return (
        <RaspberryPi className={cn(styles.silkscreen, styles.transparent)}>
          │ 
          <span className={styles.pwm}>PWM7 B</span> 
          <span className={styles.uart}>UART0 RTS</span> 
          <span className={styles.i2c}>I2C1 SCL</span> 
          <span className={styles.spi}>SPI1 TX</span>     
          <span className={styles.gpio}>GP15</span> 
          <span className={styles.pcb}>
            ┃<span className={styles.pin}>◎</span>    
            <span className={styles.pin}>◎</span> 
            <span className={styles.pin}>▣</span> 
            <span className={styles.pin}>◎</span>    
            <span className={styles.pin}>◎</span>┃
          </span>
           <span className={styles.gpio}>GP16</span>       
          <span className={styles.spi}>SPI0 RX</span>  
          <span className={styles.i2c}>I2C0 SDA</span> 
          <span className={styles.uart}>UART0 TX</span>  
          <span className={styles.pwm}>PWM0 A</span> │
        </RaspberryPi>
      );
    case '│                                            ┗━━━━━━━━━━━━━━━┛                                               │\n':
      return (
        <RaspberryPi className={cn(styles.silkscreen, styles.transparent)}>
          │                                            
          <span className={styles.pcb}>┗━━━━━━━━━━━━━━━┛</span>
                                                         │
        </RaspberryPi>
      );
    case '│ @gadgetoid                                                                                                 │\n':
      return (
        <RaspberryPi className={cn(styles.silkscreen, styles.transparent)}>
          │ @gadgetoid                                 
          <span className={styles.pin}>SWCLK</span> ┘ │ └ 
          <span className={styles.pin}>SWDIO</span>
                                                         │
        </RaspberryPi>
      );
    case '│ https://pico.pinout.xyz                                                                                    │\n':
      return (
        <RaspberryPi className={cn(styles.silkscreen, styles.transparent)}>
          │ 
          <a
            href="https://pico.pinout.xyz"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://pico.pinout.xyz
          </a>
                                     
          <span className={styles.ground}>GND</span>
                                                                │
        </RaspberryPi>
      );
    case '╰────────────────────────────────────────────────────────────────────────────────────────────────────────────╯\n':
      return (
        <RaspberryPi className={cn(styles.silkscreen, styles.transparent)}>
          ╰────────────────────────────────────────────────────────────────────────────────────────────────────────────╯
        </RaspberryPi>
      );
    default:
      return children;
  }
}
