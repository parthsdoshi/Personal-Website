import React from 'react';
import CiscoLogo from "../components/CiscoLogo";
import ViptelaLogo from "../components/ViptelaLogo";
import PurdueLogo from "../components/PurdueLogo";
import MicrosoftLogo from "../components/MicrosoftLogo";
import FathomLogo from "../components/FathomLogo";

const WorkExperience = () => {
    // have to add padding due to different logo sizes...
    let addPaddingTop = {
        paddingTop: "0em"
    };

    let purdueLogoPadding = {
        paddingTop: "3em"
    };

    let msLogoPadding = {
        paddingTop: "2.5em"
    };

    let fathomLogoPadding = {
        paddingTop: "4.2em"
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
                    <div className="level-item" style={fathomLogoPadding}>
                        <a href="https://www.fathomhealth.com">
                            <figure className="image is-128x128">
                                <FathomLogo />
                            </figure>
                        </a>
                    </div>
                    <div className="level-item" style={msLogoPadding}>
                        <a href="https://www.microsoft.com/en-us/">
                            <figure className="image is-128x128">
                                <MicrosoftLogo />
                            </figure>
                        </a>
                    </div>
                    <div className="level-item" style={purdueLogoPadding}>
                        <a href="https://www.cs.purdue.edu/homes/cs252/">
                            <figure className="image is-128x128">
                                <PurdueLogo />
                            </figure>
                        </a>
                    </div>
                    <div className="level-item">
                        <a href="https://viptela.com">
                            <figure className="image is-128x128">
                                <ViptelaLogo />
                            </figure>
                        </a>
                    </div>
                    <div className="level-item">
                        <a href="https://cisco.com">
                            <figure className="image is-96x96">
                                <CiscoLogo />
                            </figure>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkExperience;