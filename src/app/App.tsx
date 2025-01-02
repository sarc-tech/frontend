import { FC } from 'react';

import { ToasterComponent, ToasterProvider } from '@gravity-ui/uikit';

import { AppRouter } from 'app/app-router/AppRouter';
import { AppThemeProvider } from 'widgets/app-theme-provider/AppThemeProvider';

import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import 'app/global-styles/globals.scss';

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
