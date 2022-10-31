import { extendTheme } from '@chakra-ui/react';

const styles = {
	global: (props) => ({
		html: {
			scrollBehavior: 'smooth',
		},
		body: {
			bg: 'radial-gradient(ellipse, #1A202C 0%, #090a0f 100%)',
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
