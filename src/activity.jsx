import React, { Component } from 'react';

class Activity extends Component {
    render() {
        return (
            <div className="activity content-panel">
                <h2>Activity Detail</h2>
                
                <div className="tile is-ancestor is-12">
                    <div className="tile is-parent is-5">
                        <div className="tile is-child">
                            <div className="">Time (Last)</div>
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <div className="tile is-child">
                            <div className="">MIN</div>
                        </div>
                        <div className="tile is-child">
                            <div className="">HR</div>
                        </div>
                        <div className="tile is-child">
                            <div className="">DAY</div>
                        </div>
                    </div>
                </div>
                <div className="tile is-ancestor is-12">
                    <div className="tile is-parent is-5">
                        <div className="tile is-child ">
                            <div className="tile is-ancestor">
                                <div className="tile is-parent is-8">
                                    <div className="tile is-child title-wrapper">
                                        <h5 className="title is-5">
                                            Bytes
                                        </h5>
                                    </div>
                                </div>
                                <div className="tile is-parent">
                                    <div className="tile is-child">
                                        <div className="is-size-7">In</div>
                                        <div className="is-size-7">Out</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <div className="tile is-child">
                            <div className="card notification is-info">8.3K</div>
                            <div className="card notification is-info">94.2K</div>
                        </div>
                        <div className="tile is-child">
                            <div className="card notification is-info">42.7M</div>
                            <div className="card notification is-info">101.7M</div>
                        </div>
                        <div className="tile is-child">
                            <div className="card notification is-info">5.8G</div>
                            <div className="card notification is-info">16.5G</div>
                        </div>
                    </div>
                </div>

                <div className="tile is-ancestor is-12">
                    <div className="tile is-parent is-5">
                        <div className="tile is-child ">
                            <div className="tile is-ancestor">
                                <div className="tile is-parent is-8">
                                    <div className="tile is-child title-wrapper">
                                        <h5 className="title is-5">
                                            Packets
                                        </h5>
                                    </div>
                                </div>
                                <div className="tile is-parent">
                                    <div className="tile is-child">
                                        <div className="is-size-7">In</div>
                                        <div className="is-size-7">Out</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <div className="tile is-child">
                            <div className="card notification is-info">0.4K</div>
                            <div className="card notification is-info">8.3K</div>
                        </div>
                        <div className="tile is-child">
                            <div className="card notification is-info">11.2M</div>
                            <div className="card notification is-info">24.2M</div>
                        </div>
                        <div className="tile is-child">
                            <div className="card notification is-info">1.3G</div>
                            <div className="card notification is-info">4.9G</div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default Activity