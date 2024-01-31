import { useContext } from 'react';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiGithub } from 'react-icons/fi';

import ThemeContext from '@/context/ThemeContext';
import { NAVIGATION, GITHUB_LINK } from '@/lib/constants';
import { hamburger } from '@/lib/animation';

import styles from '@/styles/Layout.module.scss';

const Gnb = ({ animate = false }) => {
  const { toggleMode, theme } = useContext(ThemeContext);

  return (
    <>
      <motion.div
        className={styles.gnb}
        variants={animate ? hamburger.gnb.wrap : undefined}
      >
        {NAVIGATION.map((item, idx) => {
          return (
            <motion.div
              key={`${item.name}_${idx}`}
              variants={animate ? hamburger.gnb.item : undefined}
              whileHover={{ y: animate ? -10 : 0 }}
              whileTap={{ y: 0 }}
            >
              <Link href={item.link}>{item.name}</Link>
            </motion.div>
          );
        })}
      </motion.div>
      <motion.div
        className={styles.utils}
        variants={animate ? hamburger.gnb.wrap : undefined}
      >
        <motion.div
          className={styles.utils__git}
          variants={animate ? hamburger.gnb.item : undefined}
        >
          <Link href={GITHUB_LINK}>
            <FiGithub />
          </Link>
        </motion.div>
        <motion.div
          onClick={toggleMode}
          className={styles.utils__theme}
          variants={animate ? hamburger.gnb.item : undefined}
        >
          {theme === 'light' ? <FiMoon /> : <FiSun />}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Gnb;
