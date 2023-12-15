import IndicatorDot from '@/UI/1-atoms/slider/IndicatorDot';

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
	const isFirstElement = (index: number) => {
		if (index === 0) {
			return true;
		} else {
			return false;
		}
	};

	return (
		<div className={`w-auto overflow-hidden ${containerStyles ?? ''}`}>
			<div className='flex w-aut overflow-x-auto overflow-y-hidden'>
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
		</div>
	);
};

export default SliderDots;
