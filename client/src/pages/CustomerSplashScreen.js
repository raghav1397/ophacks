import React, { Component } from 'react';
import {Row, Col, Button} from 'react-bootstrap';

export default class CustomerSplashScreen extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                    <Button>New User</Button>
                    </Col>
                
                    <Button>Returning User</Button>
                </Row>
            </div>
        )
    }
}
