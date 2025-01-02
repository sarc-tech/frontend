import { FC, ReactNode } from 'react';

import { Navigate } from 'react-router';

import { AppRoutes } from 'app/app-router/app-routes';
import { useUserLogged } from 'features/auth';

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
