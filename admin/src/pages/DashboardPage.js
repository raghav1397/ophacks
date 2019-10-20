import React, { Component } from 'react'

export default class DashboardPage extends Component {
    constructor(){
        super();
        this.state={
            username: ""
        }
    }
    componentWillMount(){
        this.setState({username: this.location.state.username});
    }
    render() {

        if(this.state.username === "" || this.state.username === undefined || this.state.username === null){
            return(<p>Loading</p>)
        }
        return (
            <div>
                <nav>Candler Care Center</nav>
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <p>Welcome {this.state.username} back!</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <col>
                        <input type="text" className="search-box" placeholder="search"/>
                        <button type="btn btn-primary">Submit</button>

                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Last Visited</th>
                                    <th scope="col">About Last Visit</th>
                                    <th scope="col">Limits on Appointments</th>
                                    <th scope="col">Limits on Food</th>
                                </tr>
                            </thead>
                            <tr>
                                <th scope="row">John Smith</th>
                                <td>02-20-2019</td>
                                <td>Dental Appointment</td>
                                <td>1</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <th scope="row">Jason Bourne</th>
                                <td>05-20-2019 </td>
                                <td>Food Bank</td>
                                <td>2</td>
                                <td>3</td>
                            </tr>
                        </table>
                    </col>
                </div>
            </div>
        )
    }
}
