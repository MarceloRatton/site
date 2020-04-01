import React from 'react';
import { Container } from 'react-bootstrap';

import './styles.css';

export default function Content() {
    return (
        <Container className="contend">
            <h1>Conteúdo</h1>
            <span>Buscar o conteúdo de arquivos MD</span>
        </Container>
    );
}