import React from 'react'

import { Container, Flex } from '@chakra-ui/react'

import OProjectSection from '../organisms/oProjectSection';

const ProjectView = ({ id }) => {
    return (
        <Container maxW="container.xl" p={0} id={id}>
            <Flex height={{ base: 'auto', lg: '100vh' }} align={'center'}>
                <OProjectSection />
            </Flex>
        </Container>
    )
}

export default ProjectView
