import { FC } from 'react';

import { Moon, Sun } from '@gravity-ui/icons';
import { Button, Icon } from '@gravity-ui/uikit';
import block from 'bem-cn-lite';
import { observer } from 'mobx-react-lite';

import { InfoButtons } from 'pages/gravity-sample/info-buttons/InfoButtons';
import { appTheme } from 'widgets/app-theme-provider/AppTheme';

import 'pages/gravity-sample/theme-wrapper/Wrapper.scss';

const b = block('wrapper');

export const Wrapper: FC = observer(() => {
  return (
    <div className={b()}>
      <div className={b('theme-button')}>
        <Button size="l" view="outlined" onClick={() => appTheme.toggle()}>
          <Icon data={appTheme.isDark ? Sun : Moon} />
        </Button>
      </div>
      <div className={b('layout')}>
        <div className={b('header')}>
          <div className={b('logo')}>
            <div className={b('gravity-logo', { dark: appTheme.isDark })} />
            <div className={b('cra-logo')} />
          </div>
        </div>
        <div className={b('content')}>
          <InfoButtons />
        </div>
      </div>
    </div>
  );
});
