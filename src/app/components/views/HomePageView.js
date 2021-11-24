import React from 'react'
import { Container } from 'react-bootstrap'

import MainView from './MainView'
import BioView from './BioView'
import SkillView from './SkillView'
import ProjectView from './ProjectView'
import ContactView from './ContactView'

const HomePageView = () => {
    return (
        <div>
            <Container fluid>
                <MainView id="mainSection"/>
                <BioView id="bioSection"/>
                <SkillView id="skillSection"/>
                <ProjectView id="projectSection"/>
                <ContactView id="contactSection"/>
            </Container>
        </div>
    )
}

export default HomePageView
