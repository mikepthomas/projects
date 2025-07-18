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
import cn from 'classnames';
import { Table } from 'reactstrap';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { RaspberryPiColoriser } from '../components';
import { basePath } from '../next.config';

export function getComponents() {
  return {
    a: ({ children, href }) => {
      if (href?.match(/^(https?:)?\/\/www.youtube(-nocookie)?.com\/embed\//)) {
        return (
          <motion.span
            className="ratio ratio-16x9"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <iframe
              className="img-thumbnail"
              src={href}
              title={children}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </motion.span>
        );
      } else if (href?.match(/^(https?:)?\/\//)) {
        return (
          <a href={href} rel="noopener noreferrer" target="_blank">
            {children}
          </a>
        );
      } else {
        return <Link href={href}>{children}</Link>;
      }
    },
    img: ({ alt, src }) => {
      const altText = alt?.replace(/ *\{[^)]*\} */g, '');
      const metaWidth = alt.match(/{([^}]+)x/);
      const metaHeight = alt.match(/x([^}]+)}/);
      const width = metaWidth ? metaWidth[1] : '1280';
      const height = metaHeight ? metaHeight[1] : '960';
      return (
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Image
            className="img-fluid img-thumbnail"
            src={src.startsWith('/') ? `${basePath}${src}` : src}
            width={width}
            height={height}
            alt={altText}
          />
        </motion.span>
      );
    },
    pre: ({ children, className }) => (
      <pre
        className={
          className
            ? className
            : cn('bg-dark', 'mb-3', 'p-4', 'rounded', 'text-light')
        }
      >
        {children}
      </pre>
    ),
    span: ({ children, className }) => (
      <RaspberryPiColoriser className={className}>
        {children}
      </RaspberryPiColoriser>
    ),
    table: ({ children }) => (
      <Table bordered hover responsive size="sm" striped>
        {children}
      </Table>
    ),
  };
}
