import React, { Component } from 'react';
import Box from "./box";
import "./BoxContainer.css"


class BoxContainer extends Component {
    static defaultProps = {
        numBoxes: 6,
        allColors: [
            "purple", "magenta", "pink", "lavender", "blueViolet", "darkMagenta", "darkViolet", "darkOrchid", "orchid"
        ]

    }



    render() {
        const boxes = Array.from({ length: this.props.numBoxes }).map(() => {
            return <Box colors={this.props.allColors} />
        })

        return (
            <div className="BoxContainer" >
                { boxes}
            </div>
        )
    }
}


export default BoxContainer;