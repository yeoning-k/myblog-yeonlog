import '@/styles/globals.scss';
import Head from 'next/head';

import type { AppProps } from 'next/app';

import { ThemeContextProvider } from '@/context/ThemeContext';
import { HeaderScrollContextProvider } from '@/context/HeaderScrollContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>YEON LOG</title>
        <meta name="description" content="쪼랭이 개발자의 개발일기" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeContextProvider>
        <HeaderScrollContextProvider>
          <Component {...pageProps} />
        </HeaderScrollContextProvider>
      </ThemeContextProvider>
    </>
  );
}
