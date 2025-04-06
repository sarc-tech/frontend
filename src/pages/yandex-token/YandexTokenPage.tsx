import { FC, useEffect } from 'react';

import { useScript } from 'shared/utils/hooks/useScript';
import { sendSuggestToken } from 'shared/utils/yandexAuth';

export const YandexTokenPage: FC = () => {
  useScript(
    'https://yastatic.net/s3/passport-sdk/autofill/v1/sdk-suggest-token-with-polyfills-latest.js',
    sendSuggestToken,
  );

  return null;
};
