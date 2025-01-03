import { FC, ReactNode } from 'react';

import { ThemeProvider } from '@gravity-ui/uikit';
import { observer } from 'mobx-react-lite';

import { appTheme } from 'widgets/app-theme-provider/AppTheme';

export type AppProps = {
  children: ReactNode;
};

export const AppThemeProvider: FC<AppProps> = observer(({ children }) => {
  return <ThemeProvider theme={appTheme.theme}>{children}</ThemeProvider>;
});
