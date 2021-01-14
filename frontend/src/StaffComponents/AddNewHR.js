import React, { Component } from 'react';
import axios from "axios";

export default class AddNewHR extends Component {
    constructor(props){
        super(props);
        this.state = {
        officeloc: '',
        namee: '',
        emaile: '',
        salarye: '',
        gendere: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]:value});
    }

   handleSubmit(event){
        const inputData = {
            name: this.state.namee,
            email: this.state.emaile,
            gender: this.state.gendere,
            office: this.state.officeloc,
            salary: this.state.salarye
        }
        //console.log("from inputData" + inputData);
        axios.post('/addHR', inputData, {headers: {
            'x-auth-token': localStorage.getItem('savedToken')
        }}).then(response =>{
            console.log(response.data);
            //maybe a pop up message with response.data
        }).catch(err =>{
            console.log(err);
        });
        event.preventDefault();
    };
    render() {
        return (
            <div>
             <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/Home">Home</a></li>
            <li className="breadcrumb-item"><a href="/Staff">Staff</a></li>
            <li className="breadcrumb-item"><a href="/Staff/HRstaff">HRstaff</a></li>
            <li className="breadcrumb-item active" aria-current="page">AddNewHR</li>
          </ol>
        </nav>
            <h2>Add new HR member</h2>
            <form onSubmit = {this.handleSubmit}>
            <div class="row">
                <label>
                <input name="namee" placeholder="Name..." type="text" namee={this.state.namee} onChange={this.handleChange}/>
                </label>
                <label>
                <input name="emaile" placeholder="Email..." type="text" emaile={this.state.emaile} onChange={this.handleChange}/>
                </label>
                <label>
                <input name="gendere" placeholder="Gender..." type="text" gendere={this.state.gendere} onChange={this.handleChange}/>
                </label>
            </div>
            <div class="row">
            <label>
            <input name="officeloc" placeholder="Office" type="text" officeloc={this.state.officeloc} onChange={this.handleChange}/>
            </label>
            <label>
            <input name="salarye" placeholder="Salary..." type="text" salarye={this.state.salarye} onChange={this.handleChange}/>
            </label>
            </div>
            <input type="submit" id="submit" value="Submit" />
            </form>
        </div>
        )
    }
}
