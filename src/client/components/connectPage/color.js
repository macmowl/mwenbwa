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
                            "#FF0100",
                            "#FF7E00",
                            "#FEB902",
                            "#73D708",
                            "#16CEDF",
                            "#0085FF",
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
