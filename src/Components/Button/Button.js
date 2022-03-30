import React from 'react';
import './Button.css'

const Button = ( {children, width, color }) => {
    return <button className={`${width} ${color}`}>{children}</button>
}

export default Button