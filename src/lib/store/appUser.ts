import { StateCreator } from 'zustand';
import { TypeUser } from '../types/user';

export interface AppUserSlice {
    user: null | TypeUser;
    setUser: (user: TypeUser) => void;
    isLoading: boolean;
    setIsLoading: (isLoading: boolean) => void;
}

export const createAppUserSlice: StateCreator<AppUserSlice> = (set) => ({
    user: null,
    setUser: (user) => set(() => ({ user })),
    isLoading: false,
    setIsLoading: (isLoading: boolean) => set(() => ({ isLoading })),
});
