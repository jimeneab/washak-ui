import React from 'react';
import './Button.css'

const Button = ( {children, width }) => {
    return <button className={`${width}`}>{children}</button>
}

export default Button