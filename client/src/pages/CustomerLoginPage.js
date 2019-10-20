import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import {Row, Col,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class CustomerLoginPage extends Component {
    constructor(){
        super();
        this.state={
            username: "username",
            visitedDate: "09/20/2019",
            vistsLeft: "2"
        }
    }

    onSubmit(event, username){
        event.preventDefault();

        //fetch username from database
    }
    onClick(event,stringuser){
        console.log("Current Event" + event);
        console.log("Current User" + stringuser);
        //<Link to={{pathname: "/user/" + this.state.username, state:{visitedDate: this.state.visitedDate, vistsLeft: this.state.vistsLeft}}}>Submit</Link>
    }
    render() {
        return (
            <PageTemplate>
                <Row>
                    <Col>
                    <h2>Enter your username now...</h2>
                    </Col>
                </Row>
                <Row className="align-items-center justify-content-center">
                    <Col className="align-items center">
                    <form onSubmit={this.onSubmit} id="username-form">
                        <label htmlFor="id-user">UserName: </label>
                        <input  id="id-user" type="text" />
                    </form>
                    <Button onClick={(e) =>{this.onClick(e,"username")}}>Submit</Button>
                    </Col>
                </Row>
            </PageTemplate>
        )
    }
}
