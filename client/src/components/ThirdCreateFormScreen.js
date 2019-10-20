import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa';

export default class ThirdCreateFormScreen extends Component {

    constructor() {
        super();
        this.state = {
            form3: {
                medicalInsType: '',
                insuranceHave: '',
                childCareType: '',
                employeeType: '',
                primaryDoctor: '',

            }

        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.next = this.next.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        //this.props.handler(this.state);
    }
    next(event) {
        event.preventDefault();
        this.props.handler(this.state);
        this.props.changeButton(3);
    }

    handleChange(propertyName, event) {
        const contact = this.state.form3;
        contact[propertyName] = event.target.value;
        this.setState({ form3: contact });
    }

    render() {
        return (
            <Row className="w-100">
                <Col>
                    <h3 className="text-center">Third Step</h3>
                    <Form onSubmit={this.onSubmit} className="d-flex flex-column justify-content-center">
                        <Form.Control as="select" name="insurancehave" value={this.state.form3.insuranceHave} onChange={this.handleChange.bind(this, 'insuranceHave')} className="input-create-control mb-3">
                            <option value="" selected disabled hidden>Do you have insurance?</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </Form.Control>
                        <Form.Control as="select" name="primaryDoctor" value={this.state.form3.primaryDoctor} onChange={this.handleChange.bind(this, 'primaryDoctor')} className="input-create-control mb-3">
                            <option value="" selected disabled hidden> Do you have a primary care doctor?</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </Form.Control>
                        <Form.Control as="select" name="medicaltype" value={this.state.form3.medicalInsType} onChange={this.handleChange.bind(this, 'medicalInsType')} className="input-create-control mb-3">
                            <option value="" selected disabled hidden>What type of insurance do you have?</option>
                            <option value="employer">Employer</option>
                            <option value="private">Private</option>
                            <option value="ahcss">ahcss</option>
                            <option value="indianhealthservices">Indian Health Services</option>
                            <option value="militarty">Military</option>
                            <option value="none">none</option>
                            <option value="other">other</option>
                        </Form.Control>
                        <Form.Control as="select" name="childCareType" value={this.state.form3.childCareType} onChange={this.handleChange.bind(this, 'childCareType')}className="input-create-control mb-3">
                            <option value="mypartnerori">My partner or I take care of my children at home</option>
                            <option value="headstart">Headstart</option>
                            <option value="childcarecenter">Child Care Center/ Preschool Program</option>
                            <option value="familychildcarehome">Family Child Care Home</option>
                            <option value="relativeneighbor">Relative/Neighbor or babysitter</option>
                        </Form.Control>
                        <Form.Control as="select" name="emplyoeType" value={this.state.form3.employeeType} onChange={this.handleChange.bind(this, 'employeeType')}className="input-create-control mb-3">
                            <option value="" selected disabled none>Do you have a job?</option>
                            <option value="postsecondarystudent">Post Secondary Student</option>
                            <option value="fulltime">Full Time</option>
                            <option value="parttime">Part Time</option>
                            <option value="retired">Retired</option>
                            <option value="none">None</option>
                            <option value="undisclosed">Undisclosed</option>
                            <option value="other">Other</option>
                        </Form.Control>
                        <div className="input-create-control d-flex justify-content-center">
                            <Button onClick={this.previous} className="mr-2 button-create-slide"><FaArrowLeft />  Previous </Button>
                            <Button onClick={this.next} className="button-create-slide">Next <FaArrowRight /></Button>
                        </div>
                    </Form>
               
                </Col>
            </Row >
        )
    }
}
