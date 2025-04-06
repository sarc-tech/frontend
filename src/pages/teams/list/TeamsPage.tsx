import React, { FC, useState } from 'react';

import { DFDialog, FormApi } from '@gravity-ui/dialog-fields';
import {
  Button,
  Container,
  Table,
  spacing,
  withTableSettings,
  withTableSorting,
} from '@gravity-ui/uikit';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

import { AppRoutes } from 'app/app-router/app-routes';
import { TeamsPageModel } from 'pages/teams/list/TeamsPageModel';
import { SarcApiClient } from 'shared/api/SarcApiClient';
import { useInject } from 'shared/utils/hooks/useInject';
import { PageHeader } from 'widgets/PageHeader';
import { SideMenuState } from 'widgets/side-menu/SideMenuState';

import 'pages/teams/list/team-row.scss';

const columns = [
  { id: 'id', header: 'ID', size: 50, meta: { sort: true } },
  {
    id: 'name',
    header: 'Значение',
    size: 150,
    className: 'lineBrake',
    meta: { sort: true, name: 'name' },
  },
];

const initialSettings = [
  { id: 'id' },
  //{id: 'status_name'},
];

export const TeamsPage: FC = observer(() => {
  const navigate = useNavigate();

  const MyTable = withTableSorting(withTableSettings({ width: 200, filterable: true })(Table));
  const model = useInject(TeamsPageModel);
  const [settings, setSettings] = useState(initialSettings);
  const apiClient = useInject(SarcApiClient);

  async function onSubmit(values: FormApi<FormValues>) {
    try {
      if (values.getState().submitting) {
        await apiClient.teams.addTeam(values.getState().values);
        await model.loadTeams();
      }
    } catch {}
  }

  return (
    <SideMenuState>
      <Container>
        <PageHeader>Список отрядов</PageHeader>
        <Button
          view="action"
          type="submit"
          className={spacing({ mt: 4 })}
          onClick={() => navigate(AppRoutes.teamsAdd)}
        >
          Добавить новый отряд
        </Button>
        <MyTable
          columns={columns}
          data={model.teams}
          settings={settings}
          updateSettings={(updateSettings) => {
            setSettings(updateSettings);
            return Promise.resolve();
          }}
          onRowClick={(item) => {
            navigate(AppRoutes.team.new(item.id));
          }}
        />
      </Container>
    </SideMenuState>
  );
});

interface FormValues {
  id: string;
  name: string;
}
