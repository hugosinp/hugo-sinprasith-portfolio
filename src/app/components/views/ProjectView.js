import React from 'react'

import { Row, Col, Container, } from 'react-bootstrap'

import ATitle from '../atomes/aTitle'
import OProject from '../organisms/oProject'

import { projectDico } from '../../static/dico'
import '../../static/scss/views/projectView.scss'

import { projects } from '../../static/data'

const ProjectView = ({ id }) => {

    const {
        PROJECT_HEAD,
        PROJECT_SUBHEAD
    } = projectDico

    return (
        <div id={id}>
            <Row className="text-light bg-soft-blue projectView">
                <Container className="text-center">
                    <ATitle
                        className="bold"
                        heading_tag="h1" 
                        text={PROJECT_HEAD}
                    />
                    <ATitle
                        className=""
                        heading_tag="h3" 
                        text={PROJECT_SUBHEAD}
                    />
                    <a href="https://github.com/hugosinp" target="_blank" className="text-light">
                        <i class="fab fa-github fa-3x"></i>
                    </a>
                </Container>

                <Row id="projectRow" className="m-auto">
                    {
                        projects.map(project => (
                            <Col key={project.id}>
                                <OProject 
                                    title={project.title}
                                    head={project.head}
                                    tech={project.tech}
                                    link={project.link}
                                    image={project.image}
                                />
                            </Col>
                        ))
                    }
                </Row>
            </Row>
        </div>
    )
}

export default ProjectView