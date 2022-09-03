import React from 'react';

import { Container, Flex } from '@chakra-ui/react';

import OBioSection from '../organisms/oBioSection';

const BioView = ({ id, fadeIn }) => {
	return (
		<Container maxW="container.xl" p={0} id={id}>
			<Flex height={{ base: 'auto', lg: '100vh' }} align={'center'}>
				<OBioSection fadeIn={fadeIn} />
			</Flex>
		</Container>
	);
};

export default BioView;
