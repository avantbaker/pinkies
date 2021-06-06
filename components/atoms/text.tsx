import styled from 'styled-components';

const fontFamilies: { bold: string; regular: string } = {
	bold: 'FiraBold',
	regular: 'FiraRegular',
};

import {
	borderRadius,
	color,
	fontFamily,
	fontSize,
	fontStyle,
	fontWeight,
	letterSpacing,
	lineHeight,
	size,
	space,
	textAlign,
	textStyle,
	system,
} from 'styled-system';

const textTransform = system({
	textTransform: {
		property: 'textTransform',
		scale: 'textTransforms',
	},
});

const CustomStyledSystemComponent = styled.div`
	${space}
	${fontSize}
  ${fontStyle}
  ${size}
  ${color}
  ${textStyle}
  ${letterSpacing}
  ${fontFamily}
  ${fontWeight}
  ${borderRadius}
  ${lineHeight}
  ${textAlign}
	${textTransform}
`;

export const typographyStyles = {
	HeadingBold: {
		fontSize: [46, 56, 90],
		lineHeight: ['52px', '62px', '98px'],
		margin: 0,
		fontFamily: fontFamilies.bold,
		as: 'h1',
	},
	HeadingRegular: {
		fontSize: [46, 56, 90],
		lineHeight: ['52px', '62px', '98px'],
		fontFamily: fontFamilies.regular,
		margin: 0,
		as: 'h1',
	},
	SubheadBold: {
		fontSize: [24, 28, 30],
		margin: 0,
		lineHeight: ['30px', '34px', '36px'],
		fontFamily: fontFamilies.bold,
		as: 'h2',
	},
	SubheadRegular: {
		margin: 0,
		fontSize: [24, 28, 30],
		lineHeight: ['30px', '34px', '36px'],
		fontFamily: fontFamilies.regular,
		as: 'h2',
	},
	BodyBold: {
		margin: 0,
		fontSize: [14, 15, 16],
		lineHeight: ['20px', '21px', '22px'],
		fontFamily: fontFamilies.bold,
		as: 'p',
	},
	BodyRegular: {
		margin: 0,
		fontSize: [14, 15, 16],
		lineHeight: ['20px', '21px', '22px'],
		fontFamily: fontFamilies.regular,
		as: 'p',
	},
};

const createComponent = (textStyle, displayName) => {
	const component = (props) => (
		<CustomStyledSystemComponent {...textStyle} {...props}>
			{props.children}
		</CustomStyledSystemComponent>
	);
	component.displayName = displayName;
	return component;
};

const Typography = {
	HeadingBold: createComponent(typographyStyles.HeadingBold, 'HeadingBold'),
	Heading: createComponent(typographyStyles.HeadingRegular, 'Heading'),
	SubheadBold: createComponent(typographyStyles.SubheadBold, 'SubheadBold'),
	Subhead: createComponent(typographyStyles.SubheadRegular, 'Subhead'),
	TextBold: createComponent(typographyStyles.BodyBold, 'BodyBold'),
	Text: createComponent(typographyStyles.BodyRegular, 'Body'),
};

export default Typography;
