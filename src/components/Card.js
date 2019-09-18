import React, { Component } from 'react';

const Card = (props) => {
    imageClass = "image " + props.imageType

    return (
        <div className="card">
            <div className="card-image">
                <figure className={imageClass}>
                    <img style={props.imageStyle} src={props.image} alt={props.alt} />
                </figure>
            </div>
            {/*<div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <div className="media-content">
                            <p className="title is-5">{this.props.title}</p>
                        </div>
                    </div>
                </div>
            </div>*/}
            <footer className="card-footer">
                {props.children}
            </footer>
        </div>
    )
}

export default Card;