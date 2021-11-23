import React from 'react'

import { Row, Col, Image, Button, Container } from 'react-bootstrap'

import AParagraph from '../atomes/aParagraph'
import ALink from '../atomes/aLink'
import ATitle from '../atomes/aTitle'

import { skillDico } from '../../static/dico'

import '../../static/scss/views/skillView.scss'

import reactLogo from '../../static/img/react-logo.png'
import reduxLogo from '../../static/img/redux-logo.png'
import djangoLogo from '../../static/img/django-logo.svg'
import jsLogo from '../../static/img/js-logo.png'
import pythonLogo from '../../static/img/python-logo.svg'
import postgreLogo from '../../static/img/postgre-logo.svg'
import mysqlLogo from '../../static/img/mysql-logo.png'
import javaLogo from '../../static/img/java-logo.png'


const SkillView = ({ id }) => {
    
    const {
        SKILL_HEAD,
        SKILL_SECTION_HEAD,
        SKILL_INTRO,
        SKILL_EXPERTISE,
        SKILL_TECH,
        SKILL_FAVORITE
    } = skillDico

    return (
        <div id={id}>
            <Row className="text-light bg-dark-blue skillView" fluid>
                <Row className="m-auto">
                    <Container className="text-center mb-5">
                        <ATitle 
                            className="bold"
                            heading_tag="h1"
                            text={SKILL_HEAD}
                        />
                    </Container>
                    <Col>
                        <Container className="mb-5">
                            <ATitle 
                                className="bold"
                                heading_tag="h3"
                                text={SKILL_SECTION_HEAD}
                            />
                            <AParagraph
                                text={SKILL_INTRO}
                            />
                            <AParagraph
                                text={SKILL_EXPERTISE}
                            />
                            <AParagraph
                                text={SKILL_TECH}
                            />
                            <AParagraph
                                text={SKILL_FAVORITE}
                            />                            
                            <ALink
                                className="shadow"
                                href="#projectSection"
                                text="See my projects >>"
                                background="bg-soft-blue"
                            />
                        </Container>
                    </Col>

                    <Col sm>
                        <Container className="">
                            <Image src={reactLogo} className="zoom" style={{ width:"50%" }} />
                            <Image src={reduxLogo} className="zoom" style={{ width:"20%" }} />
                            <Image src={djangoLogo} className="zoom" style={{ width:"20%" }} />
                            <Image src={pythonLogo} className="zoom" style={{ width:"20%" }} />
                            <Image src={jsLogo} className="zoom" style={{ width:"20%" }} />
                            <Image src={postgreLogo} className="zoom" style={{ width:"20%" }} />
                            <Image src={javaLogo} className="zoom" style={{ width:"20%" }} />
                            <Image src={mysqlLogo} className="zoom" style={{ width:"20%" }} />  
                        </Container>
                    </Col>
                </Row>
            </Row>
        </div>
    )
}

export default SkillView