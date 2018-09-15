import React, { Component } from 'react';

class Card extends Component {
    render() {
        this.imageClass = "image " + this.props.imageType

        return (
            <div className="card">
                <div className="card-image">
                    <figure className={this.imageClass}>
                        <img style={this.props.imageStyle} src={this.props.image} alt={this.props.alt} />
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
                    {this.props.children}
                </footer>
            </div>
        )
    }
}

export default Card;
