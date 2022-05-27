import React, {useEffect, useState} from 'react';
import UserForm from "./EditAndUpdate/UserForm";


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

    //Delete

    const handleDelete=(id)=>{
        fetch(url + `/${id}`,{
            method:'DELETE'
        })
        .then((res)=>{
            if(!res.ok){
                throw Error("Could Not Delete!")
            }
            getAllUsers()
        })

            .catch((error)=>{
                setError(error.message)
            })

    }

    const addUser=(user)=>{
        fetch(url,{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        })
            .then((res)=>{
                if(res.status == 201){
                   getAllUsers()
                }else{
                    throw Error("Could Not Created New User!")
                }

            })

            .catch((error)=>{
                setError(error.message)
            })
    }

    return (
        <div>

            <UserForm btnText="Add User" handleSubmitData={addUser}/>


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