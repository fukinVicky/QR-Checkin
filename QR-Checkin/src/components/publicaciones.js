import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import A from './a';
import axios from 'axios';

class Publicaciones extends Component{
    constructor(props){
        super(props);
        this.state = {
          listPublicaciones:[]
    
        }
      }
    
      componentDidMount(){
        axios.get('https://devfcintarojacul.herokuapp.com/all/publicaciones')
        .then(publicaciones=>{
          this.setState({
            listPublicaciones:publicaciones.data
     
          })
    
          
        }).catch(err=> console.log(err))
      }
    
      renderPublicaciones = () => {
        if(this.state.listPublicaciones.length === 0){
          return<h1>Loading...</h1>
        } else{
          
          const listPosts = this.state.listPublicaciones.map(publicaciones=> {
            return <A publicaciones={publicaciones.tituloPublicacion} publicacion={publicaciones.texto} imagenPublicacion={publicaciones.imagen_url}/>
          });
          return listPosts;
      }
    }

    render(){
        return(
            <div>
                 {this.renderPublicaciones()};
            </div>            
        )
    }
}

export default Publicaciones;