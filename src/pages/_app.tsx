import '@/styles/reset.css';
import '@/styles/global.scss';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Noto_Sans } from 'next/font/google';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NotoSans = Noto_Sans({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>YEON LOG</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main id="container" className={NotoSans.className}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
