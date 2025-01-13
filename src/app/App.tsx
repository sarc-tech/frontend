import { FC } from 'react';

import { AppRouter } from 'app/app-router/AppRouter';
import { ToasterServiceProvider } from 'features/toaster/ToasterServiceProvider';
import { AppThemeProvider } from 'widgets/app-theme-provider/AppThemeProvider';

import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import 'app/global-styles/globals.scss';

export const App: FC = () => {
  return (
    <AppThemeProvider>
      <ToasterServiceProvider>
        <AppRouter />
      </ToasterServiceProvider>
    </AppThemeProvider>
  );
};
