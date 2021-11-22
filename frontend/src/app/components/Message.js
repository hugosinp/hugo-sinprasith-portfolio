import React from 'react'

import { Alert } from 'react-bootstrap'

const Message = ({ text, type }) => {
    return (
        <div>
            <Alert variant={type}>
                <p>
                    {text}
                </p>
            </Alert>
        </div>
    )
}

export default Message
