import React, { FC, useState } from 'react';

import { Container, Table, withTableSettings, withTableSorting } from '@gravity-ui/uikit';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

import { AppRoutes } from 'app/app-router/app-routes';
import { UsersPageModel } from 'pages/users/list/UsersPageModel';
import { useInject } from 'shared/utils/hooks/useInject';
import { PageHeader } from 'widgets/PageHeader';
import { SideMenuState } from 'widgets/side-menu/SideMenuState';

import 'pages/users/list/user-row.scss';

const columns = [
  { id: 'id', header: 'ID', size: 50, meta: { sort: true } },
  {
    id: 'yandex_id',
    header: 'Яндекс ID',
    size: 150,
    meta: { sort: true },
  },
  { id: 'surname', header: 'Фамилия', size: 50, meta: { sort: true } },
  { id: 'name', header: 'Имя', size: 50, meta: { sort: true } },
  { id: 'patronymic', header: 'Отчество', size: 50, meta: { sort: true } },
  { id: 'call_sign', header: 'Позывной', size: 50, meta: { sort: true } },
  { id: 'phone', header: 'Телефон', size: 50, meta: { sort: true } },
  { id: 'telegram', header: 'telegram', size: 50, meta: { sort: true } },
  { id: 'email', header: 'email', size: 50, meta: { sort: true } },
];

const initialSettings = [
  { id: 'id' },
  //{id: 'status_name'},
];

export const UsersPage: FC = observer(() => {
  const navigate = useNavigate();

  const MyTable = withTableSorting(withTableSettings({ width: 200, filterable: true })(Table));
  const model = useInject(UsersPageModel);
  const [settings, setSettings] = useState(initialSettings);

  return (
    <SideMenuState>
      <Container>
        <PageHeader>Пользователи</PageHeader>
        <MyTable
          columns={columns}
          data={model.users}
          settings={settings}
          updateSettings={(updateSettings) => {
            setSettings(updateSettings);
            return Promise.resolve();
          }}
          onRowClick={(item) => {
            navigate(AppRoutes.users.edit(item.id));
          }}
        />
      </Container>
    </SideMenuState>
  );
});
