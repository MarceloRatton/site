import React from 'react';
import { Container } from 'react-bootstrap';
import './styles.css'

export default function Title({ title }) {
    return (
      <Container fluid className="header">
        <div className="header-title">{title}</div>
        <div className="header-subtitle">MarceloRatton.com</div>
      </Container>
    );
}
