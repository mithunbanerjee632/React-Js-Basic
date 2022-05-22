import React, {Component} from 'react';
import {Link, Navigate} from "react-router-dom";

class Contact extends Component {


    render() {
        if(sessionStorage.getItem("username") == null){
            return <Navigate to="/login"/>
        }else{
            return (
                <div>
                    <h1>Contact Page</h1>

                </div>
            );
        }


    }
}

export default Contact;