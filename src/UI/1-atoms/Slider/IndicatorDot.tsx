import { Button } from '../Button/Button';

type TypeIndicatorDotProps = {
	text: string;
	isActive?: boolean;
	indicatorStyles?: string;
	hasDotLines?: boolean;
};

const IndicatorDot = ({
	text,
	isActive,
	indicatorStyles,
	hasDotLines,
}: TypeIndicatorDotProps) => {
	const buttonActiveStyles = 'border-[3px] border-dark-blue w-[30px]';
	const buttonNormalStyles =
		'w-[20px] aspect-square bg-dark-blue text-champagne-white text-xs';
	const lineStyles = 'w-[15px] h-[3px] bg-dark-blue';

	return (
		<div className='w-fit flex items-center'>
			{hasDotLines && <div className={`${lineStyles}`} />}
			<Button
				className={`main-transition aspect-square origin-center rounded-full font-bold 
				${isActive ? buttonActiveStyles : buttonNormalStyles} 
				${indicatorStyles ?? ''}
			`}
			>
				{text}
			</Button>
		</div>
	);
};

export default IndicatorDot;
