import React, {Component} from 'react';
import {PutiConsumer} from "./Mycontext";

class Puti extends Component {
    render() {
        return (
            <div>
                <PutiConsumer>
                    {
                        msg=>{
                            return msg;
                        }
                    }
                </PutiConsumer>
            </div>
        );
    }
}

export default Puti;