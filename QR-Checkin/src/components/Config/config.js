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
            listSubjects : [],
            listAlumnos:[]
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
    }  
    
    componentDidMount(){
        console.log('Local');
        console.log(localStorage.getItem('userId'));
        

        axios.get('https://qr-checkin-api.herokuapp.com/subjects')
        .then(materias=>{
            console.log(materias);
          this.setState({
            listSubjects:materias.data
          })
          
        }).catch(err=> console.log(err))

        axios.get('https://qr-checkin-api.herokuapp.com/users')
        .then(alumnos=>{
            console.log('sdfsdfsdfsd');
            console.log(alumnos);
          this.setState({
            listAlumnos:alumnos.data
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
    
    onSubmitBtnMateria = (e) =>{
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
          this.props.history.push('/config')
    } 
    onSubmitBtnAlumnos = (e) =>{
        e.preventDefault()
        console.log(this.state);
        const val = document.getElementById('inputGroupSelect01').value;
        const val2 = document.getElementById('inputGroupSelect02').value;
        

        axios.put(`https://qr-checkin-api.herokuapp.com/subjects/${val}`,{
            user: val2
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
          this.props.history.push('/config')
    } 

    renderAlumnos = () => {
        console.log('f');
        
        console.log(this.state.listAlumnos);
        if(this.state.listAlumnos.length > 0){
          const listaDeAlumnos = this.state.listAlumnos.map(alumnos=> {
            return <option value={alumnos._id}>{alumnos.username}</option>
          });
          return listaDeAlumnos;
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
                        <form onSubmit={this.onSubmitBtnMateria}>
                            <div className="input-group mb-3">
                                <input id= "name" type="text" className="form-control" placeholder="Agregar Nueva Materia" aria-label="Materia" aria-describedby="basic-addon2" onChange={this.onChangeInput} value={this.state.name}/>
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="submit" >Agregar</button>
                                </div>
                            </div>
                        </form> 
                    </div>
                    <br/>
                    <hr/>
                    <br/>
                    <form onSubmit={this.onSubmitBtnAlumnos}>                        
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect02">Alumno</label>
                            </div>
                            <select class="custom-select" id="inputGroupSelect02">
                            {this.renderAlumnos()}
                            </select>

                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="submit">Asignar</button>
                            </div>
                        </div> 
                    </form>   
            </div>
        )
    }
}
export default Config;