import { persist } from 'zustand/middleware';
import { create } from 'zustand/react';

interface AuthState {
  token: string | null;
  setToken: (token: string | null) => void;
  clearToken: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      setToken: (token) => set({ token }),
      clearToken: () => set({ token: null }),
    }),
    {
      name: 'authToken',
      version: 1,
    },
  ),
);

/**
 * Возвращает флаг: является ли текущий пользователь залогиненым.
 */
export const useUserLogged: () => boolean = () =>
  useAuthStore((state) => {
    return state.token !== null;
  });
