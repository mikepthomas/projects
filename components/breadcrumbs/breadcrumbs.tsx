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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { Breadcrumb, BreadcrumbItem, Container } from 'reactstrap';

import styles from './breadcrumbs.module.scss';
import { CMS_NAME, PROJECTS_PATH } from '../../lib/constants';

type Props = {
  pageName: string;
};

const Breadcrumbs = ({ pageName }: Props) => {
  return (
    <>
      <nav
        className={cn(styles['breadcrumbs'], 'position-sticky')}
        aria-label="breadcrumb"
      >
        <Breadcrumb className="p-3 bg-light">
          <BreadcrumbItem>
            <Link href="/">
              <FontAwesomeIcon className="mr-2" icon={['fas', 'home']} />
              Home
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link href={PROJECTS_PATH}>{CMS_NAME}</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{pageName}</BreadcrumbItem>
        </Breadcrumb>
      </nav>
    </>
  );
};

export default Breadcrumbs;
