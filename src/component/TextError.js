import React from 'react'
import "./style.css"


function TextError(props) {
    console.log("Error Props",props.children)
    return (
        <div className="error_text">
            {props.children}
        </div>
    )
}

export default TextError
