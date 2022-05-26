import React, {useState} from 'react';
import {useParams, useSearchParams} from "react-router-dom";

const User = () => {
    const [searchParams,setSearchParams]=useSearchParams();
    const [name,setName]=useState();
    //const {userid}=useParams();
    const handleSubmit=(e)=>{
        e.preventDefault();
        setSearchParams({name:name})
    }
    return (
        <div>
            <h1>User</h1>
          <form onSubmit={handleSubmit}>
              <input type="text" onChange={(e) => {
                  setName(e.target.value)
              }} value={name}/>
              <button type="submit">Submit</button>
          </form>


            <h1>{searchParams.get("id")}</h1>
            <h1>{searchParams.get("age")}</h1>
            <h1>{searchParams.get("name")}</h1>

            {/*<h1>User: {userid}</h1>*/}
        </div>
    );
};

export default User;