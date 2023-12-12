import { AppProps } from 'next/app'
import '../styles/bootstrap.scss'
import '../styles/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
