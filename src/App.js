import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './home.js';
import Activity from './activity.js';
import Connection from './connection.js';
import Admin from './admin.js';
import './App.css';
import logo from './logo@2x.png';

class App extends Component {
  render() {
    return (
      <Router>
        
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/activity" component={Activity} />
          <Route path="/connection" component={Connection} />
          <Route path="/admin" component={Admin} />

          <div className="footer">
            <Link className="button is-info" to="/"><i className="mdi mdi-home"></i></Link>
            <Link className="button is-success" to="/admin"><i className="mdi mdi-account-settings-variant"></i>&nbsp; Admin</Link>
            <div className="logo-wrapper">
              <img className="logo" src={logo} alt=""/>
            </div>
          </div>
        </div>
      </Router>
      
    );
  }
}

export default App;
