import React from 'react';
import { Container, Flex } from '@chakra-ui/react';

import OEntrepriseSection from '../organisms/oEntrepriseSection';

const EntrepriseView = ({ id }) => {
	return (
		<Container maxW="container.xl" p={0} id={id}>
			<Flex height={{ base: 'auto', lg: '100vh' }} align={'center'}>
				<OEntrepriseSection />
			</Flex>
		</Container>
	);
};

export default EntrepriseView;
