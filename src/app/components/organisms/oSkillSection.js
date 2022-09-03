import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

import { Flex, Container, Heading, Text, Stack, Image, HStack, VStack, Box, List, ListItem } from '@chakra-ui/react';

import reactLogo from '../../static/img/react.svg';
import nextjsLogo from '../../static/img/nextjs.svg';
import reduxLogo from '../../static/img/redux.svg';

import nestjsLogo from '../../static/img/nestjs.svg';
import tsLogo from '../../static/img/typescript.svg';
import graphqlLogo from '../../static/img/graphql.svg';

import mongodb from '../../static/img/mongodb.svg';
import firebaseLogo from '../../static/img/firebase.svg';

const OSkillSection = ({ fadeIn }) => {
	const { ref, inView } = useInView({ threshold: 0.4 });
	const animation = useAnimation();

	useEffect(() => {
		fadeIn(animation, inView);
	}, [fadeIn, animation, inView]);

	return (
		<Container maxW={'4xl'} py={{ base: 35, md: 30 }}>
			<Flex h={{ base: 'auto' }} direction={{ base: 'column' }} align={'center'}>
				<Stack py={39}>
					<Heading fontStyle={'italic'} align={'center'}>
						Learn, experience and
						<Text fontWeight={'extrabold'} as={'span'} bgClip="text" bgGradient="linear(to-r, #4DB8FF, #19A3FF)">
							{' '}
							repeat.
						</Text>
					</Heading>
				</Stack>

				<Stack direction={{ base: 'column', lg: 'row' }} p={5} spacing={{ base: 10, lg: 20 }}>
					<VStack spacing={10}>
						<Heading align={'center'}>Skills & Tech Stack</Heading>
						<List spacing={4} align={'justify'}>
							<ListItem>
								🌱 Front-end dev, back-end dev, REST API building, database management, I've worked on many web & mobile apps from
								conception to deployment.
							</ListItem>
							<ListItem>⭐ TypeScript and Java are my go to programming languages !</ListItem>
							<ListItem>🔭 I remain aware of the newest technologies on the market and do not miss an occasion to learn more.</ListItem>
						</List>
					</VStack>

					<VStack spacing={2} align={'center'}>
						<HStack w={80} justify={'center'}>
							<motion.div animate={animation} whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.1, rotate: 360 }}>
								<Box ref={ref} cursor={'grab'} borderRadius={'50%'}>
									<Image boxSize="70px" objectFit="fill" src={nextjsLogo} alt="Nextjs" />
								</Box>
							</motion.div>
							<motion.div
								animate={{ rotate: 360 }}
								transition={{
									duration: 3,
									repeat: Infinity,
									repeatType: 'mirror',
								}}
							>
								<Box ref={ref} cursor={'grab'} borderRadius={'50%'}>
									<Image boxSize="80px" objectFit="cover" src={reactLogo} alt="React" />
								</Box>
							</motion.div>
							<motion.div animate={animation} whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.1, rotate: 360 }}>
								<Box ref={ref} cursor={'grab'} borderRadius={'50%'}>
									<Image boxSize="70px" objectFit="fill" src={reduxLogo} alt="Redux" />
								</Box>
							</motion.div>
						</HStack>
						<HStack justify={'center'}>
							<motion.div animate={animation} whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.1, rotate: 360 }}>
								<Box ref={ref} cursor={'grab'} borderRadius={'50%'}>
									<Image boxSize="70px" objectFit="fill" src={nestjsLogo} alt="NestJS" />
								</Box>
							</motion.div>
							<motion.div animate={animation} whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.1, rotate: 360 }}>
								<Box ref={ref} cursor={'grab'} borderRadius={'50%'}>
									<Image boxSize="70px" objectFit="fill" src={tsLogo} alt="Typecript" />
								</Box>
							</motion.div>
							<motion.div animate={animation} whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.1, rotate: 360 }}>
								<Box ref={ref} cursor={'grab'} borderRadius={'50%'}>
									<Image boxSize="70px" objectFit="fill" src={graphqlLogo} alt="GraphQl" />
								</Box>
							</motion.div>
						</HStack>
						<HStack justify={'center'}>
							<motion.div animate={animation} whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.1, rotate: 360 }}>
								<Box ref={ref} cursor={'grab'} borderRadius={'50%'}>
									<Image boxSize="80px" objectFit="fill" src={mongodb} alt="MongoDB" />
								</Box>
							</motion.div>
							<motion.div animate={animation} whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.1, rotate: 360 }}>
								<Box ref={ref} cursor={'grab'} borderRadius={'50%'}>
									<Image boxSize="80px" objectFit="fill" src={firebaseLogo} alt="Firebase" />
								</Box>
							</motion.div>
						</HStack>
					</VStack>
				</Stack>
			</Flex>
		</Container>
	);
};

export default OSkillSection;
