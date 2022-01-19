import React from 'react'

import { Container, Flex } from '@chakra-ui/react'

import OContactSection from '../organisms/oContactSection';

const ContactView = () => {
    return (
        <Container maxW="container.xl" p={0}>
            <Flex height={{ base: 'auto' }}>
                <OContactSection />
            </Flex>
        </Container>
    )
}

export default ContactView
