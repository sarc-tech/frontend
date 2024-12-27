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
                    id: 'calls',
                    title: 'Звонки',
                    current: true,
                    icon: () => <GitHub />,
                },
                {
                    id: 'search-requests',
                    title: 'Заявки',
                    current: false,
                },
                {
                    id: 'gravity-ui-sample',
                    title: 'Gravity UI Sample',
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
