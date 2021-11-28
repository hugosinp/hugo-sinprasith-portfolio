import React from 'react'

import { Row, Col, Container, Image } from 'react-bootstrap'

import AParagraph from '../atomes/aParagraph'
import ALink from '../atomes/aLink'
import ATitle from '../atomes/aTitle'

import me from '../../static/img/me.png'

import '../../static/scss/views/bioView.scss'

const BioView = ({ id, dico }) => {
    
    const {
        BIO_HEAD,
        BIO_SUBHEAD,
        BIO_SECTION_HEAD,
        BIO_ME,
        BIO_GOAL,
        BIO_HOBBY,
        BIO_BUTTON
    } = dico

    return (
        <div id={id}>
            <Row className="text-light bg-soft-blue bioView" fluid>
                <Row className="bioRow">
                    <Col sm={12} md={12} lg={12} xl={5} xxl={5}>
                        <Container className="text-center fade-in">
                            <ATitle 
                                className="bold"
                                heading_tag="h1" 
                                text={BIO_HEAD}
                            />
                            <ATitle 
                                className="bold italic"
                                heading_tag="h4" 
                                text={BIO_SUBHEAD}
                            />
                            <Image src={me} className="m-4 shadow zoom" height="200px" width="200px" alt="Hugo Sinprasith" roundedCircle />
                        </Container>
                    </Col>

                    <Col sm={12} md={12} lg={12} xl={7} xxl={7}>
                        <Container className="fade-in">
                            <ATitle 
                                className="bold"
                                heading_tag="h3"
                                text={BIO_SECTION_HEAD}
                            />
                            <AParagraph
                                text={BIO_ME}
                            />
                            <AParagraph 
                                text={BIO_GOAL}
                            />
                            <AParagraph 
                                text={BIO_HOBBY}
                            />
                            <ALink
                                className="shadow"
                                href="#skillSection"
                                text={BIO_BUTTON}
                                background="bg-dark-blue"
                            />
                        </Container>
                    </Col>
                </Row>
            </Row>
        </div>
    )
}

export default BioView
