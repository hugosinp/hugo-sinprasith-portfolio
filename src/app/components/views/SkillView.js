import React from 'react'

import { Container, Flex } from '@chakra-ui/react'

import OSkillSection from '../organisms/oSkillSection';

const SkillView = () => {
    return (
        <Container maxW="container.xl" p={0}>
            <Flex height={{ base: 'auto' }}>
                <OSkillSection />
            </Flex>
        </Container>
    )
}

export default SkillView
