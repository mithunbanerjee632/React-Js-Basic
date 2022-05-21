import React, {Component} from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import axios from 'axios';


class Table extends Component {

    constructor() {
        super();
        this.state={
            tableInformation:[]
        }
    }

    componentDidMount() {
        axios.get('https://restcountries.com/v3.1/all')
            .then(response=>{
                this.setState({tableInformation:response.data})
            })
            .catch(error=>{
               alert("something Went Wrong!");
            });
    }


    render() {
        const tableData = this.state.tableInformation;

        const col=[{"Header":"country",accessor:"name"},{"Header":"Capital",accessor:"capital"}]

        // const tableData=[{"name":"Mithun","age":"25"},{"name":"Mithun","age":"25"},{"name":"Mithun","age":"25"},{"name":"Mithun","age":"25"},]
        // const col=[{"Header":"Name",accessor:"name"},{"Header":"Age",accessor:"age"}]

        return (
            <div>
                <ReactTable

                    data={tableData}
                    columns={col}
                    defaultPageSize={2}
                    pageSizeOptions={[2,4,6,8,10]}

                />

            </div>
        );
    }
}

export default Table;