import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { AppSlice, createAppSlice } from './appSlice';

export const useAppStore = create<AppSlice>()(
	devtools(
		persist(
			(...a) => ({
				...createAppSlice(...a),
			}),
			{
				name: 'appStore',
				storage: createJSONStorage(() => localStorage),
				version: 0,
			}
		)
	)
);
