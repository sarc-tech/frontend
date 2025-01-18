export const AppRoutes = {
  login: '/login',
  calls: '/calls',
  incidents: '/incidents',
  incident: {
    template: '/incidents/:id',
    new: (id: string) => `/incidents/${id}`,
  },
  incidentAdd: '/incidents/add',
  statusesList: '/statuses',
  status: {
    template: '/statuses/:id',
    new: (id: string) => `/statuses/${id}`,
  },
  statusesAdd: '/statuses/add',
};
