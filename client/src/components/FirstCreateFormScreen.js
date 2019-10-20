import React, { Component } from 'react';
import { Row, Col, Form } from 'react-bootstrap';

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
    }


    onSubmit(event) {
        event.preventDefault();
        this.props.handler(this.state);
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
            <Row>
                <Col>
                    <h2 className="text-right">First Form</h2>
                    <Form>
                        <Form.Control type="text" name="lastname" value={this.state.form1.lastname} onChange={this.handleChange.bind(this, 'lastname')} placeholder="Lastname" required />
                        <Form.Control type="text" name="firstname" value={this.state.form1.firstname} onChange={this.handleChange.bind(this, 'firstname')} placeholder="Firstname" required />
                        <Form.Control type="date" name="dateofbirth" value={this.state.form1.dob} onChange={this.handleChange.bind(this, 'dob')} required />
                        <Form.Control type="text" name="address" value={this.state.form1.addressLine1} onChange={this.handleChange.bind(this, 'addressLine1')} placeholder="address" />
                        <Form.Control type="text" name="apartment" value={this.state.form1.addressLine2} onChange={this.handleChange.bind(this, 'addressLine2')} placeholder="apartment number" />
                        <label for="create-zipcode">Zipcode: </label>
                        <input id="create-zipcode" type="text"
                            value={this.state.form1.zipcode} onChange={this.handleChange.bind(this, 'zipcode')} required />
                        <br></br>
                        <br></br>
                        <label for="create-phone-number">Phone Number:</label>
                        <input id="create-phone-number"
                            value={this.state.form1.phNo} onChange={this.handleChange.bind(this, 'phNo')} required />
                        <br />
                        <br />
                        <div> Gender Type
                        <select name="gender"
                                value={this.state.form1.gender} onChange={this.handleChange.bind(this, 'gender')}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <br></br>
                        <div>Housing Type:
                        <select name="housingtype"
                                value={this.state.form1.housingType} onChange={this.handleChange.bind(this, 'housingType')} required>
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
                            </select>
                        </div>
                        <br />
                        <br />
                        <div className="martial status">
                            <span>Marital Status: </span>
                            <input type="radio" name="martial-status" value="single"
                                checked={this.state.selectedOption === 'single'}
                                onChange={this.handleOptionChange.bind(this)} /> <span>Single</span>
                            <input type="radio" name="martial-status" value="married"
                                checked={this.state.selectedOption === 'married'}
                                onChange={this.handleOptionChange.bind(this)} /> <span>Married</span>
                            <input type="radio" name="martial-status" value="divorced"
                                checked={this.state.selectedOption === 'divorced'}
                                onChange={this.handleOptionChange.bind(this)} /> <span>Divoreced</span>
                            <input type="radio" name="martial-status" value="seperated"
                                checked={this.state.selectedOption === 'separated'}
                                onChange={this.handleOptionChange.bind(this)} /> <span>Separated</span>
                            <input type="radio" name="martial-status" value="windowed"
                                checked={this.state.selectedOption === 'windowed'}
                                onChange={this.handleOptionChange.bind(this)} /> <span>Windowed</span>
                            <input type="radio" name="martial-status" value="undisclosed"
                                checked={this.state.selectedOption === 'undisclosed'}
                                onChange={this.handleOptionChange.bind(this)} /> <span>Undisclosed</span>
                        </div>
                        <br />
                        <br />
                        <button>Next</button>
                    </Form>
                </Col>
            </Row >
        )
    }
}
