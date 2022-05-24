import React, {useEffect, useState} from 'react';
import useFetch from "./useFetch";



const FetchData = () => {

    const{data,isLoading,error}=useFetch("https://jsonplaceholder.typicode.com/todos");

    const todoElement =  data &&
        data.map((todo)=>{
            return <p key={todo.id}>{todo.title}</p>
        })


    const loadMessage = <p>Data is Loading</p>
    const errMessage = <p>{Error}</p>

    return (
        <div>
            <h1>Todos</h1>
            {isLoading && loadMessage}
            {error && errMessage}
            {todoElement}
        </div>
    );
};

export default FetchData;