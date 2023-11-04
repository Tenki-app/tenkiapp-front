import IndicatorDot from '@/UI/1-atoms/Slider/IndicatorDot';

type TypeSliderDotsProps = {
	dotOptions: Array<string>;
	activeOption: string;
	containerStyles?: string;
};

const SliderDots = ({
	dotOptions,
	activeOption,
	containerStyles,
}: TypeSliderDotsProps) => {
	const dotLineStyles = `before:content-[""] before:h-[2px] before:w-[10px] before:bg-dark-blue before:block`;

	const isFirstElement = (index: number) => {
		if (index === 0) {
			return true;
		} else {
			return false;
		}
	};

	return (
		<div className={`w-[140px] px-12 flex ${containerStyles ?? ''}`}>
			{dotOptions.map((singleDot, index) => (
				<IndicatorDot
					key={index}
					text={singleDot}
					isActive={singleDot === activeOption}
					hasDotLines={!isFirstElement(index)}
					indicatorStyles={``}
				/>
			))}
		</div>
	);
};

export default SliderDots;
