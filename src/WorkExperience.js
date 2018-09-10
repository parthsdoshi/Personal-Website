import React, { Component } from 'react';
import CiscoLogo from './Cisco_logo.png';
import ViptelaLogo from './Viptela_logo.png';
import PurdueLogo from './Purdue_logo.png';

class WorkExperience extends Component {
    render() {
        return (
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-one-third">
                        <div className="level">
                            <div className="level-item has-text-centered">
                                <figure className="image is-128x128">
                                    <img src={PurdueLogo} />
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="column is-one-third">
                        <div className="level">
                            <div className="level-item has-text-centered">
                                <figure className="image is-128x128">
                                    <img src={ViptelaLogo} />
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="column is-one-third">
                        <div className="level">
                            <div className="level-item has-text-centered">
                                <figure className="image is-128x128">
                                    <img src={CiscoLogo} />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WorkExperience;
