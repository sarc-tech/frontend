import { FC, useEffect, useState } from 'react';

import { DFDialog } from '@gravity-ui/dialog-fields';
import { Container } from '@gravity-ui/uikit';
import { useParams } from 'react-router-dom';

import { SarcApiClient } from 'shared/api/SarcApiClient';
import { Status } from 'shared/api/generated';
import { useInject } from 'shared/utils/hooks/useInject';
import { PageHeader } from 'widgets/PageHeader';
import { SideMenuState } from 'widgets/side-menu/SideMenuState';

interface FormValues {
  id: string;
  name: string;
}

export const StatusPage: FC = () => {
  const { id } = useParams();

  const [status, setStatus] = useState<Status>();
  const apiClient = useInject(SarcApiClient);

  useEffect(() => {
    if (id !== undefined) {
      apiClient.statuses.getStatusById(id).then((res) => {
        setStatus(res);
      });
    }
  }, [apiClient.statuses, id]);

  return (
    <SideMenuState>
      <Container>
        <PageHeader>Статус id: {id}</PageHeader>
        <DFDialog<FormValues>
          visible={true}
          initialValues={status}
          headerProps={{
            title: 'Статус:',
          }}
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
              name: 'name',
              type: 'text',
              caption: 'Наименование статуса',
              tooltip: 'Наименование статуса',
            },
          ]}
        />
      </Container>
    </SideMenuState>
  );
};
