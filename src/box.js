import React, { Component } from 'react'
import "./box.css"


class Box extends Component {


    constructor(props) {
        super(props);
        this.state = {
            color: "purple"
        };
        this.handleClick = this.handleClick.bind(this);
    }

    random(arr) {
        let index = Math.floor(Math.random() * arr.length);
        return arr[index];
    }

    changeColor() {
        let newColor;
        do {
            newColor = this.random(this.props.colors);
        } while (
            newColor === this.state.color
        )

        this.setState({
            color: newColor
        })
    }

    handleClick() {
        this.changeColor();
    }

    render() {
        return (
            <div className="Box" style={{ backgroundColor: this.state.color }} onClick={this.handleClick}></div>
        );
    }
}

export default Box;