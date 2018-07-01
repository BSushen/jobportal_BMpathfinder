import React, { Component } from 'react';
import axios from 'axios';
import './joblist.css';
import {Link} from 'react-router-dom';

export default class JobList extends Component {
    constructor(props){
        super(props)
        this.state={
            jobs:[],
            ITdata:[],
            NonITdata:[]
        }
    }

    componentDidMount=()=>{
        // const job={"firstName":"sushen","lastName":"birari"}
        // localStorage.setItem("data",job)
        axios.get("https://my-json-server.typicode.com/BSushen/jobDataDetails/job/")
        .then((res)=>{
            this.setState({
                jobs:res.data,
                ITdata:res.data.filter(i => i.type === "IT"),
                NonITdata:res.data.filter(n => n.type === "NonIT")
            })

        })
        .catch((err)=>{
            console.log(err);
        })
        
    }

    handleIT=(data)=>{
        
    }
  render() {
      const ITCount = this.state.ITdata.length;
      const NonITCount = this.state.NonITdata.length
    return (
      <div>
        <div className="card-deck">
            <Link className="card bg-warning" to="/itjobs">
                <div className="card-body text-center">
                    <strong>
                        <p className="card-text">Total IT Jobs</p>
                        <p className="card-text">{ITCount}</p>
                    </strong>
                </div>
            </Link>
            <Link className="card bg-warning" to="/nonitjobs">
                <div className="card-body text-center">
                    <strong>
                        <p className="card-text">Total Non-IT Jobs</p>
                        <p className="card-text">{NonITCount}</p>
                    </strong>
                </div>
            </Link>
            <Link className="card bg-warning" to="/placement">
                <div className="card-body text-center">
                    <strong>
                        <p className="card-text">Total Job Offer</p>
                        <p className="card-text">5</p>
                    </strong>
                </div>
            </Link>
        </div>
      </div>
    )
  }
}
