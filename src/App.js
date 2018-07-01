import React, { Component } from 'react';
import {Switch,Route, Link} from 'react-router-dom'
import './App.css';
import Contact from './contact/contact';
import JobList from './job/joblist';
import JobIT from './job/jobs-it';

class App extends Component {
  render() {
    return (
      <div className="container">

          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">BM <span id="path">Path Finder</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Events</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contacts</Link>
            </li>
           
          </ul>
        </nav>
         
          <Switch>
            <Route exact path="/" component={ JobList } />
            <Route exact path="/contact" component={ Contact } />
            <Route exact path="/itjobs" component={ JobIT } />
          </Switch>
      </div>
    );
  }
}

export default App;
