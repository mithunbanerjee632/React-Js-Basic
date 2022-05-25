import React, {useRef} from 'react';

const UserForm = () => {
    const userNameRef = useRef();
    const passwordRef = useRef();
    const handelSubmit=(event)=>{
        event.preventDefault();
        const userName = userNameRef.current.value;
        const password = passwordRef.current.value;
        userNameRef.current.style.color="red";
        console.log({userName,password});
    }
    return (
        <form onSubmit={handelSubmit}>
            <div className="form-field">
                <label htmlFor="userName">Username: </label>
                <input type="text" id="username" ref={userNameRef}/>
            </div>

            <div className="form-field">
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" ref={passwordRef}/>
            </div>

            <button>Register</button>
        </form>
    );
};

export default UserForm;