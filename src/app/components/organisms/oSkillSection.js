import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

import {
    Flex,
    Container,
    Heading,
    Text,
    Stack,
    Image,
    HStack,
    VStack,
    Box
} from '@chakra-ui/react';

import reactLogo from '../../static/img/react-logo.svg';
import reduxLogo from '../../static/img/redux-logo.svg';
import djangoLogo from '../../static/img/django-logo.svg';
import jsLogo from '../../static/img/js-logo.svg';
import pythonLogo from '../../static/img/python-logo.svg';
import firebaseLogo from '../../static/img/firebase-logo.svg';

const OSkillSection = ({ fadeIn }) => {

    const {ref, inView} = useInView({ threshold: 0.4 })
    const animation = useAnimation()

    useEffect(() => {
        fadeIn(animation, inView)
    }, [fadeIn, animation, inView])

    return (
        <Container maxW={'4xl'} py={{ base: 35, md: 30 }}>
            <Flex h={{ base: "auto" }} direction={{ base: "column" }} align={'center'}>
                
                <Stack py={39}>
                    <Heading fontStyle={'italic'} align={'center'}>
                        Learn, experience and 
                        <Text fontWeight={'extrabold'} as={'span'} bgClip='text' bgGradient='linear(to-r, #4DB8FF, #19A3FF)'> repeat.</Text>
                    </Heading>
                </Stack>
                
                <Stack direction={{ base: "column", lg: "row" }} p={5} spacing={{ base: 10, lg: 20 }}>
                    
                    <VStack spacing={10}>
                        <Heading align={'center'}>
                            Skills & Tech Stack
                        </Heading>
                        <Text align={'justify'}>
                            Throughout my programming journey, I've experienced many technologies and IT concepts.
                            Full-Stack Developpment became my main expertise. <br /> <br />
                            Front-end dev, back-end dev, REST API building, database management, 
                            I've worked on many web apps from conception to deployment. <br /><br />
                            Python and JavaScript are my favorite programming languages but I remain aware of the newest technologies 
                            on the market and do not miss an occasion to learn more.
                        </Text>
                    </VStack>

                    <VStack spacing={2} align={'center'}>
                        <HStack w={80} justify={'center'}>
                            <motion.div
                                animate={animation}
                                drag
                                dragConstraints={{ left: 10, right: 10, top: 10, bottom: 10 }}
                                whileTap={{ scale: 0.8 }}
                                dragTransition={{ bounceStiffness: 500, bounceDamping: 10 }}
                                whileHover={{ scale: 1.1, rotate: 360 }}
                            >
                                <Box ref={ref}  bgGradient='linear(to-r, #a8c0ff, #8f94fb)' fontWeight={'bold'} color={'white'}  align={'center'} p={'5'} shadow={'md'}  cursor={'grab'} borderRadius={'50%'} h={'20'} w={'20'}>
                                    REST API
                                </Box>
                            </motion.div>
                            <motion.div
                                animate={animation}
                                drag
                                dragConstraints={{ left: 10, right: 10, top: 10, bottom: 10 }}
                                whileTap={{ scale: 0.8 }}
                                dragTransition={{ bounceStiffness: 500, bounceDamping: 10 }}
                                whileHover={{ scale: 1.1, rotate: 360 }}
                            >
                                <Box ref={ref}  bgGradient='linear(to-r, #B95EFF, #A04DFF)' fontWeight={'bold'} color={'white'}  align={'center'} p={'5'} shadow={'md'}  cursor={'grab'} borderRadius={'50%'} h={'20'} w={'20'}>
                                    Web 3.0
                                </Box>
                            </motion.div>
                        </HStack>
                        <HStack justify={'center'}>
                            <Image
                                boxSize='100px'
                                objectFit='cover'
                                src={reactLogo}
                                alt='React'
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
                                src={reduxLogo}
                                alt='Redux'
                            />
                        </HStack>
                        <HStack justify={'center'}>
                            <Image
                                boxSize='90px'
                                objectFit='fill'
                                src={djangoLogo}
                                alt='Django'
                            />
                            <Image
                                boxSize='80px'
                                objectFit='fill'
                                src={pythonLogo}
                                alt='Python'
                            />
                            <Image
                                boxSize='80px'
                                objectFit='fill'
                                src={firebaseLogo}
                                alt='Python'
                            />
                        </HStack>
                        <HStack justify={'center'}>
                            <motion.div
                                animate={animation}
                                drag
                                dragConstraints={{ left: 10, right: 10, top: 10, bottom: 10 }}
                                whileTap={{ scale: 0.8 }}
                                dragTransition={{ bounceStiffness: 500, bounceDamping: 10 }}
                                whileHover={{ scale: 1.1, rotate: 360 }}
                            >
                                <Box ref={ref} bgGradient='linear(to-r, #A04DFF, #7C4DFF)' fontWeight={'bold'} color={'white'} align={'center'} p={'5'} shadow={'md'} cursor={'grab'} borderRadius={'50%'} w={'30'}>
                                    dApps
                                </Box>
                            </motion.div>
                            <motion.div
                                animate={animation}
                                drag
                                dragConstraints={{ left: 10, right: 10, top: 10, bottom: 10 }}
                                whileTap={{ scale: 0.8 }}
                                dragTransition={{ bounceStiffness: 500, bounceDamping: 10 }}
                                whileHover={{ scale: 1.1, rotate: 360 }}
                            >
                                <Box ref={ref} bgGradient='linear(to-r, #a8c0ff, #8f94fb)' fontWeight={'bold'} color={'white'} align={'center'} p={'5'} shadow={'md'} cursor={'grab'} borderRadius={'50%'} w={'30'}>
                                    SaaS
                                </Box>
                            </motion.div>
                        </HStack>
                    </VStack>
                </Stack>

            </Flex>
        </Container>
    )
}

export default OSkillSection