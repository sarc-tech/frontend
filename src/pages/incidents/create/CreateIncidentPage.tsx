import { FC } from 'react';

import { DFDialog } from '@gravity-ui/dialog-fields';
import { Container } from '@gravity-ui/uikit';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

import { AppRoutes } from 'app/app-router/app-routes';
import {
  CreateIncidentPageModel,
  FormValues,
} from 'pages/incidents/create/CreateIncidentPageModel';
import { useInject } from 'shared/utils/hooks/useInject';
import { SideMenuState } from 'widgets/side-menu/SideMenuState';

export const CreateIncidentPage: FC = observer(() => {
  const navigate = useNavigate();
  const model = useInject(CreateIncidentPageModel);

  return (
    <SideMenuState>
      <Container>
        <DFDialog<FormValues>
          visible={true}
          modal={false}
          headerProps={{
            title: 'Создание заявки',
          }}
          onAdd={async (form) => {
            const values = form.getState().values;
            await model.submitForm(values);
          }}
          footerProps={{
            propsButtonCancel: {
              onClick: () => {
                navigate(AppRoutes.incidents);
              },
            },
          }}
          fields={[
            {
              name: 'id',
              type: 'text',
              caption: 'id',
              tooltip: 'Номер заявки',
              extras: () => {
                return {
                  disabled: true,
                };
              },
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
});
