import React, {Component} from 'react';
// import {Link} from 'react-router-dom'
import './newuser.css';
import axios from 'axios';

class Newuser extends Component{
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
        
        axios.post('https://qr-checkin-api.herokuapp.com/users',{
            username: this.state.username,
            password: this.state.password
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
          this.props.history.push('/')
    }  
    
    render(){
        return(
            <div className="Newuser">
                <form className="login" onSubmit={this.onSubmitBtn}>
                    <h1 className="login-title">Nuevo Usuario</h1>
                    <input id="username" type="text" className="login-input" placeholder="User" autofocus onChange={this.onChangeInput} value={this.state.username}/>
                    <input id="password" type="password" className="login-input" placeholder="Password" onChange={this.onChangeInput} value={this.state.password}/>
                    
                    <input type="submit" value="Registrar" class="login-button"/>
                    
                    {/* <p class="register"><a href="/newuser">Nuevo Usuario</a></p> */}
                </form>    
            </div>
        )
    }
}
export default Newuser;