import React, {useEffect, useState} from 'react';

const UseEffect = () => {
    const [count,setCount]=useState(0);


    //every time call hobe
    useEffect(()=>{
        console.log("useEffect");
    })


/*
    //sudhu ekbar call hobe

    useEffect(()=>{
        console.log("useEffect");
    },[]);
    */


/*
    //first rendering er somoy call hobe and prottekbar bar count press korle useEffect call hobe

    useEffect(()=>{
        console.log("useEffect");
    },[count])

   /!* const handleClick = ()=>{
        setCount((count)=>count+1);
    }*!/

    */


    return (
        <div>
            {console.log("Rendering")}
            <h1>Count: {count}</h1>
            <button onClick={()=>{setCount((count)=>count+1)}}>+</button>
        </div>
    );
};

export default UseEffect;