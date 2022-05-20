import React, {Component} from 'react';
import axios from "axios";

class Post extends Component {

  constructor() {
      super();
     this.state={
         postData:"",
         postResult:" "
     }
  }

    onChangeHandler=(event)=>{
      var myData = event.target.value;
      this.setState({postData:myData})

  }

    onClickHandler=()=>{
        axios.post('http://ss.rabbil.com/test.php',this.state.postData)
            .then(response=>{
                this.setState({postResult:response.data})

            })
            .catch(error=>{
                alert("Something Went Wrong");
            });
  }


    render() {
        return (
            <div>
                <p>{this.state.postResult}</p>
                <input type="text" onChange={this.onChangeHandler}/>
                <button onClick={this.onClickHandler}>Send</button>

            </div>
        );
    }
}

export default Post;