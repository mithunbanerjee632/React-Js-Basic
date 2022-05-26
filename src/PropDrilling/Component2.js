import React from 'react';
import Component3 from "./Component3";

const Component2 = (props) => {
    const {user}=props
    return (
        <div>
        <Component3 user={user}/>
        </div>
    );
};

export default Component2;