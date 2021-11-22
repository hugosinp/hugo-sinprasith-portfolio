import React from 'react'

import '../static/scss/aTitle.scss'

const ATitle = ({ id, className, heading_tag, text }) => {

    const Heading = `${heading_tag}`

    return (
        <div>
            <Heading className={`${className} a-title`} id={id}>
                {text}
            </Heading>
        </div>
    )
}

export default ATitle
