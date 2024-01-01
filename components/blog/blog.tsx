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
import Link from 'next/link';
import React from 'react';
import Markdown from 'react-markdown';
import { Col, Container, Row } from 'reactstrap';
import remarkBehead from 'remark-behead';
import remarkEmoji from 'remark-emoji';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import rehypeMinifyWhitespace from 'rehype-minify-whitespace';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';

import styles from './blog.module.scss';
import { getComponents } from '../../lib/markdownComponents';
import type PostType from '../../interfaces/post';

type Props = {
  content: string;
  related: PostType[];
};

export default function Blog({ content, related }: Props) {
  return (
    <Container className="nav-padding projects-page">
      <Row>
        <Col className={styles['markdown']} lg="8">
          <Markdown
            components={getComponents()}
            remarkPlugins={[
              [remarkBehead, { minDepth: 2 }],
              remarkEmoji,
              remarkGfm,
              [remarkToc, { maxDepth: 3, ordered: true }],
            ]}
            rehypePlugins={[rehypePrism, rehypeSlug, rehypeMinifyWhitespace]}
          >
            {content}
          </Markdown>
        </Col>
        <Col lg="4">
          <div className={styles['sidebar'] + ' position-sticky'}>
            <div className="p-4 mb-3 bg-light rounded">
              <p>
                Some projects I am working on and I have planned over the next
                few <s>months</s> <s>years</s> decades...
              </p>
              {related.length > 0 ? (
                <>
                  <h5>Related Content</h5>
                  <ul>
                    {related.map((item, index) => (
                      <li key={index}>
                        <Link href={item.slug}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                ''
              )}
              <h5>Elsewhere</h5>
              <ul>
                <li>
                  <Link href="printer">Anet A8</Link>
                </li>
                <li>
                  <Link href="printer-rook">Rook 2020</Link>
                </li>
                <li>
                  <Link href="printer-voron-0.2">Voron 0.2</Link>
                </li>
                <li>
                  <Link href="printer-voron-1.8">Voron 1.8</Link>
                </li>
                <li>
                  <Link href="printer-polyformer">Polyformer</Link>
                </li>
                <li>
                  <Link href="3d-lab-print-piper-cub">
                    3D LabPrint Piper Cub
                  </Link>
                </li>
                <li>
                  <Link href="3d-sets-landy">3D Sets Landy</Link>
                </li>
                <li>
                  <Link href="openrc-f1">OpenRC F1</Link>
                </li>
                <li>
                  <Link href="openrc-truggy">OpenRC Truggy</Link>
                </li>
                <li>
                  <Link href="openrc-mini-quad">OpenRC Mini Quad</Link>
                </li>
                <li>
                  <Link href="guitar">Guitar</Link>
                </li>
                <li>
                  <Link href="marble-machine">
                    Out of Marbles, Marble Machine
                  </Link>
                </li>
                <li>
                  <Link href="red-rocket">Red Rocket Truck Stop</Link>
                </li>
                <li>
                  <Link href="sanctuary-hills">Sanctuary Hills House</Link>
                </li>
                <li>
                  <Link href="eurorack-modular-synth">
                    Eurorack Modular Synth
                  </Link>
                </li>
                <li>
                  <Link href="printer-klipper-fan-hat">Klipper Fan Hat</Link>
                </li>
                <li>
                  <Link href="macro-pi">Macro Pi</Link>
                </li>
                <li>
                  <Link href="solar-wifi-weather-station">
                    Solar Wifi Weather Station
                  </Link>
                </li>
                <li>
                  <Link href="single-board-computers">
                    Single Board Computers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
