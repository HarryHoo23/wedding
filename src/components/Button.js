import React from 'react'
import '../sass/button.scss'

const Button = (props) => {

    return (
        <button className={`btn-custom ${props.className}`} onClick={props.action}>
            {props.children}
        </button>
    )
}

export default Button