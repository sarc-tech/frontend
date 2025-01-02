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
  {
    id: '8502',
    region: 'Смоленская обл.',
    full_name: 'Иванов Сергей Петрович',
    age: 65,
    time_of_lost: '05.12.2024, вечером',
    status: 'в розыске',
    create_time: '06.12.2024 в 10:20\n8502',
  },
  {
    id: '8503',
    region: 'Московская обл.',
    full_name: 'Петрова Мария Александровна',
    age: 34,
    time_of_lost: '01.11.2024, утром',
    status: 'найден, погиб',
    create_time: '02.11.2024 в 14:30\n8503',
  },
  {
    id: '8504',
    region: 'Тверская обл.',
    full_name: 'Кузнецов Дмитрий Олегович',
    age: 40,
    time_of_lost: '15.10.2024, ночью',
    status: 'новая',
    create_time: '16.10.2024 в 12:10\n8504',
  },
  {
    id: '8505',
    region: 'Псковская обл.',
    full_name: 'Сидорова Елена Николаевна',
    age: 78,
    time_of_lost: '21.11.2024, днем',
    status: 'найден, жив',
    create_time: '22.11.2024 в 18:00\n8505',
  },
  {
    id: '8506',
    region: 'Ярославская обл.',
    full_name: 'Григорьев Артем Сергеевич',
    age: 29,
    time_of_lost: '12.09.2024, вечером',
    status: 'в розыске',
    create_time: '13.09.2024 в 09:45\n8506',
  },
  {
    id: '8507',
    region: 'Ленинградская обл.',
    full_name: 'Зайцева Ольга Васильевна',
    age: 56,
    time_of_lost: '30.11.2024, утром',
    status: 'найден, жив',
    create_time: '01.12.2024 в 15:20\n8507',
  },
  {
    id: '8508',
    region: 'Калининградская обл.',
    full_name: 'Кириллов Алексей Анатольевич',
    age: 62,
    time_of_lost: '10.12.2024, ночью',
    status: 'найден, погиб',
    create_time: '11.12.2024 в 11:10\n8508',
  },
  {
    id: '8509',
    region: 'Владимирская обл.',
    full_name: 'Николаева Екатерина Павловна',
    age: 48,
    time_of_lost: '18.10.2024, днем',
    status: 'в розыске',
    create_time: '19.10.2024 в 16:30\n8509',
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
