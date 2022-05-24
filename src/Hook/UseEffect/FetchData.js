import React, {useEffect, useState} from 'react';

const loadMessage = <p>Data is Loading</p>
const errMessage = <p>Error</p>

const FetchData = () => {
    const [todos,setTodos]=useState(null);
    const [isLoading,setIsLoading] = useState(true)
    const [error,setError]=useState(null)

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response)=>{
                if(!response.ok){
                    throw Error("Fetching is Not Successfull!");
                }else{
                    return response.json();
                }

            })
            .then((data)=>{
                setTodos(data)
                setIsLoading(false);
            })
            .catch((error)=>{
                setError(error.message);
                setIsLoading(false);
            })

    },[])

    const todoElement =  todos &&
        todos.map((todo)=>{
            return <p key={todo.id}>{todo.title}</p>
        })




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