import { useEffect, useRef } from 'react';

import IndicatorDot from '@/UI/1-atoms/Slider/IndicatorDot';

import type { RefObject } from 'react';

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
	const dotsContentRef: RefObject<HTMLDivElement> = useRef(null);
	const dotsWrapperRef: RefObject<HTMLDivElement> = useRef(null);

	const isFirstElement = (index: number) => {
		if (index === 0) {
			return true;
		} else {
			return false;
		}
	};

	useEffect(() => {
		if (dotsWrapperRef.current && dotsContentRef.current) {
			const containerWidth = dotsWrapperRef.current.offsetWidth;
			const contentWidth = dotsContentRef.current.offsetWidth;
			const scrollPosition = (contentWidth - containerWidth) / 2;
			dotsWrapperRef.current.scrollLeft = scrollPosition;
		}
	}, [activeOption]);

	return (
		<div
			ref={dotsWrapperRef}
			className={`w-auto overflow-hidden ${containerStyles ?? ''}`}
		>
			<div
				ref={dotsContentRef}
				className='flex w-aut overflow-x-auto overflow-y-hidden'
			>
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
