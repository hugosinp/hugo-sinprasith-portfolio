import React from 'react'

import { Container, Flex } from '@chakra-ui/react'

import OProjectSection from '../organisms/oProjectSection';

const ProjectView = () => {
    return (
        <Container maxW="container.xl" p={0}>
            <Flex height={{ base: 'auto' }}>
                <OProjectSection />
            </Flex>
        </Container>
    )
}

export default ProjectView
