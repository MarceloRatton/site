import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'

import './styles.css'

export default class Topbar extends Component {
  render() {
    return (
      <Navbar className="dark" bg="dark" variant="dark">
        <Navbar.Brand>
          <Nav>
            <Nav.Link href="#home">MarceloRatton.com</Nav.Link>
          </Nav>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>      
    )
  }
}
