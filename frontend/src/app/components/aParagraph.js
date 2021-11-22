import React from 'react'

import '../static/scss/aParagraph.scss'

const AParagraph = ({ id, className, text }) => {
    return (
        <div>
            <p id={id} className={`a-paragraph ${className}`}>
                {text}
            </p>
        </div>
    )
}

export default AParagraph
