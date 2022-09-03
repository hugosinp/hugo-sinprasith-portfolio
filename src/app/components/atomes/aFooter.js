import React from 'react';
import { Box, Container, Link, Stack, Heading, Text, IconButton, useColorModeValue } from '@chakra-ui/react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const AFooter = () => {
	return (
		<Box bg={useColorModeValue('#D9C7BA', 'gray.900')} color={useColorModeValue('gray.700', 'gray.200')}>
			<Container as={Stack} maxW={'6xl'} py={4} spacing={4} justify={'center'} align={'center'}>
				<Stack direction={'column'} alignItems="center" py={10} spacing={6}>
					<Stack direction={'column'} alignItems="center">
						<Heading>Hugo Sinprasith</Heading>
						<Text fontStyle={'italic'} color={'gray.500'}>
							Powered by ReactJS and a lot of passion
						</Text>
					</Stack>
					<Stack direction={'row'} spacing={6}>
						<Link href="https://github.com/hugosinp" isExternal>
							<IconButton
								aria-label="github"
								variant="ghost"
								size="lg"
								icon={<BsGithub size={40} />}
								_hover={{
									bg: 'blue.500',
									color: useColorModeValue('white', 'gray.700'),
								}}
								isRound
							/>
						</Link>
						<Link href="https://www.linkedin.com/in/hugo-sinprasith-1b5367199/" isExternal>
							<IconButton
								aria-label="linkedin"
								variant="ghost"
								size="lg"
								icon={<BsLinkedin size={40} />}
								_hover={{
									bg: 'blue.500',
									color: useColorModeValue('white', 'gray.700'),
								}}
							/>
						</Link>
					</Stack>
				</Stack>
			</Container>

			<Box borderTopWidth={1} borderStyle={'solid'} borderColor={useColorModeValue('gray.200', 'gray.700')}>
				<Container
					as={Stack}
					maxW={'6xl'}
					py={4}
					direction={{ base: 'column', md: 'row' }}
					spacing={4}
					justify={{ base: 'center', md: 'center' }}
					align={{ base: 'center', md: 'center' }}
				>
					<Text>© 2022 Hugo Sinprasith. All rights reserved</Text>
				</Container>
			</Box>
		</Box>
	);
};

export default AFooter;
