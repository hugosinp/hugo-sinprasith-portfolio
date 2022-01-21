import React from 'react'

import { Container } from '@chakra-ui/react'

import MainView from './MainView'
import BioView from './BioView'
import SkillView from './SkillView'
import ProjectView from './ProjectView'
import EntrepriseView from './EntrepriseView'
import ContactView from './ContactView'

const HomePageView = () => {
    return (
        <Container maxW="container.xl" p={0}>
            <MainView id="main"/>
            <BioView id="bio"/>
            <SkillView id="skills"/>
            <ProjectView id="project"/>
            <EntrepriseView id="entreprise"/>
            <ContactView id="contact"/>
        </Container>
    )
}

export default HomePageView
