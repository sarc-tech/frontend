import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import {ErrorPage} from 'ui/pages/error/ErrorPage';
import {CallsPage} from 'ui/pages/calls/CallsPage';
import {SearchRequestsPage} from 'ui/pages/searchrequests/SearchRequestsPage';
import {GravitySamplePage} from 'ui/pages/gravitysample/GravitySamplePage';
import {FC} from 'react';
import {MainPage} from 'ui/pages/main/MainPage';

export const AppRoutes = {
    calls: '/calls',
    searchRequests: '/search-requests',
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
                path: AppRoutes.gravitySample,
                element: <GravitySamplePage />,
            },
        ],
    },
]);

export const AppRouter: FC = () => {
    return <RouterProvider router={router} />;
};
