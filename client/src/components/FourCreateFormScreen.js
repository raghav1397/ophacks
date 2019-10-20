import React, { Component } from 'react'

export default class FourCreateFormScreen extends Component {
    render() {
        return (
            <div>
                <h2>Fourth Screen</h2>
                <label for="monthly-amount">Monthly Amount:</label>
                <input id="monthly-amount" name="monthlyamount" type="text" />
                <br></br>
                <label for="income-type">Income Type:</label>
                <input type="text" id="income-type" name="incometype" />
                <br></br>
                <input type="checkbox" name="incometypeother" value="csfp" /><span>Commodity Supplement Food Program (CSFP)</span>
                <input type="checkbox" name="incometypeother"  value="wic" /> <span>Supplemental Assistance WIC</span>
                <input type="checkbox" name="incometypeother" value="snap" /><span>Supplemental Nurtition Assistance Proram (SNAP)</span>
                <input type="checkbox" name="incometypeother" vaue="tanf" /><span>Cash Assistant (TANF)</span>
                <input type="checkbox" name="incometypeother" value="deschildcare" /><span>DES Child Care Subsidy</span>
                <input type="checkbox" name="incometypeother" value="qualityfirstscholarship" /><span>Quality First Scholarship</span>
                <input type="checkbox" name="incometypeother" value="other" /><span>Other</span>
            </div>
        )
    }
}
