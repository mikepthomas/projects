import { AppProps } from 'next/app';

import '../styles/tailwind.css';
import '../styles/bootstrap.scss';
import '../styles/index.scss';

import setupFontAwesome from '../lib/setupFontAwesome';

export default function MyApp({ Component, pageProps }: AppProps) {
  setupFontAwesome();
  return <Component {...pageProps} />;
}
