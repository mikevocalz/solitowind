/**
 * @type {import('next').NextConfig}
 */
const withWebpack = {
  webpack(config) {
    if (!config.resolve) {
      config.resolve = {}
    }
  config.module.rules.push({
    test: /\.(ttf|png|jpg|jpeg|svg|pdf)$/,
    loader: 'url-loader', // or directly file-loader
  })

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native': 'react-native-web',
      'react-native$': 'react-native-web',
      'react-native/Libraries/EventEmitter/RCTDeviceEventEmitter$':
        'react-native-web/dist/vendor/react-native/NativeEventEmitter/RCTDeviceEventEmitter',
      'react-native/Libraries/vendor/emitter/EventEmitter$':
        'react-native-web/dist/vendor/react-native/emitter/EventEmitter',
      'react-native/Libraries/EventEmitter/NativeEventEmitter$':
        'react-native-web/dist/vendor/react-native/NativeEventEmitter',
    }

    config.resolve.extensions = [
      '.web.js',
      '.web.jsx',
      '.web.ts',
      '.web.tsx',
      ...(config.resolve?.extensions ?? []),
    ]

    return config
  },
}

/**
 * @type {import('next').NextConfig}
 */
const withTurpopack = {
  experimental: {
    turbo: {
      resolveAlias: {
        'react-native': 'react-native-web',
        'react-native/Libraries/EventEmitter/RCTDeviceEventEmitter$':
          'react-native-web/dist/vendor/react-native/NativeEventEmitter/RCTDeviceEventEmitter',
        'react-native/Libraries/vendor/emitter/EventEmitter$':
          'react-native-web/dist/vendor/react-native/emitter/EventEmitter',
        'react-native/Libraries/EventEmitter/NativeEventEmitter$':
          'react-native-web/dist/vendor/react-native/NativeEventEmitter',
      },
      resolveExtensions: [
        '.web.js',
        '.web.jsx',
        '.web.ts',
        '.web.tsx',

        '.js',
        '.mjs',
        '.tsx',
        '.ts',
        '.jsx',
        '.json',
        '.wasm',
      ],
    },
  },
}

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  images: {
    disableStaticImages: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.fitwithpulse.ai',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'www.github.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
        port: '',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    swcMinify: true,
    externalDir: true,
  },
  transpilePackages: [
    'react-native',
    'react-native-web',
    'solito',
    'react-native-reanimated',
    'moti',
    'react-native-gesture-handler',
    '@rn-primitives/accordion',
    '@rn-primitives/alert-dialog',
    '@rn-primitives/aspect-ratio',
    '@rn-primitives/avatar',
    '@rn-primitives/checkbox',
    '@rn-primitives/collapsible',
    '@rn-primitives/context-menu',
    '@rn-primitives/dialog',
    '@rn-primitives/dropdown-menu',
    '@rn-primitives/hover-card',
    '@rn-primitives/label',
    '@rn-primitives/menubar',
    '@rn-primitives/navigation-menu',
    '@rn-primitives/popover',
    '@rn-primitives/portal',
    '@rn-primitives/progress',
    '@rn-primitives/radio-group',
    '@rn-primitives/select',
    '@rn-primitives/separator',
    '@rn-primitives/slot',
    '@rn-primitives/switch',
    '@rn-primitives/table',
    '@rn-primitives/tabs',
    '@rn-primitives/toggle',
    '@rn-primitives/toggle-group',
    '@rn-primitives/tooltip',
    'lucide-react-native',
    'react-native-svg',
    'ReactNativeSVG.web.js',
    'expo-modules-core',
    'clsx',
    'tailwind-merge',
    '@expo/html-elements',
    'nativewind',
    'react-native-css-interop',
  ],

  compiler: {
    define: {
      __DEV__: JSON.stringify(process.env.NODE_ENV !== 'production'),
    },
  },
  reactStrictMode: false, // reanimated doesn't support this on web

  ...withWebpack,
  ...withTurpopack,
}
