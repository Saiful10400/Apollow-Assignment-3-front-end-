import React from 'react';

const Button = ({text}) => {
    return (
        <button className='font-bold bg-black text-white p-2 rounded-xl'>{text}</button>
    );
};

export default Button; 