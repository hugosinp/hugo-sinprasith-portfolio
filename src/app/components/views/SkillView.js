import React from 'react'

import { Container, Flex } from '@chakra-ui/react'

import OSkillSection from '../organisms/oSkillSection';

const SkillView = ({ id, fadeIn }) => {
    return (
        <div id={id}>
            <Container maxW="container.xl" p={0} id={id}>
                <Flex height={{ base: 'auto', lg: '100vh' }} align={'center'}>
                    <OSkillSection 
                        fadeIn={fadeIn}
                    />
                </Flex>
            </Container>
        </div>
    )
}

export default SkillView
