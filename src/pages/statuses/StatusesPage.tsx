import { FC, useState } from 'react';

import { Table, useTable } from '@gravity-ui/table';
import type { ColumnDef } from '@gravity-ui/table/tanstack';
import { Container, useToaster } from '@gravity-ui/uikit';
import block from 'bem-cn-lite';
import { useNavigate } from 'react-router-dom';

import { AppRoutes } from 'app/app-router/app-routes';
import { apiClient } from 'shared/api/ApiClient';
import { ApiError, Status } from 'shared/api/generated';
import { errorTracker } from 'shared/error-reporter/ErrorReporter';
import { useEffectAsync } from 'shared/utils/hooks/useEffectAsync';
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

export const StatusesPage: FC = () => {
  const navigate = useNavigate();

  const [statuses, setStatuses] = useState<Status[]>([]);
  const toaster = useToaster();

  useEffectAsync(async () => {
    try {
      const statusesResponse = await apiClient.statuses.getStatuses();
      setStatuses(statusesResponse.data);
    } catch (error) {
      if (error instanceof ApiError) {
        toaster.add({
          name: `error-server-response-${error.status}`,
          title: 'Некорректный ответ от сервера',
          content: `HTTP ${error.status} ${error.statusText}`,
          theme: 'danger',
        });
      } else {
        const errorDescription = String(error);
        toaster.add({
          name: `unknown-error:${errorDescription}`,
          title: 'Неизвестная ошибка',
          content: errorDescription,
          theme: 'danger',
        });
        errorTracker.report(error);
      }
    }
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
