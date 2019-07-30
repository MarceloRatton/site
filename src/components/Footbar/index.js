import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './styles.css'

export default class Footbar extends Component {
  render() {
    return (
        <Container className="footer">
            <Row>
                <Col>
                    <h3>Footer</h3>
                </Col>
                <Col>
                    <spam>MarceloRatton.com</spam>
                </Col>
                <Col>
                    <spam>LabVida</spam>
                </Col>
            </Row>
        </Container>
    )
  }
}
