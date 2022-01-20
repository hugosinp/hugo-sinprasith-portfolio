import React from 'react'

import { Container } from '@chakra-ui/react'

import MainView from './MainView'
import BioView from './BioView'
import SkillView from './SkillView'
import ProjectView from './ProjectView'
import ContactView from './ContactView'

const HomePageView = () => {
    return (
        <Container maxW="container.xl" p={0}>
            <MainView id="main"/>
            <BioView id="bioSection"/>
            <SkillView id="skills"/>
            <ProjectView id="project"/>
            <ContactView id="contact"/>
        </Container>
    )
}

export default HomePageView
