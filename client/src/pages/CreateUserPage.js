import React, { Component } from 'react'

import FirstCreateFormScreen from '../components/FirstCreateFormScreen'
import SecondCreateFormScreen from '../components/SecondCreateFormScreen'
import ThirdCreateFormScreen from '../components/ThirdCreateFormScreen'
import FourCreateFormScreen from '../components/FourCreateFormScreen'


export default class CreateUserPage extends Component {
    constructor(){
        super();
        this.state ={
            submittedor: "Not submitted",
            firstname : "",
            lastname: "",
            dateofbirth: "",
            address: "",
            aptnumber: "",
            zipcode: "",
            city: "",
            phonenumber:"",
            gender: "",
            housingtype: "",
            maritaltype:"",
            ethincity: [""],
            self: [""],
            highed: "",
            primarydoctor: false,
            dentalinsurance: false,
            employeetype:"",
            monthyincome: "",
            montthyincometype: "",
            monthyincomeother:[""],
            medicaltype: "",
            childcaretype: "",

        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event){
        const data = "";

        this.setState({
            submittedor: "Data Attempted to submit"
        })
        fetch('./api/url',{
            method: 'POST',
            body: data 
        });
        event.preventDefault();
    }
    onCancel(event){
        //reset the fields currently in the area.
    }
    render() {
        return (
            <div>
                <h2>Create User Page</h2>
                <form onSubmit={this.onSubmit}>
                   <FirstCreateFormScreen />
                   <SecondCreateFormScreen />
                   <ThirdCreateFormScreen />
                  <FourCreateFormScreen />
                  <button type="cancel">Cancel</button>
                  <button type="submit">Submit</button>
                  <p>{this.state.submittedor}</p>
                </form>
            </div>
        )
    }
}
