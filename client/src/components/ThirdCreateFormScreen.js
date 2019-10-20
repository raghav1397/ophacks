import React, { Component } from 'react'

export default class ThirdCreateFormScreen extends Component {
    render() {
        return (
            <div className="third-create-step">
                <h2>Third Create Form</h2>
                <div className="insurnace">
                    <span>Do you have insurance</span>
                    <input type="radio" name="insurancehave" value="yes" /><span>Yes</span>
                    <input type="radio" name="insurancehave" value="no" /><span>No</span>
                </div>
                <div className="primary-doctor">
                    <span>Do you have a primary doctor:</span>
                    <input type="radio" name="primarydoctor" value="yes" /><span>Yes</span>
                    <input type="radio" name="primarydoctor" value="no" /><span>No</span>
                </div>
                <div className="medical-type">
                    <span>Medical Insurance Type:</span>
                    <select name="medicaltype">
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
                    <select name="childcaretype">
                        <option value="mypartnerori">My partner or I take care of my children at home</option>
                        <option value="headstart">Headstart</option>
                        <option value="childcarecenter">Child Care Center/ Preschool Program</option>
                        <option value="familychildcarehome">Family Child Care Home</option>
                        <option value="relativeneighbor">Relative/Neighbor or babysitter</option>
                    </select>
                </div>
                <div className="employement-type">
                    <span>Employmee Type:</span>
                    <select name="employeetype">
                        <option value="postsecondarystudent">Post Secondary Student</option>
                        <option value="fulltime">Full Time</option>
                        <option value="parttime">Part Time</option>
                        <option value="retired">Retired</option>
                        <option value="none">None</option>
                        <option value="undisclosed">Undisclosed</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>
                )
            }
        }
