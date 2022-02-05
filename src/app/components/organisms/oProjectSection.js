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
        <Container maxW={'4xl'} py={{ base: 35, md: 30 }}>
            <Flex h={{ base: "auto" }} direction={{ base: "column" }} align={'center'}>
                
                <Stack p={5} align={'center'}>
                    <Heading>
                        Featured <Text as={'span'} color={'blue.400'}>Projects</Text>
                    </Heading>
                    <Heading size='md' color={'gray.400'}>
                        Follow my GitHub for more !
                    </Heading>
                    <Link href='https://github.com/hugosinp' isExternal>
                        <FaGithub size={40}/>
                    </Link>
                </Stack>
                
                <Stack direction={{ base: "row", md: "row" }} maxWidth={{ base: '100%', lg: 'none' }} overflowY={'hidden'} overflowX={{ base: 'auto', lg: 'hidden'}} p={5} spacing={10}>
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