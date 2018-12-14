import React, {Component} from 'react';
import Navbar from '../Navbar';
// import ResizeImage from 'react-resize-image'
import axios from 'axios';
import './generarqr.css';
import logo from '../Home/image/home_image.png';



class Generarqr extends Component{
    constructor(props){
        super(props);
        this.state ={
            name:"",
            description:"",
            listSubjects : [],
            qr: ""
        }

    }

    onChangeInput=(e)=>{
        const {id,value}=e.target;
        this.setState({
            [id]:value
        })
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

    onSubmitBtnGenerar = (e) =>{
        e.preventDefault();

        const val = document.getElementById('inputGroupSelect01').value;

        axios
            .get(`https://qr-checkin-api.herokuapp.com/generate?text=${val}`)
            .then((response) => {
                this.setState({
                    qr: response.data
                });
            })
            .catch( (error) => {
                console.log(error);
            });
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
            <div className="Generarqr">
                <Navbar/>
                <body>
                    <div className="container-fluid text-center">    
                        <div className="row content">
                            <div className="col-sm-3 sidenav">
                            <form onSubmit={this.onSubmitBtnGenerar}>
                                <p>
                                    <label>Seleccionar Materia</label>
                                    <select className="custom-select" id="inputGroupSelect01">
                                        {this.renderSubjects()}
                                    </select>
                                </p>
                                <p>
                                    <input type="submit" className="btn btn-secondary btn-lg btn-block" value="Generar" />
                                </p>
                            </form>
                            
                            </div>
                            <div className="col-sm-6 text-left"> 
                            <h1>Welcome</h1>
                            
                            <div className="qrdiv">
                                <div className="qrcontent">
                                   <img className="qrcontent" src={this.state.qr}/>
                                </div>
                            </div>
                            <hr/>
                            <h3>Test</h3>
                            <p>Meow</p>
                            </div>
                            <div className="col-sm-3 sidenav">
                                <div classname="generaqr_pic">
                                    <img src={logo}/>
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