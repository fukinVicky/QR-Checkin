import React, {Component} from 'react';
import Navbar from '../Navbar';
import './generarqr.css';



class Generarqr extends Component{
    constructor(props){
        super(props);

        }
    render(){
        return(
            <div className="Generarqr">
                <Navbar/>
                <body>
                    <div class="container-fluid text-center">    
                        <div class="row content">
                            <div class="col-sm-2 sidenav">
                            <p>
                                <label>Seleccionar Materia</label>
                                <select className="custom-select" id="inputGroupSelect01">
                                    <option selected>Selecionar Materia...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                    <option value="3">Tamarindo</option>
                                </select>
                            </p>
                            <p>
                                <a type="button" class="btn btn-secondary btn-lg btn-block" href="/">Generar</a>
                            </p>
                            </div>
                            <div class="col-sm-8 text-left"> 
                            <h1>Welcome</h1>
                            <div className="qrdiv">
                                <div className="qrcontent">
                                    Test!
                                </div>
                            </div>
                            <hr/>
                            <h3>Test</h3>
                            <p>Meow</p>
                            </div>
                            <div class="col-sm-2 sidenav">
                                <div class="well">
                                    <p>Something</p>
                                </div>
                                <div class="well">
                                    <p>Here</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
                        
                </div>
        )
    }
}
export default Generarqr;