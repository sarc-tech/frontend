import { FC, useEffect, useState } from 'react';

import { Table, useTable } from '@gravity-ui/table';
import type { ColumnDef } from '@gravity-ui/table/tanstack';
import { Container } from '@gravity-ui/uikit';
import block from 'bem-cn-lite';
import { useNavigate } from 'react-router-dom';

import { AppRoutes } from 'app/app-router/app-routes';
import { Status, StatusesService } from 'shared/api/generated';
import { PageHeader } from 'widgets/PageHeader';
import { SideMenuState } from 'widgets/side-menu/SideMenuState';

import 'pages/statuses/status-row.scss';

interface Statuses {
  id: string;
  name: string;
}

const columns: ColumnDef<Statuses>[] = [
  { accessorKey: 'id', header: 'ID', size: 50 },
  { accessorKey: 'name', header: 'Значение', size: 150 },
];

/*
const statuses: Statuses[] = [
  {
    id: '8501',
    name: 'Новая',
  
  },
  {
    id: '8502',
    name: 'В работе',
  
  },
];
*/

const b = block('status-row');

export const StatusesPage: FC = () => {
  const navigate = useNavigate();

  const [statuses, setStatuses] = useState<Status[]>([]);

  useEffect(() => {
    StatusesService.getStatuses().then((res) => {
      setStatuses(res.data);
    });
  }, []);

  const table = useTable({
    columns,
    getRowId: (item) => item.id,
    data: statuses,
  });

  return (
    <SideMenuState>
      <Container>
        <PageHeader>Список статусов</PageHeader>

        <Table
          table={table}
          rowClassName={b()}
          onRowClick={(item) => {
            navigate(AppRoutes.status.new(item.id));
          }}
        />
      </Container>
    </SideMenuState>
  );
};
