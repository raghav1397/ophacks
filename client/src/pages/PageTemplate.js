import React from 'react';
import { Container, Row,Col } from 'react-bootstrap'
import { Nav, Navbar } from  'react-bootstrap'

const PageTemplate = ({ children }) => (
    <div id="page-template">
        <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Chandler Care Center </Navbar.Brand>
    {/* <Nav className="mr-auto">
    </Nav> */}
  </Navbar>
        <Container>
            <Row id="logo-header">
                <Col></Col>
            </Row>
            {children}
        </Container>
    </div>
);

export default PageTemplate;