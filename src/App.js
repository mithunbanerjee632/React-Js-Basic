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
import UseEffect from "./Hook/UseEffect/UseEffect";
import FetchData from "./Hook/UseEffect/FetchData"
import Son from "./Context/Son";
import {DadaProvider} from "./Context/Mycontext";
import Table from "./Fragment/Table";
import LifeCycle from "./LifeCycle/LifeCycle";
import UserFrom from "./RefExample/UserFrom";

function App() {

   const data = "i am from parent app"

    return (
      <div className="App">
           <UserFrom/>



       </div>
  );
 
}

export default App;
