import {FC, ReactNode} from 'react';
import {AsideHeader} from '@gravity-ui/navigation';
import GitHub from 'ui/components/icons/GitHub';
import {useLocation, useNavigate} from 'react-router-dom';
import {AppRoutes} from 'ui/components/approuter/AppRouter';

type Props = {
    children: ReactNode;
};

export const SideMenu: FC<Props> = (props) => {
    const {pathname} = useLocation();
    const navigate = useNavigate();
    return (
        <AsideHeader
            compact={false}
            menuItems={[
                {
                    id: AppRoutes.calls,
                    current: pathname === AppRoutes.calls,
                    onItemClick: () => navigate(AppRoutes.calls),
                    title: 'Звонки',
                    icon: () => <GitHub />,
                },
                {
                    id: AppRoutes.searchRequests,
                    current: pathname === AppRoutes.searchRequests,
                    onItemClick: () => navigate(AppRoutes.searchRequests),
                    title: 'Заявки',
                },
                {
                    id: AppRoutes.gravitySample,
                    current: pathname === AppRoutes.gravitySample,
                    onItemClick: () => navigate(AppRoutes.gravitySample),
                    title: 'Gravity UI Sample',
                },
            ]}
            renderContent={() => props.children}
        />
    );
};
