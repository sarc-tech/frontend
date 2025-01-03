import { FC } from 'react';

import { Container } from '@gravity-ui/uikit';

import { PageHeader } from 'widgets/PageHeader';
import { SideMenuState } from 'widgets/side-menu/SideMenuState';

export const CallsPage: FC = () => {
  return (
    <SideMenuState>
      <Container>
        <PageHeader>Звонки</PageHeader>
        TBD
      </Container>
    </SideMenuState>
  );
};
