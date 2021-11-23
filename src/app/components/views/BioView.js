import React from 'react'

import { Row, Col, Container, Image } from 'react-bootstrap'

import AParagraph from '../atomes/aParagraph'
import ALink from '../atomes/aLink'
import ATitle from '../atomes/aTitle'

import { bioDico } from '../../static/dico'
import me from '../../static/img/me.png'

import '../../static/scss/views/bioView.scss'

const BioView = ({ id }) => {
    
    const {
        BIO_HEAD,
        BIO_SUBHEAD,
        BIO_SECTION_HEAD,
        BIO_ME,
        BIO_GOAL,
        BIO_HOBBY 
    } = bioDico

    return (
        <div id={id}>
            <Row className="text-light bg-soft-blue bioView" fluid>
                <Row className="m-auto">
                    <Col>
                        <Container className="text-center">
                            <ATitle 
                                className="bold"
                                heading_tag="h1" 
                                text={BIO_HEAD}
                            />
                            <ATitle 
                                className="bold"
                                heading_tag="h4" 
                                text={BIO_SUBHEAD}
                            />
                            <Image src={me} className="m-4 shadow zoom" height="200px" width="200px" roundedCircle />
                        </Container>
                    </Col>

                    <Col sm>
                        <Container className="">
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
                                text="Discover my expertise >>"
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
