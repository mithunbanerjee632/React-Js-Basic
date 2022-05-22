import logo from './logo.svg';
import './App.css';

import {BrowserRouter} from "react-router-dom";

import Myroute from "./AdvanceRouting/Myroute";
import Mynavigation from "./AdvanceRouting/Mynavigation";
import State from "./Hook/State";
import Registration from "./Form/Registration";
function App() {
 
    return (
      <div className="App">

          <Registration></Registration>

          {/*<BrowserRouter>
              <Mynavigation/>
              <Myroute/>
          </BrowserRouter>*/}


       </div>
  );
 
}

export default App;
