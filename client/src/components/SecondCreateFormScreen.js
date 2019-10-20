import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';


export default class SecondCreateFormScreen extends Component {


    constructor() {
        super();
        this.state = {
            form2: {
                highestEducation: '',
                primaryLanguage: ''
            }

        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        //this.props.handler(this.state);
    }
    onClick(event) {
        event.preventDefault();
        this.props.handler(this.state);
        this.props.changeButton(2);
    }

    handleChange(propertyName, event) {
        const contact = this.state.form2;
        contact[propertyName] = event.target.value;
        this.setState({ form2: contact });
    }

    render() {
        return (
            <Row>
                <Col>
                    <h2 className="text-center">Second Step</h2>
                    <Form onSubmit={this.onSubmit}>
                        <span className="input-checkmark">Ethncity</span>
                        <Form.Check name="ethnicity" value="White/Anglo" label="White/Anglo" className="input-checkmark" />
                        <Form.Check name="ethnicity" value="Hispanic/Latino" label="Hispanic/Latino" className="input-checkmark" />
                        <Form.Check className="input-checkmark" name="ethnicity" value="American indian / Native American" label="American Indian/Native American" />
                        <Form.Check className="input-checkmark" name="ethnicity" value="Asian" label="Asian" />
                        <Form.Check className="input-checkmark" name="ethnicity" value="Aslaska Native / Aleut / Eskimo" label="Aslaka/Aleut/ Eskimo" />
                        <Form.Check className="input-checkmark" name="ethnicity" value="Middle Eastern/ North African" label="Middle Eastern / North African" />
                        <Form.Check className="input-checkmark" name="ethnicity" value="Pacific Islander" label="Pacific Islander" />
                        <Form.Check className="input-checkmark" name="ethnicity" value="Other" label="Other" />
                        <Form.Check className="input-checkmark" name="ethnicity" value="Undisclosed" label="Undisclosed" />
                        <span className="input-checkmark mt-2" >Self Identify As</span>
                        <Form.Check name="self-identify" value="Disability" label="Disability" className="input-checkmark" />
                        <Form.Check name="self-identify" value="Veteran" label="Veteran" className="input-checkmark" />
                        <Form.Check className="input-checkmark" name="self-identify" value="metal illness" label="Mental Illness" />
                        <Form.Check className="input-checkmark" name="self-identify" value="Pregnant" label="Pregnant" />
                        <Form.Check className="input-checkmark" name="self-identify" value="Postpartum" label="Postpartum" />
                        <Form.Check className="input-checkmark" name="self-identify" value="Breastfeeding" label="Breast Feeding" />
                        <Form.Check className="input-checkmark" name="self-identify" value="Undisclosed" label="Undisclosed" />
                        <Form.Check className="input-checkmark" name="self-identify" value="Other" label="Other" />
                        <Form.Check className="input-checkmark" name="self-identify" value="Eldery" label="Eldery (62+)" />
                        <Form.Check className="input-checkmark" name="self-identify" value="LGBTQ" label="LGBTQ" />
                        <Form.Check className="input-checkmark" name="self-identify" value="Female head of household" label="Female head of household" />
                        <Form.Control as="select" name="highest-education" value={this.state.form2.highestEducation} onChange={this.handleChange.bind(this, 'highestEducation')} className="input-checkmark mt-2 mb-2">
                            <option value="" selected disabled hidden>What's your education level?</option>
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
                        </Form.Control>
                        <Form.Control as="select" name="primary-language" value={this.state.form2.primaryLanguage} onChange={this.handleChange.bind(this, 'primaryLanguage')} className="input-checkmark mb-2">
                            <option value="" selected disabled hidden>Choose your primary language</option>
                            <option value="english">English</option>
                            <option value="spanish">Spanish</option>
                            <option value="other">Other</option>
                        </Form.Control>
                        <Button onClick={this.onClick} className="input-create-control">Next</Button>
                    </Form>
                </Col>
            </Row >


        )
    }
}
