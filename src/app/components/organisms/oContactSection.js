import React from 'react'
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Link,
    Stack,
    Textarea,
    Tooltip,
    useClipboard,
    useColorModeValue,
    VStack,
    Container
} from '@chakra-ui/react';
import { BsGithub, BsLinkedin, BsPerson } from 'react-icons/bs';
import { MdEmail, MdOutlineEmail } from 'react-icons/md';
  
const OContactSection = () => {
    
    const { hasCopied, onCopy } = useClipboard('hugo.sinprasith@gmail.com');

    return (
        <Container maxW={'3xl'} py={20}>
            <Flex h={{ base: "auto", md: "auto" }} direction={{ base: "column", md: "column"}} align={'center'}>
                
                <Flex bg={useColorModeValue('gray.100', 'gray.900')} borderRadius="lg" align="center" justify="center" id="contact">
                    <Box borderRadius="lg" p={{ base: 10, lg: 10 }}>
                        <Box>
                            <VStack spacing={{ base: 4, md: 8, lg: 8 }}>
                                <Heading
                                fontSize={{
                                    base: '4xl',
                                    md: '5xl',
                                }}>
                                    Get in Touch
                                </Heading>

                                <Stack spacing={{ base: 4, md: 8, lg: 20 }} p={5} direction={{ base: 'column', md: 'row' }}>
                                    <Stack align="center" justify="space-around" direction={{ base: 'row', md: 'column' }}>
                                        <Tooltip label={hasCopied ? 'Email Copied!' : 'Copy Email'} closeOnClick={false} hasArrow>
                                            <IconButton aria-label="email" variant="ghost" size="lg" fontSize="3xl" icon={<MdEmail />} _hover={{ bg: 'blue.500', color: useColorModeValue('white', 'gray.700'), }} onClick={onCopy} isRound />
                                        </Tooltip>

                                        <Link href="https://www.linkedin.com/in/hugo-sinprasith-1b5367199/" isExternal>
                                            <IconButton
                                                aria-label="linkedin"
                                                variant="ghost"
                                                size="lg"
                                                icon={<BsLinkedin size="28px" />}
                                                _hover={{
                                                    bg: 'blue.500',
                                                    color: useColorModeValue('white', 'gray.700'),
                                                }}
                                                isRound
                                            />
                                        </Link>

                                        <Link href="https://github.com/hugosinp" isExternal>
                                            <IconButton
                                                aria-label="github"
                                                variant="ghost"
                                                size="lg"
                                                fontSize="3xl"
                                                icon={<BsGithub />}
                                                _hover={{
                                                    bg: 'blue.500',
                                                    color: useColorModeValue('white', 'gray.700'),
                                                }}
                                                isRound
                                            />
                                        </Link>
                                    </Stack>

                                    <Box bg={useColorModeValue('white', 'gray.700')} borderRadius="lg" p={8} color={useColorModeValue('gray.700', 'whiteAlpha.900')} shadow="base">
                                        <VStack spacing={5}>
                                            <FormControl isRequired>
                                                <FormLabel>Name</FormLabel>

                                                <InputGroup>
                                                <InputLeftElement children={<BsPerson />} />
                                                <Input type="text" name="name" placeholder="Your Name" />
                                                </InputGroup>
                                            </FormControl>

                                            <FormControl isRequired>
                                                <FormLabel>Email</FormLabel>

                                                <InputGroup>
                                                <InputLeftElement children={<MdOutlineEmail />} />
                                                <Input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Your Email"
                                                />
                                                </InputGroup>
                                            </FormControl>

                                            <FormControl isRequired>
                                                <FormLabel>Message</FormLabel>

                                                <Textarea
                                                name="message"
                                                placeholder="Your Message"
                                                rows={6}
                                                resize="none"
                                                />
                                            </FormControl>

                                            <Button
                                                colorScheme="blue"
                                                bg="blue.400"
                                                color="white"
                                                _hover={{
                                                    bg: 'blue.500',
                                                }}
                                                isFullWidth>
                                                    Send Message
                                            </Button>
                                        </VStack>
                                    </Box>
                                </Stack>
                            </VStack>
                        </Box>
                    </Box>
                </Flex>

            </Flex>
        </Container>
    )
}

export default OContactSection