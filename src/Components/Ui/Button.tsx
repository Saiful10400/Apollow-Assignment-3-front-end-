import React from 'react';

const Button = ({text,onClick,disable}) => {
    return (
        <button disabled={disable?true:false} onClick={onClick} className='font-bold bg-black text-white p-2 rounded-xl'>{text}</button>
    );
};

export default Button; 