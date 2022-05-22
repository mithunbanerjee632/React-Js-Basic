import React, {useState} from 'react';

const State = () => {
    const[name,setName]=useState({
        country:"Bangladesh"
    })

    const Change=()=>{
        setName({
            country: "India"
        })
    }
    return (
        <div>
            <h1>{name.country}</h1>
            <button onClick={Change}>Change</button>
        </div>
    );
};

export default State;