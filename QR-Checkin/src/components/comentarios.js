import React, {Component} from 'react';
// import Publicaciones from './components/publicaciones';
// import './components/publicaciones';

class Comentarios extends Component{
    constructor(props){
        super(props);
        console.log('comentarios');
        
        console.log(this.props);
        
    }
    render(){
        return(
            <div>
                

                <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{this.props.publicaciones}</h5>
                </div>
                <h3>Comments:</h3><br></br>
                <div class="row"><br/>
                    <div class="row">
                        <div class="col-sm-2 text-center">
                            <img src="bird.jpg" class="img-circle" height="65" width="65" alt="Avatar"/>
                        </div>
                        <div class="col-xs-10">
                            <h4>Nested Bro <small>Sep 25, 2015, 8:28 PM</small></h4>
                            <p>{this.props.publicacion}</p>
                            <br/>
                        </div>
                    </div>
                 </div>
            </div>   
        
        
        )
    }
}

export default Comentarios;