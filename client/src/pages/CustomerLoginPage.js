import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const HOSTNAME = "http://localhost:5000"

export default class CustomerLoginPage extends Component {
    constructor() {
        super();
        this.state = {
            username: "username",
            visitedDate: "09/20/2019",
            vistsLeft: "2",
            visitationForm: {
                familyName: '',
                firstName: '',
                lastName: '',
                visitationType: ''
            }
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(propertyName, event) {
        const contact = this.state.visitationForm;
        contact[propertyName] = event.target.value;
        this.setState({ visitationForm: contact });
    }

    onSubmit(event) {
        console.log(this.state);
        const visitationData = this.state.visitationForm;  
        event.preventDefault();
        fetch(HOSTNAME +  '/visitation/create',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(visitationData)
        }).then( (json) => {
            console.log(json);
        });
    }
    onClick(event, stringuser) {
        console.log("Current Event" + event);
        console.log("Current User" + stringuser);
    }
    render() {
        return (
            <PageTemplate>
                <Row className="align-items-center justify-content-center" style={{marginTop:"25%", textAlign:"center"}}>
                    <Col className="w-100">
                        <form onSubmit={this.onSubmit} id="username-form" className="w-100">
                            <Form.Control id="id-familyName" type="text" name="id-familyNam" placeholder="family name" className="mb-2" 
                            value={this.state.familyName} onChange={this.handleChange.bind(this, 'familyName')}/>

                            <Form.Control id="id-firstName" type="text" name="id-firstName" placeholder="first name" className="mb-2" 
                            value={this.state.firstName} onChange={this.handleChange.bind(this, 'firstName')}/>

                            <Form.Control id="id-lastName" type="text" name="id-lastName" placeholder="last name" className="mb-2" 
                            value={this.state.lastName} onChange={this.handleChange.bind(this, 'lastname')}/>

                            <Form.Group controlId="form.visitationSelect">
                                <Form.Control as="select" value={this.state.visitationType} onChange={this.handleChange.bind(this, 'visitationType')}>
                                <option>Purpose of Visit</option>
                                <option>AHCCCS</option>
                                <option>WIC</option>
                                <option>Food Bank</option>
                                <option>FTF (Classes)</option>
                                <option>Diapers</option>
                                <option>Medical</option>
                                <option>Dental</option>
                                <option>Immunizations</option>
                                <option>Vision and Hearing</option>
                                </Form.Control>
                            </Form.Group>
                            
                            <Button type="submit" className="mb-3">Submit</Button>
                            {/* <Link to={{ pathname: "/user/" + this.state.username, state: { visitedDate: this.state.visitedDate, vistsLeft: this.state.vistsLeft } }}>Submit</Link> */}
                        </form>
                    </Col>
                </Row>
            </PageTemplate>
        )
    }
}
