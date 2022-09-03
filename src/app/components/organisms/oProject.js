import React from 'react';

import { motion } from 'framer-motion';
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
	Button,
	Tag,
	VStack,
	HStack,
	Avatar,
	Image,
} from '@chakra-ui/react';

import swincaLogo from '../../static/img/swinca.png';
import genkirenderLogo from '../../static/img/genkirender.svg';
import watchelseLogo from '../../static/img/watchelse.png';

const OProject = ({ project }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<motion.div
			whileHover={{ scale: 1.1 }}
			whileTap={{
				scale: 0.8,
				borderRadius: '100%',
			}}
			initial={{ scale: 0 }}
			animate={{ scale: 1 }}
			transition={{
				type: 'spring',
				stiffness: 260,
				damping: 20,
			}}
		>
			<Center py={2} onClick={onOpen} cursor={'pointer'}>
				<Box
					maxW={'300px'}
					w={'300px'}
					h={'320px'}
					maxH={'320px'}
					bg={useColorModeValue('#D9C7BA', 'gray.900')}
					boxShadow={'md'}
					rounded={'lg'}
					p={6}
				>
					<Box h={'180px'} mt={-6} mx={-6} mb={6} pos={'relative'} align={'center'}>
						{project.lottie_link ? (
							<lottie-player
								src={project.lottie_link}
								background="transparent"
								speed="1"
								style={{ margin: 'auto', width: '150px', height: '200px' }}
								loop
								autoplay
							></lottie-player>
						) : project.image === 'swinca' ? (
							<Avatar size="2xl" name="swinca" src={swincaLogo} my={'10'} />
						) : project.image === 'genkirender' ? (
							<Image boxSize="200px" objectFit="fill" src={genkirenderLogo} alt="genkirender" />
						) : project.image === 'watchelse' ? (
							<Image boxSize="200px" objectFit="contain" src={watchelseLogo} alt="watchelse" />
						) : (
							''
						)}
					</Box>
					<Stack>
						<Heading color={useColorModeValue('gray.700', 'white')} fontSize={'2xl'} fontFamily={'body'}>
							{project.title}
						</Heading>
						<Text color={'gray.500'}>{project.head}</Text>
					</Stack>
				</Box>

				<Modal onClose={onClose} isOpen={isOpen} isCentered>
					<ModalOverlay />
					<ModalContent p={5} bg={useColorModeValue('#D9C7BA', 'gray.700')}>
						<ModalHeader>{project.title}</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<VStack>
								<Text>{project.description}</Text>
								<HStack>
									{project.tech.map((tech) => (
										<Tag key={tech.name} m={1} colorScheme="blue" textTransform={'uppercase'} letterSpacing={1.1}>
											{tech.name}
										</Tag>
									))}
								</HStack>
							</VStack>
						</ModalBody>
						<ModalFooter>
							<Stack mt={6} direction={'row'} spacing={4} align={'center'}>
								<Link href={project.link} rounded={'md'} fontWeight={'bold'} p={2} isExternal>
									More details
								</Link>
								{project.demo && (
									<Link href={project.demo} rounded={'md'} fontWeight={'bold'} p={2} isExternal>
										Demo
									</Link>
								)}
								<Button onClick={onClose} bg={useColorModeValue('#D9C7BA', 'gray.600')}>
									Close
								</Button>
							</Stack>
						</ModalFooter>
					</ModalContent>
				</Modal>
			</Center>
		</motion.div>
	);
};

export default OProject;
