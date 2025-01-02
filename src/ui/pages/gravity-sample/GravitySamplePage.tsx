import { FC } from 'react';

import { SideMenu } from 'ui/features/side-menu/SideMenu';
import { Wrapper } from 'ui/pages/gravity-sample/theme-wrapper/Wrapper';

export const GravitySamplePage: FC = () => {
  return (
    <SideMenu>
      <Wrapper />
    </SideMenu>
  );
};
