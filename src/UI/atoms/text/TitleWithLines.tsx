import { Title } from './Title';

type TypeTitleWithLinesProps = {
	title: string;
	colorVariation?: 'white' | 'dark-blue';
	designVariation?: 'center' | 'left';
};

const TitleWithLines = ({
	title,
	colorVariation,
	designVariation = 'center',
}: TypeTitleWithLinesProps) => {
	let containerStyles = '';
	let lineStyles = 'h-[2px]';
	let titleStyles = '';
	let leftLineStyle = '';
	let rightLineStyle = '';

	if (colorVariation === 'white') {
		lineStyles += ' !bg-champagne-white';
		titleStyles += ' !text-champagne-white';
	}
	if (colorVariation === 'dark-blue') {
		lineStyles += ' !bg-dark-blue';
		titleStyles += ' !text-dark-blue';
	}
	if (designVariation === 'center') {
		containerStyles += ' flex justify-between items-center w-full gap-8';
		lineStyles += ' w-[10%] h-[2px]';
	}
	if (designVariation === 'left') {
		containerStyles += ' flex justify-start items-center w-full gap-6';
		leftLineStyle += ' w-[10%]';
		rightLineStyle += ' w-[40%]';
	}

	return (
		<div className={`${containerStyles}`}>
			<div className={`${lineStyles} ${leftLineStyle}`} />
			<Title className={`${titleStyles}`}>{title}</Title>
			<div className={`${lineStyles} ${rightLineStyle}`} />
		</div>
	);
};

export default TitleWithLines;
