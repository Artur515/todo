import React from 'react';


const Button = ({handleClick, show}) => {
    return (
        <button onClick={handleClick}
                className='btn btn-outline-primary'>{show ? 'Close' : 'Add Task'}</button>
    );
};

export default Button;