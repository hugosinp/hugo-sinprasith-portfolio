import React from 'react';

import {Box, Heading, Container, Text, Stack, Flex} from '@chakra-ui/react';

const OHeroSection = () => {
	return (
		<Container maxW={'4xl'} py={{ base: 30, lg: 40 }} centerContent zIndex={2}>
			<Flex h={{ base: 'auto' }} pt={{ base: 0, lg: 20}} direction={{ base: 'column', lg: 'column' }} align={'center'}>
				<Stack as={Box} textAlign={{ base: 'center', lg: 'center' }}>
					<Heading fontWeight={'bold'} fontSize={{ base: '4xl', sm: '4xl', md: '6xl' }} lineHeight={'110%'}>
						Hugo Sinprasith
					</Heading>
					<Text fontSize={'xl'} as={'span'} color={'blue.300'}>
						Software Engineer based in Paris.
					</Text>
				</Stack>
				<Stack mt={{ base: 8 }} width={'65%'}>
					<lottie-player
						src="https://assets1.lottiefiles.com/packages/lf20_bufblleg.json"
						background="transparent"
						speed="1"
						loop
						autoplay
					></lottie-player>
				</Stack>
			</Flex>
		</Container>
	);
};

export default OHeroSection;
