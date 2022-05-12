import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MyDemo1 extends Component {

  myFun(){
    var container = document.getElementById("myName");
    ReactDOM.findDOMNode(container).innerHTML="I am mithun Banerjee from reactdom";
  }


  render() {
    return (
      <div>
        <button onClick={this.myFun}>Change</button><br></br>
        <h1 id="myName">I am Mithun Banerjee</h1>
        
      </div>
    );
  }
}

export default MyDemo1;