import React from 'react'

import { Row, Col, Container, Image } from 'react-bootstrap'

import ATitle from '../atomes/aTitle'
import OEntrepriseTab from '../organisms/oEntrepriseTab'
import OContactForm from '../organisms/oContactForm'

import { entreprises } from '../../static/data'
import { contactDico } from '../../static/dico'
import '../../static/scss/views/contactView.scss'

const ContactView = ({ id }) => {

    const {
        CONTACT_HEAD,
        CONTACT_SUBHEAD
    } = contactDico

    return (
        <div id={id}>
            <Row className="text-light bg-dark-blue contactView">
                <Container className="text-center">
                    <ATitle 
                        className="bold"
                        heading_tag="h1"
                        text={CONTACT_HEAD}
                    />
                    <ATitle 
                        className=""
                        heading_tag="h2"
                        text={CONTACT_SUBHEAD}
                    />
                </Container>

                <Row id="entrepriseRow" className="">
                    <OEntrepriseTab
                        data={entreprises}
                    />
                </Row>

                <Container className="text-center">
                    <OContactForm />
                </Container>
            
            </Row>
        </div>
    )
}

export default ContactView
