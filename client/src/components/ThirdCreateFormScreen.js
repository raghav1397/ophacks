import React, { Component } from 'react';
import {Row,Col} from 'react-bootstrap';

export default class ThirdCreateFormScreen extends Component {

    constructor(){
        super();
        this.state ={
            form3: {
                medicalInsType: '',
                childCareType: '',
                employeeType: ''
            }
        
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event){
        event.preventDefault();
        this.props.handler(this.state);
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
                <form onSubmit={this.onSubmit}>
                    <h2>Third Create Form</h2>
                    <div className="insurnace">
                        <span>Do you have insurance</span>
                        <input type="radio" name="insurancehave" value="yes" 
                        // checked={this.state.selectedOption === 'yes'}
                        // onChange={this.handleOptionChange.bind(this, 'haveInsurance')}
                        /><span>Yes</span>
                        <input type="radio" name="insurancehave" value="no" 
                        // checked={this.state.selectedOption === 'no'}
                        // onChange={this.handleOptionChange.bind(this, 'haveInsurance')}
                        /><span>No</span>
                    </div>
                    <div className="primary-doctor">
                        <span>Do you have a primary doctor:</span>
                        <input type="radio" name="primarydoctor" value="yes" 
                        // checked={this.state.selectedOption === 'yes'}
                        // onChange={this.handleOptionChange.bind(this, 'havePrimaryDoctor')}
                        /><span>Yes</span>
                        <input type="radio" name="primarydoctor" value="no" 
                        // checked={this.state.selectedOption === 'no'}
                        // onChange={this.handleOptionChange.bind(this, 'havePrimaryDoctor')}
                        /><span>No</span>
                    </div>
                    <div className="medical-type">
                        <span>Medical Insurance Type:</span>
                        <select name="medicaltype"
                        value={this.state.form3.medicalInsType} onChange={this.handleChange.bind(this, 'medicalInsType')}>
                            <option value="employer">Employer</option>
                            <option value="private">Private</option>
                            <option value="ahcss">ahcss</option>
                            <option value="indianhealthservices">Indian Health Services</option>
                            <option value="militarty">Military</option>
                            <option value="none">none</option>
                            <option value="other">other</option>
                        </select>
                    </div>
                    <div className="child-care-type">
                        <span>Child Care Type</span>
                        <select name="childcaretype"
                        value={this.state.form3.childCareType} onChange={this.handleChange.bind(this, 'childCareType')}>
                            <option value="mypartnerori">My partner or I take care of my children at home</option>
                            <option value="headstart">Headstart</option>
                            <option value="childcarecenter">Child Care Center/ Preschool Program</option>
                            <option value="familychildcarehome">Family Child Care Home</option>
                            <option value="relativeneighbor">Relative/Neighbor or babysitter</option>
                        </select>
                    </div>
                    <div className="employement-type">
                        <span>Employmee Type:</span>
                        <select name="employeetype"
                        value={this.state.form3.employeeType} onChange={this.handleChange.bind(this, 'employeeType')}>
                            <option value="postsecondarystudent">Post Secondary Student</option>
                            <option value="fulltime">Full Time</option>
                            <option value="parttime">Part Time</option>
                            <option value="retired">Retired</option>
                            <option value="none">None</option>
                            <option value="undisclosed">Undisclosed</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <button>Next</button>
                </form>
                </Col>
            </Row>
                )
            }
        }
