import React, {useState} from 'react';
import style from './form.module.css';

const Registration = () => {

    const [name,setName] = useState(" ")
    const [email,setEmail] = useState(" ")
    const [password,setPassword] = useState(" ")

    const handleNameChange=(e)=>{
       setName(e.target.value)
    };
    const handleEmailChange=(e)=>{
        setEmail(e.target.value)
    };
    const handlePassChange=(e)=>{
        setPassword(e.target.value);
    };

    const handleSubmit=(e)=>{
        console.log("form is submitted");

        let userInfo = {
            name:name,
            email:email,
            password:password
        }
        console.log(userInfo);
        e.preventDefault();
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <h1>Registration Page</h1>

                <div className={style.formGroup}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" onChange={handleNameChange} value={name} required/>
                </div>

                <div className={style.formGroup}>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" onChange={handleEmailChange} value={email} required/>
                </div>

                <div className={style.formGroup}>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" onChange={handlePassChange} value={password} required/>
                </div>

                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Registration;