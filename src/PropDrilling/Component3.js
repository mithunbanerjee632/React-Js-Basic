import React from 'react';
import Component4 from "./Component4";

const Component3 = (props) => {
    const {user}=props
    return (
        <div>
            <Component4 user={user}/>
        </div>
    );
};

export default Component3;