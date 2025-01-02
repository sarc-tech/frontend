import { FC } from 'react';

import { Wrapper } from 'pages/gravity-sample/theme-wrapper/Wrapper';
import { SideMenu } from 'widgets/side-menu/SideMenu';

export const GravitySamplePage: FC = () => {
  return (
    <SideMenu>
      <Wrapper />
    </SideMenu>
  );
};
