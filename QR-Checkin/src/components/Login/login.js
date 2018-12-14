import React, {Component} from 'react';
// import {Link} from 'react-router-dom'
import '../Login/login.css';
import axios from 'axios';

class Login extends Component{
    constructor(props){
        super(props);
        this.state ={
            username:"",
            password:""
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
        axios.post('https://qr-checkin-api.herokuapp.com/login',
        {
            username: this.state.username,
            password: this.state.password
        })
        .then(function (response) {
            console.log(response);
            localStorage.setItem('userId', response.data._id)
            window.location.assign('/home')
          })
          .catch(function (error) {
            console.log(error);
          });
        

        // if(this.state.user === 'vicky'&& this.state.pass==='pass'){
        //     //user logs in
        //     this.props.history.push('/')
        // }else{
        //     alert('Datos incorrectos')ss
        // }


    }
    render(){
        return(
            <form className="login" onSubmit={this.onSubmitBtn}>
                <h1 className="login-title">Bienvenido!</h1>
                <input id="username" type="text" className="login-input" placeholder="User" autofocus onChange={this.onChangeInput} value={this.state.username}/>
                <input id="password" type="password" className="login-input" placeholder="Password" onChange={this.onChangeInput} value={this.state.password}/>
                
                <input type="submit" value="Ingresar" class="login-button"/>
                <p class="register"><a href="/users">Nuevo Usuario</a></p>
            </form>

        )
    }
}
export default Login;

