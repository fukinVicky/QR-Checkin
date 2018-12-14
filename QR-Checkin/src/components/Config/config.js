import React, {Component} from 'react';
import Navbar from '../Navbar';
import './config.css';
import axios from 'axios';

class Config extends Component{
    constructor(props){
        super(props);
        this.state ={
            name:"",
            description:"",
            listSubjects : []
        }
    }
    onChangeInput=(e)=>{
        const {id,value}=e.target;
        this.setState({
            [id]:value
        })
    }

    onSubmitBtn = (e) =>{
        e.preventDefault()
        console.log(this.state);
      
        
        axios.post('https://qr-checkin-api.herokuapp.com/subjects',{
            name: this.state.name,
            description: this.state.description
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
          this.props.history.push('/')
    }  
    
    componentDidMount(){
        axios.get('https://qr-checkin-api.herokuapp.com/subjects')
        .then(materias=>{
            console.log(materias);
          this.setState({
            listSubjects:materias.data
          })
          
        }).catch(err=> console.log(err))
      }

    renderSubjects = () => {

        console.log(this.state.listSubjects);
        

        if(this.state.listSubjects.length > 0){
          const listMateria = this.state.listSubjects.map(materias=> {
            return <option value={materias._id}>{materias.name}</option>
          });
          return listMateria;
      }
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
                                {this.renderSubjects()}
                            </select>
                            </div>
                        </div>
                        <form>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Agregar Nueva Materia" aria-label="Materia" aria-describedby="basic-addon2"/>
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button">Agregar</button>
                                </div>
                            </div>
                        </form> 
                    </div>
                    <br/>
                    <hr/>
                    <br/>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="inputGroupSelect01">Alumno</label>
                        </div>
                        <select class="custom-select" id="inputGroupSelect01">
                            <option selected>Asignar Alumno...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>

                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">Asignar</button>
                        </div>
                    </div>    
            </div>
        )
    }
}
export default Config;