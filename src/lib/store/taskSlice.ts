import { StateCreator } from 'zustand';
import { TypeTaskTab } from '../types/tasks';

export interface AppSlice {
	activeTaskTab: TypeTaskTab;
	setActiveTaskTab: (activeTaskTab: TypeTaskTab) => void;
}

export const createAppSlice: StateCreator<AppSlice> = (set) => ({
	activeTaskTab: 'today',
	setActiveTaskTab: (activeTaskTab) => set(() => ({ activeTaskTab })),
});
