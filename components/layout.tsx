import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import { Navigation } from '.'

import social from '../data/social.json';

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <Navigation social={social} />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
