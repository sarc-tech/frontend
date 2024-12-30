import { FC } from 'react';

import { Moon, Sun } from '@gravity-ui/icons';
import { Button, Icon } from '@gravity-ui/uikit';
import block from 'bem-cn-lite';

import { DARK, useAppThemeStore } from 'ui/components/app-theme-provider/app-theme-store';
import { InfoButtons } from 'ui/pages/gravity-sample/info-buttons/InfoButtons';

import 'ui/pages/gravity-sample/theme-wrapper/Wrapper.scss';

const b = block('wrapper');

export const Wrapper: FC = () => {
  const themeState = useAppThemeStore();
  const isDark = themeState.theme === DARK;

  return (
    <div className={b()}>
      <div className={b('theme-button')}>
        <Button size="l" view="outlined" onClick={themeState.toggleTheme}>
          <Icon data={isDark ? Sun : Moon} />
        </Button>
      </div>
      <div className={b('layout')}>
        <div className={b('header')}>
          <div className={b('logo')}>
            <div className={b('gravity-logo', { dark: isDark })} />
            <div className={b('cra-logo')} />
          </div>
        </div>
        <div className={b('content')}>
          <InfoButtons />
        </div>
      </div>
    </div>
  );
};
