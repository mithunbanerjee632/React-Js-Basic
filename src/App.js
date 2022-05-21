import logo from './logo.svg';
import './App.css';

import {BrowserRouter} from "react-router-dom";

import Myroute from "./AdvanceRouting/Myroute";
import Mynavigation from "./AdvanceRouting/Mynavigation";
function App() {
 
    return (
      <div className="App">

          <BrowserRouter>
              <Mynavigation/>
              <Myroute/>
          </BrowserRouter>


       </div>
  );
 
}

export default App;
