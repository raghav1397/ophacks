import React, { Component } from 'react'
import FirstCreateFormScreen from '../components/FirstCreateFormScreen'
import SecondCreateFormScreen from '../components/SecondCreateFormScreen'
import ThirdCreateFormScreen from '../components/ThirdCreateFormScreen'
import FourCreateFormScreen from '../components/FourCreateFormScreen'
import PageTemplate from './PageTemplate'
const HOSTNAME = "http://localhost:5000"


export default class CreateUserPage extends Component {
    constructor() {
        super();
        this.state ={
            formData : {}
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.handler = this.handler.bind(this);
    }

    onSubmit(event) {

        this.setState({
            submittedor: "Data Attempted to submit"
        })
        console.log(this.state);
        fetch(HOSTNAME +  '/users',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(this.state)
        });
        event.preventDefault();
    }

    handler(obj) {
        console.log(obj);
        let stateObj = this.state.formData;
        for(var prop in obj){
            const nestedObj = obj[prop]
            for(var key in nestedObj){
                console.log('The value of '+key+' is '+nestedObj[key]+'.');
                stateObj[key] = nestedObj[key];
            }
            
        }
        this.setState({formData: stateObj});
    }


    render() {
        return (
            <PageTemplate>
                <h2>Create User Page</h2>
                {/* <form onSubmit={this.onSubmit}> */}
                   <FirstCreateFormScreen handler={this.handler}/>
                   <SecondCreateFormScreen handler={this.handler}/>
                   <ThirdCreateFormScreen handler={this.handler}/>
                  <FourCreateFormScreen handler={this.handler}/>
                  <button type="cancel">Cancel</button>
                  <button type="submit" onClick={this.onSubmit}>Submit</button>
                  <p>{this.state.submittedor}</p>
                {/* </form> */}
            </PageTemplate>
        )
    }
}
