import { AppProps } from 'next/app';
import { GoogleAnalytics } from 'nextjs-google-analytics';

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
      <Component {...pageProps} />
    </>
  );
}
