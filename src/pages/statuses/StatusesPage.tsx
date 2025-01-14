import { FC } from 'react';

import { Table, useTable } from '@gravity-ui/table';
import type { ColumnDef } from '@gravity-ui/table/tanstack';
import { Container } from '@gravity-ui/uikit';
import block from 'bem-cn-lite';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

import { AppRoutes } from 'app/app-router/app-routes';
import { StatusesPageModel } from 'pages/statuses/StatusesPageModel';
import { useInject } from 'shared/utils/hooks/useInject';
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

const b = block('status-row');

export const StatusesPage: FC = observer(() => {
  const navigate = useNavigate();

  const model = useInject(StatusesPageModel);

  const table = useTable({
    columns,
    getRowId: (item) => item.id,
    data: model.statuses,
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
});
