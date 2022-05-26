import React, {useContext} from 'react';
import {UserContext} from "./UserContext";

const Component4 = () => {
   const {user,text} = useContext(UserContext);
    return (
        <div>
            <h1>User Id:{user.id}</h1>
            <h1>Name : {user.name}</h1>
            <h1>{text}</h1>
        </div>
    );
};

export default Component4;