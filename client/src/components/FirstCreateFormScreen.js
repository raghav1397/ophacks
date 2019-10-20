import React, { Component } from 'react';
import { Row, Col, Form, Button} from 'react-bootstrap';
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa';


export default class FirstCreateFormScreen extends Component {

    constructor() {
        super();
        this.state = {
            form1: {
                firstname: '',
                lastname: '',
                dob: '',
                addressLine1: '',
                addressLine2: '',
                zipcode: '',
                phNo: '',
                gender: '',
                housingType: '',
                maritalStatus: ''
            }
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.next = this.next.bind(this);
    }


    onSubmit(event) {
        event.preventDefault();
        this.props.handler(this.state);
    }
    next(event){
        event.preventDefault();
        this.props.handler(this.state);
        this.props.changeButton(1);
    }

    handleChange(propertyName, event) {
        // event.preventDefault();
        console.log("event::", event);
        const contact = this.state.form1;
        contact[propertyName] = event.target.value;
        this.setState({ form1: contact });
    }

    handleOptionChange(event) {
        this.setState({
            form1: {
                maritalStatus: event.target.value
            }
        })
    }


    render() {
        return (
            <Row className="w-100">
                <Col>
                    <h2 className="text-center">First Step</h2>
                    <Form className="d-flex flex-column justify-content-center">
                        <Form.Control type="text" name="lastname" value={this.state.form1.lastname} onChange={this.handleChange.bind(this, 'lastname')} className="input-create-control mb-3" placeholder="Last Name" required />
                        <Form.Control type="text" name="firstname" value={this.state.form1.firstname} onChange={this.handleChange.bind(this, 'firstname')} className="input-create-control mb-3" placeholder="First Name" required />
                        <Form.Control type="date" name="dateofbirth" value={this.state.form1.dob} onChange={this.handleChange.bind(this, 'dob')} className="input-create-control mb-3" required />
                        <Form.Control type="text" name="address" value={this.state.form1.addressLine1} onChange={this.handleChange.bind(this, 'addressLine1')} className="input-create-control mb-3" placeholder="123 easy street" required />
                        <Form.Control type="text" name="apartment" value={this.state.form1.addressLine2} onChange={this.handleChange.bind(this, 'addressLine2')} className="input-create-control mb-3" placeholder="apartment 1234" required />
                        <Form.Control type="text" name="zipcode" id="create-zipcode" value={this.state.form1.zipcode} onChange={this.handleChange.bind(this, 'zipcode')} className="input-create-control mb-3" placeholder="zipcode" required />
                        <Form.Control type="text" name="phonenumber" id="create-zipcode" value={this.state.form1.zipcode} onChange={this.handleChange.bind(this, 'phonenumber')} className="input-create-control mb-3" placeholder="123-456-7890" required />
                        <Form.Control as="select" name="gender" value={this.state.form1.gender} onChange={this.handleChange.bind(this, 'gender')} className="input-create-control mb-3" required>
                            <option value="" selected disabled hidden>Select your gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </Form.Control>
                        <Form.Control as="select" name="housingtype" value={this.state.form1.housingType} onChange={this.handleChange.bind(this, 'housingType')} className="input-create-control mb-3" required>
                            <option value="" selected disabled hidden>Choose your housing type</option>
                            <option value="ergency">Emergency Housing Shelter/Mission/Transistional</option>
                            <option value="evacuee">Evacuee</option>
                            <option value="ownhome">Own Home</option>
                            <option value="privaterental">Private Rental</option>
                            <option value="publichousing">public housing</option>
                            <option value="undisclosed">Undisclosed</option>
                            <option value="unhoused">Unhoused</option>
                            <option value="withfamily">With family/friends</option>
                            <option value="youthhome">Youth Home/Shelter</option>
                            <option value="refugee">Refugee</option>
                        </Form.Control>
                        <Form.Control as="select" name="marital-status"  value={this.state.form1.housingType} onChange={this.handleChange.bind(this, 'maritalStatus')} className="input-create-control mb-3" required>
                            <option value="" selected disabled hidden>Choose your martial status</option>
                            <option value="single">Single</option>
                            <option value="married">Married</option>
                            <option value="divorced">Divorced</option>
                            <option value="seperated">Seperated</option>
                            <option value="windowed">Windowed</option>
                            <option value="undisclosed">Undisclosed</option>
                        </Form.Control>
                        <div className="input-create-control d-flex justify-content-center">
                            <Button onClick={this.previous} className="mr-2 button-create-slide hide-button"><FaArrowLeft />  Previous </Button>
                            <Button onClick={this.next} className="button-create-slide">Next <FaArrowRight /></Button>
                        </div>
                    </Form>
                </Col>
            </Row >
        )
    }
}
