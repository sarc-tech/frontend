import { FC, ReactNode } from 'react';

import { AsideHeader } from '@gravity-ui/navigation';
import { useUnit } from 'effector-react/effector-react.mjs';
import { useLocation, useNavigate } from 'react-router-dom';

import { AppRoutes } from 'ui/components/app-router/AppRouter';
import { GitHub } from 'ui/components/icons/GitHub';
import { $sideMenuCompact, setSideMenuCompact } from 'ui/components/side-menu/side-menu';

type Props = {
  children: ReactNode;
};

/**
 * Проверяет, соответствует ли указанный путь шаблону или является его подмаршрутом.
 *
 * @param templatePath - Шаблон пути, например, '/parent'.
 * @param currentPath - Путь, который проверяется, например, '/parent/child'.
 * @returns true, если currentPath совпадает с templatePath или начинается с него (как подмаршрут).
 *
 * @example
 * isMatchingPath('/parent', '/parent'); // true
 * isMatchingPath('/parent', '/parent/child'); // true
 * isMatchingPath('/parent', '/another'); // false
 */
const isMatchingPath = (templatePath: string, currentPath: string): boolean => {
  return currentPath === templatePath || currentPath.startsWith(`${templatePath}/`);
};

export const SideMenu: FC<Props> = (props) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const compact = useUnit($sideMenuCompact);
  return (
    <AsideHeader
      compact={compact}
      onChangeCompact={setSideMenuCompact}
      menuItems={[
        {
          id: AppRoutes.calls,
          current: isMatchingPath(AppRoutes.calls, pathname),
          onItemClick: () => navigate(AppRoutes.calls),
          title: 'Звонки',
          icon: () => <GitHub />,
        },
        {
          id: AppRoutes.searchRequests,
          current: isMatchingPath(AppRoutes.searchRequests, pathname),
          onItemClick: () => navigate(AppRoutes.searchRequests),
          title: 'Заявки',
        },
        {
          id: AppRoutes.gravitySample,
          current: isMatchingPath(AppRoutes.gravitySample, pathname),
          onItemClick: () => navigate(AppRoutes.gravitySample),
          title: 'Gravity UI Sample',
        },
      ]}
      renderContent={() => props.children}
    />
  );
};
