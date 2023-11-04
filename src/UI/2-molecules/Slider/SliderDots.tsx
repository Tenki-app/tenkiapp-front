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
	const isFirstElement = (index: number) => {
		if (index === 0) {
			return true;
		} else {
			return false;
		}
	};

	return (
		<div
			className={`w-[110px] bg-red-200 overflow-hidden ${
				containerStyles ?? ''
			}`}
		>
			<div className='flex w-full'>
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
