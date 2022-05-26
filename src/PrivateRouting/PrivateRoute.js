import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AddBlog from "./pages/AddBlog";
import About from "./pages/About";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Navbar from "./Navbar";
import ProtectedRoute from "./ProtectedRoute";

const PrivateRoute = () => {
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    return (
        <BrowserRouter>
            <Navbar/>
            {isLoggedIn ? <button onClick={()=>{setIsLoggedIn(!isLoggedIn);}}>Log Out</button> : <button onClick={()=>{setIsLoggedIn(!isLoggedIn);}}>Log In</button>}
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/add-blog" element={<ProtectedRoute isLoggedIn={isLoggedIn}><AddBlog/></ProtectedRoute>}/>
                <Route path="/*" element={<Error/>}/>

            </Routes>
        </BrowserRouter>
    );
};

export default PrivateRoute;