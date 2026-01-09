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
import { Col, Container, Row } from 'reactstrap';

export default function About() {
  return (
    <Container className="mt-4">
      <Row>
        <Col md="3">
          <h2 className="mt-2">This is me!</h2>
          <img
            src="https://avatars3.githubusercontent.com/u/13928052?v=3&amp;s=150"
            width="150"
            height="150"
            className="img-responsive rounded-circle"
            alt="It's-a-Me!"
          />
        </Col>
        <Col md="5">
          <h2 className="mt-2">Interests and Achievements</h2>
          <p>
            I have a keen interest in the Royal Air Force and the military in
            general; I have flown a winch powered glider, have taken part in
            aerobatics in a fixed-wing aircraft and completed an Accelerated
            Free Fall Skydiving course in which I have skydived 13 times.
          </p>
          <p>
            I was a member of the Royal Naval Reserves in my spare time, and
            contributed to SkydiveUWE and the Technology society during my time
            at University.
          </p>
          <p>
            My other hobbies include music, learning to play bass guitar,
            computer games modification, Virtual reality and motorbikes. I have
            recently been learning all about 3D printing and 3D modelling in
            Fusion 360.
          </p>
        </Col>
        <Col md="4">
          <h2 className="mt-2">Key Skills</h2>
          <ul>
            <li>Software design using UML</li>
            <li>Source Control using Git and Subversion</li>
            <li>Scala, Java, JavaScript and TypeScript Programming</li>
            <li>Web Development using HTML5 and CSS3</li>
            <li>Web Server Admin with Apache &amp; IIS</li>
            <li>Knowledge of SOAP and RESTful web services</li>
            <li>XML Technologies such as XQuery, XSLT &amp; XPath</li>
            <li>Experience with MySQL, SQL Server and Postgres</li>
            <li>Testing with JUnit, Expect and Selenium Server</li>
            <li>Extensive knowledge of Windows, Linux and macOS</li>
          </ul>
        </Col>
      </Row>
      <hr />
    </Container>
  );
}
