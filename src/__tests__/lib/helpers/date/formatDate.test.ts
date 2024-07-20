import { formatDate } from '@/lib/helpers/date/formatDate';


describe('test the format date', () => {
	it('should return empty when null when tasksArray is undefined', () => {
		expect(formatDate(null)).toBe('');
	});

	
});