import React,{Component, component} from 'react';
class Welcome extends Component{

   ClickFromClass(){
    alert('Button Is Clicked From Class!');
  }
  
  render(){
   
    return <div>
      <button onClick={this.ClickFromClass}>Click From Class</button>
      <h1>{this.props.name}</h1>
    </div>
    
    
  }
}
export default Welcome;