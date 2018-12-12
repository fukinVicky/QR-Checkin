import React, { Component} from 'react';
import {Link} from 'react-router-dom'


class A extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="list-group">
                    <a className="list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">{this.props.publicaciones}...</h5>
                            <small>3 days ago</small>
                        </div>
                        <Link to='/comentarios'><small>Comentarios</small></Link>
                    </a>    
                </div>
            </div>
        )
    }


}


export default A;