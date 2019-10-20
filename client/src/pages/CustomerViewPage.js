import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import { Redirect } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

class CustomerViewPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            visitedDate: "",
            vistsLeft: "",
            badrequest: false
        }
    }
    componentDidMount() {
        console.log("Did mount activate")
        try {
            let isvisitedDate = this.props.location.state.visitedDate;

            this.setState({
                username: this.props.match.params.username,
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
        if (this.state.username === "") {
            return <PageTemplate><p>Loading</p></PageTemplate>
        } else {
            return (
                <PageTemplate>
                    <Row>
                        <Col>
                            <h2>Welcome {this.state.username}</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>User: {this.state.username}</p>
                            <p>Visited Since: {this.state.visitedDate}</p>
                            <p>Vists Left: {this.state.vistsLeft}</p>
                        </Col>
                    </Row>

                </PageTemplate>
            )
        }
    }
}
export default CustomerViewPage;
