/* eslint-disable no-param-reassign */
/**
 * Примеры использования craco.config.js:
 * https://github.com/search?q=path%3Acraco.config.js&type=code
 */
// eslint-disable-next-line no-undef
module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      /**
       * InversifyJS конфликтует с source-map-loader, и разработчики InversifyJS считают, что с этим
       * не нужно ничего делать и warnings ложные. Поэтому глушим их.
       * Подробнее тут:
       * https://github.com/inversify/InversifyJS/issues/1408#issuecomment-2508274719
       */
      webpackConfig.ignoreWarnings = [/Failed to parse source map/];

      return webpackConfig;
    },
  },
  babel: {
    plugins: [
      /**
       * Причина добавления плагина: поддержка декораторов для InversifyJS,
       * т.к. в CRA декораторы отключены.
       */
      'babel-plugin-transform-typescript-metadata',
    ],
  },
};
