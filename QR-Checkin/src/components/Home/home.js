import React, {Component} from 'react';
import Navbar from '../Navbar';
import logo from './image/home_image.png';
import '../Home/home.css';
// import $ from 'jquery';
// import Popper from 'popper.js';

import Tilt from 'react-tilt'

// import '../Home/home.css';

class Home extends Component{
    constructor(props){
        super(props);
        // const tilt = $('.js-tilt').tilt();

        }
    render(){
        return(
            
            <body>
                
                <div className="Home">
                    <Navbar/>
                    <Tilt className="Tilt" options={{ max : 25}} >
                        {/* <div className="Tilt-inner"> 👽 </div> */}
                    <div className="container-fluid text-center"> 
                        <div classname="home-pic js-tilt" data-tilt>
                        <img src={logo}/>
                        </div>
                    </div>
                 </Tilt>
                </div>
                {/* <script src="vendor/jquery/jquery-3.2.1.min.js"></script>
                <script src="vendor/bootstrap/js/popper.js"></script>
	            <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
                <script src="jquery.js" ></script>
                <script src="vendor/tilt/tilt.jquery.min.js"></script>
                <script >
                    $('.js-tilt').tilt({
                        scale: 1.1
                    })
                </script> */}
            </body>
            
            
        )
    }
}
export default Home;
