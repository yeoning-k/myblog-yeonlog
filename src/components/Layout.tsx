import { ReactNode } from 'react';
import { Noto_Sans_KR } from 'next/font/google';
import Header from './Header';

// const NotoSans = Noto_Sans_KR({ subsets: ['latin'] });

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <div id="container">{children}</div>
    </div>
  );
};

export default Layout;
