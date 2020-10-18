import React from 'react';
import styled, { css } from 'styled-components'


const Section = ({ style, children, isFooter, className }) => {
    let cls = "section"
    if (isFooter) {
        cls += " is-footer";
    }

    return (
        <section className={`${cls} ${className}`} style={style}>
            {children}
        </section>
    )
}


const PaddedSection = styled(Section)`
    ${({ isnavbar, isFooter }) => (isnavbar && !isFooter) && css`
        padding-bottom: 0rem;
    `}
    ${({ paddingRight }) => (paddingRight) && css`
        padding-right: ${paddingRight};
    `}
    ${({ paddingLeft }) => (paddingLeft) && css`
        padding-left: ${paddingLeft};
    `}
    ${({ paddingBottom }) => (paddingBottom) && css`
        padding-bottom: ${paddingBottom};
    `}
    ${({ paddingTop }) => (paddingTop) && css`
        padding-top: ${paddingTop};
    `}
`

export default PaddedSection;
