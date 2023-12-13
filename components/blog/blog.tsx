/*
 * Copyright (c) 2016-2023, Mike Thomas
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
import React from 'react';
import { Col, Container, Row } from 'reactstrap';

type Props = {
    content: string
}

export default function Blog({ content }: Props) {
    return (
        <Container className="nav-padding projects-page">
      <Row>
        <Col className="markdown" lg="8">
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </Col>
        <Col lg="4">
          <div className="position-sticky">
            <div className="p-4 mb-3 bg-light rounded">
              <p>
                Some projects I am working on and I have planned over the next
                few <s>months</s> <s>years</s> decades...
              </p>
              <ul>
                <li>
                  <a href="/projects/printer">Anet A8</a>
                  <ul>
                    <li>
                      <a href="/projects/printer-failures">Failures</a>
                    </li>
                    <li>
                      <a href="/projects/printer-printed-upgrades">
                        3D Printed Upgrades
                      </a>
                    </li>
                    <li>
                      <a href="/projects/printer-enclosure">
                        3D Printer Enclosure
                      </a>
                    </li>
                    <li>
                      <a href="/projects/printer-hardware-upgrades">
                        Hardware Upgrades
                      </a>
                    </li>
                    <li>
                      <a href="/projects/printer-am8">AM8 Switchwire</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/projects/printer-hypercube">
                    <s>Hypercube CoreXY Upgrade</s>
                  </a>
                </li>
                <li>
                  <a href="/projects/printer-rook">Rook 2020</a>
                </li>
                <li>
                  <a href="/projects/printer-voron-0.2">Voron 0.2</a>
                </li>
                <li>
                  <a href="/projects/printer-voron-1.8">Voron 1.8</a>
                  <ul>
                    <li>
                      <a href="/projects/printer-voron-1.8-mods">
                        Voron 1.8 Mods
                      </a>
                    </li>
                    <li>
                      <a href="/projects/printer-enraged-rabbit-carrot-feeder">
                        Enraged Rabbit Carrot Feeder
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/projects/printer-polyformer">Polyformer</a>
                </li>
                <li>
                  <a href="/projects/3d-lab-print-piper-cub">
                    3D LabPrint Piper Cub
                  </a>
                </li>
                <li>
                  <a href="/projects/3d-sets-landy">3D Sets Landy</a>
                </li>
                <li>
                  <a href="/projects/3d-sets-accessories">
                    3D Sets Accessories
                  </a>
                </li>
                <li>
                  <a href="/projects/openrc-f1">OpenRC F1</a>
                </li>
                <li>
                  <a href="/projects/openrc-truggy">OpenRC Truggy</a>
                </li>
                <li>
                  <a href="/projects/openrc-mini-quad">OpenRC Mini Quad</a>
                </li>
                <li>
                  <a href="/projects/guitar">Guitar</a>
                </li>
                <li>
                  <a href="/projects/red-rocket">Red Rocket Truck Stop</a>
                </li>
                <li>
                  <a href="/projects/sanctuary-hills">
                    Sanctuary Hills House
                  </a>
                </li>
                <li>
                  <a href="/projects/printer-filament">
                    3D Printer Filament
                  </a>
                </li>
                <li>
                  <a href="/projects/eurorack-modular-synth">
                    Eurorack Modular Synth
                  </a>
                </li>
                <li>
                  <a href="/projects/printer-klipper-fan-hat">
                    Klipper Fan Hat
                  </a>
                </li>
                <li>
                  <a href="/projects/macro-pi">Macro Pi</a>
                </li>
                <li>
                  <a href="/projects/solar-wifi-weather-station">
                    Solar Wifi Weather Station
                  </a>
                </li>
                <li>
                  <a href="/projects/single-board-computers">
                    Single Board Computers
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    );
}
