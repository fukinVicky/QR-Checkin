import React, {Component} from 'react';
import Navbar from '../Navbar';


// import '../Home/home.css';

class Home extends Component{
    constructor(props){
        super(props);

        }
    render(){
        return(
            <div className="Home">
                <Navbar/>
            </div>
        )
    }
}
export default Home;
