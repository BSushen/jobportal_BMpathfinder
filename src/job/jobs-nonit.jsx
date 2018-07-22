import React, { Component } from 'react'
import axios from 'axios';
import {Card} from 'primereact/components/card/Card';
import {Button} from 'primereact/components/button/Button';
import { Dialog } from 'primereact/components/dialog/Dialog';
import './jobs-it.css';
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default class JobNonIT extends Component {
  constructor(props){
    super(props)
    this.state={
      NonNonITJobs:[],
      selectedContact:null,
      selectedjob:null,
      visible1:true,
      visible2: true
    }
    
    this.handleContact = this.handleContact.bind(this);
    this.handleJobDetails = this.handleJobDetails.bind(this);
    this.onHideContact = this.onHideContact.bind(this);
    this.onHideJob = this.onHideJob.bind(this);
  }

  componentDidMount=()=>{
    axios.get("https://my-json-server.typicode.com/BSushen/jobDataDetails/job/")
    .then((res)=> {
      this.setState({
        NonITJobs:res.data.filter(i => i.type === "NonIT")
      })
      console.log("NonIT Jobs->",this.state.NonITJobs)
    })
  }

  handleContact=(data)=>{
    this.setState({
      visible1:true,
      visible2:false,
      selectedContact:data
    })
  }
  
  handleJobDetails=(data)=>{
    this.setState({
      visible2:true,
      visible1: false,
      selectedjob:data
    })
  }

  onHideContact=(event)=>{
    this.setState({visible1: false});
  }

  onHideJob=(event)=>{
    this.setState({visible2: false});
  }
  
  render() {
    
    return (
      this.state.NonITJobs ?
      
      <div className="row">
        <div className="col-md-8">
        {this.state.NonITJobs.map(j=>
            <Card className="ui-card mt-2" key={j.id} title={j.title} subtitle={j.location}>
              <p>{j.description}</p>
              
              <span>
                <Button label="View Contact" className="ui-button-info" onClick={()=>this.handleContact(j)}/>
                <Button label="Job Details" className="ui-button-warning" onClick={()=>this.handleJobDetails(j)}/>
              </span>
            </Card>)}
        </div>  
        <div className="col-md-4">
          <div>
          <img src="https://picsum.photos/200/300/?random" alt="IMG" className="mr-3 mt-3" />
          </div>
        </div> 
          
        {this.state.selectedjob && <Dialog className="ui-dialog-titlebar-close" header={this.state.selectedjob.title} visible={this.state.visible2}  width="350px" modal={true} onHide={this.onHideJob}>
          <div className="ui inverted black segment"> 
              <div className="ui card">
                  <div className="content">
                      
                      <div className="description">
                          <p><strong>Job: </strong> {this.state.selectedjob.title}</p>
                          <p><strong>Location: </strong> {this.state.selectedjob.location}</p>
                          <p><strong>Experience: </strong> {this.state.selectedjob.experience}</p>
                          <p><strong>Company: </strong> {this.state.selectedjob.company}</p>
                          <p><strong>Description: </strong> {this.state.selectedjob.description}</p>
                      </div>
                  </div>
              </div>
          </div> 
        </Dialog>}

        {this.state.selectedContact && <Dialog className="ui-dialog-titlebar-close" header={this.state.selectedContact.title} visible={this.state.visible1}  width="350px" modal={true} onHide={this.onHideContact}>
          <div className="ui inverted black segment"> 
              <div className="ui card">
                  <div className="content">
                      
                      <div className="description">
                          <p><strong>Contact Person: </strong> {this.state.selectedContact.postedBy}</p>
                          <p><strong>Contact Number: </strong> {this.state.selectedContact.contact}</p>
                          <p><strong>Email: </strong> {this.state.selectedContact.email}</p>
                      </div>
                  </div>
              </div>
          </div> 
        </Dialog>}
        {/* {this.state.selectedContact && <JobContact contactObject={this.state.selectedContact} /> } */}
        {/* {this.state.selectedjob ? <JObITDetails jobDetails={this.state.selectedjob} /> : null } */}
      </div>

      
      : null

      // this.state.ITJobs ? <JobContact /> : null
    )
  }
}
