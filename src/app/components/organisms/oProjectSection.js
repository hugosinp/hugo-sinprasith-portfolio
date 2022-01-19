import React from 'react'
import {
    Flex,
    Container,
    Heading,
    Text,
    Stack,
    Link
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

import OProject from '../organisms/oProject';
import { usProjects } from '../../static/data';

const OProjectSection = () => {
    return (
        <Container maxW={'3xl'}>
            <Flex h={{ base: "auto", md: "100vh" }} py={10} direction={{ base: "column", md: "column"}} align={'center'}>
                
                <Stack py={5} px={10} align={'center'}>
                    <Heading>
                        My 
                        <Text as={'span'} color={'blue.400'}> Projects</Text>
                    </Heading>
                    <Heading size='md' color={'gray.400'}>
                        Follow my GitHub for more !
                    </Heading>
                    <Link href='https://github.com/hugosinp' isExternal>
                        <FaGithub size={40}/>
                    </Link>
                </Stack>
                
                <Stack direction={{ base: "column", md: "row"}} px={10} spacing={10}>
                    {
                        usProjects.map(project => (
                            <OProject
                                key={project.id}
                                project={project}
                            />
                        ))
                    }
                </Stack>

            </Flex>
        </Container>
    )
}

export default OProjectSection