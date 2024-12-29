import { FC, ReactNode } from 'react';

import { ThemeProvider } from '@gravity-ui/uikit';
import { useUnit } from 'effector-react';

import { $theme } from 'ui/components/appthemeprovider/theme';

export type AppProps = {
  children: ReactNode;
};

export const AppThemeProvider: FC<AppProps> = ({ children }) => {
  const theme = useUnit($theme);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
