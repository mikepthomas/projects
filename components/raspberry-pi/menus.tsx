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
import { ReactNode } from 'react';
import cn from 'classnames';

import styles from './menus.module.scss';

export type Props = {
  children: ReactNode;
  className?: string;
};

export const Background = ({ children, className }: Props) => (
  <span className={cn(className, styles.background)}>{children}</span>
);

export const Banner = ({ children }: Props) => (
  <span className={styles.banner}>{children}</span>
);

export const Header = ({ children }: Props) => (
  <span className={styles.header}>{children}</span>
);

export const Highlight = ({ children }: Props) => (
  <span className={styles.highlight}>{children}</span>
);

export const Menu = ({ children }: Props) => (
  <span className={styles.menu}>{children}</span>
);

export const Selected = ({ children }: Props) => (
  <span className={styles.selected}>{children}</span>
);

export const Shadow = ({ children }: Props) => (
  <span className={styles.shadow}>{children}</span>
);

export const ShadowTop = ({ children }: Props) => (
  <span className={styles.shadowtop}>{children}</span>
);
