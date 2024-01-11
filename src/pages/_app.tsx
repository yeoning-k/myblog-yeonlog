import '@/styles/reset.css';
import '@/styles/global.scss';
import type { AppProps } from 'next/app';
import { Noto_Sans } from 'next/font/google';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NotoSans = Noto_Sans({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div id="container" className={NotoSans.className}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}
