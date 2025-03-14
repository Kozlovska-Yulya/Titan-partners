import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Линия перед футером */}
      <div className={styles.footer__line}></div>

      {/* Логотип */}
      <div className={styles.footer__logo}>
        <Image
          src="/logo.svg"
          alt="Titan Partners Logo"
          width={204}
          height={20}
          priority
        />
      </div>

      {/* Контактная информация */}
      <div className={styles.footer__info}>
        <div className={styles.footer__email}>
          <Image src="/email.svg" alt="Email" width={24} height={24} />
          <a href="mailto:support@titanpartners.io">support@titanpartners.io</a>
        </div>
        <p className={styles.footer__copyright}>Titan Partners © 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
