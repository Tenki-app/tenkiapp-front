import { StateCreator } from 'zustand';
import { TypeTaskCategory } from '../types/tasks';

export interface TaskSlice {
	activeTaskTabFilter: TypeTaskCategory;
	setActiveTaskTabFilter: (activeTaskTabFilter: TypeTaskCategory) => void;
}

export const createTaskSlice: StateCreator<TaskSlice> = (set) => ({
	activeTaskTabFilter: 'today',
	setActiveTaskTabFilter: (activeTaskTabFilter) =>
		set(() => ({ activeTaskTabFilter })),
});
