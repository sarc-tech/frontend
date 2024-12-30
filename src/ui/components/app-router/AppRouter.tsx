import { FC } from 'react';

import { Navigate } from 'react-router';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { ProtectedRoute } from 'ui/components/app-router/ProtectedRoute';
import { AppRoutes } from 'ui/components/app-router/app-routes';
import { CallsPage } from 'ui/pages/calls/CallsPage';
import { ErrorPage } from 'ui/pages/error/ErrorPage';
import { GravitySamplePage } from 'ui/pages/gravity-sample/GravitySamplePage';
import { LoginPage } from 'ui/pages/login/LoginPage';
import { SearchRequestPage } from 'ui/pages/search-request/SearchRequestPage';
import { SearchRequestsPage } from 'ui/pages/search-requests/SearchRequestsPage';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Navigate to={AppRoutes.calls} />
          </ProtectedRoute>
        ),
      },
      {
        path: AppRoutes.login,
        element: <LoginPage />,
      },
      {
        path: AppRoutes.calls,
        element: (
          <ProtectedRoute>
            <CallsPage />
          </ProtectedRoute>
        ),
      },
      {
        path: AppRoutes.searchRequests,
        element: (
          <ProtectedRoute>
            <SearchRequestsPage />
          </ProtectedRoute>
        ),
      },
      {
        path: AppRoutes.searchRequest.template,
        element: (
          <ProtectedRoute>
            <SearchRequestPage />
          </ProtectedRoute>
        ),
      },
      {
        path: AppRoutes.gravitySample,
        element: (
          <ProtectedRoute>
            <GravitySamplePage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export const AppRouter: FC = () => {
  return <RouterProvider router={router} />;
};
