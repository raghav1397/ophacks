import React, { Component } from 'react';
import {Row,Col} from 'react-bootstrap';

export default class FourCreateFormScreen extends Component {

    constructor(){
        super();
        this.state ={
            form4: {
                monthlyIncome: '',
                incomeType: ''
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
        // event.preventDefault();
        console.log("event::",event);
        const contact = this.state.form4;
        contact[propertyName] = event.target.value;
        this.setState({ form4: contact });
    }

    render() {
        return (
            <Row>
                <Col>
                <form onSubmit={this.onSubmit}>
                    <h2>Fourth Screen</h2>
                    <label for="monthly-amount">Monthly Amount:</label>
                    <input id="monthly-amount" name="monthlyamount" type="text" 
                    value={this.state.form4.monthlyIncome} onChange={this.handleChange.bind(this, 'monthlyIncome')}/>
                    <br></br>
                    <label for="income-type">Income Type:</label>
                    <select id="income-type" name="incometype" 
                    value={this.state.form4.incomeType} onChange={this.handleChange.bind(this, 'incomeType')}>
                    <option value="csfp" >Commodity Supplement Food Program (CSFP)</option>
                    <option value="wic" > Supplemental Assistance WIC</option>
                    <option value="snap" >Supplemental Nurtition Assistance Proram (SNAP)</option>
                    <option vaue="tanf" >Cash Assistant (TANF)</option>
                    <option value="deschildcare" >DES Child Care Subsidy</option>
                    <option value="qualityfirstscholarship" >Quality First Scholarship</option>
                    <option value="other" >Other</option>
                    </select>
                    <button>Next</button>
                </form>
                </Col>

            </Row>
        )
    }
}
