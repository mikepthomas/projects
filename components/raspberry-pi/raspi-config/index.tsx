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
import { Background, Highlight, Menu, Shadow, ShadowTop } from '../menus';

export default function ColorMenu(children: ReactNode) {
  switch (Children.toArray(children).toString()) {
    // Header
    case '┌─────────┤ Raspberry Pi Software Configuration Tool (raspi-config) ├──────────┐\n':
      return (
        <>
          <Background className="d-none d-xxl-block"> </Background>
          <Background className="d-none d-xl-block d-xxl-block"> </Background>
          <Background>
            <span className="d-none d-xl-block">         </span>
            <span className="d-none d-xxl-block">         </span>
            <Menu>
              ┌─────────┤ 
              <Highlight>
                Raspberry Pi Software Configuration Tool (raspi-config)
              </Highlight>
               ├──────────┐
            </Menu>
            <ShadowTop> </ShadowTop>
            <span className="d-none d-md-block d-lg-none d-xl-block">
                       
            </span>
            <span className="d-none d-xxl-block">         </span>
          </Background>
        </>
      );
    case '│                                                                              │\n':
      return (
        <Background>
          <span className="d-none d-xl-block">         </span>
          <span className="d-none d-xxl-block">         </span>
          <Menu>
            │                                                                              │
          </Menu>
          <Shadow> </Shadow>
          <span className="d-none d-md-block d-lg-none d-xl-block">
                     
          </span>
          <span className="d-none d-xxl-block">         </span>
        </Background>
      );

    // Footer
    case '│                     <Select>                     <Finish>                    │\n':
      return (
        <Background>
          <span className="d-none d-xl-block">         </span>
          <span className="d-none d-xxl-block">         </span>
          <Menu>
            │                     &lt;Select&gt;                     &lt;Finish&gt;                    │
          </Menu>
          <Shadow> </Shadow>
          <span className="d-none d-md-block d-lg-none d-xl-block">
                     
          </span>
          <span className="d-none d-xxl-block">         </span>
        </Background>
      );
    case '│                     <Select>                     <Back>                      │\n':
      return (
        <Background>
          <span className="d-none d-xl-block">         </span>
          <span className="d-none d-xxl-block">         </span>
          <Menu>
            │                     &lt;Select&gt;                     &lt;Back&gt;                      │
          </Menu>
          <Shadow> </Shadow>
          <span className="d-none d-md-block d-lg-none d-xl-block">
                     
          </span>
          <span className="d-none d-xxl-block">         </span>
        </Background>
      );
    case '└──────────────────────────────────────────────────────────────────────────────┘\n':
      return (
        <>
          <Background>
            <span className="d-none d-xl-block">         </span>
            <span className="d-none d-xxl-block">         </span>
            <Menu>
              └──────────────────────────────────────────────────────────────────────────────┘
            </Menu>
            <Shadow> </Shadow>
            <span className="d-none d-md-block d-lg-none d-xl-block">
                       
            </span>
            <span className="d-none d-xxl-block">         </span>
          </Background>
          <Background>
            <span className="d-none d-xl-block">         </span>
            <span className="d-none d-xxl-block">         </span> 
            <Shadow>
                                                                                              
            </Shadow>
            <span className="d-none d-md-block d-lg-none d-xl-block">
                       
            </span>
            <span className="d-none d-xxl-block">         </span>
          </Background>
          <Background className="d-none d-xl-block d-xxl-block"> </Background>
          <Background className="d-none d-xxl-block"> </Background>
        </>
      );

    default:
      return children;
  }
}

export { default as ColorMain } from './main';
export { default as ColorInterface } from './interface';
