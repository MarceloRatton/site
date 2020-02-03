import React, { Component } from 'react'
import { Container, Row, Col, Figure, Image } from 'react-bootstrap'

import './styles.css'

import Logo from '../../assets/img/logo/logo@3.png'

import LinkedIn from '../../assets/img/icons/linkedin.svg'
import Github from '../../assets/img/icons/github.svg'
import Instagram from '../../assets/img/icons/instagram.svg'

export default class Footbar extends Component {
  render() {
    return (
        <Container className="footer">
            <Col className="base-line" xs={4}>
                <Row>
                    <Figure>
                        <Figure.Image src={Logo} />
                    </Figure>
                </Row>
            </Col>
            <Col className="footer-items" xs={8}>
                <Col>
                    <Row>
                        <h4>Menu</h4>
                    </Row>
                    <Row>
                        Sobre
                    </Row>
                    <Row>
                        Contato
                    </Row>
                    <Row>
                        Projetos
                    </Row>
                </Col>
                <Col>
                    <Row >
                        <h4>Redes Sociais</h4>
                    </Row>
                    <Row>
                        <a href="https://linkedin.com/in/rattones" target="_blank">
                            <Image src={LinkedIn} thumbnail={true} width={30}/>/Rattones
                        </a> 
                    </Row>
                    <Row>
                    <a href="https://github.com/rattones" target="_blank">
                            <Image src={Github} thumbnail={true} width={30}/>/Rattones
                        </a> 
                    </Row>
                    <Row>
                    <a href="https://instagram.com/marcelorattoncom" target="_blank">
                            <Image src={Instagram} thumbnail={true} width={30}/>/MarceloRatton.com
                        </a> 
                    </Row>
                </Col>
            </Col>
        </Container>
    )
  }
}
