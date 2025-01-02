import { FC } from 'react';

import { Container } from '@gravity-ui/uikit';
import { useParams } from 'react-router-dom';

import { PageHeader } from 'widgets/PageHeader';
import { SideMenu } from 'widgets/side-menu/SideMenu';

export const SearchRequestPage: FC = () => {
  const { id } = useParams();
  return (
    <SideMenu>
      <Container>
        <PageHeader>Заявка id: {id}</PageHeader>
      </Container>
    </SideMenu>
  );
};
