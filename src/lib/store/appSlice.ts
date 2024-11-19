import { StateCreator } from 'zustand';
import { TypeUser } from '../types/user';
import { TypeThemeMode } from '../types/themeMode';
import { NavType } from '../types/navBar';
export interface AppSlice {
	user: null | TypeUser;
	setUser: (user: TypeUser | null) => void;
	isLoading: boolean;
	setIsLoading: (isLoading: boolean) => void;
	theme: TypeThemeMode;
	setTheme: (theme: TypeThemeMode) => void;
	navOption: NavType;
	setNavOption: (navOption: NavType) => void;
}

export const createAppSlice: StateCreator<AppSlice> = (set) => ({
	user: null,
	setUser: (user) => set(() => ({ user })),
	isLoading: false,
	setIsLoading: (isLoading: boolean) => set(() => ({ isLoading })),
	theme: 'light',
	setTheme: (theme) => set(() => ({ theme })),
	navOption: 'Home',
	setNavOption: (navOption) => set(() => ({ navOption })),
});
