import logo from './logo.svg';
import './App.css';
import Hello from './mycomponents/Hello.js';
import Welcome from './mycomponents/Welcome.js';

function App() {
  return (
    <div className="App">
        <Hello age="27" name="Mithun Banerjee"></Hello>    
        

        <Welcome name="i am learning React"></Welcome>   
        <Welcome name="i am learning React"></Welcome> 
        <Welcome name="i am learning React"></Welcome>        
    </div>
  );
}

export default App;
