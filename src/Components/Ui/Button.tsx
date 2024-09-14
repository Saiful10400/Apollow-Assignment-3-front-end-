import React from 'react';

const Button = ({text,onClick}) => {
    return (
        <button onClick={onClick} className='font-bold bg-black text-white p-2 rounded-xl'>{text}</button>
    );
};

export default Button; 