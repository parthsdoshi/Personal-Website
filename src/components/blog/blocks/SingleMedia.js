import React from "react"


const SingleMedia = ({ caption, alternativeText, children }) => {
    return (
        <div className="container has-text-centered">
            {children}
            <p className="is-italic is-size-7">{caption}</p>
        </div>
    )
}

export default SingleMedia;