import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "@biconomy/web3-auth/dist/src/style.css"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
