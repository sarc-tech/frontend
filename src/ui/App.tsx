import { FC } from 'react';

import { AppRouter } from 'ui/components/approuter/AppRouter';
import { AppThemeProvider } from 'ui/components/appthemeprovider/AppThemeProvider';

export const App: FC = () => {
  return (
    <AppThemeProvider>
      <AppRouter />;
    </AppThemeProvider>
  );
};
