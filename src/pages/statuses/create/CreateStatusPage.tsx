import { FC } from 'react';

import { DFDialog, FormApi } from '@gravity-ui/dialog-fields';
import { Container } from '@gravity-ui/uikit';
import { useNavigate } from 'react-router-dom';

import { AppRoutes } from 'app/app-router/app-routes';
import { SarcApiClient } from 'shared/api/SarcApiClient';
import { useInject } from 'shared/utils/hooks/useInject';
import { SideMenuState } from 'widgets/side-menu/SideMenuState';

interface FormValues {
  id: string;
  name: string;
}

export const CreateStatusPage: FC = () => {
  const navigate = useNavigate();

  const apiClient = useInject(SarcApiClient);

  function onSubmit(values: FormApi<FormValues>) {
    if (values.getState().submitting) {
      apiClient.statuses.addStatus(values.getState().values);
    }
    navigate(AppRoutes.statusesList);
  }

  return (
    <SideMenuState>
      <Container>
        <DFDialog<FormValues>
          visible={true}
          modal={false}
          headerProps={{
            title: 'Добавить статус',
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
              caption: 'ID',
              tooltip: 'Номер статуса',
              extras: () => {
                return {
                  disabled: true,
                };
              },
            },
            {
              name: 'name',
              type: 'text',
              caption: 'Название статуса',
              tooltip: 'Название статуса',
            },
          ]}
        />
      </Container>
    </SideMenuState>
  );
};
