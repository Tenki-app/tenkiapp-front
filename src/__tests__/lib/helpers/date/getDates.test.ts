import { getCurrentDate, getTomorrowDate } from '@/lib/helpers/date/getDates';

describe('getDates helper functions', () => {
    afterEach(() => {
        jest.useRealTimers();
    });

    describe('getCurrentDate tests', () => {
        it('should return the current date in YYYY-MM-DD format based on local time', () => {
            const mockDate = new Date(2026, 9, 6, 21, 30, 0); // Oct 6, 2026
            jest.useFakeTimers();
            jest.setSystemTime(mockDate);

            expect(getCurrentDate()).toBe('2026-10-06');
        });

        it('should format single digit months and days with leading zeros', () => {
            const mockDate = new Date(2026, 0, 5, 10, 0, 0); // Jan 5, 2026
            jest.useFakeTimers();
            jest.setSystemTime(mockDate);

            expect(getCurrentDate()).toBe('2026-01-05');
        });
    });

    describe('getTomorrowDate tests', () => {
        it('should return tomorrow date in YYYY-MM-DD format', () => {
            const mockDate = new Date(2026, 9, 6, 21, 30, 0); // Oct 6, 2026
            jest.useFakeTimers();
            jest.setSystemTime(mockDate);

            expect(getTomorrowDate()).toBe('2026-10-07');
        });

        it('should correctly handle transition across month boundary', () => {
            const mockDate = new Date(2026, 0, 31, 23, 59, 0); // Jan 31, 2026
            jest.useFakeTimers();
            jest.setSystemTime(mockDate);

            expect(getTomorrowDate()).toBe('2026-02-01');
        });

        it('should correctly handle transition across year boundary', () => {
            const mockDate = new Date(2026, 11, 31, 23, 59, 0); // Dec 31, 2026
            jest.useFakeTimers();
            jest.setSystemTime(mockDate);

            expect(getTomorrowDate()).toBe('2027-01-01');
        });
    });
});
