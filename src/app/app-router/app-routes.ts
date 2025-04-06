export const AppRoutes = {
  login: '/login',
  calls: '/calls',
  yandexToken: '/yandex-token',
  incidents: '/incidents',
  incident: {
    template: '/incidents/:id',
    new: (id: string) => `/incidents/${id}`,
  },
  incidentAdd: '/incidents/add',
  teamsList: '/teams',
  team: {
    template: '/teams/:id',
    new: (id: string) => `/teams/${id}`,
  },
  teamsAdd: '/teams/add',
  statusesList: '/statuses',
  status: {
    template: '/statuses/:id',
    new: (id: string) => `/statuses/${id}`,
  },
  statusesAdd: '/statuses/add',
  usersList: '/users',
  users: {
    template: '/users/:id',
    edit: (id: string) => `/users/${id}`,
  },
  userEdit: '/users/edit',
};
