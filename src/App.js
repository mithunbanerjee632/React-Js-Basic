import logo from './logo.svg';
import './App.css';
import Hello from './mycomponents/Hello.js';
import Welcome from './mycomponents/Welcome.js';
import Myfun from './mycomponents/Myfun';
import Arrow from './mycomponents/Arrow';
import SetState from './mycomponents/SetState';
import Condition1 from './mycomponents/Condition1.js';
import Condition2 from './mycomponents/Condition2.js';
import Refresh from './mycomponents/Refresh.js';


import States from './mycomponents/States';
import MyDemo from './ReactDom/MyDemo.js';
import MyDemo1 from './ReactDom/MyDemo1.js';
import Form1 from './Form/Form1.js'
import Signup from './Form/Signup';
import TextArea from './Form/TextArea';
import Select from './Form/Select';
import List from './Form/List';
import JsonList from './Form/JsonList';
import About from './pages/About';
import Contact from './pages/Contact';
import { Routes, Route, Link } from "react-router-dom";
import Portfolio from './pages/Portfolio';
import CountryList from "./CountryList";
import Post from "./Post";

import Navigation from "./Component/Navigation";
function App() {
 
    return (
      <div className="App">
  
              <Navigation/>
       </div>
  );
 
}

export default App;
