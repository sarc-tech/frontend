import { FC } from 'react';

import 'reflect-metadata';

import { AppRouter } from 'app/app-router/AppRouter';
import { AppInitializer } from 'features/app-initializer/AppInitializer';
import { ToasterServiceProvider } from 'shared/toaster/ToasterServiceProvider';
import { AppThemeProvider } from 'widgets/app-theme-provider/AppThemeProvider';

import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import 'app/global-styles/globals.scss';

export const App: FC = () => {
  return (
    <AppThemeProvider>
      <ToasterServiceProvider>
        <AppInitializer>
          <AppRouter />
        </AppInitializer>
      </ToasterServiceProvider>
    </AppThemeProvider>
  );
};
