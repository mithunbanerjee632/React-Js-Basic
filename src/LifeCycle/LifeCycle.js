import React, {Component} from 'react';

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        console.log("constructor");

        this.state={
           count:0
        }
    }

     handleCount=()=>{
        this.setState({
            count:this.state.count +1
        });
    }


   //component did mount

    componentDidMount() {
        console.log("component did mount")
    }

    //component did update

    componentDidUpdate() {
        console.log("component did update");
    }

    //component should update

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
        return true;
    }


    render() {
        {
            console.log("render");
        }
        return (
            <div>
               <h1>Count:{this.state.count}</h1>
                <button onClick={this.handleCount}>Increment+</button>
            </div>
        );
    }
}

export default LifeCycle;