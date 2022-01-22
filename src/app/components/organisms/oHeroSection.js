import React from 'react'
import {
    Box,
    Heading,
    Container,
    Text,
    Stack,
    Flex
} from '@chakra-ui/react';
  
const OHeroSection = () => {
    return (
        <Container maxW={'4xl'} py={{ base: 30, md: 40 }} centerContent>
            <Flex h={{ base: "auto" }} direction={{ base: "column", lg: "row"}} align={'center'}>
                <Stack as={Box} textAlign={{ base: 'center', lg: 'start' }}>
                    <Heading fontWeight={'bold'} fontSize={{ base: '4xl', sm: '4xl', md: '6xl' }} lineHeight={'110%'}>
                        Hugo Sinprasith
                    </Heading>
                    <Text fontSize={'xl'} as={'span'} color={'blue.300'}>
                        <Text as="span" fontWeight={'bold'}>Full-stack Developer</Text> based in Paris.
                    </Text>
                </Stack>
                <Stack mt={{ base: 10 }}>
                    <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_bufblleg.json" background="transparent" speed="1" loop autoplay></lottie-player>
                </Stack>
            </Flex>
        </Container>
    )
}

export default OHeroSection