import { FC } from 'react';

import { AppRouter } from 'ui/components/app-router/AppRouter';
import { AppThemeProvider } from 'ui/components/app-theme-provider/AppThemeProvider';

export const App: FC = () => {
  return (
    <AppThemeProvider>
      <AppRouter />
    </AppThemeProvider>
  );
};
