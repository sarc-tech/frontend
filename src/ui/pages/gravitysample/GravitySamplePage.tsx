import {FC} from 'react';
import {SideMenu} from 'ui/components/sidemenu/SideMenu';
import {Wrapper} from 'ui/components/Wrapper/Wrapper';
import {InfoButtons} from 'ui/components/InfoButtons/InfoButtons';

export const GravitySamplePage: FC = () => {
    return (
        <SideMenu>
            <Wrapper>
                <InfoButtons></InfoButtons>
            </Wrapper>
        </SideMenu>
    );
};
