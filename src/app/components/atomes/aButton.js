import React from 'react'

import '../../static/scss/atomes/aButton.scss'

const AButton = ({ id, className, text, onClick}) => {
    return (
        <div className={"a-button "+ className}>
            <button onClick={onClick} id={id}>
                {text}
            </button>
        </div>
    )
}

export default AButton
