import React from 'react'

import { Row, Col, Container, } from 'react-bootstrap'

import ATitle from '../aTitle'
import ALink from '../aLink'
import Project from '../Project'

import { projectDico } from '../../static/dico'

import { projects } from '../../static/data'

const ProjectView = ({ id }) => {

    const {
        PROJECT_HEAD,
        PROJECT_SUBHEAD
    } = projectDico

    return (
        <div id={id}>
            <Row className="text-light bg-soft-blue p-5" style={{ height: "100vh" }}>
                <Container className="text-center pt-5">
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
                    <a href="https://github.com/hugosinp" target="_blank">
                        <i class="fab fa-github fa-2x"></i>
                    </a>
                </Container>

                <Row className="m-2">
                    {
                        projects.map(project => (
                            <Col key={project.id}>
                                <Project 
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
