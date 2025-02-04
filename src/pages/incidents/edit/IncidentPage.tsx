import { FC, useEffect, useState } from 'react';

import { DFDialog, FormApi } from '@gravity-ui/dialog-fields';
import { Container, Flex, Loader } from '@gravity-ui/uikit';
import { observer } from 'mobx-react-lite';
import { useNavigate, useParams } from 'react-router-dom';

import { AppRoutes } from 'app/app-router/app-routes';
import { useInject } from 'shared/utils/hooks/useInject';
import { MyDialog } from 'widgets/MyDialog';
import { SideMenuState } from 'widgets/side-menu/SideMenuState';

import { IncidentEditPageModel } from './IncidentPageModel';

interface FormValues {
  id: string;
  region: string;
  fio: string;
  statusId: string;
  date: string;
}

export const IncidentEditPage: FC = observer(() => {
  const navigate = useNavigate();
  const model = useInject(IncidentEditPageModel);

  if (model.incidentLoading) {
    return (
      <SideMenuState>
        <Container>
          <Flex centerContent width="100%" minHeight="100%">
            <Loader size="l" />
          </Flex>
        </Container>
      </SideMenuState>
    );
  }

  return (
    <SideMenuState>
      <Container>
        <MyDialog<FormValues>
          visible={true}
          initialValues={model.incident}
          headerProps={{
            title: 'Заявка:',
          }}
          modal={false}
          onAdd={async (form) => {
            const values = form.getState().values;
            await model.submitForm(values);
          }}
          onClose={() => {
            navigate(AppRoutes.incidents);
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
              type: 'mycontrol',
              caption: 'Дата заявки',
              tooltip: 'Дата заявки',
            },
          ]}
        />
      </Container>
    </SideMenuState>
  );
});
