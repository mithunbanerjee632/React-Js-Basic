import React, { Component } from 'react';

class List extends Component {


  render() {
    const country = ['Bangladesh','India','Nepal','Srilanka'];
  
    const dataItems = country.map(this.myDataChild=(data)=>{
         return <option>{data}</option>
    });
    return (
      <div>
        <select>{dataItems}</select>
        
      </div>
    );
  }
}

export default List;