import '../styles/globals.css'
import type { AppProps } from 'next/app' 
import Navbar from '../components/navbar/navbar.component'
import Fotter from '../components/fotter/fotter.component'
import GetInTouch from '../components/getInTouch/getInTouch.component'

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
        <Navbar/>
        <Component {...pageProps} />
        <GetInTouch/>
        <Fotter/>
      </>
    )
}
