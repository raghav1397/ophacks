import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa';

export default class FourCreateFormScreen extends Component {

    constructor() {
        super();
        this.state = {
            form4: {
                monthlyIncome: '',
                incomeType: ''
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        //this.props.handler(this.state);
    }

    next(event) {
        event.preventDefault();
        this.props.handler(this.state);
        this.props.changeButton(4);
        this.props.visbilityFun(event);
    }
    previous(event){
        event.preventDefault();
        this.props.changeButton(2);
    }

    handleChange(propertyName, event) {
        // event.preventDefault();
        console.log("event::", event);
        const contact = this.state.form4;
        contact[propertyName] = event.target.value;
        this.setState({ form4: contact });
    }

    render() {
        return (
            <Row className="w-100">
                <Col>
                    <h2 className="text-center">Fourth Step</h2>
                    <Form onSubmit={this.onSubmit} className="d-flex flex-column justify-content-center">
                        <Form.Control type="text" name="monthlyamount" placeholder="Monthly Amount" value={this.state.form4.monthlyIncome} onChange={this.handleChange.bind(this, 'monthlyincome')} className="input-create-control mb-3" required />
                        <Form.Control as="select" name="incometype" value={this.state.form4.monthlyIncome} onChange={this.handleChange.bind(this, 'incomeType')} className="input-create-control mb-3">
                            <option value="" selected disabled hidden>Choose your income type</option>
                            <option value="csfp" >Commodity Supplement Food Program (CSFP)</option>
                            <option value="wic" > Supplemental Assistance WIC</option>
                            <option value="snap" >Supplemental Nurtition Assistance Proram (SNAP)</option>
                            <option vaue="tanf" >Cash Assistant (TANF)</option>
                            <option value="deschildcare" >DES Child Care Subsidy</option>
                            <option value="qualityfirstscholarship" >Quality First Scholarship</option>
                            <option value="other" >Other</option>
                        </Form.Control>
                        <div className="input-create-control d-flex justify-content-center">
                            <Button onClick={this.previous} className="mr-2 button-create-slide"><FaArrowLeft />  Previous </Button>
                            <Button onClick={this.next} className="button-create-slide">Next <FaArrowRight /></Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        )
    }
}
