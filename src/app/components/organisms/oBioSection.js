import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

import {
	Flex,
	VStack,
	Container,
	Heading,
	Text,
	Stack,
	Badge,
	useColorModeValue,
	Box,
	Center,
	Avatar,
} from '@chakra-ui/react';

import me from '../../static/img/me.png';

const OBioSection = ({ fadeIn }) => {
	const { ref, inView } = useInView({ threshold: 0.4 });
	const animation = useAnimation();

	useEffect(() => {
		fadeIn(animation, inView);
	}, [fadeIn, animation, inView]);

	return (
		<Container maxW={'4xl'} py={{ base: 35, lg: 0 }} pt={{ lg: 36 }}>
			<Flex h={{ base: 'auto', lg: 'auto' }} direction={{ base: 'column', lg: 'row' }} align={'center'}>
				<VStack p={5}>
					<motion.div animate={animation}>
						<Center py={6} ref={ref}>
							<Box
								maxW={'320px'}
								w={'full'}
								bg={useColorModeValue('#D9C7BA', 'gray.900')}
								boxShadow={'md'}
								rounded={'xl'}
								p={6}
								textAlign={'center'}
							>
								<Avatar size="2xl" src={me} alt={'Hugo Sinprasith'} mb={4} pos={'relative'} css={{ border: '2px solid grey' }} />
								<Stack>
									<Heading fontSize={'2xl'} fontFamily={'body'}>
										Hugo Sinprasith
									</Heading>
									<Text fontWeight={600} color={'gray.500'} fontStyle={'italic'} mb={4}>
										Freelance Software Engineer
									</Text>
								</Stack>

								<Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
									<Badge px={2} py={1} colorScheme={'blue'} borderRadius={'md'} fontWeight={'400'}>
										#typescript
									</Badge>
									<Badge px={2} py={1} colorScheme={'blue'} borderRadius={'md'} fontWeight={'400'}>
										#java
									</Badge>
									<Badge px={2} py={1} colorScheme={'blue'} borderRadius={'md'} fontWeight={'400'}>
										#python
									</Badge>
								</Stack>
							</Box>
						</Center>
					</motion.div>
				</VStack>
				<VStack p={{ base: 5, lg: 20 }}>
					<Heading>About me 🚀</Heading>
					<Text align={'justify'}>
						Hi I'm Hugo, Computer Science Enthusiast.
						<br />
						I am here to bring a high level of smooth, intuitive interaction and reliability to your software projects. My portfolio is a testament to my expertise.
						<br />
						<br />
						I embrace complex challenges and turn them into innovative digital realities. If you envisage a project that requires analytical- & technical skill, and real commitment, let's connect and engineer your idea into a special digital experience.
					</Text>
				</VStack>
			</Flex>
		</Container>
	);
};

export default OBioSection;
