import React, { Component } from 'react';

class Form1 extends Component {
   

  constructor(){
    super();
    this.state={
      username:" "
    }
  }

  onChangeForm=(event)=>{
    var myName = event.target.name;
    var myNameVal = event.target.value;
    this.setState({[myName]:myNameVal});
  }

  onSubmithandler=()=>{
    alert(this.state.username);
  }

  render() {
    return (
      <div className="container">
      <form onSubmit={this.onSubmithandler}>
        <p>My Form</p>
        <p>{this.state.username}</p>
        <input name="username" onChange={this.onChangeForm} type="text"  placeholder="Your First Name"></input><br></br>
        <input type="submit" value="Submit Now"></input>
      </form>
        
      </div>
    );
  }
}

export default Form1;