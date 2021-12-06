import React from 'react'

import { Card } from 'react-bootstrap'

import '../../static/scss/organisms/oSkill.scss'

const OSkill = ({ title, head, subHead, image, width, height }) => {
    return (
        <div>
            <Card className="bg-dark-blue o-skill mb-5">
                <lottie-player src={image} class="zoom" background="transparent" speed="1" style={{ margin:"auto", width: width, height: height }} loop autoplay></lottie-player>
                <Card.Body>
                    <Card.Title className="underline">
                        {title}
                    </Card.Title>
                    <Card.Text>
                        {head}
                    </Card.Text>
                    <Card.Text>
                        {subHead}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default OSkill
