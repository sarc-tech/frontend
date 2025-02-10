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
import { StatusesPageModel } from 'pages/statuses/list/StatusesPageModel';
import { SarcApiClient } from 'shared/api/SarcApiClient';
import { useInject } from 'shared/utils/hooks/useInject';
import { PageHeader } from 'widgets/PageHeader';
import { SideMenuState } from 'widgets/side-menu/SideMenuState';

import 'pages/statuses/list/status-row.scss';

const columns = [
  { id: 'id', header: 'ID', size: 50, meta: { sort: true } },
  { id: 'name', header: 'Значение', size: 150, meta: { sort: true } },
];

const initialSettings = [
  { id: 'id' },
  //{id: 'status_name'},
];

export const StatusesPage: FC = observer(() => {
  const navigate = useNavigate();

  const MyTable = withTableSorting(withTableSettings({ width: 200, filterable: true })(Table));
  const model = useInject(StatusesPageModel);
  const [settings, setSettings] = useState(initialSettings);
  const [isModalOpen, setModalOpen] = useState(false);
  const apiClient = useInject(SarcApiClient);

  async function onSubmit(values: FormApi<FormValues>) {
    try {
      if (values.getState().submitting) {
        await apiClient.statuses.addStatus(values.getState().values);
        await model.loadStatuses();
        setModalOpen(false);
      }
    } catch {}
  }

  return (
    <SideMenuState>
      <Container>
        <PageHeader>Список статусов</PageHeader>
        <Button
          view="action"
          type="submit"
          className={spacing({ mt: 4 })}
          onClick={() => navigate(AppRoutes.statusesAdd)}
        >
          Добавить новый статус
        </Button>
        <Button
          view="action"
          type="submit"
          className={spacing({ mt: 4 })}
          onClick={() => setModalOpen(true)}
        >
          Добавить новый статус модально
        </Button>
        <MyTable
          className={'statusPageTable'}
          columns={columns}
          data={model.statuses}
          settings={settings}
          updateSettings={(updateSettings) => {
            setSettings(updateSettings);
            return Promise.resolve();
          }}
          getRowClassNames={(item: any, _: number) => {
            if (item.name.includes('s')) {
              return ['colored'];
            }
            return [];
          }}
          onRowClick={(item) => {
            navigate(AppRoutes.status.new(item.id));
          }}
        />
      </Container>

      <DFDialog<FormValues>
        visible={isModalOpen}
        modal={true}
        headerProps={{
          title: 'Добавить статус',
        }}
        onClose={() => {
          setModalOpen(false);
        }}
        onAdd={async (form) => {
          form.getState();
          await onSubmit(form);
        }}
        fields={[
          {
            name: 'id',
            type: 'text',
            caption: 'ID',
            tooltip: 'Номер статуса',
            extras: () => {
              return {
                disabled: true,
              };
            },
          },
          {
            name: 'name',
            type: 'text',
            caption: 'Название статуса',
            tooltip: 'Название статуса',
          },
        ]}
      />
    </SideMenuState>
  );
});

interface FormValues {
  id: string;
  name: string;
}
