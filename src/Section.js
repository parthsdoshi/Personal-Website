import React, { Component } from 'react';

class Section extends Component {
    render() {
        this.cls = "section";
        if (this.props.isFooter) {
            this.cls += " is-footer";
        }
        return (
            <section className={this.cls}>
                {this.props.children}
            </section>
        )
    }
}

export default Section;
