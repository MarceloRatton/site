import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import './styles.css';
import logo from './logo.png';

export default function Topbar() {
  return (
    <Navbar collapseOnSelect expand="sm" className="dark menu-bar" variant="dark">
      <Navbar.Brand>
        <Nav>
          <Nav.Link href="/"><img src={logo} alt="MarceloRatton.com" title="MarceloRatton.com" /></Nav.Link>
        </Nav>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="justify-content-end">
          <Nav.Link href="/sobre">Sobre</Nav.Link>
          <Nav.Link href="/contato">Contato</Nav.Link>
          <Nav.Link href="/projetos">Projetos</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>      
  );
}
