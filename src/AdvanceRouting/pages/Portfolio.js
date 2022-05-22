import React, {Component} from 'react';

class Portfolio extends Component {
     constructor({id = window.location.href.split('/username')}) {
         super();
         this.state={
             myName:id
         }
     }

    render() {
        return (
            <div>

                <h1>{this.state.myName}</h1>
            </div>
        );
    }
}

export default Portfolio;