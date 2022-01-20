import React from 'react'

import { Container, Flex } from '@chakra-ui/react'

import OHeroSection from '../organisms/oHeroSection';

const MainView = () => {
    return (
        <Container maxW="container.xl" p={0}>
            <Flex height={{ base: '100vh' }} align={'center'}>
                <OHeroSection />
            </Flex>
        </Container>
    )
}

export default MainView
