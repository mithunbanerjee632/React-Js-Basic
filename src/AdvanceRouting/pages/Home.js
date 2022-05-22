import React, {Component} from 'react';
import {Navigate} from "react-router-dom";

class Home extends Component {


    render() {

        if(sessionStorage.getItem("username") == null){
            return <Navigate to="/login"/>
        }else{
            return (
                <div>
                    <h1>Home Page</h1>
                </div>
            );
        }

    }
}

export default Home;