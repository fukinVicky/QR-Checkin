import React, { Component } from "react";
import QrReader from "react-qr-reader";
import axios from "axios";

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
            console.log(localStorage.getItem('userId'));
    
            axios.put(
                    `https://qr-checkin-api.herokuapp.com/subjects/${data}`,
                    { user: localStorage.getItem('userId')}
                )
                .then(response => { 
                    console.log(response);
                })
                .catch(err => {            
                    console.log(err);
                });
        }
    }

    handleError = (err) => {
        console.error(err);
    }

    render() {

        // let style = {
        //     'background': 'white',
        //     width: '100%',
        // }

        return (
            <div className="scanner">
                <div className="scanner_content">
                    <QrReader
                        delay={this.state.delay}
                        onError={this.handleError}
                        onScan={this.handleScan}
                        style={{ width: "50%" }}
                    />
                </div>
                <p>{this.state.result}</p>             
                <a type="button" class="btn btn-secondary btn-lg btn-block" href="/">Salir</a>
            </div>

               
        );
    }
}

export default Scanner;