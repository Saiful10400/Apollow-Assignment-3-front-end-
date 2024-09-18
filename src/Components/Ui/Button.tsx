import React from 'react';

const Button = ({text,onClick,disable,className}) => {
    return (
        <button disabled={disable?true:false} onClick={onClick} className={`font-bold btn hover:bg-black bg-black text-white p-2 rounded-xl ${className}`}>{text}</button>
    );
};

export default Button; 