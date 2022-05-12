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

       if(inputName === 'fname'){
        var namePattern = /^[a-zA-Z ]{2,30}$/;

        if(!namePattern.test(inputValue)){
          this.setState({fname:"First Name is not valid!"});
        } 
       }

       if(inputName == 'lname'){
        var namePattern = /^[a-zA-Z ]{2,30}$/;

        if(!namePattern.test(inputValue)){
          this.setState({lname:"Last Name is not valid!"});
        }
       }

       if(inputName == 'email'){
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailPattern.test(inputValue)){
          this.setState({email:"Email Address is not valid!"});
        }
       }

       if(inputName==='mobile'){
           if(!Number(inputValue)){
             this.setState({mobile:"Mobile Number is not Valid!"});
           }
       }
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