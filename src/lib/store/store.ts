import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { AppUserSlice, createAppUserSlice } from './appUser';

export const useAppStore = create<AppUserSlice>()(
    devtools(
        persist(
            (...a) => ({
                ...createAppUserSlice(...a),
            }),
            {
                name: 'appStore',
                storage: createJSONStorage(() => localStorage),
                version: 0,
            }
        )
    )
);
