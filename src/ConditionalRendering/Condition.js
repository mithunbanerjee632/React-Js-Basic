import React, {Component} from 'react';
import Homepage from "./Homepage";
import SignInPage from "./SignInPage";

class Condition extends Component {
    constructor() {
        super();
        this.state={
            isLoggedIn:true
        }
    }

    render() {


        const {isLoggedIn}=this.state //destructuring
        let element;

        //Short Circuit Conditional Rendering

       return(
        <div>
             {isLoggedIn && <Homepage/>}
        </div>
       );



/*

        //conditional rendering by Ternary Operator

        element=isLoggedIn ? <Homepage/> : <SignInPage/>

        return(
            <div>
                 {element}
               {/!* {isLoggedIn ? <Homepage/> : <SignInPage/>}*!/}
            </div>
        )
*/

       /* //conditional rendering by element variable

        if(isLoggedIn){
           element = <Homepage/>
        }else{
            element = <SignInPage/>
        }

        return(
            <div>{element}</div>
        )*/
/*

              //if else condition
               if(this.state.isLoggedIn){
                return <Homepage/>
            }else{
                return <SignInPage/>
            }
*/


    }
}

export default Condition;