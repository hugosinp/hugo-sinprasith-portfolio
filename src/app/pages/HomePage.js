import { useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import HomePageView from '../components/views/HomePageView';

const HomePage = () => {

	return (
		<div>
			<HomePageView />
			<div style={{ 
				display: useBreakpointValue({ base: 'none', lg: 'block' }),
				width: '150px', 
				height: '150px', 
				background: '#66a6ff',
				filter: 'blur(5.5rem)', 
				position: 'absolute', 
				top: '0%', 
				right: '0%', 
				borderRadius: '100%',
				overflowX: 'hidden',
				zIndex: 2}}>
					x
			</div>
			<div style={{ 
				display: useBreakpointValue({ base: 'block', lg: 'block' }),
				width: '300px', 
				height: '300px', 
				background: '#66a6ff',
				filter: 'blur(9rem)', 
				position: 'absolute', 
				top: useBreakpointValue({ base: '6.4%', lg: '12%' }), 
				left: useBreakpointValue({ base: '12%', lg: '-15%' }), 
				borderRadius: '100%', 
				overflowX: 'hidden',
				zIndex: useBreakpointValue({ base: 1, lg: 2 }) }}>
					x
			</div>
		</div>
	);
};

export default HomePage;
