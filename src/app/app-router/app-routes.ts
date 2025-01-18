export const AppRoutes = {
  login: '/login',
  calls: '/calls',
  searchRequests: '/search-requests',
  searchRequest: {
    template: '/search-requests/:id',
    new: (id: string) => `/search-requests/${id}`,
  },
  searchRequestsadd: '/search-requests/add',
  statusesList: '/statuses',
  status: {
    template: '/statuses/:id',
    new: (id: string) => `/statuses/${id}`,
  },
  statusesAdd: '/statuses/add',
};
