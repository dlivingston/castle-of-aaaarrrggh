import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="level">
                    <Link className="button is-primary" to="/connection">Connection</Link>
                </div>
                <div className="level">
                    <Link className="button is-primary" to="/activity">Activity</Link>
                </div>
            </div>
        );
    }
}

export default Home