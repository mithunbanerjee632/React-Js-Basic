import React,{Component, component} from 'react';
class Welcome extends Component{

   ClickFromClass(a){
    alert(a);
  }

  render(){
   
    return <div>
      <button onClick={this.ClickFromClass.bind(this,"Hello i am from parameter")}>Click From Class</button>
      <h1>{this.props.name}</h1>
    </div>
    
    
  }
}
export default Welcome;