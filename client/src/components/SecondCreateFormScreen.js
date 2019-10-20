import React, { Component } from 'react'

export default class SecondCreateFormScreen extends Component {

    
    constructor(){
        super();
        this.state ={
            form2: {
                highestEducation: '',
                primaryLanguage: ''
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
        const contact = this.state.form2;
        contact[propertyName] = event.target.value;
        this.setState({ form2: contact });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <h2>Second Form</h2>
                    <div className="ethnicity-checkbox-group">
                        <span>Ethnicity:</span>
                        <input type="checkbox" id="create-ethnic-white" name="ethnicity" value="White" /> <label for="create-ethnic-white">White/Anglo</label>
                        <input type="checkbox" id="create-ethnic-hispanic" name="ethnicity" value="hispanic" /> <label for="create-ethnic-hispanic">Hispanic/Latino</label>
                        <input type="checkbox" id="create-ethnic-americanindian" name="ethnicity" value="americanindian" /> <label for="create-ethnic-americanindian">American Indian/ Native American</label>
                        <input type="checkbox" id="create-ethnic-asian " name="ethnicity" value="asian" /> <label for="create-ethnic-asian">Asian</label>
                        <input type="checkbox" id="create-ethnic-alaskanative" name="ethnicity" value="alaskaNative" /> <label for="create-ethnic-alaskanative">Alaska Native/Aleut/ESkimo</label>
                        <input type="checkbox" id="create-ethnic-middleeastern" name="ethnicity" value="middleeastern" /> <label for="create-ethnic-middleeastern">Middle Eastern/North African</label>
                        <input type="checkbox" id="create-ethnic-pacific" name="ethnicity" value="pacificislander" /> <label for="create-ethnic-pacificislander">Pacific Islander</label>
                        <input type="checkbox" id="create-ethnic-other" name="ethnicity" value="White" /> <label for="create-ethnic-other">Other</label>
                        <input type="checkbox" id="create-ethnic-undisclosed" name="ethnicity" value="White" /> <label for="create-ethnic-undisclosed">Undisclosed</label>
                    </div>
                    <br />
                    <br />
                    <div className="self-identify">
                        <span>Self-identify as:</span>
                        <input type="checkbox" name="self-identify" value="disability" /> <span>Disability</span>
                        <input type="checkbox" name="self-identify" value="veteran" /> <span>Veteran</span>
                        <input type="checkbox" name="self-identify" value="mentalillness" /><span>Mental Illness</span>
                        <input type="checkbox" name="self-identify" value="pregnant" /><span>Pregnant</span>
                        <input type="checkbox" name="self-identify" value="postpartum" /> <span>Postpartum</span>
                        <input type="checkbox" name="self-identify" value="breastfeeding" /> <span>Breastfeeding</span>
                        <input type="checkbox"  name="self-identify" value="undisclosed" /> <span>Undisclosed</span>
                        <input type="checkbox" name="self-identify" value="other" /> <span>Other</span>
                        <input type="checkbox" name="self-identify" value="elderly" /> <span>Eldery(62+)</span>
                        <input type="checkbox" name="self-idetnify" value="lgbtq" /><span>LGBTQ</span>
                        <input type="checkbox" name="self-idetnify" value="femalehead" /> <span>Female Head of Household</span>
                    </div>
                    <div className="highest-education">
                        <span>Highest Education:</span>
                        <select name="highesteducation"
                        value={this.state.form2.highestEducation} onChange={this.handleChange.bind(this, 'highestEducation')}>
                            <option value="grade08">Grade 0-8</option>
                            <option value="grade911">Grade 9-11</option>
                            <option value="highschooldiploma">High School Diploma</option>
                            <option value="ged">GED</option>
                            <option value="postsecondary">Post Secondary</option>
                            <option value="tradeschool">Trade School</option>
                            <option value="twoyeardegree">2 year degree</option>
                            <option value="fouryeardegree">4 year degree</option>
                            <option value="mastersdegree">Masters degree</option>
                            <option value="phd">Phd</option>
                            <option value="undisclosed">Undisclosed</option>
                        </select>
                    </div>
                    <div className="primary-language">
                        <span>Primary Language: </span>
                        <select name="primary-language"
                        value={this.state.form2.primaryLanguage} onChange={this.handleChange.bind(this, 'primaryLanguage')}>
                            <option value="english">English</option>
                            <option value="spanish">Spanish</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <button>Next</button>
                </form>
            </div>

        )
    }
}
