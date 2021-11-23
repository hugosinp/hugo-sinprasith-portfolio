import React from 'react'

import '../../static/scss/atomes/aLink.scss'

const ALink = ({ id, className, background, href, text}) => {
    return (
        <div>
            <a className={`a-link ${className} ${background}`} href={href} id={id}>
                {text}
            </a>
        </div>
    )
}

export default ALink
