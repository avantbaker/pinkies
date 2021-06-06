import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
// import FiraBold from '../public/fonts/FiraMono-Bold.ttf';
// import FiraMed from '../public/fonts/FiraMono-Medium.ttf';
// import FiraRegular from '../public/fonts/FiraMono-Regular.ttf';

export const theme = {
	breakpoints: [32, 48, 64],
	space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
	fontSizes: [12, 14, 16, 20, 24, 36, 48, 80, 96],
	fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
	fonts: {
		firaBold: 'FiraBold',
		firaMedium: 'FiraBold',
		firaRegular: 'FiraRegular',
	},
	lineHeights: {
		solid: 1,
		title: 1.25,
		copy: 1.5,
	},
	letterSpacings: {
		normal: 'normal',
		tracked: '0.1em',
		tight: '-0.05em',
		mega: '0.25em',
	},
	borders: [
		0,
		'1px solid',
		'2px solid',
		'4px solid',
		'8px solid',
		'16px solid',
		'32px solid',
	],
	radii: [0, 2, 4, 16, 9999, '100%'],
	width: [16, 32, 64, 128, 256],
	heights: [16, 32, 64, 128, 256],
	maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
	colors: {
		black: '#000',
		white: '#fff',
	},
};

const GlobalStyle = createGlobalStyle`
	${normalize}
	html {
		box-sizing: border-box;
	}
	
	*,
	*:before,
	*:after {
		box-sizing: inherit;
	}
  @font-face {
    font-family: "FiraBold";
    src: url() format('truetype');
  }
  @font-face {
    font-family: "FiraMedium";
    src: url() format('truetype');
  }
  @font-face {
    font-family: "FiraRegular";
    src: url() format('truetype');
  }
  html {
		font-family: "FiraRegular";
    font-size: 16px;
  }
`;

export default GlobalStyle;
