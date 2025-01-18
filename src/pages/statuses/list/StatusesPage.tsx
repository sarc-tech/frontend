import { FC } from 'react';

import { Table, useTable } from '@gravity-ui/table';
import type { ColumnDef } from '@gravity-ui/table/tanstack';
import { Button, Container, spacing } from '@gravity-ui/uikit';
import block from 'bem-cn-lite';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

import { AppRoutes } from 'app/app-router/app-routes';
import { StatusesPageModel } from 'pages/statuses/list/StatusesPageModel';
import { useInject } from 'shared/utils/hooks/useInject';
import { PageHeader } from 'widgets/PageHeader';
import { SideMenuState } from 'widgets/side-menu/SideMenuState';

import 'pages/statuses/list/status-row.scss';

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
        <Button
          view="action"
          type="submit"
          className={spacing({ mt: 4 })}
          onClick={() => navigate(AppRoutes.statusesAdd)}
        >
          Добавить новый статус
        </Button>
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
