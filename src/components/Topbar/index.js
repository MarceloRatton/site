import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'

import './styles.css'
import logo from './logo.png'

export default class Topbar extends Component {
  render() {
    return (
      <Navbar className="dark" bg="dark" variant="dark">
        <Navbar.Brand>
          <Nav>
            <Nav.Link href="/"><img src={logo} alt="MarceloRatton.com" title="MarceloRatton.com" /></Nav.Link>
          </Nav>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/sobre">Sobre</Nav.Link>
            <Nav.Link href="/contato">Contato</Nav.Link>
            <Nav.Link href="/projetos">Projetos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>      
    )
  }
}
