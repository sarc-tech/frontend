import { FC } from 'react';

import { SideMenu } from 'ui/components/sidemenu/SideMenu';
import { Wrapper } from 'ui/pages/gravitysample/themewrapper/Wrapper';

export const GravitySamplePage: FC = () => {
  return (
    <SideMenu>
      <Wrapper />
    </SideMenu>
  );
};
