import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Connection extends Component {
    render() {
        return (
            <div className="content-panel">
                <h2>Connection</h2>
                <div className="row">
                    <div className="link-wrapper">
                        <Link className="button is-outlined is-fullwidth" to={`${process.env.PUBLIC_URL}/`}>7T ANG</Link>
                    </div>
                    <div className="progress-wrapper">
                        <progress className="progress is-success" value="80" max="100">80%</progress>
                    </div>
                </div>
                <div className="row">
                    <div className="link-wrapper">
                        <Link className="button is-outlined is-fullwidth" to={`${process.env.PUBLIC_URL}/`}>7T CNG</Link>
                    </div>
                    <div className="progress-wrapper">
                        <progress className="progress is-warning" value="50" max="100">50%</progress>
                    </div>
                </div>
                <div className="row">
                    <div className="link-wrapper">
                        <Link className="button is-outlined is-fullwidth" to={`${process.env.PUBLIC_URL}/`}>Internet</Link>
                    </div>
                    <div className="progress-wrapper">
                        <progress className="progress is-danger" value="40" max="100">40%</progress>
                    </div>
                </div>
            </div>
        );
    }
}

export default Connection