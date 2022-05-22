import React, {Component} from 'react';
import {Route, Routes, Switch} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Notfound from "./pages/Notfound";
import Login from "./pages/Login";


class Myroute extends Component {
    render() {
        return (
            <div>

                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/login" element={<Login/>}/>
                    <Route  exact path="/about" element={<About/>}/>
                    <Route  exact path="/contact" element={<Contact/>}/>
                    <Route exact  path="/portfolio" element={<Portfolio/>}/>
                    <Route  path="*" element={<Notfound/>}/>
                </Routes>

            </div>
        );
    }
}

export default Myroute;