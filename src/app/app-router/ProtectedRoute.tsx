import { FC, ReactNode } from 'react';

import { observer } from 'mobx-react-lite';
import { Navigate } from 'react-router';

import { AppRoutes } from 'app/app-router/app-routes';
import { AuthStore } from 'features/AuthStore';
import { useInject } from 'shared/utils/hooks/useInject';

type ProtectedRouteProps = {
  children: ReactNode;
};
export const ProtectedRoute: FC<ProtectedRouteProps> = observer(({ children }) => {
  const authStore = useInject(AuthStore);
  if (authStore.isLogged) {
    return children;
  }
  return <Navigate to={AppRoutes.login} />;
});
