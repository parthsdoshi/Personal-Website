import React, { Component } from 'react';

class Section extends Component {
    render() {
        let cls = "section";
        if (this.props.isFooter) {
            cls += " is-footer";
        }
        return (
            <section className={cls}>
                {this.props.children}
            </section>
        )
    }
}

export default Section;
