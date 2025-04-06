import { FC } from 'react';

import { DFDialog, FormApi } from '@gravity-ui/dialog-fields';
import { Container } from '@gravity-ui/uikit';
import { useNavigate } from 'react-router-dom';

import { AppRoutes } from 'app/app-router/app-routes';
import { CreateTeamPageModel } from 'pages/teams/create/CreateTeamPageModel';
import { SarcApiClient } from 'shared/api/SarcApiClient';
import { useInject } from 'shared/utils/hooks/useInject';
import { SideMenuState } from 'widgets/side-menu/SideMenuState';

interface FormValues {
  id: string;
  name: string;
}

export const CreateTeamPage: FC = () => {
  const navigate = useNavigate();
  const model = useInject(CreateTeamPageModel);
  const apiClient = useInject(SarcApiClient);

  async function onSubmit(values: FormApi<FormValues>) {
    if (values.getState().submitting) {
      await apiClient.teams.addTeam(values.getState().values);
    }
    navigate(AppRoutes.teamsList);
  }

  return (
    <SideMenuState>
      <Container>
        <DFDialog<FormValues>
          visible={true}
          modal={true}
          headerProps={{
            title: 'Добавить отряд',
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
              tooltip: 'Номер отряда',
              extras: () => {
                return {
                  disabled: true,
                };
              },
            },
            {
              name: 'name',
              type: 'text',
              caption: 'Название отряда',
              tooltip: 'Название отряда',
            },
            {
              name: 'is_group',
              type: 'checkbox',
              caption: 'Это группа',
              tooltip: 'Это группа',
              extras: {
                children: 'Это группа',
              },
            },
            {
              name: 'group_id',
              type: 'select',
              caption: 'Группа отряда',
              tooltip: 'Группа отряда',
              extras: {
                width: 'max',
                placeholder: 'Выберите группу отряда',
                options: model.listTeams,
                loading: model.listTeamsLoading,
              },
            },
          ]}
        />
      </Container>
    </SideMenuState>
  );
};
