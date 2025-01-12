import { FC } from 'react';

import { Navigate } from 'react-router';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { ProtectedRoute } from 'app/app-router/ProtectedRoute';
import { AppRoutes } from 'app/app-router/app-routes';
import { CallsPage } from 'pages/calls/CallsPage';
import { ErrorPage } from 'pages/error/ErrorPage';
import { GravitySamplePage } from 'pages/gravity-sample/GravitySamplePage';
import { LoginPage } from 'pages/login/LoginPage';
import { SearchRequestPage } from 'pages/search-request/SearchRequestPage';
import { SearchRequestsPage } from 'pages/search-requests/SearchRequestsPage';
import { StatusPage } from 'pages/status/StatusPage';
import { StatusesPage } from 'pages/statuses/StatusesPage';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Navigate to={AppRoutes.searchRequests} />
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
        path: AppRoutes.statuses,
        element: (
          <ProtectedRoute>
            <StatusesPage />
          </ProtectedRoute>
        ),
      },
      {
        path: AppRoutes.status.template,
        element: (
          <ProtectedRoute>
            <StatusPage />
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
