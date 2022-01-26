import React from 'react'
import {
    Flex,
    VStack,
    Container,
    Heading,
    Text,
    Stack,
    Badge,
    useColorModeValue,
    Box,
    Center,
    Avatar,
} from '@chakra-ui/react';

import me from '../../static/img/me.png';

const OBioSection = () => {
    return (
        <Container maxW={'4xl'} py={{ base: 35, md: 30 }}>
            <Flex h={{ base: "auto", lg: "100vh" }} direction={{ base: "column", lg: "row"}} align={'center'}>
                <VStack p={5}>
                    <Center py={6}>
                        <Box maxW={'320px'} w={'full'} bg={useColorModeValue('white', 'gray.900')} boxShadow={'2xl'} rounded={'xl'} p={6} textAlign={'center'}>

                            <Avatar size="2xl" src={ me } alt={'Hugo Sinprasith'} mb={4} pos={'relative'} css={{ border: '2px solid grey', }}/>
                            <Heading fontSize={'2xl'} fontFamily={'body'}>
                                Hugo Sinprasith
                            </Heading>
                            <Text fontWeight={600} color={'gray.500'} fontStyle={'italic'} mb={4}>
                                Student, Apprentice & Freelance
                            </Text>
                            <Text textAlign={'center'} color={useColorModeValue('gray.700', 'gray.400')} px={3}>
                            </Text>

                            <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                                <Badge px={2} py={1} bg={useColorModeValue('gray.50', 'gray.800')}  fontWeight={'400'}>
                                    #full-stack
                                </Badge>
                                <Badge px={2} py={1} bg={useColorModeValue('gray.50', 'gray.800')} fontWeight={'400'}>
                                    #reactjs
                                </Badge>
                                <Badge px={2} py={1} bg={useColorModeValue('gray.50', 'gray.800')} fontWeight={'400'}>
                                    #django
                                </Badge>
                            </Stack>

                        </Box>
                    </Center>
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