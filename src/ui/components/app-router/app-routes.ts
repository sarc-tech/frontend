export const AppRoutes = {
  login: '/login',
  calls: '/calls',
  searchRequests: '/search-requests',
  searchRequest: {
    template: '/search-requests/:id',
    new: (id: number) => `/search-requests/${id}`,
  },
  gravitySample: '/gravity-sample',
};
