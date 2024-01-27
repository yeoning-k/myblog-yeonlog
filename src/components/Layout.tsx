import { ReactNode, useState, useEffect } from 'react';
import { Noto_Sans } from 'next/font/google';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NotoSans = Noto_Sans({ subsets: ['latin'] });
const Layout = ({ children }: { children: ReactNode }) => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setIsShow(true);
  }, []);

  return (
    <div className="layout" style={{ opacity: isShow ? 1 : 0 }}>
      <Header />
      <main id="container" className={NotoSans.className}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
