import {useBreakpointValue} from '@chakra-ui/react';
import React from 'react';
import HomePageView from '../components/views/HomePageView';

const HomePage = () => {

	return (
		<div style={{ overflow: 'hidden' }}>
			<div style={{
				display: useBreakpointValue({ base: 'block', lg: 'none' }),
				width: '300px',
				height: '200px',
				background: '#66a6ff',
				filter: 'blur(9rem)',
				position: 'absolute',
				top: useBreakpointValue({ base: '6.4%' }),
				left: useBreakpointValue({ base: '12%' }),
				borderRadius: '100%',
				overflowX: 'hidden',
				zIndex: useBreakpointValue({ base: -1 }) }}>
			</div>
			<div className={'night'} style={{ display: useBreakpointValue({ base: 'none', lg: 'block' }) }}>
				<div className={'shooting_star'}></div>
				<div className={'shooting_star'}></div>
				<div className={'shooting_star'}></div>
				<div className={'shooting_star'}></div>
				<div className={'shooting_star'}></div>
				<div className={'shooting_star'}></div>
				<div className={'shooting_star'}></div>
			</div>
			<HomePageView />
			<div className={'night2'} style={{ display: useBreakpointValue({ base: 'none', lg: 'block' }) }}>
				<div className={'shooting_star2'}></div>
				<div className={'shooting_star2'}></div>
				<div className={'shooting_star2'}></div>
				<div className={'shooting_star2'}></div>
				<div className={'shooting_star2'}></div>
				<div className={'shooting_star2'}></div>
			</div>
		</div>
	);
};

export default HomePage;
