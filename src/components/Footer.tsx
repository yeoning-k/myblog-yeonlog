import styles from '@/styles/Layout.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.footer__copyright}>
        Made by <b>yeoning</b> (c) 2024 yeoning-k all rights reserved.
      </p>
    </div>
  );
};

export default Footer;
