import { FC } from 'react';

import { Container } from '@gravity-ui/uikit';
import { useParams } from 'react-router-dom';

import { PageHeader } from 'widgets/PageHeader';
import { SideMenuState } from 'widgets/side-menu/SideMenuState';

export const SearchRequestPage: FC = () => {
  const { id } = useParams();
  return (
    <SideMenuState>
      <Container>
        <PageHeader>Заявка id: {id}</PageHeader>
      </Container>
    </SideMenuState>
  );
};
