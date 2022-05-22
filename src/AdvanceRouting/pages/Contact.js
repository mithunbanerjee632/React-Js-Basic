import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Contact extends Component {
    constructor() {
        super();
        this.state={
            myName:"mithunbanerjee"
        }
    }

    render() {
        var para = "/portfolio/"+this.state.myName;
        return (
            <div>
                <h1>Contact Page</h1>
                <button><Link to={para}>Pass Myname</Link></button>
            </div>
        );
    }
}

export default Contact;