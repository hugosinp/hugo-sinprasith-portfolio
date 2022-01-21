import React from 'react'

import { Container, Flex } from '@chakra-ui/react'

import OBioSection from '../organisms/oBioSection';

const BioView = ({ id }) => {
    return (
        <Container maxW="container.xl" p={0} id={id}>
            <Flex height={{ base: 'auto', lg: '100vh'}} align={'center'}>
                <OBioSection />
            </Flex>
        </Container>
    )
}

export default BioView
