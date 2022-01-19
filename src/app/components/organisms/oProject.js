import React from 'react'

import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Link,
    useColorModeValue,
} from '@chakra-ui/react';

const OProject = ({ project }) => {

    return (
        <Center py={2}>
            <Box maxW={'445px'} w={'full'} bg={useColorModeValue('white', 'gray.900')} boxShadow={'2xl'} rounded={'md'} p={6} overflow={'hidden'}>
                <Box h={'210px'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                    <lottie-player src={project.image}  background="transparent" speed="1" style={{ margin:"auto", width: "200px", height: "200px" }} loop autoplay></lottie-player>
                </Box>
                <Stack>
                    <Heading color={useColorModeValue('gray.700', 'white')} fontSize={'2xl'} fontFamily={'body'}>
                        {project.title}
                    </Heading>
                    <Text color={'gray.500'}>
                        {project.head}
                    </Text>
                </Stack>


                <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                    <Link href={project.link} background={'gray.800'} rounded={'md'} fontWeight={'bold'} p={2} isExternal>
                        More details
                    </Link>
                    {
                        project.demo &&
                            <Link href={project.demo} background={'gray.800'} rounded={'md'} fontWeight={'bold'} p={2} isExternal>
                                Demo
                            </Link>
                    }
                </Stack>
                <Text mt={6} color={'green.500'} textTransform={'uppercase'} fontWeight={500} fontSize={'sm'} letterSpacing={1.1}>
                    {project.tech}
                </Text>
            </Box>
        </Center>
    )
}

export default OProject
