import { css } from 'styled-components';

export const sizes = {
	small: 320,
	medium: 640,
	mlarge: 832,
	large: 1024,
	xlarge: 1200,
	xxlarge: 1440,
};

const minWidthQuery = (pixels: number) => `only screen and (min-width: ${pixels}px)`;
const maxWidthQuery = (pixels: number) => `only screen and (max-width: ${pixels}px)`;
const minHeightQuery = (pixels: number) => `only screen and (min-height: ${pixels}px)`;
const maxHeightQuery = (pixels: number) => `only screen and (max-height: ${pixels}px)`;

export const min =
	(pixels: number) =>
	(first: any, ...args: any) =>
		css`
			@media ${minWidthQuery(pixels)} {
				${css(first, ...args)};
			}
		`;

const max =
	(pixels: number) =>
	(first: any, ...args: any) =>
		css`
			@media ${maxWidthQuery(pixels)} {
				${css(first, ...args)};
			}
		`;

const heightMin =
	(pixels: number) =>
	(first: any, ...args: any) =>
		css`
			@media ${minHeightQuery(pixels)} {
				${css(first, ...args)};
			}
		`;

const heightMax =
	(pixels: number) =>
	(first: any, ...args: any) =>
		css`
			@media ${maxHeightQuery(pixels)} {
				${css(first, ...args)};
			}
		`;

export const queries = {
	mobile: maxWidthQuery(sizes.medium - 1),
	tablet: maxWidthQuery(sizes.mlarge - 1),
	upToLarge: maxWidthQuery(sizes.large - 1),
	small: minWidthQuery(sizes.small),
	medium: minWidthQuery(sizes.medium),
	mlarge: minWidthQuery(sizes.mlarge),
	large: minWidthQuery(sizes.large),
	xlarge: minWidthQuery(sizes.xlarge),
	xxlarge: minWidthQuery(sizes.xxlarge),
	prefersReducedMotion: '(prefers-reduced-motion: reduce)',
};

export default {
	min,
	max,
	heightMin,
	heightMax,
	mobile: max(sizes.medium - 1),
	tablet: max(sizes.mlarge - 1),
	upToLarge: max(sizes.large - 1),
	small: min(sizes.small),
	medium: min(sizes.medium),
	mlarge: min(sizes.mlarge),
	large: min(sizes.large),
	xlarge: min(sizes.xlarge),
	xxlarge: min(sizes.xxlarge),
};
