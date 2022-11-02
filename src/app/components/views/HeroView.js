import React from 'react';
import {Container, Flex} from '@chakra-ui/react';
import OHeroSection from '../organisms/oHeroSection';

const HeroView = ({ id }) => {
	return (
		<div id={id}>
			<Container maxW="container.xl" p={0}>
				<Flex height={{ base: '100vh' }} align={'center'}>
					<OHeroSection />
				</Flex>
			</Container>
		</div>
	);
};

export default HeroView;
