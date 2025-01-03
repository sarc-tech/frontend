import { FC } from 'react';

import { Wrapper } from 'pages/gravity-sample/theme-wrapper/Wrapper';
import { SideMenuState } from 'widgets/side-menu/SideMenuState';

export const GravitySamplePage: FC = () => {
  return (
    <SideMenuState>
      <Wrapper />
    </SideMenuState>
  );
};
