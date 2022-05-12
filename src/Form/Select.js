import React, { Component } from 'react';

class Select extends Component {

constructor(){
  super();
  this.state={
    city1:"Dhaka",
    city2:"Barishal",
    city3:"Sylhet",
    city4:"Rajshahi",
    city5:"Chittagong",
    city6:"Rangpur",
    city7:"Khulna",
    city8:"Mymensingh",
    show:" ",
    auto:"Barishal"

  }
}

onChangeHandler=(event)=>{
   var SelectedValue=event.target.value;
   this.setState({show:SelectedValue, auto:SelectedValue});
}




  render() {
    return (
      <div>
        <p>{this.state.show}</p>
        <select onChange={this.onChangeHandler} value={this.state.auto}>
          <option>{this.state.city1}</option>
          <option>{this.state.city2}</option>
          <option>{this.state.city3}</option>
          <option>{this.state.city4}</option>
          <option>{this.state.city5}</option>
          <option>{this.state.city6}</option>
          <option>{this.state.city7}</option>
          <option>{this.state.city8}</option>
        </select>
        
      </div>
    );
  }
}

export default Select;