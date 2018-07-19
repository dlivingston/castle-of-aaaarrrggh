import React, { Component } from 'react';

class Admin extends Component {
    render() {
        return (
            <div className="admin">
                <h2>Admin</h2>
                <div className="tile is-ancestor">
                    <div className="tile is-parent is-vertical">
                        <div className="tile is-child">
                            <div className="field">
                                <div className="control">
                                    <input className="input" type="text" placeholder="Network" />
                                </div>
                            </div>
                        </div>
                        <div className="tile is-child">
                            <div className="field">
                                <div className="control">
                                    <input className="input" type="password" placeholder="Enter Password" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="button is-primary">Login</button>
            </div>
        );
    }
}

export default Admin