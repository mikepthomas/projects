import { DefaultSeoProps } from 'next-seo';

import { FACEBOOK_APP_ID, DOMAIN, SITE_NAME } from './lib/constants';

const config: DefaultSeoProps = {
  titleTemplate: `%s | ${SITE_NAME}`,
  canonical: DOMAIN,
  description: SITE_NAME,
  facebook: {
    appId: FACEBOOK_APP_ID,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: DOMAIN,
    siteName: SITE_NAME,
    images: [
      {
        url: 'https://raw.githubusercontent.com/mikepthomas/mikepthomas.github.io/develop/src/img/banner-sm.jpg',
      },
    ],
  },
};

export default config;
