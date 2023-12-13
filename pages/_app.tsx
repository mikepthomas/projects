import { AppProps } from 'next/app';
import '../styles/bootstrap.scss';
import '../styles/index.css';

import setupFontAwesome from '../lib/setupFontAwesome';

export default function MyApp({ Component, pageProps }: AppProps) {
  setupFontAwesome();
  return <Component {...pageProps} />;
}
