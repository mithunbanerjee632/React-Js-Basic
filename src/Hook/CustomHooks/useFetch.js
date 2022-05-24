import React from 'react';
import {useEffect, useState} from "react";

const UseFetch = (url) => {
    const [data,setData]=useState(null);
    const [isLoading,setIsLoading] = useState(true)
    const [error,setError]=useState(null)

    useEffect(()=>{
        fetch(url)
            .then((response)=>{
                if(!response.ok){
                    throw Error("Fetching is Not Successfull!");
                }else{
                    return response.json();
                }

            })
            .then((data)=>{
                setData(data)
                setIsLoading(false);
            })
            .catch((error)=>{
                setError(error.message);
                setIsLoading(false);
            })

    },[url])

    return {data,isLoading,error}
};

export default UseFetch;