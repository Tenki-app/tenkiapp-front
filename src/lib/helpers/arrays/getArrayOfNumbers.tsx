export const getArrayOfNumbers = (length: number): string[] => {
	const arrayNumbers = Array.from({ length }, (_, index) => String(index));

	return arrayNumbers;
};
