import React from 'react';
import { Flex, Container, Heading, Text, Stack, Link, IconButton, useColorModeValue, useBreakpointValue, SimpleGrid } from '@chakra-ui/react';
import { BsGithub } from 'react-icons/bs';

import OProject from '../organisms/oProject';
import { usProjects } from '../../static/data';

const OProjectSection = () => {
	const gridDisplay = useBreakpointValue({ base: 'none', lg: 'grid' });
	const stackDisplay = useBreakpointValue({ base: 'flex', lg: 'none' });

	return (
		<Container maxW={'5xl'} py={{ base: 35, md: 30 }}>
			<Flex h={{ base: 'auto' }} direction={{ base: 'column' }} align={'center'}>
				<Stack p={5} align={'center'}>
					<Heading>
						Featured{' '}
						<Text as={'span'} fontWeight={'extrabold'} bgClip="text" bgGradient="linear(to-l, #4DB8FF, #19A3FF)">
							Projects
						</Text>
					</Heading>
					<Heading size="md" color={'gray.400'}>
						Follow my GitHub for more !
					</Heading>
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
				</Stack>

				<SimpleGrid pt={5} display={gridDisplay} columns={3} spacing="40px">
					{usProjects.map((project) => (
						<OProject key={project.id} project={project} />
					))}
				</SimpleGrid>

				<Stack
					display={stackDisplay}
					direction={'row'}
					maxWidth={{ base: '100%', lg: 'none' }}
					overflowY={'hidden'}
					overflowX={{ base: 'auto', lg: 'hidden' }}
					p={5}
					spacing={5}
				>
					{usProjects.map((project) => (
						<OProject key={project.id} project={project} />
					))}
				</Stack>
			</Flex>
		</Container>
	);
};

export default OProjectSection;
