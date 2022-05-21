import React, {Component} from 'react';
import {Route,Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";


class Myroute extends Component {
    render() {
        return (
            <div>
                <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route  path="/about" element={<About/>}/>
                <Route  path="/contact" element={<Contact/>}/>
                <Route  path="/portfolio" element={<Portfolio/>}/>
                </Routes>
            </div>
        );
    }
}

export default Myroute;