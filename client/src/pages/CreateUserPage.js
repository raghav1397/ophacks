import React, { Component } from 'react'
import FirstCreateFormScreen from '../components/FirstCreateFormScreen'
import SecondCreateFormScreen from '../components/SecondCreateFormScreen'
import ThirdCreateFormScreen from '../components/ThirdCreateFormScreen'
import FourCreateFormScreen from '../components/FourCreateFormScreen'
import PageTemplate from './PageTemplate';
import { Row, Col } from 'react-bootstrap';
import { FaUserPlus } from 'react-icons/fa';

const HOSTNAME = "http://localhost:5000";


//switch for current slide
const SwitchCard= ({curIndex, changeButton,handler}) => {

    switch (curIndex) {
        case 0:
            return (<FirstCreateFormScreen changeButton={changeButton} handler={handler}/>)
        case 1:
            return (<SecondCreateFormScreen changeButton={changeButton} handler={handler}/>)
        case 2:
            return (<ThirdCreateFormScreen changeButton={changeButton} handler={handler}/>)
        case 3:
            return (<FourCreateFormScreen changeButton={changeButton} handler={handler}/>)
        default:
            return (
                <div>
                    <FirstCreateFormScreen />
                    <SecondCreateFormScreen />
                    <ThirdCreateFormScreen />
                    <FourCreateFormScreen />
                </div>
            );
    }
}

export default class CreateUserPage extends Component {
    constructor() {
        super();
        this.state = {
            formData: {},
            currentSlideIndex: 0,
            returnCurrentSlide:{}
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.handler = this.handler.bind(this);
        this.currentSlide = this.currentSlide.bind(this);
    }

    //stack -> keep current state
    //switch for render component
  

    currentSlide(number){
        this.setState({
            currentSlideIndex : number
        })
    }




    //on Submit
    onSubmit(event) {

        this.setState({
            submittedor: "Data Attempted to submit"
        })
        console.log(this.state);
        fetch(HOSTNAME + '/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
        });
        event.preventDefault();
    }

    //Handler Function
    handler(obj) {
        console.log(obj);
        let stateObj = this.state.formData;
        for (var prop in obj) {
            const nestedObj = obj[prop]
            for (var key in nestedObj) {
                console.log('The value of ' + key + ' is ' + nestedObj[key] + '.');
                stateObj[key] = nestedObj[key];
            }

        }
        this.setState({ formData: stateObj });
    }


    render() {
        return (
            <PageTemplate>
                {/* <form onSubmit={this.onSubmit}> */}
                <Row>
                    <Col>
                        <div className="splash-screen">
                            <Row>
                                <Col><span className="home-icon"><FaUserPlus /></span> <h2 className="text-center">Create User Page</h2></Col>
                            </Row>
                            <Row>
                                <SwitchCard curIndex={this.state.currentSlideIndex} changeButton={this.currentSlide} handler={this.handler}/>
                            </Row>

                        </div>
                    </Col>
                </Row>
                {/*  <FirstCreateFormScreen handler={this.handler} />*/}
               
                <SecondCreateFormScreen handler={this.handler} />
                <ThirdCreateFormScreen handler={this.handler} />
                <FourCreateFormScreen handler={this.handler} />
                <button type="cancel">Cancel</button>
                <button type="submit" onClick={this.onSubmit}>Submit</button>
                <p>{this.state.submittedor}</p>
                {/* </form> */}
            </PageTemplate>
        )
    }
}
