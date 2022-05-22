import React, {useState} from 'react';
import style from './form.module.css';

const Registration = () => {



    const [user,setUser]=useState({
        name:' ',
        email:' ',
        password:' '
    });

    const {name,email,password} = user  //user theke name,email and password ber kore nici

    const handleChange=(event)=>{

        setUser({...user,[event.target.name]:event.target.value})

       /* const fieldName = event.target.name;

        if(fieldName === 'name'){
            setUser({name: event.target.value,email,password})
        }else if(fieldName==='email'){
            setUser({name,email: event.target.value,password})
        }else if(fieldName==='password'){
            setUser({name,email,password: event.target.value})
        }*/
    }

    const handleSubmit=(e)=>{
        console.log("form is submitted");

        console.log(user);
        e.preventDefault();
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <h1>Registration Page</h1>

                <div className={style.formGroup}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" onChange={handleChange} value={name} required/>
                </div>

                <div className={style.formGroup}>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" onChange={handleChange} value={email} required/>
                </div>

                <div className={style.formGroup}>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" onChange={handleChange} value={password} required/>
                </div>

                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Registration;