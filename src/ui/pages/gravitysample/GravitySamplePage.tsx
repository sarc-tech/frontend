import {FC} from 'react';
import {SideMenu} from 'ui/components/sidemenu/SideMenu';
import {Wrapper} from 'ui/pages/gravitysample/themewrapper/Wrapper';
import {InfoButtons} from 'ui/pages/gravitysample/infobuttons/InfoButtons';

export const GravitySamplePage: FC = () => {
    return (
        <SideMenu>
            <Wrapper>
                <InfoButtons></InfoButtons>
            </Wrapper>
        </SideMenu>
    );
};
