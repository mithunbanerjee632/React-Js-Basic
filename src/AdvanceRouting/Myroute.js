import React, {Component} from 'react';
import {Route, Routes, Switch} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Notfound from "./pages/notfound";


class Myroute extends Component {
    render() {
        return (
            <div>
                <Switch>
                <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/about" element={<About/>}/>
                <Route exact path="/contact" element={<Contact/>}/>
                <Route exact path="/portfolio" element={<Portfolio/>}/>
                <Route   element={<Notfound/>}/>
                </Routes>
                </Switch>
            </div>
        );
    }
}

export default Myroute;