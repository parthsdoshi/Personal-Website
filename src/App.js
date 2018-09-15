import React, { Component } from 'react';
import Section from './Section';
import HR from './HR';
import Navbar from './Navbar';
import Header from './Header';
import WorkExperience from './WorkExperience';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Section>
                    <Navbar />
                </Section>
                <Section>
                    <Header />
                </Section>
                <HR />
                <Section>
                    <WorkExperience />
                </Section>
                {/*<HR />
                <Section>
                    <Projects />
                </Section>*/}
                <HR />
                <Section isFooter>
                    <Navbar isFooter/>
                </Section>
            </div>
        );
    }
}

export default App;
