import React from 'react'

import { Container, Flex } from '@chakra-ui/react'

import OHeroSection from '../organisms/oHeroSection';

const HeroView = ({ id }) => {
    return (
        <Container maxW="container.xl" p={0} id={id}>
            <Flex height={{ base: '100vh' }} align={'center'}>
                <OHeroSection />
            </Flex>
        </Container>
    )
}

export default HeroView
