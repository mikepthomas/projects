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
import cn from 'classnames';

import styles from './raspberry-pi.module.scss';

export type Props = {
  children: ReactNode;
  className?: string;
};
type ConnectorProps = {
  children?: ReactNode;
  className?: string;
  left?: boolean;
  lower?: boolean;
  metal?: boolean;
  right?: boolean;
};
type HeaderProps = {
  P1?: boolean;
  P5?: boolean;
};

export const RaspberryPi = ({ children, className }: Props) => (
  <span className={styles.raspberrypi}>
    <span className={cn(className, styles.pcb)}>{children}</span>
  </span>
);

export const Metal = ({ children, className }: Props) => (
  <span className={cn(className, styles.metal)}>{children}</span>
);
export const Plastic = ({ children, className }: Props) => (
  <span className={cn(className, styles.plastic)}>{children}</span>
);
export const Highlight = ({ children }: Props) => (
  <span className={styles.highlight}>{children}</span>
);
export const SilkScreen = ({ children }: Props) => (
  <span className={styles.silkscreen}>{children}</span>
);

export const GPIOTop = ({ P1, P5 }: HeaderProps) => (
  <Plastic className={styles.gpio}>
    {P5 ? (
      <>
        <span className={styles.power5v}>1</span>oo
        <span className={styles.ground}>o</span>
      </>
    ) : (
      <>
        <span className={styles.power5v}>oo</span>
        <span className={styles.ground}>o</span>ooo
        <span className={styles.ground}>o</span>oo
        <span className={styles.ground}>o</span>ooo
        {P1 ? (
          ''
        ) : (
          <>
            o<span className={styles.ground}>o</span>o
            <span className={styles.ground}>o</span>ooo
          </>
        )}
      </>
    )}
  </Plastic>
);
export const GPIOBottom = ({ P1, P5 }: HeaderProps) => (
  <Plastic className={styles.gpio}>
    {P5 ? (
      <>
        <span className={styles.power3v}>o</span>oo
        <span className={styles.ground}>o</span>
      </>
    ) : (
      <>
        <span className={styles.power3v}>1</span>ooo
        <span className={styles.ground}>o</span>ooo
        <span className={styles.power3v}>o</span>ooo
        <span className={styles.ground}>o</span>
        {P1 ? (
          ''
        ) : (
          <>
            oooooo
            <span className={styles.ground}>o</span>
          </>
        )}
      </>
    )}
  </Plastic>
);
export const PinHeader = ({ children, className }: Props) => (
  <Plastic className={cn(className, styles.pin)}>{children}</Plastic>
);
export const Pin = () => <PinHeader>o</PinHeader>;

// AV / CSI / DSI Connectors
export const MetalConnector = () => <Metal>| |</Metal>;
export const PlasticConnector = ({
  children = ' ',
  className,
  left,
  lower,
  metal,
  right,
}: ConnectorProps) => {
  let content = lower
    ? Children.toArray(children).toString().toLowerCase()
    : children;
  return (
    <Plastic className={className}>
      {right ? '' : '|'}
      {metal ? <Metal>{content}</Metal> : content}
      {left ? '' : '|'}
    </Plastic>
  );
};
export const Zero = (props: ConnectorProps) => (
  <PlasticConnector {...props}>0</PlasticConnector>
);
export const One = (props: ConnectorProps) => (
  <PlasticConnector {...props}>1</PlasticConnector>
);
export const A = (props: ConnectorProps) => (
  <PlasticConnector {...props}>A</PlasticConnector>
);
export const C = (props: ConnectorProps) => (
  <PlasticConnector {...props}>C</PlasticConnector>
);
export const D = (props: ConnectorProps) => (
  <PlasticConnector {...props}>D</PlasticConnector>
);
export const I = (props: ConnectorProps) => (
  <PlasticConnector {...props}>I</PlasticConnector>
);
export const P = (props: ConnectorProps) => (
  <PlasticConnector {...props}>P</PlasticConnector>
);
export const S = (props: ConnectorProps) => (
  <PlasticConnector {...props}>S</PlasticConnector>
);
export const U = () => <PlasticConnector lower>U</PlasticConnector>;
export const V = () => <PlasticConnector>V</PlasticConnector>;
export const X = () => <PlasticConnector lower>X</PlasticConnector>;

// HDMI
export const HDMI = () => <Metal>|HDMI|</Metal>;
export const HDMIConnector = () => <Metal>|    |</Metal>;
export const MicroHDMI = () => <Metal>|hd|</Metal>;
export const MicroHDMIConnector0 = () => <Metal>|m0|</Metal>;
export const MicroHDMIConnector1 = () => <Metal>|m1|</Metal>;
export const MiniHDMI = () => <Metal>hdmi</Metal>;
export const MiniHDMIConnector = () => <Metal>|  |</Metal>;

// Network
export const Net = () => <Metal>+======</Metal>;
export const NetConnector = () => <Metal>|   Net</Metal>;

// SD
export const SD = () => <Metal>---+</Metal>;
export const SDConnector = () => <Metal> sd|</Metal>;

// SMD
export const MetalPackageTop = () => <Metal>,---.</Metal>;
export const MetalPackageBot = () => <Metal>`---'</Metal>;
export const MetalSoC = () => <Metal>|SoC|</Metal>;
export const PlasticPackage = () => <Plastic>+---+</Plastic>;
export const PlasticRAM = () => <Plastic>|RAM|</Plastic>;
export const PlasticRP1 = () => <Plastic>|RP1|</Plastic>;
export const PlasticSoC = () => <Plastic>|SoC|</Plastic>;

// USB
export const USB = () => <Metal>+====</Metal>;
export const USBPower = () => <Metal>pwr</Metal>;
export const USBConnector = () => <Metal>| USB</Metal>;
export const USB2Connector = () => <Metal>|USB2</Metal>;
export const USB3 = () => <Metal className={styles.usb3}>+====</Metal>;
export const USB3Connector = () => <Metal className={styles.usb3}>|USB3</Metal>;
export const MicroUSB = () => <Metal>usb</Metal>;

// WiFi
export const Wi = () => <Metal> Wi </Metal>;
export const Fi = () => <Metal> Fi </Metal>;
