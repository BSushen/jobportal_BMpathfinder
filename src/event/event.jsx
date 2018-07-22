import React, { Component } from 'react';
import './event.css';

export default class Event extends Component {
  render() {
    return (
      <div>
        <div className="event-heading"><h1>Upcoming Events</h1></div>
        <div className="card-deck">
            <div className="card border-warning mb-3">
                <img className="card-img-top" src="https://picsum.photos/200/300/?random" alt="Card1" />
                <div className="card-body">
                    <h5 className="card-title">BM Path Finder Meeting</h5>
                    <p className="card-text">Bm path finder's meeting is arranged on 22nd July 2018.</p>
                    <p className="card-text"><small class="text-muted">Updated on 03/07/2018</small></p>
                </div>
            </div>
            <div className="card border-warning mb-3">
                <img className="card-img-top" src="https://picsum.photos/200/300/?random" alt="Card2" />
                <div className="card-body">
                    <h5 className="card-title">GOLang Session</h5>
                    <p className="card-text">Go-Lang session by Kaustubh, on 30th July 2018. It will held on skype.</p>
                    <p className="card-text"><small class="text-muted">Updated on 06/07/2018</small></p>
                </div>
            </div>
            <div className="card border-warning mb-3">
                <img className="card-img-top" src="https://picsum.photos/200/300/?random" alt="Card3" />
                <div className="card-body">
                    <h5 className="card-title">AWS Alexa Sessoin</h5>
                    <p className="card-text">There will be a skype session on AWS Alexa on 07/08/2018, by Sandeep.</p>
                    <p className="card-text"><small class="text-muted">Updated on 11/07/2018</small></p>
                </div>
            </div>
        </div>
        
      </div>
    )
  }
}
