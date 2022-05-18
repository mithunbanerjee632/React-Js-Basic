import React, { Component } from 'react';

class JsonList extends Component {
  render() {

    const myList = [
      {
        "city":"Dhaka",
        "zip":"1204"
      },
      
      {
        "city":"Barishal",
        "zip":"8240"
      },
      {
        "city":"Sylhet",
        "zip":"5000"
      }

    ];

    var dataCityItems = myList.map((dataCity)=>{
            return <option>{dataCity.city}</option>
    });

    var dataZipItems = myList.map((dataZip)=>{
      return <option>{dataZip.zip}</option>
});


    return (
      
      <div>
        <select>{dataCityItems}</select>
        <select>{dataZipItems}</select>
        
      </div>
    );
  }
}

export default JsonList;