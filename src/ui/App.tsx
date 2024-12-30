import { FC } from 'react';

import { ToasterComponent, ToasterProvider } from '@gravity-ui/uikit';

import { AppRouter } from 'ui/components/app-router/AppRouter';
import { AppThemeProvider } from 'ui/components/app-theme-provider/AppThemeProvider';

export const App: FC = () => {
  return (
    <AppThemeProvider>
      <ToasterProvider>
        <AppRouter />
        <ToasterComponent />
      </ToasterProvider>
    </AppThemeProvider>
  );
};
