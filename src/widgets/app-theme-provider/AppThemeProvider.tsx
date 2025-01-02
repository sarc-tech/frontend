import { FC, ReactNode } from 'react';

import { ThemeProvider } from '@gravity-ui/uikit';

import { useAppThemeStore } from 'widgets/app-theme-provider/app-theme-store';

export type AppProps = {
  children: ReactNode;
};

export const AppThemeProvider: FC<AppProps> = ({ children }) => {
  const themeState = useAppThemeStore();
  return <ThemeProvider theme={themeState.theme}>{children}</ThemeProvider>;
};
