import React from 'react'

import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Link,
    useColorModeValue,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button
} from '@chakra-ui/react';

const OProject = ({ project }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Center py={2} onClick={onOpen} cursor={'pointer'} _hover={{ transform: "scale3d(1.05, 1.05, 1)", transition: "transform 0.15s ease-in-out" }}>
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
                
            </Box>

            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{project.title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {project.head}
                        <Text mt={6} color={'green.500'} textTransform={'uppercase'} fontWeight={500} fontSize={'sm'} letterSpacing={1.1}>
                            {project.tech}
                        </Text>
                    </ModalBody>
                    <ModalFooter>
                        
                        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                            <Link href={project.link} rounded={'md'} fontWeight={'bold'} p={2} isExternal>
                                More details
                            </Link>
                            {
                                project.demo &&
                                    <Link href={project.demo} rounded={'md'} fontWeight={'bold'} p={2} isExternal>
                                        Demo
                                    </Link>
                            }
                            <Button onClick={onClose}>Close</Button>
                        </Stack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Center>
    )
}

export default OProject
