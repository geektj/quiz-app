import React from 'react';

export const Button = () => {
    const {label, onClick} = props
    return(
        <button type='button' onClick={onClick}>
            {label}
        </button>
    )
}