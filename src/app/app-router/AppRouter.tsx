import { FC } from 'react';

import { Router, RouterProvider } from 'react-router-dom';

import { useInject } from 'shared/utils/hooks/useInject';

export const AppRouter: FC = () => {
  const router = useInject(Router);
  return <RouterProvider router={router} />;
};
