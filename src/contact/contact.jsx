import React, { Component } from 'react';
import axios from 'axios';
import './contact.css'
import ContactDetails from './contact-detail';
// import {Grid, Row, Col,table} from 'react-bootstrap';

export default class Contact extends Component {    

    constructor(props){
        super(props);
        this.state={
            contactMember:[]
        }
        

    }

    componentDidMount=()=>{
        axios.get('https://my-json-server.typicode.com/BSushen/contactmember/member/')
        .then((res)=>{
            console.log(res.data);
            this.setState({
                contactMember:res.data
            })
        })
    }

    handleContact=(data)=>{
        // data.preventDefault();
        this.setState({
            singleMember:data
        })
        
        console.log('details are ->', data)
    }

  render() {

    const rowData = this.state.contactMember.map(c=>{
        return(
            <tr key={c.id} >
                {/* <td><button class="ui toggle button active" onClick={()=>this.handleContact(c)}>{c.firstName}</button></td> */}
                <td onClick={()=>{this.handleContact(c)}}>{c.firstName} {c.lastName }</td>
                {/* // <td><button className="ui basic green button" onClick={()=>{this.handleContact(c)}}>Show Details</button></td> */}
            </tr>
        )
    })

    return (
      <div className="row">
            <div className="col-md-4">
                <h3>Contact Us</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="table-warning">Names</th>
                        </tr>
                    </thead>
                    <tbody className="table-warning">
                        {rowData}
                    </tbody>
                </table>
            </div>
            <div className="col-md-8" border-style="dotted">
                <h3>Details</h3>
                {this.state.singleMember && <ContactDetails member={this.state.singleMember}/>}
            </div>
      </div>
    )
  }
}
