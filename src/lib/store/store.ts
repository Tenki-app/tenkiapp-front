import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { AppSlice, createAppSlice } from './appSlice';
import { createTaskSlice, TaskSlice } from './taskSlice';

export const useAppStore = create<AppSlice & TaskSlice>()(
	devtools(
		persist(
			(...a) => ({
				...createAppSlice(...a),
				...createTaskSlice(...a),
			}),
			{
				name: 'appStore',
				storage: createJSONStorage(() => localStorage),
				version: 0,
			}
		)
	)
);
