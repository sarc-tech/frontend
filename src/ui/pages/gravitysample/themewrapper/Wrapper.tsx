import { FC } from 'react';

import { Moon, Sun } from '@gravity-ui/icons';
import { Button, Icon } from '@gravity-ui/uikit';
import block from 'bem-cn-lite';
import { useUnit } from 'effector-react';

import { $theme, DARK, LIGHT, setTheme } from 'ui/components/appthemeprovider/theme';
import { InfoButtons } from 'ui/pages/gravitysample/infobuttons/InfoButtons';

import 'ui/pages/gravitysample/themewrapper/Wrapper.scss';

const b = block('wrapper');

export const Wrapper: FC = () => {
  const theme = useUnit($theme);
  const isDark = theme === DARK;

  return (
    <div className={b()}>
      <div className={b('theme-button')}>
        <Button
          size="l"
          view="outlined"
          onClick={() => {
            setTheme(isDark ? LIGHT : DARK);
          }}
        >
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
