import React, { Component } from 'react';

class Signup extends Component {
     constructor(){
       super();
       this.state={
         fname:" ",
         lname:" ",
         email:" ",
         mobile:" "
       }
     }

     onChangeHandler=(event)=>{
       var inputName = event.target.name;
       var inputValue = event.target.value;

       this.setState({[inputName]:inputValue});
     }


  render() {
    return (
      <div>
        <p>First Name: {this.state.fname}</p>
        <p>Last Name: {this.state.lname}</p>
        <p>Email: {this.state.email}</p>
        <p>Mobile Number: {this.state.mobile}</p>

        <form>
          <input  type="text" onChange={this.onChangeHandler} name="fname" placeholder="First Name"></input><br></br>

          <input type="text" onChange={this.onChangeHandler} name="lname" placeholder="Last Name"></input><br></br>

          <input type="text" onChange={this.onChangeHandler} name="email" placeholder="Email"></input><br></br>

          <input type="text" onChange={this.onChangeHandler} name="mobile" placeholder="Mobile Number"></input><br></br>

          <input name="submit" type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default Signup;