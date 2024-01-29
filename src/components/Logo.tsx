import Link from 'next/link';
import { Roboto_Mono } from 'next/font/google';

import styles from '@/styles/Layout.module.scss';

export const RobotoMono = Roboto_Mono({ subsets: ['latin'], weight: ['700'] });

const Logo = () => {
  return (
    <h1 className={`${styles.logo} ${RobotoMono.className}`}>
      <Link href="/">yeon.log</Link>
    </h1>
  );
};

export default Logo;
