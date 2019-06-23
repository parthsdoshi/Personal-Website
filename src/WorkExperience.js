import React, { Component } from 'react';
import CiscoLogo from './Cisco_logo.png';
import ViptelaLogo from './Viptela_logo.png';
import PurdueLogo from './Purdue_full_logo.png';
import MicrosoftLogo from './Microsoft_logo_cropped.png';

class WorkExperience extends Component {
    render() {
        // have to add padding due to different logo sizes...
        let purdueLogoPadding = {
            paddingTop: "2em"
        };

        let addPaddingTop = {
            paddingTop: "2em"
        };

        return (
            <div>
                <div className="container">
                    <h3 className="title is-3 has-text-grey-dark has-text-centered has-text-weight-bold">
                        Work Experience
                    </h3>
                </div>
                <div className="container" style={addPaddingTop}>
                    <div className="level">
                        <div className="level-item" style={purdueLogoPadding}>
                            <a href="https://www.microsoft.com/en-us/">
                                <figure className="image is-128x128">
                                    <img src={MicrosoftLogo} alt="Microsoft's logo" />
                                </figure>
                            </a>
                        </div>
                        <div className="level-item" style={purdueLogoPadding}>
                            <a href="https://www.cs.purdue.edu/homes/cs252/">
                                <figure className="image is-128x128">
                                    <img src={PurdueLogo} alt="Purdue University's logo" />
                                </figure>
                            </a>
                        </div>
                        <div className="level-item">
                            <a href="https://viptela.com">
                                <figure className="image is-128x128">
                                    <img src={ViptelaLogo} alt="Viptela's logo" />
                                </figure>
                            </a>
                        </div>
                        <div className="level-item">
                            <a href="https://cisco.com">
                                <figure className="image is-96x96">
                                    <img src={CiscoLogo} alt="Cisco's logo" />
                                </figure>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WorkExperience;
