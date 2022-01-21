import React from 'react'

import { Container } from '@chakra-ui/react'

import HeroView from './HeroView'
import BioView from './BioView'
import SkillView from './SkillView'
import ProjectView from './ProjectView'
import EntrepriseView from './EntrepriseView'
import ContactView from './ContactView'

const HomePageView = () => {
    return (
        <Container maxW="container.xl" p={0}>
            <HeroView id="hero"/>
            <BioView id="bio"/>
            <SkillView id="skills"/>
            <ProjectView id="projects"/>
            <EntrepriseView id="experiences"/>
            <ContactView id="contact"/>
        </Container>
    )
}

export default HomePageView
