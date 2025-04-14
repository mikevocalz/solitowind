module.exports = function (api) {
  api.cache(true)
  const plugins = [
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        blacklist: null, // DEPRECATED
        whitelist: null, // DEPRECATED
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          'solito/image': 'solito/image/expo',
          //   'better-auth/react': './node_modules/better-auth/dist/client/react/index.cjs',
          //   '@better-auth/expo/client': './node_modules/@better-auth/expo/dist/client.cjs',
        },
        extensions: ['.cjs', '.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'react-native-reanimated/plugin'
  ]

  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      'nativewind/babel',
    ],
    plugins,
  }
}