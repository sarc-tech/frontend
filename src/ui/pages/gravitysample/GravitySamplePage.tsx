import { FC } from 'react';

import { SideMenu } from 'ui/components/sidemenu/SideMenu';
import { InfoButtons } from 'ui/pages/gravitysample/infobuttons/InfoButtons';
import { Wrapper } from 'ui/pages/gravitysample/themewrapper/Wrapper';

export const GravitySamplePage: FC = () => {
  return (
    <SideMenu>
      <Wrapper>
        <InfoButtons></InfoButtons>
      </Wrapper>
    </SideMenu>
  );
};
