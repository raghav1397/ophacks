import React from 'react';
import { Container } from 'react-bootstrap'

const PageTemplate = ({ children }) => (
    <div>
        <nav>Header Navigation</nav>
        <Container>
            <h1>Candler Center App</h1>
            {children}
        </Container>
    </div>
);

export default PageTemplate;