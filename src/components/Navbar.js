import React, { useEffect } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled  from 'styled-components'

import SiteLogo from './SiteLogo';

const MarginLeftSpan = styled.span`
    margin-left: .3em !important;
`

const Navbar = (props) => {
    let navbarBurger = null
    let addBurgerEvent = null

    if (!props.isFooter) {
        navbarBurger = React.createRef()

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

    useEffect(() => {
        // we only need this effect if we have a burger in the html
        // check if the burger exists in the current view (mobile or not)
        if (navbarBurger && navbarBurger.current != null) {
            addBurgerEvent(navbarBurger.current)
        }
    }, [navbarBurger, addBurgerEvent])

    const emailModal = React.createRef()

    const { strapiGlobal } = useStaticQuery(graphql`
        query {
            strapiGlobal {
                email
                resume_link
            }
        }
    `)

    const email = strapiGlobal.email

    const openEmailModal = () => {
        emailModal.current.classList.toggle("is-active")
        var htmlElement = document.documentElement;
        htmlElement.classList.add("is-clipped");
    }
    
    const closeEmailModal = () => {
        emailModal.current.classList.toggle("is-active")
        var htmlElement = document.documentElement;
        htmlElement.classList.remove("is-clipped");
    }

    const copyEmailToClipboard = () => {
        copyToClipboard(email)
    }

    // taken from online
    // all it does is creates a textarea with what you want to copy and then calls the appropriate api
    // then it removes the textarea
    const copyToClipboard = (str) => {
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
    }

    const marginLeftStyle = { marginLeft: ".3em" }

    let downloadResumeLink = strapiGlobal.resume_link.replace('embed', 'download')

    return (
        <div style={props.style}>
            <nav className={"navbar is-transparent" + (props.isFooter ? "" : "")}>
                <div className="container">
                    <div className="navbar-brand">
                        <Link className="navbar-item" to="/">
                            <SiteLogo />
                        </Link>
                        <Link className="navbar-item is-tagline" to="/">
                            <strong>
                                Parth Doshi
                            </strong>
                        </Link>
                        {!props.isFooter &&
                        <div ref={navbarBurger} className="navbar-burger burger" data-target="navbarMenu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
            }
                    </div>

                    <div id="navbarMenu" className="navbar-menu">
                        <div className="navbar-end">
                            <div className={"navbar-item is-hoverable " + (props.isFooter ? "has-dropdown-up" : "has-dropdown")}>
                                <div className="navbar-link">
                                    Projects
                                </div>
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
                            <Link className="navbar-item" to="/blog">
                                <div className={`button is-link is-rounded has-text-weight-bold ${(!props.hideChefNotification || props.isFooter) && "is-outlined"}`}>
                                    Blog
                                    <MarginLeftSpan className="icon">
                                        <i className="fab fa-blogger"></i>
                                    </MarginLeftSpan>
                                </div>
                            </Link>
                            <a className="navbar-item" href="https://github.com/parthsdoshi">
                                <div className="button is-link is-rounded is-outlined">
                                    Github
                                    <MarginLeftSpan className="icon">
                                        <i className="fab fa-github"></i>
                                    </MarginLeftSpan>
                                </div>
                            </a>
                            <a className="navbar-item" href="https://linkedin.com/in/parthsdoshi">
                                <div className="button is-link is-rounded is-outlined">
                                    LinkedIn
                                    <MarginLeftSpan className="icon">
                                        <i className="fab fa-linkedin"></i>
                                    </MarginLeftSpan>
                                </div>
                            </a>
                            <div className="navbar-item" role="button" onClick={openEmailModal} aria-label="Open Email Modal">
                                <div className="button is-link is-rounded is-outlined">
                                    Email
                                    <MarginLeftSpan className="icon">
                                        <i className="fas fa-envelope"></i>
                                    </MarginLeftSpan>
                                </div>
                            </div>
                            {!props.downloadResume &&
                                <Link className="navbar-item" to="/resume">
                                    <div className="button is-link is-rounded is-outlined">
                                        Résumé
                                        <span className="icon" style={marginLeftStyle}>
                                            <i className="fas fa-file"></i>
                                        </span>
                                    </div>
                                </Link>
                            }
                            {props.downloadResume &&
                                <a className="navbar-item" href={downloadResumeLink}>
                                    <div className="button is-link is-rounded is-outlined">
                                        Download Résumé
                                        <span className="icon" style={marginLeftStyle}>
                                            <i className="fas fa-file-download"></i>
                                        </span>
                                    </div>
                                </a>
                            }
                        </div>
                    </div>
                </div>
            </nav>
            <div className="modal" id="emailModal" ref={emailModal}>
                <div className="modal-background" role="button" onClick={closeEmailModal} aria-label="Close Email Modal"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Email</p>
                        <button className="delete" aria-label="close" onClick={closeEmailModal}></button>
                    </header>
                    <section className="modal-card-body">
                        <h4 className="is-4 subtitle">
                            <a href={"mailto:" + email}>
                                {email}
                            </a>
                        </h4>
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button is-dark" onClick={copyEmailToClipboard}>
                            Copy to clipboard
                        </button>
                        <a className="button is-link" href={"mailto:" + email}>
                            Open externally
                        </a>
                        <button className="button" onClick={closeEmailModal}>
                            Done
                        </button>
                    </footer>
                </div>
            </div>
            {!props.hideChefNotification && <Link to="/blog">
                <div className="notification is-link">
                    While you're here, check out my new blog! It's mostly about food but I also write about my general thoughts. I'd love to hear any ideas/criticism you may have :)
                </div>
            </Link>}
        </div>
    )
}

export default Navbar;
