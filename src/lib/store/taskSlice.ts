import { StateCreator } from 'zustand';
import { TypeTaskTab } from '../types/tasks';

export interface TaskSlice {
	activeTaskTagFilter: TypeTaskTab;
	setActiveTaskTagFilter: (activeTaskTagFilter: TypeTaskTab) => void;
}

export const createTaskSlice: StateCreator<TaskSlice> = (set) => ({
	activeTaskTagFilter: 'today',
	setActiveTaskTagFilter: (activeTaskTagFilter) =>
		set(() => ({ activeTaskTagFilter })),
});
