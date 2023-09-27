import { RefObject, useEffect, useRef } from 'react';

export const useGetDimensions = (ref: RefObject<HTMLDivElement>) => {
	const dimensions = useRef({ width: 0, height: 0 });

	useEffect(() => {
		dimensions.current.width = ref?.current?.offsetWidth ?? 0;
		dimensions.current.height = ref?.current?.offsetHeight ?? 0;

		// eslint-disable-next-line
	}, []);

	return dimensions.current;
};
