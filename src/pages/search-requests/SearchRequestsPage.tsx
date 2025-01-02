import { FC } from 'react';

import { Table, useTable } from '@gravity-ui/table';
import type { ColumnDef } from '@gravity-ui/table/tanstack';
import { Button, Container } from '@gravity-ui/uikit';
import { useNavigate } from 'react-router-dom';

import { AppRoutes } from 'app/app-router/app-routes';
import { PageHeader } from 'widgets/PageHeader';
import { SideMenu } from 'widgets/side-menu/SideMenu';

interface SearchRequest {
  id: string;
  region: string;
  full_name: string;
  age: number;
  time_of_lost: string;
  status: string;
  create_time: string;
}

const columns: ColumnDef<SearchRequest>[] = [
  { accessorKey: 'id', header: 'ID', size: 50 },
  { accessorKey: 'region', header: 'Регион', size: 150 },
  { accessorKey: 'full_name', header: 'ФИО', size: 200 },
  { accessorKey: 'age', header: 'Возраст', size: 100 },
  { accessorKey: 'time_of_lost', header: 'Дата пропажи', size: 150 },
  { accessorKey: 'status', header: 'Статус', size: 150 },
  { accessorKey: 'create_time', header: 'Заявка поступила', size: 200 },
];

const searchRequests: SearchRequest[] = [
  {
    id: '8501',
    region: 'Брянская обл.',
    full_name: 'Тюрина Анна Ивановна',
    age: 88,
    time_of_lost: '08.10.2024, днем',
    status: 'найден, жив',
    create_time: '14.11.2024 в 17:49\n8088',
  },
];

export const SearchRequestsPage: FC = () => {
  const navigate = useNavigate();

  const table = useTable({
    columns,
    data: searchRequests,
  });

  return (
    <SideMenu>
      <Container>
        <PageHeader>Список заявок</PageHeader>

        <Table table={table} />

        <Button onClick={() => navigate(AppRoutes.searchRequest.new(1))}>Заявка 1</Button>
        <Button onClick={() => navigate(AppRoutes.searchRequest.new(2))}>Заявка 2</Button>
        <Button onClick={() => navigate(AppRoutes.searchRequest.new(3))}>Заявка 3</Button>
      </Container>
    </SideMenu>
  );
};
