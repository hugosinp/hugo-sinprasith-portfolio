import React from 'react'
import { Container } from 'react-bootstrap'

import MainView from './MainView'
import BioView from './BioView'
import SkillView from './SkillView'
import ProjectView from './ProjectView'
import ContactView from './ContactView'

const HomePageView = ({ dico }) => {
    return (
        <div>
            <Container fluid>
                <MainView id="mainSection" dico={dico}/>
                <BioView id="bioSection" dico={dico}/>
                <SkillView id="skillSection" dico={dico}/>
                <ProjectView id="projectSection" dico={dico}/>
                <ContactView id="contactSection" dico={dico}/>
            </Container>
        </div>
    )
}

export default HomePageView
