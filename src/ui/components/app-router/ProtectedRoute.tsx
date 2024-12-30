import { FC, ReactNode } from 'react';

import { Navigate } from 'react-router';

import { useUserLogged } from 'stores/auth';
import { AppRoutes } from 'ui/components/app-router/app-routes';

type ProtectedRouteProps = {
  children: ReactNode;
};
export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const userLogged = useUserLogged();
  if (userLogged) {
    return children;
  }
  return <Navigate to={AppRoutes.login} />;
};
