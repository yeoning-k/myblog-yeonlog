import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <div id="container">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
