import React from 'react';
import {Container, Flex, useBreakpointValue} from '@chakra-ui/react';
import OHeroSection from '../organisms/oHeroSection';

const HeroView = ({ id }) => {
	return (
		<div id={id} style={{  background: useBreakpointValue({ base: 'none', lg: 'radial-gradient(ellipse at bottom, #1A202C 0%, #090a0f 100%)' }) }}>
			<Container maxW="container.xl" p={0}>
				<Flex height={{ base: '100vh' }} align={'center'}>
					<OHeroSection />
					<div style={{
						display: useBreakpointValue({ base: 'block', lg: 'none' }),
						width: '300px',
						height: '200px',
						background: '#66a6ff',
						filter: 'blur(9rem)',
						position: 'absolute',
						top: useBreakpointValue({ base: '6.8%' }),
						left: useBreakpointValue({ base: '12%' }),
						borderRadius: '100%',
						overflowX: 'hidden',
						zIndex: useBreakpointValue({ base: -1 }) }}>
					</div>
				</Flex>
			</Container>
		</div>
	);
};

export default HeroView;
