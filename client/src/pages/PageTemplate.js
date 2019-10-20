import React from 'react';
import { Container, Row,Col } from 'react-bootstrap'

const PageTemplate = ({ children }) => (
    <div id="page-template">
        <nav id="navbar-special">Header Navigation </nav>
        <Container>
            <Row id="logo-header">
                <Col><h1>Candler Care Center</h1></Col>
            </Row>
            {children}
        </Container>
    </div>
);

export default PageTemplate;