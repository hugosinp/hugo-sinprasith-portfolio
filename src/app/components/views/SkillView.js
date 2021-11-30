import React from 'react'

import { Row, Col, Image, Container } from 'react-bootstrap'

import AParagraph from '../atomes/aParagraph'
import ALink from '../atomes/aLink'
import ATitle from '../atomes/aTitle'

import '../../static/scss/views/skillView.scss'

import reactLogo from '../../static/img/react-logo.svg'
import reduxLogo from '../../static/img/redux-logo.svg'
import djangoLogo from '../../static/img/django-logo.svg'
import jsLogo from '../../static/img/js-logo.svg'
import pythonLogo from '../../static/img/python-logo.svg'
import postgreLogo from '../../static/img/postgre-logo.svg'
import mysqlLogo from '../../static/img/mysql-logo.png'
import javaLogo from '../../static/img/java-logo.svg'


const SkillView = ({ id, dico }) => {
    
    const {
        SKILL_HEAD,
        SKILL_SECTION_HEAD,
        SKILL_INTRO,
        SKILL_EXPERTISE,
        SKILL_TECH,
        SKILL_FAVORITE,
        SKILL_BUTTON
    } = dico

    return (
        <div id={id}>
            <Row className="text-light bg-dark-blue skillView" fluid>
                <Row className="m-auto">
                    <Container className="text-center mb-5 fade-in">
                        <ATitle 
                            className="bold"
                            heading_tag="h1"
                            text={SKILL_HEAD}
                        />
                    </Container>
                    <Col sm={12} md={12} lg={12} xl={12} xxl={7}>
                        <Container className="mb-5 fade-in">
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
                                text={SKILL_BUTTON}
                                background="bg-soft-blue"
                            />
                        </Container>
                    </Col>

                    <Col sm={12} md={12} lg={12} xl={12} xxl={5}>
                        <Container className="fade-in text-center">
                            <Image src={reactLogo} className="zoom large-logo" alt="React logo" />
                            <Image src={reduxLogo} className="zoom small-logo" alt="Redux logo" />
                            <Image src={jsLogo} className="zoom xsmall-logo" alt="JavaScript logo" />
                            <Image src={pythonLogo} className="zoom small-logo" alt="Python logo" />
                            <Image src={djangoLogo} className="zoom xsmall-logo" alt="Django logo" />
                            <Image src={postgreLogo} className="zoom small-logo" alt="PostgreSQL logo" />
                            <Image src={javaLogo} className="zoom xsmall-logo" alt="Java logo" />
                            <Image src={mysqlLogo} className="zoom small-logo" alt="MySQL logo" />  
                        </Container>
                    </Col>
                </Row>
            </Row>
        </div>
    )
}

export default SkillView
