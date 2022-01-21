import React from 'react'
import {
    Flex,
    VStack,
    Container,
    Heading,
    Image,
    Text
} from '@chakra-ui/react';

import me from '../../static/img/me.png';

const OBioSection = () => {
    return (
        <Container maxW={'4xl'}>
            <Flex h={{ base: "auto", md: "100vh", lg: "100vh" }} py={10} direction={{ base: "column", lg: "row"}} align={'center'}>
                <VStack p={5}>
                    <Heading align={'center'}>
                        Hugo Sinprasith
                    </Heading>
                    <Heading pb={5} size={5} color={'gray.400'} fontStyle={'italic'} align={'center'}>
                        Student, Apprentice & Freelance
                    </Heading>
                    <Image
                        objectFit={'cover'}
                        borderRadius='full'
                        boxSize={{ base: '200px', md:'150px' }}
                        src={me}
                        alt='Hugo Sinprasith'
                    />
                </VStack>
                <VStack p={{ base: 5, lg: 20 }}>
                    <Heading>
                        About me
                    </Heading>
                    <Text align={'justify'}>
                        Hi I'm Hugo, a Computer Science Enthusiast. 
                        I'm currently preparing a Computer Science Master's degree at EFREI Paris Engineering School. 
                        Besides that, I am working at Société Générale as a Full-Stack developper apprentice. <br /><br />
                        My passion for IT is such that I decided to begin a freelance activity appart from my studies and apprenticeship. 
                        Resolving real-life problems with code actually became a hobby.
                    </Text>
                </VStack>
            </Flex>
        </Container>
    )
}

export default OBioSection