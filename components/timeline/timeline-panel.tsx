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
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, Variants } from 'framer-motion';
import Markdown from 'react-markdown';

import styles from './timeline.module.scss';
import Experience from '../../interfaces/experience';
import * as DateUtils from '../../lib/dateUtils';

const badgeVariants: Variants = {
  offscreen: {
    scale: 0,
  },
  onscreen: {
    scale: 1,
    transition: {
      type: 'spring',
      bounce: 0.5,
      duration: 1,
    },
  },
};
const panelVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 100,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    x: [-20, 0, 20, 0, -10, 0, 10, 0],
    transition: {
      type: 'tween',
      duration: 0.25,
    },
  },
};

export default function TimelinePanel(props: Experience) {
  return (
    <motion.li
      className={
        props.inverted
          ? styles['timeline-item-inverted']
          : styles['timeline-item']
      }
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      <motion.div
        className={cn(styles['timeline-badge'], `bg-${props.color}`)}
        variants={badgeVariants}
      >
        <FontAwesomeIcon icon={props.icon as IconName} />
      </motion.div>
      <motion.div className={styles['timeline-panel']} variants={panelVariants}>
        <div className="timeline-heading">
          <h4 className="timeline-title">{props.title}</h4>
          <small className="mb-1 text-muted">
            <FontAwesomeIcon icon="calendar-alt" />
            &nbsp;
            {DateUtils.formatDate(props.startDate)}
            &nbsp;-&nbsp;
            {DateUtils.formatDate(props.endDate)}
            &nbsp;
            {DateUtils.formatYearsAndMonths(props.startDate, props.endDate)}
          </small>
        </div>
        <div className="timeline-body">
          <a href={props.url} rel="noopener noreferrer" target="_blank">
            <h5 className="mt-2">
              {props.location} ({props.city})
            </h5>
          </a>
          <Markdown>{props.description}</Markdown>
        </div>
      </motion.div>
    </motion.li>
  );
}
