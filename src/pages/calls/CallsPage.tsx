import { FC } from 'react';

import { Container } from '@gravity-ui/uikit';

import { PageHeader } from 'widgets/PageHeader';
import { SideMenu } from 'widgets/side-menu/SideMenu';

export const CallsPage: FC = () => {
  return (
    <SideMenu>
      <Container>
        <PageHeader>Звонки</PageHeader>
        TBD
      </Container>
    </SideMenu>
  );
};
