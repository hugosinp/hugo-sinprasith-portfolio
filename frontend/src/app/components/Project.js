import React from 'react'

import { Card } from 'react-bootstrap'

const Project = ({ title, head, tech, link, image }) => {

    return (
        <div>
            <Card className="bg-dark-blue p-2 zoom shadow" style={{ borderRadius:"17px" }}>
                <lottie-player src={image}  background="transparent"  speed="1"  style={{ margin:"auto", width: "200px", height: "200px" }}  loop  autoplay></lottie-player>
                <Card.Body>
                    <Card.Title>
                        {title} <a href={link} target="_blank"><i class="far fa-file-code"></i></a>
                    </Card.Title>
                    <Card.Text>
                        {head}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{tech}</small>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default Project
