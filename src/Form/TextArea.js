import React, { Component } from 'react';

class TextArea extends Component {
   constructor(){
     super();
     this.state={
      inputUser:" "
     }

   }

   onChangeHandler=(event)=>{
     var inputValue = event.target.value;
     this.setState({inputUser:inputValue});
   }


  render() {

    return (
      <div>
        <textarea onChange={this.onChangeHandler} placeholder="Your Message"/>
        <p>{this.state.inputUser}</p>
      </div>
    );
  }
}

export default TextArea;