import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state={
            username: "",
            password: ""
        }
        this.textUser = React.createRef();
        this.textPassword = React.createRef();
    }
    onSubmit(event){
        event.preventDefault();

        //bcrypt hash password
       // if(personObj["username"] === ("admin")){
            alert("Successful login");
       // }else{
       //    alert("Not Successful")
       // }
    }
    render() {
        return (
            <div className="shadow-splash shadow">
                <form onSubmit={this.onSubmit} className="d-flex flex-column">
                    <p className="text-center mt-5">Please enter your username.</p>
                    <input type="text" name="username" ref={this.textUser} placeholder="Username" required className="input-user mb-3 mt-3" />
                    <input type="text" name="password" ref={this.textPassword} placeholder="Password" required className="input-user mb-3" />
                    <div>
                        <button type="submit" className="btn btn-primary" id="submit-user"><Link to="/user/admin">Submit</Link></button>
                    </div>
                </form>
            </div>
        )
    }
}
