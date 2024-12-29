import { Theme } from '@gravity-ui/uikit';
import { createEvent, createStore } from 'effector';

export const DARK: Theme = 'dark';
export const LIGHT: Theme = 'light';
export const DEFAULT_THEME: Theme = DARK;

export const setTheme = createEvent<Theme>();

export const $theme = createStore<Theme>(DEFAULT_THEME).on(setTheme, (_, theme) => theme);
