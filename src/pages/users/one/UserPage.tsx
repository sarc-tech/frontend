import { FC, useEffect, useState } from 'react';

import { DFDialog, FormApi } from '@gravity-ui/dialog-fields';
import { Container } from '@gravity-ui/uikit';
import { useNavigate, useParams } from 'react-router-dom';

import { AppRoutes } from 'app/app-router/app-routes';
import { SarcApiClient } from 'shared/api/SarcApiClient';
import { User } from 'shared/api/generated';
import { useInject } from 'shared/utils/hooks/useInject';
import { PageHeader } from 'widgets/PageHeader';
import { SideMenuState } from 'widgets/side-menu/SideMenuState';

interface FormValues {
  id: string;
  region: string;
  fio: string;
  statusId: string;
  date: string;
}

export const UserPage: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setStatus] = useState<User>();
  const apiClient = useInject(SarcApiClient);

  useEffect(() => {
    if (id !== undefined) {
      apiClient.users.getUserById(id).then((res) => {
        setStatus(res);
      });
    }
  }, [apiClient.users, id]);

  function onSubmit(values: FormApi<FormValues>) {
    if (values.getState().submitting) {
      // apiClient.user.updateIncidents(values.getState().values);
    }
    navigate(AppRoutes.usersList);
  }
  return (
    <SideMenuState>
      <Container>
        <PageHeader>Пользователь id: {id}</PageHeader>
        <DFDialog<FormValues>
          visible={true}
          initialValues={user}
          headerProps={{
            title: 'Статус:',
          }}
          onClose={(form) => onSubmit(form)}
          onAdd={(form) => {
            form.getState();
            return Promise.resolve();
          }}
          fields={[
            {
              name: 'id',
              type: 'text',
              caption: 'id',
              tooltip: 'Номер статуса',
            },
            {
              name: 'yandex_id',
              type: 'text',
              caption: 'Яндекс ID',
              tooltip: 'Яндекс ID',
            },
            {
              name: 'surname',
              type: 'text',
              caption: 'Фамилия',
              tooltip: 'Фамилия',
            },
            {
              name: 'name',
              type: 'text',
              caption: 'Имя',
              tooltip: 'Имя',
            },
            {
              name: 'patronymic',
              type: 'text',
              caption: 'Отчество',
              tooltip: 'Отчество',
            },
            {
              name: 'call_sign',
              type: 'text',
              caption: 'Позывной',
              tooltip: 'Позывной',
            },
            {
              name: 'phone',
              type: 'text',
              caption: 'Телефон',
              tooltip: 'Телефон',
            },
            {
              name: 'telegram',
              type: 'text',
              caption: 'telegram',
              tooltip: 'telegram',
            },
            {
              name: 'email',
              type: 'text',
              caption: 'email',
              tooltip: 'email',
            },
          ]}
        />
      </Container>
    </SideMenuState>
  );
};
