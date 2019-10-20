import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import PageTemplate from './PageTemplate';
import {FaHome} from 'react-icons/fa';

export default class CustomerSplashScreen extends Component {
    render() {
        return (
            <PageTemplate>
                 <Row>
                    <Col style={{marginTop:"25%"}}>
                        <div className="splash-screen shadow">
                            <div className="home-icon" style={{textAlign: "center"}}>
                                <FaHome />
                            </div>
                            <h3 style={{textAlign: "center"}}>Welcome</h3>
                            <br></br>
                            <div style={{textAlign: "center"}}>
                                <Button variant="primary" block> <Link to="/newuser">New User</Link></Button>
                            </div>
                            <br></br>
                            <div style={{textAlign: "center"}}>
                                <Button variant="primary" block><Link to="/login">Returning User</Link></Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </PageTemplate>
        )
    }
}
