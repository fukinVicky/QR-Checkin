import React, { Component } from "react";
import QrReader from "react-qr-reader";

class Scanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            delay: 300,
            result: "No result",
        };
    }

    handleScan = (data) => {
        if (data) {
            this.setState({
                result: data,
            });

            console.log(data);

        }
    }

    handleError = (err) => {
        console.error(err);
    }

    render() {

        let style = {
            'background': 'white',
            width: '100%',
        }

        return (
            <div style={style}>
                <QrReader
                    delay={this.state.delay}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    style={{ width: "50%" }}
                />
                <p >{this.state.result}</p>
            </div>
        );
    }
}

export default Scanner;