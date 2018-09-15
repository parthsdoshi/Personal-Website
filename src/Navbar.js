import React, { Component } from 'react';
import logo from './logo_compressed.png';
import resume from './resume.pdf';

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.navbarBurger = React.createRef()

        this.addBurgerEvent = this.addBurgerEvent.bind(this)
    }

    componentDidMount() {
        if (this.navbarBurger.current != null) {
            this.addBurgerEvent(this.navbarBurger.current)
        }
    }

    render() {

        let marginBottomStyle = { marginBottom: "-10em" }
        let marginLeftStyle = { marginLeft: ".3em" }

        let style = marginBottomStyle;
        if (this.props.isFooter) {
            style = null;
        }

        return (
            <div>
                <nav className={"navbar is-transparent" + (this.props.isFooter ? "" : "")} style={style}>
                    <div className="container">
                        <div className="navbar-brand">
                            <a className="navbar-item">
                                <img src={logo} alt="Parth Doshi's logo" width="66" height="28" />
                                {/*<h2 className="title">*/}
                                {/*Parth Doshi*/}
                                {/*</h2>*/}
                            </a>
                            <strong className="navbar-item is-tagline">
                                Parth Doshi
                            </strong>
                            <div ref={this.navbarBurger} className="navbar-burger burger" data-target="navbarMenu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>

                        <div id="navbarMenu" className="navbar-menu">
                            <div className="navbar-end">
                                {/*<a className="navbar-item">
                                    Work Experience
                                </a>*/}

                                <div className={"navbar-item is-hoverable " + (this.props.isFooter ? "has-dropdown-up" : "has-dropdown")}>
                                    <a className="navbar-link">
                                        Projects
                                    </a>
                                    <div className="navbar-dropdown is-boxed">
                                        <a className="navbar-item" href="http://mediaq.parthdoshi.com">
                                            MediaQ
                                        </a>
                                        <hr className="navbar-divider" />
                                        <div className="navbar-item">
                                            More to come soon :)
                                        </div>
                                    </div>
                                </div>

                                <a className="navbar-item" href="https://github.com/parthsdoshi">
                                    <div className="button is-link is-rounded is-outlined">
                                        Github
                                        <span className="icon" style={marginLeftStyle}>
                                            <i className="fab fa-github"></i>
                                        </span>
                                    </div>
                                </a>
                                <a className="navbar-item" href="https://linkedin.com/in/parthsdoshi">
                                    <div className="button is-link is-rounded is-outlined">
                                        LinkedIn
                                        <span className="icon" style={marginLeftStyle}>
                                            <i className="fab fa-linkedin"></i>
                                        </span>
                                    </div>
                                </a>
                                <a className="navbar-item" href="mailto:doshi.parth9@gmail.com">
                                    <div className="button is-link is-rounded is-outlined">
                                        Email
                                        <span className="icon" style={marginLeftStyle}>
                                            <i className="fas fa-envelope"></i>
                                        </span>
                                    </div>
                                </a>
                                <a className="navbar-item" href={resume}>
                                    <div className="button is-link is-rounded is-outlined">
                                        Resume
                                        <span className="icon" style={marginLeftStyle}>
                                            <i className="fas fa-file"></i>
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }

    addBurgerEvent(e) {
        // Add a click event on each of them
        e.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = e.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            e.classList.toggle('is-active');
            $target.classList.toggle('is-active');

        });
    }
}

export default Navbar;
