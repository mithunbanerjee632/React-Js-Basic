import React, {Component} from 'react';
import axios from "axios";

class CountryList extends Component {
     constructor() {
         super();
         this.state={
             myList:[]
         }
     }


    componentDidMount() {
        axios.get('https://restcountries.com/v3.1/all')
            .then(response=>{
               this.setState({myList: response.data});
            })
            .catch(error=>{
                console.log(error);
            })
    }

    render() {
         const myData = this.state.myList;

        const countryName= myData.map((mylist)=>{
             return <li>{mylist.name.common}</li>
         })
        return (
            <div>
                 <ul>{countryName}</ul>
            </div>
        );
    }
}

export default CountryList;
