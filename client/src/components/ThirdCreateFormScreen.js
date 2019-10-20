import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

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
        this.onClick = this.onClick.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        //this.props.handler(this.state);
    }
    onClick(event) {
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
            <Row className="third-create-step">
                <Col>
                    <h3>Third Step</h3>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Control as="select" name="insurancehave" value={this.state.form3.insuranceHave} onChange={this.handleChange.bind(this, 'insuranceHave')} className="input-create-control">
                            <option value="" selected disabled hidden>Do you have insurance?</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </Form.Control>
                        <Form.Control as="select" name="primaryDoctor" value={this.state.form3.primaryDoctor} onChange={this.handleChange.bind(this, 'primaryDoctor')} className="input-create-control">
                            <option value="" selected disabled hidden> Do you have a primary care doctor?</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </Form.Control>
                        <Form.Control as="select" name="medicaltype" value={this.state.form3.medicalInsType} onChange={this.handleChange.bind(this, 'medicalInsType')}>
                            <option value="" selected disabled hidden>What type of insurance do you have?</option>
                            <option value="employer">Employer</option>
                            <option value="private">Private</option>
                            <option value="ahcss">ahcss</option>
                            <option value="indianhealthservices">Indian Health Services</option>
                            <option value="militarty">Military</option>
                            <option value="none">none</option>
                            <option value="other">other</option>
                        </Form.Control>
                        <Form.Control as="select" name="childCareType" value={this.state.form3.childCareType} onChange={this.handleChange.bind(this, 'childCareType')}>
                            <option value="mypartnerori">My partner or I take care of my children at home</option>
                            <option value="headstart">Headstart</option>
                            <option value="childcarecenter">Child Care Center/ Preschool Program</option>
                            <option value="familychildcarehome">Family Child Care Home</option>
                            <option value="relativeneighbor">Relative/Neighbor or babysitter</option>
                        </Form.Control>
                        <Form.Control as="select" name="emplyoeType" value={this.state.form3.employeeType} onChange={this.handleChange.bind(this, 'employeeType')}>
                            <option value="" selected disabled none>What's your education level?</option>
                            <option value="postsecondarystudent">Post Secondary Student</option>
                            <option value="fulltime">Full Time</option>
                            <option value="parttime">Part Time</option>
                            <option value="retired">Retired</option>
                            <option value="none">None</option>
                            <option value="undisclosed">Undisclosed</option>
                            <option value="other">Other</option>
                        </Form.Control>
                        <Button onClick={this.onClick}>Next</Button>
                    </Form>
               
                </Col>
            </Row >
        )
    }
}
