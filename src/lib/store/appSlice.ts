import { StateCreator } from 'zustand';
import { TypeUser } from '../types/user';

export interface AppSlice {
	user: null | TypeUser;
	setUser: (user: TypeUser) => void;
	isLoading: boolean;
	setIsLoading: (isLoading: boolean) => void;
	language: string;
	setLanguage: (language: string) => void;
}

export const createAppSlice: StateCreator<AppSlice> = (set) => ({
	user: null,
	setUser: (user) => set(() => ({ user })),
	isLoading: false,
	setIsLoading: (isLoading: boolean) => set(() => ({ isLoading })),
	language: 'es',
	setLanguage: (language: string) => set(() => ({ language })),
});
