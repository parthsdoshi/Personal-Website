import React, { Component } from 'react';
import resume from './ResumeLink';

import logo from './logo_compressed.png';

class Navbar extends Component {
    constructor(props) {
        super(props);

        if (!this.props.isFooter) {
            this.navbarBurger = React.createRef()
        }

        this.emailModal = React.createRef()

        this.email = "dosparth@gmail.com"
    }

    componentDidMount() {
        if (!this.props.isFooter) {
            if (this.navbarBurger.current != null) {
                this.addBurgerEvent(this.navbarBurger.current)
            }
        }
    }

    openEmailModal = () => {
        this.emailModal.current.classList.toggle("is-active")
    }
    
    closeEmailModal = () => {
        this.emailModal.current.classList.toggle("is-active")
    }

    copyEmailToClipboard = () => {
        this.copyToClipboard(this.email)
    }

    // taken from online
    // all it does is creates a textarea with what you want to copy and then calls the appropriate api
    // then it removes the textarea
    copyToClipboard = (str) => {
        const el = document.createElement('textarea');  // Create a <textarea> element
        el.value = str;                                 // Set its value to the string that you want copied
        el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof
        el.style.position = 'absolute';                 
        el.style.left = '-9999px';                      // Move outside the screen to make it invisible
        document.body.appendChild(el);                  // Append the <textarea> element to the HTML document
        const selected =            
            document.getSelection().rangeCount > 0        // Check if there is any content selected previously
            ? document.getSelection().getRangeAt(0)     // Store selection if found
            : false;                                    // Mark as false to know no selection existed before
        el.select();                                    // Select the <textarea> content
        document.execCommand('copy');                   // Copy - only works as a result of a user action (e.g. click events)
        document.body.removeChild(el);                  // Remove the <textarea> element
        if (selected) {                                 // If a selection existed before copying
            document.getSelection().removeAllRanges();    // Unselect everything on the HTML document
            document.getSelection().addRange(selected);   // Restore the original selection
        }
    };

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
                            {!this.props.isFooter &&
                            <div ref={this.navbarBurger} className="navbar-burger burger" data-target="navbarMenu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
			    }
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
                                    <a className="navbar-item" href="https://github.com/parthsdoshi/fabel">
                                        Fabel
                                    </a>
                                    <a className="navbar-item" href="http://mediaq.parthdoshi.com">
                                        MediaQ
                                    </a>
                                    <hr className="navbar-divider" />
                                    <div className="navbar-item">
                                        More to come soon :)
                                    </div>
                                </div>
                            </div>

                            {/*<div className={"navbar-item is-hoverable " + (this.props.isFooter ? "has-dropdown-up" : "has-dropdown")}>
                                <a className="navbar-link">
                                        External Links
                                    </a>
                                    <div className="navbar-dropdown is-boxed">
                                        <a className="navbar-item" href="https://github.com/parthsdoshi">
                                            Github
                                        </a>
                                        <a className="navbar-item" href="https://linkedin.com/in/parthsdoshi">
                                            LinkedIn
                                        </a>
                                        <hr className="navbar-divider" />
                                        <a className="navbar-item" href="mailto:dosparth@gmail.com">
                                            Email Me
                                        </a>
                                    </div>
                            </div>*/}

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
                                <a className="navbar-item" onClick={this.openEmailModal}>
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
                <div className="modal" id="emailModal" ref={this.emailModal}>
                    <div className="modal-background"></div>
                    <div className="modal-card">
                        <header className="modal-card-head">
                            <p className="modal-card-title">Email</p>
                            <button className="delete" aria-label="close" onClick={this.closeEmailModal}></button>
                        </header>
                        <section className="modal-card-body">
                            <h4 className="is-4 subtitle">
                                <a href={"mailto:" + this.email}>
                                    {this.email}
                                </a>
                            </h4>
                        </section>
                        <footer className="modal-card-foot">
                            <button className="button is-dark" onClick={this.copyEmailToClipboard}>
                                Copy to clipboard
                            </button>
                            <a className="button is-link" href={"mailto:" + this.email}>
                                Open externally
                            </a>
                            <button className="button" onClick={this.closeEmailModal}>
                                Done
                            </button>
                        </footer>
                    </div>
                </div>
            </div>
        )
    }

    addBurgerEvent = (e) => {
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
