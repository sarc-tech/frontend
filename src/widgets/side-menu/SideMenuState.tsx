import { FC, ReactNode } from 'react';

import { DisplayPulse, LayoutList, Persons, PersonsLock } from '@gravity-ui/icons';
import { AsideHeader, FooterItem } from '@gravity-ui/navigation';
import { Avatar } from '@gravity-ui/uikit';
import { observer } from 'mobx-react-lite';
import { useLocation, useNavigate } from 'react-router-dom';

import { AppRoutes } from 'app/app-router/app-routes';
import { AuthStore } from 'features/AuthStore';
import { useInject } from 'shared/utils/hooks/useInject';
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
  const authStore = useInject(AuthStore);

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
        {
          id: AppRoutes.usersList,
          current: isMatchingPath(AppRoutes.usersList, pathname),
          onItemClick: () => navigate(AppRoutes.usersList),
          title: 'Пользователи',
          icon: Persons,
        },
        {
          id: AppRoutes.teamsList,
          current: isMatchingPath(AppRoutes.teamsList, pathname),
          onItemClick: () => navigate(AppRoutes.teamsList),
          title: 'Отряды',
          icon: PersonsLock,
        },
      ]}
      //AsideHeaderFooterItem={}
      headerDecoration={true}
      renderContent={() => (
        <>
          {props.children}
          <ProfilePopup state={profilePopupState} />
        </>
      )}
      renderFooter={() => {
        return (
          <>
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
                        icon: (
                          <Avatar
                            text={authStore.loggedUser?.name + ' ' + authStore.loggedUser?.surname}
                            size="m"
                          />
                        ),
                        title: authStore.loggedUser?.name + ' ' + authStore.loggedUser?.surname,
                      })}
                    </div>
                  );
                },
              }}
            />
          </>
        );
      }}
    />
  );
});
