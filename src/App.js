import logo from './logo.svg';
import './App.css';
import Hello from './mycomponents/Hello.js';
import Welcome from './mycomponents/Welcome.js';

function App() {
  return (
    <div className="App">
        <Hello age="27" name="Mithun"></Hello>    
        <Hello age="27" name="kumar"></Hello>  
        <Hello age="27" name="Banerjee"></Hello>  

        <Welcome name="i am learning React"></Welcome>   
        <Welcome name="i am learning React"></Welcome> 
        <Welcome name="i am learning React"></Welcome>        
    </div>
  );
}

export default App;
