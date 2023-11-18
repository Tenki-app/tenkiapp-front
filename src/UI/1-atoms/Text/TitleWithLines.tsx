import { Title } from './Title';

type TypeTitleWithLinesProps = {
	title: string;
};

const TitleWithLines = ({ title }: TypeTitleWithLinesProps) => {
	return (
		<div className='flex justify-between items-center gap-8'>
			<div className='h-[1px] w-[10%] bg-champagne-white' />
			<Title className='!text-champagne-white'>{title}</Title>
			<div className='h-[1px] w-[10%] bg-champagne-white' />
		</div>
	);
};

export default TitleWithLines;
