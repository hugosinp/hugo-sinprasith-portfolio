import React from 'react'

import { Row, Container, } from 'react-bootstrap'

import ATitle from '../atomes/aTitle'
import OEntrepriseTab from '../organisms/oEntrepriseTab'
import OContactForm from '../organisms/oContactForm'

import '../../static/scss/views/contactView.scss'

const ContactView = ({ id, dico, entreprises }) => {

    const {
        CONTACT_HEAD,
        CONTACT_SUBHEAD
    } = dico

    return (
        <div id={id}>
            <Row className="text-light bg-dark-blue contactView">
                <Container className="text-center fade-in">
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

                <Row id="entrepriseRow" className="fade-in" sm={12}>
                    <OEntrepriseTab
                        data={entreprises}
                    />
                </Row>

                <Row id="contactFormRow" className="text-center fade-in" sm={12}>
                    <OContactForm 
                        dico={dico}
                    />
                </Row>
            
            </Row>
        </div>
    )
}

export default ContactView
