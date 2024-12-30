import { create } from 'zustand/react';

interface SideMenuState {
  compact: boolean;
  setCompact: (newValue: boolean) => void;
}

export const useSideMenuStore = create<SideMenuState>((set) => ({
  compact: false,
  setCompact: (newValue) => set(() => ({ compact: newValue })),
}));
