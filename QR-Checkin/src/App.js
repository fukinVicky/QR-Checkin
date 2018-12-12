import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import './components/Navbar';
import Login from './components/Login/login';
import Home from './components/Home/home';
import Materia from './components/Materia/materia';
import Scanner from './components/Scanner/Scanner';



class App extends Component {


  render() {
    return (
      <BrowserRouter>
      <main>
        <Route exact path="/" component={Login}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/materia" component={Materia}/>
        <Route exact path="/scan" component={Scanner}/>
      </main>
      </BrowserRouter>
    );
  }
}

export default App;
