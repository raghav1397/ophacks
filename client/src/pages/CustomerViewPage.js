import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import { Redirect } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
var QRCode = require('qrcode.react')

class CustomerViewPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            familyName: "",
            visitedDate: "",
            vistsLeft: "",
            badrequest: false
        }
    }

    componentDidMount() {
        try {
            let isvisitedDate = this.props.location.state.visitedDate;

            this.setState({
                familyName: this.props.match.params.familyName,
                visitedDate: isvisitedDate,
                vistsLeft: this.props.location.state.vistsLeft
            })

        } catch (err) {
            this.setState({
                badrequest: true
            });
            console.log("user did not go through the proper-steps")
        }

    }
    render() {
        if (this.state.badrequest) {
            return <Redirect to="/whoops" />
        }
        if (this.state.familyName === "") {
            return <PageTemplate><p>Loading</p></PageTemplate>
        } else {
            return (
                <PageTemplate>
                    <div className="splash-screen shadow" style={{textAlign:"center"}}>
                        <Row>
                            <Col>
                                <h2>Welcome {this.state.familyName}</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>User: {this.state.familyName}</p>
                                <p>Visited Since: {this.state.visitedDate}</p>
                                <p>Vists Left: {this.state.vistsLeft}</p>
                               {/*  <QRComponent value="2c5ea4c0-4067-11e9-8bad-9b1deb4d3b7d" /> */}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <Row>
                                <Col>
                                    <p>QR Code Scanner</p>
                                </Col>
                            </Row>
                            
                            <Row>
                                <Col>
                                    <QRCode value="2c5ea4c0-4067-11e9-8bad-9b1deb4d3b7d" />
                                </Col>
                            </Row>
                            </Col>
                        </Row>
                    </div>

                </PageTemplate>
            )
        }
    }
}
export default CustomerViewPage;
