import React from 'react'

import { Container } from '@chakra-ui/react'

import MainView from './MainView'
import BioView from './BioView'
import SkillView from './SkillView'
import ProjectView from './ProjectView'
import ContactView from './ContactView'

const HomePageView = ({ skills, projects, entreprises }) => {
    return (
        <Container maxW="container.xl" p={0}>
            <MainView />
            <BioView />
            <SkillView />
            <ProjectView />
            <ContactView />
        </Container>
    )
}

export default HomePageView
