import { Theme } from '@gravity-ui/uikit';
import { create } from 'zustand/react';

export const DARK: Theme = 'dark';
export const LIGHT: Theme = 'light';
export const DEFAULT_THEME: Theme = DARK;

interface AppThemeState {
  theme: Theme;
  toggleTheme: () => void;
}

export const useAppThemeStore = create<AppThemeState>((set) => ({
  theme: DEFAULT_THEME,
  toggleTheme: () => set((state) => ({ theme: state.theme === DARK ? LIGHT : DARK })),
}));
