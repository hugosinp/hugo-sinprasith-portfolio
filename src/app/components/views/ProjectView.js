import React from 'react';

import { Container, Flex } from '@chakra-ui/react';

import OProjectSection from '../organisms/oProjectSection';

const ProjectView = ({ id }) => {
	return (
		<div id={id}>
			<Container maxW="container.xl" p={0} id={id}>
				<Flex height={{ base: 'auto', lg: 'auto' }} align={'center'}>
					<OProjectSection />
				</Flex>
			</Container>
		</div>
	);
};

export default ProjectView;
