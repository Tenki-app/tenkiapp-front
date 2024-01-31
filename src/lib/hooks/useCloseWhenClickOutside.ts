import { useEffect } from 'react';

type Props = {
	showElement: boolean;
	setShowElement: (value: boolean) => void;
	elementRef: React.RefObject<HTMLDivElement>;
};

const useCloseWhenClickOutside = ({
	showElement,
	setShowElement,
	elementRef,
}: Props) => {
	useEffect(() => {
		const checkIfClickedOutside = (e: MouseEvent) => {
			if (
				elementRef?.current &&
				!elementRef.current.contains(e.target as Node)
			) {
				setShowElement(false);
			}
		};

		document.addEventListener('click', checkIfClickedOutside);

		return () => {
			document.removeEventListener('click', checkIfClickedOutside);
		};
	}, [showElement, setShowElement, elementRef]);

	return null;
};

export { useCloseWhenClickOutside };
