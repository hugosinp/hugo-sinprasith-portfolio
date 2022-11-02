import {useBreakpointValue} from '@chakra-ui/react';
import React from 'react';
import HomePageView from '../components/views/HomePageView';

const HomePage = () => {

	return (
		<div>
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
