import React, { Component } from 'react';

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
                        <div className="columns box">
                            <div className="column is-half">
                                <div className="has-text-centered">
                                    <div className="content title">
                                        <p>Hi, I'm Parth. <span role="img" aria-label="Smiling emoji">&#x1F604;</span></p>
                                    </div>

                                    <div className="content subtitle" style={this.topPadding}>
                                        <p>I'm a junior at <span className="has-text-weight-semibold">Purdue University</span> studying <a href="https://www.cs.purdue.edu/undergraduate/curriculum/track_MI.html" className="has-text-link">Computer Science</a> and <a href="http://catalog.purdue.edu/preview_program.php?catoid=9&poid=10329" className="has-text-link">Mathematical Statistics</a>.</p>
                                        <p>In the past, I've explored many different areas of Computer Science trying to find what I really enjoy. So far I've tried my hand at the following: <span className="has-text-weight-semibold">frontend development, networking, systems, and most recently, data analysis</span>.</p>
                                        <p>
                                            Going forward, I'd like to steer my career towards machine learning and its applications in the field. Towards this goal, I have selected the "Machine Intelligence" track and have picked up a Mathematical Statistics major.
                                        </p>
                                        <p>
                                            If you're interested, take a look at my resume!
                                        </p>
                                    </div>

                                    <div style={this.topPadding}>
                                        <a className="button is-link" href={resume}>
                                            Resume
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="column is-half">
                                <figure className="image is-1by1">
                                    <img src={profilePicture}  alt="Parth Doshi in Europe"/>
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
