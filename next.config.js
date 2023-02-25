const withSass = require('@zeit/next-sass');
module.exports = {
  env: {
    NEXT_PUBLIC_API_ROOT: process.env.NEXT_PUBLIC_API_ROOT
  },
  i18n: {
    locales: ['en', 'it'],
    defaultLocale: 'it'
  }
};
