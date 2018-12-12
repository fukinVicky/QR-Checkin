import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import './components/Navbar';
import Login from './components/Login/login';
import Home from './components/Home/home';
import Config from './components/Config/config';
import Alumnos from './components/Alumnos/alumnos';




class App extends Component {


  render() {
    return (
      <BrowserRouter>
      <main>
        <Route exact path="/" component={Login}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/config" component={Config}/>
        <Route exact path="/alumnos" component={Alumnos}/>
      </main>
      </BrowserRouter>
    );
  }
}

export default App;
