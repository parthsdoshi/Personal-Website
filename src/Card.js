import React, { Component } from 'react';

class Card extends Component {
    render() {
        this.imageClass = "image " + this.props.imageType

        return (
            <div className="card">
                <div className="card-image">
                    <figure className={this.imageClass}>
                        <img style={this.props.imageStyle} src={this.props.image} alt="Profile Picture" />
                    </figure>
                </div>
                {/*<div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <div class="media-content">
                                <p class="title is-5">{this.props.title}</p>
                            </div>
                        </div>
                    </div>
                </div>*/}
                <footer class="card-footer">
                    {this.props.children}
                </footer>
            </div>
        )
    }
}

export default Card;
