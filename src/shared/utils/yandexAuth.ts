// @ts-ignore

export type YandexAuthResponse = {
  access_token: string;
};

export const initYandexAuth = (onSuccess: (data: YandexAuthResponse) => void) => {
  console.log('initYandexAuth');
  // eslint-disable-next-line
  // @ts-ignore
  YaAuthSuggest.init(
    {
      client_id: process.env.REACT_APP_CLIENT_ID,
      response_type: 'token',
      redirect_uri: process.env.REACT_APP_REDIRECT_URL,
    },
    process.env.REACT_APP_API_URL,
    {
      view: 'button',
      parentId: 'yandexButton',
      buttonSize: 'm',
      buttonView: 'main',
      buttonTheme: 'light',
      buttonBorderRadius: '0',
      buttonIcon: 'ya',
    },
  )
    // eslint-disable-next-line
    // @ts-ignore
    .then(({ handler }) => handler())
    // eslint-disable-next-line
    // @ts-ignore
    .then((data) => {
      console.log('Сообщение с токеном', data);
      onSuccess(data);
    })
    // eslint-disable-next-line
    // @ts-ignore
    .catch((error) => console.log('Обработка ошибки', error));
};

export const sendSuggestToken = () => {
  // eslint-disable-next-line
  // @ts-ignore
  YaSendSuggestToken('http://localhost:3010', {
    // eslint-disable-line
    flag: true,
  });
};
