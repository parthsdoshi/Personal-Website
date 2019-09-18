import React from 'react';

const Section = (props) => {
    let cls = "section";
    if (props.isFooter) {
        cls += " is-footer";
    }

    return (
        <section className={cls}>
            {props.children}
        </section>
    )
}

export default Section;
