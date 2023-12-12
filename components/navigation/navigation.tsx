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
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';

import SocialLink, { SocialData } from './social-link';

import { basePath } from '../../next.config'
import styles from './navigation.module.scss';

interface Props {
  social: SocialData[];
}

export default function Navigation(props: Props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const github = props.social.filter((item) => item.name === 'GitHub')[0];
  return (
    <div className="Navigation">
      <a
        className={styles['github-banner'] + ' d-none d-md-block'}
        href={`${github.url}${github.user}/${github.project}`}
      >
        <img
          src="https://raw.githubusercontent.com/aral/fork-me-on-github-retina-ribbons/master/images-uncompressed/fork-me-right-orange.png"
          alt="Fork me on GitHub"
        />
      </a>
      <Navbar color="dark" dark={true} expand="md" fixed="top">
        <NavbarBrand href="/">
          <img className={styles['navbar-logo']} src={`${basePath}/logo-blue.png`} alt="Mike Thomas" />
        </NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar={true}>
          <Nav className="mr-auto" navbar={true}>
            {props.social
              .filter((item) => item.showInNav === true)
              .map((item) => (
                <SocialLink key={item.name} {...item} />
              ))}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
