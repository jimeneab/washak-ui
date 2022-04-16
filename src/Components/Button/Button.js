import React from 'react';
import './Button.css'

const Button = ( {children, width, color, onClick }) => {
    return <button className={`${width} ${color}`} onClick={onClick}>{children}</button>
}

export default Button