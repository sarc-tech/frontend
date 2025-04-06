import { Navigate } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

import { ProtectedRoute } from 'app/app-router/ProtectedRoute';
import { RouterType } from 'app/app-router/RouterType';
import { AppRoutes } from 'app/app-router/app-routes';
import { CallsPage } from 'pages/calls/CallsPage';
import { ErrorPage } from 'pages/error/ErrorPage';
import { CreateIncidentPage } from 'pages/incidents/create/CreateIncidentPage';
import { IncidentEditPage } from 'pages/incidents/edit/IncidentPage';
import { IncidentsListPage } from 'pages/incidents/list/IncidentsListPage';
import { LoginPage } from 'pages/login/LoginPage';
import { CreateStatusPage } from 'pages/statuses/create/CreateStatusPage';
import { StatusesPage } from 'pages/statuses/list/StatusesPage';
import { StatusPage } from 'pages/statuses/one/StatusPage';
import { CreateTeamPage } from 'pages/teams/create/CreateTeamPage';
import { TeamsPage } from 'pages/teams/list/TeamsPage';
import { TeamPage } from 'pages/teams/one/TeamPage';
import { UsersPage } from 'pages/users/list/UsersPage';
import { UserPage } from 'pages/users/one/UserPage';
import { YandexTokenPage } from 'pages/yandex-token/YandexTokenPage';

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
          path: AppRoutes.yandexToken,
          element: <YandexTokenPage />,
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
              <IncidentEditPage />
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
          path: AppRoutes.teamsList,
          element: (
            <ProtectedRoute>
              <TeamsPage />
            </ProtectedRoute>
          ),
        },
        {
          path: AppRoutes.team.template,
          element: (
            <ProtectedRoute>
              <TeamPage />
            </ProtectedRoute>
          ),
        },
        {
          path: AppRoutes.teamsAdd,
          element: (
            <ProtectedRoute>
              <CreateTeamPage />
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
        {
          path: AppRoutes.usersList,
          element: (
            <ProtectedRoute>
              <UsersPage />
            </ProtectedRoute>
          ),
        },
        {
          path: AppRoutes.users.template,
          element: (
            <ProtectedRoute>
              <UserPage />
            </ProtectedRoute>
          ),
        },
        {
          path: AppRoutes.userEdit,
          element: (
            <ProtectedRoute>
              <UserPage />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);
}
