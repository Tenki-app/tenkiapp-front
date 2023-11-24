import { StateCreator } from 'zustand';
import { TypeUser } from '../types/user';
import { TypeThemeMode } from '../types/themeMode';

export interface AppSlice {
	user: null | TypeUser;
	setUser: (user: TypeUser | null) => void;
	isLoading: boolean;
	setIsLoading: (isLoading: boolean) => void;
	theme: TypeThemeMode;
	setTheme: (theme: TypeThemeMode) => void;
}

export const createAppSlice: StateCreator<AppSlice> = (set) => ({
	user: null,
	setUser: (user) => set(() => ({ user })),
	isLoading: false,
	setIsLoading: (isLoading: boolean) => set(() => ({ isLoading })),
	theme: 'light',
	setTheme: (theme) => set(() => ({ theme })),
});
