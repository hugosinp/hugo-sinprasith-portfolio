import React from 'react';

import { Container, Flex } from '@chakra-ui/react';

import OContactSection from '../organisms/oContactSection';

const ContactView = ({ id }) => {
	return (
		<Container maxW="container.xl" p={0} id={id}>
			<Flex height={{ base: 'auto', lg: 'auto' }} align={'center'}>
				<OContactSection />
			</Flex>
		</Container>
	);
};

export default ContactView;
