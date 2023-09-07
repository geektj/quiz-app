import React from 'react';
import "./button.scss";

export const Button = (props) => {
    const {label, onClick, disabled} = props
    return(
        <button type='button' onClick={onClick} disabled={disabled}>
            {label}
        </button>
    )
}