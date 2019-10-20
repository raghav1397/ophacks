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
                    <Col>
                        <div className="splash-screen shadow">
                            <div className="home-icon">
                                <FaHome />
                            </div>
                            <h3>Welcome</h3>
                            <div>
                                <Button variant="primary" > <Link to="/newuser">New User</Link></Button>
                            </div>
                            <br></br>
                            <div>
                                <Button variant="primary"><Link to="/login">Returning User</Link></Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </PageTemplate>
        )
    }
}
