import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";


import Error from "./Routes/pages/Error";
import Blogs from "./Routes/pages/Blogs";
import Contact from "./Routes/pages/Contact";
import Home from "./Routes/pages/Home";
import Navbar from "./Routes/Navbar";
import Blog from "./Routes/pages/Blog";
import PrivateRoute from "./PrivateRouting/PrivateRoute";

function App() {

   const data = "i am from parent app"

    return (
      <div className="App">
        <PrivateRoute/>



       </div>
  );
 
}

export default App;
