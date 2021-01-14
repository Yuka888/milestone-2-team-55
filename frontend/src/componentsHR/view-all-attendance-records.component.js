import React, {Component} from 'react';
import axios from 'axios';


export default class ViewAllAttendanceRecords extends Component{
constructor(){
    super();

    this.state={
        attendanceRecords: [],
        signs:[]
    }
}

componentDidMount(){
    axios.get('/viewAllAttendanceRecords',{headers:{'x-auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImhyLTMiLCJlbWFpbCI6IlllaGlhQGdtYWlsLmNvbSIsInJvbGUiOiJIUiIsImlhdCI6MTYxMDQxMzgxOH0.yLuTAkZUrQScAzILJXFJRi80eCDZtXt4mpiZhK0BDiU'}})
    .then(response=> {
        this.setState({attendanceRecords: response.data});
        console.log(response.data);
        // this.setState({signs: response.data});
        let signsList=[];
        this.state.attendanceRecords.map((item)=>signsList.push(item.signs));
        this.setState({signs: signsList});
        let finalizedsigns = [];
        for(let j=0;j<this.state.signs.length;j++){
           for(let i = 0; i < this.state.signs[j].length; i++)
           {
                finalizedsigns.push(this.state.signs[j][i]);
               }
           }
        
           this.setState({signs: finalizedsigns});
        

          

    }).catch((error)=> {
        console.log(error);
    })
}


    render(){
        return(
            <div>
            <nav aria-label="breadcrumb">
            <ol className="breadcrumb alert alert-warning">
              <li className="breadcrumb-item text-warning"><a className="text-warning"href="HomeHR">Home</a></li>
              <li className="breadcrumb-item "><a className="text-warning"href="Attendance">Attendance</a></li>
              <li className="breadcrumb-item active text-danger" aria-current="page">View All Attendance Records</li>
            </ol>
          </nav>
                <h3> All attendance records</h3>
                <a href="/ViewAttendanceRecordsByMonth"> <button className="btn btn-warning">  View By month </button> </a>
                <table className= "table table-bordered">
                    <thead className="table-warning">
                        <tr>
                            <th>Day</th>
                            <th>Date</th>
                            <th>Month</th>
                            <th>Hours</th>
                            <th>Minutes</th>
                        </tr>

                    </thead>
                    <tbody>
                        {this.state.attendanceRecords.map((item)=>
                        <tr>
                          <td> {item.day}</td>
                          <td> {item.date}</td>
                          <td> {item.month}</td>
                          <td> {item.hours}</td>
                          <td> {item.minutes}</td>
                          </tr>
                        )}
                    </tbody>
                </table>

                <table className= "table table-bordered">
                <thead className="table-warning">
                    <tr>
                        <th colSpan="2">Sign In</th>
                        <th colSpan="2">Sign Out</th>
                    </tr>
                    <tr>
                        <th>Hour In</th>
                        <th>Minute In</th>
                        <th>Hour Out</th>
                        <th>Minute Out</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.signs.map((item =>
                    <tr>
                    <td>{item.hourin}</td>
                    <td>{item.minutein}</td>
                    <td>{item.hourout}</td>
                    <td>{item.minuteout}</td> 
                    </tr>
                ))}
                </tbody>
                </table>                  

            </div>
        )
    }
}
