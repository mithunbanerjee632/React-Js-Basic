import React,{Component} from 'react'

class Condition2 extends Component{

constructor(){
  super();
  this.state={
    login:false
  }
}

render(){
    return(
      // this.state.login? <h1>First Section</h1> :<h1>Second Section</h1>

      this.state.login?(
        <h1>First Section</h1>
      ):
      (
        <h1>Second Section</h1>
      )
    );
}

}

export default Condition2;