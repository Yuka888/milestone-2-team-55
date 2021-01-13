import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import StaffAnnual from './StaffAnnual';
import StaffAccidental from './StaffAccidental';
import StaffMaternity from './StaffMaternity';
import StaffCompensation from './StaffCompensation';
import StaffSick from './StaffSick';


export default class StaffLeavesHR extends Component {
    constructor(props){
        super(props);
        this.state = {
            redirectToAnnual: null,
            redirectToAccidental: null,
            redirectToMaternity: null,
            redirectToCompensation: null,
            redirectToSick: null
        };
        this.toAnnual = this.toAnnual.bind(this);
        this.toAccidental = this.toAccidental.bind(this);
        this.toMaternity = this.toMaternity.bind(this);
        this.toCompensation = this.toCompensation.bind(this);
        this.toSick = this.toSick.bind(this);
    }

    toAnnual(event){
        this.setState({redirectToAnnual: "/Staff/HRstaff/Attendance/StaffLeaves/StaffAnnual"});
        event.preventDefault();
    }

    toAccidental(event){
        this.setState({redirectToAccidental: "/Staff/HRstaff/Attendance/StaffLeaves/StaffAccidental"});
        event.preventDefault();
    }
    toMaternity(event){
        this.setState({redirectToMaternity: "/Staff/HRstaff/Attendance/StaffLeaves/StaffMaternity"});
        event.preventDefault();
    }
    toCompensation(event){
        this.setState({redirectToCompensation: "/Staff/HRstaff/Attendance/StaffLeaves/StaffCompensation"});
        event.preventDefault();
    }
    toSick(event){
        this.setState({redirectToSick: "/Staff/HRstaff/Attendance/StaffLeaves/StaffSick"});
        event.preventDefault();
    }
    render() {
            if(this.state.redirectToAnnual){
                return <Redirect to={this.state.redirectToAnnual} Component={StaffAnnual}/>
            }
            if(this.state.redirectToAccidental){
                return <Redirect to={this.state.redirectToAccidental} Component={StaffAccidental}/>
            }
            if(this.state.redirectToMaternity){
                return <Redirect to={this.state.redirectToMaternity} Component={StaffMaternity}/>
            }
            if(this.state.redirectToCompensation){
                return <Redirect to={this.state.redirectToCompensation} Component={StaffCompensation}/>
            }
            if(this.state.redirectToSick){
                return <Redirect to={this.state.redirectToSick} Component={StaffSick}/>
            }
            return (
                <div>
                    <Button onClick={this.toAnnual}>Annual Leave Requests</Button>
                    <Button onClick={this.toAccidental}>Accidental Leave Requests</Button>
                    <Button onClick={this.toCompensation}>Compensation Leave Requests</Button>
                    <Button onClick={this.toSick}>Sick Leave Requests</Button>
                    <Button onClick={this.toMaternity}>Maternity Leave Requests</Button>
                </div>
        )
    }
}