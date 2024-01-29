import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import { PiHamburger, PiArrowRight } from 'react-icons/pi';

import { hamburger } from '@/lib/animation';
import Logo from './Logo';
import Gnb from './Gnb';
import styles from '@/styles/Layout.module.scss';

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.hamburger}>
      <div
        className={styles.hamburger__btn}
        onClick={() => {
          document.body.style.overflow = !isOpen ? 'hidden' : 'unset';
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? <PiArrowRight /> : <PiHamburger />}
      </div>
      <motion.div
        className={styles.hamburger__menu}
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={hamburger.container}
      >
        <div className={styles.hamburger__wrap}>
          <motion.div animate={{ opacity: isOpen ? 1 : 0 }}>
            <Logo />
          </motion.div>
          <Gnb animate={true} />
        </div>
        <motion.div
          className={styles.hamburger__bg}
          variants={hamburger.background}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default Hamburger;
