import { FC } from 'react';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { CallsPage } from 'ui/pages/calls/CallsPage';
import { ErrorPage } from 'ui/pages/error/ErrorPage';
import { GravitySamplePage } from 'ui/pages/gravity-sample/GravitySamplePage';
import { MainPage } from 'ui/pages/main/MainPage';
import { SearchRequestPage } from 'ui/pages/search-request/SearchRequestPage';
import { SearchRequestsPage } from 'ui/pages/search-requests/SearchRequestsPage';

export const AppRoutes = {
  calls: '/calls',
  searchRequests: '/search-requests',
  searchRequest: {
    template: '/search-requests/:id',
    new: (id: number) => `/search-requests/${id}`,
  },
  gravitySample: '/gravity-sample',
};

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: AppRoutes.calls,
        element: <CallsPage />,
      },
      {
        path: AppRoutes.searchRequests,
        element: <SearchRequestsPage />,
      },
      {
        path: AppRoutes.searchRequest.template,
        element: <SearchRequestPage />,
      },
      {
        path: AppRoutes.gravitySample,
        element: <GravitySamplePage />,
      },
    ],
  },
]);

export const AppRouter: FC = () => {
  return <RouterProvider router={router} />;
};
