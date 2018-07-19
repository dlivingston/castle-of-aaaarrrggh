import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './home.jsx';
import Activity from './activity.jsx';
import Connection from './connection.jsx';
import RCPpool from './rcp-pool.jsx';
import Admin from './admin.jsx';
import './App.css';
import logo from './logo@2x.png';

class App extends Component {
  render() {
    return (
      <Router basename="/">
        
        <div className="App">
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
          <Route path={`${process.env.PUBLIC_URL}/activity`} component={Activity} />
          <Route path={`${process.env.PUBLIC_URL}/connection`} component={Connection} />
          <Route path={`${process.env.PUBLIC_URL}/rcp-pool`} component={RCPpool} />
          <Route path={`${process.env.PUBLIC_URL}/admin`} component={Admin} />

          <div className="footer">
            <div className="flex-wrapper">
              <Link className="button is-info" to={`${process.env.PUBLIC_URL}/`}><i className="mdi mdi-home"></i></Link>
              <Link className="button is-success" to={`${process.env.PUBLIC_URL}/admin`}><i className="mdi mdi-account-settings-variant"></i>&nbsp; Admin</Link>
              <div className="logo-wrapper">
                <img className="logo" src={logo} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </Router>
      
    );
  }
}

export default App;
