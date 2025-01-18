import { Navigate } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

import { ProtectedRoute } from 'app/app-router/ProtectedRoute';
import { RouterType } from 'app/app-router/RouterType';
import { AppRoutes } from 'app/app-router/app-routes';
import { CallsPage } from 'pages/calls/CallsPage';
import { ErrorPage } from 'pages/error/ErrorPage';
import { CreateIncidentPage } from 'pages/incidents/create/CreateIncidentPage';
import { IncidentsListPage } from 'pages/incidents/list/IncidentsListPage';
import { IncidentPage } from 'pages/incidents/one/IncidentPage';
import { LoginPage } from 'pages/login/LoginPage';
import { CreateStatusPage } from 'pages/statuses/create/CreateStatusPage';
import { StatusesPage } from 'pages/statuses/list/StatusesPage';
import { StatusPage } from 'pages/statuses/one/StatusPage';

export function createRouter(): RouterType {
  return createBrowserRouter([
    {
      path: '/',
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute>
              <Navigate to={AppRoutes.incidents} />
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
          path: AppRoutes.incidents,
          element: (
            <ProtectedRoute>
              <IncidentsListPage />
            </ProtectedRoute>
          ),
        },
        {
          path: AppRoutes.incident.template,
          element: (
            <ProtectedRoute>
              <IncidentPage />
            </ProtectedRoute>
          ),
        },
        {
          path: AppRoutes.incidentAdd,
          element: (
            <ProtectedRoute>
              <CreateIncidentPage />
            </ProtectedRoute>
          ),
        },
        {
          path: AppRoutes.statusesList,
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
          path: AppRoutes.statusesAdd,
          element: (
            <ProtectedRoute>
              <CreateStatusPage />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);
}
