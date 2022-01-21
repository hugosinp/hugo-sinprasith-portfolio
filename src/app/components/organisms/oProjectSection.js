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
        <Container maxW={'5xl'} py={{ base: 35, md: 30 }}>
            <Flex h={{ base: "auto" }} direction={{ base: "column" }} align={'center'}>
                
                <Stack p={5} align={'center'}>
                    <Heading>
                        <Text as={'span'} color={'blue.400'}> Projects</Text>
                    </Heading>
                    <Heading size='md' color={'gray.400'}>
                        Follow my GitHub for more !
                    </Heading>
                    <Link href='https://github.com/hugosinp' isExternal>
                        <FaGithub size={40}/>
                    </Link>
                </Stack>
                
                <Stack direction={{ base: "column", md: "row"}} px={5} spacing={10}>
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