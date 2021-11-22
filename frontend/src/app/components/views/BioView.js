import React from 'react'

import { Row, Col, Container, Image } from 'react-bootstrap'

import AParagraph from '../aParagraph'
import ALink from '../aLink'
import ATitle from '../aTitle'

import { bioDico } from '../../static/dico'
import me from '../../static/img/me.png'

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
            <Row className="text-light bg-soft-blue p-5" style={{ height: "100vh" }} fluid>
                <Row className="mt-5 p-5">
                    <Col>
                        <Container className="text-center p-5">
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
                            <Image src={me} className="m-4 shadow" height="200px" width="200px" roundedCircle />
                        </Container>
                    </Col>

                    <Col>
                        <Container className="p-5">
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
