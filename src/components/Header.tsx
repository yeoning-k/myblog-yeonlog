/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import Link from 'next/link';

import { Roboto_Mono } from 'next/font/google';
import { motion } from 'framer-motion';

import { FiSun, FiMoon, FiGithub } from 'react-icons/fi';
import classNames from 'classnames';

import ThemeContext from '@/context/ThemeContext';
import HeaderScrollContext from '@/context/HeaderScrollContext';
import { GNB_MENU, NAVIGATION_LINK } from '@/lib/constants';
import Hamburger, { animation } from './Hamburger';

export const Roboto = Roboto_Mono({ subsets: ['latin'], weight: ['700'] });

export const GnbMenus = ({ animate = false }: { animate?: boolean }) => {
  return (
    <motion.ul
      className="header__gnb"
      variants={animate ? animation.gnb.wrap : undefined}
    >
      {GNB_MENU?.map((menu, idx) => {
        const link = NAVIGATION_LINK[menu.toLowerCase().replaceAll(' ', '')];

        return (
          <motion.li
            key={idx}
            variants={animate ? animation.gnb.item : undefined}
            whileHover={{ y: animate ? -10 : 0 }}
            whileTap={{ y: 0 }}
          >
            <Link href={link}>{menu}</Link>
          </motion.li>
        );
      })}
    </motion.ul>
  );
};

export const UtilMenus = ({ animate = false }: { animate?: boolean }) => {
  const { toggleMode, theme } = useContext(ThemeContext);

  return (
    <motion.div
      className="haeder__utils"
      variants={animate ? animation.gnb.wrap : undefined}
    >
      <motion.div
        className="utils__git"
        variants={animate ? animation.gnb.item : undefined}
      >
        <Link href="http://github.com/yeoning-k" target="_blank">
          <FiGithub />
        </Link>
      </motion.div>
      <motion.div
        className="utils__theme"
        onClick={toggleMode}
        variants={animate ? animation.gnb.item : undefined}
      >
        {theme === 'light' ? (
          <FiMoon className="utils__theme-btn" />
        ) : (
          <FiSun className="utils__theme-btn" />
        )}
      </motion.div>
    </motion.div>
  );
};

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { isFixed, isVisivle } = useContext(HeaderScrollContext);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
  }, []);

  useLayoutEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className={classNames('header', {
        'header--fix': isFixed,
        'header--hide': !isVisivle
      })}
    >
      <div className="wrap">
        <h1 className={`header__logo ${Roboto.className}`}>
          <Link href="/">yeon.log</Link>
        </h1>
        {isMobile ? (
          <Hamburger />
        ) : (
          <>
            <GnbMenus />
            <UtilMenus />
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
