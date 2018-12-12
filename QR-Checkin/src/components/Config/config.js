import React, {Component} from 'react';
import Navbar from '../Navbar';
import './config.css';


class Config extends Component{
    constructor(props){
        super(props);

        }
    render(){
        return(
            <div className="Config">
                <Navbar/>
                <div>
                    <br/>
                    <div className="panel panel-default">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text" for="inputGroupSelect01">Materia</label>
                            </div>
                            <select className="custom-select" id="inputGroupSelect01">
                                <option selected>Selecionar Materia...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="3">Tamarindo</option>
                            </select>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Agregar Nueva Materia" aria-label="Materia" aria-describedby="basic-addon2"/>
                            <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">Agregar</button>
                            </div>
                        </div>
                    </div>
                    
                    <br/>
                    <div class="input-group">
                        <select class="custom-select" id="inputGroupSelect04">
                            <option selected>Asignar Alumno...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="3">Tamarindo</option>
                        </select>
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button">Asignar</button>
                        </div>
                    </div>
            </div>
        )
    }
}
export default Config;