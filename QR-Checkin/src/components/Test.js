import React, {Component} from 'react';

class Test extends Component{
    render(){
        return(
            <html lang="en">
                <head>
                    <title>Bootstrap Example</title>
                    <meta charset="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
                </head>

            <body>
                <div className="container-fluid">
                    <div className="row content">
                        {/* <div className="col-sm-3 sidenav">
                            <h4>Vicky's Blog</h4>
                            <ul className="nav nav-pills nav-stacked">
                                <li className="active"><a href="#section1">Home</a></li>
                                <li><a href="#section2">Posts</a></li>
                                <li><a href="#section3">Family</a></li>
                                <li><a href="#section3">Photos</a></li>
                            </ul><br/>

                            <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search Blog.."/>
                            <span className="input-group-btn">
                            <button className="btn btn-default" type="button">
                                <span className="glyphicon glyphicon-search"></span>
                            </button>
                            </span>
                            </div>
                        </div> */}

                        {<div className="col-sm-9">
                            <h4><small>RECENT POSTS</small></h4>
                            <hr/>
                            <h2>{this.props.publicaciones}</h2>
                            <h5><span className="glyphicon glyphicon-time"></span> Post by Jane Dane, Sep 27, 2015.</h5>
                            <h5><span className="label label-danger">Shenanigans</span> <span className="label label-primary">Ipsum</span></h5><br/>
                            <p>{this.props.publicacion}</p>
                            <br/><br/>
                        </div>}
                    </div>
                </div>
            {/* </div>
            </div> */}

                {/* <footer className="container-fluid">
                <p>Eat shit and die.. also, world peace ♫</p>
                </footer> */}

            </body>
        </html>

        )}
        
} 
export default Test;