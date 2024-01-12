import '@/styles/reset.css';
import '@/styles/global.scss';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ThemeContextProvider } from '@/context/ThemeContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>YEON LOG</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
    </>
  );
}
