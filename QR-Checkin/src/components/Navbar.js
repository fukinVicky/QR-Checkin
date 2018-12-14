import React,{Component} from 'react';
// import {Link} from 'react-router-dom'
class Navbar extends Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <a className="navbar-brand" href="/">QR CheckIn 👽 </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/config">Configuar <span class="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/scan">Scanner</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/generarqr">Generar QR</a>
                        </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;