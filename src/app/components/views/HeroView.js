import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

import {Container, Flex, useBreakpointValue} from '@chakra-ui/react';

import OHeroSection from '../organisms/oHeroSection';

const HeroView = ({ id, fadeIn }) => {
	const { ref, inView } = useInView({ threshold: 0.1 });
	const animation = useAnimation();

	useEffect(() => {
		fadeIn(animation, inView);
	}, [fadeIn, animation, inView]);

	return (
		<div id={id} style={{  background: useBreakpointValue({ base: '', lg: 'radial-gradient(ellipse at bottom, #1A202C 0%, #090a0f 100%)' }) }}>
			<motion.div animate={animation}>
				<Container maxW="container.xl" p={0} ref={ref}>
					<Flex height={{ base: '100vh' }} align={'center'}>
						<OHeroSection />
					</Flex>
				</Container>
			</motion.div>
		</div>
	);
};

export default HeroView;
