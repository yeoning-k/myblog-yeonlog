/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useLayoutEffect, useState } from 'react';
import Link from 'next/link';
import { Roboto_Mono } from 'next/font/google';

import { FiSun, FiMoon, FiGithub } from 'react-icons/fi';
import classNames from 'classnames';

import { GnbType } from '@/interfaces';
import { NAVIGATION_LINK } from '@/lib/constants';

const Roboto = Roboto_Mono({ subsets: ['latin'], weight: ['700'] });
const GNB_MENU: GnbType[] = ['Blog', 'Project', 'About me'];

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isVisivle, setIsVisivle] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(
    (e: Event) => {
      const currentScrollY = window.scrollY;

      setIsFixed(currentScrollY > 0 ? true : false);
      setIsVisivle(currentScrollY > lastScrollY ? false : true);
      setLastScrollY(currentScrollY);
    },
    [lastScrollY]
  );

  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

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
        <div className="header__gnb">
          {GNB_MENU?.map((menu, idx) => {
            const link =
              NAVIGATION_LINK[menu.toLowerCase().replaceAll(' ', '')];
            return (
              <Link href={link} key={idx}>
                {menu}
              </Link>
            );
          })}
        </div>
        <div className="haeder__utils">
          <div className="utils__git">
            <FiGithub />
          </div>
          <div className="utils__theme">
            <FiSun />
            {/* <FiMoon/> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
