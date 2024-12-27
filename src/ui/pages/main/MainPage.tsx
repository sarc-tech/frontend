import {AsideHeader} from '@gravity-ui/navigation';
import {FC} from 'react';
import GitHub from 'ui/components/icons/GitHub';
import {Wrapper} from 'ui/components/Wrapper/Wrapper';
import {InfoButtons} from 'ui/components/InfoButtons/InfoButtons';

export const MainPage: FC = () => {
    return (
        <AsideHeader
            compact={false}
            menuItems={[
                {
                    id: 'page1',
                    title: 'Title 1',
                    current: true,
                    icon: () => <GitHub />,
                },
                {
                    id: 'page2',
                    title: 'Title 2',
                    current: false,
                },
            ]}
            renderContent={() => {
                return (
                    <Wrapper>
                        <InfoButtons />
                    </Wrapper>
                );
            }}
        />
    );
};
