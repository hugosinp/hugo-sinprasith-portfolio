import React from 'react'
import { Container } from '@chakra-ui/react'

import HeroView from './HeroView'
import BioView from './BioView'
import SkillView from './SkillView'
import ProjectView from './ProjectView'
import EntrepriseView from './EntrepriseView'
import ContactView from './ContactView'

const HomePageView = () => {
    
    const fadeIn = (animation, inView) => {
        if(inView){
            animation.start({
                scale: 1,
                duration: 2
            })
        }
        
        if(!inView){
            animation.start({
                scale: 0,
                duration: 2
            })
        }
    }

    return (
        <Container maxW="container.xl" p={0}>
            <HeroView id="hero" fadeIn={fadeIn} />
            <BioView id="bio" />
            <SkillView id="skills" fadeIn={fadeIn} />
            <ProjectView id="projects" />
            <EntrepriseView id="experiences" />
            <ContactView id="contact" />
        </Container>
    )
}

export default HomePageView
