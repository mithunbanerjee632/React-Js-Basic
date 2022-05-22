import React, {Component} from 'react';
import {Navigate} from "react-router-dom";

class About extends Component {
    render() {
        if(sessionStorage.getItem("username") == null){
            return <Navigate to="/login"/>
        }else{
            return (
                <div>
                    <h1>About Page</h1>
                </div>
            );
        }

    }
}

export default About;