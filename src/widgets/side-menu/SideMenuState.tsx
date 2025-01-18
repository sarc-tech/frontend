import { FC, ReactNode } from 'react';

import { DisplayPulse, LayoutList, LifeRing } from '@gravity-ui/icons';
import { AsideHeader, FooterItem } from '@gravity-ui/navigation';
import { Avatar } from '@gravity-ui/uikit';
import { observer } from 'mobx-react-lite';
import { useLocation, useNavigate } from 'react-router-dom';

import { AppRoutes } from 'app/app-router/app-routes';
import { ProfilePopup, useProfilePopupState } from 'widgets/side-menu/ProfilePopup';
import { sideMenuState } from 'widgets/side-menu/side-menu-store';

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

export const SideMenuState: FC<Props> = observer((props) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const profilePopupState = useProfilePopupState();

  return (
    <AsideHeader
      compact={sideMenuState.compact}
      onChangeCompact={(compact) => sideMenuState.setCompact(compact)}
      menuItems={[
        {
          id: AppRoutes.incidents,
          current: isMatchingPath(AppRoutes.incidents, pathname),
          onItemClick: () => navigate(AppRoutes.incidents),
          title: 'Заявки',
          icon: DisplayPulse,
        },
        {
          id: AppRoutes.calls,
          current: isMatchingPath(AppRoutes.calls, pathname),
          onItemClick: () => navigate(AppRoutes.calls),
          title: 'Звонки',
          icon: LayoutList,
        },
        {
          id: AppRoutes.statusesList,
          current: isMatchingPath(AppRoutes.statusesList, pathname),
          onItemClick: () => navigate(AppRoutes.statusesList),
          title: 'Статусы',
          icon: LayoutList,
        },
      ]}
      headerDecoration={true}
      renderContent={() => (
        <>
          {props.children}
          <ProfilePopup state={profilePopupState} />
        </>
      )}
      renderFooter={() => {
        return (
          <FooterItem
            compact={sideMenuState.compact}
            item={{
              id: 'exit',
              onItemClick: () => {
                profilePopupState.toggle();
              },
              title: '', // переопределяется ниже
              itemWrapper: (_, makeItem) => {
                return (
                  <div ref={profilePopupState.ref}>
                    {makeItem({
                      icon: <Avatar text={'Boris Petrov'} size="m" />,
                      title: 'Boris Petrov',
                    })}
                  </div>
                );
              },
            }}
          />
        );
      }}
    />
  );
});
