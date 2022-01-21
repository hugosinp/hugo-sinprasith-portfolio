import React from 'react'
import {
    Flex,
    Container,
    Heading,
    Text,
    Stack,
    Image,
    HStack,
    VStack
} from '@chakra-ui/react';

import reactLogo from '../../static/img/react-logo.svg';
import reduxLogo from '../../static/img/redux-logo.svg';
import djangoLogo from '../../static/img/django-logo.svg';
import jsLogo from '../../static/img/js-logo.svg';
import pythonLogo from '../../static/img/python-logo.svg';
import javaLogo from '../../static/img/java-logo.svg';
import postgreLogo from '../../static/img/postgre-logo.svg';

const OSkillSection = () => {
    return (
        <Container maxW={'4xl'} py={{ base: 35, md: 30 }}>
            <Flex h={{ base: "auto" }} direction={{ base: "column" }} align={'center'}>
                
                <Stack p={5}>
                    <Heading fontStyle={'italic'} align={'center'}>
                        `Learn, experience and 
                        <Text as={'span'} color={'blue.400'}> repeat.`</Text>
                    </Heading>
                </Stack>
                
                <Stack direction={{ base: "column", lg: "row" }} p={5} spacing={10}>
                    
                    <Stack direction={{ base: "column", md: "column"}} spacing={10}>
                        <Heading align={'center'}>
                            Skills & Tech Stack
                        </Heading>
                        <Text align={'justify'}>
                            Throughout my programming journey, I've experienced many technologies and IT concepts. <br />
                            Full-Stack Developpment became my main expertise. <br /> <br />
                            Front-end dev, back-end dev, REST API building, database management, 
                            I've worked on many web apps from conception to deployment. <br /><br />
                            Python and JavaScript are my favorite programming languages but I remain aware of the newest technologies 
                            on the market and do not miss an occasion to learn more.
                        </Text>
                    </Stack>

                    <VStack>
                        <HStack>
                            <Image
                                boxSize='100px'
                                objectFit='cover'
                                src={reactLogo}
                                alt='React'
                            />
                            <Image
                                boxSize='80px'
                                objectFit='fill'
                                src={reduxLogo}
                                alt='Redux'
                            />
                        </HStack>
                        <HStack>
                            <Image
                                boxSize='100px'
                                objectFit='fill'
                                src={djangoLogo}
                                alt='Django'
                            />
                            <Image
                                boxSize='80px'
                                objectFit='fill'
                                src={jsLogo}
                                alt='Javascript'
                            />
                            <Image
                                boxSize='80px'
                                objectFit='fill'
                                src={pythonLogo}
                                alt='Python'
                            />
                        </HStack>
                        <HStack>
                            <Image
                                boxSize='100px'
                                objectFit='fill'
                                src={javaLogo}
                                alt='Java'
                            />
                            <Image
                                boxSize='80px'
                                objectFit='fill'
                                src={postgreLogo}
                                alt='Postgre'
                            />
                        </HStack>
                    </VStack>

                </Stack>

            </Flex>
        </Container>
    )
}

export default OSkillSection