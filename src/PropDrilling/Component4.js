import React from 'react';

const Component4 = (props) => {
    const {user}=props
    return (
        <div>
            <h1>User Id:{user.id}</h1>
            <h1>Name : {user.name}</h1>
        </div>
    );
};

export default Component4;