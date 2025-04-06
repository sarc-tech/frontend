import { FC, useEffect, useState } from 'react';

import { DFDialog, FormApi } from '@gravity-ui/dialog-fields';
import { Container } from '@gravity-ui/uikit';
import { useNavigate, useParams } from 'react-router-dom';

import { AppRoutes } from 'app/app-router/app-routes';
import { SarcApiClient } from 'shared/api/SarcApiClient';
import { Status } from 'shared/api/generated';
import { useInject } from 'shared/utils/hooks/useInject';
import { SideMenuState } from 'widgets/side-menu/SideMenuState';

interface FormValues {
  id: string;
  name: string;
}

export const TeamPage: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState<Status>();
  const apiClient = useInject(SarcApiClient);

  useEffect(() => {
    if (id !== undefined) {
      apiClient.teams.getTemsById(id).then((res) => {
        setStatus(res);
      });
    }
  }, [apiClient.statuses, id]);

  function onSubmit(values: FormApi<FormValues>) {
    if (values.getState().submitting) {
      apiClient.teams.updateTeam(values.getState().values);
    }
    navigate(AppRoutes.statusesList);
  }

  return (
    <SideMenuState>
      <Container>
        <DFDialog<FormValues>
          visible={true}
          modal={false}
          initialValues={status}
          headerProps={{
            title: 'Отряд',
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
              tooltip: 'Номер отряда',
            },
            {
              name: 'name',
              type: 'text',
              caption: 'Наименование отряда',
              tooltip: 'Наименование отряда',
            },
          ]}
        />
      </Container>
    </SideMenuState>
  );
};
