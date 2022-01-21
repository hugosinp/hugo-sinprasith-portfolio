import React from 'react';

import { Container, Flex } from '@chakra-ui/react'

import OEntrepriseSection from '../organisms/oEntrepriseSection';

const EntrepriseView = () => {
    return (
        <Container maxW="container.xl" p={0}>
            <Flex height={{ base: 'auto', md: '100vh'}} align={'center'}>
                <OEntrepriseSection />
            </Flex>
        </Container>
    );
};

export default EntrepriseView;
