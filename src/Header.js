import React, { Component } from 'react';
import Card from './Card';
import Section from './Section';

import profilePicture from './rsz_profile_picture_square.jpg';
import resume from './resume.pdf';

class Header extends Component {
    render() {

        this.imageStyleHalfSize = {width: "100%", height: "40%"}

        this.topPadding = {paddingTop: "1.5em"}

        return (
            <section className="hero">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-vcentered box">
                            <div className="column is-half">
                                <div className="content title">
                                    <p>Hi, I'm Parth.</p>
                                </div>

                                <div className="content subtitle" style={this.topPadding}>
                                    <p>I'm a junior at <span className="has-background-warning">Purdue University</span> studying <span className="has-text-info">Computer Science</span> and Mathematical Statistics.</p>
                                    <p>In the past, I've tried my hand at many different sections of Computer Science. A few examples are frontend development, networking, systems, and most recently, data analysis.</p>
                                    <p>
                                        Going forward, I'd like to steer my career towards <span className="has-text-info">machine learning</span> and its applications. Towards this goal, I have selected the "Machine Intelligence" track and am picking up a Mathematical Statistics major to help my understanding of the concepts behind the machine learning algorithms.
                                    </p>
                                </div>

                                <div className="container" style={this.topPadding}>
                                    <a className="button is-link" href={resume}>
                                        Resume
                                    </a>
                                </div>
                            </div>
                            <div className="column is-half">
                                <figure className="image is-1by1">
                                    <img src={profilePicture}  alt="Profile Picture"/>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Header;
