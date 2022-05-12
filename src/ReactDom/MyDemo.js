import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MyDemo extends Component {

myFun(){
  var container = document.getElementById("myId");
  var element = <h1>I am Mithun Banerjee From React Dom</h1>
  var callback = function(){
    alert('I am Callback!');
  }

  ReactDOM.render(element,container,callback);
  //ReactDOM.hydrate(element,container,callback);
}

  render() {
    return (
      <div>
        <button onClick={this.myFun}>Change</button>
        <h1 id="myId">I am Mithun Banerjee</h1>
      </div>
    );
  }
}

export default MyDemo;