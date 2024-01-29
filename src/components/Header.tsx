import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import classNames from 'classnames';

import HeaderScrollContext from '@/context/HeaderScrollContext';
import Logo from './Logo';
import Gnb from './Gnb';
import Hamburger from './Hamburger';
import styles from '@/styles/Layout.module.scss';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { isFixed, isVisivle } = useContext(HeaderScrollContext);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
  }, []);

  useLayoutEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (!isMobile) document.body.style.overflow = 'unset';
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className={classNames(styles.header, {
        [styles['header--fix']]: isFixed,
        [styles['header--hide']]: !isVisivle
      })}
    >
      <div className={styles['header-wrap']}>
        <Logo />
        {isMobile ? <Hamburger /> : <Gnb />}
      </div>
    </header>
  );
};

export default Header;
