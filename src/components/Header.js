import React from 'react';

import { Link } from 'gatsby';

import ProfilePicture from './ProfilePhoto';

const Header = () => {
    let topPadding = {paddingTop: "1.5em"}

    return (
        <section className="hero">
            <div className="hero-body">
                <div className="container">
                    <div className="columns box is-vcentered">
                        <div className="column is-half">
                            <figure className="image">
                                <ProfilePicture imgStyle={{borderRadius: "1%"}} />
                            </figure>
                        </div>
                        <div className="column is-half">
                            <div className="has-text-centered">
                                <div className="content title">
                                    <p>Hi, I'm Parth. <span role="img" aria-label="Smiling emoji">&#x1F604;</span></p>
                                </div>

                                <div className="content subtitle" style={topPadding}>
                                    <p>I'm a senior at <span className="has-text-weight-semibold">Purdue University</span> studying <a href="https://www.cs.purdue.edu/undergraduate/curriculum/track_MI.html" className="has-text-link">Computer Science</a> and <a href="http://catalog.purdue.edu/preview_program.php?catoid=9&poid=10329" className="has-text-link">Mathematical Statistics</a>.</p>
                                    <p>In the past, I've explored many different areas of Computer Science trying to find what I enjoy. So far I've tried my hand at the following: <span className="has-text-weight-semibold">fullstack development, game development, systems, and most recently, data analysis</span>.</p>
                                    {/*<p>
                                        Going forward, I'd like to steer my career towards machine learning and its applications in the field. Towards this goal, I have selected the "Machine Intelligence" track and have picked up a Mathematical Statistics major.
                                    </p>*/}
                                    <p>
                                        Aside from my professional life, I like to rock climb <span role="img" aria-label="Rock climbing emoji">&#x1F9D7;</span> a bunch.
                                    </p>
                                    <p>
                                        If you're interested in working with me, don't hesitate to contact me!
                                    </p>
                                </div>

                                <div style={topPadding}>
                                    <Link className="button is-link" to="/resume">
                                        Résumé
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;
