import { FC } from 'react';

import { Button, Container } from '@gravity-ui/uikit';
import { useNavigate } from 'react-router-dom';

import { AppRoutes } from 'app/app-router/app-routes';
import { PageHeader } from 'widgets/PageHeader';
import { SideMenu } from 'widgets/side-menu/SideMenu';

export const SearchRequestsPage: FC = () => {
  const navigate = useNavigate();
  return (
    <SideMenu>
      <Container>
        <PageHeader>Список заявок</PageHeader>

        <Button onClick={() => navigate(AppRoutes.searchRequest.new(1))}>Заявка 1</Button>
        <Button onClick={() => navigate(AppRoutes.searchRequest.new(2))}>Заявка 2</Button>
        <Button onClick={() => navigate(AppRoutes.searchRequest.new(3))}>Заявка 3</Button>
      </Container>
    </SideMenu>
  );
};
