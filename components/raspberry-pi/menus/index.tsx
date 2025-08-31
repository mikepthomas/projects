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
import { Banner, Header, Menu } from '../menuconfig';

export default function ColorMenu(children: ReactNode) {
  switch (Children.toArray(children).toString()) {
    // Header
    case '(Top)\n':
      return <Header>(Top)</Header>;

    // Footer
    case '[Space/Enter] Toggle/enter      [?] Help            [/] Search\n':
      return (
        <>
          <Menu>&nbsp;</Menu>
          <Banner>&nbsp;</Banner>
          <Header>[Space/Enter] Toggle/enter [?] Help [/] Search</Header>
        </>
      );
    case '[Q] Quit (prompts for save)     [ESC] Leave menu\n':
      return <Header>[Q] Quit (prompts for save) [ESC] Leave menu</Header>;

    default:
      return children;
  }
}

export { default as ColorKatapult } from './katapult';
export { default as ColorKlipper } from './klipper';
