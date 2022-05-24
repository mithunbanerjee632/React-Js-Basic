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
import Condition from "./ConditionalRendering/Condition";
import FAQS from "./FAQ/FAQS";
function App() {
   const data = "i am from parent app"

    return (
      <div className="App">

       <FAQS/>




       </div>
  );
 
}

export default App;
