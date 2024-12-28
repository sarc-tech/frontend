import {FC} from 'react';
import {SideMenu} from 'ui/components/sidemenu/SideMenu';
import {Button} from '@gravity-ui/uikit';
import {useNavigate} from 'react-router-dom';
import {AppRoutes} from 'ui/components/approuter/AppRouter';

export const SearchRequestsPage: FC = () => {
    const navigate = useNavigate();
    return (
        <SideMenu>
            <h1>Заявки</h1>
            <Button onClick={() => navigate(AppRoutes.searchRequest.new(1))}>Заявка 1</Button>
            <Button onClick={() => navigate(AppRoutes.searchRequest.new(2))}>Заявка 2</Button>
            <Button onClick={() => navigate(AppRoutes.searchRequest.new(3))}>Заявка 3</Button>
        </SideMenu>
    );
};
