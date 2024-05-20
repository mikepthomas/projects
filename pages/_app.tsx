import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { GoogleAnalytics } from 'nextjs-google-analytics';

import SEO from '../next-seo.config';
import { GA_MEASUREMENT_ID } from '../lib/constants';

import '../styles/tailwind.css';
import '../styles/bootstrap.scss';
import '../styles/index.scss';

import setupFontAwesome from '../lib/setupFontAwesome';

export default function MyApp({ Component, pageProps }: AppProps) {
  setupFontAwesome();
  return (
    <>
      <GoogleAnalytics gaMeasurementId={GA_MEASUREMENT_ID} trackPageViews />
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}
