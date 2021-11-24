import React from 'react'

import { Alert } from 'react-bootstrap'

const AMessage = ({ text, type }) => {
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

export default AMessage
