import React, {useEffect, useState} from 'react';

const FetchData = () => {
    const [todos,setTodos]=useState(null);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response)=>{
                return response.json();
            })
            .then((data)=>{
                setTodos(data)
                console.log(todos);
            })

    },[])
    return (
        <div>
            <h1>Todos</h1>
            {todos &&
                todos.map((todo)=>{
               return <p key={todo.id}>{todo.title}</p>
            })}
        </div>
    );
};

export default FetchData;