import { formatDate } from '@/lib/helpers/date/formatDate';


describe('test the format date', () => {
	it('should return empty when null', () => {
		expect(formatDate(null)).toBe('');
	});
	it('should return date when is defined', () => {
		expect(formatDate('2024-03-19T02:25:56.282Z')).toBe('18/3/2024');
	});

	
});