import React, { Component } from 'react'

export default class FirstCreateFormScreen extends Component {
    render() {
        return (
            <div>
                <h2>First Form</h2>
                <div>
                    <label for="create-last-name">Last Name:</label>
                    <input id="create-last-name" type="text" />
                    <label for="create-first-name">First Name:</label>
                    <input id="create-first-name" type="text" />
                    <label for="create-dob">Date of Birth:</label>
                    <input type="date" id="create-date" />
                    <br></br>
                    <br></br>
                    <label for="create-address">Address: </label>
                    <input id="create-address" type="text" />
                    <label for="create-aprt-number">Apartment Number:</label>
                    <input id="create-aprt-number" type="text" />
                    <label for="create-zipcode">Zipcode: </label>
                    <input id="create-zipcode" type="text" />
                    <br></br>
                    <br></br>
                    <label for="create-phone-number">Phone Number:</label>
                    <input id="create-phone-number" />
                    <br />
                    <br />
                    <div> Gender Type
                    <select name="gender">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                    </select>
                    </div>
                    <br></br>
                    <div>Housing Type:
                    <select name="housingtype">
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
                        <input type="radio" name="martial-status" value="single" /> <span>Single</span>
                        <input type="radio" name="martial-status" value="married" /> <span>Married</span>
                        <input type="radio" name="martial-status" value="divorced" /> <span>Divoreced</span>
                        <input type="radio" name="martial-status" value="seperated" /> <span>Seperated</span>
                        <input type="radio" name="martial-status" value="windowed" /> <span>Windowed</span>
                        <input type="radio" name="martial-status" value="udisclosed" /> <span>Undisclosed</span>
                    </div>
                    <br />
                    <br />
                </div>
            </div>
        )
    }
}
