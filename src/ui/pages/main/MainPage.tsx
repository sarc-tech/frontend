import {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import {Button} from '@gravity-ui/uikit';
import {AppRoutes} from 'ui/components/approuter/AppRouter';

export const MainPage: FC = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Main page</h1>
            <Button onClick={() => navigate(AppRoutes.calls)}>Открыть личный кабинет</Button>
        </div>
    );
};
