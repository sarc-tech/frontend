import { FC, useEffect, useState } from 'react';

import { Plus } from '@gravity-ui/icons';
import { Table, useTable } from '@gravity-ui/table';
import type { ColumnDef } from '@gravity-ui/table/tanstack';
import { Button, Container, Icon, spacing } from '@gravity-ui/uikit';
import block from 'bem-cn-lite';
import { useNavigate } from 'react-router-dom';

import { AppRoutes } from 'app/app-router/app-routes';
import { SarcApiClient } from 'shared/api/SarcApiClient';
import { useInject } from 'shared/utils/hooks/useInject';
import { PageHeader } from 'widgets/PageHeader';
import { SideMenuState } from 'widgets/side-menu/SideMenuState';

import 'pages/incidents/list/incident-row.scss';

interface Incident {
  id: string;
  region: string;
  fio: string;
  statusId: string;
  date: string;
}

const columns: ColumnDef<Incident>[] = [
  { accessorKey: 'id', header: 'ID', size: 50 },
  { accessorKey: 'region', header: 'Регион', size: 150 },
  { accessorKey: 'fio', header: 'ФИО', size: 200 },
  { accessorKey: 'statusId', header: 'Статус', size: 150 },
  { accessorKey: 'date', header: 'Заявка поступила', size: 200 },
];

const b = block('search-request-row');

export const IncidentsListPage: FC = () => {
  const navigate = useNavigate();

  const [searchRequests, setSearchRequests] = useState<Incident[]>([]);
  const apiClient = useInject(SarcApiClient);

  useEffect(() => {
    apiClient.incidents.getIncidents().then((res) => {
      setSearchRequests(res.data);
    });
  }, [apiClient.incidents]);

  const table = useTable({
    columns,
    getRowId: (item) => item.id,
    data: searchRequests,
  });

  return (
    <SideMenuState>
      <Container>
        <PageHeader>Список заявок</PageHeader>
        <Button
          view="action"
          className={spacing({ mb: 2 })}
          onClick={() => navigate(AppRoutes.incidentAdd)}
        >
          <Icon data={Plus} />
          Создать заявку
        </Button>
        <Table
          table={table}
          rowClassName={b()}
          onRowClick={(item) => {
            navigate(AppRoutes.incident.new(item.id));
          }}
        />
      </Container>
    </SideMenuState>
  );
};
