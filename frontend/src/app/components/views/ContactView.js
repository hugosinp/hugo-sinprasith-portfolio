import React from 'react'

import { Row, Col, Container, Image } from 'react-bootstrap'

import ATitle from '../aTitle'
import Entreprise from '../Entreprise'
import OContactForm from '../oContactForm'

import { entreprises } from '../../static/data'
import { contactDico } from '../../static/dico'

const ContactView = ({ id }) => {

    const {
        CONTACT_HEAD,
        CONTACT_SUBHEAD
    } = contactDico

    return (
        <div id={id}>
            <Row className="text-light bg-dark-blue p-5" style={{ height: "180vh" }}>
                <Container className="text-center m-auto">
                    <ATitle 
                        className="bold"
                        heading_tag="h1"
                        text={CONTACT_HEAD}
                    />
                    <ATitle 
                        className=""
                        heading_tag="h1"
                        text={CONTACT_SUBHEAD}
                    />
                </Container>

                <Row>
                    <Entreprise
                        data={entreprises}
                    />
                </Row>

                <Row>
                    <OContactForm />
                </Row>
            </Row>
        </div>
    )
}

export default ContactView
