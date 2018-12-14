import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import '../Login/login.css';

class Login extends Component{
    constructor(props){
        super(props);
        this.state ={
            user:"",
            pass:""
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
        if(this.state.user === 'vicky'&& this.state.pass==='pass'){
            //user logs in
            this.props.history.push('/')
        }else{
            alert('Datos incorrectos')
        }
    }
    render(){
        return(
            <form className="login" onSubmit={this.onSubmitBtn}>
            <h1 className="login-title">Bienvenido!</h1>
            <input id="user" type="text" className="login-input" placeholder="User" autofocus onChange={this.onChangeInput} value={this.state.user}/>
            <input id="pass" type="password" className="login-input" placeholder="Password" onChange={this.onChangeInput} value={this.state.pass}/>
            <Link to='/home'>
            <input type="submit" value="Ingresar" class="login-button"/>
            </Link>
            <p class="register"><a href="/newuser">Nuevo Usuario</a></p>
            </form>

        )
    }
}
export default Login;

