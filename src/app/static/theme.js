import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
	global: (props) => ({
		html: {
			scrollBehavior: 'smooth',
		},
		body: {
			bg: mode('radial-gradient(ellipse, #1A202C 0%, #090a0f 100%)', 'radial-gradient(ellipse, #1A202C 0%, #090a0f 100%)')(props),
		},
	}),
};

const fonts = {
	heading: 'Poppins',
	body: 'Poppins',
};

const config = {
	initialColorMode: 'dark',
	useSystemColorMode: false,
};

const theme = extendTheme({ config, styles, fonts });
export default theme;
