import React from 'react';

import { Container, Flex } from '@chakra-ui/react';

import OBioSection from '../organisms/oBioSection';

const BioView = ({ id, fadeIn }) => {
	return (
		<div>
			<Container maxW="container.xl" p={0} id={id}>
				<Flex height={{ base: 'auto', lg: 'auto' }} align={'center'}>
					<OBioSection fadeIn={fadeIn} />
				</Flex>
			</Container>
		</div>
	);
};

export default BioView;
