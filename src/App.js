import logo from './logo.svg';
import './App.css';
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";


import Error from "./Routes/pages/Error";
import Blogs from "./Routes/pages/Blogs";
import Contact from "./Routes/pages/Contact";
import Home from "./Routes/pages/Home";
import Navbar from "./Routes/Navbar";
import Blog from "./Routes/pages/Blog";
import User from "./Routes/pages/User";
import GETDATA from "./HttpRequest/GETDATA";

import UserForm from "./HttpRequest/EditAndUpdate/UserForm";

function App() {




    return (
      <div className="App">

          <h1>User App Management</h1>


          <GETDATA/>










          {/*<BrowserRouter>*/}
          {/*    <Navbar/>*/}
          {/*    <Routes>*/}
          {/*        <Route path="/" element={<Home />}/>*/}
          {/*        <Route path="/contact" element={<Contact />}/>*/}
          {/*        <Route path="/blogs" element={<Blogs />}/>*/}
          {/*        <Route path="/blogs/:title" element={<Blog />}/>*/}
          {/*        <Route path="*" element={<Error/>}/>*/}
          {/*        <Route path="/user" element={<User/>}/>*/}
          {/*        <Route path="/user/:userid" element={<User/>}/>*/}
          {/*    </Routes>*/}
          {/*</BrowserRouter>*/}



       </div>
  );
 
}

export default App;
