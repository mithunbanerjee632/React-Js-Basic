import logo from './logo.svg';
import './App.css';

import {BrowserRouter} from "react-router-dom";

import Myroute from "./AdvanceRouting/Myroute";
import Mynavigation from "./AdvanceRouting/Mynavigation";
import State from "./Hook/State";
import Registration from "./Form/Registration";
import Child from "./StateLifting/Child";
import Home from "./StateLifting/Home";
import Toggle from "./Toggle/Toggle";
function App() {
   const data = "i am from parent app"

     const handleChildData=(childData)=>{
       console.log(childData);
     }

    return (
      <div className="App">

       <Toggle/>




       </div>
  );
 
}

export default App;
