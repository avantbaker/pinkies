import Head from 'next/head';
import styles from '../styles/Home.module.css';
import styled from 'styled-components';
import media from '../lib/styles/media';

const Container = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	background: black;
`;

const Header = styled('div')`
	z-index: 3;
	display: flex;
	padding: 20px;
	position: absolute;
	width: 240px;

	${
		media.large`
			justify-content: center;
		`
	}
`;

const Sidebar = styled('div')`
	display: none;
	z-index: 20;
	width: 100vh;
	height: 240px;
	background: url('/images/pinkies_background.png');
	background-repeat: no-repeat;
	background-position: center right 120px;
	transform-origin: top left;
	position: absolute;
	left: 0;
	top: 100%;
	transform: rotate(-90deg);
	border-bottom: 1px solid white;

	${
		media.large`
			display: block;
		`
	}

`;

const Content = styled.div`
	width: 100%;
`
const Hero = styled.div`
	height: 100vh;
	width: 100%;
	position: relative;

	&::before {
		content: ' ';
		display: block;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		opacity: 0.3;
		background: url('/images/pascal-meier-1uVCTVSn-2o-unsplash\ Copy.png');
		background-repeat: no-repeat;
		background-size: cover;
	}

	&::after {
		content: ' ';
		display: block;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		opacity: 0.8;
		background: linear-gradient(transparent, #ff38b8);
		z-index: 10;
	}
`;

const HeroContentContainer = styled.div`
	height: 100vh;
	width: 100%;
	color: white;
	position: absolute !important;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	display: flex;
	align-items: center;

	${
		media.large`
			padding-left: 240px;
		`
	}
`;

const HeroContent = styled.div`
	height: 100%;
	min-height: 100vh;
	width: 100%;
	color: white;
	position: absolute !important;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	z-index: 100;
	display: flex;
	flex-direction: column;

	${
		media.large`
			padding-left: 240px;
		`
	}
`;

const HeroContentImg = styled.img`
	display: none;
	max-width: 100%;
	z-index: 9;
	${
		media.large`
			display: block;
		`
	}
`

const ContentTop = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 3;
	position: relative;
	img {
		max-height: 700px;
	}

	${
		media.large`
			justify-content: flex-start;
			padding: 40px;
		`
	}
`

const ContentBottom = styled.div`
	display: flex;
	flex: 1.5;
	flex-direction: column;
	text-align: center;
	max-width: 500px;
	width: 100%;
	margin: 0 auto;
	padding: 20px;
	justify-content: flex-end;
	${
		media.large`
			text-align: left;
			margin: 0;
			padding: 40px;
		`
	}
`

const InnerContent = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;

	${
		media.large`
			text-align: left;
		`
	}

	h4 {
		margin: 0;
		margin-bottom: 10px;
		text-transform: uppercase;
		z-index: 60;
		${
			media.large`
				font-size: 24px;
				line-height: 28px;
			`
		}
	}

	h1 {
		font-size: 70px;
		margin-bottom: 40px;
		color: transparent;
		-webkit-text-stroke-width: 3px;
  	-webkit-text-stroke-color: white;
		z-index: 60;
		width: 50%;

		${
			media.large`
				font-size: 120px;
				line-height: 110px;
				margin-bottom: 60px;
			`
		}
	}
`

const FormInput = styled.input`
	margin-bottom: 12px;
	padding: 14px 0;
	appearance: none;
	background: transparent;
	border: none;
	border-bottom: 2px solid white;
	color: white;
	font-size: 18px;
	text-align: center;

	&::placeholder {
		color: white;
	}

	${
		media.large`
			text-align: left;
		`
	}
`

const FormTitle = styled.h3`
	font-size: 22px;

	${
		media.large`
			font-size: 26px;
			line-height: 28px;
		`
	}
`

const FormButton = styled.button`
	padding: 12px;
	background: none;
	border: 2px solid white;
	color: white;
	font-size: 14px;
`
const RollinImage = styled.img`
	display: none;
	position: absolute;
	right: 0;
	${
		media.large`
			display: block;
		`
	}
	${
		media.xxlarge`
			right: 100px;
		`
	}
`;

export default function Home() {
	return (
		<Container>
			<Head>
				<title>Pinkies</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header>
				<img src="images/pinkies_logo.png" alt="Pinkies Logo" />
			</Header>
			<Sidebar></Sidebar>
			<Content>
				<Hero></Hero>
				<HeroContentContainer>
					<HeroContentImg
						src="images/pink_texture.png"
						alt="Pink texture"
					/>
				</HeroContentContainer>
				<HeroContent>
					<ContentTop>
						<InnerContent>
							<h1>Coming Soon</h1>
							<h4>All things pinkies. Love the</h4>
							<h4>Ouid, Now rock the gear.</h4>
						</InnerContent>
						<RollinImage src="images/rollin_pinkies.png" />
					</ContentTop>
					<ContentBottom>
						<FormTitle>Pinkies in your Inbox</FormTitle>
						<FormInput type="text" placeholder="enter email"/>
						<FormButton>Subscribe</FormButton>
					</ContentBottom>
				</HeroContent>
			</Content>
		</Container>
	);
}
