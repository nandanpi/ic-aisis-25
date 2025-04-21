import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
   <link rel="icon" href="/favicon.png" type="image/png" /> 
      </Head>
      <Component {...pageProps} />
    </>
  )
}
