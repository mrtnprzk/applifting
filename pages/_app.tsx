import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false)
  }, [])

  if (isSSR) return null;

  return (
    <>
      <Head>
        <meta name='description' content='Applifting exercise by mrtnprzk' />
        <link rel='icon' href='/favicon.ico' />
        <title>Applifting Blog</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
