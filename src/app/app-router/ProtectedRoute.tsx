import { FC, ReactNode } from 'react';

import { observer } from 'mobx-react-lite';
import { Navigate } from 'react-router';

import { AppRoutes } from 'app/app-router/app-routes';
import { authStore } from 'features/AuthStore';

type ProtectedRouteProps = {
  children: ReactNode;
};
export const ProtectedRoute: FC<ProtectedRouteProps> = observer(({ children }) => {
  if (authStore.isLogged) {
    return children;
  }
  return <Navigate to={AppRoutes.login} />;
});
