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
import { Background, Menu, Selected, Shadow } from '../menus';

export default function ColorMain(children: ReactNode) {
  switch (Children.toArray(children).toString()) {
    // Menu Items
    case '│       1 System Options       Configure system settings                       │\n':
      return (
        <Background>
          <span className="d-none d-xl-block">         </span>
          <span className="d-none d-xxl-block">         </span>
          <Menu>
            │       1 System Options       Configure system
            settings                       │
          </Menu>
          <Shadow> </Shadow>
          <span className="d-none d-md-block d-lg-none d-xl-block">
                     
          </span>
          <span className="d-none d-xxl-block">         </span>
        </Background>
      );
    case '│       2 Display Options      Configure display settings                      │\n':
      return (
        <Background>
          <span className="d-none d-xl-block">         </span>
          <span className="d-none d-xxl-block">         </span>
          <Menu>
            │       2 Display Options      Configure display
            settings                      │
          </Menu>
          <Shadow> </Shadow>
          <span className="d-none d-md-block d-lg-none d-xl-block">
                     
          </span>
          <span className="d-none d-xxl-block">         </span>
        </Background>
      );
    case '│       3 Interface Options    Configure connections to peripherals            │\n':
      return (
        <Background>
          <span className="d-none d-xl-block">         </span>
          <span className="d-none d-xxl-block">         </span>
          <Menu>
            │       3 Interface Options    Configure connections to
            peripherals            │
          </Menu>
          <Shadow> </Shadow>
          <span className="d-none d-md-block d-lg-none d-xl-block">
                     
          </span>
          <span className="d-none d-xxl-block">         </span>
        </Background>
      );
    case '│      |3 Interface Options    Configure connections to peripherals     |      │\n':
      return (
        <Background>
          <span className="d-none d-xl-block">         </span>
          <span className="d-none d-xxl-block">         </span>
          <Menu>
            │       
            <Selected>
              3 Interface Options    Configure connections to peripherals     
            </Selected>
                   │
          </Menu>
          <Shadow> </Shadow>
          <span className="d-none d-md-block d-lg-none d-xl-block">
                     
          </span>
          <span className="d-none d-xxl-block">         </span>
        </Background>
      );
    case '│       4 Performance Options  Configure performance settings                  │\n':
      return (
        <Background>
          <span className="d-none d-xl-block">         </span>
          <span className="d-none d-xxl-block">         </span>
          <Menu>
            │       4 Performance Options  Configure performance
            settings                  │
          </Menu>
          <Shadow> </Shadow>
          <span className="d-none d-md-block d-lg-none d-xl-block">
                     
          </span>
          <span className="d-none d-xxl-block">         </span>
        </Background>
      );
    case '│       5 Localisation Options Configure language and regional settings        │\n':
      return (
        <Background>
          <span className="d-none d-xl-block">         </span>
          <span className="d-none d-xxl-block">         </span>
          <Menu>
            │       5 Localisation Options Configure language and regional
            settings        │
          </Menu>
          <Shadow> </Shadow>
          <span className="d-none d-md-block d-lg-none d-xl-block">
                     
          </span>
          <span className="d-none d-xxl-block">         </span>
        </Background>
      );
    case '│       6 Advanced Options     Configure advanced settings                     │\n':
      return (
        <Background>
          <span className="d-none d-xl-block">         </span>
          <span className="d-none d-xxl-block">         </span>
          <Menu>
            │       6 Advanced Options     Configure advanced
            settings                     │
          </Menu>
          <Shadow> </Shadow>
          <span className="d-none d-md-block d-lg-none d-xl-block">
                     
          </span>
          <span className="d-none d-xxl-block">         </span>
        </Background>
      );
    case '│       8 Update               Update this tool to the latest version          │\n':
      return (
        <Background>
          <span className="d-none d-xl-block">         </span>
          <span className="d-none d-xxl-block">         </span>
          <Menu>
            │       8 Update               Update this tool to the latest
            version          │
          </Menu>
          <Shadow> </Shadow>
          <span className="d-none d-md-block d-lg-none d-xl-block">
                     
          </span>
          <span className="d-none d-xxl-block">         </span>
        </Background>
      );
    case '│       9 About raspi-config   Information about this configuration tool       │\n':
      return (
        <Background>
          <span className="d-none d-xl-block">         </span>
          <span className="d-none d-xxl-block">         </span>
          <Menu>
            │       9 About raspi-config   Information about this configuration
            tool       │
          </Menu>
          <Shadow> </Shadow>
          <span className="d-none d-md-block d-lg-none d-xl-block">
                     
          </span>
          <span className="d-none d-xxl-block">         </span>
        </Background>
      );

    default:
      return children;
  }
}
