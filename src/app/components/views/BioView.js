import React from 'react'

import { Container, Flex } from '@chakra-ui/react'

import OBioSection from '../organisms/oBioSection';

const BioView = () => {
    return (
        <Container maxW="container.xl" p={0}>
            <Flex height={{ base: 'auto', md: '100vh'}} align={'center'}>
                <OBioSection />
            </Flex>
        </Container>
    )
}

export default BioView
