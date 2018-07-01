import React, { Component } from 'react';
import './contact-detail.css'

export default class ContactDetails extends Component {
  render() {
    return (
      <div>
        <div className="card text-black table-warning">
          <div className="card-header"><strong>{this.props.member.firstName}</strong></div>
          <div className="card-body">

          <div class="media border p-3">
            <img src="https://picsum.photos/200/300/?random" alt="John Doe" class="mr-3 mt-3 rounded-circle" />
            <div class="media-body">
              <p><strong>First Name: </strong> {this.props.member.firstName}</p>
              <p><strong>Last Name: </strong> {this.props.member.lastName}</p>
              <p><strong>Location: </strong> {this.props.member.location}</p>
              <p><strong>Occupation: </strong> {this.props.member.occupation}</p> 
              <p><strong>Phone: </strong> {this.props.member.phone}</p> 
              <p><strong>Email: </strong> {this.props.member.email}</p> 
              <p><strong>LinkedIn: </strong> {this.props.member.linkedin}</p>
            </div>
          </div>
              
          </div> 
          <div class="card-footer">@Bm path finder</div>
        </div>
      </div>  
    )
  }
}
