import React, {Component, createRef} from 'react';

class UserFrom extends Component {
    constructor() {
        super();
        this.userNameRef=createRef();
        this.state={}
    }

    handleClick=(event)=>{
        event.preventDefault();
        console.log(this.userNameRef.current);
        console.log(this.userNameRef.current.value);
        this.userNameRef.current.style.color="green";
    }
    render() {
        return (
            <form>
                <div className="form-field">
                    <label htmlFor="userName">Username: </label>
                    <input type="text" id="username" ref={this.userNameRef}/>
                </div>

                <div className="form-field">
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password"/>
                </div>

                <button onClick={this.handleClick}>Register</button>
            </form>
        );
    }
}

export default UserFrom;