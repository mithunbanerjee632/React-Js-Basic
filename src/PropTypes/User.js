import React from 'react';

import PropTypes from "prop-types";

const User = (props) => {
    return (
        <div>
            <h1>{props.userName}</h1>
            <h1>{props.userId}</h1>
        </div>
    );
};

//PropTypes
User.propTypes={
    userName:PropTypes.string,
    userId:PropTypes.number
}


//Username and userId kono karone na pele default value set kora jabe
User.defaultProps={
    userName:"default name",
    userId:0
}

export default User;