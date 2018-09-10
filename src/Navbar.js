import React, { Component } from 'react';
import logo from './logo.png';

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.navbarBurger = React.createRef()

        this.addBurgerEvent = this.addBurgerEvent.bind(this)
    }

    componentDidMount() {
        console.log("navbarBurger event added")
        if (this.navbarBurger.current != null) {
            this.addBurgerEvent(this.navbarBurger.current)
        }
    }

    render() {

        this.marginBottomStyle = { marginBottom: "-10em" }

        this.style = this.marginBottomStyle;
        if (this.props.isFooter) {
            this.style = null;
        }

        return (
            <div>
                <nav className="navbar is-transparent" style={this.style}>
                    <div className="container">
                        <div className="navbar-brand">
                            <a className="navbar-item">
                                <img src={logo} alt="Parth Doshi" width="66" height="28" />
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
                                </a>

                                <a className="navbar-item">
                                    Projects
                                </a>*/}

                                <a className="navbar-item" href="https://github.com/parthsdoshi">
                                    <a className="button is-link is-rounded is-outlined">
                                        <span className="icon">
                                            <i className="fab fa-github"></i>
                                        </span>
                                    </a>
                                </a>
                                <a className="navbar-item" href="https://linkedin.com/in/parthsdoshi">
                                    <a className="button is-link is-rounded is-outlined">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                </a>
                                <a className="navbar-item" href="mailto:doshi.parth9@gmail.com">
                                    <a className="button is-link is-rounded is-outlined">
                                        <i className="fas fa-envelope"></i>
                                    </a>
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
