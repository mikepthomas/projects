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
import { Background, Banner, Menu } from '../menus';

export default function ColorKatapult(children: ReactNode) {
  switch (Children.toArray(children).toString()) {
    // Header
    case '                                        Katapult Configuration\n':
      return <Banner>Katapult Configuration</Banner>;

    // Main Menu
    case '    Build Katapult deployment application (Do not build)  --->\n':
      return (
        <Background>
          <Menu>
                Build Katapult deployment application (Do not build)  ---&gt;
          </Menu>
        </Background>
      );
    case '    Build Katapult deployment application (32KiB bootloader)  --->\n':
      return (
        <Background>
          <Menu>
                Build Katapult deployment application (32KiB
            bootloader)  ---&gt;
          </Menu>
        </Background>
      );
    case '    Application start offset (8KiB offset)  --->\n':
      return (
        <Background>
          <Menu>    Application start offset (8KiB offset)  ---&gt;</Menu>
        </Background>
      );
    case '    Application start offset (32KiB offset)  --->\n':
      return (
        <Background>
          <Menu>    Application start offset (32KiB offset)  ---&gt;</Menu>
        </Background>
      );
    case '()  GPIO pins to set on bootloader entry\n':
      return (
        <Background>
          <Menu>() GPIO pins to set on bootloader entry</Menu>
        </Background>
      );
    case '[*] Support bootloader entry on rapid double click of reset button\n':
      return (
        <Background>
          <Menu>
            [*] Support bootloader entry on rapid double click of reset button
          </Menu>
        </Background>
      );
    case '[ ] Enable bootloader entry on button (or gpio) state\n':
      return (
        <Background>
          <Menu>[ ] Enable bootloader entry on button (or gpio) state</Menu>
        </Background>
      );
    case '[ ] Enable Status LED\n':
      return (
        <Background>
          <Menu>[ ] Enable Status LED</Menu>
        </Background>
      );
    case '[*] Enable Status LED\n':
      return (
        <Background>
          <Menu>[*] Enable Status LED</Menu>
        </Background>
      );
    case '(PA13)  Status LED GPIO Pin\n':
      return (
        <Background>
          <Menu>(PA13) Status LED GPIO Pin</Menu>
        </Background>
      );
    case '(PA14)  Status LED GPIO Pin\n':
      return (
        <Background>
          <Menu>(PA14) Status LED GPIO Pin</Menu>
        </Background>
      );

    default:
      return children;
  }
}
