import { StateCreator } from 'zustand';
import { TypeTaskCategory } from '../types/tasks';

export interface TaskSlice {
	activeTaskTagFilter: TypeTaskCategory;
	setActiveTaskTagFilter: (activeTaskTagFilter: TypeTaskCategory) => void;
}

export const createTaskSlice: StateCreator<TaskSlice> = (set) => ({
	activeTaskTagFilter: 'today',
	setActiveTaskTagFilter: (activeTaskTagFilter) =>
		set(() => ({ activeTaskTagFilter })),
});
