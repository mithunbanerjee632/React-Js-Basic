import React, {useEffect, useState} from 'react';


const url = "https://rest-api-without-db.herokuapp.com/users/";

const Getdata = () => {

    const [users,setUsers]=useState(null);
    const [isLoading,setIsLoading]=useState(true);
    const [error,setError]=useState(" ");

    const getAllUsers=()=>{
        fetch(url)
            .then((res)=>{
                if(!res.ok){
                    throw Error("Could Not Fetch!")
                }
                return res.json();
            })
            .then((data)=>{
                console.log(data.users);
                setUsers(data.users);
            })
            .catch((error)=>{
                setError(error.message)
            })
            .finally(()=>{
                setIsLoading(false);
            })
    }

    useEffect(()=>{
        getAllUsers();
    },[])



    return (
        <div>
            <h1>User App Management</h1>

            {isLoading && <h2>Loading ...</h2>}
            {error && <h2>{error}</h2>}
<section>
    {users && users.map((user)=>{
        const {id,username,email}=user

        return(
            <article key={id} className="card">

                <p>{username}</p>
                <p>{email}</p>
                <button className="btn">Edit</button>
                <button className="btn" onClick={()=>{handleDelete(id)}}>Delete</button>
            </article>
        );
    })}
</section>

        </div>
    );
};

export default Getdata;