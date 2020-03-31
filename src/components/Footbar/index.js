import React from 'react'
import { Container, Row, Col, Figure, Image, Nav } from 'react-bootstrap'

import './styles.css'

import Logo from '../../assets/img/logo/logo@3.png'

import LinkedIn from '../../assets/img/icons/linkedin.svg'
import Github from '../../assets/img/icons/github.svg'
import Instagram from '../../assets/img/icons/instagram.svg'

export default function Footbar() {
    return (
        <Container fluid className="footer">
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
                        <Nav.Link href="/">Home</Nav.Link>
                    </Row>
                    <Row>
                        <Nav.Link href="/sobre">Sobre</Nav.Link>
                    </Row>
                    <Row>
                        <Nav.Link href="/contato">Contato</Nav.Link>
                    </Row>
                    <Row>
                        <Nav.Link href="/projetos">Projetos</Nav.Link>
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
