import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="home content-panel">
                <div className="row">
                    <div className="link-wrapper">
                        <Link className="button is-outlined is-fullwidth" to={`${process.env.PUBLIC_URL}/connection`}>Connection</Link>
                    </div>
                    <div className="progress-wrapper">
                        <progress className="progress is-success" value="80" max="100">80%</progress>
                    </div>
                </div>
                <div className="row">
                    <div className="link-wrapper">
                        <Link className="button is-outlined is-fullwidth" to={`${process.env.PUBLIC_URL}/activity`}>Activity</Link>
                    </div>
                    <div className="progress-wrapper">
                        <progress className="progress is-success" value="75" max="100">75%</progress>
                        <progress className="progress is-warning" value="50" max="100">50%</progress>
                    </div>
                </div>
                <div className="row">
                    <div className="link-wrapper">
                        <Link className="button is-outlined is-fullwidth" to={`${process.env.PUBLIC_URL}/rcp-pool`}>RCP Pool</Link>
                    </div>
                    <div className="progress-wrapper">
                        <progress className="progress is-success" value="35" max="100">35%</progress>
                        <progress className="progress is-danger" value="40" max="100">40%</progress>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home