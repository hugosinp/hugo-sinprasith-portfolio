import React from 'react';
import {Container, Flex, useBreakpointValue} from '@chakra-ui/react';
import OHeroSection from '../organisms/oHeroSection';

const HeroView = ({ id }) => {
	return (
		<div id={id} style={{  background: useBreakpointValue({ base: 'none', lg: 'radial-gradient(ellipse at bottom, #1A202C 0%, #090a0f 100%)' }) }}>
			<Container maxW="container.xl" p={0}>
				<Flex height={{ base: '100vh' }} align={'center'}>
					<OHeroSection />
				</Flex>
			</Container>
		</div>
	);
};

export default HeroView;
