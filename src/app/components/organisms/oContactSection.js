import React, { useState } from 'react'
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
    Container,
    useToast,
    Select
} from '@chakra-ui/react';
import { BsGithub, BsLinkedin, BsPerson } from 'react-icons/bs';
import { MdEmail, MdOutlineEmail } from 'react-icons/md';

import emailjs from 'emailjs-com';

const OContactSection = () => {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [inquiry, setInquiry] = useState('')
    const [message, setMessage] = useState('')

    const [loading, setLoading] = useState(false)

    const toast = useToast()

    const { hasCopied, onCopy } = useClipboard('hugo.sinprasith@gmail.com');

    const sendEmail = (name, email, inquiry, message) => {

        setLoading(true)
        emailjs.send('service_2tt70n9', 'template_pqraf6b', {
            name: name,
            email: email,
            inquiry: inquiry,
            message: message,
        }, 'user_OTQoaChpT6sgokhhmzCe0')
        .then((result) => {
            setLoading(false)
            return (
                toast({
                        title: 'Message sent !',
                        description: "I'll answer you as possible ! 🚀",
                        status: 'success',
                        duration: 5000,
                        isClosable: true,
                })
            )
                                    
        }, (error) => {
            setLoading(false)
            return (
                toast({
                    title: 'Oops there was an error...',
                    description: "You may try again later or contact me directly via email or social medias !",
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                })
            )
        });
    }

    return (
        <Container maxW={'4xl'} py={{ base: 35, md: 30 }} centerContent>
            <Flex h={{ base: "auto" }} direction={{ base: "column" }} align={'center'}>

                <VStack w={'full'} spacing={{ base: 4, md: 8, lg: 8 }}>
                    <Heading fontSize={{ base: '4xl', md: '5xl', }}>
                        Let's talk !
                    </Heading>

                    <Heading>
                        Feel free to contact me 📫
                    </Heading>

                    <Stack w={'full'} spacing={{ base: 4, md: 8, lg: 20 }} p={5} direction={{ base: 'column', md: 'row' }}>
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

                        <Box w={'full'} bg={useColorModeValue('white', 'gray.700')} borderRadius="lg" p={8} color={useColorModeValue('gray.700', 'whiteAlpha.900')} shadow="base">
                            <VStack spacing={5}>
                                
                                <FormControl onChange={(e) => setName(e.target.value)} isRequired>
                                    <FormLabel>Name</FormLabel>
                                    <InputGroup>
                                        <InputLeftElement zIndex={0} children={<BsPerson />} />
                                        <Input type="text" name="name" placeholder="Your Name" />
                                    </InputGroup>
                                </FormControl>

                                <FormControl onChange={(e) => setEmail(e.target.value)} isRequired>
                                    <FormLabel>Email</FormLabel>
                                    <InputGroup>
                                        <InputLeftElement zIndex={0} children={<MdOutlineEmail />} />
                                        <Input
                                            type="email"
                                            name="email"
                                            placeholder="Your Email"
                                            zIndex={0}
                                        />
                                    </InputGroup>
                                    
                                </FormControl>

                                <FormControl onChange={(e) => setInquiry(e.target.value)} isRequired>
                                    <FormLabel>Type of inquiry</FormLabel>
                                    <Select id='inquiry'>
                                        <option>Business</option>
                                        <option>Collaboration</option>
                                        <option>Other</option>
                                    </Select>
                                </FormControl>

                                <FormControl onChange={(e) => setMessage(e.target.value)} isRequired>
                                    <FormLabel>Message</FormLabel>
                                    <Textarea
                                        name="message"
                                        placeholder="Your Message"
                                        rows={6}
                                        resize="none"
                                    />
                                </FormControl>
                                {
                                    loading ?
                                        <Button
                                            colorScheme="blue"
                                            bg="blue.400"
                                            color="white"
                                            _hover={{
                                                bg: 'blue.500',
                                            }}
                                            isLoading
                                            loadingText='Submitting'
                                            isFullWidth>
                                                Send Message
                                        </Button>
                                    :
                                        <Button
                                            colorScheme="blue"
                                            bg="blue.400"
                                            color="white"
                                            _hover={{
                                                bg: 'blue.500',
                                            }}
                                            onClick={() => {
                                                sendEmail(name, email, inquiry, message)
                                            }}
                                            isFullWidth>
                                                Send Message
                                        </Button>
                                }
                                
                            </VStack>
                        </Box>
                    </Stack>
                </VStack>

            </Flex>
        </Container>
    )
}

export default OContactSection