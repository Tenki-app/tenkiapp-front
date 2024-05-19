import { calculateTaskDonePercent } from "@/lib/helpers/task/calculateTaskPercent";
import { arrayTasksMock } from "@/__mocks__/tasks.mock";

import type { TypeTask } from "@/lib/types/tasks";

describe('calculateTaskPercent', () => {
    it('should return 0 when tasksArray is undefined', () => {
        expect(calculateTaskDonePercent()).toBe(0);
    });

    it('should return 0 when tasksArray is null', () => {
        expect(calculateTaskDonePercent(null)).toBe(0);
    });

    it('should return 0 when tasksArray is empty', () => {
        expect(calculateTaskDonePercent([])).toBe(0);
    });

    it('should return 50 when the half of the tasks are done', () => {
        const tasksMock = [
            { state: 'done' },
            { state: 'done' },
            { state: 'progress' },
            { state: 'pending' },
        ]

        expect(calculateTaskDonePercent(tasksMock as TypeTask[])).toBe(50);
    });

    it('should return 100 when all tasks are done', () => {
        const tasksMock = [
            { state: 'done' },
            { state: 'done' },
            { state: 'progress' },
            { state: 'pending' },
        ]

        expect(calculateTaskDonePercent(tasksMock as TypeTask[])).toBe(50);
    });

    it('should return 0 when no tasks are done', () => {
        const tasksMock = [
            { state: 'not done', },
            { state: 'not done', },
        ];
        expect(calculateTaskDonePercent(tasksMock as TypeTask[])).toBe(0);
    });
});