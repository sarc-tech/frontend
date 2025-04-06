import { FC } from 'react';

import { Flex } from '@gravity-ui/uikit';
import { observer } from 'mobx-react-lite';
import { Navigate } from 'react-router';

import { AuthStore } from 'features/AuthStore';
import { LoginPageModel } from 'pages/login/LoginPageModel';
import { SarcApiClient } from 'shared/api/SarcApiClient';
import { useInject } from 'shared/utils/hooks/useInject';
import { useScript } from 'shared/utils/hooks/useScript';
import { initYandexAuth } from 'shared/utils/yandexAuth';

export const LoginPage: FC = observer(() => {
  useInject(LoginPageModel);
  const authStore = useInject(AuthStore);
  const apiClient = useInject(SarcApiClient);

  useScript(
    'https://yastatic.net/s3/passport-sdk/autofill/v1/sdk-suggest-with-polyfills-latest.js',
    () =>
      initYandexAuth(async (data) => {
        // redirect
        await apiClient.users.checkUser(data.access_token);
        authStore.setToken(data.access_token);
      }),
  );

  if (authStore.isLogged) {
    return <Navigate to="/" />;
  }

  return (
    <Flex centerContent direction="column" width="100%" minHeight="100%">
      <Flex alignItems={'flex-end'} width="100%">
        <div id={'yandexButton'}></div>
        test
      </Flex>
    </Flex>
  );
});
