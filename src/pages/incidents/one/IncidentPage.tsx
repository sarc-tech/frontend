import { FC, useEffect, useState } from 'react';

import { DFDialog, FormApi } from '@gravity-ui/dialog-fields';
import { Container } from '@gravity-ui/uikit';
import { useNavigate, useParams } from 'react-router-dom';

import { AppRoutes } from 'app/app-router/app-routes';
import { SarcApiClient } from 'shared/api/SarcApiClient';
import { Incident } from 'shared/api/generated';
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

export const IncidentPage: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [incident, setStatus] = useState<Incident>();
  const apiClient = useInject(SarcApiClient);

  useEffect(() => {
    if (id !== undefined) {
      apiClient.incidents.getIncidentById(id).then((res) => {
        setStatus(res);
      });
    }
  }, [apiClient.incidents, id]);

  function onSubmit(values: FormApi<FormValues>) {
    if (values.getState().submitting) {
      apiClient.incidents.updateIncidents(values.getState().values);
    }
    navigate(AppRoutes.incidents);
  }
  return (
    <SideMenuState>
      <Container>
        <PageHeader>Заявка id: {id}</PageHeader>
        <DFDialog<FormValues>
          visible={true}
          initialValues={incident}
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
              name: 'region',
              type: 'text',
              caption: 'Наименование региона',
              tooltip: 'Наименование региона',
            },
            {
              name: 'fio',
              type: 'text',
              caption: 'ФИО',
              tooltip: 'ФИО БВП',
            },
            {
              name: 'statusId',
              type: 'text',
              caption: 'Статус',
              tooltip: 'Статус',
            },
            {
              name: 'date',
              type: 'text',
              caption: 'Дата заявки',
              tooltip: 'Дата заявки',
            },
          ]}
        />
      </Container>
    </SideMenuState>
  );
};
