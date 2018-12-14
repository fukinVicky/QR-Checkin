import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import axios from 'axios';
import './components/Navbar';
import Login from './components/Login/login';
import Home from './components/Home/home';
import Scanner from './components/Scanner/Scanner';
import Config from './components/Config/config';
import Generarqr from './components/Generarqr/generarqr';
import Newuser from './components/Newuser/newuser';

class App extends Component {


  render() {
    return (
      <BrowserRouter>
      <main>
        <Route exact path="/" component={Login}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/scan" component={Scanner}/>
        <Route exact path="/config" component={Config}/>
        <Route exact path="/users" component={Newuser}/>
        <Route exact path="/generarqr" component={Generarqr}/>
      </main>
      </BrowserRouter>
    );
  }
}

export default App;
