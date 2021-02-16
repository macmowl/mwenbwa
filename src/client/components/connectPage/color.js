"use strict";

import React, {Component, Fragment} from "react";
import {CirclePicker} from "react-color";
export class CircleColor extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(color) {
        console.log(color);
        this.setState({color});
    }

    render() {
        return (
            <>
                <Fragment>
                    <CirclePicker
                        colors={[
                            "#2196f3",
                            "#03a9f4",
                            "#00bcd4",
                            "#009688",
                            "#4caf50",
                            "#8bc34a",
                        ]}
                        color={this.state.color}
                        onChange={this.handleOnChange}
                    />
                </Fragment>
            </>
        );
    }
}

export default CircleColor;
