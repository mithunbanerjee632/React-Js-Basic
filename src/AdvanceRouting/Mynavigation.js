import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";


class Mynavigation extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><NavLink  activestyle={{color:"green"}} to="/">Home</NavLink></li>
                    <li><NavLink  activestyle={{color:"green"}} to="/about">About</NavLink></li>
                    <li><NavLink  activestyle={{color:"green"}} to="contact/">Contact</NavLink></li>
                    <li><NavLink  activestyle={{color:"green"}} to="/portfolio">Portfolio</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default Mynavigation;